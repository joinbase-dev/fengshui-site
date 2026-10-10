// Service detail pages, in the order of the homepage service list. To add a
// service, create its data file next to these and add it here; the route, the
// sitemap and the metadata pick it up.

import { destinyPhysiognomy } from "./destiny-physiognomy";
import { fengShuiHome } from "./feng-shui-home";
import { saeKi } from "./sae-ki";
import type { ServiceDetail } from "./types";

export type * from "./types";
export { serviceUi } from "./ui";

export const serviceDetails: ServiceDetail[] = [fengShuiHome, destinyPhysiognomy, saeKi];

export function getServiceDetail(slug: string): ServiceDetail | undefined {
  return serviceDetails.find((service) => service.slug === slug);
}
