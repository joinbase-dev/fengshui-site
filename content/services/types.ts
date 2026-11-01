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

// One of a service's photos: a square crop (src, for the card slideshow and the
// activity strip) and the whole photo (full, from Ohm's original at most 1600 wide
// and 1200 tall, for the overlay's carousel), which shows uncropped.
export type GalleryPhoto = PhotoAsset & {
  full: StaticImageData;
};

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
  // The lines under the title in the service pages' "other services" list.
  summaryLines: string[];
  // The service's card on the home page (Figma 19:1781): the Chinese eyebrow over the
  // title (when the design gives one), the summary as the design breaks its lines, and
  // the photo on the card's right, cropped as the design crops it. On phones the photo
  // sits under the copy, wide (342×191), so it has its own crop (phonePhoto), taken
  // from the same original around the same subject.
  card: { eyebrow?: string; lines: string[]; photo: PhotoAsset; phonePhoto: StaticImageData };
  // The line under the overlay heading, beside the contact icons.
  byline: string;
  // The service page's title (before " | คลับฮวงจุ้ยแห่งประเทศไทย", so under about 35
  // characters) and description (under about 155), for search results and share
  // previews. Write them from the page's own copy.
  seo: { title: string; description: string };
  // The service's photos, in the order of the overlay's carousel. Empty until the
  // service has photos; the overlay then leaves the carousel out.
  gallery: GalleryPhoto[];
  body: ServiceBodyBlock[];
  // The red link at the end of the overlay, when it is not "ปรึกษาอาจารย์ดำรงชัย". It
  // still opens the club's LINE account, the only booking channel.
  cta?: string;
};
