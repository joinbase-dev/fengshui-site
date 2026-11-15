import { CornerMarks } from "@/components/ui/CornerMarks";
import { terms, type TermsSection } from "@/content/terms";

// Figma "Terms document" (91:1796, revised 2026-11-15): a parchment sheet with brass
// corner marks. The heading and intro, a rule with a brass diamond, the red-edged
// "สิ่งสำคัญก่อนยืนยัน" box, then the six numbered sections. Type follows the site's
// Fengshui styles (H2, H3, Body, Body large) in Noto Sans Thai, scaling down on phones
// as the home page does; phones also tighten the padding (91:1879).
export function TermsDocument() {
  return (
    <article
      aria-labelledby="terms-title"
      className="relative flex flex-col gap-6 rounded-card border border-brass bg-parchment p-5 text-umber shadow-document md:gap-8 md:rounded-document md:p-14"
    >
      <CornerMarks variant="document" />

      <header className="flex flex-col gap-2.5">
        <h1 id="terms-title" className="text-h2 leading-tight font-semibold text-lacquer">
          {terms.title}
        </h1>
        <p className="text-body-lg text-umber-soft">{terms.intro}</p>
      </header>

      <div aria-hidden="true" className="flex items-center gap-3">
        <span className="h-px flex-1 bg-brass/50" />
        <span className="size-2 rotate-45 bg-brass" />
        <span className="h-px flex-1 bg-brass/50" />
      </div>

      <section
        aria-labelledby="terms-important"
        className="flex flex-col gap-2.5 rounded-panel border-l-3 border-cinnabar bg-parchment-deep p-4.5 md:px-7 md:py-6"
      >
        <h2 id="terms-important" className="text-h3 font-semibold text-cinnabar">
          {terms.importantTitle}
        </h2>
        <ul className="flex flex-col gap-2.5">
          {terms.important.map((item) => (
            <li key={item} className="flex items-start gap-2 text-body md:gap-3">
              <span aria-hidden="true" className="w-3 shrink-0 pt-1.5 text-marker md:w-4 md:pt-0 md:text-body">
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
      <h2 id={`${section.id}-title`} className="flex items-center gap-3.5 text-h3 font-semibold">
        <span className="text-brass">{section.number}</span>
        <span className="text-lacquer">{section.title}</span>
      </h2>
      {typeof section.body === "string" ? (
        <p className="text-body">{section.body}</p>
      ) : (
        <ol className="flex flex-col gap-3">
          {section.body.map((item, index) => (
            <li key={item} className="flex items-start gap-2 text-body">
              <span aria-hidden="true" className="w-5 shrink-0">
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
