// TikTok account shown on the site. Home links to the profile rather than embedding
// it: TikTok's embed answered with "overload-protect triggered" on the live site.

import masterPortrait from "@/public/images/services/master-portrait.jpg";

const username = "aj.damrongchai";

export const tiktok = {
  username,
  profileUrl: `https://www.tiktok.com/@${username}`,
  section: {
    id: "tiktok",
    title: "เคล็ดลับ จากอาจารย์ดำรงชัย",
    // Not in the design: the profile card that replaces TikTok's embed.
    name: "อาจารย์ดำรงชัย",
    handle: `@${username}`,
    cta: "ดูคลิปทั้งหมดบน TikTok",
    portrait: {
      src: masterPortrait,
      alt: "อาจารย์ดำรงชัยในชุดจีนสีแดง ถือโถกระเบื้องลายอักษรมงคล",
    },
  },
} as const;
