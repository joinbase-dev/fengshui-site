// Stand-in for the design's "photography/video-filled" icon, which could not be
// exported from Figma: a white rounded frame with a play triangle, 99px at desktop.
export function PlayIcon() {
  return (
    <svg width="99" height="99" viewBox="0 0 99 99" fill="none" aria-hidden="true" className="size-16 md:size-[99px]">
      <rect x="8" y="20" width="83" height="59" rx="14" fill="white" />
      <path d="M42 37.5v24l20-12-20-12z" fill="#333232" />
    </svg>
  );
}
