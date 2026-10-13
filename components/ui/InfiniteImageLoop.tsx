import Image from "next/image";
import { serviceUi, type GalleryPhoto } from "@/content/services";

type InfiniteImageLoopProps = {
  columns: GalleryPhoto[][];
};

// Figma 1:3308 staggers the three columns: at rest each starts this far above the band
// (63, 90 and 35px from md up; scaled with the tiles on phones).
const columnOffsets = ["-mt-9.75 md:-mt-15.75", "-mt-14 md:-mt-22.5", "-mt-5.5 md:-mt-8.75"];

// 258px square tiles 32px apart from md up, as drawn; derived smaller ones on phones.
// The image is fixed at the design size, so the browser picks 1x or 2x of it (2x
// covers the smaller tile too) and the srcset stays two entries long; the loop's
// markup is repeated across every overlay on the page.
const tileSize = 258;

function TileList({ photos, duplicate }: { photos: GalleryPhoto[]; duplicate: boolean }) {
  return (
    <ul aria-hidden={duplicate || undefined} className="flex flex-col gap-5 pb-5 md:gap-8 md:pb-8">
      {photos.map((photo, index) => (
        <li key={index} className="aspect-square overflow-hidden bg-sand">
          <Image
            src={photo.src}
            alt={duplicate ? "" : photo.alt}
            width={tileSize}
            height={tileSize}
            // Lazy even in the first frame: the loop lives in a closed overlay, and
            // only lazy images wait until it is shown.
            loading="lazy"
            className="size-full object-cover"
          />
        </li>
      ))}
    </ul>
  );
}

function PauseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="group-has-checked:hidden">
      <path d="M7 5v10M13 5v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function ResumeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="hidden group-has-checked:block">
      <path d="M7 4.5v11l9-5.5-9-5.5z" fill="currentColor" />
    </svg>
  );
}

// The "infinite image loop" from the design: three columns of square photos drifting
// slowly up and down in a seamless loop, centred on the middle column and clipped to
// its parent, which cuts into the outer two (motion in app/styles/service-overlay.css).
// Each column renders its list twice so the loop has no gap; the copy is hidden from
// assistive technology. With reduced motion the gallery stands still and the pause
// control is not shown.
//
// Each column's list must be taller than the band plus its offset: three tiles
// are, at every breakpoint (content/services/gallery.ts lays them out).
export function InfiniteImageLoop({ columns }: InfiniteImageLoopProps) {
  return (
    <div className="image-loop absolute inset-0 overflow-hidden">
      <div className="flex justify-center gap-5 md:gap-8">
        {columns.slice(0, columnOffsets.length).map((photos, column) => (
          <div key={column} className={`image-loop-column w-40 shrink-0 md:w-64.5 ${columnOffsets[column]}`}>
            <div className="image-loop-track">
              <TileList photos={photos} duplicate={false} />
              <TileList photos={photos} duplicate />
            </div>
          </div>
        ))}
      </div>

      <label className="group absolute right-3 bottom-3 flex size-11 cursor-pointer items-center justify-center rounded-full bg-white/90 text-black shadow-base has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-brand motion-reduce:hidden">
        <input type="checkbox" className="image-loop-pause sr-only" />
        <PauseIcon />
        <ResumeIcon />
        <span className="sr-only">{serviceUi.pauseGallery}</span>
      </label>
    </div>
  );
}
