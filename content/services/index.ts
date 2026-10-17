// The services, in the order of the home page's service list. To add one, create its
// data file next to these and add it here; the list, its overlay, its page, the
// sitemap and the structured data pick it up. Give it a share image too (README).

import { courses } from "./courses";
import { destinyPhysiognomy } from "./destiny-physiognomy";
import { fengShuiHome } from "./feng-shui-home";
import { saeKi } from "./sae-ki";
import type { ServiceDetail } from "./types";

export type * from "./types";
export { serviceUi } from "./ui";

export const serviceDetails: ServiceDetail[] = [fengShuiHome, destinyPhysiognomy, saeKi, courses];

// The address of a service's own page.
export function servicePath(slug: string): string {
  return `/services/${slug}`;
}
