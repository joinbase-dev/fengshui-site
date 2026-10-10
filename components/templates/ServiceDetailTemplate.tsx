import { SiteHeader } from "@/components/sections/SiteHeader";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { ServiceBody } from "@/components/sections/ServiceBody";
import { ServiceHighlight } from "@/components/sections/ServiceHighlight";
import { ServiceLocation } from "@/components/sections/ServiceLocation";
import { ServiceVideo } from "@/components/sections/ServiceVideo";
import { PhotoBand } from "@/components/sections/PhotoBand";
import { ServiceBooking } from "@/components/sections/ServiceBooking";
import { Gallery } from "@/components/sections/Gallery";
import { Footer } from "@/components/sections/Footer";
import type { ServiceDetail, ServiceSection } from "@/content/services";

function Section({ section }: { section: ServiceSection }) {
  switch (section.type) {
    case "highlight":
      return <ServiceHighlight highlight={section} />;
    case "location":
      return <ServiceLocation location={section} />;
    case "video":
      return <ServiceVideo video={section} />;
    case "photoBand":
      return <PhotoBand photo={section.photo} />;
  }
}

type ServiceDetailTemplateProps = {
  service: ServiceDetail;
};

// Every service page (Figma 405:2008): the title beside the looping gallery, the
// service's copy, any extra sections its data lists, the shared booking block, and
// the photo strip and footer shared with Home.
export function ServiceDetailTemplate({ service }: ServiceDetailTemplateProps) {
  return (
    <>
      <SiteHeader currentHref={`/services/${service.slug}`} />
      <main id="main">
        <ServiceHero titleLines={service.titleLines} gallery={service.heroGallery} />
        <ServiceBody blocks={service.body} />
        {service.sections?.map((section, index) => (
          <Section key={`${section.type}-${index}`} section={section} />
        ))}
        <ServiceBooking />
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
