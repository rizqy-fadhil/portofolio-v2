"use client";

import { motion } from "framer-motion";

/* ── Data ── */
interface TimelineEntry {
  period: string;
  title: string;
  subtitle: string;
  description: string;
  dotColor: string;
}

const education: TimelineEntry[] = [
  {
    period: "2024 - Present",
    title: "Information Systems",
    subtitle: "Universitas Airlangga",
    description:
      "Undergraduate student focusing on systems analysis, mobile & web development, and machine learning.",
    dotColor: "var(--nb-yellow)",
  },
];

const organization: TimelineEntry[] = [
  {
    period: "Jun 2026 - Present",
    title: "Frontend Developer",
    subtitle: "Astrolab (KOMBO FTMM)",
    description:
      "Building and maintaining frontend interfaces for the organization's digital platforms.",
    dotColor: "var(--nb-accent)",
  },
  {
    period: "Feb 2025 - Jan 2026",
    title: "Staff of Research and Technopreneurship",
    subtitle: "HIMSI UNAIR (Himpunan Mahasiswa Sistem Informasi)",
    description:
      "Contributed to research initiatives and technopreneurship programs within the student association.",
    dotColor: "var(--nb-blue)",
  },
];

/* ── Animation variants ── */
const sectionVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
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

/* ── Timeline Entry Card ── */
function TimelineCard({ entry }: { entry: TimelineEntry }) {
  return (
    <motion.div variants={itemVariants} className="relative flex gap-5 sm:gap-7">
      {/* ── Timeline spine: dot + line ── */}
      <div className="flex flex-col items-center pt-1.5">
        {/* Dot */}
        <div
          className="relative z-10 h-5 w-5 shrink-0 border-3 border-nb-border"
          style={{ backgroundColor: entry.dotColor, borderRadius: "50%" }}
        />
        {/* Connecting line */}
        <div className="w-[3px] flex-1 bg-nb-border/25" />
      </div>

      {/* ── Card ── */}
      <div className="nb-card mb-8 flex-1 p-5 sm:p-6">
        {/* Period badge */}
        <span className="mb-3 inline-block text-xs font-bold uppercase tracking-wider text-nb-fg/50">
          {entry.period}
        </span>

        <h3 className="font-display text-xl font-bold sm:text-2xl">
          {entry.title}
        </h3>
        <p className="mt-1 text-sm font-semibold text-nb-accent">
          {entry.subtitle}
        </p>
        <p className="mt-3 leading-relaxed text-nb-fg/70">
          {entry.description}
        </p>
      </div>
    </motion.div>
  );
}

/* ── Group Label / Divider ── */
function GroupLabel({ label }: { label: string }) {
  return (
    <motion.div variants={itemVariants} className="relative flex gap-5 sm:gap-7">
      {/* Align with the timeline spine */}
      <div className="flex w-5 shrink-0 items-center justify-center">
        <div className="h-full w-[3px] bg-nb-border/25" />
      </div>

      <div className="mb-6 flex-1">
        <span className="nb-badge bg-nb-yellow text-xs">
          {label}
        </span>
      </div>
    </motion.div>
  );
}

/* ── Section ── */
export function Experience() {
  return (
    <section
      id="experience"
      className="border-b-3 border-nb-border bg-nb-white py-24"
    >
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        className="mx-auto max-w-3xl px-6 lg:px-8"
      >
        {/* Section heading */}
        <motion.div variants={itemVariants} className="mb-14">
          <h2 className="font-display text-5xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl">
            Experience
            <span className="text-nb-accent">.</span>
          </h2>
        </motion.div>

        {/* ── Education ── */}
        <GroupLabel label="Education" />
        {education.map((entry) => (
          <TimelineCard key={entry.title} entry={entry} />
        ))}

        {/* ── Organizational Experience ── */}
        <GroupLabel label="Organizational Experience" />
        {organization.map((entry) => (
          <TimelineCard key={entry.title} entry={entry} />
        ))}
      </motion.div>
    </section>
  );
}
