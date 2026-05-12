import { signals } from "@/lib/content";

export default function SignalsPage() {
  return (
    <main className="container page">
      <div className="section-head wide">
        <p className="eyebrow">Signals to watch</p>
        <h1>What would confirm, weaken, or falsify the scenario</h1>
        <p>Track these indicators. The scenario should be argued with, not believed passively.</p>
      </div>
      <div className="signals-grid">
        {Object.entries(signals).map(([category, items]) => (
          <section className="signal-card" key={category}>
            <h2>{category}</h2>
            <ul>{items.map((item) => <li key={item}>Watch if {item.toLowerCase()}.</li>)}</ul>
          </section>
        ))}
      </div>
    </main>
  );
}
