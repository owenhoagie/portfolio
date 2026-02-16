import { BlogPost } from "@/types";

export const blogPosts: BlogPost[] = [
  {
    slug: "sample-post",
    title: "Sample Blog Post",
    date: "2026-02-01",
    summary:
      "Welcome to my portfolio blog! In this post, I share insights about my journey in software development.",
    content: `
# Sample Blog Post

Welcome to my portfolio blog! In this post, I will share insights about my journey in software development and the projects I have worked on.

## Introduction

As a passionate developer, I have always been fascinated by technology and its ability to solve real-world problems. This blog will serve as a platform for me to share my experiences, challenges, and learnings.

## My Journey

I started my journey in software development by learning the basics of programming. Over the years, I have worked on various projects that have helped me grow both personally and professionally.

### Key Projects

- **Project A**: A brief description of Project A and the technologies used.
- **Project B**: A brief description of Project B and the technologies used.

## Conclusion

Thank you for reading my first blog post! Stay tuned for more updates and insights into my projects and experiences in the tech world.
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
