export default function About() {
  return (
    <section className="border-t border-stone-300/70 dark:border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-[0.95fr_1.05fr] md:items-start">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-orange-700 dark:text-orange-300">
              About
            </p>
            <h2 className="text-3xl text-neutral-900 dark:text-neutral-100 sm:text-4xl">
              I like projects with structure, taste, and a real reason to exist.
            </h2>
            <div className="mt-6 flex gap-3">
              <a
                href="https://github.com/owenhoagie"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-stone-300/70 px-4 py-2 text-sm text-neutral-700 transition hover:border-stone-700 hover:text-neutral-950 dark:border-white/15 dark:text-neutral-200 dark:hover:border-white/35 dark:hover:text-white"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/owenhoag"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-stone-300/70 px-4 py-2 text-sm text-neutral-700 transition hover:border-stone-700 hover:text-neutral-950 dark:border-white/15 dark:text-neutral-200 dark:hover:border-white/35 dark:hover:text-white"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="glass-panel rounded-[2rem] p-7">
            <div className="space-y-5 leading-8 text-neutral-700 dark:text-neutral-300">
              <p>
                I&apos;m a developer who enjoys turning messy ideas into clear,
                dependable products. The part I find most satisfying is closing
                the gap between what people need and what the software actually
                does.
              </p>
              <p>
                That usually means sweating both the big decisions and the small
                ones: shaping workflows, keeping code readable, and making sure
                the final experience feels deliberate instead of accidental.
              </p>
              <p>
                I also write to sharpen my thinking. The posts here are less
                about hot takes and more about distilling patterns, tradeoffs,
                and lessons I want to keep using.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
