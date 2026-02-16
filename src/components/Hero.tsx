import Link from "next/link";
import ChicagoSkyline from "./ChicagoSkyline";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative z-10 mx-auto max-w-4xl px-6 py-24">
        <p className="mb-2 text-sm text-neutral-500 dark:text-neutral-400">
          Hi, I&apos;m
        </p>
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-5xl">
          Owen Hoag
        </h1>
        <p className="mb-8 max-w-xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
          A software developer who builds clean, purposeful products. I care
          about writing good code, shipping useful things, and always learning
          something new.
        </p>
        <div className="flex gap-4">
          <Link
            href="/projects"
            className="rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200"
          >
            View Projects
          </Link>
          <Link
            href="/blog"
            className="rounded-md border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-700 hover:border-neutral-400 dark:border-neutral-700 dark:text-neutral-300 dark:hover:border-neutral-600"
          >
            Read Blog
          </Link>
        </div>
      </div>
      <ChicagoSkyline className="pointer-events-none absolute bottom-0 left-0 w-full fill-neutral-100 dark:fill-neutral-900" />
    </section>
  );
}