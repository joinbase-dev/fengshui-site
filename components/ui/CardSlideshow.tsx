"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { PhotoAsset } from "@/content/services";

type CardSlideshowProps = {
  // The card's own photo first, then the service's other photos.
  photos: PhotoAsset[];
  sizes: string;
};

// How long each photo shows while the card is hovered, and how long a crossfade takes.
const interval = 1500;
const fade = 180;

// A service card's photo (Ohm, 2026-10-31; sped up 2026-11-01): as soon as a mouse
// rests on the card, or the card gets keyboard focus, the next photo of the service
// fades in, then the rest follow round and round; leaving the card fades back to its
// own photo. The new photo fades in over the one it replaces, which stays fully drawn
// underneath, so a photo still loading never shows a gap. The second photo loads with
// the card (lazily, near the viewport) so the first change is instant; the others load
// on the first hover. Still on touch screens and under reduced motion.
export function CardSlideshow({ photos, sizes }: CardSlideshowProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [armed, setArmed] = useState(false);
  // The photo showing and the one it is fading in over.
  const [{ index, previous }, setSlide] = useState({ index: 0, previous: 0 });

  useEffect(() => {
    const card = ref.current?.closest("a");
    if (!card || photos.length < 2) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let timer: number | undefined;

    const show = (next: (current: number) => number) =>
      setSlide(({ index: current }) => ({ index: next(current), previous: current }));
    const advance = () => show((current) => (current + 1) % photos.length);

    const start = () => {
      if (reduced.matches || timer !== undefined) return;
      setArmed(true);
      advance();
      timer = window.setInterval(advance, interval);
    };
    const stop = () => {
      if (timer === undefined) return;
      window.clearInterval(timer);
      timer = undefined;
      show(() => 0);
    };
    const onPointerEnter = (event: PointerEvent) => {
      if (event.pointerType === "mouse") start();
    };
    const onPointerLeave = (event: PointerEvent) => {
      if (event.pointerType === "mouse" && !card.matches(":focus-visible")) stop();
    };
    const onFocus = () => {
      if (card.matches(":focus-visible")) start();
    };

    card.addEventListener("pointerenter", onPointerEnter);
    card.addEventListener("pointerleave", onPointerLeave);
    card.addEventListener("focus", onFocus);
    card.addEventListener("blur", stop);
    return () => {
      window.clearInterval(timer);
      card.removeEventListener("pointerenter", onPointerEnter);
      card.removeEventListener("pointerleave", onPointerLeave);
      card.removeEventListener("focus", onFocus);
      card.removeEventListener("blur", stop);
    };
  }, [photos.length]);

  // The card's own photo, the next one, and the rest once the card has been hovered.
  const shown = armed ? photos : photos.slice(0, 2);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      {shown.map((photo, slideIndex) => {
        const current = slideIndex === index;
        const below = slideIndex === previous && !current;
        return (
          <div
            key={slideIndex}
            aria-hidden={slideIndex > 0 ? true : undefined}
            className="absolute inset-0"
            style={{
              opacity: current || below ? 1 : 0,
              zIndex: current ? 2 : below ? 1 : 0,
              transition: current ? `opacity ${fade}ms ease-out` : "none",
            }}
          >
            <Image
              src={photo.src}
              alt={slideIndex > 0 ? "" : photo.alt}
              fill
              sizes={sizes}
              className="object-cover"
            />
          </div>
        );
      })}
    </div>
  );
}
