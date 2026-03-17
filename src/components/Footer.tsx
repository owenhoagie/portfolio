export default function Footer() {
  return (
    <footer className="border-t border-stone-300/70 dark:border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-6 text-sm text-neutral-500 dark:text-neutral-400 sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {new Date().getFullYear()} Owen Hoag. Built with care in Next.js.</p>
        <div className="flex gap-4">
          <a
            href="https://github.com/owenhoagie"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-neutral-800 dark:hover:text-neutral-200"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/owenhoag"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-neutral-800 dark:hover:text-neutral-200"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
