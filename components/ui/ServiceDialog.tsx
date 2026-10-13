"use client";

import { useEffect, useRef, type MouseEvent, type PointerEvent, type ReactNode } from "react";
import { closeService, readOpenService, useOpenService } from "@/lib/service-overlay";

type ServiceDialogProps = {
  slug: string;
  // id of the overlay's heading.
  labelledBy: string;
  closeLabel: string;
  children: ReactNode;
};

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// The overlay shell: a native modal <dialog>, which brings the focus trap, Escape to
// close, an inert page behind it and focus back on the card that opened it. It opens
// when the address bar names its service (lib/service-overlay.ts), and closing it in
// any way (button, Escape, a click outside the panel, back) clears that. The content
// is rendered on the server and stays in the HTML; while closed it is display: none,
// so its lazy images and the image loop cost nothing. Motion in
// app/styles/service-overlay.css.
export function ServiceDialog({ slug, labelledBy, closeLabel, children }: ServiceDialogProps) {
  const ref = useRef<HTMLDialogElement>(null);
  // Whether the last press started outside the panel, so a drag that ends there (say,
  // selecting text) does not close it.
  const pressedOutside = useRef(false);
  const isOpen = useOpenService() === slug;

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (isOpen && !dialog.open) {
      dialog.showModal();
      dialog.scrollTop = 0;
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
  // the dialog itself is a click outside the panel.
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
      <div className="service-dialog-panel relative bg-paper">
        <form method="dialog" className="sticky top-0 z-10 flex justify-end">
          <button
            type="submit"
            className="mt-3 mr-3 flex size-11 items-center justify-center rounded-full bg-paper/90 text-black transition-colors duration-200 ease-refined hover:bg-sand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand md:mt-5 md:mr-5"
          >
            <CloseIcon />
            <span className="sr-only">{closeLabel}</span>
          </button>
        </form>
        <div className="-mt-14 md:-mt-16">{children}</div>
      </div>
    </dialog>
  );
}
