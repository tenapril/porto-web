import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import { ArrowLeft } from "lucide-react";
import { getBlogPost, getBlogSlugs } from "@/lib/mdx";
import { mdxComponents } from "@/components/mdx-components";
import { Footer } from "@/components/footer";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  const postUrl = `https://andrewtk.dev/blog/${slug}`;

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    openGraph: {
      type: "article",
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      url: postUrl,
      publishedTime: post.frontmatter.date,
      tags: post.frontmatter.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.frontmatter.title,
      description: post.frontmatter.description,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const formattedDate = new Date(post.frontmatter.date).toLocaleDateString(
    "en-US",
    { year: "numeric", month: "long", day: "numeric" }
  );

  const { content } = await compileMDX({
    source: post.content,
    components: mdxComponents,
    options: {
      mdxOptions: {
        rehypePlugins: [
          [
            rehypePrettyCode,
            {
              theme: "github-dark-default",
              keepBackground: false,
            },
          ],
        ],
      },
    },
  });

  return (
    <>
      <main className="mx-auto max-w-3xl px-6 pb-24 pt-28 sm:pt-32">
      <article>
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-neutral-500 transition-colors duration-200 hover:text-neutral-300"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to blog
        </Link>

        <header className="mt-8">
          <h1 className="text-2xl font-semibold text-white sm:text-3xl">
            {post.frontmatter.title}
          </h1>

          <p className="mt-3 text-sm text-neutral-500">
            {formattedDate} · {post.readTime}
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
        </header>

        <div className="prose-blog mt-10">{content}</div>
      </article>
      </main>
      <Footer />
    </>
  );
}
