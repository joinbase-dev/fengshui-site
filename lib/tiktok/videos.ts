// Latest videos from the site's TikTok account, through TikTok's Display API.
// https://developers.tiktok.com/doc/display-api-overview
//
// Needs a TikTok developer app (Login Kit + Display API, scopes user.info.basic and
// video.list) and a refresh token approved by the account owner; see docs/tiktok.md.
// Until those are set, getLatestVideos returns null and Home falls back to the links
// listed in content/tiktok.ts (lib/tiktok/oembed.ts), then to the profile embed.
//
// Home revalidates hourly (app/page.tsx), which keeps the signed cover image URLs,
// valid for a few hours, fresh.

const API = "https://open.tiktokapis.com/v2";

export type TikTokVideo = {
  id: string;
  url: string;
  cover: string;
  width: number;
  height: number;
  caption: string;
};

export type TikTokFeed = {
  avatar: string | null;
  videos: TikTokVideo[];
};

type ApiError = { code: string; message: string };

type TokenResponse = { access_token?: string; error?: string; error_description?: string };

type VideoListResponse = {
  data?: {
    videos?: {
      id: string;
      share_url?: string;
      cover_image_url?: string;
      width?: number;
      height?: number;
      title?: string;
      video_description?: string;
    }[];
  };
  error: ApiError;
};

type UserInfoResponse = {
  data?: { user?: { avatar_url?: string } };
  error: ApiError;
};

function credentials() {
  const clientKey = process.env.TIKTOK_CLIENT_KEY;
  const clientSecret = process.env.TIKTOK_CLIENT_SECRET;
  const refreshToken = process.env.TIKTOK_REFRESH_TOKEN;
  if (!clientKey || !clientSecret || !refreshToken) return null;
  return { clientKey, clientSecret, refreshToken };
}

// Access tokens last 24 hours and refresh tokens a year, so each regeneration
// trades the stored refresh token for a fresh access token.
async function accessToken(creds: NonNullable<ReturnType<typeof credentials>>) {
  const response = await fetch(`${API}/oauth/token/`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_key: creds.clientKey,
      client_secret: creds.clientSecret,
      grant_type: "refresh_token",
      refresh_token: creds.refreshToken,
    }),
  });
  const body = (await response.json()) as TokenResponse;
  if (!body.access_token) {
    throw new Error(`TikTok token refresh failed: ${body.error ?? response.status} ${body.error_description ?? ""}`);
  }
  return body.access_token;
}

async function api<T extends { error: ApiError }>(path: string, token: string, init?: RequestInit) {
  const response = await fetch(`${API}${path}`, {
    ...init,
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
  });
  const body = (await response.json()) as T;
  if (body.error.code !== "ok") {
    throw new Error(`TikTok ${path} failed: ${body.error.code} ${body.error.message}`);
  }
  return body;
}

// The account's newest videos, newest first. Returns null when the API is not set up,
// does not answer or lists nothing, so the page can still build and render.
export async function getLatestVideos(count: number): Promise<TikTokFeed | null> {
  const creds = credentials();
  if (!creds) return null;

  try {
    const token = await accessToken(creds);
    const [list, user] = await Promise.all([
      api<VideoListResponse>(
        "/video/list/?fields=id,share_url,cover_image_url,width,height,title,video_description",
        token,
        { method: "POST", body: JSON.stringify({ max_count: count }) },
      ),
      api<UserInfoResponse>("/user/info/?fields=avatar_url", token),
    ]);

    const videos = (list.data?.videos ?? [])
      .filter((video) => video.share_url && video.cover_image_url)
      .slice(0, count)
      .map((video) => ({
        id: video.id,
        url: video.share_url ?? "",
        cover: video.cover_image_url ?? "",
        width: video.width ?? 1080,
        height: video.height ?? 1920,
        caption: (video.title || video.video_description || "").trim(),
      }));

    if (videos.length === 0) return null;
    return { avatar: user.data?.user?.avatar_url ?? null, videos };
  } catch (error) {
    console.error(error);
    return null;
  }
}
