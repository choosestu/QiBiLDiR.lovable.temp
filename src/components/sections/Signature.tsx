import aerial from "@/assets/aerial-masterplan.jpg";

export function Signature() {
  return (
    <section
      aria-label="The future of residential development"
      className="relative h-[80vh] min-h-[560px] flex items-end bg-charcoal text-charcoal-foreground overflow-hidden"
    >
      <img
        src={aerial}
        alt="Aerial view of a master-planned residential community at golden hour"
        loading="lazy"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-transparent to-transparent" />

      {/* corner registration marks — drafting feel */}
      <div className="absolute top-6 left-6 text-[10px] uppercase tracking-[0.3em] text-charcoal-foreground/50 flex items-center gap-3">
        <span className="inline-block h-px w-8 bg-charcoal-foreground/40" />
        N · 43.6532°
      </div>
      <div className="absolute top-6 right-6 text-[10px] uppercase tracking-[0.3em] text-charcoal-foreground/50">
        Master-Planned Community
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pb-16 md:pb-24 w-full">
        <p className="text-[11px] uppercase tracking-[0.35em] text-charcoal-foreground/60 mb-6">
          The next decade of residential development
        </p>
        <h2 className="text-4xl md:text-6xl lg:text-7xl leading-[1.02] font-light max-w-4xl">
          Neighbourhoods are designed.
          <br />
          <span className="italic text-charcoal-foreground/80">
            The way we build them should be too.
          </span>
        </h2>
      </div>
    </section>
  );
}
