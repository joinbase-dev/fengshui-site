import type { CSSProperties } from "react";
import Image from "next/image";
import { ArrowUpRightIcon } from "@/components/ui/ArrowUpRightIcon";
import { ServiceLink } from "@/components/ui/ServiceLink";
import { editorialServices, servicePhotos } from "@/content/experiments/editorial";
import { serviceDetails } from "@/content/services";
import { ClashYearFinder } from "./ClashYearFinder";
import styles from "./editorial.module.css";

// The services as a statement and a list pushed to the right, with one print at the
// left that changes to the service under the pointer or focus (desktop). On phones
// each service carries its own print. Each row opens the service's existing overlay,
// exactly as the live home page's cards do. The red clash-year band closes the section.
export function EditorialServices() {
  return (
    <section
      id={editorialServices.id}
      aria-labelledby="ed-services-title"
      className={`${styles.frame} ${styles.services}`}
    >
      <h2 id="ed-services-title" className={styles.servicesTitle} data-reveal>
        {editorialServices.titleLines.map((line) => (
          <span key={line}>{line}</span>
        ))}
      </h2>

      <div className={`${styles.grid} ${styles.servicesBody}`}>
        <div aria-hidden="true" className={styles.print} data-reveal>
          {serviceDetails.map((service) => {
            const photo = servicePhotos[service.slug];
            if (!photo) return null;
            return (
              <figure key={service.slug} className={styles.printItem}>
                <div className={styles.printPicture}>
                  <Image src={photo.src} alt="" fill sizes="(min-width: 1024px) 31vw, 1px" />
                </div>
                <figcaption className={styles.caption}>{photo.caption}</figcaption>
              </figure>
            );
          })}
        </div>

        <p className={styles.tableName}>{editorialServices.tableName}</p>

        <ul className={styles.list}>
          {serviceDetails.map((service, index) => {
            const photo = servicePhotos[service.slug];
            return (
              <li key={service.slug} data-reveal style={{ "--i": index } as CSSProperties}>
                {photo && (
                  <div className={styles.rowPhoto}>
                    <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 1024px) 1px, 90vw" />
                  </div>
                )}
                <ServiceLink slug={service.slug} aria-haspopup="dialog" className={styles.row}>
                  <span className={styles.rowKind}>{editorialServices.kinds[service.slug]}</span>
                  <h3 className={styles.rowTitle}>{service.title}</h3>
                  <ArrowUpRightIcon className={styles.rowArrow} />
                  <p className={styles.rowSummary}>{service.summaryLines.join(" ")}</p>
                </ServiceLink>
              </li>
            );
          })}
        </ul>
      </div>

      <ClashYearFinder />
    </section>
  );
}
