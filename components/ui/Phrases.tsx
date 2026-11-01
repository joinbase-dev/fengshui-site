// A heading's text in phrases that must not break inside, such as a name: Thai has no
// spaces between words, so a narrow screen would otherwise split "อ.ดำรงชัย" across
// two lines. Each phrase stays whole; lines break only between them.
export function Phrases({ parts }: { parts: readonly string[] }) {
  return parts.map((part, index) => (
    <span key={part}>
      {index > 0 && " "}
      <span className="inline-block">{part}</span>
    </span>
  ));
}
