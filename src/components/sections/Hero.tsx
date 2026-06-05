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
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/95 via-charcoal/80 to-charcoal" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-36 pb-24 md:py-36 w-full text-center">
        <img
          src={logoAsset.url}
          alt="QiBiLDiR"
          className="w-full max-w-[680px] mx-auto h-auto mb-14 md:mb-18"
        />

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] max-w-4xl mx-auto font-medium tracking-tight">
          Infrastructure for the Future of Residential Development.
        </h1>
        <p className="mt-8 max-w-2xl mx-auto text-base md:text-lg text-charcoal-foreground/70 leading-relaxed">
          QiBiLDiR is developing technology to transform how residential communities are planned, delivered, and experienced — connecting the people, processes, and information that define modern development.
        </p>
        <div className="mt-12 flex flex-wrap gap-3 justify-center">
          <a href="#about" className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white text-charcoal text-sm font-medium hover:bg-white/90 transition-colors">
            Learn More
          </a>
          <a href="#contact" className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-white/30 text-charcoal-foreground text-sm font-medium hover:bg-white/10 transition-colors">
            Partner With Us
          </a>
        </div>
      </div>
    </section>
  );
}
