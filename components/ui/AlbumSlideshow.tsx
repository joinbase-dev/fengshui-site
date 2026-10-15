"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { PhotoAsset } from "@/content/services";
import { PhotoFrame } from "@/components/ui/PhotoFrame";

type AlbumSlideshowProps = {
  // At least five photos, so a frame always has a new one to change to.
  photos: PhotoAsset[];
  // Start from a random four rather than the first four, which the server renders.
  shuffleStart?: boolean;
  // The album is the page's largest content on load (the hero's): its first four
  // photos load first.
  priority?: boolean;
  className?: string;
};

const frames = 4;
// How often one of the frames changes its photo.
const interval = 2000;
// A frame is 381/1246 of the album (the content width up to 1246px); half on phones.
const sizes = "(min-width: 1406px) 381px, (min-width: 768px) 29vw, 48vw";

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
function SlideFrame({ photo, priority }: { photo: PhotoAsset; priority: boolean }) {
  const [base, setBase] = useState(photo);
  const [incoming, setIncoming] = useState<PhotoAsset | null>(null);
  const [revealed, setRevealed] = useState(false);
  // Only the photo the server rendered is a priority; later ones load as they come.
  const [first] = useState(photo);

  // A new photo from the slideshow goes on top, hidden until it has loaded.
  if (photo !== base && photo !== incoming) {
    setIncoming(photo);
    setRevealed(false);
  }

  return (
    <PhotoFrame className="photo-album-frame absolute">
      <Image
        key={base.src.src}
        src={base.src}
        alt={base.alt}
        fill
        sizes={sizes}
        priority={priority && base === first}
        className="object-cover"
      />
      {incoming && (
        <Image
          key={incoming.src.src}
          src={incoming.src}
          alt={incoming.alt}
          fill
          sizes={sizes}
          onLoad={() => setRevealed(true)}
          onTransitionEnd={() => {
            setBase(incoming);
            setIncoming(null);
          }}
          className={`album-slide object-cover ${revealed ? "opacity-100" : "opacity-0"}`}
        />
      )}
    </PhotoFrame>
  );
}

// The design's "dynamic album" (Figma 1:777) as a slideshow: four white frames laid
// overlapping and tilted (app/styles/photo-album.css), one of which crossfades to
// another photo every two seconds, frames and photos both in a shuffled order, never
// showing a photo twice at once. It runs only while the album is on screen and the
// tab is visible, and not at all with reduced motion.
export function AlbumSlideshow({ photos, shuffleStart = false, priority = false, className = "" }: AlbumSlideshowProps) {
  // The server renders the first four; the browser may shuffle once it has the page.
  const [shown, setShown] = useState(() => photos.slice(0, frames));
  const albumRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const album = albumRef.current;
    if (!album) return;
    const queue = shuffleStart ? shuffle(photos) : [...photos.slice(0, frames), ...shuffle(photos.slice(frames))];
    let current = queue.slice(0, frames);
    let cursor = frames;
    let turn = 0;
    // Frames change in a shuffled order too, so the album never ticks left to right.
    let frameOrder = shuffle([...Array(frames).keys()]);
    let timer = 0;
    let onScreen = false;

    // A random first four are picked while the album is still well below the screen,
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
    if (shuffleStart) approach.observe(album);
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
  }, [photos, shuffleStart]);

  return (
    <div ref={albumRef} className={`photo-album relative w-full max-w-album ${className}`}>
      {shown.map((photo, index) => (
        <SlideFrame key={index} photo={photo} priority={priority} />
      ))}
    </div>
  );
}
