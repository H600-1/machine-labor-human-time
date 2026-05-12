import Link from "next/link";
import { forecasts, nav } from "@/lib/content";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <p className="eyebrow">Scenario analysis · written from 2036 · late summer 2026-2035</p>
        <h1>Machine Labor and Human Time</h1>
        <p className="subtitle">A future history of the decade when cheap, useful, partially reliable AI work collided with elections, war, markets, schools, churches, families, fraud, infrastructure, and institutional legitimacy.</p>
        <div className="hero-meta">
          <span>Reading time: 60-75 minutes</span>
          <span>Modal scenario, roughly 25-35% likely</span>
          <span>Alternatives mapped on Branch Points</span>
        </div>
        <div className="hero-actions">
          <Link className="button primary" href="/essay">Read the future history</Link>
          <Link className="button" href="/forecasts">Inspect the baseline calls</Link>
        </div>
      </section>
      <section className="container intro-grid">
        <article className="lede-card">
          <h2>The frame</h2>
          <p>This is not a generic AI forecast. It follows one plausible baseline: faster AI takeoff without terminal catastrophe. The world avoids extinction, total nuclear war, permanent civilizational collapse, and a clean rogue-AI takeover. It does not avoid democratic stress, labor shocks, cybercrime, market correction, war pressure, religious backlash, or institutional failure.</p>
        </article>
        <article className="lede-card accent">
          <h2>The spine</h2>
          <p>Democrats take the House in 2026. A competence-and-checks Democrat wins in 2028. An order-and-security Republican wins an order-backlash election in 2032. Ukraine reaches an armed armistice. Taiwan faces a quarantine crisis, not invasion. AI becomes machine labor before institutions learn to govern it.</p>
        </article>
      </section>
      <section className="container">
        <div className="section-head">
          <p className="eyebrow">Navigate</p>
          <h2>Read by argument, chronology, or evidence</h2>
        </div>
        <div className="nav-grid">
          {nav.map(([label, href]) => <Link key={href} href={href}>{label}<span>→</span></Link>)}
        </div>
      </section>
      <section className="container">
        <div className="section-head">
          <p className="eyebrow">Baseline calls</p>
          <h2>Forecasts the essay commits to</h2>
        </div>
        <div className="forecast-grid compact">
          {forecasts.slice(0, 6).map((f) => <article className="forecast-card" key={f.topic}><p className="eyebrow">{f.topic}</p><h3>{f.baseline}</h3><p>{f.rationale}</p></article>)}
        </div>
      </section>
    </main>
  );
}
