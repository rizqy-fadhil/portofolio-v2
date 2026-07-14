"use client";

import { motion } from "framer-motion";

/* ── Stat cards data ── */
const stats = [
  { value: "4", label: "Semester", color: "var(--nb-yellow)" },
  { value: "4+", label: "Projects Shipped", color: "var(--nb-purple)" },
  { value: "2", label: "Organizations", color: "var(--nb-bg-alt)" },
  { value: "∞", label: "Coffees Drank", color: "var(--nb-accent)" },
];

/* ── Animation variants ── */
const sectionVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export function AboutMe() {
  return (
    <section
      id="about"
      className="border-b-3 border-nb-border bg-nb-bg py-24"
    >
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="mx-auto max-w-7xl px-6 lg:px-8"
      >
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* ── Left column: heading + bio card ── */}
          <div>
            <motion.h2
              variants={itemVariants}
              className="mb-8 font-display text-5xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl"
            >
              About Me
              <span className="text-nb-accent">.</span>
            </motion.h2>

            <motion.div
              variants={itemVariants}
              className="nb-card p-6 sm:p-8"
            >
              <p className="leading-relaxed text-nb-fg/80">
                I&apos;m an Information Systems student at Universitas Airlangga
                with a strong focus on full-stack and mobile development. I enjoy
                bridging clean interfaces with solid backend logic — from Flutter
                apps to Next.js platforms.
              </p>
              <p className="mt-4 leading-relaxed text-nb-fg/80">
                Currently exploring machine learning alongside web and mobile
                development, and actively involved in student organizations and
                tech communities. Always building something new, one semester at
                a time.
              </p>

              {/* Signature row */}
              <div className="mt-8 flex items-center gap-4 border-t-3 border-nb-border pt-6">
                {/* Avatar placeholder */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-3 border-nb-border bg-nb-yellow">
                  <span className="font-display text-lg font-bold">RF</span>
                </div>
                <div>
                  <p className="font-display text-sm font-bold sm:text-base">
                    Rizqy Fadhil Athallah
                  </p>
                  <p className="text-xs font-semibold uppercase tracking-wider text-nb-fg/50">
                    Information Systems Student
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ── Right column: 2×2 stat cards ── */}
          <div className="grid grid-cols-2 gap-5 self-center sm:gap-6">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="nb-card flex flex-col items-center justify-center px-4 py-8 text-center sm:px-6 sm:py-10"
                style={{ backgroundColor: stat.color }}
              >
                <p className="font-display text-4xl font-bold sm:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-xs font-bold uppercase tracking-wider text-nb-fg/70 sm:text-sm">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
