import React from "react";
import { CircleTimeline } from "./componets/circle-timeline";
import { Section } from "./componets/section";

function App() {
  return (
    <div className="wrapper">
      <main className="main">
        <Section.Root className="section history-section">
          <Section.Title className="section__title">
            Исторические <br /> даты
          </Section.Title>
          <CircleTimeline />
        </Section.Root>
      </main>
    </div>
  );
}

export default App;
