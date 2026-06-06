import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="bg-charcoal text-charcoal-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 grid gap-12 md:grid-cols-3">
        <div className="md:col-span-1">
          <Logo className="h-44 md:h-48 w-auto mb-6 -ml-6" />
          <p className="text-sm text-charcoal-foreground/60 max-w-xs leading-relaxed">
            Technology for the residential development industry.
          </p>
        </div>
        <div className="md:col-span-2 grid grid-cols-2 gap-8 text-sm">
          <div>
            <h4 className="text-xs uppercase tracking-widest text-charcoal-foreground/40 mb-4">Company</h4>
            <ul className="space-y-3 text-charcoal-foreground/80">
              <li><a href="#about" className="hover:text-charcoal-foreground transition-colors">About</a></li>
              <li><a href="#vision" className="hover:text-charcoal-foreground transition-colors">Vision</a></li>
              <li><a href="#focus" className="hover:text-charcoal-foreground transition-colors">Focus</a></li>
              <li><a href="#founder" className="hover:text-charcoal-foreground transition-colors">Founder</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest text-charcoal-foreground/40 mb-4">Connect</h4>
            <ul className="space-y-3 text-charcoal-foreground/80">
              <li><a href="#contact" className="hover:text-charcoal-foreground transition-colors">Partner with us</a></li>
              <li><a href="#status" className="hover:text-charcoal-foreground transition-colors">Pilot projects</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col md:flex-row justify-between text-xs text-charcoal-foreground/40">
          <p>© {new Date().getFullYear()} QiBiLDiR. All rights reserved.</p>
          <p className="mt-1 md:mt-0">Residential development technology.</p>
        </div>
      </div>
    </footer>
  );
}
