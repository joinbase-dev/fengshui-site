// Placeholder landscapes for the hero galleries until each service's real photos
// arrive. They are generated artwork, not photos of the business, so they are
// marked decorative (empty alt). To replace them for a service, set that service's
// `heroGallery` to columns of real imports (see "Service pages" in README.md).

import type { GalleryPhoto } from "./types";
import landscape01 from "@/public/images/services/placeholders/landscape-01.jpg";
import landscape02 from "@/public/images/services/placeholders/landscape-02.jpg";
import landscape03 from "@/public/images/services/placeholders/landscape-03.jpg";
import landscape04 from "@/public/images/services/placeholders/landscape-04.jpg";
import landscape05 from "@/public/images/services/placeholders/landscape-05.jpg";
import landscape06 from "@/public/images/services/placeholders/landscape-06.jpg";
import landscape07 from "@/public/images/services/placeholders/landscape-07.jpg";
import landscape08 from "@/public/images/services/placeholders/landscape-08.jpg";
import landscape09 from "@/public/images/services/placeholders/landscape-09.jpg";
import landscape10 from "@/public/images/services/placeholders/landscape-10.jpg";
import landscape11 from "@/public/images/services/placeholders/landscape-11.jpg";
import landscape12 from "@/public/images/services/placeholders/landscape-12.jpg";

const landscapes = [
  landscape01,
  landscape02,
  landscape03,
  landscape04,
  landscape05,
  landscape06,
  landscape07,
  landscape08,
  landscape09,
  landscape10,
  landscape11,
  landscape12,
].map((src): GalleryPhoto => ({ src, alt: "" }));

// Four columns of four photos, starting at a different photo per service so the
// three pages do not look identical.
export function placeholderGallery(start: number): GalleryPhoto[][] {
  return Array.from({ length: 4 }, (_, column) =>
    Array.from({ length: 4 }, (_, row) => landscapes[(start + column * 5 + row * 3) % landscapes.length]),
  );
}
