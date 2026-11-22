// A heading's text in phrases that must not break inside, such as a name: Thai has no
// spaces between words, so a narrow screen would otherwise split "อ.ดำรงชัย" across
// two lines. Each phrase stays whole; lines break only between them. With `joined`,
// the phrases are one run of Thai with no space between them, only places to break.
export function Phrases({ parts, joined = false }: { parts: readonly string[]; joined?: boolean }) {
  return parts.map((part, index) => (
    <span key={part}>
      {index > 0 && !joined && " "}
      <span className="inline-block">{part}</span>
    </span>
  ));
}
