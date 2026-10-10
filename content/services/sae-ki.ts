// แซกีเสริมดวง. Copy comes from the first sae-ki frame (Figma node 389:518); the
// new frame (406:3086) has not been checked against it yet.
//
// Photos marked `src: null` could not be exported from Figma yet; they render as
// the design's grey image slot until the files are added under
// public/images/services/ and imported here. Review each alt text against the
// real photo when it lands.

import saeKiMasterVase from "@/public/images/services/sae-ki-master-vase.jpg";
// 1x render from the Figma MCP, trimmed of its rounded corners; replace with a 2x export.
import saeKiTree from "@/public/images/services/sae-ki-tree.jpg";
import { placeholderGallery } from "./placeholders";
import type { PhotoAsset, ServiceDetail } from "./types";

const pending = (alt: string): PhotoAsset => ({ src: null, alt });

export const saeKi: ServiceDetail = {
  slug: "sae-ki",
  title: "แซกีเสริมดวง",
  metaTitle: "แซกีเสริมดวง | คลับฮวงจุ้ยแห่งประเทศไทย",
  metaDescription:
    "แซกีเสริมดวง เปลี่ยนดวง แก้กรรม ศาสตร์แขนงหนึ่งของฮวงจุ้ยที่เสริมพลังชีวิตและลดพลังปะทะ กับอาจารย์ดำรงชัย",
  heroGallery: placeholderGallery(2),
  intro: {
    tagline: "เปลี่ยนดวง แก้กรรม",
    paragraphs: [
      "แซกีเป็นศาสตร์แขนงหนึ่งของฮวงจุ้ย ในอดีตนั้น ฮวงจุ้ยเป็นเรื่องการจัดพลังงานของที่อยู่อาศัย พลังงานของสิ่งแวดล้อม เพื่อให้พลังงานนั้นกลับมาส่งเสริมชีวิตและครอบครัว",
      "แต่เมื่อจักรพรรดิ และขุนนางชั้นสูงต้องเดินทาง ไม่สามารถเลือกสิ่งแวดล้อมได้ ซินแสจึงต้องคิดวิธีเพิ่มพลังชีวิตอยู่เสมอ โดยการนำส่วนหนึ่งของ DNA ไปรับพลัง อยู่ท่ามกลางฮวงจุ้ยที่ดี ให้พลังชี่พัดผ่านอยู่เสมอ ดวงชะตาจะแข็งแรง ไม่ว่าจะไปรบ ทำการค้า หรือทำการฑูตอะไรก็สำเร็จ",
    ],
  },
  sections: [
    {
      type: "highlight",
      portrait: { src: saeKiMasterVase, alt: "อาจารย์ดำรงชัยในชุดจีนสีแดง ถือโถกระเบื้องลายอักษรมงคล" },
      background: pending(""),
      title: "แซกีช่วยปรับฮวงจุ้ยชีวิต",
      subtitle: "เคล็ดลับความรุ่งเรืองของจีนกว่า 1,000 ปี",
      body: "อีกหนึ่งเหตุผลที่ต้องทำแซกีคือเสริมพลังชีวิตวัยจร มนุษย์ทุกคนต้องมีช่วงที่วัยจร “ชง” หรือได้รับพลังปะทะ ไม่ว่าจะดวงชะตาแข็งแรงแค่ไหน ชะตาฟ้าก็จะส่งพลังงาน ที่ไม่ถูกกับดวงชะตาของเรา ให้ในช่วงใดช่วงช่วงของชีวิต เป็นเรื่องธรรมชาติ การทำแซกีจะช่วยลดพลังปะทะ และเสริมดวงชะตา",
      // Placeholder copy: the design repeats the same item six times.
      benefits: ["เสริมดวงชะตา", "เสริมดวงชะตา", "เสริมดวงชะตา", "เสริมดวงชะตา", "เสริมดวงชะตา", "เสริมดวงชะตา"],
      cta: "ปรึกษาอาจารย์ดำรงชัย",
    },
    {
      type: "location",
      titleLines: ["ชัยภูมิการทำแซกี", "ที่ได้ผลดีที่สุด"],
      quoteLines: ["“ชัยภูมิที่มี", "พลังมังกร”"],
      background: pending(""),
      columns: [
        [
          { title: "ต้นไม้", body: "เขียวชะอุ่มตลอดทั้งปี", photo: { src: saeKiTree, alt: "ต้นไม้ใหญ่ใบเขียวชะอุ่ม แสงแดดลอดผ่านกิ่งไม้" } },
          { title: "ดิน 5 สี", body: "อุดมสมบูรณ์ จากพื้นที่โดยตรง ไม่มีการถมทับ", photo: pending("หน้าดินธรรมชาติ") },
        ],
        [
          { title: "แม่น้ำธรรมชาติ", body: "ใสสะอาด ไม่มีโรงงานปล่อยน้ำเสีย", photo: pending("แม่น้ำใสไหลผ่านโขดหิน") },
          { title: "อากาศบริสุทธิ์", body: "ไม่มีมลพิษจากอุสาหกรรม และการเผาไหม้", photo: pending("ท้องฟ้าสีครามกับเมฆขาว") },
        ],
      ],
    },
    {
      type: "video",
      title: "การทำแซกี จากอาจารย์ดำรงชัย",
      body: "ปรับพลังงานชีวิต จากประสบการณ์จริงกว่า 20 ปี แซกีจากทั้งในไทยและต่างประเทศ",
      youtubeId: null,
    },
    {
      type: "photoBand",
      photo: pending("อาจารย์ดำรงชัยและผู้ร่วมพิธีแซกี ถ่ายภาพหมู่กลางทุ่งหญ้าริมภูเขา"),
    },
  ],
  closingGallery: [
    pending("ผู้ร่วมพิธีแซกีในเสื้อสีแดง"),
    pending("อาจารย์ดำรงชัยในชุดจีนสีแดง"),
    pending("อาจารย์ดำรงชัยกับเข็มทิศฮวงจุ้ย"),
  ],
};
