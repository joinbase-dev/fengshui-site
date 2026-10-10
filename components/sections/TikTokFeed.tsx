import { tiktok } from "@/content/tiktok";
import { getLatestVideos } from "@/lib/tiktok/videos";
import { TikTokCard } from "@/components/ui/TikTokCard";
import { TikTokProfileEmbed } from "@/components/ui/TikTokProfileEmbed";

// Figma Tiktok section (405:1813): the heading over two rows of three 315px cards,
// spread across 1080px and 60px apart. The cards are the account's latest videos from the
// Display API (lib/tiktok, docs/tiktok.md); until that is set up, TikTok's own profile embed stands
// in so the section still shows the latest clips.
export async function TikTokFeed() {
  const { section } = tiktok;
  const feed = await getLatestVideos(tiktok.count);

  return (
    <section
      id={section.id}
      aria-labelledby="tiktok-title"
      className="scroll-mt-6 px-5 pt-10 pb-20 md:px-10 lg:pt-15 lg:pb-30"
    >
      <div className="mx-auto flex max-w-home flex-col items-center gap-10 lg:gap-15">
        <h2 id="tiktok-title" className="text-center text-home-h2-sm font-semibold text-black lg:text-home-h2">
          {section.title}
        </h2>

        {feed ? (
          <ul className="grid w-full grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 md:gap-x-6 lg:grid-cols-[repeat(3,var(--container-home-card))] lg:justify-between lg:gap-y-15">
            {feed.videos.map((video) => (
              <li key={video.id}>
                <TikTokCard
                  video={video}
                  authorName={section.authorName}
                  avatar={feed.avatar}
                  opensOnTikTok={section.opensOnTikTok}
                />
              </li>
            ))}
          </ul>
        ) : (
          <>
            {/* The embed sizes itself between 288px and 720px wide. min-h-140 (560px)
                reserves roughly its rendered height so the page below does not jump. */}
            <TikTokProfileEmbed
              username={tiktok.username}
              profileUrl={tiktok.profileUrl}
              className="min-h-140 w-full max-w-tiktok"
            />
            <a
              href={tiktok.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-body-2 text-red-900 underline underline-offset-4"
            >
              {section.profileLink}
            </a>
          </>
        )}
      </div>
    </section>
  );
}
