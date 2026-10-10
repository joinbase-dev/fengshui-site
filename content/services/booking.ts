// The booking block under every service page's copy (Figma 405:2008), shared by all
// services. Its button goes to the LINE account, the site's only booking channel.

import type { PhotoAsset } from "./types";
import masterVase from "@/public/images/services/sae-ki-master-vase.jpg";

export const serviceBooking = {
  title: "จองคิว/ปรึกษา อ.ดำรงชัย",
  // The design's line breaks; its third line also splits "เหมาะสม" mid-word, which
  // the page leaves to normal wrapping.
  bodyLines: [
    "รับคำปรึกษาจาก อ.ดำรงชัย แท่นศรีเจริญ แห่งคลับฮวงจุ้ยแห่งประเทศไทย",
    "ด้วยแนวทางการวิเคราะห์ที่คำนึงถึงพื้นฐานและความต้องการเฉพาะบุคคล",
    "เพื่อให้คุณเข้าใจศาสตร์จีนและนำคำแนะนำไปประกอบการวางแผนชีวิตได้อย่างเหมาะสม",
  ],
  cta: "จองคิวด่วน",
  portrait: {
    src: masterVase,
    alt: "อาจารย์ดำรงชัยในชุดจีนสีแดง ถือโถกระเบื้องลายอักษรมงคล",
  } satisfies PhotoAsset,
  name: "อาจารย์ดำรงชัย",
  affiliation: "คลับฮวงจุ้ยประเทศไทย",
} as const;
