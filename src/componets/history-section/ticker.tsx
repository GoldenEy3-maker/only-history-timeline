import React, { useEffect, useRef } from "react";
import * as styles from "./history-section.module.scss";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
// import NumberFlow from "@number-flow/react";

type TrickerProps = {
  from: number;
  to: number;
};

export function Ticker({ from, to }: TrickerProps) {
  // Для такой анимации чисел я бы предпочел использовать @number-flow/react
  // Если есть желание увидеть их в действии, то нужно закомментировать весь код GSAP, и в jsx раскомментировать NumberFlow компонент + его импорт

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
      <span className={styles.tickerFrom} ref={fromRef}>
        {/* <NumberFlow value={from} format={{ useGrouping: false }} /> */}
      </span>
      <span className={styles.tickerTo} ref={toRef}>
        {/* <NumberFlow value={to} format={{ useGrouping: false }} /> */}
      </span>
    </div>
  );
}
