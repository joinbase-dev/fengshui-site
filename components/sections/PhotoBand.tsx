import type { PhotoAsset } from "@/content/services";
import { PhotoFill } from "@/components/ui/PhotoFill";

type PhotoBandProps = {
  photo: PhotoAsset;
  preload?: boolean;
  // A slow zoom-out on load for the band at the top of the page.
  settle?: boolean;
};

// Full-bleed photo band. Figma has two on the service page, 740px and 720px tall at
// 1440; both use 720px here so they share one rhythm. The top band's fade into white
// is part of its exported photo.
export function PhotoBand({ photo, preload = false, settle = false }: PhotoBandProps) {
  return (
    <div className="relative h-72 overflow-hidden md:h-120 xl:h-180">
      <PhotoFill photo={photo} sizes="100vw" preload={preload} className={settle ? "settle" : ""} />
    </div>
  );
}
