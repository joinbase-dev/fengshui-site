// TikTok account shown on the site. Home lists its latest videos (lib/tiktok), so
// nothing here changes when new clips are posted.

const username = "aj.damrongchai";

export const tiktok = {
  username,
  profileUrl: `https://www.tiktok.com/@${username}`,
  // How many of the latest videos Home shows (two rows of three in the design).
  count: 6,
  section: {
    id: "tiktok",
    title: "เคล็ดลับ จากอาจารย์ดำรงชัย",
    // The name under every card in the design.
    authorName: "ฮวงจุ้ย อ.ดำรงชัย",
    // Not in the design: the screen-reader suffix on each card link.
    opensOnTikTok: "ดูบน TikTok",
    // Not in the design: the link under the profile embed shown before the API is set up.
    profileLink: `ดูคลิปทั้งหมดบน TikTok @${username}`,
  },
} as const;
