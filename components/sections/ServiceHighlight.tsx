import type { ServiceHighlightContent } from "@/content/services";
import { consultation } from "@/content/site";
import { lightButton } from "@/components/ui/button-styles";
import { PhotoFill } from "@/components/ui/PhotoFill";

function CheckIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0">
      <path d="M5 12.5l4.5 4.5L19 7.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

type ServiceHighlightProps = {
  highlight: ServiceHighlightContent;
};

// Figma "feature_29": a portrait card beside a dark glass card on a red photo
// background. On desktop the two sit in a 1200px row, bottom-aligned, 80px apart.
export function ServiceHighlight({ highlight }: ServiceHighlightProps) {
  return (
    <section
      aria-labelledby="service-highlight-title"
      className="relative overflow-hidden bg-red-900 px-5 py-12 md:px-10 md:py-16 xl:px-30 xl:py-24"
    >
      {highlight.background.src && <PhotoFill photo={highlight.background} sizes="100vw" />}

      <div className="reveal-group relative mx-auto flex max-w-card flex-col items-center gap-10 lg:flex-row lg:items-end lg:gap-12 xl:gap-20">
        <div className="relative aspect-[470/620] w-full max-w-sm shrink-0 overflow-hidden rounded-sm shadow-portrait sm:max-w-md lg:w-[39%] lg:max-w-portrait">
          <PhotoFill photo={highlight.portrait} sizes="(min-width: 1024px) 470px, 448px" />
        </div>

        <div className="flex w-full flex-col items-start gap-8 rounded-md border border-gray-400 bg-black/50 p-6 text-white shadow-glass backdrop-blur-glass md:p-8 lg:flex-1">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h2 id="service-highlight-title" className="text-heading-sm font-bold xl:text-heading">
                {highlight.title}
              </h2>
              <p className="text-subheading-sm font-bold xl:text-subheading">{highlight.subtitle}</p>
            </div>
            <p className="text-body-1">{highlight.body}</p>
            <ul className="grid gap-4 sm:w-fit sm:grid-cols-2 sm:gap-x-12 xl:gap-x-24">
              {highlight.benefits.map((benefit, index) => (
                // The placeholder benefits repeat, so the index keeps keys unique.
                <li key={`${benefit}-${index}`} className="flex items-center gap-2">
                  <CheckIcon />
                  <span className="text-body-1 font-bold opacity-70">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <a href={`#${consultation.id}`} className={lightButton}>
            {highlight.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
