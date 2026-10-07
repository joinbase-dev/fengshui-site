import Image from "next/image";
import { hero, consultation } from "@/content/site";
import { primaryButton } from "@/components/ui/button-styles";
import emblem from "@/public/images/emblem.png";
import portrait from "@/public/images/sinsae-damrongchai.png";
import { ServiceList } from "./ServiceList";

// Geometry from the Figma frame (hero image 640×592): the portrait sits at
// x 91, y 8.66, 457×519; the image starts 30px above the copy and the service
// list overlaps its bottom 84px. Percentages keep that composition at every size.
export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="mx-auto max-w-hero px-5 pt-6 pb-4 md:px-10 md:pt-8 md:pb-12 xl:px-20 xl:pt-12 xl:pb-30"
    >
      <div className="mx-auto max-w-page">
        <div className="grid gap-y-10 md:grid-cols-[minmax(0,601fr)_minmax(0,640fr)] md:gap-x-6 xl:gap-x-[39px]">
          <div className="flex flex-col items-start gap-6 md:pb-16 xl:pb-27">
            <h1 id="hero-title" className="enter font-lato text-hero-sm font-bold text-ink xl:text-hero">
              {hero.titleLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <p className="enter max-w-hero-copy font-lato text-lead-sm text-ink [--i:1] xl:text-lead">{hero.body}</p>
            <a href={`#${consultation.id}`} className={`enter [--i:2] ${primaryButton}`}>
              {hero.cta}
            </a>
          </div>

          <div className="flow-root md:self-end">
            <div className="relative mx-auto -mb-[13.125%] aspect-[640/592] max-w-[480px] md:-mt-[4.6875%] md:max-w-none">
              <Image
                src={emblem}
                alt=""
                fill
                sizes="(min-width: 1440px) 640px, (min-width: 768px) 50vw, min(calc(100vw - 40px), 480px)"
                preload
                fetchPriority="high"
                className="object-contain"
              />
              <div className="enter absolute top-[1.46%] left-[14.22%] aspect-[457/519] w-[71.41%] [--i:2]">
                <Image
                  src={portrait}
                  alt={hero.imageAlt}
                  fill
                  sizes="(min-width: 1440px) 457px, (min-width: 768px) 36vw, min(71vw, 343px)"
                  loading="eager"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        <ServiceList />
      </div>
    </section>
  );
}
