# CLAUDE.md

Guidance for Claude (and any other contributor) working in this repository.

## Project

A production marketing landing page for a feng shui business, built with Next.js and deployed to Vercel. It is a public, revenue-facing page: treat every change as something real visitors will see.

**The supplied design is the source of truth.** When the design and your instincts disagree, the design wins. When the design and this file disagree, ask.

## Stack

> Confirmed against package.json: Next.js 16.3, React 19.2, Tailwind CSS 4, TypeScript 5.

- Next.js (App Router, `app/` directory), React Server Components by default
- TypeScript in `strict` mode
- Tailwind CSS for styling, with design tokens defined once in the Tailwind config / CSS variables
- `next/font` for fonts, `next/image` for images
- Deployed on Vercel (preview deployment per PR, production from `main`)

Do not add a dependency without saying why in the PR. Prefer the platform (CSS, browser APIs, Next.js built-ins) over a library. No UI kits (shadcn, MUI, Chakra, etc.) unless the design was built from one.

## Commands

Fill in once the repo is set up. Run all of these before calling work done.

```bash
npm run dev        # local dev server
npm run lint       # ESLint
npm run typecheck  # tsc --noEmit
npm run build      # production build; must pass with zero warnings you introduced
```

## 1. Visual fidelity

The goal is that someone holding the design next to the built page cannot find a difference.

- **Read the design before writing code.** If it is a Figma file, pull exact values (spacing, sizes, colors, radii, line heights, letter spacing, shadows) from it. Do not eyeball.
- **Use the design's tokens, not approximations.** Map every color, font size, spacing step and radius in the design to a named token. If a value in the design is not on the scale, use it exactly and flag it, rather than rounding to the nearest Tailwind default.
- **Typography is exact:** family, weight, size, line height, letter spacing, text transform, and the actual copy. Do not rewrite, shorten or "improve" copy.
- **Assets come from the design.** Export images, icons and illustrations from the source. Never substitute stock photos, placeholder icons, or a similar-looking icon from a library.
- **Do not invent.** No extra sections, badges, gradients, hover effects, animations, or decorative elements that are not in the design. If something is missing (a hover state, an error state, a breakpoint), ask or propose it explicitly; do not quietly fill the gap.
- **Verify visually.** After building or changing a section, screenshot it at the design's frame widths and compare against the design side by side. Fix the differences before moving on.
- Where the design is ambiguous or internally inconsistent (two slightly different greys, spacing that differs by 1–2px between similar cards), pick the most common value, note the choice in the PR, and ask.

## 2. Responsive design

- Build mobile first. Implement each breakpoint the design provides exactly; between breakpoints, the layout must interpolate gracefully with no overflow, overlap or awkward gaps.
- If the design only provides desktop (or only mobile), derive the other from its system (same tokens, same hierarchy) and flag the derived layout for review.
- Test at minimum: 360, 390, 768, 1024, 1280, 1440 and 1920px wide, plus landscape phone. No horizontal scroll at any width.
- Use fluid type and spacing (`clamp()`) only where the design implies it; otherwise step at breakpoints.
- Touch targets are at least 44×44px on touch devices. Hover-only interactions must have a tap/focus equivalent.
- Images use `sizes` that match the real rendered width at each breakpoint.
- Respect safe-area insets on notched devices for anything fixed or full-bleed.

## 3. Clean code

- One component per file, named after what it is (`Hero.tsx`, `TestimonialCard.tsx`). Sections live in `components/sections/`, reusable pieces in `components/ui/`.
- Server Components by default. Add `"use client"` only to the smallest component that needs state, effects or browser APIs.
- Keep content (copy, lists of services, testimonials, FAQs) in typed data files or a CMS, not hard-coded deep in JSX, so copy changes do not touch layout code.
- No `any`, no non-null assertions to silence the compiler, no disabled lint rules without a comment explaining why.
- No dead code, commented-out blocks, `console.log`, or TODOs without an owner.
- Styling: Tailwind utilities with tokens from the config. No arbitrary values (`text-[17px]`) when a token exists; if you need a new one, add it to the config. No inline `style` except for truly dynamic values.
- Small, focused PRs. Match the surrounding code's naming, structure and comment density.

## 4. Performance

Targets on a mid-range mobile device over 4G (Lighthouse mobile / Vercel Speed Insights):

| Metric | Budget |
| --- | --- |
| LCP | < 2.0s |
| CLS | < 0.05 |
| INP | < 200ms |
| Lighthouse Performance | ≥ 95 |
| First-load JS | as small as possible; justify anything above ~100 KB gzipped |

