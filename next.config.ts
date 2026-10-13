import type { NextConfig } from "next";

// Services that had a page of their own before the site became one page.
const formerServicePages = ["feng-shui-home", "destiny-physiognomy", "sae-ki"];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    // YouTube poster frames for the service page video.
    remotePatterns: [{ protocol: "https", hostname: "i.ytimg.com", pathname: "/vi/**" }],
  },
  // The services used to be pages of their own; their old addresses now open the same
  // service's overlay on the single page.
  async redirects() {
    return formerServicePages.map((slug) => ({
      source: `/services/${slug}`,
      destination: `/?service=${slug}`,
      permanent: true,
    }));
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Content-Security-Policy", value: "frame-ancestors 'none'" },
        ],
      },
    ];
  },
};

export default nextConfig;
