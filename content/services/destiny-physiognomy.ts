// Personal Destiny & Physiognomy (Figma node 406:2959). The frame could not be read
// yet, so the page has only its title (the homepage service list's wording) and
// the placeholder gallery. Add the intro and sections from the frame.

import { placeholderGallery } from "./placeholders";
import type { ServiceDetail } from "./types";

export const destinyPhysiognomy: ServiceDetail = {
  slug: "destiny-physiognomy",
  title: "ดูโหงวเฮ้งจากใบหน้า",
  metaTitle: "ดูโหงวเฮ้งจากใบหน้า | คลับฮวงจุ้ยแห่งประเทศไทย",
  metaDescription: "ดูดวงชะตาและโหงวเฮ้งจากใบหน้า กับอาจารย์ดำรงชัย คลับฮวงจุ้ยแห่งประเทศไทย รับคำปรึกษาฟรีกับผู้เชี่ยวชาญ",
  heroGallery: placeholderGallery(1),
  intro: { paragraphs: [] },
  sections: [],
};
