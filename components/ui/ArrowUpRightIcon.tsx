// The design's "at-icons:arrow-up-right" (Iconify), in the service card's red circle.
export function ArrowUpRightIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 16 16" aria-hidden="true" className={`shrink-0 ${className}`}>
      <path
        fill="currentColor"
        d="M13 2a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V5.414l-8.293 8.293a1 1 0 1 1-1.414-1.414L10.586 4H3a1 1 0 0 1 0-2z"
      />
    </svg>
  );
}
