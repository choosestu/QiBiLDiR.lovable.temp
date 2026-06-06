import heroImg from "@/assets/hero-community.jpg";
import { BlueprintGrid } from "@/components/Patterns";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[92vh] flex items-center bg-charcoal text-charcoal-foreground overflow-hidden"
    >
      <img
        src={heroImg}
        alt="Aerial view of a master-planned residential community at golden hour"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover opacity-55"
      />
      {/* Lighter, directional overlay — keeps text legible without burying the image */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/35 to-charcoal/85" />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/60 via-transparent to-transparent" />
      <div className="absolute inset-0 text-white/[0.06]">
        <BlueprintGrid />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-20 md:pt-36 md:pb-28 w-full">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-charcoal-foreground/70 mb-8">
            <span className="h-px w-10 bg-charcoal-foreground/40" />
            Residential Development Technology
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.02] font-medium tracking-tight">
            Infrastructure for the
            <br />
            Future of Residential
            <br />
            <span className="italic font-light text-charcoal-foreground/85">Development.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-base md:text-lg text-charcoal-foreground/75 leading-relaxed">
            QiBiLDiR is developing technology to transform how residential communities are planned,
            delivered, and experienced — connecting the people, processes, and information that
            define modern development.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#about"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white text-charcoal text-sm font-medium hover:bg-white/90 transition-colors"
            >
              Learn More
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-white/30 text-charcoal-foreground text-sm font-medium hover:bg-white/10 transition-colors"
            >
              Partner With Us
            </a>
          </div>
        </div>
      </div>

      {/* bottom edge meta strip — adds density + industry signal */}
      <div className="absolute bottom-0 inset-x-0 border-t border-white/10 bg-charcoal/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex flex-wrap items-center justify-between gap-4 text-[11px] uppercase tracking-[0.25em] text-charcoal-foreground/55">
          <span>Land · Planning · Construction · Sales · Occupancy</span>
          <span className="hidden md:inline">Built from inside the industry</span>
        </div>
      </div>
    </section>
  );
}
