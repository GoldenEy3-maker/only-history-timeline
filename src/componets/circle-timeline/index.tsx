import React from "react";
import { A11y, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import * as styles from "./circle-timeline.module.scss";

export function CircleTimeline() {
  return (
    <div className={styles.circleTimeline}>
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
