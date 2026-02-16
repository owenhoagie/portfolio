import Link from "next/link";
import { Project } from "@/types";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block rounded-lg border border-neutral-200 bg-white p-5 hover:border-neutral-300 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-700"
    >
      <h3 className="mb-1 text-base font-semibold text-neutral-900 group-hover:text-neutral-700 dark:text-neutral-100 dark:group-hover:text-neutral-300">
        {project.title}
      </h3>
      <p className="mb-3 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded bg-neutral-100 px-2 py-0.5 text-xs text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400"
          >
            {tech}
          </span>
        ))}
      </div>
    </Link>
  );
}