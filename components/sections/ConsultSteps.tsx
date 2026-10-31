import { consultSteps } from "@/content/home";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { CurvedArrowIcon } from "@/components/ui/CurvedArrowIcon";
import { StepIcon } from "@/components/ui/StepIcon";
import { Phrases } from "@/components/ui/Phrases";

const stepNumbers = [1, 2, 3] as const;

// Figma About & Process Section (19:1909): the h2, then the three steps of a
// consultation across 1140px with a hand-drawn arrow between each, then the two
// buttons, centred. Below lg (derived) the steps stack and the arrows turn to point
// down.
export function ConsultSteps() {
  return (
    <section
      id={consultSteps.id}
      aria-labelledby="consult-title"
      className="scroll-mt-6 bg-white px-5 py-16 md:px-10 md:py-20 xl:py-25"
    >
      <div className="mx-auto flex max-w-content flex-col items-center gap-10 md:gap-16">
        <h2 id="consult-title" className="text-center text-h2 font-semibold text-ink">
          <Phrases parts={consultSteps.title} />
        </h2>
        <div className="flex w-full flex-col items-center gap-12 lg:gap-17">
          <ol className="flex w-full flex-col items-center gap-4 lg:flex-row lg:items-start lg:justify-between lg:gap-2">
            {consultSteps.steps.map((step, index) => (
              <li key={step.title} className="flex flex-col items-center gap-4 lg:contents">
                {index > 0 && (
                  <span className="flex h-16 shrink-0 items-center lg:mt-6 lg:h-auto">
                    <CurvedArrowIcon className="h-auto w-14 rotate-90 text-ink-secondary lg:w-24 lg:rotate-0" />
                  </span>
                )}
                <div className="flex flex-col items-center gap-6 text-center">
                  <StepIcon step={stepNumbers[index]} className="h-14 w-auto" />
                  <div className="flex flex-col items-center gap-4">
                    <h3 className="text-h3 font-semibold text-ink">{step.title}</h3>
                    <p className="max-w-72 text-body text-ink-secondary">
                      {step.lines.map((line, lineIndex) => (
                        <span key={line} className="lg:block">
                          {lineIndex > 0 && " "}
                          {line}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
          <div className="flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row">
            <ButtonLink href={consultSteps.primary.href} variant="primary" className="sm:min-w-49.75">
              {consultSteps.primary.label}
            </ButtonLink>
            <ButtonLink href={consultSteps.secondary.href} variant="secondary">
              {consultSteps.secondary.label}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
