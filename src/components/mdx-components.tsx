import type { MDXComponents } from "mdx/types";
import Image from "next/image";

export const mdxComponents: MDXComponents = {
  h1: (props) => (
    <h1
      className="mt-10 mb-4 text-2xl font-semibold text-white sm:text-3xl"
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      className="mt-10 mb-4 text-xl font-semibold text-white sm:text-2xl"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="mt-8 mb-3 text-lg font-semibold text-white"
      {...props}
    />
  ),
  h4: (props) => (
    <h4
      className="mt-6 mb-2 text-base font-semibold text-white"
      {...props}
    />
  ),
  p: (props) => (
    <p
      className="mb-5 text-[15px] leading-[1.75] text-neutral-300"
      {...props}
    />
  ),
  a: (props) => (
    <a
      className="text-neutral-200 underline decoration-neutral-600 underline-offset-3 transition-colors duration-200 hover:text-white hover:decoration-neutral-400"
      target={props.href?.startsWith("http") ? "_blank" : undefined}
      rel={props.href?.startsWith("http") ? "noopener noreferrer" : undefined}
      {...props}
    />
  ),
  ul: (props) => (
    <ul
      className="mb-5 ml-5 list-disc space-y-1.5 text-[15px] leading-[1.75] text-neutral-300 marker:text-neutral-600"
      {...props}
    />
  ),
  ol: (props) => (
    <ol
      className="mb-5 ml-5 list-decimal space-y-1.5 text-[15px] leading-[1.75] text-neutral-300 marker:text-neutral-500"
      {...props}
    />
  ),
  li: (props) => <li className="pl-1" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="mb-5 border-l-2 border-neutral-700 pl-4 text-[15px] italic text-neutral-400"
      {...props}
    />
  ),
  hr: () => <hr className="my-10 border-neutral-800" />,
  strong: (props) => (
    <strong className="font-semibold text-white" {...props} />
  ),
  em: (props) => <em className="text-neutral-200" {...props} />,
  code: (props) => {
    // Block code is handled by rehype-pretty-code via <pre> — pass through
    if ("data-language" in (props as Record<string, unknown>)) {
      return <code {...props} />;
    }
    // Inline code
    return (
      <code
        className="rounded-md bg-neutral-800/80 px-1.5 py-0.5 font-mono text-[13px] text-neutral-200"
        {...props}
      />
    );
  },
  pre: (props) => (
    <pre
      className="mb-5 overflow-x-auto rounded-lg border border-neutral-800/60 bg-neutral-900/60 p-4 font-mono text-[13px] leading-relaxed [&>code]:bg-transparent [&>code]:p-0"
      {...props}
    />
  ),
  figure: (props) => {
    // rehype-pretty-code wraps code blocks in <figure>
    if ("data-rehype-pretty-code-figure" in (props as Record<string, unknown>)) {
      return <figure className="mb-5" {...props} />;
    }
    return <figure {...props} />;
  },
  img: (props) => (
    <Image
      className="my-6 rounded-lg"
      src={props.src || ""}
      alt={props.alt || ""}
      width={800}
      height={450}
      style={{ width: "100%", height: "auto" }}
    />
  ),
  table: (props) => (
    <div className="mb-5 overflow-x-auto">
      <table className="w-full text-sm text-neutral-300" {...props} />
    </div>
  ),
  th: (props) => (
    <th
      className="border-b border-neutral-800 px-3 py-2 text-left font-semibold text-white"
      {...props}
    />
  ),
  td: (props) => (
    <td className="border-b border-neutral-800/60 px-3 py-2" {...props} />
  ),
};
