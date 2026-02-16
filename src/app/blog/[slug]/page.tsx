import { notFound } from "next/navigation";
import { getPostBySlug, getAllPosts } from "@/content/blog";
import Link from "next/link";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Not Found" };
  return { title: `${post.title} — Owen Hoag` };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <Link
        href="/blog"
        className="mb-8 inline-block text-sm text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300"
      >
        &larr; Back to blog
      </Link>
      <header className="mb-8">
        <h1 className="mb-2 text-3xl font-bold text-neutral-900 dark:text-neutral-100">
          {post.title}
        </h1>
        <time className="text-sm text-neutral-400">{post.date}</time>
      </header>
      <div className="max-w-none whitespace-pre-line leading-relaxed text-neutral-700 dark:text-neutral-300">
        {post.content}
      </div>
    </article>
  );
}