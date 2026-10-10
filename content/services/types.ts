// Shape of a service detail page. Every service renders through one template
// (components/templates/ServiceDetailTemplate.tsx); a new service is a new data
// file in this folder plus one line in index.ts.

import type { StaticImageData } from "next/image";

export type PhotoAsset = {
  // null renders the design's grey image slot until the photo is exported.
  src: StaticImageData | null;
  alt: string;
};

// A photo in the hero gallery. Gallery photos keep their own proportions, so
// they need a real file; an empty alt marks the photo as decorative.
export type GalleryPhoto = {
  src: StaticImageData;
  alt: string;
};

export type ServiceHighlightContent = {
  portrait: PhotoAsset;
  background: PhotoAsset;
  title: string;
  subtitle: string;
  body: string;
  benefits: string[];
  cta: string;
};

export type ServiceLocationContent = {
  titleLines: string[];
  quoteLines: string[];
  background: PhotoAsset;
  // Two columns of two tiles; the design alternates tall and short tiles.
  columns: { title: string; body: string; photo: PhotoAsset }[][];
};

export type ServiceVideoContent = {
  title: string;
  body: string;
  // YouTube video id; the frame shows the design's empty player until it is set.
  youtubeId: string | null;
};

// Optional blocks between the intro and the consultation form, in page order.
// A page lists only the blocks its design has.
export type ServiceSection =
  | ({ type: "highlight" } & ServiceHighlightContent)
  | ({ type: "location" } & ServiceLocationContent)
  | ({ type: "video" } & ServiceVideoContent)
  | { type: "photoBand"; photo: PhotoAsset };

export type ServiceDetail = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  // Columns of the looping hero gallery, left to right. Desktop shows four,
  // tablet three, phones two, so put the strongest photos in the first columns.
  heroGallery: GalleryPhoto[][];
  intro: {
    tagline?: string;
    paragraphs: string[];
  };
  sections: ServiceSection[];
  // Photos under the consultation form.
  closingGallery?: PhotoAsset[];
};
