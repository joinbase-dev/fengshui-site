"use client";

import { useEffect, useRef, type MouseEvent, type PointerEvent, type ReactNode } from "react";
import { closeService, readOpenService, useOpenService } from "@/lib/service-overlay";

type ServiceDialogProps = {
  slug: string;
  // id of the overlay's heading.
  labelledBy: string;
  // The close button's text.
  closeLabel: string;
  children: ReactNode;
};

// The overlay shell: a native modal <dialog>, which brings the focus trap, Escape to
// close, an inert page behind it and focus back on the card that opened it. The panel
// is a drawer on the right (Figma 1:3286) that scrolls on its own, with the page
// visible beside it from lg up and full width below. It opens when the address bar names its service
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
  const isOpen = useOpenService() === slug;

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (isOpen && !dialog.open) {
      dialog.showModal();
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
      <div ref={panelRef} className="service-dialog-panel relative ml-auto h-full w-full overflow-y-auto overscroll-contain bg-sand lg:max-w-drawer">
        <form method="dialog" className="absolute top-6 right-3 md:right-6">
          <button
            type="submit"
            className="min-h-11 rounded-xs px-2 text-copy-sm text-black opacity-80 transition-opacity duration-200 ease-refined hover:opacity-100 hover:underline focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-red-800 md:text-copy"
          >
            {closeLabel}
          </button>
        </form>
        {children}
      </div>
    </dialog>
  );
}
