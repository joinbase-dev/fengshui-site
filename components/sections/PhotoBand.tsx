import type { PhotoAsset } from "@/content/services";
import { PhotoFill } from "@/components/ui/PhotoFill";

type PhotoBandProps = {
  photo: PhotoAsset;
};

// Full-bleed photo band, 720px tall at 1440 (Figma has 720px and 740px bands on the
// first sae-ki frame; both use 720px so they share one rhythm).
export function PhotoBand({ photo }: PhotoBandProps) {
  return (
    <div className="relative h-72 overflow-hidden md:h-120 xl:h-180">
      <PhotoFill photo={photo} sizes="100vw" />
    </div>
  );
}
