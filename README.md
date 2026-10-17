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
app/                     layout (fonts, site-wide metadata), the home page, robots, sitemap, manifest, icons
app/services/[slug]/     each service's own page (same content as its overlay)
app/styles/tokens.css    design tokens (colours, type scale, radii, widths, motion timing)
app/styles/motion.css    menu panel and entrance motion
app/styles/photo-album.css  the tilted photo frames of the hero and activities albums
app/styles/services.css  the services list's hover preview
app/styles/service-overlay.css  the dialog's slide-in motion and the image loop
components/sections/     page sections (Hero, Services, ServiceOverlay and its parts, Footer, …)
components/ui/           shared pieces (InfiniteImageLoop, ServiceDialog, DotField, AlbumSlideshow, …)
content/                 all copy and links: site.ts (site-wide), seo.ts (search and share settings),
                         services/ (one file per service)
lib/service-overlay.ts   which service overlay is open (the ?service= address)
lib/site-url.ts          production URL and indexability
lib/metadata.ts          per-page title, description, canonical and share previews
lib/structured-data.ts   JSON-LD (club, site, founder, services, breadcrumbs)
public/og/               share images, 1200×630 (home.jpg is Ohm's; services/ from scripts/og-images.mjs)
public/images/           design assets
scripts/screenshots.mjs  screenshots at every test width + horizontal-scroll check
scripts/og-images.mjs    draws the service pages' share images
```

## One page, with service overlays

The site is a single static page (`app/page.tsx`); the menu jumps to its sections by id. Each card
in the service list opens that service's overlay in place (Figma 1:3286): a native modal
`<dialog>` (`components/ui/ServiceDialog.tsx`) drawn as a drawer on the right, holding the title,
byline and contact icons, the infinite image loop, the service's copy as `body` blocks (`lead`,
`highlight`, `text`, `list`; see `content/services/types.ts`, all set as plain paragraphs) and the
consult link.

- **Addresses:** the open overlay is in the URL as `/?service=<slug>`, so it closes with back,
  Escape, the close button or a click outside (`lib/service-overlay.ts`); that address keeps the
  home page's canonical URL. Each service also has its own server-rendered page at
  `/services/<slug>` (`app/services/[slug]/page.tsx`) with the same content, a breadcrumb and
  links to the other services. The cards link there, so search engines and new tabs get the page,
  while a plain click opens the overlay in place.
- **Add a service:** copy one of the data files in `content/services/`, change its slug, content and
  `seo` title and description, and add it to the list in `content/services/index.ts`. The card,
  overlay, page, sitemap and structured data pick it up. Then draw its share image (below).
- **Change the image loop photos:** put them in `public/images/services/<slug>/` as WebP
  (square crops, 640px, are enough for the 258px tiles at 2x), import them in the service's data
  file, and list them in `galleryColumns([...])` as `{ src, alt }`. It fills three columns of
  three tiles, wrapping round when there are fewer than nine photos. Use `alt: ""` for purely
  atmospheric photos. A service with `heroGallery: []` leaves the loop out.
- **Photo albums:** both albums are slideshows that change one frame every two seconds
  (`content/photos.ts`). The hero opens on `hero.photos` in `content/site.ts`, then mixes in the
  rest; the activities album starts from a random four of `gallery.photos` plus every service
  photo that has `alt` text. Add photos to either list to grow them.
- **Service hover preview:** on wide screens with a mouse, hovering a service shows the first three
  photos of its `heroGallery` in place of the statement; a service with no photos keeps the statement.

## SEO and share images

- Site-wide settings (names, title template, home title and description, founder, contact
  details for structured data) are in `content/seo.ts`; each service's title and description are
  its `seo` field. Write them from the page's visible copy.
- Only the Vercel Production deployment is indexable: previews and local builds send
  `noindex` (meta tag and `X-Robots-Tag`) and a `robots.txt` that disallows everything.
- Share images are static JPEGs in `public/og/`. `home.jpg` is Ohm's design. The service images
  follow it and are drawn from each page's `<h1>`: after adding a service or changing a title, run
  `npm run build && npm run start`, then `npm run og-images` in another terminal, and commit the
  JPEGs. It needs the network (Noto Sans Thai from Google Fonts) and a Chromium. Static images
  were chosen over `next/og` because its renderer stacks Thai tone marks over upper vowels
  (ที่, ปี่) incorrectly; Chromium shapes Thai properly.

Starting a redesign? See [docs/redesign.md](docs/redesign.md).

## Environment variables

See `.env.example`.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Production domain (`https://…`, no trailing slash) for canonical links, sitemap, OG and JSON-LD. Set it for Production and Preview. Falls back to Vercel's production domain. |
| `SITE_INDEXABLE` | `true` to allow indexing outside Vercel. On Vercel only the production deployment is indexable. |
