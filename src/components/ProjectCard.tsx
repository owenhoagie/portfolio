import Link from "next/link";
import { Project } from "@/types";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="surface-panel group block rounded-[1.5rem] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_44px_rgba(80,61,45,0.12)] dark:hover:shadow-[0_20px_44px_rgba(0,0,0,0.3)]"
    >
      <div className="mb-5 flex items-center justify-between gap-4">
        <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-orange-800 dark:bg-orange-500/10 dark:text-orange-200">
          Project
        </span>
        <span className="text-sm text-neutral-400 transition group-hover:translate-x-1 group-hover:text-neutral-700 dark:group-hover:text-neutral-200">
          Explore
        </span>
      </div>
      <h3 className="mb-2 text-2xl text-neutral-900 transition group-hover:text-[var(--color-accent-deep)] dark:text-neutral-100 dark:group-hover:text-orange-200">
        {project.title}
      </h3>
      <p className="mb-5 text-sm leading-7 text-neutral-600 dark:text-neutral-300">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-black/8 bg-white/65 px-3 py-1 text-xs font-medium text-neutral-600 dark:border-white/10 dark:bg-white/5 dark:text-neutral-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </Link>
  );
}
