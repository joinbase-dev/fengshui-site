import Image from "next/image";
import type { TikTokVideo } from "@/lib/tiktok/videos";

type TikTokCardProps = {
  video: TikTokVideo;
  authorName: string;
  avatar: string | null;
  // Screen-reader suffix saying the link opens TikTok.
  opensOnTikTok: string;
};

// Figma "tiktok card -review" (405:2288): a 315×352 cover with 8px corners, then a
// 24px avatar and the account name. The whole card links to the video on TikTok.
export function TikTokCard({ video, authorName, avatar, opensOnTikTok }: TikTokCardProps) {
  return (
    <a
      href={video.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col gap-3 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand lg:gap-4"
    >
      <div className="relative aspect-[315/352] overflow-hidden rounded-sm bg-black/20">
        <Image
          src={video.cover}
          alt=""
          fill
          sizes="(min-width: 1024px) 315px, (min-width: 768px) 30vw, 45vw"
          className="object-cover"
        />
      </div>
      <div className="flex items-center gap-2">
        {avatar ? (
          <Image src={avatar} alt="" width={24} height={24} className="size-6 shrink-0 rounded-full bg-olive" />
        ) : (
          <span aria-hidden="true" className="size-6 shrink-0 rounded-full bg-olive" />
        )}
        <span className="truncate text-home-card-sm text-black lg:text-home-card">{authorName}</span>
      </div>
      <span className="sr-only">
        {video.caption ? `${video.caption} ` : ""}({opensOnTikTok})
      </span>
    </a>
  );
}
