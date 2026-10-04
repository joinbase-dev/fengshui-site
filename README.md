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
```

## Structure

```
app/                     layout (fonts, metadata), page, robots, sitemap, manifest, icons, OG image
components/sections/     Hero, ServiceList, Consultation, Footer
components/ui/           ConsultationForm (the only Client Component), SocialIcon, button styles
content/site.ts          all page copy and links
lib/consultation/        form schema + validation, server action, delivery adapter
lib/site-url.ts          production URL and indexability
public/images/           design assets exported from Figma
```

Design tokens (colours, type scale, radii, shadows) live in `app/globals.css` under `@theme`.

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
