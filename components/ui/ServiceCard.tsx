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
// From sm up (Figma "Card 01", 55:3581; 588×270 at 1440): smoked black (50%) with a 2px
// brand-red border and 8px corners, over the temple-hall photo. Copy on the left, 40px in
// from the top, left and bottom: the white eyebrow and title, the gold summary and, at
// the foot, the white "ดูรายละเอียด" and its arrow; the service's photo on the right,
// 219px wide and the card's full height, edge to edge (no hairline: Ohm, 2026-11-14). The design widened the card
// from 558 to 588 but kept its 324 + 15 + 219 insides, leaving a 30px strip after the
// photo; here the copy takes those 30px so the photo stays flush with the edge. The
// design draws the first card in its hover state (deep red #800000): hover and keyboard
// focus show that state, the arrow steps forward and the service's photos fade through
// (CardSlideshow).
//
// On phones (derived from Figma 36:1803, 342 wide): the same smoked card, the copy 24px
// in with the arrow alone at its top right, beside the first line only, and the photo
// full width under it at the design's 342×191 (its own wide crop; the hover slideshow is
// for mice, so phones never load it).
export function ServiceCard({ service, moreLabel }: ServiceCardProps) {
  const { eyebrow, lines, photo, phonePhoto } = service.card;
  const photos = [photo, ...service.gallery.filter((item) => item.src !== photo.src)];
  return (
    <ServiceLink
      slug={service.slug}
      aria-haspopup="dialog"
      className="group relative flex h-full flex-col overflow-hidden rounded-sm bg-card transition-colors duration-300 ease-refined hover:bg-card-active focus-visible:bg-card-active focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand-gold after:pointer-events-none after:absolute after:inset-0 after:z-10 after:rounded-sm after:border-2 after:border-brand-red sm:min-h-67.5 sm:flex-row sm:gap-3.75"
    >
      <div className="flex flex-col gap-2 p-6 sm:flex-1 sm:justify-between sm:gap-4 sm:py-10 sm:pr-0 sm:pl-10">
        <div className="flex flex-col gap-2 sm:gap-3">
          <div className="flex flex-col text-white">
            {eyebrow && (
              <span lang="zh-Hans" className="pr-8 font-cjk text-kicker font-light sm:pr-0">
                {eyebrow}
              </span>
            )}
            <h3 className={`text-h3 font-semibold ${eyebrow ? "" : "pr-8 sm:pr-0"}`}>{service.title}</h3>
          </div>
          <p className="text-body text-brand-gold sm:max-w-71">
            {lines.map((line, index) => (
              <span key={line} className="block">
                {index > 0 && " "}
                {line}
              </span>
            ))}
          </p>
        </div>
        <span className="hidden min-h-13 items-center gap-4 text-action font-semibold text-white sm:inline-flex">
          {moreLabel}
          <ArrowRightIcon className="size-4 transition-transform duration-300 ease-refined group-hover:translate-x-1 group-focus-visible:translate-x-1" />
        </span>
        <ArrowRightIcon className="absolute top-7 right-6 size-4 text-white sm:hidden" />
      </div>
      <div className="relative aspect-[342/191] shrink-0 overflow-hidden bg-placeholder sm:aspect-auto sm:w-54.75">
        <Image src={phonePhoto} alt={photo.alt} fill sizes="100vw" quality={85} className="object-cover sm:hidden" />
        <div className="absolute inset-0 hidden sm:block">
          <CardSlideshow photos={photos} sizes="219px" />
        </div>
      </div>
    </ServiceLink>
  );
}
