import { checkoutSteps } from "@/content/terms";

// Figma "Stepper" (91:1759, 95:1798): ข้อกำหนด, ชำระเงิน, ยืนยันนัดหมาย, joined by
// short brass rules. A finished step is a gold dot with a tick, the current one a red
// dot ringed in gold, a later one a faint outline. On phones (91:1865, 95:2202) the
// rules shorten and, as the design shows, only the first step keeps its label; the
// others' labels stay for screen readers.
export function CheckoutStepper({ current }: { current: number }) {
  return (
    <nav aria-label="ขั้นตอน" className="flex justify-center pt-6 pb-5 md:pt-12 md:pb-10">
      <ol className="flex items-center gap-2 md:gap-4">
        {checkoutSteps.map((label, index) => {
          const done = index < current;
          const active = index === current;
          return (
            <li key={label} className="flex items-center gap-2 md:gap-4" aria-current={active ? "step" : undefined}>
              {index > 0 && (
                <span
                  aria-hidden="true"
                  className={`h-px w-6 md:w-14 ${index <= current ? "bg-brass-light" : "bg-brass-light/60"}`}
                />
              )}
              <span className={`flex items-center gap-2 ${done || active ? "" : "opacity-60"}`}>
                <span
                  aria-hidden="true"
                  className={`flex size-7 items-center justify-center rounded-full text-fine leading-none font-semibold ${
                    done
                      ? "bg-brass-light text-lacquer-deep"
                      : active
                        ? `bg-cinnabar text-parchment ${current === 0 ? "border-[1.5px]" : "border"} border-brass-light`
                        : "border-[1.5px] border-parchment/50 text-parchment"
                  }`}
                >
                  {done ? "✓" : index + 1}
                </span>
                <span
                  className={`text-note leading-none whitespace-nowrap text-parchment ${active ? "font-semibold" : ""} ${
                    done ? "opacity-75" : ""
                  } ${index === 0 ? "" : "sr-only md:not-sr-only"}`}
                >
                  {label}
                  {done && <span className="sr-only"> (เสร็จแล้ว)</span>}
                </span>
              </span>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
