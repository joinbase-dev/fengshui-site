// Shape of a service. Each one is a card in the home page's service list and the
// overlay that card opens (components/sections/ServiceOverlay.tsx); a new service is a
// new data file in this folder plus one line in index.ts.

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
  // Names the overlay in the address bar (/?service=<slug>), so keep it stable once
  // shared. The old /services/<slug> pages redirect there (next.config.ts).
  slug: string;
  // Full name: the card title, the overlay heading and structured data.
  title: string;
  // The overlay heading, one entry per line as the design breaks it.
  titleLines: string[];
  // The one line under the title on the service card.
  summary: string;
  // For structured data.
  description: string;
  // Columns of the looping gallery, left to right. Wide screens show more columns than
  // narrow ones, so put the strongest photos in the first columns. Empty until the
  // service has photos; the overlay then leaves the gallery out.
  heroGallery: GalleryPhoto[][];
  body: ServiceBodyBlock[];
};
