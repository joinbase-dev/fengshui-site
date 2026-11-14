import type { NextConfig } from "next";

// Only the production deployment may be indexed (lib/site-url.ts says the same for
// pages); this header also covers images and other files on previews.
const indexable = process.env.VERCEL_ENV === "production" || process.env.SITE_INDEXABLE === "true";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    // 85 for service photos, which people look at closely; 90 for the home page's
    // full-bleed backgrounds and cut-out portraits (Ohm, 2026-11-13: sharpness first);
    // 70 for blurred backdrops.
    qualities: [70, 75, 85, 90],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Content-Security-Policy", value: "frame-ancestors 'none'" },
          ...(indexable ? [] : [{ key: "X-Robots-Tag", value: "noindex, nofollow" }]),
        ],
      },
    ];
  },
};

export default nextConfig;
