import newHome from "@/assets/new-home.jpg";

export function Vision() {
  return (
    <section id="vision" className="relative py-28 md:py-44 bg-charcoal text-charcoal-foreground overflow-hidden">
      <img
        src={newHome}
        alt="Modern new construction home at dusk"
        loading="lazy"
        width={1600}
        height={1200}
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/85 to-charcoal" />
      <div className="relative max-w-5xl mx-auto px-6 lg:px-10 text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-charcoal-foreground/50 mb-10">Vision</p>
        <h2 className="text-4xl md:text-6xl lg:text-7xl leading-[1.05] font-light">
          The Next Era of Residential Development.
        </h2>
        <div className="mt-14 space-y-8 text-lg md:text-xl text-charcoal-foreground/75 leading-relaxed max-w-3xl mx-auto">
          <p>
            The residential development industry carries significant complexity — across land, design, construction, sales, and the homebuyer experience. The organizations that lead the next decade will be those that bring that complexity under control.
          </p>
          <p>
            We believe the answer is not more tools. It is better connected infrastructure — purpose-built for how development actually works.
          </p>
          <p className="text-charcoal-foreground font-display text-2xl md:text-3xl leading-snug pt-4">
            Information that works together<br />
            changes everything.
          </p>
        </div>
      </div>
    </section>
  );
}
