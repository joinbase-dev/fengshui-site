// Lays a service's photos into the overlay image loop's two columns (Figma 1:3286, as
// revised 2026-10-17). Each column takes the next half of the photos, so every photo
// shows once; when the count is odd, or below the four tiles that always cover the band
// while a column slides, the second column wraps round to the first photos. A repeated
// photo keeps its alt text only the first time it appears, so screen readers do not
// hear it twice.

import type { GalleryPhoto } from "./types";

const columns = 2;
const minTiles = 2;

export function galleryColumns(photos: GalleryPhoto[]): GalleryPhoto[][] {
  const tilesPerColumn = Math.max(minTiles, Math.ceil(photos.length / columns));
  return Array.from({ length: columns }, (_, column) =>
    Array.from({ length: tilesPerColumn }, (_, row) => {
      const index = column * tilesPerColumn + row;
      const photo = photos[index % photos.length];
      return index < photos.length ? photo : { ...photo, alt: "" };
    }),
  );
}
