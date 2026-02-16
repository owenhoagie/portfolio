export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-6 text-sm text-neutral-400">
        <p>&copy; {new Date().getFullYear()} Owen Hoag</p>
        <div className="flex gap-4">
          <a
            href="https://github.com/owenhoagie"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-600 dark:hover:text-neutral-300"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/owenhoag"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-600 dark:hover:text-neutral-300"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}