"use client";

import { useState } from "react";
import { payment } from "@/content/terms";

// Figma "Button / secondary" (95:2123): saves the QR to the visitor's device. On
// phones that can share files (iOS, Android) it opens the share sheet, whose "Save
// Image" puts the QR in the photo album for the bank app's "scan from album". Elsewhere
// it downloads the PNG.
export function SaveQrButton({ src }: { src: string }) {
  const [saved, setSaved] = useState(false);

  async function save() {
    try {
      const blob = await (await fetch(src)).blob();
      const file = new File([blob], payment.qrFileName, { type: blob.type || "image/png" });
      const touch = window.matchMedia("(pointer: coarse)").matches;
      if (touch && navigator.canShare?.({ files: [file] })) {
        await navigator.share({ files: [file] });
      } else {
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = payment.qrFileName;
        link.click();
        URL.revokeObjectURL(url);
      }
      setSaved(true);
    } catch (error) {
      // Closing the share sheet is not a failure; anything else falls back to opening
      // the image, which can be saved with a long press.
      if (error instanceof DOMException && error.name === "AbortError") return;
      window.open(src, "_blank", "noopener");
    }
  }

  return (
    <button
      type="button"
      onClick={save}
      className="flex h-11 w-full cursor-pointer items-center justify-center gap-2.5 rounded-button border-[1.2px] border-cinnabar px-2 text-note font-semibold whitespace-nowrap text-cinnabar transition duration-200 ease-refined hover:bg-cinnabar hover:text-parchment active:scale-98 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-cinnabar md:w-auto md:px-6"
    >
      <span aria-hidden="true" className="font-inter">
        {saved ? "✓" : "↓"}
      </span>
      <span aria-live="polite">{saved ? payment.saved : payment.save}</span>
    </button>
  );
}
