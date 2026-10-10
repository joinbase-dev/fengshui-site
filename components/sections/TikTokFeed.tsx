import { tiktok } from "@/content/tiktok";
import { TikTokProfileEmbed } from "@/components/ui/TikTokProfileEmbed";

// Not in the current design: an interim layout built from the site's existing
// tokens so the feed can be previewed; restyle this wrapper for the redesign.
export function TikTokFeed() {
  const { section } = tiktok;
  return (
    <section
      id={section.id}
      aria-labelledby="tiktok-title"
      className="scroll-mt-6 px-5 py-12 md:px-10 md:py-16 xl:px-30 xl:py-20"
    >
      <div className="mx-auto flex max-w-card flex-col items-center gap-10">
        <h2
          id="tiktok-title"
          className="font-lato text-title-sm font-bold text-balance text-gray-900 lg:text-title"
        >
          {section.title}
        </h2>
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
      </div>
    </section>
  );
}
