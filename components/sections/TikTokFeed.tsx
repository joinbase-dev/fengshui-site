import { tiktok } from "@/content/tiktok";
import { TikTokEmbed } from "@/components/ui/TikTokEmbed";

function videoId(url: string) {
  return new URL(url).pathname.split("/").filter(Boolean).at(-1) ?? "";
}

// Figma Tiktok section (405:1813): the heading over six of the account's videos.
// Ohm chose TikTok's own video embeds over the design's cards: one column on phones,
// two from md, three from xl. Each embed is at least 325px wide (TikTok's minimum,
// hence the 16px phone gutter) and about 740px tall, which min-h reserves so the page
// below does not jump while they load. With no videos
// listed, the account's profile embed stands in.
export function TikTokFeed() {
  const { section } = tiktok;
  const videos = tiktok.videos.slice(0, tiktok.count);

  return (
    <section
      id={section.id}
      aria-labelledby="tiktok-title"
      className="scroll-mt-6 px-4 pt-10 pb-20 md:px-10 lg:pt-15 lg:pb-30"
    >
      <div className="mx-auto flex max-w-home flex-col items-center gap-10 lg:gap-15">
        <h2 id="tiktok-title" className="text-center text-home-h2-sm font-semibold text-black lg:text-home-h2">
          {section.title}
        </h2>

        {videos.length > 0 ? (
          <TikTokEmbed className="w-full">
            <ul className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {videos.map((url) => (
                <li key={url} className="min-h-185">
                  <blockquote className="tiktok-embed m-0" cite={url} data-video-id={videoId(url)}>
                    <section>
                      <a href={url} target="_blank" rel="noopener noreferrer">
                        {section.videoLink}
                      </a>
                    </section>
                  </blockquote>
                </li>
              ))}
            </ul>
          </TikTokEmbed>
        ) : (
          <TikTokEmbed className="min-h-140 w-full max-w-tiktok">
            <blockquote
              className="tiktok-embed m-0"
              cite={tiktok.profileUrl}
              data-unique-id={tiktok.username}
              data-embed-type="creator"
            >
              <section>
                <a href={`${tiktok.profileUrl}?refer=creator_embed`} target="_blank" rel="noopener noreferrer">
                  @{tiktok.username}
                </a>
              </section>
            </blockquote>
          </TikTokEmbed>
        )}

        <a
          href={tiktok.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xs text-body-2 text-red-900 underline underline-offset-4 transition-colors duration-200 ease-refined hover:text-brand hover:decoration-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        >
          {section.profileLink}
        </a>
      </div>
    </section>
  );
}
