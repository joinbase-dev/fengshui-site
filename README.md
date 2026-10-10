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
app/                     layout (fonts, metadata), pages, robots, sitemap, manifest, icons, OG image
app/styles/tokens.css    design tokens (colours, type scale, radii, shadows, widths, motion timing)
app/styles/motion.css    header glass, menu panel, CSS-only motion
app/styles/hero-gallery.css  looping hero gallery on the service pages
components/sections/     page sections (Hero, Consultation, Footer, service page sections, …)
components/templates/    ServiceDetailTemplate (every /services/[slug] page)
components/ui/           shared pieces (ConsultationForm, VideoPlayer, button styles, …)
content/                 all copy and links: site.ts (site-wide), services/ (one file per service page)
lib/consultation/        form schema + validation, server action, delivery adapter
lib/site-url.ts          production URL and indexability
public/images/           design assets
scripts/screenshots.mjs  screenshots at every test width + horizontal-scroll check
```

## Service pages

Every `/services/<slug>` page renders `components/templates/ServiceDetailTemplate.tsx` from one
data file in `content/services/`: hero gallery, title and intro, the page's own sections in order
(`highlight`, `location`, `video`, `photoBand`; see `content/services/types.ts`), the consultation
form and an optional closing gallery.

- **Add a service:** copy one of the data files, change its slug and content, and add it to the
  list in `content/services/index.ts`. The route, sitemap and metadata pick it up.
- **Replace the hero gallery placeholders:** put the photos in `public/images/services/<slug>/`,
  import them in the service's data file, and set `heroGallery` to columns of
  `{ src, alt }`, left to right (desktop shows four columns, tablet three, phones two). Give every
  column at least four photos so the loop never shows a gap. Use `alt: ""` for purely atmospheric
  photos. Photos keep their own proportions; export them about 960px wide.

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
