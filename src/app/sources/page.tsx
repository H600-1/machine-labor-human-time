import { sources } from "@/lib/content";

export default function SourcesPage() {
  return (
    <main className="container page">
      <div className="section-head wide">
        <p className="eyebrow">Sources and method</p>
        <h1>Grounding without turning the essay into a bibliography</h1>
        <p>The site uses current evidence available by May 2026 as grounding. Future events after that point are scenario assumptions. Method: research, causal model, scenario spine, draft, harsh critique, red-team revision, and design QA.</p>
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
