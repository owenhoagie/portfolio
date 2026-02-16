import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: 1,
    slug: "project-one",
    title: "Project One",
    description:
      "A brief description of Project One, highlighting its features and technologies used.",
    longDescription:
      "Project One is a full-featured web application built with React and TypeScript. It demonstrates component-driven architecture, custom hooks for state management, and a responsive CSS layout. The project started as a way to explore advanced React patterns and grew into a useful tool that solves a real problem for its users. Key features include real-time data updates, keyboard-driven navigation, and comprehensive test coverage.",
    technologies: ["React", "TypeScript", "CSS"],
    link: "https://github.com/owenhoagie/project-one",
  },
  {
    id: 2,
    slug: "project-two",
    title: "Project Two",
    description:
      "A brief description of Project Two, showcasing its unique aspects and functionalities.",
    longDescription:
      "Project Two is a server-rendered application built with Next.js and styled using Tailwind CSS. It features server-side data fetching, incremental static regeneration, and a clean content management workflow. The backend API layer is built with Node.js and handles authentication, data validation, and integration with third-party services. This project highlights my ability to work across the full stack and deliver production-quality software.",
    technologies: ["Next.js", "Tailwind CSS", "Node.js"],
    link: "https://github.com/owenhoagie/project-two",
  },
  {
    id: 3,
    slug: "project-three",
    title: "Project Three",
    description:
      "A brief description of Project Three, detailing its purpose and the problems it solves.",
    longDescription:
      "Project Three is a real-time collaborative tool built with Vue.js and Firebase. It uses Firestore for persistent storage and Firebase Auth for user management. The application supports live document editing, presence indicators, and offline-first functionality. SCSS modules keep the styling organized and themeable. This project pushed me to think deeply about data synchronization and conflict resolution in distributed systems.",
    technologies: ["Vue.js", "Firebase", "SCSS"],
    link: "https://github.com/owenhoagie/project-three",
  },
  {
    id: 4,
    slug: "project-four",
    title: "Project Four",
    description:
      "A brief description of Project Four, explaining its features and the tech stack used.",
    longDescription:
      "Project Four is a RESTful API and admin dashboard built with Angular on the frontend and Express with MongoDB on the backend. It features role-based access control, paginated data tables, and a charting dashboard for analytics. The API follows OpenAPI specification and includes automated integration tests. This project showcases my experience with enterprise-style architecture and database design.",
    technologies: ["Angular", "Express", "MongoDB"],
    link: "https://github.com/owenhoagie/project-four",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}