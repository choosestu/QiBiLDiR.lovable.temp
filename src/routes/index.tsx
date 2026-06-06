import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Vision } from "@/components/sections/Vision";
import { Focus } from "@/components/sections/Focus";
import { Signature } from "@/components/sections/Signature";
import { Status } from "@/components/sections/Status";
import { Founder } from "@/components/sections/Founder";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "QiBiLDiR | Residential Development Technology" },
      {
        name: "description",
        content:
          "QiBiLDiR is a residential development technology company building infrastructure to transform how new home communities are planned, sold, and experienced. Proptech for builders and developers.",
      },
      { name: "keywords", content: "residential development technology, proptech, real estate technology, new home sales technology, development innovation, homebuilder technology" },
      { property: "og:title", content: "QiBiLDiR | Residential Development Technology" },
      {
        property: "og:description",
        content:
          "Technology for the future of residential development. Built from inside the industry.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://qibildir.com" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-background text-foreground">
      <SiteNav />
      <main>
        <Hero />
        <About />
        <Vision />
        <Focus />
        <Signature />
        <Status />
        <Founder />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
