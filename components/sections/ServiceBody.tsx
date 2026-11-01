import type { ServiceDetail } from "@/content/services";
import { serviceUi } from "@/content/services";
import { ConsultLink } from "@/components/ui/ConsultLink";
import { ImageCarousel } from "@/components/ui/ImageCarousel";

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
  service: ServiceDetail;
  // "overlay": the home page's overlay (Figma 37:2816, 2026-11-01), its copy in white
  // in a translucent dark box. "page": the service's own page, black copy on sand.
  variant: "overlay" | "page";
};

const styles = {
  overlay: {
    copy: "flex w-full flex-col gap-4 rounded-sm border border-overlay-rule bg-black/20 p-6 text-body text-white shadow-overlay-box md:p-8",
    heading: "text-h3 font-semibold",
    paragraphs: "flex flex-col gap-6.5",
  },
  page: {
    copy: "flex w-full flex-col gap-2 text-copy-sm text-black md:text-copy",
    heading: "font-semibold",
    paragraphs: "flex flex-col gap-6",
  },
} as const;

// The rest of a service overlay and page: the photo carousel, the service's copy (a
// bold opening line, then paragraphs and bulleted lists), then the consult link (with
// the service's own wording, if it has one) 32px below. A service without photos
// leaves the carousel out.
export function ServiceBody({ service, variant }: ServiceBodyProps) {
  const style = styles[variant];
  const [heading, ...rest] = service.body;
  return (
    <div className="flex w-full flex-col items-start gap-8">
      <div className="flex w-full flex-col gap-6">
        {service.gallery.length > 0 && (
          <ImageCarousel
            photos={service.gallery}
            label={`${serviceUi.carousel.label}${service.title}`}
            labels={serviceUi.carousel}
            sizes="(min-width: 1024px) 638px, 100vw"
            loading={variant === "page" ? "eager" : "lazy"}
          />
        )}
        <div className={style.copy}>
          {heading?.type === "heading" && (
            <p className={style.heading}>
              <Lines lines={heading.lines} />
            </p>
          )}
          <div className={style.paragraphs}>
            {(heading?.type === "heading" ? rest : service.body).map((block, index) => {
              switch (block.type) {
                case "heading":
                  return (
                    <p key={index} className={style.heading}>
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
        </div>
      </div>
      <ConsultLink label={service.cta} tone={variant === "overlay" ? "light" : "red"} />
    </div>
  );
}
