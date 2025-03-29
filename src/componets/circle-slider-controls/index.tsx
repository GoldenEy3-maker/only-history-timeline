import React, { useMemo, useRef, useState } from "react";
import { A11y, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import * as styles from "./circle-slider-controls.module.scss";
import clsx from "clsx";
import { Button } from "../button";
import { Icons } from "../icons";
import { Swiper as TSwiper } from "swiper/types";
import { useResizeObserver } from "usehooks-ts";

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
  const ref = useRef<HTMLDivElement>(null);

  const { width = 0, height = 0 } = useResizeObserver({
    // @ts-expect-error Type 'RefObject<HTMLDivElement | null>' is not assignable to type 'RefObject<HTMLElement>'
    ref,
    box: "border-box",
  });

  const center = { x: width / 2, y: height / 2 };
  const radius = Math.min(width, height) / 2;

  function calcBulletPosition(index: number) {
    const angle = (-index * (360 / data.length) - 120) * (Math.PI / 180);
    const x = center.x + radius * Math.cos(angle);
    const y = center.y + radius * Math.sin(angle);

    return { x, y };
  }

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
        }}>
        {data.map((value) => (
          <SwiperSlide key={value} />
        ))}
        <div className="swiper-pagination" ref={ref}>
          {data.map((title, index) => {
            const { x, y } = calcBulletPosition(index);
            return (
              <span
                key={title}
                data-title={title}
                style={{
                  top: y + "px",
                  left: x + "px",
                }}
                tabIndex={0}
                className={clsx("swiper-pagination-bullet", {
                  "swiper-pagination-bullet-active":
                    swiper?.activeIndex === index,
                })}
                onClick={() => swiper?.slideTo(index)}></span>
            );
          })}
        </div>
      </Swiper>
    </div>
  );
}
