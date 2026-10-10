import Image from "next/image";
import { hero, lineBooking } from "@/content/site";
import { ctaButton } from "@/components/ui/button-styles";
import { LineChatIcon } from "@/components/ui/LineChatIcon";
import emblem from "@/public/images/home/hero-emblem.png";
import heroImage from "@/public/images/home/hero.png";

// Figma Hero (405:2242), 1440 wide: 100px padding around a 1080px row of copy and the
// 541×394 photo cluster, with the faded club emblem cut off by the right edge (the
// exported image is already faded and cropped). Below lg (derived, not drawn) the photo stacks under the copy.
export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative overflow-hidden px-5 py-12 md:px-10 md:py-16 lg:py-25"
    >
      <Image
        src={emblem}
        alt=""
        sizes="488px"
        className="pointer-events-none absolute top-1/2 right-0 hidden w-122 -translate-y-1/2 lg:block"
      />
      <div className="relative mx-auto flex max-w-home flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
        <div className="flex flex-col items-start gap-10">
          <div className="flex flex-col gap-4 font-semibold text-black">
            <h1 id="hero-title" className="enter max-w-139.25 text-home-display-sm lg:text-home-display">
              {hero.titleLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <p className="enter text-home-lead-sm [--i:1] lg:text-home-lead">{hero.subtitle}</p>
          </div>
          <a href={lineBooking} target="_blank" rel="noopener noreferrer" className={`enter [--i:2] ${ctaButton}`}>
            <LineChatIcon className="size-7" />
            {hero.cta}
          </a>
        </div>

        <Image
          src={heroImage}
          alt={hero.imageAlt}
          sizes="(min-width: 1024px) 541px, min(calc(100vw - 40px), 541px)"
          preload
          fetchPriority="high"
          className="mx-auto w-full max-w-135.25 shrink-0 lg:mx-0"
        />
      </div>
    </section>
  );
}
