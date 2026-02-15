"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/data/config";

export function Hero() {
  const reduceMotion = useReducedMotion();

  const fadeUp = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: "easeOut" as const },
      };

  const fadeUpDelayed = (delay: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, ease: "easeOut" as const, delay },
        };

  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6">
      <motion.h1
        className="text-center text-5xl font-bold tracking-tight sm:text-7xl"
        {...fadeUp}
      >
        {siteConfig.name}
      </motion.h1>
      <motion.p
        className="mt-4 text-lg text-neutral-500 sm:text-xl"
        {...fadeUpDelayed(0.1)}
      >
        {siteConfig.title}
      </motion.p>
      <motion.p
        className="mt-3 max-w-md text-center text-sm text-neutral-400"
        {...fadeUpDelayed(0.2)}
      >
        {siteConfig.tagline}
      </motion.p>
      <motion.div
        className="mt-10 flex flex-wrap justify-center gap-4"
        {...fadeUpDelayed(0.3)}
      >
        <a
          href="#projects"
          className="rounded-lg border border-neutral-800 px-5 py-2.5 text-sm text-neutral-300 transition-colors hover:bg-neutral-800/50"
        >
          View Projects
        </a>
        <Link
          href="/blog"
          className="rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-black transition-colors hover:bg-neutral-200"
        >
          Read Blog
        </Link>
      </motion.div>
    </section>
  );
}
