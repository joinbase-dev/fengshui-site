import type { ServiceDetail } from "@/content/services";
import { ServiceHeroGallery } from "@/components/sections/ServiceHeroGallery";

type ServiceHeroProps = {
  titleLines: ServiceDetail["titleLines"];
  gallery: ServiceDetail["heroGallery"];
};

// Figma 405:2008 hero, 560px tall at 1440: the title on the 1080px content edge,
// vertically centred, and the photo gallery from 466px into the content row to the
// right edge of the page. Below lg (derived, not drawn) the gallery runs as a band
// under the title, bleeding off the right edge.
export function ServiceHero({ titleLines, gallery }: ServiceHeroProps) {
  return (
    <section aria-labelledby="service-title" className="relative overflow-hidden lg:h-140">
      <div className="px-5 pt-8 pb-10 md:px-10 md:pt-12 md:pb-14 lg:h-full lg:py-0">
        <div className="mx-auto max-w-home lg:flex lg:h-full lg:items-center lg:pt-9">
          <h1 id="service-title" className="enter text-detail-title-sm font-semibold text-black lg:text-detail-title">
            {titleLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
        </div>
      </div>
      <div className="relative ml-5 h-90 md:ml-10 md:h-120 lg:absolute lg:inset-y-0 lg:right-0 lg:left-[calc(50%-74px)] lg:ml-0 lg:h-auto">
        <ServiceHeroGallery columns={gallery} />
      </div>
    </section>
  );
}
