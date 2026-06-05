import construction from "@/assets/construction.jpg";

const seeking = [
  "Pilot builder and developer projects",
  "Strategic industry partnerships",
  "Technology collaborators",
  "Industry advisors and practitioners",
];

export function Status() {
  return (
    <section id="status" className="py-28 md:py-40 bg-subtle">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">
        <div>
          <img
            src={construction}
            alt="Residential construction site with framed homes"
            loading="lazy"
            width={1600}
            height={1200}
            className="w-full h-[420px] md:h-[560px] object-cover rounded-sm"
          />
        </div>
        <div>
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-accent mb-8">
            <span className="inline-block h-2 w-2 rounded-full bg-accent animate-pulse" />
            Currently in development
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-8">
            Working alongside the industry.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-xl">
            QiBiLDiR is actively engaging with builders, developers, and technology partners to develop, test, and refine its approach alongside the professionals who understand the industry best.
          </p>
          <p className="text-sm uppercase tracking-widest text-foreground mb-5">We are currently seeking</p>
          <ul className="divide-y divide-border border-y border-border">
            {seeking.map((s) => (
              <li key={s} className="py-4 flex items-center justify-between text-foreground">
                <span className="text-[17px]">{s}</span>
                <a href="#contact" className="text-sm text-muted-foreground hover:text-accent transition-colors shrink-0 ml-4">
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
