import Link from "next/link";
import { nav } from "@/lib/content";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="mark" href="/" aria-label="Home">
        <span className="mark-box">ML</span>
        <span>Machine Labor</span>
      </Link>
      <nav aria-label="Primary navigation">
        {nav.map(([label, href]) => (
          <Link key={href} href={href}>{label}</Link>
        ))}
      </nav>
    </header>
  );
}
