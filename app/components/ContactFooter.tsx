"use client";

import { useState } from "react";
import { motion } from "framer-motion";

/* ── Mini marquee for the CTA bar ── */
const CTA_ITEMS = [
  "AVAILABLE FOR FREELANCE ⚡",
  "OPEN TO COLLABORATION 🌐",
  "BASED IN SURABAYA, INDONESIA 📍",
];

function CtaMarqueeContent() {
  return (
    <>
      {CTA_ITEMS.map((text, i) => (
        <span
          key={`${text}-${i}`}
          className="flex shrink-0 items-center gap-6 sm:gap-8"
        >
          <span className="font-display text-sm font-bold uppercase tracking-widest text-nb-fg sm:text-base">
            {text}
          </span>
          <span className="text-sm text-nb-fg/40" aria-hidden="true">
            •
          </span>
        </span>
      ))}
    </>
  );
}

function CtaMarquee() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div
      className="overflow-hidden bg-nb-yellow border-y-3 border-nb-border select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="py-3 sm:py-4">
        <div
          className="marquee-track-fast flex w-max items-center gap-6 sm:gap-8"
          style={{ animationPlayState: isPaused ? "paused" : "running" }}
        >
          <CtaMarqueeContent />
          <CtaMarqueeContent />
          <CtaMarqueeContent />
          <CtaMarqueeContent />
          <CtaMarqueeContent />
          <CtaMarqueeContent />
        </div>
      </div>
    </div>
  );
}

/* ── Icons ── */
function MailIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
    </svg>
  );
}

function ArrowUpIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
    </svg>
  );
}

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
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: "easeOut" as const },
  },
};

/* ── Contact Section + Footer ── */
export function ContactFooter() {
  return (
    <>
      {/* ── CTA Marquee bar ── */}
      <CtaMarquee />

      {/* ── Contact Section ── */}
      <section
        id="contact"
        className="contact-section relative overflow-hidden py-28 sm:py-36"
      >
        {/* Grid pattern overlay */}
        <div className="contact-grid-pattern pointer-events-none absolute inset-0" aria-hidden="true" />

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8"
        >
          {/* Heading */}
          <motion.h2
            variants={itemVariants}
            className="font-display text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Let&apos;s Talk
            <br />
            <span className="text-nb-yellow">Business.</span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/60 sm:text-xl"
          >
            Have a project in mind, an internship opportunity, or just want to
            talk tech? Drop me a line.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="mailto:fadhil2005new@gmail.com"
              className="nb-btn nb-btn-dark-secondary text-sm sm:text-base"
            >
              <MailIcon />
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/rizqy-fadhil-athallah-23681b30a/"
              target="_blank"
              rel="noopener noreferrer"
              className="nb-btn nb-btn-dark-blue text-sm sm:text-base"
            >
              <LinkedInIcon />
              LinkedIn
            </a>
            <a
              href="https://github.com/rizqy-fadhil"
              target="_blank"
              rel="noopener noreferrer"
              className="nb-btn nb-btn-dark-purple text-sm sm:text-base"
            >
              <GitHubIcon />
              GitHub
            </a>
          </motion.div>
        </motion.div>

        {/* Decorative watermark text */}
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[35%] select-none font-display text-[10rem] font-bold uppercase leading-none tracking-tighter text-white/[0.03] sm:text-[14rem] md:text-[18rem] lg:text-[22rem]"
          aria-hidden="true"
        >
          PORTFOLIO
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="contact-section relative border-t border-white/10 py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row lg:px-8">
          {/* Logo */}
          <span className="text-xl font-bold tracking-tight text-white">
            fadhil<span className="text-nb-accent">.</span>
          </span>

          {/* Copyright */}
          <p className="text-sm text-white/40">
            © 2026 All rights reserved
          </p>

          {/* Scroll-to-top */}
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white/20 text-white/50 transition-all hover:border-nb-yellow hover:text-nb-yellow"
            aria-label="Scroll to top"
          >
            <ArrowUpIcon />
          </button>
        </div>
      </footer>
    </>
  );
}
