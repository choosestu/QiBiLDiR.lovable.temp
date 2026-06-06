import { SitePlanMotif } from "@/components/Patterns";

const cards = [
  {
    num: "01",
    title: "Residential Development",
    body: "Built specifically for the complexity of new home communities — not adapted from software designed for other industries.",
  },
  {
    num: "02",
    title: "Homebuyer Experience",
    body: "Raising the standard for how purchasers interact with builders and developers throughout the buying journey.",
  },
  {
    num: "03",
    title: "Development Lifecycle",
    body: "Designed to support every stage of a project — from land acquisition and planning through construction, sales, and occupancy.",
  },
  {
    num: "04",
    title: "Industry Transformation",
    body: "Moving the residential development sector toward practices that reflect how modern organizations actually operate.",
  },
];

export function Focus() {
  return (
    <section id="focus" className="relative py-20 md:py-28 bg-background overflow-hidden">
      <div className="absolute inset-0 text-foreground/[0.05]">
        <SitePlanMotif />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-12 md:mb-16">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-6">
              <span className="h-px w-8 bg-muted-foreground/40" />
              Focus — 03
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              What we are <em className="font-light italic">building for.</em>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-muted-foreground leading-relaxed">
              Four areas of focus shape every decision — from the people we work with, to the
              problems we choose to solve, to the long-term posture of the company.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
          {cards.map((c) => (
            <div
              key={c.num}
              className="group relative bg-background p-8 lg:p-10 min-h-[280px] flex flex-col justify-between transition-colors hover:bg-subtle"
            >
              <div className="flex items-start justify-between">
                <span className="text-xs font-mono text-accent tracking-widest">{c.num}</span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground/50">
                  Sheet
                </span>
              </div>
              <div>
                <h3 className="text-2xl md:text-[1.6rem] leading-tight mb-3 transition-colors group-hover:text-accent">
                  {c.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-[15px]">{c.body}</p>
              </div>
              <span className="absolute bottom-0 left-0 h-px w-0 bg-accent transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
