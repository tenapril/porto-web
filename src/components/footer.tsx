"use client";

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

export function Footer() {
  return (
    <footer className="mx-auto max-w-5xl px-6 pb-8 pt-4">
      <div className="border-t border-neutral-800" />

      <div className="flex flex-col items-center gap-4 pt-8">
        <div className="flex items-center gap-4">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={label === "Email" ? undefined : "_blank"}
              rel={label === "Email" ? undefined : "noopener noreferrer"}
              aria-label={label}
              className="text-neutral-500 transition-colors hover:text-white"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>

        <p className="text-sm text-neutral-500">
          &copy; {new Date().getFullYear()} {siteConfig.name}
        </p>
      </div>
    </footer>
  );
}
