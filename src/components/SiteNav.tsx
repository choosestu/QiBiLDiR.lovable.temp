import { Logo } from "./Logo";

const links = [
  { href: "#about", label: "About" },
  { href: "#vision", label: "Vision" },
  { href: "#focus", label: "Focus" },
  { href: "#status", label: "Status" },
  { href: "#founder", label: "Founder" },
  { href: "#contact", label: "Contact" },
];

export function SiteNav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-charcoal border-b border-white/10 overflow-visible">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10 h-20 md:h-24 overflow-visible">
        <a href="#top" className="flex items-center overflow-visible" aria-label="QiBiLDiR home">
          <Logo className="h-48 md:h-60 w-auto -my-16" />
        </a>
        <ul className="hidden lg:flex items-center gap-8 text-sm text-charcoal-foreground/70">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-charcoal-foreground transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center text-sm font-medium px-5 py-2.5 rounded-full bg-white text-charcoal hover:bg-white/90 transition-colors"
        >
          Partner With Us
        </a>
      </nav>
    </header>
  );
}
