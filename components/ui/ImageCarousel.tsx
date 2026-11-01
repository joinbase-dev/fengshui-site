"use client";

import Image from "next/image";
import { useRef, useState, type KeyboardEvent, type PointerEvent } from "react";
import type { GalleryPhoto } from "@/content/services";

type ImageCarouselProps = {
  photos: GalleryPhoto[];
  // Names the carousel for screen readers, e.g. "ภาพบริการฮวงจุ้ยบ้านและสถานที่".
  label: string;
  // position: "… {current} … {total}", filled in for each photo.
  labels: { previous: string; next: string; position: string };
  sizes: string;
  // Eager on a service's page, where the carousel is on screen from the start.
  loading?: "lazy" | "eager";
};

// How far a swipe must travel, in px, to change the photo.
const swipeThreshold = 40;

function fill(template: string, current: number, total: number) {
  return template.replace("{current}", String(current)).replace("{total}", String(total));
}

// The service's photos, one at a time (Figma 37:2955: 638×341, 8px corners, the dots
// 16px above the foot, white for the photo showing and half white for the others).
// Each photo shows whole, centred over a blurred, darkened copy of itself that fills
// the frame, so portrait and landscape photos keep their proportions in the same frame
// and nothing of them is cropped. The frame never changes size, so changing photo
// never moves the text below.
//
// Previous and next buttons sit at the sides and disappear at the first and last
// photo (the design does not loop); a swipe does the same on touch screens, and the
// arrow keys while the carousel has focus. Vertical drags still scroll the overlay.
// Photos load as they come near: the one showing and its neighbours. Under reduced
// motion the photos change without sliding. With one photo there are no controls.
export function ImageCarousel({ photos, label, labels, sizes, loading = "lazy" }: ImageCarouselProps) {
  const [index, setIndex] = useState(0);
  const [drag, setDrag] = useState(0);
  // Photos that have been near the one showing, so they stay loaded once seen.
  const [reached, setReached] = useState(1);
  const start = useRef<{ x: number; y: number; id: number } | null>(null);
  const count = photos.length;
  const last = count - 1;

  function go(next: number) {
    const target = Math.min(Math.max(next, 0), last);
    setIndex(target);
    setReached((current) => Math.max(current, target + 1));
  }

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowRight") go(index + 1);
    else if (event.key === "ArrowLeft") go(index - 1);
    else return;
    event.preventDefault();
  }

  function onPointerDown(event: PointerEvent<HTMLDivElement>) {
    if (count < 2 || (event.pointerType === "mouse" && event.button !== 0)) return;
    start.current = { x: event.clientX, y: event.clientY, id: event.pointerId };
  }

  function onPointerMove(event: PointerEvent<HTMLDivElement>) {
    const origin = start.current;
    if (!origin || origin.id !== event.pointerId) return;
    const dx = event.clientX - origin.x;
    // A mostly vertical drag is a scroll of the overlay: let it go.
    if (drag === 0 && Math.abs(event.clientY - origin.y) > Math.abs(dx)) {
      start.current = null;
      return;
    }
    if (Math.abs(dx) > 4 && !event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.setPointerCapture(event.pointerId);
    }
    // Resist at the ends.
    const atEnd = (dx > 0 && index === 0) || (dx < 0 && index === last);
    setDrag(atEnd ? dx / 3 : dx);
  }

  function onPointerEnd(event: PointerEvent<HTMLDivElement>) {
    const origin = start.current;
    if (!origin || origin.id !== event.pointerId) return;
    start.current = null;
    if (drag <= -swipeThreshold) go(index + 1);
    else if (drag >= swipeThreshold) go(index - 1);
    setDrag(0);
  }

  const button =
    "absolute top-1/2 z-10 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-ink shadow-card backdrop-blur-sm transition duration-200 ease-refined hover:bg-white hover:text-brand-red focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      tabIndex={count > 1 ? 0 : undefined}
      onKeyDown={count > 1 ? onKeyDown : undefined}
      className="image-carousel relative aspect-[638/341] w-full overflow-hidden rounded-sm bg-black/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red"
    >
      <div
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerEnd}
        onPointerCancel={onPointerEnd}
        className="image-carousel-track flex h-full touch-pan-y select-none"
        data-dragging={drag !== 0 || undefined}
        style={{ transform: `translate3d(calc(${-index * 100}% + ${drag}px), 0, 0)` }}
      >
        {photos.map((photo, slide) => {
          const near = slide < reached + 1;
          return (
            <div
              key={slide}
              role="group"
              aria-roledescription="slide"
              aria-label={fill(labels.position, slide + 1, count)}
              aria-hidden={slide !== index || undefined}
              className="relative h-full w-full shrink-0 overflow-hidden"
            >
              {near && (
                <>
                  <Image
                    src={photo.full}
                    alt=""
                    fill
                    sizes={sizes}
                    loading={loading}
                    draggable={false}
                    className="scale-110 object-cover blur-xl brightness-75"
                  />
                  <Image
                    src={photo.full}
                    alt={photo.alt}
                    fill
                    sizes={sizes}
                    loading={loading}
                    draggable={false}
                    className="object-contain"
                  />
                </>
              )}
            </div>
          );
        })}
      </div>

      {count > 1 && (
        <>
          {index > 0 && (
            <button type="button" aria-label={labels.previous} onClick={() => go(index - 1)} className={`${button} left-3`}>
              <Chevron direction="left" />
            </button>
          )}
          {index < last && (
            <button type="button" aria-label={labels.next} onClick={() => go(index + 1)} className={`${button} right-3`}>
              <Chevron direction="right" />
            </button>
          )}
          <div aria-hidden="true" className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2.5">
            {photos.map((_, dot) => (
              <span
                key={dot}
                className={`size-2 rounded-full bg-white shadow-[0_0_2px_rgb(0_0_0/0.4)] transition-opacity duration-300 ease-refined ${dot === index ? "opacity-100" : "opacity-50"}`}
              />
            ))}
          </div>
          <p aria-live="polite" className="sr-only">
            {fill(labels.position, index + 1, count)}
          </p>
        </>
      )}
    </div>
  );
}

function Chevron({ direction }: { direction: "left" | "right" }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d={direction === "left" ? "m15 18-6-6 6-6" : "m9 18 6-6-6-6"}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
