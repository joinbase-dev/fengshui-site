import type { Metadata } from "next";
import { Trirong } from "next/font/google";
import { EditorialHero } from "@/components/experiments/editorial/EditorialHero";
import { EditorialIntro } from "@/components/experiments/editorial/EditorialIntro";
import { EditorialServices } from "@/components/experiments/editorial/EditorialServices";
import { EditorialEnd } from "@/components/experiments/editorial/EditorialEnd";
import { RevealOnScroll } from "@/components/experiments/editorial/RevealOnScroll";
import styles from "@/components/experiments/editorial/editorial.module.css";
import { ServiceOverlay } from "@/components/sections/ServiceOverlay";
import { serviceDetails } from "@/content/services";

// A looped Thai serif with Latin, for this experiment only: the voice of a printed
// almanac rather than a web app. Light for the large lines, regular for reading,
// medium for titles.
const trirong = Trirong({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500"],
  variable: "--font-trirong",
  display: "swap",
});

// Never indexed and not in the sitemap: a design experiment, not a page of the site.
export const metadata: Metadata = {
  title: "ต้นแบบทดลอง: Editorial",
  robots: { index: false, follow: false },
};

// Design experiment: the home page's hero and service list in the "Contemporary
// Editorial" direction (docs/experiments/editorial.md). The live home page is untouched.
// The service rows open the same overlays as the home page.
export default function EditorialExperiment() {
  return (
    <div id="editorial" className={`${trirong.variable} ${styles.root}`}>
      <main id="main">
        <EditorialHero />
        <EditorialIntro />
        <EditorialServices />
      </main>
      <EditorialEnd />
      {serviceDetails.map((service) => (
        <ServiceOverlay key={service.slug} service={service} />
      ))}
      <RevealOnScroll rootId="editorial" />
    </div>
  );
}
