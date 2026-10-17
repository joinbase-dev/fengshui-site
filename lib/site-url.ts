// Production URL for canonical links, sitemap, Open Graph and structured data. Set
// NEXT_PUBLIC_SITE_URL to the site's domain (https://example.com, no trailing slash);
// until then Vercel's production domain is used, on previews too, so no canonical link
// ever points at a preview. Local builds fall back to localhost.
const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || (vercelUrl ? `https://${vercelUrl}` : "http://localhost:3000")
).replace(/\/+$/, "");

// Only the production deployment is indexable; previews and local builds are not.
// SITE_INDEXABLE=true opts in when hosting somewhere other than Vercel.
export const isProduction = process.env.VERCEL_ENV === "production" || process.env.SITE_INDEXABLE === "true";

// An absolute URL on the production site for a path such as "/services/sae-ki". The
// home page is the bare domain, as Next.js writes its canonical link.
export function absoluteUrl(path: string): string {
  return path === "/" ? siteUrl : `${siteUrl}${path}`;
}
