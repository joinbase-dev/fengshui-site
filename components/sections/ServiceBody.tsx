import type { ServiceBodyBlock } from "@/content/services";

type ServiceBodyProps = {
  blocks: ServiceBodyBlock[];
};

// Gaps between blocks, from the frame at 1440: a blank line between the opening
// paragraphs and before a list, and close spacing around the red bands.
function gapBefore(block: ServiceBodyBlock, previous: ServiceBodyBlock | undefined) {
  if (!previous) return "";
  if (block.type === "lead") return "mt-9";
  if (previous.type === "lead") return "mt-8";
  if (block.type === "list" || (block.type === "text" && previous.type === "text")) return "mt-6";
  return "mt-1";
}

// Design line breaks hold from lg up; below that the lines run together and wrap.
function Lines({ lines }: { lines: string[] }) {
  return lines.map((line, index) => (
    <span key={line} className="lg:block">
      {index > 0 && " "}
      {line}
    </span>
  ));
}

// Figma 405:2008 copy block: left-aligned on the 1080px content edge, with large
// opening paragraphs, red highlight bands, body text and a dashed list.
export function ServiceBody({ blocks }: ServiceBodyProps) {
  return (
    <section className="px-5 pt-12 pb-16 md:px-10 md:pt-16 lg:pt-30 lg:pb-40">
      <div className="reveal-group mx-auto flex max-w-home flex-col items-start text-black">
        {blocks.map((block, index) => {
          const gap = gapBefore(block, blocks[index - 1]);
          switch (block.type) {
            case "lead":
              return (
                <p key={index} className={`text-detail-lead-sm md:text-detail-lead ${gap}`}>
                  <Lines lines={block.lines} />
                </p>
              );
            case "highlight":
              return (
                <p key={index} className={`bg-red-800 px-3 py-1.5 text-detail-body font-semibold text-white ${gap}`}>
                  {block.text}
                </p>
              );
            case "text":
              return (
                <p key={index} className={`text-detail-body ${gap}`}>
                  <Lines lines={block.lines} />
                </p>
              );
            case "list":
              return (
                <div key={index} className={`text-detail-body ${gap}`}>
                  <p>{block.title}</p>
                  <ul>
                    {block.items.map((item) => (
                      <li key={item} className="flex gap-1">
                        <span aria-hidden="true">-</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
          }
        })}
      </div>
    </section>
  );
}
