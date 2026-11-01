import type { CSSProperties } from "react";
import Image from "next/image";
import { editorialIntro } from "@/content/experiments/editorial";
import styles from "./editorial.module.css";

// The second beat: the founder's studio portrait at the left, and beside it, set lower,
// who he is, the club's introduction and its one real number.
export function EditorialIntro() {
  const { photo, fact } = editorialIntro;
  return (
    <section aria-labelledby="ed-intro-title" className={`${styles.frame} ${styles.grid} ${styles.intro}`}>
      <figure className={styles.introPhoto} data-reveal>
        <Image
          src={photo.src}
          alt={photo.alt}
          sizes="(min-width: 1024px) 28vw, (min-width: 768px) 38vw, 78vw"
        />
      </figure>
      <div className={styles.introText} data-reveal style={{ "--i": 2 } as CSSProperties}>
        <h2 id="ed-intro-title" className={styles.introTitle}>
          {editorialIntro.titleLines.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h2>
        <p className={styles.introLead}>{editorialIntro.text}</p>
        <p className={styles.fact}>
          <span className={styles.factValue}>{fact.value}</span>
          <span className={styles.factNote}>{fact.note}</span>
        </p>
      </div>
    </section>
  );
}
