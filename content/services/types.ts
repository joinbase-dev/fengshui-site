// Shape of a service detail page. Every service renders through one template
// (components/templates/ServiceDetailTemplate.tsx, Figma 405:2008); a new service is
// a new data file in this folder plus one line in index.ts.

import type { StaticImageData } from "next/image";

// An empty alt marks the photo as decorative.
export type PhotoAsset = {
  src: StaticImageData;
  alt: string;
};

// A tile in the hero gallery. Tiles are square crops, so any photo shape works.
export type GalleryPhoto = PhotoAsset;

// The copy under the hero, in page order. Lines are the design's line breaks; on
// narrow screens they run together and wrap.
export type ServiceBodyBlock =
  // Large opening statement.
  | { type: "lead"; lines: string[] }
  // White text on a red band.
  | { type: "highlight"; text: string }
  | { type: "text"; lines: string[] }
  // A plain-text heading followed by dashed items.
  | { type: "list"; title: string; items: string[] };

export type ServiceDetail = {
  slug: string;
  // Full name, for metadata and structured data.
  title: string;
  // The hero heading, one entry per line as the design breaks it.
  titleLines: string[];
  metaTitle: string;
  metaDescription: string;
  // Columns of the looping hero gallery, left to right. Wide screens show more
  // columns than narrow ones, so put the strongest photos in the first columns.
  heroGallery: GalleryPhoto[][];
  body: ServiceBodyBlock[];
};
