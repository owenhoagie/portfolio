export const metadata = {
  title: "Resume — Owen Hoag",
  description:
    "Resume viewer with in-page PDF preview and direct download access.",
};

export default function ResumePage() {
  return (
    <section className="border-t border-stone-300/70 dark:border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-8">
          <div>
            <p className="section-label eyebrow-rule mb-4 text-xs font-semibold uppercase text-orange-700 dark:text-orange-300">
              Resume
            </p>
          </div>

          <div className="mt-6 flex flex-wrap justify-start gap-3">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="button-base button-secondary"
            >
              Open PDF
            </a>
            <a
              href="/resume.pdf"
              download
              className="button-base button-primary"
            >
              Download
            </a>
          </div>
        </div>

        <p className="mb-6 text-sm leading-7 text-neutral-500 dark:text-neutral-400">
          If the embedded viewer is blocked by the browser, use
          <span className="mx-1 font-medium text-neutral-700 dark:text-neutral-200">
            Open PDF
          </span>
          to view the same file directly.
        </p>

        <div className="surface-panel overflow-hidden rounded-[1.75rem] p-3 sm:p-4">
          <div className="overflow-hidden rounded-[1.25rem] border border-black/10 bg-white dark:border-white/10 dark:bg-[rgba(12,17,23,0.92)]">
            <iframe
              src="/resume.pdf#view=FitH"
              title="Resume PDF"
              className="h-[72vh] min-h-[720px] w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
