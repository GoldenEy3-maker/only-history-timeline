import React, { useEffect, useRef } from "react";
import * as styles from "./history-section.module.scss";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

type TrickerProps = {
  from: number;
  to: number;
};

export function Ticker({ from, to }: TrickerProps) {
  const container = useRef<HTMLDivElement>(null);
  const fromRef = useRef<HTMLSpanElement>(null);
  const toRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (fromRef.current) fromRef.current.textContent = from.toString();
    if (toRef.current) toRef.current.textContent = to.toString();
  }, []);

  useGSAP(
    () => {
      gsap.to(fromRef.current, {
        duration: 0.8,
        textContent: from,
        snap: { textContent: 1 },
        ease: "none",
      });
      gsap.to(toRef.current, {
        duration: 0.8,
        textContent: to,
        snap: { textContent: 1 },
        ease: "none",
      });
    },
    {
      dependencies: [from, to],
      scope: container,
    }
  );

  return (
    <div className={styles.ticker} ref={container}>
      <span className={styles.tickerFrom} ref={fromRef}></span>
      <span className={styles.tickerTo} ref={toRef}></span>
    </div>
  );
}
