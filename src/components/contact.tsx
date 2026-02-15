"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";
import { siteConfig } from "@/data/config";

const socialLinks = [
  {
    label: "Email",
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
  },
  {
    label: "LinkedIn",
    href: siteConfig.social.linkedin,
    icon: Linkedin,
  },
  {
    label: "GitHub",
    href: siteConfig.social.github,
    icon: Github,
  },
];

export function Contact() {
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
    <section id="contact" className="mx-auto max-w-3xl px-6 py-24 sm:py-32">
      <div className="text-center">
        <motion.h2
          className="text-2xl font-semibold sm:text-3xl"
          {...fadeUp}
        >
          Get In Touch
        </motion.h2>

        <motion.p
          className="mt-4 text-neutral-400"
          {...(reduceMotion
            ? {}
            : {
                ...fadeUp,
                transition: { ...fadeUp.transition, delay: 0.1 },
              })}
        >
          Have a question or want to work together? Feel free to reach out.
        </motion.p>

        <motion.div
          className="mt-8 flex items-center justify-center gap-4"
          {...(reduceMotion
            ? {}
            : {
                ...fadeUp,
                transition: { ...fadeUp.transition, delay: 0.2 },
              })}
        >
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={label === "Email" ? undefined : "_blank"}
              rel={label === "Email" ? undefined : "noopener noreferrer"}
              aria-label={label}
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-neutral-800 text-neutral-400 transition-colors hover:border-neutral-700 hover:text-white"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
