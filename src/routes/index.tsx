import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Vision } from "@/components/sections/Vision";
import { Focus } from "@/components/sections/Focus";
import { Status } from "@/components/sections/Status";
import { Founder } from "@/components/sections/Founder";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "QiBiLDiR — Building the Operating System for New Home Sales" },
      {
        name: "description",
        content:
          "QiBiLDiR is an AI-powered real estate platform developing technology to connect the people, processes, and information of residential development into a single intelligent system.",
      },
      { property: "og:title", content: "QiBiLDiR — Building the Operating System for New Home Sales" },
      {
        property: "og:description",
        content: "An AI-powered platform connecting residential development teams, projects, and homebuyers.",
      },
      { property: "og:type", content: "website" },
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
        <Status />
        <Founder />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
