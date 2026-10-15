import { gallery } from "@/content/site";
import { serviceDetails, type PhotoAsset } from "@/content/services";
import { AlbumSlideshow } from "@/components/ui/AlbumSlideshow";
import { SectionLabel } from "@/components/ui/SectionLabel";

// Every photo the site has besides the hero's, once each: the activity photos, then
// the services' (a photo repeated in a service's image loop carries an empty alt).
const photos: PhotoAsset[] = [
  ...gallery.photos,
  ...serviceDetails.flatMap((service) => service.heroGallery.flat().filter((photo) => photo.alt !== "")),
];

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
        <AlbumSlideshow photos={photos} className="mt-8" />
      </div>
    </section>
  );
}
