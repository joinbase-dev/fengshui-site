import type { ServiceDetail } from "@/content/services";
import { ConsultLink } from "@/components/ui/ConsultLink";
import { InfiniteImageLoop } from "@/components/ui/InfiniteImageLoop";

type ServiceBodyProps = {
  gallery: ServiceDetail["heroGallery"];
  blocks: ServiceDetail["body"];
  cta: ServiceDetail["cta"];
};

// The rest of a service overlay (Figma 1:3306): the infinite image loop, the service's
// copy as plain 18px paragraphs 24px apart, then the consult link (with the service's
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
            case "lead":
            case "text":
              return <p key={index}>{block.lines.join(" ")}</p>;
            case "highlight":
              return <p key={index}>{block.text}</p>;
            case "list":
              return (
                <div key={index}>
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
      <ConsultLink label={cta} />
    </div>
  );
}
