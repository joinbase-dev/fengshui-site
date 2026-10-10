import type { ServiceLocationContent } from "@/content/services";
import { PhotoFill } from "@/components/ui/PhotoFill";

type ServiceLocationProps = {
  location: ServiceLocationContent;
};

// Figma "8": the title column sits on the 1200px content edge and the tile grid runs
// off the right edge of the page, so from xl the section's left padding follows the
// centred container instead of the gutter.
export function ServiceLocation({ location }: ServiceLocationProps) {
  return (
    <section
      aria-labelledby="service-location-title"
      className="relative overflow-hidden bg-white px-5 py-12 md:px-10 md:py-16 xl:flex xl:gap-16 xl:py-30 xl:pr-0 xl:pl-[max(--spacing(30),calc((100%-var(--container-card))/2))]"
    >
      {location.background.src && (
        <PhotoFill photo={location.background} sizes="100vw" className="blur-photo" />
      )}

      <div className="reveal relative mb-10 flex flex-col gap-4 md:mb-12 xl:mb-0 xl:w-location-title xl:shrink-0 xl:gap-8 xl:pt-6">
        <h2 id="service-location-title" className="text-title-sm font-bold text-gray-900 xl:text-title">
          {location.titleLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>
        <p className="text-display-sm font-bold text-red-700 xl:text-display">
          {location.quoteLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </p>
      </div>

      <div className="reveal-group relative grid gap-4 sm:grid-cols-2 xl:flex-1">
        {location.columns.map((column, columnIndex) => (
          <ul key={columnIndex} className="flex flex-col gap-4">
            {column.map((tile, tileIndex) => {
              // Tiles alternate tall/short so the two columns interlock (480px and 380px at 1440);
              // in the single phone column they share one height.
              const tall = (columnIndex + tileIndex) % 2 === 0;
              return (
                <li
                  key={tile.title}
                  className={`relative flex flex-col justify-end overflow-hidden rounded-sm shadow-tile ${
                    tall ? "h-64 sm:h-80 md:h-100 xl:h-120" : "h-64 md:h-80 xl:h-95"
                  } ${columnIndex === 1 ? "xl:rounded-r-none" : ""}`}
                >
                  <PhotoFill photo={tile.photo} sizes="(min-width: 1280px) 40vw, (min-width: 640px) 50vw, 100vw" />
                  {/* White fade under the copy: a 260px white vector in Figma. */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-65 max-h-full bg-linear-to-t from-white to-transparent"
                  />
                  <div className="relative flex flex-col gap-1 p-5 md:p-6">
                    <h3 className="text-title-sm font-bold text-gray-900 xl:text-title">{tile.title}</h3>
                    <p className="text-tile-sm font-medium text-gray-800 xl:text-tile">{tile.body}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        ))}
      </div>
    </section>
  );
}
