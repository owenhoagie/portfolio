import Link from "next/link";
import { BlogPost } from "@/types";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block rounded-lg border border-neutral-200 bg-white p-5 hover:border-neutral-300 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-700"
    >
      <div className="mb-1 flex items-center justify-between">
        <h3 className="text-base font-semibold text-neutral-900 group-hover:text-neutral-700 dark:text-neutral-100 dark:group-hover:text-neutral-300">
          {post.title}
        </h3>
        <time className="text-xs text-neutral-400">{post.date}</time>
      </div>
      <p className="text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
        {post.summary}
      </p>
    </Link>
  );
}