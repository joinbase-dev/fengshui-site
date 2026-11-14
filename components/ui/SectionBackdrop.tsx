import { getImageProps, type StaticImageData } from "next/image";

type SectionBackdropProps = {
  desktop: StaticImageData;
  // Ohm's portrait crop for phones (780 wide: 2x a 390 screen), used below 640px.
  mobile?: StaticImageData;
  priority?: boolean;
  className?: string;
};

// A section's full-bleed background photo, behind its content and hidden from screen
// readers. With a phone crop, the browser loads only the one that fits the screen. The
// sources are Ohm's full-resolution exports (2880 wide on desktop) at quality 90, so
// retina screens get them at 2x without upscaling (Ohm, 2026-11-13: sharpness first).
export function SectionBackdrop({ desktop, mobile, priority = false, className = "" }: SectionBackdropProps) {
  const common = { alt: "", sizes: "100vw", quality: 90, priority };
  const { props: desktopProps } = getImageProps({ ...common, src: desktop });
  const mobileSet = mobile ? getImageProps({ ...common, src: mobile }).props.srcSet : undefined;
  const { srcSet: desktopSet, ...img } = desktopProps;

  return (
    <picture>
      {mobileSet && <source media="(max-width: 639.98px)" srcSet={mobileSet} sizes="100vw" />}
      <img
        {...img}
        srcSet={desktopSet}
        alt=""
        className={`pointer-events-none absolute inset-0 -z-10 size-full object-cover ${className}`}
      />
    </picture>
  );
}
