// Service detail pages (Figma node 389:518). Copy is kept apart from layout so
// copy changes do not touch components.
//
// Photos marked `src: null` could not be exported from Figma yet; they render as
// the design's grey "Change Img Here" fill until the files are added under
// public/images/services/ and imported here. Review each alt text against the
// real photo when it lands.

import type { StaticImageData } from "next/image";

export type PhotoAsset = {
  src: StaticImageData | null;
  alt: string;
};

export type ServiceDetail = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroPhoto: PhotoAsset;
  intro: {
    tagline: string;
    paragraphs: string[];
  };
  highlight: {
    portrait: PhotoAsset;
    background: PhotoAsset;
    title: string;
    subtitle: string;
    body: string;
    benefits: string[];
    cta: string;
  };
  location: {
    titleLines: string[];
    quoteLines: string[];
    background: PhotoAsset;
    // Two columns of two tiles; the design alternates tall and short tiles.
    columns: { title: string; body: string; photo: PhotoAsset }[][];
  };
  video: {
    title: string;
    body: string;
    // YouTube video id; the frame shows the design's empty player until it is set.
    youtubeId: string | null;
  };
  groupPhoto: PhotoAsset;
  gallery: PhotoAsset[];
};

const pending = (alt: string): PhotoAsset => ({ src: null, alt });

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "sae-ki",
    title: "แซกีเสริมดวง",
    metaTitle: "แซกีเสริมดวง | คลับฮวงจุ้ยแห่งประเทศไทย",
    metaDescription:
      "แซกีเสริมดวง เปลี่ยนดวง แก้กรรม ศาสตร์แขนงหนึ่งของฮวงจุ้ยที่เสริมพลังชีวิตและลดพลังปะทะ กับอาจารย์ดำรงชัย",
    heroPhoto: pending("ศาลเจ้าจีนหลังคาสีแดงท่ามกลางต้นไม้"),
    intro: {
      tagline: "เปลี่ยนดวง แก้กรรม",
      paragraphs: [
        "แซกีเป็นศาสตร์แขนงหนึ่งของฮวงจุ้ย ในอดีตนั้น ฮวงจุ้ยเป็นเรื่องการจัดพลังงานของที่อยู่อาศัย พลังงานของสิ่งแวดล้อม เพื่อให้พลังงานนั้นกลับมาส่งเสริมชีวิตและครอบครัว",
        "แต่เมื่อจักรพรรดิ และขุนนางชั้นสูงต้องเดินทาง ไม่สามารถเลือกสิ่งแวดล้อมได้ ซินแสจึงต้องคิดวิธีเพิ่มพลังชีวิตอยู่เสมอ โดยการนำส่วนหนึ่งของ DNA ไปรับพลัง อยู่ท่ามกลางฮวงจุ้ยที่ดี ให้พลังชี่พัดผ่านอยู่เสมอ ดวงชะตาจะแข็งแรง ไม่ว่าจะไปรบ ทำการค้า หรือทำการฑูตอะไรก็สำเร็จ",
      ],
    },
    highlight: {
      portrait: pending("อาจารย์ดำรงชัยในชุดจีนสีแดง ถือแจกันกระเบื้อง"),
      background: pending(""),
      title: "แซกีช่วยปรับฮวงจุ้ยชีวิต",
      subtitle: "เคล็ดลับความรุ่งเรืองของจีนกว่า 1,000 ปี",
      body: "อีกหนึ่งเหตุผลที่ต้องทำแซกีคือเสริมพลังชีวิตวัยจร มนุษย์ทุกคนต้องมีช่วงที่วัยจร “ชง” หรือได้รับพลังปะทะ ไม่ว่าจะดวงชะตาแข็งแรงแค่ไหน ชะตาฟ้าก็จะส่งพลังงาน ที่ไม่ถูกกับดวงชะตาของเรา ให้ในช่วงใดช่วงช่วงของชีวิต เป็นเรื่องธรรมชาติ การทำแซกีจะช่วยลดพลังปะทะ และเสริมดวงชะตา",
      // Placeholder copy: the design repeats the same item six times.
      benefits: ["เสริมดวงชะตา", "เสริมดวงชะตา", "เสริมดวงชะตา", "เสริมดวงชะตา", "เสริมดวงชะตา", "เสริมดวงชะตา"],
      cta: "ปรึกษาอาจารย์ดำรงชัย",
    },
    location: {
      titleLines: ["ชัยภูมิการทำแซกี", "ที่ได้ผลดีที่สุด"],
      quoteLines: ["“ชัยภูมิที่มี", "พลังมังกร”"],
      background: pending(""),
      columns: [
        [
          { title: "ต้นไม้", body: "เขียวชะอุ่มตลอดทั้งปี", photo: pending("ต้นไม้ใหญ่ใบเขียวชะอุ่ม") },
          { title: "ดิน 5 สี", body: "อุดมสมบูรณ์ จากพื้นที่โดยตรง ไม่มีการถมทับ", photo: pending("หน้าดินธรรมชาติ") },
        ],
        [
          { title: "แม่น้ำธรรมชาติ", body: "ใสสะอาด ไม่มีโรงงานปล่อยน้ำเสีย", photo: pending("แม่น้ำใสไหลผ่านโขดหิน") },
          { title: "อากาศบริสุทธิ์", body: "ไม่มีมลพิษจากอุสาหกรรม และการเผาไหม้", photo: pending("ท้องฟ้าสีครามกับเมฆขาว") },
        ],
      ],
    },
    video: {
      title: "การทำแซกี จากอาจารย์ดำรงชัย",
      body: "ปรับพลังงานชีวิต จากประสบการณ์จริงกว่า 20 ปี แซกีจากทั้งในไทยและต่างประเทศ",
      youtubeId: null,
    },
    groupPhoto: pending("อาจารย์ดำรงชัยและผู้ร่วมพิธีแซกี ถ่ายภาพหมู่กลางทุ่งหญ้าริมภูเขา"),
    gallery: [
      pending("ผู้ร่วมพิธีแซกีในเสื้อสีแดง"),
      pending("อาจารย์ดำรงชัยในชุดจีนสีแดง"),
      pending("อาจารย์ดำรงชัยกับเข็มทิศฮวงจุ้ย"),
    ],
  },
];

export function getServiceDetail(slug: string): ServiceDetail | undefined {
  return serviceDetails.find((service) => service.slug === slug);
}
