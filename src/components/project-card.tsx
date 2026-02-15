"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const reduceMotion = useReducedMotion();

  const fadeUp = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 12 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-80px" },
        transition: { duration: 0.5, ease: "easeOut" as const, delay: index * 0.1 },
      };

  return (
    <motion.div
      className="rounded-xl border border-neutral-800/60 p-6 transition-all duration-200 hover:bg-neutral-800/50 hover:-translate-y-0.5"
      {...fadeUp}
    >
      <h3 className="text-lg font-semibold text-white">{project.title}</h3>

      <p className="mt-2 text-sm leading-relaxed text-neutral-300">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-md bg-neutral-800 px-2.5 py-1 text-xs text-neutral-400"
          >
            {tech}
          </span>
        ))}
      </div>

      {project.links && (
        <div className="mt-4 flex items-center gap-4">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-neutral-400 transition-colors hover:text-white"
            >
              <Github className="h-4 w-4" />
              <span>Source</span>
            </a>
          )}
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-neutral-400 transition-colors hover:text-white"
            >
              <ExternalLink className="h-4 w-4" />
              <span>Live</span>
            </a>
          )}
          {project.links.article && (
            <a
              href={project.links.article}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-neutral-400 transition-colors hover:text-white"
            >
              <ExternalLink className="h-4 w-4" />
              <span>Article</span>
            </a>
          )}
        </div>
      )}
    </motion.div>
  );
}
