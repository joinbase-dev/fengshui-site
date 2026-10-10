// TikTok account shown on the site. Home shows its latest videos through the Display
// API once the account owner has approved it (docs/tiktok.md); until then it shows the
// videos listed below.

const username = "aj.damrongchai";

export const tiktok = {
  username,
  profileUrl: `https://www.tiktok.com/@${username}`,
  // How many of the latest videos Home shows (two rows of three in the design).
  count: 6,
  // Video links shown on Home while the Display API is not set up, newest first.
  // Paste from TikTok's Share → Copy link; replace them to change the row.
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
    // The name under every card in the design.
    authorName: "ฮวงจุ้ย อ.ดำรงชัย",
    // Not in the design: the screen-reader suffix on each card link.
    opensOnTikTok: "ดูบน TikTok",
    // Not in the design: the link under the profile embed shown before the API is set up.
    profileLink: `ดูคลิปทั้งหมดบน TikTok @${username}`,
  },
} as const;
