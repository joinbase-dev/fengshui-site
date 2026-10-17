import Image from "next/image";
import { gallery } from "@/content/site";
import { activityAlbumPhotos } from "@/content/photos";
import { AlbumSlideshow } from "@/components/ui/AlbumSlideshow";
import { SectionLabel } from "@/components/ui/SectionLabel";
import emblem from "@/public/images/emblem.png";

// Figma activities section (1:798): the section label over a six-frame photo album on
// the faded club emblem. The design's frames are still empty, so at Ohm's request the
// album runs a random slideshow of the site's photos until the activity photos arrive.
export function Gallery() {
  return (
    <section
      id={gallery.id}
      aria-labelledby="activities-title"
      className="scroll-mt-6 overflow-hidden px-5 pt-12 pb-20 md:px-10 lg:px-20 lg:pt-15 lg:pb-30"
    >
      <div className="mx-auto max-w-wide">
        <SectionLabel id="activities-title">{gallery.label}</SectionLabel>
        <div className="relative mt-8 max-w-album">
          <Image
            src={emblem}
            alt=""
            sizes="(min-width: 1406px) 723px, 58vw"
            className="activities-emblem pointer-events-none absolute max-w-none opacity-25"
          />
          <AlbumSlideshow
            photos={activityAlbumPhotos}
            frames={6}
            shuffleStart
            className="photo-album-activities relative"
          />
        </div>
      </div>
    </section>
  );
}
