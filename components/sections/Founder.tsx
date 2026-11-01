import Image from "next/image";
import { founderProfile } from "@/content/home";
import { CheckIcon } from "@/components/ui/CheckIcon";
import { LineButton } from "@/components/ui/LineButton";
import { Phrases } from "@/components/ui/Phrases";
import founderBackground from "@/public/images/home/v3/founder-bg.webp";

// Figma feature_29 (19:1868): 812px tall at 1440 over the temple-and-dragon backdrop
// with its dark and red glows. Across 1200px, 80px apart and aligned at the foot: the
// founder's portrait (470×494, a heavy black shadow) and the smoked-glass card with
// his name, the club's story, six areas of expertise in two columns and the LINE
// button. Below xl (derived) the portrait sits above the card.
export function Founder() {
  const { photo } = founderProfile;
  return (
    <section
      id={founderProfile.id}
      aria-labelledby="founder-title"
      className="relative isolate scroll-mt-6 overflow-hidden bg-ink px-5 py-16 md:px-10 md:py-20 lg:py-39.75"
    >
      <Image
        src={founderBackground}
        alt=""
        fill
        sizes="100vw"
        quality={70}
        className="-z-10 object-cover object-[70%_50%]"
      />
      <div className="mx-auto flex max-w-founder flex-col items-center gap-10 xl:flex-row xl:items-end xl:gap-20">
        <div className="relative aspect-[470/494] w-full max-w-117.5 shrink-0 overflow-hidden rounded-sm bg-placeholder shadow-portrait">
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="(min-width: 510px) 470px, calc(100vw - 40px)"
            className="object-cover object-[50%_18%]"
          />
        </div>
        <div className="flex w-full flex-col items-start gap-8 rounded-profile border border-muted bg-profile-overlay p-6 shadow-profile backdrop-blur-sm md:p-8 xl:flex-1">
          <div className="flex flex-col gap-4 text-white">
            <h2 id="founder-title" className="text-h2 font-semibold">
              <Phrases parts={founderProfile.name} />
            </h2>
            <p className="text-body-lg">{founderProfile.bio}</p>
            <ul className="grid gap-x-24 gap-y-4 sm:grid-flow-col sm:grid-rows-3 sm:justify-start">
              {founderProfile.expertise.map((item) => (
                <li key={item} className="flex items-center gap-2 text-checklist font-semibold text-white/70">
                  <CheckIcon className="size-6 shrink-0 text-white" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <LineButton className="w-full sm:w-auto" />
        </div>
      </div>
    </section>
  );
}
