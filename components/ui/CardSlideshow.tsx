"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { PhotoAsset } from "@/content/services";

type CardSlideshowProps = {
  // The card's own photo first, then the service's other photos.
  photos: PhotoAsset[];
  sizes: string;
};

// How long each photo shows while the card is hovered, and how long a slide takes.
const interval = 1800;
const slide = 700;

// A service card's photo (Ohm, 2026-10-31): while a mouse rests on the card, or the
// card has keyboard focus, the service's photos slide in from the right one after
// another, round and round; leaving the card slides back to its own photo. The other
// photos load on the first hover only. A copy of the first photo after the last lets
// the loop wrap without sliding backwards. Still on touch screens and under reduced
// motion.
export function CardSlideshow({ photos, sizes }: CardSlideshowProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [armed, setArmed] = useState(false);
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const card = ref.current?.closest("a");
    if (!card || photos.length < 2) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let timer: number | undefined;

    const start = () => {
      if (reduced.matches || timer !== undefined) return;
      setArmed(true);
      timer = window.setInterval(() => {
        setAnimate(true);
        setIndex((current) => current + 1);
      }, interval);
    };
    const stop = () => {
      window.clearInterval(timer);
      timer = undefined;
      setAnimate(true);
      setIndex(0);
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

  // On the copy of the first photo, jump back to the real one without a slide.
  useEffect(() => {
    if (index < photos.length) return;
    const timer = window.setTimeout(() => {
      setAnimate(false);
      setIndex(0);
    }, slide);
    return () => window.clearTimeout(timer);
  }, [index, photos.length]);

  const [first, ...rest] = photos;
  const slides = armed ? [...rest, first] : [];

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <div
        className="flex h-full"
        style={{
          transform: `translateX(-${index * 100}%)`,
          transition: animate ? `transform ${slide}ms var(--ease-refined)` : "none",
        }}
      >
        <div className="relative h-full w-full shrink-0">
          <Image src={first.src} alt={first.alt} fill sizes={sizes} className="object-cover" />
        </div>
        {slides.map((photo, slideIndex) => (
          <div key={slideIndex} aria-hidden="true" className="relative h-full w-full shrink-0">
            <Image src={photo.src} alt="" fill sizes={sizes} className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}
