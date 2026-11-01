import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/ui/ArrowUpRightIcon";
import { editorialHeader, editorialHero } from "@/content/experiments/editorial";
import logo from "@/public/images/logo.png";
import styles from "./editorial.module.css";

// The first screen: one photograph of อ.ดำรงชัย reading a building site fills it, its
// sky left empty. The club's name sits small top-left like a letterhead, three links
// top-right, and along the bottom the name again as the h1, with the sentence and the
// one action on the same baseline at the right. On phones the photograph is a 4:5
// crop around him with the type below it, so no line of type crosses his face.
export function EditorialHero() {
  const { photo } = editorialHero;
  return (
    <section aria-labelledby="ed-hero-title" className={`${styles.hero} ${styles.frame}`}>
      <div className={styles.heroMedia}>
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          priority
          sizes="100vw"
          quality={80}
          className={styles.heroPhoto}
        />
      </div>

      <header className={styles.bar}>
        <Link href="/" className={styles.letterhead} aria-label={editorialHeader.homeLabel}>
          <Image src={logo} alt="" width={44} height={44} />
          <span aria-hidden="true">
            {editorialHeader.nameLines.map((line, index) => (
              <span key={line} className={index === 2 ? styles.letterheadEn : undefined}>
                {line}
              </span>
            ))}
          </span>
        </Link>
        <nav aria-label={editorialHeader.navLabel} className={styles.nav}>
          <ul>
            {editorialHeader.nav.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  {...("external" in item ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <div className={`${styles.grid} ${styles.heroFoot}`}>
        <h1 id="ed-hero-title" className={styles.heroTitle}>
          {editorialHero.titleLines.map((line, index) => (
            <span key={line} className={styles.enter} style={{ "--i": index } as CSSProperties}>
              {line}
            </span>
          ))}
        </h1>
        <div className={`${styles.heroAside} ${styles.enter}`} style={{ "--i": 2 } as CSSProperties}>
          <p className={styles.heroSentence}>{editorialHero.sentence}</p>
          <a href={editorialHero.cta.href} target="_blank" rel="noopener noreferrer" className={styles.button}>
            {editorialHero.cta.label}
            <ArrowUpRightIcon />
          </a>
        </div>
        <p className={`${styles.heroCaption} ${styles.enter}`} style={{ "--i": 3 } as CSSProperties}>
          {photo.caption}
        </p>
      </div>
    </section>
  );
}
