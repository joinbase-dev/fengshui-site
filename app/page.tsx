import { SiteHeader } from "@/components/sections/SiteHeader";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { ServiceOverlay } from "@/components/sections/ServiceOverlay";
import { Gallery } from "@/components/sections/Gallery";
import { Footer } from "@/components/sections/Footer";
import { JsonLd } from "@/components/ui/JsonLd";
import { serviceDetails } from "@/content/services";
import { address, site, social } from "@/content/site";
import { siteUrl } from "@/lib/site-url";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  alternateName: site.nameEn,
  description: site.description,
  url: siteUrl,
  logo: `${siteUrl}/images/logo.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: address.street,
    addressLocality: address.city,
    postalCode: address.postalCode,
    addressCountry: "TH",
  },
  sameAs: [social.facebook.href, social.instagram.href, social.tiktok.href],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "บริการ",
    itemListElement: serviceDetails.map((service) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: service.title, description: service.description },
    })),
  },
};

// The whole site is this one static page: sections in the order of the design (Figma
// 1:751), each reached from the menu by its id. A service card opens that
// service's overlay in place; the overlays are rendered here, closed, after the page.
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
      <JsonLd data={structuredData} />
    </>
  );
}
