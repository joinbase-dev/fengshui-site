import { gallery, hero } from "@/content/site";
import { serviceDetails, type PhotoAsset } from "@/content/services";

// Every photo the site has besides the hero's, once each: the activity photos, then
// the services' (a photo repeated in a service's image loop carries an empty alt).
const otherPhotos: PhotoAsset[] = [
  ...gallery.photos,
  ...serviceDetails.flatMap((service) => service.heroGallery.flat().filter((photo) => photo.alt !== "")),
];

// What each album's slideshow draws from. The hero opens on its own four photos and
// then mixes in the rest; the activities album starts from a random four of the others.
export const heroAlbumPhotos: PhotoAsset[] = [...hero.photos, ...otherPhotos];
export const activityAlbumPhotos: PhotoAsset[] = otherPhotos;
