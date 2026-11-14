// Figma "Corner" (91:1939, 95:2115): four 18px brass L-marks inset in a card's
// corners, like the corners of a mounted scroll. Decorative only. The terms document
// sets them 9px in, the QR block 11px (app/styles/terms.css).
export function CornerMarks({ variant }: { variant: "document" | "qr" }) {
  return (
    <span aria-hidden="true" className={`corner-marks corner-marks--${variant}`}>
      <span data-corner="tl" />
      <span data-corner="tr" />
      <span data-corner="bl" />
      <span data-corner="br" />
    </span>
  );
}
