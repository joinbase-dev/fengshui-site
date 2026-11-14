import Image from "next/image";
import localFont from "next/font/local";
import { activities } from "@/content/home";

// The seal's 福 in Ma Shan Zheng, as the design sets it: a one-glyph subset (1.4 KB,
// from Google Fonts' text= API), loaded only where it is used.
const sealFont = localFont({
  src: "../../app/fonts/ma-shan-zheng-fu.woff2",
  display: "swap",
  preload: false,
  fallback: ["serif"],
});

// Figma Our Project (55:3696) with the Gallery / Marquee (86:1633): the h2 over a
// full-width strip of the club's photos in cream mounts, each with a red 福 seal (shape
// and drift in app/styles/home.css). The mounts are drawn twice so the strip can loop;
// the second copy is hidden from screen readers.
export function Activities() {
  const copies = [false, true];
  return (
    <section
      id={activities.id}
      aria-labelledby="activities-title"
      className="scroll-mt-6 overflow-hidden py-16 md:py-20 xl:py-25"
    >
      <h2 id="activities-title" className="px-5 text-center text-h2 font-semibold text-ink">
        {activities.title}
      </h2>
      <div className="activity-strip mt-10 md:mt-16">
        <div className="activity-track">
          {copies.map((isCopy) => (
            <ul key={String(isCopy)} aria-hidden={isCopy || undefined} className="activity-copy">
              {activities.photos.map((photo) => (
                <li key={photo.src.src} className="activity-mount">
                  <div className="activity-photo-frame">
                    <Image
                      src={photo.src}
                      alt={isCopy ? "" : photo.alt}
                      fill
                      quality={85}
                      sizes="(min-width: 1440px) 260px, (min-width: 1108px) 18vw, 200px"
                      className="activity-photo"
                    />
                  </div>
                  <span aria-hidden="true" className={`activity-seal ${sealFont.className}`}>
                    福
                  </span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
