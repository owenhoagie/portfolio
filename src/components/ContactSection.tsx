export default function ContactSection() {
  return (
    <section className="border-t border-stone-300/70 dark:border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="glass-panel rounded-[2rem] px-6 py-8 md:px-10 md:py-10">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-orange-700 dark:text-orange-300">
                Contact
              </p>
              <h2 className="text-3xl text-neutral-900 dark:text-neutral-100 sm:text-4xl">
                Interested in building something useful together?
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-neutral-600 dark:text-neutral-300">
                I&apos;m open to software roles, collaborative projects, and
                thoughtful conversations about product, engineering, and the
                craft of making things on the web.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 text-sm">
              <a
                href="mailto:owenhoag@vt.edu"
                className="rounded-full bg-[var(--color-accent)] px-5 py-3 font-semibold text-white transition hover:bg-[var(--color-accent-deep)]"
              >
                Email Me
              </a>
              <a
                href="https://github.com/owenhoagie"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-stone-300/70 px-5 py-3 font-semibold text-neutral-700 transition hover:border-stone-700 hover:text-neutral-950 dark:border-white/15 dark:text-neutral-200 dark:hover:border-white/35 dark:hover:text-white"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/owenhoag"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-stone-300/70 px-5 py-3 font-semibold text-neutral-700 transition hover:border-stone-700 hover:text-neutral-950 dark:border-white/15 dark:text-neutral-200 dark:hover:border-white/35 dark:hover:text-white"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
