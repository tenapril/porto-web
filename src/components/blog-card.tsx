"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { BlogPost } from "@/lib/mdx";

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

export function BlogCard({ post, index }: BlogCardProps) {
  const reduceMotion = useReducedMotion();

  const fadeUp = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 12 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-80px" },
        transition: {
          duration: 0.5,
          ease: "easeOut" as const,
          delay: index * 0.1,
        },
      };

  const formattedDate = new Date(post.frontmatter.date).toLocaleDateString(
    "en-US",
    { year: "numeric", month: "long", day: "numeric" }
  );

  return (
    <motion.article {...fadeUp}>
      <Link
        href={`/blog/${post.slug}`}
        className="block rounded-xl border border-neutral-800/60 p-6 transition-all duration-200 hover:bg-neutral-800/50 hover:-translate-y-0.5"
      >
        <h2 className="text-lg font-semibold text-white">{post.frontmatter.title}</h2>

        <p className="mt-1.5 text-xs text-neutral-500">
          {formattedDate} · {post.readTime}
        </p>

        <p className="mt-3 text-sm leading-relaxed text-neutral-300">
          {post.frontmatter.description}
        </p>

        {post.frontmatter.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {post.frontmatter.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-neutral-800 px-2.5 py-1 text-xs text-neutral-400"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </Link>
    </motion.article>
  );
}
