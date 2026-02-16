const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "Git",
  "REST APIs",
  "SQL",
  "Python",
];

export default function SkillsList() {
  return (
    <section className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="mb-6 text-2xl font-bold text-neutral-900">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-md border border-neutral-200 px-3 py-1 text-sm text-neutral-600"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}