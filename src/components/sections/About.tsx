import sitePlan from "@/assets/site-plan.jpg";

export function About() {
  return (
    <section id="about" className="py-24 md:py-36 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        <div className="lg:col-span-5">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">About</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
            Built from inside the industry.
          </h2>
        </div>
        <div className="lg:col-span-7 space-y-6 text-lg text-muted-foreground leading-relaxed lg:pt-6">
          <p className="text-foreground">
            QiBiLDiR was created from firsthand experience within the residential development industry.
          </p>
          <p>
            After decades spent working with builders, developers, purchasers, and sales teams, we recognized a common challenge: critical project information exists everywhere, yet rarely works together.
          </p>
          <p>
            Our mission is to help transform the way new homes are marketed, sold, managed, and experienced.
          </p>
        </div>
        <div className="lg:col-span-12 mt-8">
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
