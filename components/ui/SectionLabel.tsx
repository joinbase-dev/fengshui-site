type SectionLabelProps = {
  id: string;
  children: React.ReactNode;
};

// The single-page design's section heading (Figma "title" in 1:751): an 18px red dot
// beside a small label. It is the section's h2.
export function SectionLabel({ id, children }: SectionLabelProps) {
  return (
    <h2 id={id} className="flex items-center gap-2 text-label font-medium text-black">
      <span aria-hidden="true" className="size-4.5 shrink-0 rounded-full bg-red-800" />
      {children}
    </h2>
  );
}
