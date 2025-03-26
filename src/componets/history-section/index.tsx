import React from "react";
import { Section } from "../section";
import { CircleSliderPagination } from "../circle-slider-pagination";
import * as styles from "./history-section.module.scss";

export function HistorySection() {
  return (
    <Section.Root className="grid-stack">
      <Section.Title>
        Исторические <br /> даты
      </Section.Title>
      <div className={styles.historySectionTicker}>
        <span className={styles.historySectionTickerFrom}>2012</span>
        <span className={styles.historySectionTickerTo}>2020</span>
      </div>
      <CircleSliderPagination className={styles.historySectionCircle} />
    </Section.Root>
  );
}
