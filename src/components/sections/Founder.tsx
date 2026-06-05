import model from "@/assets/model.jpg";

const facts = [
  { k: "27+", v: "Years inside the residential development industry" },
  { k: "New Home Sales", v: "Deep specialization across the full buyer journey" },
  { k: "Builders & Developers", v: "Direct, sustained experience across project teams" },
  { k: "Practitioner-led", v: "Technology designed by someone who has lived the problem" },
];

export function Founder() {
  return (
    <section id="founder" className="py-28 md:py-40 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        <div className="lg:col-span-5">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">Founder</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-8">
            A perspective shaped by decades in the field.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            QiBiLDiR is led by an industry practitioner who has spent a career inside residential development — close enough to understand the real problems, and experienced enough to know what a genuine solution requires.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mt-5">
            This is not a technology company that discovered real estate. It is a company born from the industry itself.
          </p>
        </div>
        <div className="lg:col-span-7">
          <img
            src={model}
            alt="Architectural model of a residential neighbourhood"
            loading="lazy"
            width={1600}
            height={1200}
            className="w-full h-[360px] md:h-[440px] object-cover rounded-sm mb-12"
          />
          <dl className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
            {facts.map((f) => (
              <div key={f.v} className="border-t border-border pt-6">
                <dt className="font-display text-2xl md:text-3xl text-foreground mb-2 leading-tight">{f.k}</dt>
                <dd className="text-muted-foreground text-[15px] leading-relaxed">{f.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
