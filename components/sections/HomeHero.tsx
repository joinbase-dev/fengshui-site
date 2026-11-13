import Image from "next/image";
import { homeHero } from "@/content/home";
import { SectionBackdrop } from "@/components/ui/SectionBackdrop";
import heroBackground from "@/public/images/home/v4/hero-bg.webp";
import heroBackgroundTablet from "@/public/images/home/v4/hero-bg-tablet.webp";
import heroBackgroundMobile from "@/public/images/home/v4/hero-bg-mobile.webp";
import emblem from "@/public/images/emblem.png";

// Figma wide-banner-section (61:1813, 2026-11-13): 746px tall at 1440 over the red temple
// and dragon, with the design's own crops for tablet and phone (71:1633). A dark red
// veil and a warm glow (blurred ellipses in the design) sit over the photo, a dark shade
// behind the headline. In the middle, อ.ดำรงชัย cut out in front of the club's emblem
// (screened at 60%), cropped by the section's foot; the gold h1 at the top left and his
// name in gold beside him at the lower right. From lg the design's 1440 frame scales
// with the width (app/styles/home.css); below lg (derived) the h1 sits centred at the
// top, the portrait fills the rest of the screen and his name sits over its lower right.
export function HomeHero() {
  return (
    <section
      id={homeHero.id}
      aria-labelledby="hero-title"
      className="home-hero relative isolate overflow-hidden bg-brand-red-dark"
    >
      <SectionBackdrop
        desktop={heroBackground}
        tablet={heroBackgroundTablet}
        mobile={heroBackgroundMobile}
        priority
      />
      <div aria-hidden="true" className="home-hero-veil" />
      <div className="home-hero-stage">
        <div aria-hidden="true" className="home-hero-glow" />
        <div aria-hidden="true" className="home-hero-shade" />
        <h1 id="hero-title" className="home-hero-title enter gold-text font-bold">
          {homeHero.titleLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h1>
        <div className="home-hero-figure">
          <Image
            src={emblem}
            alt=""
            sizes="(min-width: 1440px) 767px, (min-width: 1024px) 53vw, 110vw"
            className="home-hero-emblem pointer-events-none mix-blend-screen"
          />
          <Image
            src={homeHero.photo.src}
            alt={homeHero.photo.alt}
            priority
            sizes="(min-width: 1440px) 547px, (min-width: 1024px) 38vw, (min-width: 640px) 70vw, 92vw"
            className="home-hero-portrait"
          />
        </div>
        <p className="home-hero-name enter gold-text font-semibold [--i:1]">
          {homeHero.nameLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
