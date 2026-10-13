// The services, in the order of the home page's service list. To add one, create its
// data file next to these and add it here; the list, its overlay and the structured
// data pick it up.

import { auspiciousTiming } from "./auspicious-timing";
import { destinyPhysiognomy } from "./destiny-physiognomy";
import { fengShuiHome } from "./feng-shui-home";
import { saeKi } from "./sae-ki";
import type { ServiceDetail } from "./types";

export type * from "./types";
export { serviceUi } from "./ui";
export { serviceBooking } from "./booking";

export const serviceDetails: ServiceDetail[] = [fengShuiHome, destinyPhysiognomy, saeKi, auspiciousTiming];
