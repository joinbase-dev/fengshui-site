import { LineChatIcon } from "@/components/ui/LineChatIcon";
import { lineCta } from "@/content/home";

// The design's green "ปรึกษาอาจารย์ดำรงชัย" button (Figma "Hero Sections/CTA button
// link", 19:1902): the LINE glyph and the label, opening the club's LINE account, in
// the LINE brand green (--color-surface-brand-line, Ohm 2026-11-01).
export function LineButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={lineCta.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex min-h-13 items-center justify-center gap-1 rounded-panel bg-surface-brand-line whitespace-nowrap px-6 py-3 sm:px-10 text-action font-semibold text-white shadow-cta transition duration-200 ease-refined hover:brightness-110 hover:shadow-md active:scale-98 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-current ${className}`}
    >
      <LineChatIcon className="size-8 shrink-0 transition-transform duration-200 ease-refined group-hover:-rotate-6" />
      {lineCta.label}
    </a>
  );
}
