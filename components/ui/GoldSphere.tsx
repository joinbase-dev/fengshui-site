"use client";

import { useEffect, useRef, type ReactNode } from "react";

type GoldSphereProps = {
  // The text the sphere drifts behind: a dark copy and a white copy, which
  // app/styles/services.css masks to the parts outside and inside the sphere.
  children: ReactNode;
};

// The services panel's gold sphere and small ball (Figma Ellipses 436 and 437). The
// sphere drifts slowly across the panel and turns back at its edges, and the text over
// it turns white where the two overlap. All of the motion is a CSS animation (two
// registered custom properties, app/styles/services.css), so React never re-renders;
// this component only pauses it while the panel is off screen. With reduced motion
// the sphere rests where the design draws it.
export function GoldSphere({ children }: GoldSphereProps) {
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const observer = new IntersectionObserver(([entry]) => {
      stage.toggleAttribute("data-paused", !entry.isIntersecting);
    });
    observer.observe(stage);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={stageRef} className="gold-sphere-stage absolute inset-0">
      <span aria-hidden="true" className="gold-sphere absolute top-0 left-0 rounded-full bg-gold-sphere" />
      <span
        aria-hidden="true"
        className="absolute top-[69.044%] left-[69.365%] aspect-square w-[6.508%] rounded-full bg-gold-sphere"
      />
      {children}
    </div>
  );
}
