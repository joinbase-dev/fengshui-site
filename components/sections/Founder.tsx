import Image from "next/image";
import { founderProfile } from "@/content/home";
import { CheckIcon } from "@/components/ui/CheckIcon";
import { LineButton } from "@/components/ui/LineButton";
import { Phrases } from "@/components/ui/Phrases";
import founderBackground from "@/public/images/home/v4/founder-bg.webp";

// Figma founder section (61:1886, 2026-11-13): 720px tall at 1440. A red temple sky
// that sinks into golden mist and mountains, darkened at the top where it meets the
// temple hall above and fading to cream at the foot, where the ink-wash sections start.
// อ.ดำรงชัย, cut out, stands on the left, cropped by the section's foot; on the right,
// 120px in and centred, the smoked-red glass card (622 wide, red hairline) with his name,
// the club's story, six areas of expertise in two columns and the LINE button. From lg
// the frame scales with the width (--u, app/styles/home.css). Below lg (derived) the
// portrait stands above the card, which overlaps his waist.
export function Founder() {
  const { photo } = founderProfile;
  return (
    <section
      id={founderProfile.id}
      aria-labelledby="founder-title"
      className="founder relative isolate scroll-mt-6 overflow-hidden bg-brand-red-dark"
    >
      <Image
        src={founderBackground}
        alt=""
        fill
        sizes="100vw"
        quality={75}
        className="-z-10 object-cover object-[100%_16%]"
      />
      <div aria-hidden="true" className="founder-fade-top" />
      <div aria-hidden="true" className="founder-fade-foot" />
      <div className="founder-stage">
        <div className="founder-figure">
          <Image
            src={photo.src}
            alt={photo.alt}
            sizes="(min-width: 1440px) 671px, (min-width: 1024px) 47vw, (min-width: 640px) 26rem, 88vw"
            quality={90}
            className="founder-portrait"
          />
        </div>
        <div className="founder-card relative flex w-full flex-col items-start gap-8 rounded-profile border border-brand-red bg-founder-card p-6 shadow-profile backdrop-blur-sm md:p-8">
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
