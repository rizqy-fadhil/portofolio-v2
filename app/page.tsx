"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SelectedWorks } from "@/app/components/SelectedWorks";
import { Experience } from "@/app/components/Experience";
import { Marquee } from "@/app/components/Marquee";
import { TechSkills } from "@/app/components/TechSkills";
import { AboutMe } from "@/app/components/AboutMe";
import { ContactFooter } from "@/app/components/ContactFooter";

/* ── Stagger-in animation variants ── */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
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

/* ── Floating decorative shapes ── */
function FloatingShapes() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Yellow square */}
      <motion.div
        className="absolute -top-6 right-[10%] h-24 w-24 border-3 border-nb-border bg-nb-yellow"
        animate={{ y: [0, -14, 0], rotate: [0, 6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Pink circle */}
      <motion.div
        className="absolute top-[30%] -left-8 h-20 w-20 rounded-full border-3 border-nb-border bg-nb-pink"
        animate={{ y: [0, 18, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
      {/* Blue rectangle */}
      <motion.div
        className="absolute bottom-[20%] right-[5%] h-16 w-32 border-3 border-nb-border bg-nb-blue"
        animate={{ y: [0, -10, 0], rotate: [0, 4, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      {/* Green small square */}
      <motion.div
        className="absolute bottom-[10%] left-[15%] h-14 w-14 border-3 border-nb-border bg-nb-green"
        animate={{ y: [0, 12, 0], rotate: [0, -12, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
      />
      {/* Purple circle — subtle */}
      <motion.div
        className="absolute top-[15%] right-[35%] h-10 w-10 rounded-full border-3 border-nb-border bg-nb-purple opacity-70"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
      />
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* ═══════════ HERO SECTION ═══════════ */}
      <section
        id="hero"
        className="relative flex min-h-[calc(100vh-73px)] items-center overflow-hidden bg-nb-bg"
      >
        <FloatingShapes />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start gap-8"
          >
            {/* Eyebrow badge */}
            <motion.div variants={itemVariants}>
              <span className="nb-badge bg-nb-yellow">
                👋 Available for work
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-display text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
            >
              Creative
              <br />
              Developer &{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Designer</span>
                <motion.span
                  className="absolute bottom-1 left-0 -z-0 h-4 w-full bg-nb-yellow sm:bottom-2 sm:h-5 md:h-6"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.5, ease: "easeOut" }}
                  style={{ transformOrigin: "left" }}
                />
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={itemVariants}
              className="max-w-xl text-lg leading-relaxed text-nb-fg/70 sm:text-xl"
            >
              I build bold, functional digital experiences with clean code and
              striking design. Let&apos;s turn your ideas into something
              unforgettable.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4"
            >
              <Link href="#projects" className="nb-btn text-base">
                View Projects
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </Link>
              <Link
                href="#contact"
                className="nb-btn nb-btn-secondary text-base"
              >
                Get in Touch
              </Link>
            </motion.div>

            {/* Stats row */}
            <motion.div
              variants={itemVariants}
              className="mt-4 flex flex-wrap gap-6"
            >
              {[
                { value: "3+", label: "Years Experience" },
                { value: "20+", label: "Projects Shipped" },
                { value: "∞", label: "Coffee Cups" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="nb-card px-5 py-3 text-center"
                >
                  <p className="font-display text-2xl font-bold">
                    {stat.value}
                  </p>
                  <p className="text-xs font-semibold uppercase tracking-wider text-nb-fg/60">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom border accent */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-nb-border" />
      </section>

      <SelectedWorks />

      <Marquee />

      <AboutMe />

      <TechSkills />

      <Experience />

      <ContactFooter />
    </>
  );
}
