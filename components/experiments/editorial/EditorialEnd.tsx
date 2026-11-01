import Link from "next/link";
import { editorialEnd } from "@/content/experiments/editorial";
import styles from "./editorial.module.css";

// Says plainly that this page is an experiment, and leads back to the live home page.
export function EditorialEnd() {
  return (
    <footer className={`${styles.frame} ${styles.end}`}>
      <p>
        {editorialEnd.note} <Link href="/">{editorialEnd.homeLabel}</Link>
      </p>
    </footer>
  );
}
