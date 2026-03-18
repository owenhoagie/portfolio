export default function About() {
  return (
    <section className="border-t border-stone-300/70 dark:border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-[0.95fr_1.05fr] md:items-start">
          <div>
            <p className="section-label eyebrow-rule mb-5 text-xs font-semibold uppercase text-orange-700 dark:text-orange-300">
              About
            </p>
            <h2 className="text-3xl text-neutral-900 dark:text-neutral-100 sm:text-4xl">
              I like projects with a clear job to do and the discipline to do it well.
            </h2>
            <div className="mt-6 flex gap-3">
              <a
                href="https://github.com/owenhoagie"
                target="_blank"
                rel="noopener noreferrer"
                className="button-base button-secondary button-compact"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/owenhoag"
                target="_blank"
                rel="noopener noreferrer"
                className="button-base button-secondary button-compact"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="surface-panel rounded-[1.75rem] p-7">
            <div className="space-y-5 leading-8 text-neutral-700 dark:text-neutral-300">
              <p>
                I&apos;m a developer who enjoys turning loose ideas into
                software with shape, logic, and staying power. The most
                satisfying part of the work is narrowing the gap between what a
                person is trying to get done and what the product actually
                helps them do.
              </p>
              <p>
                That usually means paying attention at both levels: making the
                right product decisions up front, then following through with
                readable code, careful implementation, and interfaces that do
                not rely on novelty to feel polished.
              </p>
              <p>
                I also write as a way of pressure-testing my thinking. The
                notes here are mostly about patterns, tradeoffs, and lessons
                that have proved useful enough to keep.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
