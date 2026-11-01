import Image from "next/image";
import type { ServiceDetail } from "@/content/services";
import { ArrowRightIcon } from "@/components/ui/ArrowRightIcon";
import { CardSlideshow } from "@/components/ui/CardSlideshow";
import { ServiceLink } from "@/components/ui/ServiceLink";

type ServiceCardProps = {
  service: ServiceDetail;
  moreLabel: string;
};

// A service card. The whole card is one link to the service: a click opens its overlay
// in place.
//
// From sm up (Figma "Card 01", 19:1821; 558×270 at 1440): copy on the left, 40px in
// from the top, left and bottom, with "ดูรายละเอียด" and its arrow at the foot; the
// service's photo on the right, 219px wide and the card's full height, behind a
// hairline; a 2px grey border drawn inside the card over its edges (as Figma strokes
// inside), 8px corners. The photo is the design's 219×270 crop, so
// it fills its cell uncropped. The design draws the first card in its hover state (red
// border and title); hover and keyboard focus show that state, the arrow steps forward
// and the service's photos fade through (CardSlideshow).
//
// On phones (Figma 36:1803, 342 wide): no border but a soft shadow, the copy on white
// 24px in with the arrow alone at its top right, beside the first line only, and the
// photo full width under it at the design's 342×191 (its own wide crop; the hover
// slideshow is for mice, so phones never load it).
export function ServiceCard({ service, moreLabel }: ServiceCardProps) {
  const { eyebrow, lines, photo, phonePhoto } = service.card;
  const photos = [photo, ...service.gallery.filter((item) => item.src !== photo.src)];
  return (
    <ServiceLink
      slug={service.slug}
      aria-haspopup="dialog"
      className="group relative flex h-full flex-col overflow-hidden rounded-sm bg-white shadow-card focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand-red after:pointer-events-none after:absolute after:inset-0 after:z-10 after:rounded-sm after:border-2 after:border-transparent after:transition-colors after:duration-300 after:ease-refined sm:min-h-67.5 sm:flex-row sm:gap-3.75 sm:shadow-none sm:after:border-hairline sm:hover:after:border-brand-red sm:focus-visible:after:border-brand-red"
    >
      <div className="flex flex-col gap-2 p-6 sm:flex-1 sm:justify-between sm:gap-4 sm:py-10 sm:pr-0 sm:pl-10">
        <div className="flex flex-col gap-2 sm:gap-3">
          <div className="flex flex-col text-ink transition-colors duration-300 ease-refined group-hover:text-brand-red group-focus-visible:text-brand-red">
            {eyebrow && (
              <span lang="zh-Hans" className="pr-8 font-cjk text-kicker font-light sm:pr-0">
                {eyebrow}
              </span>
            )}
            <h3 className={`text-h3 font-semibold ${eyebrow ? "" : "pr-8 sm:pr-0"}`}>{service.title}</h3>
          </div>
          <p className="text-body text-ink-secondary sm:max-w-71">
            {lines.map((line, index) => (
              <span key={line} className="block">
                {index > 0 && " "}
                {line}
              </span>
            ))}
          </p>
        </div>
        <span className="hidden min-h-13 items-center gap-4 text-action font-semibold text-brand-red sm:inline-flex">
          {moreLabel}
          <ArrowRightIcon className="size-4 transition-transform duration-300 ease-refined group-hover:translate-x-1 group-focus-visible:translate-x-1" />
        </span>
        <ArrowRightIcon className="absolute top-7 right-6 size-4 text-brand-red sm:hidden" />
      </div>
      <div className="relative aspect-[342/191] shrink-0 overflow-hidden bg-placeholder sm:aspect-auto sm:w-54.75 sm:border-l sm:border-hairline">
        <Image src={phonePhoto} alt={photo.alt} fill sizes="100vw" quality={85} className="object-cover sm:hidden" />
        <div className="absolute inset-0 hidden sm:block">
          <CardSlideshow photos={photos} sizes="219px" />
        </div>
      </div>
    </ServiceLink>
  );
}
