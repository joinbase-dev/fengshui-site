import { gallery } from "@/content/site";
import { activityAlbumPhotos } from "@/content/photos";
import { AlbumSlideshow } from "@/components/ui/AlbumSlideshow";
import { SectionLabel } from "@/components/ui/SectionLabel";

// Figma activities section (1:798): the section label over the same photo album as the
// hero. The design's frames are still empty, so at Ohm's request the album runs a
// random slideshow of the site's photos until the activity photos arrive.
export function Gallery() {
  return (
    <section
      id={gallery.id}
      aria-labelledby="activities-title"
      className="scroll-mt-6 px-5 pt-12 pb-20 md:px-10 lg:px-20 lg:pt-15 lg:pb-30"
    >
      <div className="mx-auto max-w-wide">
        <SectionLabel id="activities-title">{gallery.label}</SectionLabel>
        <AlbumSlideshow photos={activityAlbumPhotos} shuffleStart className="mt-8" />
      </div>
    </section>
  );
}
