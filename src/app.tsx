import React from "react";
import { HistorySection } from "./componets/history-section";
import gsap from "gsap";
import { TextPlugin } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, TextPlugin);

function App() {
  return (
    <div className="wrapper">
      <main className="main">
        <HistorySection />
      </main>
    </div>
  );
}

export default App;
