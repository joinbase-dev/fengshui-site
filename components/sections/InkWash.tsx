import Image from "next/image";
import type { ReactNode } from "react";
import inkWash from "@/public/images/home/v4/process-bg.jpg";

// Figma 67:1630 / 67:1631 (2026-11-13): one ink-wash landscape of earth, water and wind,
// gold-hazed at the top, behind both the consultation steps and the activities strip
// (the design lays the same 1440×1200 image across the two sections).
export function InkWash({ children }: { children: ReactNode }) {
  return (
    <div className="relative isolate bg-warm">
      <Image src={inkWash} alt="" fill sizes="100vw" quality={90} className="-z-10 object-cover object-top" />
      {children}
    </div>
  );
}
