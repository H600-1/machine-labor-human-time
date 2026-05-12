import { TimelineFilter } from "@/components/TimelineFilter";

export default function TimelinePage() {
  return (
    <main className="container page">
      <div className="section-head wide">
        <p className="eyebrow">Timeline</p>
        <h1>Late summer 2026 through 2035</h1>
        <p>Scan the scenario by year and category. This is a causal chronology, not a decorative list.</p>
      </div>
      <TimelineFilter />
    </main>
  );
}
