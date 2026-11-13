import { getImageProps, type StaticImageData } from "next/image";

type SectionBackdropProps = {
  desktop: StaticImageData;
  // The design's own crops for narrower screens (Figma "Responsive BG" frames): the
  // tablet one from 640px, the phone one below. Without them the desktop image is
  // cropped to fit.
  tablet?: StaticImageData;
  mobile?: StaticImageData;
  priority?: boolean;
  // Where the desktop image takes over, in px: lg by default; later for a section that
  // stays tall (one column) beyond lg.
  desktopFrom?: number;
  className?: string;
};

// A section's full-bleed background photo, behind its content and hidden from screen
// readers. Where the design supplies crops for tablet and phone (Figma 71:1633, 71:1646),
// the browser loads only the one that fits the screen.
export function SectionBackdrop({ desktop, tablet, mobile, priority = false, desktopFrom = 1024, className = "" }: SectionBackdropProps) {
  const common = { alt: "", sizes: "100vw", quality: 75, priority };
  const { props: desktopProps } = getImageProps({ ...common, src: desktop });
  const tabletSet = tablet ? getImageProps({ ...common, src: tablet }).props.srcSet : undefined;
  const mobileSet = mobile ? getImageProps({ ...common, src: mobile }).props.srcSet : undefined;
  const { srcSet: desktopSet, ...img } = desktopProps;

  return (
    <picture>
      {(tabletSet || mobileSet) && <source media={`(min-width: ${desktopFrom}px)`} srcSet={desktopSet} sizes="100vw" />}
      {tabletSet && <source media="(min-width: 640px)" srcSet={tabletSet} sizes="100vw" />}
      {mobileSet && <source srcSet={mobileSet} sizes="100vw" />}
      <img
        {...img}
        srcSet={desktopSet}
        alt=""
        className={`pointer-events-none absolute inset-0 -z-10 size-full object-cover ${className}`}
      />
    </picture>
  );
}
