import Image from "next/image";
import { serviceUi, type GalleryPhoto } from "@/content/services";

type ServiceHeroGalleryProps = {
  columns: GalleryPhoto[][];
};

// Desktop shows four columns, tablet three, phones two. Hidden columns are
// display:none, so their lazy photos are never fetched.
const columnVisibility = ["", "", "hidden md:block", "hidden lg:block"];

const columnSizes = "(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw";

function PhotoList({ photos, column, duplicate }: { photos: GalleryPhoto[]; column: number; duplicate: boolean }) {
  return (
    <ul aria-hidden={duplicate || undefined} className="flex flex-col gap-2 pb-2 md:gap-3 md:pb-3 xl:gap-4 xl:pb-4">
      {photos.map((photo, index) => {
        // The first photo of each phone column is in the first frame; it is the LCP.
        const lead = !duplicate && index === 0 && column < 2;
        return (
          <li key={index}>
            <Image
              src={photo.src}
              alt={duplicate ? "" : photo.alt}
              sizes={columnSizes}
              preload={lead}
              fetchPriority={lead ? "high" : undefined}
              placeholder="blur"
              className="block h-auto w-full rounded-sm"
            />
          </li>
        );
      })}
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

// Columns of photos drifting slowly up and down in a seamless loop, clipped to the
// band (hero-gallery.css). Each column renders its list twice so the loop has no
// gap; the copy is hidden from assistive technology. With reduced motion the
// gallery stands still and the pause control is not shown.
//
// Each column's list must be at least as tall as the band, so give every column
// four or more photos.
export function ServiceHeroGallery({ columns }: ServiceHeroGalleryProps) {
  return (
    <div className="hero-gallery relative h-100 overflow-hidden bg-cream md:h-140 lg:h-150 xl:h-180">
      <div className="flex h-full gap-2 md:gap-3 xl:gap-4">
        {columns.slice(0, columnVisibility.length).map((photos, column) => (
          <div key={column} className={`hero-gallery-column min-w-0 flex-1 ${columnVisibility[column]}`}>
            <div className="hero-gallery-track">
              <PhotoList photos={photos} column={column} duplicate={false} />
              <PhotoList photos={photos} column={column} duplicate />
            </div>
          </div>
        ))}
      </div>

      {/* Fades the band into the white intro below, as the single hero photo did. */}
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-white to-transparent md:h-32" />

      <label className="glass-panel group absolute right-5 bottom-5 flex size-11 cursor-pointer items-center justify-center rounded-full text-gray-900 has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-brand motion-reduce:hidden md:right-10 md:bottom-8 xl:right-30">
        <input type="checkbox" className="hero-gallery-pause sr-only" />
        <PauseIcon />
        <ResumeIcon />
        <span className="sr-only">{serviceUi.pauseGallery}</span>
      </label>
    </div>
  );
}
