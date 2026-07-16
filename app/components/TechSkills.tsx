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
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-4xl mx-auto mt-14">
          {SKILLS.map((skill, i) => {
            const rotations = ['-rotate-2', 'rotate-3', '-rotate-3', 'rotate-1', '-rotate-1', 'rotate-2'];
            const rotationClass = rotations[i % rotations.length];
            
            // Generate a deterministic pseudo-random index based on the string to avoid hydration mismatches
            const charSum = skill.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
            const randomColorIndex = (charSum + (i * 7)) % ACCENT_COLORS.length;

            return (
              <motion.div
                key={skill}
                variants={pillVariants}
                whileHover={{
                  y: -2,
                  transition: { duration: 0.2, ease: "easeOut" },
                }}
              >
                <div
                  className={`cursor-default px-5 py-2 sm:px-6 sm:py-3 text-base sm:text-lg font-bold uppercase tracking-wide rounded-2xl border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] transition-transform hover:rotate-0 inline-block ${rotationClass}`}
                  style={{
                    backgroundColor: ACCENT_COLORS[randomColorIndex],
                  }}
                >
                  {skill}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
