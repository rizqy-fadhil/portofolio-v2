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

/* Fixed rotation angles for the "sticker" look (-3 to 3 deg) */
const ROTATIONS = [
  -2, 1.5, -1, 2.5, -3, 1, -2.5, 3, -1.5, 2, -0.5, 1.8, -2.8, 0.8, -1.2, 2.2,
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
          <h2 className="font-display text-5xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl">
            Tech Skills
            <span className="text-nb-accent">.</span>
          </h2>
        </motion.div>

        {/* Skill pills */}
        <div className="flex flex-wrap gap-4 sm:gap-5">
          {SKILLS.map((skill, i) => (
            <motion.span
              key={skill}
              variants={pillVariants}
              className="nb-badge cursor-default px-4 py-2 text-sm font-bold sm:px-5 sm:py-2.5 sm:text-base"
              style={{
                backgroundColor: ACCENT_COLORS[i % ACCENT_COLORS.length],
                transform: `rotate(${ROTATIONS[i]}deg)`,
              }}
              whileHover={{
                scale: 1.12,
                rotate: 0,
                transition: { duration: 0.2 },
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
