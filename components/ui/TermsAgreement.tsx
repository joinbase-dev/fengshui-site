"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { paymentPath, terms } from "@/content/terms";

// Figma "Agreement" (91:1846, phones 91:1929): the acceptance checkbox and "ถัดไป",
// which stays disabled until the box is ticked and then goes on to the payment page.
// The design draws only the ticked box; unticked, it is an empty gold outline.
export function TermsAgreement() {
  const router = useRouter();
  const [accepted, setAccepted] = useState(false);

  return (
    <form
      className="flex flex-col items-center gap-3.5 rounded-profile border border-brass-light/50 bg-lacquer/92 p-4 md:flex-row md:justify-between md:gap-6 md:px-7 md:py-5"
      onSubmit={(event) => {
        event.preventDefault();
        if (accepted) router.push(paymentPath);
      }}
    >
      <label className="group flex w-full cursor-pointer items-start gap-3 md:w-auto md:flex-1">
        <span className="relative flex size-6 shrink-0 items-center justify-center">
          <input
            type="checkbox"
            required
            checked={accepted}
            onChange={(event) => setAccepted(event.target.checked)}
            className="peer absolute inset-0 cursor-pointer appearance-none rounded-check border-[1.5px] border-brass-light bg-transparent transition-colors duration-200 ease-refined checked:bg-brass-light group-hover:bg-brass-light/15 checked:group-hover:bg-brass-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass-light"
          />
          <svg
            aria-hidden="true"
            viewBox="0 0 16 16"
            className="pointer-events-none relative size-4 text-lacquer opacity-0 transition-opacity duration-200 ease-refined peer-checked:opacity-100"
          >
            <path d="M3 8.5l3.2 3L13 4.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <span className="text-sm leading-normal text-parchment md:max-w-82.5 md:text-base">{terms.agreement}</span>
      </label>
      <button
        type="submit"
        disabled={!accepted}
        className="min-h-11 w-full shrink-0 cursor-pointer rounded-button bg-linear-to-r from-gilt-light to-gilt-dark px-6.5 py-3.5 text-base leading-none font-semibold text-lacquer transition duration-200 ease-refined hover:brightness-105 hover:shadow-md active:scale-98 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brass-light disabled:cursor-not-allowed disabled:opacity-45 disabled:hover:brightness-100 disabled:hover:shadow-none disabled:active:scale-100 md:w-42"
      >
        {terms.next}
      </button>
    </form>
  );
}
