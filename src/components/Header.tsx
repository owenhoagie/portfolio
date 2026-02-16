import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-neutral-200 bg-white">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold text-neutral-900">
          Owen Hoag
        </Link>
        <nav className="flex gap-6 text-sm">
          <Link
            href="/projects"
            className="text-neutral-600 hover:text-neutral-900"
          >
            Projects
          </Link>
          <Link
            href="/blog"
            className="text-neutral-600 hover:text-neutral-900"
          >
            Blog
          </Link>
          <Link
            href="/resume.pdf"
            target="_blank"
            className="text-neutral-600 hover:text-neutral-900"
          >
            Resume
          </Link>
        </nav>
      </div>
    </header>
  );
}