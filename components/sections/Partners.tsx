import Image from "next/image";
import { partners } from "@/content/home";

// Figma Partners (19:1803): a white band, 32px above and below, of 120×44 logos 68px
// apart. At Ohm's request the row drifts left without end (two copies of the logos,
// moved by one copy's width; app/styles/home.css); it stands still under reduced
// motion. The second copy is hidden from screen readers.
export function Partners() {
  return (
    <section aria-label={partners.label} className="partner-strip overflow-hidden bg-white py-6 md:py-8">
      <div className="partner-track">
        {[false, true].map((isCopy) => (
          <ul key={String(isCopy)} aria-hidden={isCopy || undefined} className="flex shrink-0 items-center">
            {partners.logos.map((logo) => (
              <li key={logo.alt} className="partner-logo">
                <Image src={logo.src} alt={isCopy ? "" : logo.alt} sizes="120px" className="h-full w-full object-contain" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}
