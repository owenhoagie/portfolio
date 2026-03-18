import Link from "next/link";
import ChicagoSkyline from "./ChicagoSkyline";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-stone-300/70 dark:border-white/10">
      <div className="absolute inset-x-0 top-0 h-[540px] bg-[radial-gradient(circle_at_18%_18%,_rgba(159,79,46,0.14),_transparent_28%),linear-gradient(180deg,_rgba(255,255,255,0.25)_0%,_transparent_72%)] dark:bg-[radial-gradient(circle_at_18%_18%,_rgba(159,79,46,0.16),_transparent_30%),linear-gradient(180deg,_rgba(255,255,255,0.04)_0%,_transparent_72%)]" />
      <div className="relative z-10 mx-auto grid max-w-6xl gap-12 px-6 py-18 md:grid-cols-[1.15fr_0.85fr] md:items-center md:py-24">
        <div>
          <p className="section-label eyebrow-rule animate-fade-up mb-5 text-xs font-semibold uppercase text-orange-700 dark:text-orange-300">
            Chicago, Illinois
          </p>
          <h1 className="animate-fade-up max-w-4xl text-5xl leading-[0.95] text-neutral-900 dark:text-neutral-100 sm:text-6xl md:text-7xl">
            Hi, I&apos;m Owen Hoag.
          </h1>
          <p className="animate-fade-up animation-delay-150 mt-6 max-w-2xl text-lg leading-8 text-neutral-700 dark:text-neutral-300">
            I&apos;m a freshman at Virginia Tech studying computer science and
            building a strong foundation in software development.
          </p>
          <div className="animate-fade-up animation-delay-300 mt-10 flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="button-base button-primary"
            >
              View Projects
            </Link>
            <Link
              href="/blog"
              className="button-base button-secondary"
            >
              Read Blog
            </Link>
          </div>
        </div>

        <div className="animate-fade-up animation-delay-150 flex justify-center md:justify-end">
          <div className="w-full max-w-sm">
            <div className="surface-panel rounded-[2rem] p-6">
              <div className="rounded-[1.6rem] border border-dashed border-black/15 bg-[linear-gradient(180deg,rgba(255,255,255,0.72),rgba(239,230,219,0.9))] p-6 text-center dark:border-white/15 dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))]">
                <div className="mx-auto flex h-64 w-64 items-center justify-center rounded-full border border-black/10 bg-[radial-gradient(circle_at_35%_30%,rgba(255,255,255,0.95),rgba(215,201,185,0.95))] text-5xl font-semibold text-neutral-500 shadow-[inset_0_1px_0_rgba(255,255,255,0.75)] dark:border-white/10 dark:bg-[radial-gradient(circle_at_35%_30%,rgba(255,255,255,0.12),rgba(255,255,255,0.04))] dark:text-neutral-300">
                  OH
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-start gap-3">
              <a
                href="https://github.com/owenhoagie"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="button-base button-secondary button-icon"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-5 w-5 fill-current"
                >
                  <path d="M12 1.5a10.5 10.5 0 0 0-3.32 20.46c.53.1.72-.23.72-.52 0-.26-.01-.95-.01-1.86-2.94.64-3.56-1.25-3.56-1.25-.48-1.21-1.17-1.53-1.17-1.53-.96-.66.07-.65.07-.65 1.06.07 1.62 1.09 1.62 1.09.94 1.61 2.47 1.15 3.07.88.1-.68.37-1.15.67-1.41-2.35-.27-4.82-1.17-4.82-5.23 0-1.16.41-2.11 1.09-2.86-.11-.27-.47-1.37.1-2.85 0 0 .89-.29 2.92 1.09a10.16 10.16 0 0 1 5.32 0c2.03-1.38 2.92-1.09 2.92-1.09.57 1.48.21 2.58.1 2.85.68.75 1.09 1.7 1.09 2.86 0 4.07-2.47 4.95-4.83 5.21.38.33.72.97.72 1.96 0 1.42-.01 2.56-.01 2.9 0 .29.19.62.73.52A10.5 10.5 0 0 0 12 1.5Z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/owenhoag"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="button-base button-secondary button-icon"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-5 w-5 fill-current"
                >
                  <path d="M6.94 8.5H3.56V20h3.38V8.5Zm.22-3.56a1.96 1.96 0 1 0-3.92 0 1.96 1.96 0 0 0 3.92 0ZM20.44 20h-3.37v-5.6c0-1.34-.03-3.06-1.87-3.06-1.88 0-2.17 1.47-2.17 2.97V20h-3.37V8.5h3.24v1.57h.05c.45-.85 1.55-1.75 3.19-1.75 3.41 0 4.04 2.24 4.04 5.15V20Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <ChicagoSkyline className="pointer-events-none absolute bottom-0 left-0 w-full fill-[rgba(21,25,31,0.08)] dark:fill-[rgba(255,255,255,0.08)]" />
    </section>
  );
}
