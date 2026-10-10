"use client";

import Image from "next/image";
import { useState } from "react";
import { PlayIcon } from "@/components/ui/PlayIcon";

type VideoPlayerProps = {
  youtubeId: string;
  title: string;
  playLabel: string;
};

// Shows the YouTube poster and loads the player only after a click, so the page
// does not pay for the embed's JavaScript up front.
export function VideoPlayer({ youtubeId, title, playLabel }: VideoPlayerProps) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 size-full"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      className="absolute inset-0 flex items-center justify-center focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-white"
    >
      <Image
        src={`https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`}
        alt=""
        fill
        sizes="(min-width: 1280px) 1200px, 100vw"
        className="object-cover"
      />
      <span className="relative">
        <PlayIcon />
      </span>
      <span className="sr-only">
        {playLabel}: {title}
      </span>
    </button>
  );
}
