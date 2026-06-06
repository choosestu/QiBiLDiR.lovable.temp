import newHome from "@/assets/new-home.jpg";
import { ContourLines } from "@/components/Patterns";

export function Vision() {
  return (
    <section
      id="vision"
      className="relative py-24 md:py-32 bg-charcoal text-charcoal-foreground overflow-hidden"
    >
      <img
        src={newHome}
        alt="Modern new construction home at dusk"
        loading="lazy"
        width={1600}
        height={1200}
        className="absolute inset-0 w-full h-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/85 via-charcoal/70 to-charcoal" />
      <div className="absolute inset-0 text-white/[0.08]">
        <ContourLines />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 items-end mb-14">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-charcoal-foreground/55 mb-6">
              <span className="h-px w-8 bg-charcoal-foreground/30" />
              Vision — 02
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.04] font-light">
              The Next Era of
              <br />
              Residential
              <br />
              <span className="italic">Development.</span>
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-6 text-lg text-charcoal-foreground/75 leading-relaxed">
            <p>
              The residential development industry carries significant complexity — across land,
              design, construction, sales, and the homebuyer experience. The organizations that lead
              the next decade will be those that bring that complexity under control.
            </p>
            <p>
              We believe the answer is not more tools. It is better connected infrastructure —
              purpose-built for how development actually works.
            </p>
          </div>
        </div>

        <div className="border-t border-white/15 pt-12 md:pt-14">
          <p className="text-charcoal-foreground font-display text-3xl md:text-5xl leading-[1.1] tracking-tight max-w-4xl">
            Information that works together
            <br />
            <span className="text-charcoal-foreground/55 italic font-light">
              changes everything.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
