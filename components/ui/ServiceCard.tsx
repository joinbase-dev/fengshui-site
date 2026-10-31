import Image from "next/image";
import type { ServiceDetail } from "@/content/services";
import { ArrowRightIcon } from "@/components/ui/ArrowRightIcon";
import { ServiceLink } from "@/components/ui/ServiceLink";

type ServiceCardProps = {
  service: ServiceDetail;
  moreLabel: string;
};

// A service card (Figma "Card 01", 19:1821): copy on the left, 40px in, and the
// service's photo on the right behind a hairline, in a 270px card with a 2px border.
// The whole card is one link to the service: a click opens its overlay in place. The
// design draws the first card in its hover state (red border and title); hover and
// keyboard focus show that state, the arrow steps forward and the photo eases in.
// Below sm (derived) the photo sits on top of the copy.
export function ServiceCard({ service, moreLabel }: ServiceCardProps) {
  const { eyebrow, lines, photo } = service.card;
  return (
    <ServiceLink
      slug={service.slug}
      aria-haspopup="dialog"
      className="group flex h-full flex-col-reverse overflow-hidden rounded-sm border-2 border-hairline bg-white transition-colors duration-300 ease-refined hover:border-brand-red focus-visible:border-brand-red focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand-red sm:min-h-67.5 sm:flex-row"
    >
      <div className="flex flex-1 flex-col justify-between gap-4 p-6 sm:py-10 sm:pr-4 sm:pl-10">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col text-ink transition-colors duration-300 ease-refined group-hover:text-brand-red group-focus-visible:text-brand-red">
            {eyebrow && (
              <span lang="zh-Hans" className="font-cjk text-kicker font-light">
                {eyebrow}
              </span>
            )}
            <h3 className="text-h3 font-semibold">{service.title}</h3>
          </div>
          <p className="text-body text-ink-secondary sm:max-w-71">
            {lines.map((line, index) => (
              <span key={line} className="md:block">
                {index > 0 && " "}
                {line}
              </span>
            ))}
          </p>
        </div>
        <span className="inline-flex min-h-13 items-center gap-4 text-action font-semibold text-brand-red">
          {moreLabel}
          <ArrowRightIcon className="size-4 transition-transform duration-300 ease-refined group-hover:translate-x-1 group-focus-visible:translate-x-1" />
        </span>
      </div>
      <span className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-placeholder sm:aspect-auto sm:w-[39%] sm:max-w-54.75 sm:border-l sm:border-hairline">
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes="(min-width: 640px) 219px, 100vw"
          className="object-cover transition-transform duration-500 ease-refined group-hover:scale-104 group-focus-visible:scale-104"
        />
      </span>
    </ServiceLink>
  );
}
