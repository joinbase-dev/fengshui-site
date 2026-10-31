import { HomeHeader } from "@/components/sections/HomeHeader";
import { HomeHero } from "@/components/sections/HomeHero";
import { ServiceCards } from "@/components/sections/ServiceCards";
import { Founder } from "@/components/sections/Founder";
import { ConsultSteps } from "@/components/sections/ConsultSteps";
import { Activities } from "@/components/sections/Activities";
import { HomeFooter } from "@/components/sections/HomeFooter";
import { ServiceOverlay } from "@/components/sections/ServiceOverlay";
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

// The home page (Figma 19:1781, "Web v.3"), set in Noto Sans Thai on white. A service
// card, a service in the navbar or in the footer's quick links opens that service's
// overlay in place; the overlays are rendered here, closed, after the page. Each service
// also has a page of its own (app/services/[slug]), which those links point to for
// search engines and new tabs. The design's partner-logo strip is left out until the
// club confirms its partners (its logos are template stand-ins).
export default function Home() {
  return (
    <div className="home-page bg-white font-thai text-ink">
      <HomeHeader />
      <main id="main">
        <HomeHero />
        <ServiceCards />
        <Founder />
        <ConsultSteps />
        <Activities />
      </main>
      <HomeFooter />
      {serviceDetails.map((service) => (
        <ServiceOverlay key={service.slug} service={service} />
      ))}
      <JsonLd data={homeStructuredData(serviceDetails)} />
    </div>
  );
}
