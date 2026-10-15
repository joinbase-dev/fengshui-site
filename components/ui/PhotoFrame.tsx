import type { ReactNode } from "react";

type PhotoFrameProps = {
  // Sets the frame's width and position (absolute or relative; the photo window is
  // placed inside it). Its height follows the design's 409×450.
  className?: string;
  // The photo, filling the window (a next/image with `fill`). Without one the window
  // shows the empty-frame grey.
  children?: ReactNode;
};

// The design's "frame-pic" (Figma 423:1302): a white card, 8px radius, with the photo
// 14px in (381×400, 4px radius) and a deeper margin below. Every length is a share of
// the frame, so it can be drawn at any size.
export function PhotoFrame({ className = "", children }: PhotoFrameProps) {
  return (
    <figure className={`aspect-[409/450] rounded-sm bg-white ${className}`}>
      <div className="absolute inset-x-[3.423%] top-[3.111%] aspect-[381/400] overflow-hidden rounded-photo bg-frame-empty">
        {children}
      </div>
    </figure>
  );
}
