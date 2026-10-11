// Lays a service's photos into the hero gallery's four columns of three tiles.
// Three tiles are the fewest that still cover the band while a column slides, and
// they let nine photos fill the three columns a laptop shows without a repeat. Each
// column takes the next three photos, wrapping round to the first when a service has
// fewer than twelve; the fourth column sits at the right edge of the screen. A repeated
// photo keeps its alt text only the first time it appears, so screen readers do not
// hear it twice.

import type { GalleryPhoto } from "./types";

const columns = 4;
const tilesPerColumn = 3;

export function galleryColumns(photos: GalleryPhoto[]): GalleryPhoto[][] {
  return Array.from({ length: columns }, (_, column) =>
    Array.from({ length: tilesPerColumn }, (_, row) => {
      const index = column * tilesPerColumn + row;
      const photo = photos[index % photos.length];
      return index < photos.length ? photo : { ...photo, alt: "" };
    }),
  );
}
