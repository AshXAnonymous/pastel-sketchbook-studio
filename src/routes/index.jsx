import { createFileRoute } from "@tanstack/react-router";
import { createIsomorphicFn } from "@tanstack/react-start";
import { getRequestUrl } from "@tanstack/react-start/server";
import { useState } from "react";
import { Intro } from "@/components/intro";
import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Work } from "@/components/work";
import { Services } from "@/components/services";
import { Contact, Footer } from "@/components/contact";
import { MoodSwitcher, ComplimentButton, BackToTop, CuteCursor } from "@/components/fun";
import { profile } from "@/data/portfolio";

const title = "Ansh Verma — Creative Developer & Digital Builder";
const description =
  "A handmade pastel scrapbook portfolio: playful projects, creative frontend work, and friendly digital experiences by Ansh Verma.";
const imageAlt = "Illustrated portrait of Ansh Verma";
const getOrigin = createIsomorphicFn()
  .server(() => getRequestUrl().origin)
  .client(() => window.location.origin);

export const Route = createFileRoute("/")({
  head: () => {
    const image = new URL(profile.portrait, getOrigin()).href;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:image", content: image },
        { property: "og:image:alt", content: imageAlt },
        { name: "twitter:card", content: "summary" },
        { name: "twitter:image", content: image },
        { name: "twitter:image:alt", content: imageAlt },
      ],
    };
  },
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
