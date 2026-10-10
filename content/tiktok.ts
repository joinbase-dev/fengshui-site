// TikTok account shown on the site. The profile embed always shows the
// account's latest videos, so nothing here changes when new clips are posted.

const username = "aj.damrongchai";

export const tiktok = {
  username,
  profileUrl: `https://www.tiktok.com/@${username}`,
  section: {
    id: "tiktok",
    // Not in the design: interim copy until the redesign supplies it.
    title: "ติดตามเราบน TikTok",
    profileLink: `ดูคลิปทั้งหมดบน TikTok @${username}`,
  },
} as const;
