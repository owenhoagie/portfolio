import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-stone-300/70 bg-[rgba(245,240,232,0.75)] backdrop-blur-xl dark:border-white/10 dark:bg-[rgba(12,17,23,0.72)]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-lg font-semibold uppercase tracking-[0.08em] text-neutral-900 dark:text-neutral-100"
        >
          Owen Hoag
        </Link>
        <div className="flex items-center gap-5">
          <nav className="flex gap-6 text-sm">
            <Link
              href="/projects"
              className="text-neutral-600 transition hover:text-[var(--color-accent-deep)] dark:text-neutral-300 dark:hover:text-orange-200"
            >
              Projects
            </Link>
            <Link
              href="/blog"
              className="text-neutral-600 transition hover:text-[var(--color-accent-deep)] dark:text-neutral-300 dark:hover:text-orange-200"
            >
              Blog
            </Link>
            <Link
              href="/resume"
              className="text-neutral-600 transition hover:text-[var(--color-accent-deep)] dark:text-neutral-300 dark:hover:text-orange-200"
            >
              Resume
            </Link>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
