// Shape of a service detail page. Every service renders through one template
// (components/templates/ServiceDetailTemplate.tsx, Figma 405:2008); a new service is
// a new data file in this folder plus one line in index.ts.

import type { StaticImageData } from "next/image";

export type PhotoAsset = {
  // null renders the design's grey image slot until the photo is exported.
  src: StaticImageData | null;
  alt: string;
};

// A tile in the hero gallery. Tiles are square crops, so any photo shape works;
// an empty alt marks the photo as decorative.
export type GalleryPhoto = {
  src: StaticImageData;
  alt: string;
};

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

// Optional blocks for a service whose design adds sections to the template. They
// render after the body copy, in order. None of the current services uses them.
export type ServiceSection =
  | ({ type: "highlight" } & ServiceHighlightContent)
  | ({ type: "location" } & ServiceLocationContent)
  | ({ type: "video" } & ServiceVideoContent)
  | { type: "photoBand"; photo: PhotoAsset };

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
  sections?: ServiceSection[];
};
