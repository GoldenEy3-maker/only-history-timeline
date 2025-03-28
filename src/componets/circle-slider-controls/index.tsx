import React from "react";
import { A11y, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import * as styles from "./circle-slider-controls.module.scss";
import clsx from "clsx";
import { Button } from "../button";
import { Icons } from "../icons";

type CircleSliderControlsProps = {} & React.ComponentProps<"div">;

export function CircleSliderControls({
  className,
  ...props
}: CircleSliderControlsProps) {
  return (
    <div className={clsx(styles.circle, className)} {...props}>
      <div className={styles.circleTools}>
        <div className={styles.circleFraction}>02/06</div>
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
        modules={[Pagination, A11y, Navigation]}
        navigation={{
          enabled: true,
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        pagination={{
          type: "bullets",
          clickable: true,
        }}>
        <SwiperSlide />
        <SwiperSlide />
        <SwiperSlide />
      </Swiper>
    </div>
  );
}
