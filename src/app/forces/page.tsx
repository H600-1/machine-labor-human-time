import { forces } from "@/lib/content";

export default function ForcesPage() {
  return (
    <main className="container page">
      <div className="section-head wide">
        <p className="eyebrow">Forces map</p>
        <h1>The interacting system</h1>
        <p>The decade is modeled as feedback loops between capability, infrastructure, markets, security, politics, family, education, religion, and geopolitics.</p>
      </div>
      <div className="force-map">
        {forces.map((force) => (
          <article className="force-card" key={force.name}>
            <div className="force-top"><h2>{force.name}</h2><span>{force.pressure}</span></div>
            <p><strong>Counterforce:</strong> {force.counterforce}</p>
            <p><strong>2026-2035 effect:</strong> {force.effect}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
