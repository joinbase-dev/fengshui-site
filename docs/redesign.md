# Bringing in a new design

How the code is laid out so a redesign lands with as little rework as possible, and what
to ask for before starting.

## Where things live

| Change in the design | Where it goes |
| --- | --- |
| Colours, type scale, radii, shadows, widths, motion timing | `app/styles/tokens.css` (Tailwind `@theme`) |
| Fonts | `app/layout.tsx` (`next/font`), mapped to `--font-sans` in `tokens.css` |
| Header glass, menu panel, scroll and load-in motion | `app/styles/motion.css` |
| Copy, links, nav, social accounts | `content/site.ts` (site-wide), `content/services.ts` (service pages) |
| Which sections a page shows, and their order | `app/page.tsx`, `app/services/[slug]/page.tsx` |
| A section's layout | `components/sections/<Section>.tsx` |
| Buttons and other shared pieces | `components/ui/` |
| Images | `public/images/` (service photos in `public/images/services/`) |

Pages are a list of sections, and sections read their copy from `content/`. A new
section (for example the TikTok feed) is a new file in `components/sections/` plus one
line in the page that shows it.

## Order of work

1. Tokens first. Replace the values in `tokens.css` with the new design's styles and
   variables. Rename a token only when its meaning changes; then fix the classes that use
   it (`npm run typecheck` will not catch a missing Tailwind class, so search for it).
2. Fonts, if they change.
3. Shared pieces: header, footer, buttons.
4. Sections, one at a time, each checked at every width before moving on.
5. Remove sections and tokens the new design no longer uses.

## Checking the result

```bash
npm run build && npm run start   # one terminal
npm run screenshots              # another
```

This saves full-page screenshots of every page in the sitemap at 360, 390, 768, 1024,
1280, 1440 and 1920px plus landscape phone into `screenshots/`, ready to hold next to the
design, and fails if any page scrolls sideways. `SCREENSHOT_URL=<preview url>` runs it
against a Vercel preview. The first run needs `npx playwright-core install chromium`.

CI runs lint, typecheck and build on every pull request.

## What to ask for with the design

- The Figma link and the frame for each page at each breakpoint it was drawn for
  (desktop, tablet, mobile). Breakpoints that are not drawn get derived and flagged.
- Images at 2× their largest displayed size, exported from the source rather than
  screenshots.
- Fonts: the site uses Epilogue, with Noto Sans Thai for Thai text because Epilogue has
  no Thai glyphs. If the design uses a different Thai face, check that it is licensed for
  the web (Sukhumvit Set, used in the first design, is not).
- Final copy for every block that still has lorem ipsum.
- Hover, focus, error and empty states, if the design has them.
- Anything new that needs data: social account URLs, the form's destination, video IDs.
