// Feng Shui for Homes & Places (Figma node 405:2008). The frame could not be read
// yet, so the page has only its title (the homepage service list's wording) and
// the placeholder gallery. Add the intro and sections from the frame.

import { placeholderGallery } from "./placeholders";
import type { ServiceDetail } from "./types";

export const fengShuiHome: ServiceDetail = {
  slug: "feng-shui-home",
  title: "ฮวงจุ้ยบ้านและอาคาร",
  metaTitle: "ฮวงจุ้ยบ้านและอาคาร | คลับฮวงจุ้ยแห่งประเทศไทย",
  metaDescription: "ฮวงจุ้ยบ้านและอาคาร กับอาจารย์ดำรงชัย คลับฮวงจุ้ยแห่งประเทศไทย รับคำปรึกษาฟรีกับผู้เชี่ยวชาญ",
  heroGallery: placeholderGallery(0),
  intro: { paragraphs: [] },
  sections: [],
};
