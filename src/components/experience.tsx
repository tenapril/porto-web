"use client";

import { motion, useReducedMotion } from "framer-motion";
import { experience } from "@/data/experience";

export function Experience() {
  const reduceMotion = useReducedMotion();

  const fadeUp = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 12 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 0.5, ease: "easeOut" as const },
      };

  const staggeredFadeUp = (index: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 12 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-100px" },
          transition: {
            duration: 0.5,
            ease: "easeOut" as const,
            delay: index * 0.1,
          },
        };

  return (
    <section id="experience" className="mx-auto max-w-3xl px-6 py-24 sm:py-32">
      <motion.h2
        className="text-2xl font-semibold sm:text-3xl"
        {...fadeUp}
      >
        Experience
      </motion.h2>

      <div className="relative mt-10">
        {/* Timeline line — desktop only */}
        <div className="absolute left-[7px] top-2 hidden h-[calc(100%-16px)] w-px bg-neutral-800 md:block" />

        <div className="space-y-10 md:space-y-12">
          {experience.map((entry, index) => (
            <motion.div
              key={entry.company}
              className="relative md:pl-10"
              {...staggeredFadeUp(index)}
            >
              {/* Timeline dot — desktop only */}
              <div className="absolute left-0 top-[7px] hidden h-[15px] w-[15px] items-center justify-center md:flex">
                <div className="h-[7px] w-[7px] rounded-full bg-neutral-500" />
              </div>

              {/* Company name */}
              <h3 className="text-lg font-semibold">
                <a
                  href={entry.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white transition-colors hover:text-neutral-300"
                >
                  {entry.company}
                </a>
              </h3>

              {/* Roles */}
              <div className="mt-2 space-y-3">
                {entry.roles.map((role) => (
                  <div key={`${role.title}-${role.startDate}`}>
                    <p className="text-sm font-medium text-neutral-200">
                      {role.title}
                    </p>
                    <p className="text-xs text-neutral-500">
                      {role.startDate} — {role.endDate}
                    </p>
                  </div>
                ))}
              </div>

              {/* Tools */}
              <div className="mt-3 flex flex-wrap gap-1.5">
                {entry.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-md bg-neutral-800 px-2 py-0.5 text-xs text-neutral-400"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {/* Highlights */}
              <ul className="mt-3 space-y-1.5">
                {entry.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="text-sm leading-relaxed text-neutral-400"
                  >
                    <span className="mr-2 text-neutral-600">•</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
