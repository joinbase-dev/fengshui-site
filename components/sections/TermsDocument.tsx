import { CornerMarks } from "@/components/ui/CornerMarks";
import { terms, type TermsSection } from "@/content/terms";

// Figma "Terms document" (91:1796, phones 91:1879): a parchment sheet with brass corner
// marks. The heading block, a rule with a brass diamond, the red-edged "สิ่งสำคัญก่อน
// ยืนยัน" box, then the six numbered sections. Phones tighten the padding and type and
// leave out the date line, as the design does.
export function TermsDocument() {
  return (
    <article
      aria-labelledby="terms-title"
      className="relative flex flex-col gap-6 rounded-card border border-brass bg-parchment p-5 text-umber shadow-document md:gap-8 md:rounded-document md:p-14"
    >
      <CornerMarks variant="document" />

      <header className="flex flex-col gap-2.5">
        <p className="text-sm leading-label font-medium text-brass">
          <span lang="zh-Hant">{terms.eyebrowZh}</span> · {terms.eyebrow}
        </p>
        <h1 id="terms-title" className="font-serif-thai text-display-sm leading-tight font-bold text-lacquer md:text-doc-title">
          {terms.title}
        </h1>
        <p className="text-note leading-copy text-umber-soft md:text-brand">{terms.intro}</p>
        <p className="hidden text-fine leading-label text-brass md:block">
          {terms.updated}
          <span aria-hidden="true">&nbsp;&nbsp;·&nbsp;&nbsp;</span>
          <span className="sr-only"> </span>
          {terms.readingTime}
        </p>
      </header>

      <div aria-hidden="true" className="flex items-center gap-3">
        <span className="h-px flex-1 bg-brass/50" />
        <span className="size-2 rotate-45 bg-brass" />
        <span className="h-px flex-1 bg-brass/50" />
      </div>

      <section
        aria-labelledby="terms-important"
        className="flex flex-col gap-2.5 rounded-panel border-l-3 border-cinnabar bg-parchment-deep p-4.5 leading-copy md:px-7 md:py-6"
      >
        <h2 id="terms-important" className="text-base font-semibold text-cinnabar md:text-lg">
          {terms.importantTitle}
        </h2>
        <ul className="flex flex-col gap-2.5">
          {terms.important.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm md:gap-3 md:text-base">
              <span aria-hidden="true" className="w-3 shrink-0 pt-1.25 text-marker md:w-4 md:pt-0 md:text-base">
                ◆
              </span>
              <span className="flex-1">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {terms.sections.map((section) => (
        <TermsSectionBlock key={section.id} section={section} />
      ))}
    </article>
  );
}

function TermsSectionBlock({ section }: { section: TermsSection }) {
  return (
    <section id={section.id} aria-labelledby={`${section.id}-title`} className="terms-section flex flex-col gap-3">
      <h2 id={`${section.id}-title`} className="flex items-center gap-3.5 text-section-sm md:text-section">
        <span className="font-serif-thai leading-numeral font-semibold text-brass">{section.number}</span>
        <span className="leading-label font-bold text-lacquer">{section.title}</span>
      </h2>
      {typeof section.body === "string" ? (
        <p className="text-note leading-prose md:text-base">{section.body}</p>
      ) : (
        <ol className="flex flex-col gap-3">
          {section.body.map((item, index) => (
            <li key={item} className="flex items-start gap-2 text-note leading-prose md:text-base">
              <span aria-hidden="true" className="w-4 shrink-0 md:w-5">
                {index + 1}.
              </span>
              <span className="flex-1">{item}</span>
            </li>
          ))}
        </ol>
      )}
    </section>
  );
}
