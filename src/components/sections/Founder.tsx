import model from "@/assets/model.jpg";

const facts = [
  { k: "27+", v: "Years in residential real estate" },
  { k: "New Home Sales", v: "Specialization across the buyer journey" },
  { k: "Builders & Developers", v: "Direct experience working across teams" },
  { k: "Innovation", v: "Focused on customer experience" },
];

export function Founder() {
  return (
    <section id="founder" className="py-24 md:py-36 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <div className="lg:col-span-5">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">Founder</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-8">
            A perspective shaped by decades in the field.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            QiBiLDiR is led by an industry practitioner who has spent a career inside residential development — observing the gaps between information, teams, and the homebuyer experience, and building a long-term answer.
          </p>
        </div>
        <div className="lg:col-span-7">
          <img
            src={model}
            alt="Architectural model of a residential neighborhood"
            loading="lazy"
            width={1600}
            height={1200}
            className="w-full h-[360px] md:h-[440px] object-cover rounded-sm mb-10"
          />
          <dl className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
            {facts.map((f) => (
              <div key={f.v} className="border-t border-border pt-5">
                <dt className="font-display text-3xl md:text-4xl text-foreground mb-2">{f.k}</dt>
                <dd className="text-muted-foreground text-[15px] leading-relaxed">{f.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
