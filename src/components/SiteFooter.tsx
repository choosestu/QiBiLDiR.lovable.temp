import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="bg-charcoal text-charcoal-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid gap-10 md:grid-cols-3">
        <div>
          <Logo className="h-8 mb-4" />
          <p className="text-sm text-charcoal-foreground/60 max-w-xs">
            Building the operating system for new home sales.
          </p>
        </div>
        <div className="md:col-span-2 grid grid-cols-2 gap-8 text-sm">
          <div>
            <h4 className="text-xs uppercase tracking-widest text-charcoal-foreground/40 mb-3 font-sans">
              Company
            </h4>
            <ul className="space-y-2 text-charcoal-foreground/80">
              <li><a href="#about" className="hover:text-charcoal-foreground">About</a></li>
              <li><a href="#vision" className="hover:text-charcoal-foreground">Vision</a></li>
              <li><a href="#founder" className="hover:text-charcoal-foreground">Founder</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest text-charcoal-foreground/40 mb-3 font-sans">
              Connect
            </h4>
            <ul className="space-y-2 text-charcoal-foreground/80">
              <li><a href="#contact" className="hover:text-charcoal-foreground">Partner with us</a></li>
              <li><a href="#status" className="hover:text-charcoal-foreground">Pilot projects</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col md:flex-row justify-between text-xs text-charcoal-foreground/50">
          <p>© {new Date().getFullYear()} QiBiLDiR. All rights reserved.</p>
          <p>An AI-powered platform for residential development.</p>
        </div>
      </div>
    </footer>
  );
}
