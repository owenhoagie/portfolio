export default function ContactSection() {
  return (
    <section className="border-t border-neutral-200">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="mb-4 text-2xl font-bold text-neutral-900">
          Get in Touch
        </h2>
        <p className="mb-6 text-neutral-600">
          I&apos;m open to opportunities and always happy to chat. Reach out via
          email or connect on the platforms below.
        </p>
        <div className="flex gap-4 text-sm">
          <a
            href="mailto:owen@example.com"
            className="rounded-md bg-neutral-900 px-4 py-2 font-medium text-white hover:bg-neutral-800"
          >
            Email Me
          </a>
          <a
            href="https://github.com/owenhoagie"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-neutral-300 px-4 py-2 font-medium text-neutral-700 hover:border-neutral-400"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/owenhoag"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-neutral-300 px-4 py-2 font-medium text-neutral-700 hover:border-neutral-400"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}