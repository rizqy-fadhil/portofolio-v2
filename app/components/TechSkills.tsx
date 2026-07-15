"use client";

import { motion } from "framer-motion";

/* ── Skills data with accent colors and playful rotation angles ── */
const ACCENT_COLORS = [
  "var(--nb-yellow)",
  "var(--nb-blue)",
  "var(--nb-accent)",
  "var(--nb-green)",
  "var(--nb-purple)",
  "var(--nb-pink)",
];

/* Deterministic pseudo-random rotations seeded per skill name */
const SKILLS = [
  "HTML",
  "CSS",
  "JavaScript",
  "Next.js",
  "Tailwind",
  "Flutter",
  "Laravel",
  "PHP",
  "MySQL",
  "PostgreSQL",
  "Prisma",
  "Supabase",
  "PyTorch",
  "FastAPI",
  "Git",
  "Figma",
];

/* ── Animation variants ── */
const sectionVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.15,
    },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const pillVariants = {
  hidden: { opacity: 0, scale: 0.7, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

export function TechSkills() {
  return (
    <section
      id="skills"
      className="border-b-3 border-nb-border bg-nb-white py-24"
    >
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="mx-auto max-w-5xl px-6 lg:px-8"
      >
        {/* Eyebrow + Heading */}
        <motion.div variants={headingVariants} className="mb-14">
          <span className="nb-badge mb-5 inline-block bg-nb-green">
            My Arsenal
          </span>
          <h2 className="font-display text-5xl font-bold uppercase leading-tight tracking-tight sm:text-6xl md:text-7xl">
            <span className="text-nb-fg">TECH</span>{" "}
            <span className="text-transparent [-webkit-text-stroke:2px_var(--nb-border)] sm:[-webkit-text-stroke:3px_var(--nb-border)]">
              SKILLS
            </span>
          </h2>
        </motion.div>

        {/* Skill pills */}
        <div className="flex flex-wrap justify-center gap-6 gap-y-8 sm:gap-8 sm:gap-y-12 mt-14">
          {SKILLS.map((skill, i) => (
            <motion.span
              key={skill}
              variants={pillVariants}
              className="nb-badge cursor-default px-10 py-5 text-2xl font-bold sm:px-14 sm:py-7 sm:text-4xl border-[4px]"
              style={{
                backgroundColor: ACCENT_COLORS[i % ACCENT_COLORS.length],
                rotate: i % 2 === 0 ? -2 : 2,
              }}
              whileHover={{
                y: -2,
                rotate: 0,
                transition: { duration: 0.2, ease: "easeOut" },
              }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
