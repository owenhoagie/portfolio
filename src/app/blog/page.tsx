import BlogList from "@/components/BlogList";
import { getAllPosts } from "@/content/blog";

export const metadata = {
  title: "Blog — Owen Hoag",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="mb-2 text-3xl font-bold text-neutral-900">Blog</h1>
      <p className="mb-8 text-neutral-500">
        Writing about things I learn and build.
      </p>
      {posts.length > 0 ? (
        <BlogList posts={posts} />
      ) : (
        <p className="text-neutral-400">No posts yet. Check back soon.</p>
      )}
    </div>
  );
}