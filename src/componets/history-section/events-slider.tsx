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
        className={styles.eventsSliderPrevTrigger}>
        <Icons.ArrowLeft />
      </Button>
      <Swiper
        grabCursor
        slidesPerView="auto"
        modules={[Navigation]}
        onSlidesLengthChange={(swiper) => swiper.update()}
        spaceBetween={80}
        speed={800}
        navigation={{
          enabled: true,
          nextEl: "." + styles.eventsSliderNextTrigger,
          prevEl: "." + styles.eventsSliderPrevTrigger,
        }}>
        {typeof children === "function" ? currentData.map(children) : children}
      </Swiper>
      <Button
        type="button"
        size="icon-sm"
        className={styles.eventsSliderNextTrigger}>
        <Icons.ArrowRight />
      </Button>
    </div>
  );
}
