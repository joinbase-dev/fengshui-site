import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { seo } from "@/content/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.nameEn,
    short_name: "Fengshui Club",
    description: seo.home.description,
    lang: "th",
    start_url: "/",
    display: "browser",
    background_color: "#ffffff",
    theme_color: "#ac0805",
    icons: [
      { src: "/icon.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
