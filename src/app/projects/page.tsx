import ProjectGrid from "@/components/ProjectGrid";
import { projects } from "@/content/projects";

export const metadata = {
  title: "Projects — Owen Hoag",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="mb-2 text-3xl font-bold text-neutral-900 dark:text-neutral-100">
        Projects
      </h1>
      <p className="mb-8 text-neutral-500 dark:text-neutral-400">
        A selection of things I&apos;ve built.
      </p>
      <ProjectGrid projects={projects} />
    </div>
  );
}