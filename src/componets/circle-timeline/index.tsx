import { A11y, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./circle-timeline.scss";

export function CircleTimeline() {
  return (
    <div className="circle-timeline">
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
