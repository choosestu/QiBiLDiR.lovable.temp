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
    <header className="fixed top-0 inset-x-0 z-50 bg-charcoal/85 backdrop-blur-md border-b border-white/10">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10 h-16">
        <a href="#top" className="flex items-center">
          <Logo className="h-7 md:h-8" />
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm text-charcoal-foreground/70">
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
          className="hidden md:inline-flex items-center text-sm font-medium px-4 py-2 rounded-full bg-white text-charcoal hover:bg-white/90 transition-colors"
        >
          Partner With Us
        </a>
      </nav>
    </header>
  );
}
