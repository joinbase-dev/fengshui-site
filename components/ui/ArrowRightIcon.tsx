// The design's 16px arrow (Figma "Union", 19:1830) after "ดูรายละเอียด" on the service cards.
export function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className={className}>
      <path
        fill="currentColor"
        d="M7.293.293a1 1 0 0 1 1.414 0l7 7a1 1 0 0 1 0 1.414l-7 7a1 1 0 0 1-1.414-1.414L12.586 9H1a1 1 0 1 1 0-2h11.586L7.293 1.707a1 1 0 0 1 0-1.414Z"
      />
    </svg>
  );
}
