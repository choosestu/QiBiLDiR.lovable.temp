import construction from "@/assets/construction.jpg";

const seeking = [
  "Pilot builder projects",
  "Strategic partnerships",
  "Technology collaborators",
  "Industry advisors",
];

export function Status() {
  return (
    <section id="status" className="py-24 md:py-36 bg-subtle">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
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
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-accent mb-6">
            <span className="inline-block h-2 w-2 rounded-full bg-accent animate-pulse" />
            Currently in development
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-8">
            Working alongside the industry.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl">
            QiBiLDiR is actively working with industry professionals and technology partners to develop and validate the next generation of tools for residential development.
          </p>
          <p className="text-sm uppercase tracking-widest text-foreground mb-5">We are currently seeking</p>
          <ul className="divide-y divide-border border-y border-border">
            {seeking.map((s) => (
              <li key={s} className="py-4 flex items-center justify-between text-foreground">
                <span className="text-lg">{s}</span>
                <a href="#contact" className="text-sm text-muted-foreground hover:text-accent transition-colors">
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
