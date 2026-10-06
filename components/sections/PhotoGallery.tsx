import type { PhotoAsset } from "@/content/services";
import { PhotoFill } from "@/components/ui/PhotoFill";

type PhotoGalleryProps = {
  photos: PhotoAsset[];
};

// Figma "Image": three equal photos, 498px tall at 1440, each with a 1px white border.
// On phones the first photo spans the full width and the other two share a row.
export function PhotoGallery({ photos }: PhotoGalleryProps) {
  return (
    <ul className="grid grid-cols-2 bg-white sm:grid-cols-3">
      {photos.map((photo, index) => {
        const lead = index === 0;
        return (
          <li
            key={photo.alt}
            className={`relative overflow-hidden border border-white sm:col-span-1 sm:aspect-[480/498] ${
              lead ? "col-span-2 aspect-[4/3]" : "aspect-square"
            }`}
          >
            <PhotoFill photo={photo} sizes={lead ? "(min-width: 640px) 33vw, 100vw" : "(min-width: 640px) 33vw, 50vw"} />
          </li>
        );
      })}
    </ul>
  );
}
