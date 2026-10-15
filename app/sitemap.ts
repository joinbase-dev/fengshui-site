import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site-url";

// One page: the services open as overlays on it rather than as pages of their own.
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: siteUrl, changeFrequency: "monthly", priority: 1 }];
}
