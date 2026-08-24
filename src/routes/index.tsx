import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Intro } from "@/components/intro";
import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Work } from "@/components/work";
import { Services } from "@/components/services";
import { Contact, Footer } from "@/components/contact";
import { MoodSwitcher, ComplimentButton, BackToTop, CuteCursor } from "@/components/fun";

const title = "Ansh Verma — Creative Developer & Digital Builder";
const description =
  "A handmade pastel scrapbook portfolio: playful projects, creative frontend work, and friendly digital experiences by Ansh Verma.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <div className="min-h-screen bg-background text-ink">
      <Intro onDone={() => setIntroDone(true)} />
      <CuteCursor />
      <Nav />
      <MoodSwitcher />
      <main>
        <Hero />
        <About />
        <Work />
        <Services />
        <Contact />
      </main>
      <Footer />
      {introDone && (
        <>
          <ComplimentButton />
          <BackToTop />
        </>
      )}
    </div>
  );
}
