import Link from "next/link";

export default function Hero() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-24">
      <p className="mb-2 text-sm text-neutral-500">Hi, I'm</p>
      <h1 className="mb-4 text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
        Owen Hoag
      </h1>
      <p className="mb-8 max-w-xl text-lg leading-relaxed text-neutral-600">
        A software developer who builds clean, purposeful products. I care about
        writing good code, shipping useful things, and always learning something
        new.
      </p>
      <div className="flex gap-4">
        <Link
          href="/projects"
          className="rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800"
        >
          View Projects
        </Link>
        <Link
          href="/blog"
          className="rounded-md border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-700 hover:border-neutral-400"
        >
          Read Blog
        </Link>
      </div>
    </section>
  );
}