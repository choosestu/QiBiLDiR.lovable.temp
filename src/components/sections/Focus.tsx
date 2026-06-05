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
    <section id="focus" className="py-28 md:py-40 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mb-18 md:mb-22">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">Focus</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.05]">What we are building for.</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border mt-16">
          {cards.map((c) => (
            <div
              key={c.num}
              className="bg-background p-8 lg:p-10 min-h-[300px] flex flex-col justify-between transition-colors hover:bg-subtle"
            >
              <span className="text-xs font-sans text-accent tracking-widest">{c.num}</span>
              <div>
                <h3 className="text-2xl md:text-[1.7rem] leading-tight mb-4">{c.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-[15px]">{c.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
