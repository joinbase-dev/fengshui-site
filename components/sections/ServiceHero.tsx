import type { ServiceDetail } from "@/content/services";
import { InfiniteImageLoop } from "@/components/ui/InfiniteImageLoop";

type ServiceHeroProps = {
  titleId: string;
  titleLines: ServiceDetail["titleLines"];
  gallery: ServiceDetail["heroGallery"];
};

// Top of a service overlay, laid out like the old service pages' hero (Figma 405:2008,
// 560px tall at 1440): the title on the 1080px content edge, vertically centred, and
// the image loop from 466px into the content row to the right edge. Below lg (derived,
// not drawn) the loop runs as a band under the title, bleeding off the right edge. A
// service without photos shows the title alone.
export function ServiceHero({ titleId, titleLines, gallery }: ServiceHeroProps) {
  const hasGallery = gallery.length > 0;
  return (
    <section aria-labelledby={titleId} className={`relative overflow-hidden ${hasGallery ? "lg:h-140" : ""}`}>
      <div className="px-5 pt-16 pb-10 md:px-10 md:pt-20 md:pb-14 lg:h-full lg:py-0">
        <div className={`mx-auto max-w-home lg:flex lg:h-full lg:items-center ${hasGallery ? "lg:pt-9" : "lg:pt-30"}`}>
          <h2 id={titleId} className="text-detail-title-sm font-semibold text-black lg:text-detail-title">
            {titleLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
        </div>
      </div>
      {hasGallery && (
        <div className="relative ml-5 h-90 md:ml-10 md:h-120 lg:absolute lg:inset-y-0 lg:right-0 lg:left-[calc(50%-74px)] lg:ml-0 lg:h-auto">
          <InfiniteImageLoop columns={gallery} />
        </div>
      )}
    </section>
  );
}
