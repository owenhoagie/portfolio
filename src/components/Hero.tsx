import Link from "next/link";
import ChicagoSkyline from "./ChicagoSkyline";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-stone-300/70 dark:border-white/10">
      <div className="absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(circle_at_top_left,_rgba(191,90,54,0.22),_transparent_36%),radial-gradient(circle_at_75%_20%,_rgba(14,165,233,0.18),_transparent_25%)] dark:bg-[radial-gradient(circle_at_top_left,_rgba(191,90,54,0.22),_transparent_34%),radial-gradient(circle_at_75%_20%,_rgba(34,211,238,0.18),_transparent_25%)]" />
      <div className="relative z-10 mx-auto grid max-w-6xl gap-10 px-6 py-18 md:grid-cols-[1.15fr_0.85fr] md:items-end md:py-24">
        <div>
          <p className="animate-fade-up mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-orange-700 dark:text-orange-300">
            Software Developer • Chicago
          </p>
          <h1 className="animate-fade-up text-5xl leading-none text-neutral-900 dark:text-neutral-100 sm:text-6xl md:text-7xl">
            I build thoughtful software that earns its place.
          </h1>
          <p className="animate-fade-up animation-delay-150 mt-6 max-w-2xl text-lg leading-8 text-neutral-700 dark:text-neutral-300">
            I care about crisp interfaces, reliable systems, and product
            decisions that make a tool genuinely easier to use. This portfolio
            is a snapshot of that work.
          </p>
          <div className="animate-fade-up animation-delay-300 mt-8 flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="rounded-full bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-accent-deep)]"
            >
              View Projects
            </Link>
            <Link
              href="/blog"
              className="rounded-full border border-stone-400/70 px-5 py-3 text-sm font-semibold text-neutral-700 transition hover:border-stone-700 hover:text-neutral-950 dark:border-white/20 dark:text-neutral-200 dark:hover:border-white/40 dark:hover:text-white"
            >
              Read Blog
            </Link>
            <a
              href="mailto:owenhoag@vt.edu"
              className="rounded-full border border-transparent px-5 py-3 text-sm font-semibold text-neutral-600 transition hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-white"
            >
              Say Hello
            </a>
          </div>
        </div>

        <div className="animate-fade-up animation-delay-150 glass-panel rounded-[2rem] p-6 md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral-500 dark:text-neutral-400">
            What I focus on
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3 md:grid-cols-1">
            <div className="rounded-2xl border border-black/5 bg-white/60 p-4 dark:border-white/10 dark:bg-white/5">
              <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                Product-minded builds
              </p>
              <p className="mt-2 text-sm leading-6 text-neutral-600 dark:text-neutral-300">
                Features shaped by real workflows, not just interesting tech.
              </p>
            </div>
            <div className="rounded-2xl border border-black/5 bg-white/60 p-4 dark:border-white/10 dark:bg-white/5">
              <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                Full-stack execution
              </p>
              <p className="mt-2 text-sm leading-6 text-neutral-600 dark:text-neutral-300">
                From interface details to API design, data models, and deploys.
              </p>
            </div>
            <div className="rounded-2xl border border-black/5 bg-white/60 p-4 dark:border-white/10 dark:bg-white/5">
              <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                Clear communication
              </p>
              <p className="mt-2 text-sm leading-6 text-neutral-600 dark:text-neutral-300">
                Writing, documentation, and handoffs that help teams move.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 pb-12">
        <div className="glass-panel relative overflow-hidden rounded-[2rem] px-6 py-6 md:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <p className="text-3xl text-neutral-900 dark:text-neutral-100">4+</p>
              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">
                End-to-end portfolio projects with clear product framing.
              </p>
            </div>
            <div>
              <p className="text-3xl text-neutral-900 dark:text-neutral-100">3 lanes</p>
              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">
                Frontend polish, backend reliability, and practical AI workflows.
              </p>
            </div>
            <div>
              <p className="text-3xl text-neutral-900 dark:text-neutral-100">1 goal</p>
              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">
                Ship software that feels calm, useful, and easy to trust.
              </p>
            </div>
          </div>
        </div>
      </div>

      <ChicagoSkyline className="pointer-events-none absolute bottom-0 left-0 w-full fill-[rgba(21,25,31,0.06)] dark:fill-[rgba(255,255,255,0.06)]" />
    </section>
  );
}
