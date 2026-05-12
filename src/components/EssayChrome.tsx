"use client";

import { useEffect, useState } from "react";
import { essaySections } from "@/lib/content";

export function ReadingProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <div className="progress" style={{ width: `${progress}%` }} />;
}

export function YearNav() {
  return (
    <aside className="year-nav" aria-label="Essay year navigation">
      <p>Years</p>
      {essaySections.map((section) => (
        <a key={section.id} href={`#${section.id}`}>{section.year}</a>
      ))}
    </aside>
  );
}
