import Image from "next/image";
import { consultation } from "@/content/site";
import { ConsultationForm } from "@/components/ui/ConsultationForm";
import emblem from "@/public/images/emblem.png";

export function Consultation() {
  return (
    <section
      id={consultation.id}
      aria-labelledby="consultation-title"
      className="relative scroll-mt-6 overflow-hidden px-5 py-12 md:px-10 md:py-16 xl:px-30 xl:py-20"
    >
      <div className="relative mx-auto max-w-card">
        {/* Decorative emblem: 576×533 at 30% opacity, luminosity blend, its right edge 321px past the card
            (201px off the 1440 frame). The asset already carries 70% opacity, so 0.43 gives the design's 30%. */}
        <div className="pointer-events-none absolute top-1/2 right-[-321px] hidden aspect-[576/533] w-[576px] -translate-y-1/2 opacity-43 mix-blend-luminosity md:block">
          <Image src={emblem} alt="" fill sizes="576px" className="object-contain" />
        </div>

        <div className="reveal relative rounded-md border border-white bg-white/30 px-4 py-10 sm:px-5 shadow-card backdrop-blur-card md:px-6 md:py-16">
          <div className="mx-auto flex max-w-form flex-col items-center gap-10">
            <div className="flex flex-col items-center gap-4 text-center">
              <h2
                id="consultation-title"
                className="text-title-sm font-bold text-balance text-gray-900 lg:text-title"
              >
                {consultation.title}
              </h2>
              <p className="text-body-2 text-balance text-gray-800">
                {consultation.bodyLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </div>
            <ConsultationForm />
          </div>
        </div>
      </div>
    </section>
  );
}
