// TikTok account shown on the site. Home embeds the videos listed below with TikTok's
// own player; change the links to change the row.

const username = "aj.damrongchai";

export const tiktok = {
  username,
  profileUrl: `https://www.tiktok.com/@${username}`,
  // How many videos Home shows (two rows of three in the design).
  count: 6,
  // Newest first. Paste from TikTok's Share → Copy link.
  videos: [
    "https://www.tiktok.com/@aj.damrongchai/video/7688221862798642452",
    "https://www.tiktok.com/@aj.damrongchai/video/7675977108467944724",
    "https://www.tiktok.com/@aj.damrongchai/video/7674863789971442965",
    "https://www.tiktok.com/@aj.damrongchai/video/7670038094069894421",
    "https://www.tiktok.com/@aj.damrongchai/photo/7659723668477578516",
    "https://www.tiktok.com/@aj.damrongchai/video/7587174385530981653",
  ] as readonly string[],
  section: {
    id: "tiktok",
    title: "เคล็ดลับ จากอาจารย์ดำรงชัย",
    // Not in the design: the fallback link inside each embed before it loads.
    videoLink: "ดูคลิปนี้บน TikTok",
    // Not in the design: the link under the embeds.
    profileLink: `ดูคลิปทั้งหมดบน TikTok @${username}`,
  },
} as const;
