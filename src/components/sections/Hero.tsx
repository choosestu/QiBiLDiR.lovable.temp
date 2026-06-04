import heroImg from "@/assets/hero-community.jpg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-end bg-charcoal text-charcoal-foreground overflow-hidden">
      <img
        src={heroImg}
        alt="Aerial view of a master-planned residential community at golden hour"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover opacity-55"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-charcoal/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-transparent to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pb-20 md:pb-28 pt-32 w-full">
        <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-charcoal-foreground/60 mb-6 font-sans">
          An AI-Powered Real Estate Platform
        </p>
        <h1 className="text-[2.5rem] leading-[1.05] md:text-7xl lg:text-[5.5rem] max-w-5xl font-light">
          Building the Operating System for New Home Sales.
        </h1>
        <p className="mt-8 max-w-2xl text-base md:text-lg text-charcoal-foreground/75 leading-relaxed">
          QiBiLDiR is developing technology designed to connect the people, processes, and information involved in residential development into a single intelligent platform.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a href="#about" className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-white text-charcoal text-sm font-medium hover:bg-white/90 transition-colors">
            Learn More
          </a>
          <a href="#contact" className="inline-flex items-center justify-center px-7 py-3.5 rounded-full border border-white/30 text-charcoal-foreground text-sm font-medium hover:bg-white/10 transition-colors">
            Partner With Us
          </a>
        </div>
      </div>
    </section>
  );
}
