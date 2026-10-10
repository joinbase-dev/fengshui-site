// TikTok account shown on the site. Home embeds its creator profile, which always
// lists the latest videos, so nothing here changes when new clips are posted.

const username = "aj.damrongchai";

export const tiktok = {
  username,
  profileUrl: `https://www.tiktok.com/@${username}`,
  section: {
    id: "tiktok",
    title: "เคล็ดลับ จากอาจารย์ดำรงชัย",
    // Not in the design: the link under the embed.
    profileLink: `ดูคลิปทั้งหมดบน TikTok @${username}`,
  },
} as const;
