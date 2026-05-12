import { ReadingProgress, YearNav } from "@/components/EssayChrome";
import { essaySections } from "@/lib/content";

export default function EssayPage() {
  return (
    <main>
      <ReadingProgress />
      <section className="page-hero">
        <p className="eyebrow">Main essay</p>
        <h1>Future history, 2026-2035</h1>
        <p>Written from the vantage point of 2036. The main narrative follows the baseline path rather than hedging every paragraph. Alternatives live in Branch points.</p>
      </section>
      <div className="essay-shell">
        <YearNav />
        <article className="prose essay-prose">
          {essaySections.map((section) => (
            <section key={section.id} id={section.id}>
              <h2>{section.year}</h2>
              {section.body.split("\n\n").map((para, i) => (
                i === 1 && section.id === "late-2026" ? <blockquote key={i}>{para}</blockquote> : <p key={i}>{para}</p>
              ))}
            </section>
          ))}
        </article>
      </div>
    </main>
  );
}
