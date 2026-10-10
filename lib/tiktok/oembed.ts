import type { TikTokFeed, TikTokVideo } from "./videos";

// Cards for hand-picked videos, through TikTok's public oEmbed endpoint. No login or
// developer app is needed, only the video links in content/tiktok.ts.
// https://developers.tiktok.com/doc/embed-videos
//
// oEmbed gives a cover image and caption but no avatar, so the card keeps the
// design's plain circle. Covers are signed URLs that expire; the hourly regeneration
// of Home fetches fresh ones.

type OEmbedResponse = {
  title?: string;
  thumbnail_url?: string;
  thumbnail_width?: number;
  thumbnail_height?: number;
};

async function oembed(url: string): Promise<TikTokVideo | null> {
  try {
    const response = await fetch(`https://www.tiktok.com/oembed?url=${encodeURIComponent(url)}`);
    if (!response.ok) throw new Error(`TikTok oEmbed ${response.status} for ${url}`);
    const body = (await response.json()) as OEmbedResponse;
    if (!body.thumbnail_url) return null;
    return {
      id: url,
      url,
      cover: body.thumbnail_url,
      width: body.thumbnail_width ?? 720,
      height: body.thumbnail_height ?? 1280,
      caption: (body.title ?? "").trim(),
    };
  } catch (error) {
    console.error(error);
    return null;
  }
}

// Returns null when no links are listed or none of them resolves.
export async function getListedVideos(urls: readonly string[], count: number): Promise<TikTokFeed | null> {
  const videos = (await Promise.all(urls.slice(0, count).map(oembed))).filter(
    (video): video is TikTokVideo => video !== null,
  );
  return videos.length > 0 ? { avatar: null, videos } : null;
}
