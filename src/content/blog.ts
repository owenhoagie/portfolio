import { BlogPost } from "@/types";

export const blogPosts: BlogPost[] = [
  {
    slug: "building-with-intent",
    title: "Building Software with Intent",
    date: "2026-02-10",
    summary:
      "A short introduction to how I approach shipping reliable products and learning from each release.",
    content: `
# Building Software with Intent

I enjoy working on products where clean implementation and real user value matter equally.

## What I optimize for

- Clear problem framing before writing code
- Fast iteration loops with measurable feedback
- Readable systems that are easy for teams to maintain

## Why this blog exists

I use this space to write project retrospectives, implementation notes, and lessons learned from building across the stack.

## Topics I will cover

- Full-stack architecture decisions
- AI-assisted product features
- Performance and developer-experience improvements

## Thanks for reading

More posts coming soon.
    `.trim(),
  },
];

export function getAllPosts(): BlogPost[] {
  return blogPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
