import { BlogPost } from "@/types";
import BlogCard from "./BlogCard";

export default function BlogList({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="grid gap-4">
      {posts.map((post) => (
        <BlogCard key={post.slug} post={post} />
      ))}
    </div>
  );
}
