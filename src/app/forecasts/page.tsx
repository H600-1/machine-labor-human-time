import { forecasts } from "@/lib/content";

export default function ForecastsPage() {
  return (
    <main className="container page">
      <div className="section-head wide">
        <p className="eyebrow">Key forecasts</p>
        <h1>The scenario spine</h1>
        <p>These are baseline calls inside the scenario, not claims of certainty. Probabilities are coarse buckets. The full joint path is a modal scenario, not a majority prediction.</p>
      </div>
      <div className="forecast-table">
        {forecasts.map((f) => (
          <article className="forecast-row" key={f.topic}>
            <h2>{f.topic}</h2>
            <div><span>Baseline probability</span><p>{f.probability}</p></div>
            <div><span>Baseline call</span><p>{f.baseline}</p></div>
            <div><span>Rationale</span><p>{f.rationale}</p></div>
            <div><span>Alternatives</span><p>{f.alternative}</p></div>
            <div><span>Signals to watch</span><p>{f.signals}</p></div>
          </article>
        ))}
      </div>
    </main>
  );
}
