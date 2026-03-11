import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: 1,
    slug: "ai-course-planner",
    title: "AI Course Planner",
    description:
      "A scheduling assistant that generates semester plans from degree requirements and personal preferences.",
    longDescription:
      "Built a full-stack planner that combines curriculum constraints with user-selected priorities. The app uses server-side workflows for recommendation generation, persists draft plans, and provides a clean UI for comparison and iteration.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "OpenAI API"],
    link: "https://github.com/owenhoagie",
  },
  {
    id: 2,
    slug: "event-operations-dashboard",
    title: "Event Operations Dashboard",
    description:
      "Operational dashboard for managing registrations, attendance, and post-event analytics.",
    longDescription:
      "Designed and implemented a dashboard for internal teams to track event operations in real time. Included role-aware views, import/export tooling, and trend reporting to improve planning and follow-up across multiple events.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    link: "https://github.com/owenhoagie",
  },
  {
    id: 3,
    slug: "portfolio-cms",
    title: "Portfolio CMS",
    description:
      "Content-managed portfolio platform with markdown publishing, project pages, and theming.",
    longDescription:
      "Created a reusable portfolio starter built with modern React patterns and markdown-based content. Added route-driven project detail pages, dark mode support, and clean component abstractions to make customization fast.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://github.com/owenhoagie/portfolio",
  },
  {
    id: 4,
    slug: "analytics-automation-pipeline",
    title: "Analytics Automation Pipeline",
    description:
      "Automated reporting pipeline that transforms raw product data into scheduled insights for stakeholders.",
    longDescription:
      "Built ETL jobs and reporting endpoints to reduce manual spreadsheet work. The pipeline validates incoming data, stores normalized records, and generates recurring summaries that teams use for product and growth decisions.",
    technologies: ["Python", "SQL", "AWS", "Docker"],
    link: "https://github.com/owenhoagie",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
