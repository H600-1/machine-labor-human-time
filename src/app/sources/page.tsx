import { sources } from "@/lib/content";

export default function SourcesPage() {
  return (
    <main className="container page">
      <div className="section-head wide">
        <p className="eyebrow">Sources and method</p>
        <h1>Grounding without turning the essay into a bibliography</h1>
        <p>The site uses current evidence available by May 2026 as grounding. The citations below ground specific empirical claims: agent task horizons, coding benchmarks, data-center power demand, fraud losses, Ukraine support, media trust, education guidance, and content provenance. They are not a full bibliography for a decade-spanning forecast. The political, religious, labor-pipeline, and institutional arguments are synthesis and scenario judgment. Read them as argued extrapolation, not sourced prediction.</p>
      </div>
      <div className="source-list">
        {sources.map((source) => (
          <article key={source.url}>
            <h2><a href={source.url} target="_blank" rel="noreferrer">{source.title}</a></h2>
            <p>{source.note}</p>
            <span>{source.url}</span>
          </article>
        ))}
      </div>
    </main>
  );
}
