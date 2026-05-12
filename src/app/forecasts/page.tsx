import { forecasts } from "@/lib/content";

export default function ForecastsPage() {
  return (
    <main className="container page">
      <div className="section-head wide">
        <p className="eyebrow">Key forecasts</p>
        <h1>The scenario spine</h1>
        <p>These are baseline calls inside the scenario, not claims of certainty. Each includes the rationale, main alternative, and signals to watch.</p>
      </div>
      <div className="forecast-table">
        {forecasts.map((f) => (
          <article className="forecast-row" key={f.topic}>
            <h2>{f.topic}</h2>
            <div><span>Baseline call</span><p>{f.baseline}</p></div>
            <div><span>Rationale</span><p>{f.rationale}</p></div>
            <div><span>Main alternative</span><p>{f.alternative}</p></div>
            <div><span>Signals to watch</span><p>{f.signals}</p></div>
          </article>
        ))}
      </div>
    </main>
  );
}
