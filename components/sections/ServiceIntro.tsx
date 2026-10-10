import Image from "next/image";
import type { ServiceDetail } from "@/content/services";
import emblem from "@/public/images/emblem.png";

type ServiceIntroProps = {
  title: ServiceDetail["title"];
  intro: ServiceDetail["intro"];
};

export function ServiceIntro({ title, intro }: ServiceIntroProps) {
  return (
    <section
      aria-labelledby="service-title"
      className="relative overflow-hidden px-5 py-12 md:px-10 md:py-16 xl:px-30 xl:py-22.5"
    >
      {/* Decorative emblem: 531×491 at 15% opacity, multiply blend, 140px past the 1440 frame's
          right edge and 143px from the top. The asset already carries 70% opacity, so 0.21 gives 15%.
          Shown only beside intro copy; a title alone is too short to hold it. */}
      {intro.paragraphs.length > 0 && (
        <div className="pointer-events-none absolute top-36 -right-35 hidden aspect-[531/491] w-133 opacity-21 mix-blend-multiply md:block">
          <Image src={emblem} alt="" fill sizes="531px" className="object-contain" />
        </div>
      )}

      <div className="reveal-group relative mx-auto flex max-w-intro flex-col items-center gap-6 text-center md:gap-8">
        <h1 id="service-title" className="text-display-sm font-bold text-gray-900 xl:text-display">
          {title}
        </h1>
        {(intro.tagline || intro.paragraphs.length > 0) && (
          <div className="flex flex-col gap-4">
            {intro.tagline && <p className="text-body-2 font-bold text-red-800">{intro.tagline}</p>}
            {intro.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-body-1 text-pretty text-gray-900">
                {paragraph}
              </p>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
