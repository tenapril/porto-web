"use client";

import { motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/data/config";
import { skills } from "@/data/skills";

export function About() {
  const reduceMotion = useReducedMotion();

  const fadeUp = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 12 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 0.5, ease: "easeOut" as const },
      };

  const fadeUpDelayed = (delay: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 12 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-100px" },
          transition: { duration: 0.5, ease: "easeOut" as const, delay },
        };

  return (
    <section id="about" className="mx-auto max-w-3xl px-6 py-24 sm:py-32">
      <motion.h2
        className="text-2xl font-semibold sm:text-3xl"
        {...fadeUp}
      >
        About
      </motion.h2>

      <motion.p
        className="mt-6 text-base leading-relaxed text-neutral-300 sm:text-lg"
        style={{ lineHeight: 1.75 }}
        {...fadeUpDelayed(0.1)}
      >
        {siteConfig.bio}
      </motion.p>

      <motion.div
        className="mt-12 space-y-6"
        {...fadeUpDelayed(0.2)}
      >
        {skills.map((group) => (
          <div key={group.category}>
            <p className="mb-2 text-xs font-medium uppercase tracking-wider text-neutral-500">
              {group.category}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md bg-neutral-800 px-2.5 py-1 text-xs text-neutral-400"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
