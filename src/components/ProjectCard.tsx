import { Project } from "@/types";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-lg border border-neutral-200 bg-white p-5 hover:border-neutral-300"
    >
      <h3 className="mb-1 text-base font-semibold text-neutral-900 group-hover:text-neutral-700">
        {project.title}
      </h3>
      <p className="mb-3 text-sm leading-relaxed text-neutral-500">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded bg-neutral-100 px-2 py-0.5 text-xs text-neutral-600"
          >
            {tech}
          </span>
        ))}
      </div>
    </a>
  );
}