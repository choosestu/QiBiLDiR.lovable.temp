import sitePlan from "@/assets/site-plan.jpg";

export function About() {
  return (
    <section id="about" className="py-28 md:py-40 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">
        <div className="lg:col-span-5">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">About</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
            Built from inside the industry.
          </h2>
        </div>
        <div className="lg:col-span-7 space-y-6 text-lg text-muted-foreground leading-relaxed lg:pt-6">
          <p className="text-foreground">
            QiBiLDiR was founded from firsthand experience inside residential development — not from the outside looking in.
          </p>
          <p>
            After decades working across builders, developers, sales teams, and the homebuyer journey, a consistent pattern emerged: the industry operates on fragmented information, disconnected workflows, and tools that were never designed for how development actually works.
          </p>
          <p>
            We are building a long-term answer to that problem.
          </p>
        </div>
        <div className="lg:col-span-12 mt-4">
          <img
            src={sitePlan}
            alt="Architects reviewing residential site plans"
            loading="lazy"
            width={1600}
            height={1200}
            className="w-full h-[400px] md:h-[560px] object-cover rounded-sm"
          />
        </div>
      </div>
    </section>
  );
}
