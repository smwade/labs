import Link from "next/link";

const demos = [
  {
    id: "001",
    name: "Domain vs Stocks Calculator",
    description:
      "Compare domain investing returns against stock market performance with interactive charts and break-even analysis.",
    tags: ["HTML", "Canvas", "Vanilla JS"],
    href: "/demos/domain-calculator/",
  },
];

export default function Home() {
  return (
    <div className="lab-grid flex flex-col flex-1">
      {/* Header */}
      <header className="w-full max-w-5xl mx-auto px-6 pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-2 h-2 rounded-full bg-accent pulse-dot" />
          <span className="font-mono text-xs tracking-[0.15em] uppercase text-muted">
            Active experiments
          </span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground">
          Labs
        </h1>
        <p className="mt-3 text-lg text-muted max-w-md">
          Experiments &amp; demos by{" "}
          <a
            href="https://seanwade.com"
            className="text-foreground hover:text-accent transition-colors"
          >
            Sean Wade
          </a>
        </p>
      </header>

      {/* Demo Grid */}
      <main className="w-full max-w-5xl mx-auto px-6 pb-24 flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {demos.map((demo, i) => (
            <Link
              key={demo.id}
              href={demo.href}
              className="lab-card block rounded-2xl border border-border bg-card p-6 no-underline"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="lab-number">Exp. {demo.id}</span>
                <svg
                  className="lab-arrow w-4 h-4 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
              <h2 className="text-lg font-semibold text-foreground mb-2 leading-snug">
                {demo.name}
              </h2>
              <p className="text-sm text-muted leading-relaxed mb-5">
                {demo.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {demo.tags.map((tag) => (
                  <span key={tag} className="lab-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full max-w-5xl mx-auto px-6 py-8 border-t border-border">
        <div className="flex items-center justify-between text-xs text-muted">
          <span className="font-mono tracking-wide">
            &copy; {new Date().getFullYear()} Sean Wade
          </span>
          <a
            href="https://seanwade.com"
            className="hover:text-accent transition-colors"
          >
            seanwade.com &rarr;
          </a>
        </div>
      </footer>
    </div>
  );
}
