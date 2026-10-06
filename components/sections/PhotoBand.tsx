import type { PhotoAsset } from "@/content/services";
import { PhotoFill } from "@/components/ui/PhotoFill";

type PhotoBandProps = {
  photo: PhotoAsset;
  // The top band fades into the white section below it (a 240px white vector in Figma).
  fadeToWhite?: boolean;
  preload?: boolean;
};

// Full-bleed photo band. Figma has two on the service page, 740px and 720px tall at
// 1440; both use 720px here so they share one rhythm.
export function PhotoBand({ photo, fadeToWhite = false, preload = false }: PhotoBandProps) {
  return (
    <div className="relative h-72 overflow-hidden md:h-120 xl:h-180">
      <PhotoFill photo={photo} sizes="100vw" preload={preload} />
      {fadeToWhite && (
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-white to-transparent" />
      )}
    </div>
  );
}
