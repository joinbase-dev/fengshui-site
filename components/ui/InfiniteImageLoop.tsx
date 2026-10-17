import Image from "next/image";
import type { CSSProperties } from "react";
import type { GalleryPhoto } from "@/content/services";

type Loading = "lazy" | "eager";

type InfiniteImageLoopProps = {
  columns: GalleryPhoto[][];
  // Lazy in an overlay, which starts closed; eager on a service's page.
  loading?: Loading;
};

// The two columns are staggered: at rest the second starts further above the band
// than the first, so their tiles never line up.
const columnOffsets = ["-mt-8 md:-mt-15.75", "-mt-20 md:-mt-42"];

// Square tiles filling each column's width: about 301px in the 702px drawer, half the
// screen less the gaps on phones. The image is fixed at the drawer size, so the browser
// picks 1x or 2x of it (2x covers the smaller tile too) and the srcset stays two
// entries long; the loop's markup is repeated across every overlay on the page.
const tileSize = 301;

function TileList({ photos, duplicate, loading }: { photos: GalleryPhoto[]; duplicate: boolean; loading: Loading }) {
  return (
    <ul aria-hidden={duplicate || undefined} className="flex flex-col gap-5 pb-5 md:gap-9.5 md:pb-9.5">
      {photos.map((photo, index) => (
        <li key={index} className="aspect-square overflow-hidden bg-sand">
          <Image
            src={photo.src}
            alt={duplicate ? "" : photo.alt}
            width={tileSize}
            height={tileSize}
            // In an overlay, lazy even in the first frame: only lazy images wait until
            // the closed overlay is shown.
            loading={loading}
            className="size-full object-cover"
          />
        </li>
      ))}
    </ul>
  );
}

// The "infinite image loop" from the design: two full columns of square photos, side
// by side across the band and staggered, drifting slowly in opposite directions in a
// seamless loop and clipped top and bottom by the band (motion in
// app/styles/service-overlay.css). Each column renders its list twice so the loop has
// no gap; the copy is hidden from assistive technology. A column's loop time follows
// its length (--loop-tiles), so a longer column does not drift faster. With reduced
// motion it stands still.
//
// Each column's list must be taller than the band plus its offset: two tiles are, at
// every breakpoint (content/services/gallery.ts lays out at least two).
export function InfiniteImageLoop({ columns, loading = "lazy" }: InfiniteImageLoopProps) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="grid grid-cols-2 gap-5 md:gap-9.5">
        {columns.slice(0, columnOffsets.length).map((photos, column) => (
          <div
            key={column}
            style={{ "--loop-tiles": photos.length } as CSSProperties}
            className={`image-loop-column ${columnOffsets[column]}`}
          >
            <div className="image-loop-track">
              <TileList photos={photos} duplicate={false} loading={loading} />
              <TileList photos={photos} duplicate loading={loading} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
