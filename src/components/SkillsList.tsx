const skills = [
  "Python",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "PostgreSQL",
  "MongoDB",
  "AWS",
  "Docker",
  "Tailwind CSS",
  "Git",
  "REST APIs",
  "CI/CD",
];

export default function SkillsList() {
  return (
    <section className="border-t border-stone-300/70 dark:border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-label mb-5 text-xs font-semibold uppercase text-emerald-700 dark:text-emerald-300">
              Toolkit
            </p>
            <h2 className="text-3xl text-neutral-900 dark:text-neutral-100 sm:text-4xl">
              Comfortable across the stack, especially where product and engineering overlap.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-neutral-600 dark:text-neutral-300">
            These are the tools I reach for most often when building interfaces,
            services, and the supporting systems around them.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="surface-panel rounded-full px-4 py-2 text-sm font-medium text-neutral-700 dark:text-neutral-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
