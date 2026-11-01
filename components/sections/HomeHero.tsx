import Image from "next/image";
import { homeHero } from "@/content/home";
import heroBackground from "@/public/images/home/v3/hero-bg.webp";
import emblem from "@/public/images/emblem.png";

// Figma hero-section (19:1782): 800px tall at 1440, the blurred red backdrop darkening
// to maroon at the foot, the club's emblem screened over it at 20%, and the white h1 on
// two lines over the gold English name, centred 120px down from the top. The backdrop is
// a blur, so it ships small and scales up. Below 1440 the height and type scale down
// with the width; phones follow the 390 frame (31:1572): as tall as the screen up to
// 800px, with a larger emblem.
export function HomeHero() {
  return (
    <section
      id={homeHero.id}
      aria-labelledby="hero-title"
      className="home-hero relative isolate flex flex-col items-center justify-center overflow-hidden bg-brand-red-dark px-5 pt-30 text-center"
    >
      <Image
        src={heroBackground}
        alt=""
        fill
        priority
        sizes="100vw"
        quality={70}
        className="-z-20 object-cover"
      />
      <Image
        src={emblem}
        alt=""
        sizes="(min-width: 1440px) 640px, (min-width: 768px) 44vw, 98vw"
        className="home-hero-emblem pointer-events-none absolute -z-10 opacity-20 mix-blend-screen"
      />
      <div className="home-hero-text flex flex-col items-center gap-4 pb-16">
        <h1 id="hero-title" className="enter flex flex-col gap-1 text-h1 font-bold text-white">
          {homeHero.titleLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h1>
        <p lang="en" className="enter text-hero-sub font-semibold text-brand-gold [--i:1]">
          {homeHero.subtitle}
        </p>
      </div>
    </section>
  );
}
