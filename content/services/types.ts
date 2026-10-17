// Shape of a service. Each one is a card in the home page's service list, the overlay
// that card opens (components/sections/ServiceOverlay.tsx) and a page of its own at
// /services/<slug> with the same content; a new service is a new data file in this
// folder plus one line in index.ts.

import type { StaticImageData } from "next/image";

// An empty alt marks the photo as decorative.
export type PhotoAsset = {
  src: StaticImageData;
  alt: string;
};

// A tile in the overlay's image loop. Tiles are square crops, so any photo shape works.
export type GalleryPhoto = PhotoAsset;

// The overlay's copy, in order (Ohm's overlay mock-ups, 2026-10-17). Each entry of
// `lines` is a line as the design breaks it; on phones they run together and wrap.
export type ServiceBodyBlock =
  // The bold opening line, set close above the text it introduces.
  | { type: "heading"; lines: string[] }
  | { type: "text"; lines: string[] }
  // A plain-text heading followed by bulleted items.
  | { type: "list"; title: string; items: string[] };

export type ServiceDetail = {
  // Names the service's page (/services/<slug>) and its overlay on the home page
  // (/?service=<slug>), so keep it stable once shared.
  slug: string;
  // Full name: the card title, the overlay and page heading, and structured data.
  title: string;
  // The lines under the title on the service card, as the design breaks them.
  summaryLines: string[];
  // The line under the overlay heading, beside the contact icons.
  byline: string;
  // The service page's title (before " | คลับฮวงจุ้ยแห่งประเทศไทย", so under about 35
  // characters) and description (under about 155), for search results and share
  // previews. Write them from the page's own copy.
  seo: { title: string; description: string };
  // The two columns of the overlay's image loop, left to right (gallery.ts lays them
  // out). Empty until the service has photos; the overlay then leaves the loop out.
  heroGallery: GalleryPhoto[][];
  body: ServiceBodyBlock[];
  // The red link at the end of the overlay, when it is not "ปรึกษาอาจารย์ดำรงชัย". It
  // still opens the club's LINE account, the only booking channel.
  cta?: string;
};
