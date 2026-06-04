const cards = [
  { num: "01", title: "Residential Development", body: "Helping organize the information that drives successful projects." },
  { num: "02", title: "Customer Experience", body: "Creating better experiences for homebuyers." },
  { num: "03", title: "Artificial Intelligence", body: "Making complex project knowledge accessible and useful." },
  { num: "04", title: "Digital Transformation", body: "Modernizing outdated industry workflows." },
];

export function Focus() {
  return (
    <section id="focus" className="py-24 md:py-36 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mb-16 md:mb-20">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">Focus</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.05]">What we focus on.</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {cards.map((c) => (
            <div key={c.num} className="bg-background p-8 lg:p-10 min-h-[280px] flex flex-col justify-between transition-colors hover:bg-subtle">
              <span className="text-xs font-sans text-accent tracking-widest">{c.num}</span>
              <div>
                <h3 className="text-2xl md:text-[1.7rem] leading-tight mb-3">{c.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-[15px]">{c.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
