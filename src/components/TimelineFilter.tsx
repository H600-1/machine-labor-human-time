"use client";

import { useMemo, useState } from "react";
import { categories, timeline } from "@/lib/content";

export function TimelineFilter() {
  const [category, setCategory] = useState("All");
  const rows = useMemo(() => category === "All" ? timeline : timeline.filter((item) => item.category === category), [category]);
  return (
    <section>
      <div className="filter-row" role="list" aria-label="Timeline category filter">
        {["All", ...categories].map((cat) => (
          <button key={cat} className={cat === category ? "chip active" : "chip"} onClick={() => setCategory(cat)}>{cat}</button>
        ))}
      </div>
      <div className="timeline-list">
        {rows.map((item, index) => (
          <article className="timeline-item" key={`${item.year}-${item.category}-${index}`}>
            <div><span className="timeline-year">{item.year}</span><span className="timeline-cat">{item.category}</span></div>
            <p>{item.event}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
