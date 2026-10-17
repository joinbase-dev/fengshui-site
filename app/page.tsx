import { SiteHeader } from "@/components/sections/SiteHeader";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { ServiceOverlay } from "@/components/sections/ServiceOverlay";
import { Gallery } from "@/components/sections/Gallery";
import { Footer } from "@/components/sections/Footer";
import { JsonLd } from "@/components/ui/JsonLd";
import { serviceDetails } from "@/content/services";
import { seo, shareImage } from "@/content/seo";
import { pageMetadata } from "@/lib/metadata";
import { homeStructuredData } from "@/lib/structured-data";

export const metadata = pageMetadata({
  title: seo.home.title,
  absoluteTitle: true,
  description: seo.home.description,
  path: "/",
  image: shareImage.home,
});

// The home page: sections in the order of the design (Figma 1:751), each reached from
// the menu by its id. A service card opens that service's overlay in place; the
// overlays are rendered here, closed, after the page. Each service also has a page of
// its own (app/services/[slug]), which the card links to for search engines and new tabs.
export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <Hero />
        <Services />
        <Gallery />
      </main>
      <Footer />
      {serviceDetails.map((service) => (
        <ServiceOverlay key={service.slug} service={service} />
      ))}
      <JsonLd data={homeStructuredData(serviceDetails)} />
    </>
  );
}
