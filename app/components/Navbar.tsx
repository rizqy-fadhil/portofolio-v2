"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-3 border-nb-border bg-nb-bg/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight transition-colors hover:text-nb-accent"
        >
          fadhil<span className="text-nb-accent">.</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="relative px-4 py-2 text-sm font-semibold uppercase tracking-widest transition-colors hover:text-nb-accent"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button — desktop */}
        <Link
          href="#contact"
          className="nb-btn hidden text-sm md:inline-flex"
        >
          Let&apos;s Talk
        </Link>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="nb-card flex h-10 w-10 items-center justify-center md:hidden"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={mobileOpen ? "open" : "closed"}
            className="relative flex h-5 w-5 flex-col justify-between"
          >
            <motion.span
              className="block h-0.5 w-full bg-nb-fg origin-left"
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: 45, y: -1 },
              }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block h-0.5 w-full bg-nb-fg"
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
              transition={{ duration: 0.15 }}
            />
            <motion.span
              className="block h-0.5 w-full bg-nb-fg origin-left"
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: -45, y: 1 },
              }}
              transition={{ duration: 0.2 }}
            />
          </motion.span>
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t-3 border-nb-border md:hidden"
          >
            <ul className="flex flex-col gap-2 px-6 py-6">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.2 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 text-lg font-bold uppercase tracking-widest transition-colors hover:text-nb-accent"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05, duration: 0.2 }}
              >
                <Link
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="nb-btn mt-2 w-full text-center"
                >
                  Let&apos;s Talk
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
