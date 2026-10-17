import type { Metadata } from "next";
import { seo, shareImage } from "@/content/seo";

type PageMetadataOptions = {
  // The page's own title; the template adds the club's name unless `absoluteTitle`.
  title: string;
  absoluteTitle?: boolean;
  description: string;
  // The page's path, which is also its canonical URL ("/" or "/services/sae-ki").
  path: string;
  image: { path: string; alt: string };
};

// A page's title, description, canonical URL and share previews. Next.js replaces a
// parent's openGraph and twitter objects rather than merging them, so each page gets
// them in full here; robots and metadataBase come from the root layout.
export function pageMetadata({ title, absoluteTitle = false, description, path, image }: PageMetadataOptions): Metadata {
  const fullTitle = absoluteTitle ? title : seo.titleTemplate.replace("%s", title);
  const images = [
    { url: image.path, width: shareImage.width, height: shareImage.height, type: shareImage.type, alt: image.alt },
  ];
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: seo.locale,
      siteName: seo.siteName,
      url: path,
      title: fullTitle,
      description,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images,
    },
  };
}
