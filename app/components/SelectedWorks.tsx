"use client";

import { motion } from "framer-motion";

/* ── Project data ── */
interface Project {
  title: string;
  description: string;
  tags: { label: string; color: string }[];
  liveUrl?: string;
  codeUrl: string;
}

const projects: Project[] = [
  {
    title: "EcoPoin",
    description:
      "A waste management platform connecting users with waste banks. Features GreenCoin rewards, pickup/drop-off scheduling, and a marketplace for exchanging points.",
    tags: [
      { label: "Next.js", color: "var(--nb-yellow)" },
      { label: "Tailwind", color: "var(--nb-blue)" },
      { label: "Supabase", color: "var(--nb-green)" },
    ],
    liveUrl: "https://ecopoin-web.vercel.app/",
    codeUrl: "https://github.com/rizqy-fadhil/ecopoin-web",
  },
  {
    title: "HealthSync",
    description:
      "A health tracking platform built with a Neubrutalism design system, combining a Flutter web frontend with a Laravel REST API backend.",
    tags: [
      { label: "Flutter", color: "var(--nb-blue)" },
      { label: "Laravel", color: "var(--nb-pink)" },
      { label: "MySQL", color: "var(--nb-yellow)" },
    ],
    liveUrl: "https://healthsync-frontend-phi.vercel.app/",
    codeUrl: "https://github.com/rizqy-fadhil/HealthSync",
  },
  {
    title: "Perpus App",
    description:
      "A full-stack library management system with role-based authentication, book cataloging, and borrowing workflows.",
    tags: [
      { label: "Next.js", color: "var(--nb-yellow)" },
      { label: "Prisma", color: "var(--nb-purple)" },
      { label: "PostgreSQL", color: "var(--nb-blue)" },
    ],
    liveUrl: "https://perpus-app-sable.vercel.app",
    codeUrl: "https://github.com/rizqy-fadhil/perpus-app",
  },
  {
    title: "Churn Prediction",
    description:
      "A machine learning app predicting customer churn using a PyTorch MLP model (96% accuracy), served via FastAPI and consumed by a Flutter mobile frontend.",
    tags: [
      { label: "PyTorch", color: "var(--nb-pink)" },
      { label: "FastAPI", color: "var(--nb-green)" },
      { label: "Flutter", color: "var(--nb-blue)" },
    ],
    codeUrl: "https://github.com/rizqy-fadhil/churn-prediction",
  },
];

/* ── Animation variants (scroll-triggered stagger) ── */
const sectionVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
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

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" as const },
  },
};

/* ── Icons ── */
function ExternalLinkIcon() {
  return (
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
        d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
      />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
    </svg>
  );
}

/* ── Project Card ── */
function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      variants={cardVariants}
      className="nb-card flex flex-col gap-5 p-6 sm:p-8"
    >
      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag.label}
            className="nb-badge"
            style={{ backgroundColor: tag.color }}
          >
            {tag.label}
          </span>
        ))}
      </div>

      {/* Title */}
      <h3 className="font-display text-2xl font-bold sm:text-3xl">
        {project.title}
      </h3>

      {/* Description */}
      <p className="flex-1 leading-relaxed text-nb-fg/70">
        {project.description}
      </p>

      {/* Action buttons */}
      <div className="flex flex-wrap items-center gap-3 pt-2">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="nb-btn text-sm"
          >
            Live Site
            <ExternalLinkIcon />
          </a>
        )}
        <a
          href={project.codeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="nb-btn nb-btn-secondary text-sm"
        >
          Code
          <GitHubIcon />
        </a>
      </div>
    </motion.div>
  );
}

/* ── Section ── */
export function SelectedWorks() {
  return (
    <section
      id="projects"
      className="border-b-3 border-nb-border bg-nb-bg py-24"
    >
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="mx-auto max-w-7xl px-6 lg:px-8"
      >
        {/* Section heading */}
        <motion.div variants={headingVariants} className="mb-14">
          <h2 className="font-display text-5xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl">
            Selected Works
            <span className="text-nb-accent">.</span>
          </h2>
          <p className="mt-4 text-lg text-nb-fg/60 sm:text-xl">
            Stuff I&apos;ve built.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
