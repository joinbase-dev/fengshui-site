import Image from "next/image";
import { hero } from "@/content/site";
import { ConsultLink } from "@/components/ui/ConsultLink";
import { PhotoAlbum } from "@/components/ui/PhotoAlbum";
import emblem from "@/public/images/emblem.png";

// Figma Hero-section (1:766), 1440 wide with 80px margins: the club label, the heading
// with its second half on a red band, the introduction and the consult link, then the
// photo album over the faded club emblem. Below lg (derived, not drawn) the type steps
// down and the album scales with the width.
export function Hero() {
  return (
    <section
      id={hero.id}
      aria-labelledby="hero-title"
      className="scroll-mt-6 overflow-hidden px-5 pt-10 pb-12 md:px-10 md:py-16 lg:px-20 lg:py-22.5"
    >
      <div className="mx-auto max-w-wide">
        <div className="flex flex-col items-start gap-6 font-medium text-black lg:gap-8">
          <p className="enter flex items-center gap-2 text-eyebrow">
            <span aria-hidden="true" className="size-4.5 shrink-0 rounded-full bg-red-800" />
            {hero.label}
          </p>
          <h1 id="hero-title" className="enter text-intro-sm [--i:1] md:text-intro">
            {hero.title}{" "}
            <span className="box-decoration-clone bg-red-800 px-1.5 py-3 text-white">{hero.titleHighlight}</span>
          </h1>
          <p className="enter text-intro-sm [--i:2] md:text-intro">{hero.intro}</p>
          <ConsultLink className="enter [--i:3]" />
        </div>

        <div className="relative mt-10 max-w-album md:mt-12 lg:mt-16">
          <Image
            src={emblem}
            alt=""
            sizes="(min-width: 1406px) 723px, 58vw"
            className="hero-emblem pointer-events-none absolute max-w-none opacity-25"
          />
          <PhotoAlbum photos={hero.photos} className="relative" />
        </div>
      </div>
    </section>
  );
}
