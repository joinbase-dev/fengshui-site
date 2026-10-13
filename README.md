# Fengshui Club Thailand: landing page

Next.js (App Router) + TypeScript + Tailwind CSS. Built from the Figma frame
`Fengshui Club - Website` › `fengshui` (node 358:403), which is the source of truth.

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
app/styles/tokens.css    design tokens (colours, type scale, radii, shadows, widths, motion timing)
app/styles/motion.css    header glass, menu panel, CSS-only motion
app/styles/service-overlay.css  service overlay tokens, the dialog's motion and the image loop
components/sections/     page sections (Hero, Services, ServiceOverlay and its parts, Footer, …)
components/ui/           shared pieces (InfiniteImageLoop, ServiceDialog, DotField, button styles, …)
content/                 all copy and links: site.ts (site-wide), services/ (one file per service page)
lib/consultation/        form schema + validation, server action, delivery adapter
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
- **Fill the photo albums:** the hero album's four photos are `hero.photos` in `content/site.ts`;
  the activities album (`components/sections/Gallery.tsx`) shows empty frames until it is given
  `photos` the same way.

Starting a redesign? See [docs/redesign.md](docs/redesign.md).

## Consultation form

The form posts to a Server Action (`lib/consultation/submit.ts`) that validates on the server and
hands the request to `deliverConsultation` in `lib/consultation/deliver.ts`. That function is the
only thing to change when connecting a CRM, email service or form provider. By default it POSTs
JSON to `CONSULTATION_WEBHOOK_URL`:

```json
{ "name": "…", "birthDate": "1985-03-14", "email": "…", "phone": "…", "submittedAt": "ISO-8601" }
```

Without that variable the form shows an error message instead of pretending to succeed.

## Environment variables

See `.env.example`.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical domain for metadata, sitemap, OG. Falls back to Vercel's production URL. |
| `CONSULTATION_WEBHOOK_URL` | Where form submissions are sent. |
| `SITE_INDEXABLE` | `true` to allow indexing outside Vercel. On Vercel only the production deployment is indexable. |
