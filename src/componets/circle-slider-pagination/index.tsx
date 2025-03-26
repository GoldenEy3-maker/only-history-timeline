import React from "react";
import { A11y, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import * as styles from "./circle-slider-pagination.module.scss";
import clsx from "clsx";

type CircleSliderPaginationProps = {} & React.ComponentProps<"div">;

export function CircleSliderPagination({
  className,
  ...props
}: CircleSliderPaginationProps) {
  return (
    <div className={clsx(styles.circle, className)} {...props}>
      <Swiper
        modules={[Pagination, A11y]}
        pagination={{
          type: "bullets",
        }}>
        <SwiperSlide />
        <SwiperSlide />
        <SwiperSlide />
      </Swiper>
    </div>
  );
}
