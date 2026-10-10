import Image from "next/image";
import { gallery } from "@/content/site";
import temple from "@/public/images/home/gallery-temple.jpg";
import compass from "@/public/images/home/gallery-compass.jpg";
import workshop from "@/public/images/home/gallery-workshop.jpg";

const sources = { temple, compass, workshop };

// Figma static-img-section (406:5434): three photos side by side, 498px tall at 1440
// with a 1px white border, full bleed. Below that width each keeps the 480×498 shape.
export function Gallery() {
  return (
    <section aria-label={gallery.label} className="grid grid-cols-3">
      {gallery.photos.map((photo) => (
        <div key={photo.name} className="relative aspect-[480/498] max-h-124.5 w-full overflow-hidden border border-white bg-border">
          <Image
            src={sources[photo.name]}
            alt={photo.alt}
            fill
            sizes="34vw"
            className="object-cover"
          />
        </div>
      ))}
    </section>
  );
}
