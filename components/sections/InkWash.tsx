import type { ReactNode } from "react";
import { SectionBackdrop } from "@/components/ui/SectionBackdrop";
import inkWash from "@/public/images/home/v4/process-bg.jpg";
import inkWashMobile from "@/public/images/home/v4/process-bg-mobile.jpg";

// Figma 67:1630 / 67:1631 (2026-11-13): one ink-wash landscape of earth, water and wind,
// gold-hazed at the top, behind both the consultation steps and the activities strip
// (the design lays the same 1440×1200 image across the two sections). Ohm's
// full-resolution export (2880 wide) and his phone crop, anchored to the top so the
// gold haze stays under the steps' heading. The two sections stack far taller than a
// phone screen, so there the crop keeps its own size (2x a 390 screen, never scaled up)
// and dissolves into the still water of its foot (app/styles/home.css).
export function InkWash({ children }: { children: ReactNode }) {
  return (
    <div className="ink-wash relative isolate bg-ink-wash">
      <SectionBackdrop desktop={inkWash} mobile={inkWashMobile} className="object-top" />
      {children}
    </div>
  );
}
