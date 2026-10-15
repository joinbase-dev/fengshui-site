# Fengshui Club Thailand: landing page

Next.js (App Router) + TypeScript + Tailwind CSS. Built from the Figma file `fengshui`
(3AyPR0DX2jx237hXQdb98h: page node 1:751, service overlay node 1:3286), which is the source of truth.

## Commands

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint
npm run typecheck
npm run build
npm run screenshots # needs a running server; see docs/redesign.md
```

## Structure

```
app/                     layout (fonts, metadata), the page, robots, sitemap, manifest, icons, OG image
app/styles/tokens.css    design tokens (colours, type scale, radii, widths, motion timing)
app/styles/motion.css    menu panel and entrance motion
app/styles/photo-album.css  the tilted photo frames of the hero and activities albums
app/styles/services.css  the services list's hover preview
app/styles/service-overlay.css  the dialog's slide-in motion and the image loop
components/sections/     page sections (Hero, Services, ServiceOverlay and its parts, Footer, …)
components/ui/           shared pieces (InfiniteImageLoop, ServiceDialog, DotField, PhotoAlbum, AlbumSlideshow, …)
content/                 all copy and links: site.ts (site-wide), services/ (one file per service page)
lib/service-overlay.ts   which service overlay is open (the ?service= address)
lib/site-url.ts          production URL and indexability
public/images/           design assets
scripts/screenshots.mjs  screenshots at every test width + horizontal-scroll check
```

## One page, with service overlays

The site is a single static page (`app/page.tsx`); the menu jumps to its sections by id. Each card
in the service list opens that service's overlay in place (Figma 1:3286): a native modal
`<dialog>` (`components/ui/ServiceDialog.tsx`) drawn as a drawer on the right, holding the title,
byline and contact icons, the infinite image loop, the service's copy as `body` blocks (`lead`,
`highlight`, `text`, `list`; see `content/services/types.ts`, all set as plain paragraphs) and the
consult link.

- **Addresses:** the open overlay is in the URL as `/?service=<slug>`, so it can be shared and
  closes with back, Escape, the close button or a click outside (`lib/service-overlay.ts`). The old
  `/services/<slug>` pages redirect there (`next.config.ts`).
- **Add a service:** copy one of the data files in `content/services/`, change its slug and content,
  and add it to the list in `content/services/index.ts`. The card, its overlay and the structured
  data pick it up.
- **Change the image loop photos:** put them in `public/images/services/<slug>/` as WebP
  (square crops, 640px, are enough for the 258px tiles at 2x), import them in the service's data
  file, and list them in `galleryColumns([...])` as `{ src, alt }`. It fills three columns of
  three tiles, wrapping round when there are fewer than nine photos. Use `alt: ""` for purely
  atmospheric photos. A service with `heroGallery: []` leaves the loop out.
- **Photo albums:** the hero album's four photos are `hero.photos` in `content/site.ts`. The
  activities album is a slideshow of `gallery.photos` plus every service photo that has `alt` text,
  starting from a random four; add photos to either list to grow it.
- **Service hover preview:** on wide screens with a mouse, hovering a service shows the first three
  photos of its `heroGallery` in place of the statement; a service with no photos keeps the statement.

Starting a redesign? See [docs/redesign.md](docs/redesign.md).

## Environment variables

See `.env.example`.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical domain for metadata, sitemap, OG. Falls back to Vercel's production URL. |
| `SITE_INDEXABLE` | `true` to allow indexing outside Vercel. On Vercel only the production deployment is indexable. |
