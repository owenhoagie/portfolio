import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="border-b border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-lg font-semibold text-neutral-900 dark:text-neutral-100"
        >
          Owen Hoag
        </Link>
        <div className="flex items-center gap-5">
          <nav className="flex gap-6 text-sm">
            <Link
              href="/projects"
              className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
            >
              Projects
            </Link>
            <Link
              href="/blog"
              className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
            >
              Blog
            </Link>
            <Link
              href="/resume.pdf"
              target="_blank"
              className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
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