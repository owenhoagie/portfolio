import Link from "next/link";
import { BlogPost } from "@/types";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="surface-panel group block rounded-[1.5rem] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(80,61,45,0.1)] dark:hover:shadow-[0_18px_40px_rgba(0,0,0,0.24)]"
    >
      <div className="mb-3 flex items-center justify-between gap-4">
        <h3 className="text-2xl text-neutral-900 transition group-hover:text-sky-800 dark:text-neutral-100 dark:group-hover:text-sky-200">
          {post.title}
        </h3>
        <time className="text-xs font-medium uppercase tracking-[0.16em] text-neutral-400">
          {post.date}
        </time>
      </div>
      <p className="text-sm leading-7 text-neutral-600 dark:text-neutral-300">
        {post.summary}
      </p>
    </Link>
  );
}
