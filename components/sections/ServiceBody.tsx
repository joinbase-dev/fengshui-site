import type { ServiceDetail } from "@/content/services";
import { ConsultLink } from "@/components/ui/ConsultLink";
import { InfiniteImageLoop } from "@/components/ui/InfiniteImageLoop";

// The design's line breaks hold from sm up; on phones the lines run together and wrap.
function Lines({ lines }: { lines: string[] }) {
  return lines.map((line, index) => (
    <span key={index} className="sm:block">
      {index > 0 && " "}
      {line}
    </span>
  ));
}

type ServiceBodyProps = {
  gallery: ServiceDetail["heroGallery"];
  blocks: ServiceDetail["body"];
  cta: ServiceDetail["cta"];
};

// The rest of a service overlay (Figma 1:3306, Ohm's mock-ups of 2026-10-17): the
// infinite image loop, the service's copy (a bold opening line, then 18px paragraphs
// and bulleted lists 24px apart), then the consult link (with the service's
// own wording, if it has one) 32px below. A service without photos leaves the loop out.
export function ServiceBody({ gallery, blocks, cta }: ServiceBodyProps) {
  return (
    <div className="flex flex-col items-start gap-8">
      <div className="flex w-full flex-col gap-6 text-copy-sm text-black md:text-copy">
        {gallery.length > 0 && (
          <div className="relative h-55 md:h-81.25">
            <InfiniteImageLoop columns={gallery} />
          </div>
        )}
        {blocks.map((block, index) => {
          switch (block.type) {
            case "heading":
              // Pulled up to 8px above the text it introduces.
              return (
                <p key={index} className="-mb-4 font-semibold">
                  <Lines lines={block.lines} />
                </p>
              );
            case "text":
              return (
                <p key={index}>
                  <Lines lines={block.lines} />
                </p>
              );
            case "list":
              return (
                <div key={index}>
                  <p>{block.title}</p>
                  <ul className="list-disc pl-6">
                    {block.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              );
          }
        })}
      </div>
      <ConsultLink label={cta} />
    </div>
  );
}
