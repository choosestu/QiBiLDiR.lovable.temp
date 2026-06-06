import model from "@/assets/model.jpg";
import planningDesk from "@/assets/planning-desk.jpg";

const facts = [
  { k: "27+", v: "Years inside the residential development industry" },
  { k: "New Home Sales", v: "Deep specialization across the full buyer journey" },
  { k: "Builders & Developers", v: "Direct, sustained experience across project teams" },
  { k: "Practitioner-led", v: "Technology designed by someone who has lived the problem" },
];

export function Founder() {
  return (
    <section id="founder" className="relative py-20 md:py-28 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Editorial masthead */}
        <div className="flex items-center justify-between border-b border-border pb-5 mb-12 md:mb-16">
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
            <span className="h-px w-8 bg-muted-foreground/40" />
            Founder — 05
          </div>
          <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground/60 hidden md:inline">
            A practitioner's perspective
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.04] mb-8 font-light">
              A perspective shaped by
              <br />
              <em className="italic">decades in the field.</em>
            </h2>
            <div className="space-y-5 text-lg text-muted-foreground leading-relaxed max-w-2xl">
              <p className="text-xl text-foreground font-display leading-snug">
                QiBiLDiR is led by an industry practitioner who has spent a career inside residential
                development — close enough to understand the real problems, and experienced enough to
                know what a genuine solution requires.
              </p>
              <p>
                This is not a technology company that discovered real estate. It is a company born
                from the industry itself.
              </p>
            </div>
            <dl className="grid sm:grid-cols-2 gap-x-10 gap-y-6 mt-12">
              {facts.map((f) => (
                <div key={f.v} className="border-t border-border pt-5">
                  <dt className="font-display text-2xl md:text-[1.7rem] text-foreground mb-1.5 leading-tight">
                    {f.k}
                  </dt>
                  <dd className="text-muted-foreground text-[14px] leading-relaxed">{f.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2 space-y-5">
            <div className="relative">
              <img
                src={planningDesk}
                alt="Architectural plans, drafting tools, and pencils on a desk"
                loading="lazy"
                width={1600}
                height={1200}
                className="w-full h-[280px] md:h-[340px] object-cover rounded-sm"
              />
              <div className="absolute bottom-3 left-3 bg-charcoal/85 text-charcoal-foreground text-[10px] uppercase tracking-[0.25em] px-3 py-1.5">
                Field Notes
              </div>
            </div>
            <img
              src={model}
              alt="Architectural model of a residential neighbourhood"
              loading="lazy"
              width={1600}
              height={1200}
              className="w-full h-[220px] md:h-[260px] object-cover rounded-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
