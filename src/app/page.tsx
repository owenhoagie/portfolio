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

  return (
    <>
      <Hero />

      <About />

      <SkillsList />

      <section className="border-t border-neutral-200 dark:border-neutral-800">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="mb-6 text-2xl font-bold text-neutral-900 dark:text-neutral-100">
            Projects
          </h2>
          <ProjectGrid projects={projects} />
        </div>
      </section>

      {recentPosts.length > 0 && (
        <section className="border-t border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950">
          <div className="mx-auto max-w-4xl px-6 py-16">
            <h2 className="mb-6 text-2xl font-bold text-neutral-900 dark:text-neutral-100">
              Recent Posts
            </h2>
            <BlogList posts={recentPosts} />
          </div>
        </section>
      )}

      <ContactSection />
    </>
  );
}