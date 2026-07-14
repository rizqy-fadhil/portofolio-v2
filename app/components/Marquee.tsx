"use client";

import { useState } from "react";

/* ── Tech names with cycling accent colors ── */
const ACCENT_COLORS = [
  "var(--nb-yellow)",
  "var(--nb-accent)",
  "var(--nb-blue)",
  "var(--nb-green)",
  "var(--nb-purple)",
  "var(--nb-pink)",
];

const TECH_NAMES = [
  "HTML",
  "CSS",
  "JAVASCRIPT",
  "NEXT.JS",
  "TAILWIND",
  "FLUTTER",
  "PHP",
  "LARAVEL",
  "PYTHON",
  "FASTAPI",
  "SUPABASE",
  "POSTGRESQL",
];

function MarqueeContent() {
  return (
    <>
      {TECH_NAMES.map((name, i) => (
        <span key={`${name}-${i}`} className="flex shrink-0 items-center gap-6 sm:gap-8">
          <span
            className="font-display text-2xl font-bold uppercase tracking-wide sm:text-3xl md:text-4xl"
            style={{ color: ACCENT_COLORS[i % ACCENT_COLORS.length] }}
          >
            {name}
          </span>
          <span className="text-xl text-white/60 sm:text-2xl" aria-hidden="true">
            •
          </span>
        </span>
      ))}
    </>
  );
}

export function Marquee() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div
      className="relative overflow-hidden border-y-3 border-nb-border bg-nb-fg select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Tech stack marquee"
    >
      <div className="py-5 sm:py-6">
        <div
          className="marquee-track flex w-max items-center gap-6 sm:gap-8"
          style={{ animationPlayState: isPaused ? "paused" : "running" }}
        >
          {/* Render the content 4 times for seamless looping */}
          <MarqueeContent />
          <MarqueeContent />
          <MarqueeContent />
          <MarqueeContent />
        </div>
      </div>
    </div>
  );
}
