import React, { useRef, useState } from "react";
import { Swiper } from "swiper/react";
import * as styles from "./history-section.module.scss";
import { Navigation } from "swiper/modules";
import { Button } from "../ui/button";
import { Icons } from "../ui/icons";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useIsMounted } from "usehooks-ts";

type EventsSliderProps<T> = {
  data: T[];
  children?: (
    item: T,
    index: number,
    array: T[]
  ) => React.ReactNode | React.ReactNode;
};

export function EventsSlider<T>({ data, children }: EventsSliderProps<T>) {
  const [currentData, setCurrentData] = useState<T[]>(data);
  const container = useRef<HTMLDivElement>(null);
  const isMounted = useIsMounted();
  const timeoutRef = useRef<NodeJS.Timeout>(undefined);

  const [nextNavigationEl, setNextNavigationEl] =
    useState<HTMLButtonElement | null>(null);
  const [prevNavigationEl, setPrevNavigationEl] =
    useState<HTMLButtonElement | null>(null);

  useGSAP(
    () => {
      if (!isMounted()) return;

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = undefined;
      }

      gsap.to(container.current, {
        duration: 0.4,
        opacity: 0,
        onComplete: () => {
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = undefined;
          }

          timeoutRef.current = setTimeout(() => {
            setCurrentData(data);
            gsap.fromTo(
              container.current,
              { opacity: 0, y: 8, duration: 0.4 },
              { duration: 0.4, opacity: 1, y: 0 }
            );
          }, 400);
        },
      });
    },
    { dependencies: [data] }
  );

  return (
    <div className={styles.eventsSlider} ref={container}>
      <Button
        type="button"
        size="icon-sm"
        className={styles.eventsSliderPrevTrigger}
        ref={(node) => setPrevNavigationEl(node)}>
        <Icons.ArrowLeft />
      </Button>
      <Swiper
        grabCursor
        slidesPerView={3}
        modules={[Navigation]}
        spaceBetween={80}
        speed={800}
        navigation={{
          enabled: true,
          nextEl: nextNavigationEl,
          prevEl: prevNavigationEl,
        }}>
        {typeof children === "function" ? currentData.map(children) : children}
      </Swiper>
      <Button
        type="button"
        size="icon-sm"
        className={styles.eventsSliderNextTrigger}
        ref={(node) => setNextNavigationEl(node)}>
        <Icons.ArrowRight />
      </Button>
    </div>
  );
}
