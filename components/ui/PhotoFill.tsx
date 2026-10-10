import Image from "next/image";
import type { PhotoAsset } from "@/content/services";

type PhotoFillProps = {
  photo: PhotoAsset;
  sizes: string;
  className?: string;
};

// Fills its positioned parent. Until a photo is exported it shows the design's
// grey image slot (neutral/surface-weak-disable) instead of a stand-in picture.
export function PhotoFill({ photo, sizes, className = "" }: PhotoFillProps) {
  if (!photo.src) {
    return <div aria-hidden="true" className={`absolute inset-0 bg-border ${className}`} />;
  }

  return (
    <Image
      src={photo.src}
      alt={photo.alt}
      fill
      sizes={sizes}
      placeholder="blur"
      className={`object-cover ${className}`}
    />
  );
}
