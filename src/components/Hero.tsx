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
              className="inline-flex items-center gap-3 rounded-full border border-[var(--color-accent-deep)] bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(109,51,28,0.18)] transition hover:-translate-y-0.5 hover:bg-[var(--color-accent-deep)] hover:shadow-[0_16px_28px_rgba(109,51,28,0.24)]"
            >
              View Projects
              <span aria-hidden="true" className="text-base leading-none">
                →
              </span>
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center gap-3 rounded-full border border-stone-400/80 bg-white/70 px-6 py-3 text-sm font-semibold text-neutral-800 transition hover:-translate-y-0.5 hover:border-stone-700 hover:bg-white hover:text-neutral-950 dark:border-white/15 dark:bg-white/5 dark:text-neutral-100 dark:hover:border-white/30 dark:hover:bg-white/8 dark:hover:text-white"
            >
              Read Blog
              <span aria-hidden="true" className="text-base leading-none">
                ↗
              </span>
            </Link>
          </div>
        </div>

        <div className="animate-fade-up animation-delay-150 flex justify-center md:justify-end">
          <div className="surface-panel w-full max-w-sm rounded-[2rem] p-6">
            <div className="rounded-[1.6rem] border border-dashed border-black/15 bg-[linear-gradient(180deg,rgba(255,255,255,0.72),rgba(239,230,219,0.9))] p-6 text-center dark:border-white/15 dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))]">
              <div className="mx-auto flex h-64 w-64 items-center justify-center rounded-full border border-black/10 bg-[radial-gradient(circle_at_35%_30%,rgba(255,255,255,0.95),rgba(215,201,185,0.95))] text-5xl font-semibold text-neutral-500 shadow-[inset_0_1px_0_rgba(255,255,255,0.75)] dark:border-white/10 dark:bg-[radial-gradient(circle_at_35%_30%,rgba(255,255,255,0.12),rgba(255,255,255,0.04))] dark:text-neutral-300">
                OH
              </div>
            </div>
          </div>
        </div>
      </div>

      <ChicagoSkyline className="pointer-events-none absolute bottom-0 left-0 w-full fill-[rgba(21,25,31,0.08)] dark:fill-[rgba(255,255,255,0.08)]" />
    </section>
  );
}
