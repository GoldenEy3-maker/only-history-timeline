import React from "react";
import { Section } from "../section";
import { CircleSliderControls } from "../circle-slider-controls";
import * as styles from "./history-section.module.scss";
import clsx from "clsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "../button";
import { Icons } from "../icons";
import { Navigation } from "swiper/modules";

export function HistorySection() {
  return (
    <Section.Root>
      <div className="grid-stack">
        <Section.Title>
          Исторические <br /> даты
        </Section.Title>
        <div className={styles.ticker}>
          <span className={styles.tickerFrom}>2012</span>
          <span className={styles.tickerTo}>2020</span>
        </div>
        <CircleSliderControls className={clsx(styles.circle, "grid-stack")} />
      </div>
      <div className={styles.eventsSlider}>
        <Swiper
          grabCursor
          slidesPerView="auto"
          modules={[Navigation]}
          spaceBetween={80}
          navigation={{
            enabled: true,
            nextEl: "." + styles.eventsSliderNextTrigger,
          }}>
          <SwiperSlide className={styles.eventsSliderItem}>
            <h4>2015</h4>
            <p>
              13&nbsp;сентября&nbsp;&mdash; частное солнечное затмение, видимое
              в&nbsp;Южной Африке и&nbsp;части Антарктиды
            </p>
          </SwiperSlide>
          <SwiperSlide className={styles.eventsSliderItem}>
            <h4>2016</h4>
            <p>
              Телескоп &laquo;Хаббл&raquo; обнаружил самую удалённую
              из&nbsp;всех обнаруженных галактик, получившую обозначение GN-z11
            </p>
          </SwiperSlide>
          <SwiperSlide className={styles.eventsSliderItem}>
            <h4>2017</h4>
            <p>
              Компания Tesla официально представила первый в&nbsp;мире
              электрический грузовик Tesla Semi
            </p>
          </SwiperSlide>
          <SwiperSlide className={styles.eventsSliderItem}>
            <h4>2017</h4>
            <p>
              Компания Tesla официально представила первый в&nbsp;мире
              электрический грузовик Tesla Semi
            </p>
          </SwiperSlide>
        </Swiper>
        <Button
          type="button"
          size="icon-sm"
          className={styles.eventsSliderNextTrigger}>
          <Icons.ArrowRight />
        </Button>
      </div>
    </Section.Root>
  );
}
