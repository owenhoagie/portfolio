export default function ContactSection() {
  return (
    <section className="border-t border-stone-300/70 dark:border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="surface-panel rounded-[1.75rem] px-6 py-8 md:px-10 md:py-10">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="section-label eyebrow-rule mb-5 text-xs font-semibold uppercase text-orange-700 dark:text-orange-300">
                Contact
              </p>
              <h2 className="text-3xl text-neutral-900 dark:text-neutral-100 sm:text-4xl">
                If you need someone who cares about both product shape and implementation quality, let&apos;s talk.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-neutral-600 dark:text-neutral-300">
                I&apos;m open to software roles, collaborative builds, and
                thoughtful conversations about making products that are easier
                to use and easier to maintain.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 text-sm">
              <a
                href="mailto:owenhoag@vt.edu"
                className="button-base button-primary"
              >
                Email Me
              </a>
              <a
                href="https://github.com/owenhoagie"
                target="_blank"
                rel="noopener noreferrer"
                className="button-base button-secondary"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/owenhoag"
                target="_blank"
                rel="noopener noreferrer"
                className="button-base button-secondary"
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
