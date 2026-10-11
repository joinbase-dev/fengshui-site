import Image from "next/image";
import { tiktok } from "@/content/tiktok";
import { ArrowRightIcon } from "@/components/ui/ArrowRightIcon";
import { TikTokEmbed } from "@/components/ui/TikTokEmbed";
import { SocialIcon } from "@/components/ui/SocialIcon";

// Figma Tiktok section (405:1813): the heading over the account's videos, shown with
// TikTok's own creator profile embed (Ohm's choice). When TikTok fails to serve it
// (it answered "overload-protect triggered" on the live site), a profile card that
// links to TikTok takes its place. The whole card is the link; hover scales the
// photo and nudges the arrow.
export function TikTokFeed() {
  const { section } = tiktok;

  // Shown only when TikTok's embed fails to load.
  const card = (
    <a
      href={tiktok.profileUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex w-full max-w-tiktok flex-col items-center gap-6 rounded-sm border border-border bg-white p-6 transition duration-200 ease-refined hover:border-brand hover:shadow-card focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:flex-row sm:gap-8 sm:p-8"
    >
      <div className="size-32 shrink-0 overflow-hidden rounded-full border-2 border-brand sm:size-40">
        <Image
          src={section.portrait.src}
          alt={section.portrait.alt}
          sizes="160px"
          className="size-full object-cover object-top transition-transform duration-300 ease-refined motion-safe:group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col items-center gap-3 text-center sm:items-start sm:text-left">
        <p className="flex items-center gap-2 text-home-body text-black">
          <SocialIcon platform="tiktok" />
          {section.handle}
        </p>
        <p className="text-home-h3 font-semibold text-black">{section.name}</p>
        <span className="inline-flex min-h-11 items-center gap-2 text-home-nav font-semibold text-brand">
          {section.cta}
          <ArrowRightIcon className="size-5 transition-transform duration-200 ease-refined motion-safe:group-hover:translate-x-1" />
        </span>
      </div>
    </a>
  );

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

        <TikTokEmbed className="w-full max-w-tiktok" reserveClassName="min-h-140" fallback={card}>
          {/* TikTok's creator embed code, as Ohm pasted it from TikTok. */}
          <blockquote
            className="tiktok-embed m-0 max-w-tiktok min-w-72"
            cite={tiktok.profileUrl}
            data-unique-id={tiktok.username}
            data-embed-type="creator"
          >
            <section>
              <a href={`${tiktok.profileUrl}?refer=creator_embed`} target="_blank" rel="noopener noreferrer">
                {section.handle}
              </a>
            </section>
          </blockquote>
        </TikTokEmbed>
      </div>
    </section>
  );
}
