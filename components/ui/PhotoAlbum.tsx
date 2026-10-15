import Image from "next/image";
import type { PhotoAsset } from "@/content/services";
import { PhotoFrame } from "@/components/ui/PhotoFrame";

type PhotoAlbumProps = {
  // Four photos, left to right.
  photos: readonly PhotoAsset[];
  className?: string;
};

// The design's "dynamic album" (Figma 1:777): four white photo frames laid
// overlapping, each tilted a little, 1246×631 at 1440. The activities section runs the
// same layout as a slideshow (AlbumSlideshow). Positions, tilts and the hover
// are in app/styles/photo-album.css; everything is a share of the album's width, so
// the arrangement keeps its shape at any size. On a pointer that hovers, a frame
// straightens and rises above the others.
export function PhotoAlbum({ photos, className = "" }: PhotoAlbumProps) {
  return (
    <div className={`photo-album relative w-full max-w-album ${className}`}>
      {photos.map((photo, index) => (
        <PhotoFrame key={index} className="photo-album-frame absolute">
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            // A frame is 381/1246 of the album (the content width up to 1246px); half on phones.
            sizes="(min-width: 1406px) 381px, (min-width: 768px) 29vw, 48vw"
            className="object-cover"
          />
        </PhotoFrame>
      ))}
    </div>
  );
}
