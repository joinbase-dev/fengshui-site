// TikTok account shown on the site. Home embeds its creator profile, which always
// lists the latest videos; the card below stands in when TikTok fails to serve it.

import masterPortrait from "@/public/images/services/master-portrait.jpg";

const username = "aj.damrongchai";

export const tiktok = {
  username,
  profileUrl: `https://www.tiktok.com/@${username}`,
  section: {
    id: "tiktok",
    title: "เคล็ดลับ จากอาจารย์ดำรงชัย",
    // Not in the design: the fallback profile card.
    name: "อาจารย์ดำรงชัย",
    handle: `@${username}`,
    cta: "ดูคลิปทั้งหมดบน TikTok",
    portrait: {
      src: masterPortrait,
      alt: "อาจารย์ดำรงชัยในชุดจีนสีแดง ถือโถกระเบื้องลายอักษรมงคล",
    },
  },
} as const;
