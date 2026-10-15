"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { PhotoAsset } from "@/content/services";
import { PhotoFrame } from "@/components/ui/PhotoFrame";

type AlbumSlideshowProps = {
  // At least five photos, so a frame always has a new one to change to.
  photos: PhotoAsset[];
  className?: string;
};

const frames = 4;
// How often one of the frames changes its photo.
const interval = 3500;

function shuffle<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// One frame of the slideshow. When its photo changes, the new one loads on top of the
// old one and fades in over it, then replaces it.
function SlideFrame({ photo }: { photo: PhotoAsset }) {
  const [base, setBase] = useState(photo);
  const [incoming, setIncoming] = useState<PhotoAsset | null>(null);
  const [revealed, setRevealed] = useState(false);

  // A new photo from the slideshow goes on top, hidden until it has loaded.
  if (photo !== base && photo !== incoming) {
    setIncoming(photo);
    setRevealed(false);
  }

  const image = (item: PhotoAsset, extra: string, onLoad?: () => void, onDone?: () => void) => (
    <Image
      key={item.src.src}
      src={item.src}
      alt={item.alt}
      fill
      // A frame is 381/1246 of the album (the content width up to 1246px); half on phones.
      sizes="(min-width: 1406px) 381px, (min-width: 768px) 29vw, 48vw"
      onLoad={onLoad}
      onTransitionEnd={onDone}
      className={`object-cover ${extra}`}
    />
  );

  return (
    <PhotoFrame className="photo-album-frame absolute">
      {image(base, "")}
      {incoming &&
        image(
          incoming,
          `album-slide ${revealed ? "opacity-100" : "opacity-0"}`,
          () => setRevealed(true),
          () => {
            setBase(incoming);
            setIncoming(null);
          },
        )}
    </PhotoFrame>
  );
}

// The activities album as a slideshow: the same four tilted frames as the hero album,
// starting from a random four of the given photos, with one frame at a time
// crossfading to the next photo in a shuffled order. It runs only while the album is
// on screen and the tab is visible, and not at all with reduced motion (the random
// four stay). Crossfade timing in app/styles/photo-album.css.
export function AlbumSlideshow({ photos, className = "" }: AlbumSlideshowProps) {
  // The server renders the first four; the browser shuffles once it has the page.
  const [shown, setShown] = useState(() => photos.slice(0, frames));
  const albumRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const album = albumRef.current;
    if (!album) return;
    const queue = shuffle(photos);
    let current = queue.slice(0, frames);
    let cursor = frames;
    let turn = 0;
    // Frames change in a shuffled order too, so the album never ticks left to right.
    let frameOrder = shuffle([...Array(frames).keys()]);
    let timer = 0;
    let onScreen = false;

    // The random first four are picked while the album is still well below the screen,
    // before its lazy images start loading, so the server's four are not fetched for
    // nothing.
    const approach = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        approach.disconnect();
        setShown(current);
      },
      { rootMargin: "3000px 0px" },
    );
    approach.observe(album);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return () => approach.disconnect();

    function advance() {
      const frame = frameOrder[turn];
      turn = (turn + 1) % frames;
      if (turn === 0) frameOrder = shuffle(frameOrder);
      // The next photo in the queue that is not already in another frame.
      let next = queue[cursor++ % queue.length];
      while (current.includes(next)) next = queue[cursor++ % queue.length];
      current = current.map((photo, index) => (index === frame ? next : photo));
      setShown(current);
    }

    function sync() {
      const run = onScreen && document.visibilityState === "visible";
      if (run && !timer) timer = window.setInterval(advance, interval);
      if (!run && timer) {
        window.clearInterval(timer);
        timer = 0;
      }
    }

    const running = new IntersectionObserver(([entry]) => {
      onScreen = entry.isIntersecting;
      sync();
    });
    running.observe(album);
    document.addEventListener("visibilitychange", sync);

    return () => {
      window.clearInterval(timer);
      approach.disconnect();
      running.disconnect();
      document.removeEventListener("visibilitychange", sync);
    };
  }, [photos]);

  return (
    <div ref={albumRef} className={`photo-album relative w-full max-w-album ${className}`}>
      {shown.map((photo, index) => (
        <SlideFrame key={index} photo={photo} />
      ))}
    </div>
  );
}
