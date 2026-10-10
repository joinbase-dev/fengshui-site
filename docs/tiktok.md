# TikTok videos on Home

Home shows the 6 newest videos from @aj.damrongchai as cards (Figma "Tiktok section",
405:1813). The cards come from TikTok's Display API at build time and the page
regenerates at most hourly (`revalidate` in `app/page.tsx`), so a new video appears
within about an hour of the next visit, with no redeploy.

The section picks the first source that works:

1. **Display API** (automatic): the account's 6 newest videos. Needs the account owner
   to approve the app once (below).
2. **Listed links** (by hand): the video links in `videos` in `content/tiktok.ts`, as
   cards through TikTok's public oEmbed. No login or developer app; update the links to
   change the row.
3. **Profile embed**: TikTok's own widget for the account, used when neither is set.
   It also shows the latest videos, but in TikTok's layout, not the design's cards.

## Why the API

TikTok's embeds (profile or single video) are TikTok's own widgets: they cannot be cut
to exactly six videos or drawn as the design's cards. The Display API returns the
account's videos (cover image, link, caption) as data, newest first, which is the only
automatic way to build the cards.

## One-time setup

1. Sign in at https://developers.tiktok.com with any TikTok account and create an app.
2. Add the **Login Kit** and **Display API** products, with the scopes
   `user.info.basic` and `video.list`.
3. In Login Kit, add a redirect URI on the site's domain, for example
   `https://<your domain>/`. It only has to be an https address you control; the page it
   lands on does not matter.
4. Either submit the app for review, or keep it in **Sandbox** and add
   @aj.damrongchai as a target user (Sandbox is enough, since only this one account
   logs in).
5. The account owner has to approve the app once; nobody needs their password. On
   your computer, in this repository, run

   ```bash
   TIKTOK_CLIENT_KEY=... TIKTOK_CLIENT_SECRET=... TIKTOK_REDIRECT_URI=https://<your domain>/ \
     node scripts/tiktok-auth.mjs
   ```

   It prints a link. Send it to the account owner; they open it signed in as
   @aj.damrongchai, tap Allow, and send back the address their browser lands on. Paste
   that address into the script straight away, since the code in it is short-lived.
6. In Vercel → Settings → Environment Variables, add `TIKTOK_CLIENT_KEY`,
   `TIKTOK_CLIENT_SECRET` and `TIKTOK_REFRESH_TOKEN` for Production and Preview, then
   redeploy.

The refresh token lasts a year. Run step 5 again before it expires and replace
`TIKTOK_REFRESH_TOKEN`. If it lapses, Home falls back to the profile embed on its own.

## Where the code is

- `lib/tiktok/videos.ts`: token refresh, video list and account avatar.
- `components/sections/TikTokFeed.tsx`: cards, or the embed fallback.
- `components/ui/TikTokCard.tsx`: one card.
- `content/tiktok.ts`: account, number of videos, section copy.
