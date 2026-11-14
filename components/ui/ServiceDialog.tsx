"use client";

import Image from "next/image";
import { useEffect, useRef, type MouseEvent, type PointerEvent, type ReactNode } from "react";
import { closeService, readOpenService, useOpenService } from "@/lib/service-overlay";
import panelBackground from "@/public/images/home/v4/panel-bg.jpg";

type ServiceDialogProps = {
  slug: string;
  // id of the overlay's heading.
  labelledBy: string;
  // The close button's text.
  closeLabel: string;
  children: ReactNode;
};

// How long after opening a click beside the panel is taken as the rest of the click
// that opened it, not a request to close.
const doubleClickGuard = 500;

// The overlay shell: a native modal <dialog>, which brings the focus trap, Escape to
// close, an inert page behind it and focus back on the card that opened it. The panel
// is a 702px drawer on the right (Figma 37:2816, 2026-11-01) over the page dimmed to
// 40% black, full width below lg. Its ground is Ohm's red temple panel (dark red silk,
// a fretwork border, a dragon on the right and misty peaks at the foot; 1404×2774, 2x
// the 702px drawer, at quality 90, Ohm 2026-11-14); it stays put while the content
// scrolls over it, which is set in white. It opens when the address bar names its service
// (lib/service-overlay.ts), and closing it in any way (button, Escape, a click beside
// the panel, back) clears that. The content is rendered on the server and stays in the
// HTML; while closed it is display: none, so its lazy images and the image loop cost
// nothing. Motion in app/styles/service-overlay.css.
export function ServiceDialog({ slug, labelledBy, closeLabel, children }: ServiceDialogProps) {
  const ref = useRef<HTMLDialogElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  // Whether the last press started outside the panel, so a drag that ends there (say,
  // selecting text) does not close it.
  const pressedOutside = useRef(false);
  // When the overlay last opened, so the second click of a double click on a card,
  // which lands beside the panel, does not close it again.
  const openedAt = useRef(0);
  const isOpen = useOpenService() === slug;

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (isOpen && !dialog.open) {
      dialog.showModal();
      openedAt.current = performance.now();
      panelRef.current?.scrollTo(0, 0);
    } else if (!isOpen && dialog.open) {
      dialog.close();
    }
  }, [isOpen]);

  // Escape and the close button end up here too; when back closed it, the URL has
  // already moved on and closeService does nothing.
  function handleClose() {
    if (readOpenService() === slug) closeService();
  }

  // The dialog fills the screen and the panel sits inside it, so a click that lands on
  // the dialog itself is a click beside the panel.
  function handlePointerDown(event: PointerEvent<HTMLDialogElement>) {
    pressedOutside.current = event.target === event.currentTarget;
  }

  function handleClick(event: MouseEvent<HTMLDialogElement>) {
    if (performance.now() - openedAt.current < doubleClickGuard) return;
    if (pressedOutside.current && event.target === event.currentTarget) event.currentTarget.close();
  }

  return (
    <dialog
      ref={ref}
      aria-labelledby={labelledBy}
      onClose={handleClose}
      onPointerDown={handlePointerDown}
      onClick={handleClick}
      className="service-dialog"
    >
      <div className="service-dialog-panel relative ml-auto h-full w-full overflow-hidden bg-panel lg:max-w-drawer">
        <Image src={panelBackground} alt="" fill sizes="(min-width: 1024px) 702px, 100vw" quality={90} className="object-cover" />
        <div ref={panelRef} className="absolute inset-0 overflow-y-auto overscroll-contain">
          <form method="dialog" className="absolute top-6 right-3 z-10 md:right-6">
            <button
              type="submit"
              className="min-h-11 rounded-xs px-2 text-copy-sm text-white opacity-80 transition-opacity duration-200 ease-refined hover:opacity-100 hover:underline focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-white md:text-copy"
            >
              {closeLabel}
            </button>
          </form>
          {children}
        </div>
      </div>
    </dialog>
  );
}
