import Image from "next/image";
import type { PhotoAsset } from "@/content/services";

type PhotoAlbumProps = {
  // Four photos, left to right. Without them the album shows its empty frames, as the
  // design does for the activities section.
  photos?: readonly PhotoAsset[];
  className?: string;
};

const frames = 4;

// The design's "dynamic album" (Figma 1:777 and 1:798): four white photo frames laid
// overlapping, each tilted a little, 1246×631 at 1440. Positions, tilts and the hover
// are in app/styles/photo-album.css; everything is a share of the album's width, so
// the arrangement keeps its shape at any size. On a pointer that hovers, a frame
// straightens and rises above the others.
export function PhotoAlbum({ photos, className = "" }: PhotoAlbumProps) {
  return (
    <div className={`photo-album relative aspect-[1246/631] w-full max-w-album ${className}`}>
      {Array.from({ length: frames }, (_, index) => {
        const photo = photos?.[index];
        return (
          <figure key={index} className="photo-album-frame absolute aspect-[409/450] rounded-sm bg-white">
            <div className="relative aspect-[381/400] overflow-hidden rounded-photo bg-frame-empty">
              {photo && (
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  // A frame is 381/1246 of the album, which is the content width up to 1246px.
                  sizes="(min-width: 1406px) 381px, 29vw"
                  className="object-cover"
                />
              )}
            </div>
          </figure>
        );
      })}
    </div>
  );
}
