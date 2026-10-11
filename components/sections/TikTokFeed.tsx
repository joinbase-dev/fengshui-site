import Image from "next/image";
import { tiktok } from "@/content/tiktok";
import { ArrowRightIcon } from "@/components/ui/ArrowRightIcon";
import { SocialIcon } from "@/components/ui/SocialIcon";

// Figma Tiktok section (405:1813): the heading over the account's videos. TikTok's
// profile embed kept failing on the live site ("overload-protect triggered"), so the
// section is a profile card linking to TikTok, served from this site with no
// third-party script. The whole card is the link; hover lifts the photo and nudges
// the arrow.
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
      </div>
    </section>
  );
}
