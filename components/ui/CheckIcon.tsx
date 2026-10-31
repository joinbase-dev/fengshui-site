// The design's 24px check (Figma "Icon / Check", 19:1883) in the founder's checklist.
export function CheckIcon({ className }: { className?: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.493 6.935a.75.75 0 0 1 .072 1.058l-7.857 9a.75.75 0 0 1-1.13 0l-3.143-3.6a.75.75 0 1 1 1.13-.986l2.578 2.953 7.292-8.353a.75.75 0 0 1 1.058-.072Z"
      />
    </svg>
  );
}
