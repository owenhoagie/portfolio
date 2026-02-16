import Link from "next/link";
import { BlogPost } from "@/types";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block rounded-lg border border-neutral-200 bg-white p-5 hover:border-neutral-300"
    >
      <div className="mb-1 flex items-center justify-between">
        <h3 className="text-base font-semibold text-neutral-900 group-hover:text-neutral-700">
          {post.title}
        </h3>
        <time className="text-xs text-neutral-400">{post.date}</time>
      </div>
      <p className="text-sm leading-relaxed text-neutral-500">{post.summary}</p>
    </Link>
  );
}