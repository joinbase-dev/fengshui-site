import Image from "next/image";
import { clients } from "@/content/home";
import { Phrases } from "@/components/ui/Phrases";
import inkWash from "@/public/images/home/clients/ink-wash.webp";

// Figma Experience & Clients (122:1870, 2026-11-22), between the founder and the steps:
// a gold eyebrow between two fading rules and red diamonds, the h2, then the logos of
// organisations the master has advised in cream cards (Clients / Logo Card 122:1788),
// looping sideways between two gold rails (shape and drift in app/styles/home.css).
// The cards are drawn twice so the strip can loop; the second copy is hidden from
// screen readers. Under reduced motion the strip stands still and shows each logo once.
export function Clients() {
  const copies = [false, true];
  return (
    <section
      id={clients.id}
      aria-labelledby="clients-title"
      className="relative isolate scroll-mt-6 overflow-hidden bg-warm py-16 md:py-20 xl:py-25"
    >
      <Image
        src={inkWash}
        alt=""
        fill
        sizes="100vw"
        quality={75}
        className="-z-20 object-cover object-[50%_27%] opacity-45"
      />
      <div aria-hidden="true" className="clients-fade-top" />
      <div aria-hidden="true" className="clients-fade-foot" />
      <div className="flex flex-col items-center gap-3 px-5 text-center">
        <p className="flex items-center gap-3 text-client-eyebrow font-medium text-client-gold">
          <span aria-hidden="true" className="clients-rule hidden sm:block" />
          <span aria-hidden="true" className="clients-diamond" />
          <span>
            <Phrases parts={clients.eyebrow} />
          </span>
          <span aria-hidden="true" className="clients-diamond" />
          <span aria-hidden="true" className="clients-rule hidden sm:block" />
        </p>
        <h2 id="clients-title" className="text-h2 font-semibold text-ink">
          <Phrases parts={clients.title} joined />
        </h2>
      </div>
      <div className="clients-strip mt-10 md:mt-12">
        <div className="clients-track">
          {copies.map((isCopy) => (
            <ul
              key={String(isCopy)}
              aria-label={isCopy ? undefined : clients.listLabel}
              aria-hidden={isCopy || undefined}
              className="clients-copy"
            >
              {clients.logos.map((logo) => (
                <li key={logo.src.src} className="client-card">
                  <div className="client-logo">
                    <Image
                      src={logo.src}
                      alt={isCopy ? "" : logo.alt}
                      fill
                      quality={90}
                      sizes="(min-width: 768px) 190px, 142px"
                    />
                  </div>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
