import type { ServiceDetail } from "@/content/services";
import { video as videoLabels } from "@/content/site";
import { PlayIcon } from "@/components/ui/PlayIcon";
import { VideoPlayer } from "@/components/ui/VideoPlayer";

type ServiceVideoProps = {
  video: ServiceDetail["video"];
};

export function ServiceVideo({ video }: ServiceVideoProps) {
  return (
    <section
      aria-labelledby="service-video-title"
      className="bg-linear-to-b from-cream-400 to-white px-5 py-12 md:px-10 md:py-16 xl:px-30 xl:py-26"
    >
      <div className="reveal-group mx-auto flex max-w-card flex-col items-center gap-8 md:gap-12">
        <div className="flex max-w-form flex-col items-center gap-4 text-center">
          <h2 id="service-video-title" className="text-title-sm font-bold text-balance text-gray-900 lg:text-title">
            {video.title}
          </h2>
          <p className="text-body-2 text-balance text-gray-800">{video.body}</p>
        </div>

        <div className="relative aspect-video w-full overflow-hidden rounded-sm bg-gray-100 shadow-video">
          {video.youtubeId ? (
            <VideoPlayer youtubeId={video.youtubeId} title={video.title} playLabel={videoLabels.play} />
          ) : (
            // No video yet: the design's empty player frame, without a control that does nothing.
            <div className="absolute inset-0 flex items-center justify-center">
              <PlayIcon />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
