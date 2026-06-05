import heroImg from "@/assets/hero-community.jpg";
import logoAsset from "@/assets/qibildir-logo.asset.json";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center bg-charcoal text-charcoal-foreground overflow-hidden">
      <img
        src={heroImg}
        alt="Aerial view of a master-planned residential community at golden hour"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/95 via-charcoal/80 to-charcoal" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-20 md:py-32 w-full text-center">
        <img
          src={logoAsset.url}
          alt="QiBiLDiR"
          className="w-full max-w-[1100px] mx-auto h-auto mb-12 md:mb-16"
        />

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] max-w-4xl mx-auto font-medium tracking-tight">
          Building the Operating System for New Home Sales.
        </h1>
        <p className="mt-8 max-w-2xl mx-auto text-base md:text-lg text-charcoal-foreground/75 leading-relaxed">
          QiBiLDiR is developing technology designed to connect the people, processes, and information involved in residential development into a single intelligent platform.
        </p>
        <div className="mt-10 flex flex-wrap gap-3 justify-center">
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
