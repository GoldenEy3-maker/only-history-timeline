import React from "react";
import { Swiper } from "swiper/react";
import * as styles from "./history-section.module.scss";
import { Navigation } from "swiper/modules";
import { Button } from "../ui/button";
import { Icons } from "../ui/icons";

type EventsSliderProps<T> = {
  data: T[];
  children?: (
    item: T,
    index: number,
    array: T[]
  ) => React.ReactNode | React.ReactNode;
};

export function EventsSlider<T>({ data, children }: EventsSliderProps<T>) {
  return (
    <div className={styles.eventsSlider}>
      <Swiper
        grabCursor
        slidesPerView="auto"
        modules={[Navigation]}
        onSlidesLengthChange={(swiper) => swiper.update()}
        spaceBetween={80}
        navigation={{
          enabled: true,
          nextEl: "." + styles.eventsSliderNextTrigger,
        }}>
        {typeof children === "function" ? data.map(children) : children}
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
