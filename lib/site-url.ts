// Production URL for canonical links, sitemap and Open Graph. Set
// NEXT_PUBLIC_SITE_URL once the domain is known; until then Vercel's
// production URL is used.
const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? (vercelUrl ? `https://${vercelUrl}` : "http://localhost:3000");

// Only the production deployment is indexable; previews and local builds are not.
// SITE_INDEXABLE=true opts in when hosting somewhere other than Vercel.
export const isProduction = process.env.VERCEL_ENV === "production" || process.env.SITE_INDEXABLE === "true";
