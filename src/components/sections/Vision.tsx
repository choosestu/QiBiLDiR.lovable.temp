import newHome from "@/assets/new-home.jpg";

export function Vision() {
  return (
    <section id="vision" className="relative py-24 md:py-36 bg-charcoal text-charcoal-foreground overflow-hidden">
      <img
        src={newHome}
        alt="Modern new construction home at dusk"
        loading="lazy"
        width={1600}
        height={1200}
        className="absolute inset-0 w-full h-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/85 to-charcoal" />
      <div className="relative max-w-5xl mx-auto px-6 lg:px-10 text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-charcoal-foreground/50 mb-8">Vision</p>
        <h2 className="text-4xl md:text-6xl lg:text-7xl leading-[1.05] font-light">
          The Future of Residential Development.
        </h2>
        <div className="mt-12 space-y-6 text-lg md:text-xl text-charcoal-foreground/80 leading-relaxed max-w-3xl mx-auto">
          <p>
            We believe every residential development should have a digital foundation that connects project knowledge, purchaser experiences, operational workflows, and decision-making into a single ecosystem.
          </p>
          <p className="text-charcoal-foreground font-display text-2xl md:text-3xl leading-snug pt-6">
            The future is not more software.<br />
            The future is better connected information.
          </p>
        </div>
      </div>
    </section>
  );
}
