import React, { useMemo, useState } from "react";
import { A11y, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import * as styles from "./circle-slider-controls.module.scss";
import clsx from "clsx";
import { Button } from "../button";
import { Icons } from "../icons";
import { Swiper as TSwiper } from "swiper/types";

type CircleSliderControlsProps = {
  data: string[];
  onRealIndexChange?: (swiper: TSwiper) => void;
} & React.ComponentProps<"div">;

export function CircleSliderControls({
  className,
  data,
  onRealIndexChange,
  ...props
}: CircleSliderControlsProps) {
  const [swiper, setSwiper] = useState<TSwiper | null>(null);

  const endFraction = useMemo(() => {
    return data.length.toFixed(0).padStart(2, "0");
  }, [data]);

  const startFraction = useMemo(() => {
    if (!swiper) return "01";
    return (swiper.activeIndex + 1).toFixed(0).padStart(2, "0");
  }, [swiper?.activeIndex]);

  return (
    <div className={clsx(styles.circle, className)} {...props}>
      <div className={styles.circleTools}>
        <div className={styles.circleFraction}>
          {startFraction}/{endFraction}
        </div>
        <div className={styles.circleNavigation}>
          <Button
            type="button"
            className="swiper-button-prev"
            variant="outlined"
            size="icon">
            <Icons.ArrowLeft />
          </Button>
          <Button
            type="button"
            className="swiper-button-next"
            variant="outlined"
            size="icon">
            <Icons.ArrowRight />
          </Button>
        </div>
      </div>
      <Swiper
        onRealIndexChange={onRealIndexChange}
        onSwiper={(swiper) => setSwiper(swiper)}
        modules={[Pagination, A11y, Navigation]}
        navigation={{
          enabled: true,
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        pagination={{
          type: "bullets",
          clickable: true,
          renderBullet: (index, className) => {
            return `<span data-title="${data[index]}" class="${className}">${
              index + 1
            }</span>`;
          },
        }}>
        {data.map((value) => (
          <SwiperSlide key={value} />
        ))}
      </Swiper>
    </div>
  );
}
