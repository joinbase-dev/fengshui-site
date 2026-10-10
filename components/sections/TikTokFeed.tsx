import { tiktok } from "@/content/tiktok";
import { TikTokEmbed } from "@/components/ui/TikTokEmbed";

// Figma Tiktok section (405:1813): the heading over the account's videos. Ohm chose
// TikTok's own creator profile embed over the design's six cards; it lists the
// latest videos by itself, in one request instead of one per video. The embed sizes
// itself between 288px and 720px wide; min-h-140 (560px) reserves roughly its
// rendered height so the page below does not jump while it loads.
export function TikTokFeed() {
  const { section } = tiktok;

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