- Statically render the page (SSG). No client-side data fetching for content that can be built at build time.
- `next/image` for every raster image, with explicit `width`/`height` or `fill` + a sized parent. The LCP image (usually the hero) gets `priority`; everything else lazy loads.
- Serve AVIF/WebP via Next.js; never ship an image larger than its largest rendered size ×2.
- Inline SVG icons or use a sprite; no icon font, no whole icon library for a handful of icons.
- `next/font` with `display: swap`, subset to the scripts actually used (include Thai or Chinese subsets only if the copy needs them), and preload only the weights above the fold.
- Third-party scripts (analytics, chat, booking widgets) load via `next/script` with `lazyOnload` or `afterInteractive`, never blocking render. Each one needs a reason.
- Animations use `transform` and `opacity` only. No layout-thrashing scroll listeners; use `IntersectionObserver` or CSS.
- Reserve space for anything that loads late (embeds, maps, video) to avoid layout shift.

## 5. Accessibility

Target WCAG 2.2 AA. This is a requirement, not a nice-to-have.

- Semantic HTML first: one `<h1>`, a logical heading order, landmarks (`header`, `nav`, `main`, `footer`), real `<button>` and `<a>` elements. ARIA only when no native element fits.
- Every meaningful image has descriptive `alt`; decorative images use `alt=""`.
- Text contrast is at least 4.5:1 (3:1 for large text and UI components). If the design fails contrast, flag it rather than silently changing the color.
- Everything works with the keyboard alone, in a sensible order, with a clearly visible focus style (`:focus-visible`). Include a "Skip to content" link.
- Forms: visible labels tied to inputs, clear error messages announced to screen readers, correct `type` and `autocomplete` attributes.
- Respect `prefers-reduced-motion`: disable non-essential animation and parallax.
- Set `lang` on `<html>` (and on any passage in another language).
- Check each section with a screen reader pass (VoiceOver or NVDA) and an automated check (axe / Lighthouse accessibility = 100).

## 6. SEO

- Use the Next.js Metadata API (`export const metadata` / `generateMetadata`) for title, description, canonical URL, Open Graph and Twitter cards. Set `metadataBase` to the production domain.
- Title under ~60 characters, description under ~155, both written for humans and matching the page content.
- Provide an Open Graph image (1200×630) that matches the design, via `opengraph-image` or a static file.
- Add `app/sitemap.ts` and `app/robots.ts`. Preview deployments must be `noindex`; only production is indexable.
- Add JSON-LD structured data appropriate to the business (`LocalBusiness` or `ProfessionalService`, plus `FAQPage` if there is an FAQ section). Keep it in sync with visible content.
- Real text, not text baked into images. Headings describe the content.
- Favicon, apple-touch-icon and web manifest in `app/`.
- Descriptive link text (no "click here"), and internal anchors for in-page navigation.

## 7. Avoid generic AI-generated UI

The page must look like the design, not like a template. Unless the design explicitly calls for them, do not introduce:

- Purple/blue/indigo gradients, gradient text, glowing blobs, or mesh backgrounds
- Glassmorphism, frosted cards, or heavy drop shadows on everything
- Generic icon-in-a-rounded-square feature grids with three identical cards
- Emoji as icons, sparkle (✨) motifs, or "magic" imagery
- Default Tailwind look: `rounded-2xl` + `shadow-lg` + `bg-gradient-to-r` everywhere, untouched default palette, Inter for everything
- Fade-up-on-scroll applied to every element
- Filler copy ("Unlock your potential", "Elevate your space", "Seamless", "Revolutionary") or lorem ipsum in shipped code
- Fake social proof: invented testimonials, logos, star ratings or statistics
- Stock-photo stand-ins or AI-generated imagery that is not in the design
- Centered-everything layouts when the design uses asymmetry or a grid

Before finishing any section, ask: "Would this look the same on a hundred other landing pages?" If yes, go back to the design and find what makes it specific: its type, spacing rhythm, imagery and colour, and lean on those.

Feng shui is a cultural practice; use its symbols (bagua, five elements, Chinese characters) only as the design and copy use them, and never as decorative filler.

## Workflow

1. Read the relevant part of the design and this file before starting.
2. Build the smallest piece end to end (structure, styles, responsive, a11y) rather than skeletoning everything first.
3. Self-check before declaring done:
   - [ ] Matches the design at every provided breakpoint (screenshots compared)
   - [ ] No horizontal scroll from 320px to 1920px
   - [ ] `lint`, `typecheck` and `build` pass
   - [ ] Lighthouse mobile: Performance ≥ 95, Accessibility 100, Best Practices 100, SEO 100
   - [ ] Keyboard-only and screen reader pass
   - [ ] No invented content, assets or styles
4. Open a PR with screenshots (mobile and desktop) and the Vercel preview link. Note any place you deviated from the design or had to guess, and why.

## Safety

- Never commit secrets. Use Vercel environment variables and keep `.env*` out of git (except a documented `.env.example`).
- Never push directly to `main`, change production Vercel settings, or alter DNS/domains without explicit approval.
- Ask before deleting files, rewriting history, or making large structural changes.

@AGENTS.md
