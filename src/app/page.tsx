import Hero from "@/components/Hero";
import About from "@/components/About";
import SkillsList from "@/components/SkillsList";
import ProjectGrid from "@/components/ProjectGrid";
import BlogList from "@/components/BlogList";
import ContactSection from "@/components/ContactSection";
import { projects } from "@/content/projects";
import { getAllPosts } from "@/content/blog";

export default function HomePage() {
  const recentPosts = getAllPosts().slice(0, 3);
  const featuredProjects = projects.slice(0, 4);

  return (
    <>
      <Hero />

      <About />

      <SkillsList />

      <section className="border-t border-stone-300/70 dark:border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-orange-700 dark:text-orange-300">
                Selected Work
              </p>
              <h2 className="text-3xl text-neutral-900 dark:text-neutral-100 sm:text-4xl">
                Projects that blend product thinking with solid engineering.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-neutral-600 dark:text-neutral-300">
              I like building tools that reduce friction, clarify decisions, and
              feel maintainable after the launch week glow wears off.
            </p>
          </div>
          <ProjectGrid projects={featuredProjects} />
        </div>
      </section>

      {recentPosts.length > 0 && (
        <section className="border-t border-stone-300/70 dark:border-white/10">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-sky-700 dark:text-sky-300">
                  Writing
                </p>
                <h2 className="text-3xl text-neutral-900 dark:text-neutral-100 sm:text-4xl">
                  Notes on what I&apos;m learning, building, and refining.
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-7 text-neutral-600 dark:text-neutral-300">
                The blog is where I turn implementation details into clearer
                patterns, tradeoffs, and lessons worth reusing.
              </p>
            </div>
            <BlogList posts={recentPosts} />
          </div>
        </section>
      )}

      <ContactSection />
    </>
  );
}
