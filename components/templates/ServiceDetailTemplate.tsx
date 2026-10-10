import { SiteHeader } from "@/components/sections/SiteHeader";
import { ServiceHeroGallery } from "@/components/sections/ServiceHeroGallery";
import { ServiceIntro } from "@/components/sections/ServiceIntro";
import { ServiceHighlight } from "@/components/sections/ServiceHighlight";
import { ServiceLocation } from "@/components/sections/ServiceLocation";
import { ServiceVideo } from "@/components/sections/ServiceVideo";
import { PhotoBand } from "@/components/sections/PhotoBand";
import { Consultation } from "@/components/sections/Consultation";
import { PhotoGallery } from "@/components/sections/PhotoGallery";
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

// Every service page: the looping hero gallery, the title and intro, the service's
// own sections in data order, then the consultation form that the header and
// section buttons link to (so it is on every page), and an optional closing gallery.
export function ServiceDetailTemplate({ service }: ServiceDetailTemplateProps) {
  return (
    <>
      <SiteHeader currentHref={`/services/${service.slug}`} />
      <main id="main">
        <ServiceHeroGallery columns={service.heroGallery} />
        <ServiceIntro title={service.title} intro={service.intro} />
        {service.sections.map((section, index) => (
          <Section key={`${section.type}-${index}`} section={section} />
        ))}
        <Consultation />
        {service.closingGallery && <PhotoGallery photos={service.closingGallery} />}
      </main>
      <Footer />
    </>
  );
}
