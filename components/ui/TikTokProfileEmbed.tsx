"use client";

import { useEffect, useRef, useState } from "react";

const EMBED_SCRIPT = "https://www.tiktok.com/embed.js";

type Props = {
  username: string;
  profileUrl: string;
  className?: string;
};

/**
 * TikTok's official creator profile embed. It lists the account's latest
 * videos and every video opens on TikTok, so no API key or app review is needed.
 *
 * embed.js is third-party and heavy, so it is only fetched once the embed is
 * about to scroll into view; until then the reserved box keeps layout stable.
 */
export function TikTokProfileEmbed({ username, profileUrl, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [near, setNear] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setNear(true);
          observer.disconnect();
        }
      },
      { rootMargin: "600px 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!near) return;
    // embed.js converts every blockquote.tiktok-embed on the page each time it
    // runs, so a fresh script tag also covers a remount after client navigation.
    const script = document.createElement("script");
    script.src = EMBED_SCRIPT;
    script.async = true;
    document.body.appendChild(script);
    return () => script.remove();
  }, [near]);

  return (
    <div ref={ref} className={className}>
      {near && (
        <blockquote
          className="tiktok-embed m-0"
          cite={profileUrl}
          data-unique-id={username}
          data-embed-type="creator"
        >
          <section>
            <a href={`${profileUrl}?refer=creator_embed`} target="_blank" rel="noopener noreferrer">
              @{username}
            </a>
          </section>
        </blockquote>
      )}
    </div>
  );
}
