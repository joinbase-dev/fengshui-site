import Image from "next/image";
import { homeHero } from "@/content/home";
import { LineButton } from "@/components/ui/LineButton";
import { SectionBackdrop } from "@/components/ui/SectionBackdrop";
import heroBackground from "@/public/images/home/v4/hero-bg.jpg";
import heroBackgroundMobile from "@/public/images/home/v4/hero-bg-mobile.jpg";
import emblem from "@/public/images/home/v4/hero-emblem.png";

// Figma wide-banner-section (61:1813, 2026-11-13): the design's 746px frame at 1440, filling
// the screen's height (Ohm, 2026-11-13) over the red temple and dragon. The background is Ohm's full-resolution export (2880 wide, with the
// design's red veil and warm glow already in it) and his phone crop (780 wide); a dark
// shade sits behind the headline. In the middle, อ.ดำรงชัย cut out in front of the club's
// emblem (Ohm's full-resolution logo, screened at 60% and turning slowly), cropped by the
// section's foot; the gold h1 at the top left with the LINE button under it, and his
// name in gold beside him at the lower right. Both are outlined in brand red, as the
// design draws them. From lg the design's 1440 frame scales with the width and sits in the
// middle of the screen's height (app/styles/home.css); below lg (derived) the h1 and
// the button sit centred at the top, the portrait stands on the foot with the whole
// emblem behind him, and his name sits over its lower right.
export function HomeHero() {
  return (
    <section
      id={homeHero.id}
      aria-labelledby="hero-title"
      className="home-hero relative isolate overflow-hidden bg-brand-red-dark"
    >
      <SectionBackdrop
        desktop={heroBackground}
        mobile={heroBackgroundMobile}
        priority
      />
      <div className="home-hero-stage">
        <div aria-hidden="true" className="home-hero-shade" />
        <h1 id="hero-title" className="home-hero-title enter font-bold">
          {homeHero.titleLines.map((line) => (
            <span key={line} data-text={line} className="home-hero-line">
              <span className="gold-text">{line}</span>
            </span>
          ))}
        </h1>
        <LineButton className="home-hero-cta enter [--i:1]" />
        <div className="home-hero-figure">
          <div aria-hidden="true" className="home-hero-emblem">
            <Image
              src={emblem}
              alt=""
              quality={90}
              sizes="(min-width: 1440px) 767px, (min-width: 1024px) 53vw, 110vw"
              className="home-hero-emblem-spin pointer-events-none mix-blend-screen"
            />
          </div>
          <Image
            src={homeHero.photo.src}
            alt={homeHero.photo.alt}
            priority
            quality={90}
            sizes="(min-width: 1440px) 547px, (min-width: 1024px) 38vw, (min-width: 640px) 70vw, 92vw"
            className="home-hero-portrait"
          />
        </div>
        <p className="home-hero-name enter font-semibold [--i:2]">
          {homeHero.nameLines.map((line) => (
            <span key={line} data-text={line} className="home-hero-line">
              <span className="gold-text">{line}</span>
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
