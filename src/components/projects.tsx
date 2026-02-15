"use client";

import { motion, useReducedMotion } from "framer-motion";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/project-card";

export function Projects() {
  const reduceMotion = useReducedMotion();

  const fadeUp = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 12 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 0.5, ease: "easeOut" as const },
      };

  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
      <motion.h2
        className="text-2xl font-semibold sm:text-3xl"
        {...fadeUp}
      >
        Projects
      </motion.h2>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
