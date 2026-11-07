import Image from "next/image";
import { activities } from "@/content/home";

// Figma Our Project (19:1936): the h2 over a full-width strip of plain rectangular photos
// (size and drift in app/styles/home.css). The tiles are drawn twice so the strip can
// loop; the second copy is hidden from screen readers.
export function Activities() {
  const copies = [false, true];
  return (
    <section
      id={activities.id}
      aria-labelledby="activities-title"
      className="scroll-mt-6 overflow-hidden bg-warm py-16 md:py-20 xl:py-25"
    >
      <h2 id="activities-title" className="px-5 text-center text-h2 font-semibold text-ink">
        {activities.title}
      </h2>
      <div className="activity-strip mt-10 md:mt-16">
        <div className="activity-track">
          {copies.map((isCopy) => (
            <ul key={String(isCopy)} aria-hidden={isCopy || undefined} className="flex">
              {activities.photos.map((photo) => (
                <li key={photo.src.src} className="activity-tile">
                  <Image
                    src={photo.src}
                    alt={isCopy ? "" : photo.alt}
                    sizes="(min-width: 1440px) 285px, (min-width: 895px) 20vw, 177px"
                    className="activity-photo"
                  />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
