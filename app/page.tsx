import { SiteHeader } from "@/components/sections/SiteHeader";
import { Hero } from "@/components/sections/Hero";
import { TikTokFeed } from "@/components/sections/TikTokFeed";
import { Consultation } from "@/components/sections/Consultation";
import { Footer } from "@/components/sections/Footer";
import { JsonLd } from "@/components/ui/JsonLd";
import { site } from "@/content/site";
import { siteUrl } from "@/lib/site-url";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  alternateName: site.nameEn,
  description: site.description,
  url: siteUrl,
  logo: `${siteUrl}/images/logo.png`,
};

export default function Home() {
  return (
    <>
      <SiteHeader currentHref="/" />
      <main id="main">
        <Hero />
        <TikTokFeed />
        <Consultation />
      </main>
      <Footer />
      <JsonLd data={structuredData} />
    </>
  );
}
