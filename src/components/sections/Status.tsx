import meeting from "@/assets/meeting-site.jpg";
import construction from "@/assets/construction.jpg";

const seeking = [
  "Pilot builder and developer projects",
  "Strategic industry partnerships",
  "Technology collaborators",
  "Industry advisors and practitioners",
];

export function Status() {
  return (
    <section id="status" className="relative py-20 md:py-28 bg-subtle overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-6 relative">
          <img
            src={meeting}
            alt="Developers and planners reviewing site plans on a residential construction site"
            loading="lazy"
            width={1600}
            height={1200}
            className="w-full h-[360px] md:h-[520px] object-cover rounded-sm"
          />
          <img
            src={construction}
            alt="Residential construction site with framed homes"
            loading="lazy"
            width={800}
            height={600}
            className="hidden md:block absolute -bottom-10 -right-6 w-56 h-40 object-cover rounded-sm shadow-2xl border-4 border-subtle"
          />
          <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm text-foreground text-[11px] uppercase tracking-[0.25em] px-3 py-1.5 border-l-2 border-accent">
            On Site · Working Session
          </div>
        </div>
        <div className="lg:col-span-6">
          <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-accent mb-6">
            <span className="relative inline-flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-60 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            Currently in development — 04
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-6">
            Working alongside <em className="font-light italic">the industry.</em>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl">
            QiBiLDiR is actively engaging with builders, developers, and technology partners to
            develop, test, and refine its approach alongside the professionals who understand the
            industry best.
          </p>
          <p className="text-xs uppercase tracking-[0.25em] text-foreground mb-4">
            We are currently seeking
          </p>
          <ul className="divide-y divide-border border-y border-border">
            {seeking.map((s, i) => (
              <li
                key={s}
                className="group py-4 flex items-center justify-between text-foreground transition-colors hover:text-accent"
              >
                <span className="flex items-center gap-4 text-[16px]">
                  <span className="text-[11px] font-mono text-muted-foreground/60 w-6">
                    0{i + 1}
                  </span>
                  {s}
                </span>
                <a
                  href="#contact"
                  className="text-sm text-muted-foreground group-hover:text-accent transition-colors shrink-0 ml-4"
                >
                  Connect →
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
