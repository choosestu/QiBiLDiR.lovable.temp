import sitePlan from "@/assets/site-plan.jpg";
import { BlueprintCorner } from "@/components/Patterns";

export function About() {
  return (
    <section id="about" className="relative py-20 md:py-28 bg-subtle overflow-hidden">
      {/* Editorial blueprint motif */}
      <div className="absolute -top-20 -right-20 w-[520px] h-[520px] text-foreground/[0.07]">
        <BlueprintCorner className="inset-0 w-full h-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-20 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-6">
              <span className="h-px w-8 bg-muted-foreground/40" />
              About — 01
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              Built from <em className="font-light italic">inside</em> the industry.
            </h2>
            <div className="hidden lg:block mt-10 border-l-2 border-accent/50 pl-5 text-sm text-muted-foreground italic leading-relaxed max-w-xs">
              "Decades of residential development experience, distilled into the infrastructure the
              industry has been missing."
            </div>
          </div>
          <div className="lg:col-span-7 space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p className="text-2xl md:text-3xl text-foreground font-display leading-snug tracking-tight">
              QiBiLDiR was founded from firsthand experience inside residential development — not
              from the outside looking in.
            </p>
            <p>
              After decades working across builders, developers, sales teams, and the homebuyer
              journey, a consistent pattern emerged: the industry operates on fragmented information,
              disconnected workflows, and tools that were never designed for how development actually
              works.
            </p>
            <p className="text-foreground">We are building a long-term answer to that problem.</p>
          </div>
        </div>

        <div className="mt-16 md:mt-20 relative">
          <div className="absolute -inset-4 md:-inset-6 border border-foreground/10 rounded-sm" />
          <img
            src={sitePlan}
            alt="Architects reviewing residential site plans"
            loading="lazy"
            width={1600}
            height={1200}
            className="relative w-full h-[360px] md:h-[520px] object-cover rounded-sm"
          />
          <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 bg-charcoal/85 backdrop-blur-sm text-charcoal-foreground text-[11px] uppercase tracking-[0.25em] px-4 py-2">
            Planning · Site Design · Development
          </div>
        </div>
      </div>
    </section>
  );
}
