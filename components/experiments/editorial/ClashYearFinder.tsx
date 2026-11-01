"use client";

import { useId, useState } from "react";
import { ServiceLink } from "@/components/ui/ServiceLink";
import { clashYear } from "@/content/experiments/editorial";
import { lineBooking } from "@/content/site";
import styles from "./editorial.module.css";

// A birth year (Buddhist or Gregorian) to its zodiac animal, or null if it is not one.
function animalFor(input: string): string | null {
  if (!/^\d{4}$/.test(input)) return null;
  const year = Number(input);
  const gregorian = year > 2400 ? year - 543 : year;
  if (gregorian < 1900 || gregorian > 2026) return null;
  return clashYear.animals[(((gregorian - 4) % 12) + 12) % 12];
}

// The page's live thing: type a birth year and read whether it clashes with 2569, with
// a way on to the sae-ki service. The summary above the field already names every
// clashing year, so the band says the same thing without script.
export function ClashYearFinder() {
  const [value, setValue] = useState("");
  const inputId = useId();
  const hintId = useId();
  const animal = animalFor(value);
  const clash = animal ? clashYear.clashes[animal] : undefined;

  return (
    <div id={clashYear.id} className={`${styles.grid} ${styles.clash}`} data-reveal>
      <div className={styles.clashText}>
        <h3 className={styles.clashTitle}>{clashYear.title}</h3>
        <p className={styles.clashSummary}>{clashYear.summary}</p>
      </div>
      <div className={styles.clashForm}>
        <label htmlFor={inputId} className={styles.clashLabel}>
          {clashYear.inputLabel}
        </label>
        <input
          id={inputId}
          className={styles.clashInput}
          inputMode="numeric"
          autoComplete="bday-year"
          maxLength={4}
          placeholder={clashYear.placeholder}
          aria-describedby={hintId}
          value={value}
          onChange={(event) => setValue(event.target.value.replace(/\D/g, ""))}
        />
        <span id={hintId} className={styles.clashHint}>
          {clashYear.inputHint}
        </span>
        <output htmlFor={inputId} aria-live="polite" className={styles.clashResult}>
          {value.length === 4 && !animal && <span className={styles.clashAnswer}>{clashYear.invalid}</span>}
          {animal && (
            <>
              <span className={styles.clashAnswer}>
                ปี{animal}: {clash ?? clashYear.noClash}
              </span>
              <span className={styles.clashLinks}>
                {clash && (
                  <ServiceLink slug={clashYear.serviceSlug} aria-haspopup="dialog">
                    {clashYear.serviceCta}
                  </ServiceLink>
                )}
                <a href={lineBooking} target="_blank" rel="noopener noreferrer">
                  {clashYear.consultCta}
                </a>
              </span>
            </>
          )}
        </output>
      </div>
    </div>
  );
}
