import type { Metadata } from "next";
import { getAllBlogPosts } from "@/lib/mdx";
import { BlogCard } from "@/components/blog-card";
import { Footer } from "@/components/footer";

const description = "Thoughts on data engineering, cloud infrastructure, and software development.";

export const metadata: Metadata = {
  title: "Blog",
  description,
  openGraph: {
    title: "Blog — Andrew Tirto Kusumo",
    description,
    url: "https://andrewtk.dev/blog",
  },
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <>
      <main className="mx-auto max-w-3xl px-6 pb-24 pt-28 sm:pt-32">
        <h1 className="text-2xl font-semibold sm:text-3xl">Blog</h1>
        <p className="mt-2 text-sm text-neutral-500">
          Thoughts on data engineering, cloud infrastructure, and software development.
        </p>

        {posts.length === 0 ? (
          <p className="mt-16 text-center text-sm text-neutral-500">
            No posts yet. Check back soon.
          </p>
        ) : (
          <section className="mt-10 space-y-4" aria-label="Blog posts">
            {posts.map((post, index) => (
              <BlogCard key={post.slug} post={post} index={index} />
            ))}
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
