import React, { useState } from "react";
import { Section } from "../section";
import { CircleSliderControls } from "../circle-slider-controls";
import * as styles from "./history-section.module.scss";
import clsx from "clsx";
import { SwiperSlide } from "swiper/react";
import { EventsSlider } from "./events-slider";
import { Ticker } from "./ticker";

const EVENTS_DATA = [
  {
    title: "Кино",
    events: [
      {
        id: crypto.randomUUID(),
        year: 1993,
        text: "«Парк юрского периода» Спилберга — революция в CGI. Фильм собирает $1 млрд.",
      },
      {
        id: crypto.randomUUID(),
        year: 1997,
        text: "«Титаник» Джеймса Кэмерона получает 11 «Оскаров» и становится самым кассовым фильмом.",
      },
      {
        id: crypto.randomUUID(),
        year: 2001,
        text: "Премьера «Властелина колец: Братство кольца» — начало трилогии-бестселлера.",
      },
    ],
  },
  {
    title: "Искусство",
    events: [
      {
        id: crypto.randomUUID(),
        year: 2001,
        text: "Скандал с выставкой «Sensation» в Берлине: обвинения в оскорблении чувств верующих.",
      },
      {
        id: crypto.randomUUID(),
        year: 2005,
        text: "Картина Густава Климта «Портрет Адели Блох-Бауэр» продана за $135 млн — рекорд для искусства.",
      },
      {
        id: crypto.randomUUID(),
        year: 2008,
        text: "Бэнкси проводит уличную акцию «Парк развлечений Дисмэленд» как протест против коммерциализации.",
      },
      {
        id: crypto.randomUUID(),
        year: 2012,
        text: "Открытие музея Лувр-Абу-Даби — первый «универсальный» музей на Ближнем Востоке.",
      },
    ],
  },
  {
    title: "Наука",
    events: [
      {
        id: crypto.randomUUID(),
        year: 2012,
        text: "Открытие бозона Хиггса на БАК — подтверждение Стандартной модели физики.",
      },
      {
        id: crypto.randomUUID(),
        year: 2015,
        text: "Миссия New Horizons достигает Плутона, передав первые детальные снимки планеты.",
      },
      {
        id: crypto.randomUUID(),
        year: 2016,
        text: "Обнаружение гравитационных волн LIGO — доказательство теории Эйнштейна.",
      },
      {
        id: crypto.randomUUID(),
        year: 2020,
        text: "CRISPR-терапия впервые успешно применена для лечения генетических заболеваний.",
      },
    ],
  },
  {
    title: "Технологии",
    events: [
      {
        id: crypto.randomUUID(),
        year: 2020,
        text: "Пандемия COVID-19 ускоряет переход на удалённую работу: Zoom, Teams становятся мейнстримом.",
      },
      {
        id: crypto.randomUUID(),
        year: 2021,
        text: "Илон Маск объявляет о нейроинтерфейсе Neuralink для имплантации чипов в мозг.",
      },
      {
        id: crypto.randomUUID(),
        year: 2022,
        text: "Запуск ChatGPT от OpenAI — бум генеративного ИИ.",
      },
      {
        id: crypto.randomUUID(),
        year: 2023,
        text: "Apple представляет Vision Pro — первые массовые AR-очки.",
      },
    ],
  },
  {
    title: "Спорт",
    events: [
      {
        id: crypto.randomUUID(),
        year: 2023,
        text: "Лионель Месси приводит Аргентину к победе на ЧМ-2022 в Катаре.",
      },
      {
        id: crypto.randomUUID(),
        year: 2024,
        text: "Летние Олимпийские игры в Париже: дебют брейк-данса как олимпийского вида спорта.",
      },
      {
        id: crypto.randomUUID(),
        year: 2024,
        text: "Рекордный трансфер Килиана Мбаппе в «Реал Мадрид» за €200 млн.",
      },
    ],
  },
  {
    title: "Музыка",
    events: [
      {
        id: crypto.randomUUID(),
        year: 2024,
        text: "Тур Taylor Swift «The Eras Tour» становится самым кассовым в истории ($1 млрд+).",
      },
      {
        id: crypto.randomUUID(),
        year: 2025,
        text: "Выход альбома The Beatles с использованием ИИ для «оживления» голоса Джона Леннона.",
      },
      {
        id: crypto.randomUUID(),
        year: 2025,
        text: "Kanye West проводит концерт на Марсе (анонсировано, но маловероятно).",
      },
    ],
  },
];

export function HistorySection() {
  const [controlsIndex, setControlsIndex] = useState(0);

  const fromTickerValue = EVENTS_DATA[controlsIndex].events[0].year;
  const toTickerValue =
    EVENTS_DATA[controlsIndex].events[
      EVENTS_DATA[controlsIndex].events.length - 1
    ].year;

  return (
    <Section.Root>
      <div className="grid-stack">
        <Section.Title>
          Исторические <br /> даты
        </Section.Title>
        <Ticker from={fromTickerValue} to={toTickerValue} />
        <CircleSliderControls
          data={EVENTS_DATA.flatMap((period) => period.title)}
          onRealIndexChange={(swiper) => setControlsIndex(swiper.realIndex)}
          className={clsx(styles.circle, "grid-stack")}
        />
      </div>
      <EventsSlider data={EVENTS_DATA[controlsIndex].events}>
        {(event) => (
          <SwiperSlide key={event.id} className={styles.eventsSliderItem}>
            <h4>{event.year}</h4>
            <p>{event.text}</p>
          </SwiperSlide>
        )}
      </EventsSlider>
    </Section.Root>
  );
}
