import { motion } from "motion/react";
import { profile } from "@/data/portfolio";
import { Arrow, Cloud, Flower, Heart, PokeDoodle, Star } from "./doodles";
import { scrollToId } from "./nav";

export function Hero() {
  return (
    <section className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center gap-10 px-5 pb-16 pt-32 md:flex-row md:gap-16">
      <div className="pointer-events-none absolute inset-0 hidden md:block">
        <PokeDoodle className="absolute left-6 top-32" message="hi there ☺">
          <Cloud className="h-12 w-16" />
        </PokeDoodle>
        <PokeDoodle className="absolute right-10 top-40" message="sparkle! ✦">
          <Star className="h-9 w-9" />
        </PokeDoodle>
        <PokeDoodle className="absolute bottom-24 left-24" message="you're lovely ♡">
          <Heart className="h-8 w-8" />
        </PokeDoodle>
      </div>

      <div className="relative z-10 max-w-xl text-center md:text-left">
        <span className="sketch inline-block bg-butter/80 px-4 py-1 font-marker text-xl text-ink">
          {profile.greeting}
        </span>
        <h1 className="mt-5 text-5xl leading-tight text-ink sm:text-6xl lg:text-7xl">
          {profile.name}
        </h1>
        <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-ink-soft md:mx-0 md:text-lg">
          {profile.intro}
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
          <motion.button
            whileHover={{ y: -4, rotate: -2, scale: 1.04 }}
            whileTap={{ scale: 0.94 }}
            onClick={() => scrollToId("work")}
            className="sketch bg-primary px-6 py-3 font-marker text-xl text-primary-foreground shadow-[3px_4px_0_rgba(0,0,0,0.18)]"
          >
            Explore my world ↓
          </motion.button>
          <motion.button
            whileHover={{ y: -4, rotate: 2, scale: 1.04 }}
            whileTap={{ scale: 0.94 }}
            onClick={() => scrollToId("contact")}
            className="sketch bg-card px-6 py-3 font-marker text-xl text-ink shadow-[3px_4px_0_rgba(0,0,0,0.12)]"
          >
            Let&apos;s make something! ✦
          </motion.button>
        </div>

        <div className="mt-6 hidden items-center gap-2 md:flex">
          <Arrow className="h-7 w-14 text-ink/40" />
          <span className="font-marker text-lg text-ink-soft">
            psst — everything here is clickable
          </span>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10"
      >
        <div className="tape paper relative rotate-2 bg-card p-4 pb-14">
          <img
            src={profile.portrait}
            alt="Portrait of Ansh Verma"
            width={320}
            height={380}
            onError={(e) => {
              e.currentTarget.style.visibility = "hidden";
            }}
            className="h-[300px] w-[260px] rounded-xl bg-lilac/60 object-cover sm:h-[360px] sm:w-[300px]"
          />
          <span className="absolute bottom-4 left-1/2 -translate-x-1/2 font-marker text-xl text-ink">
            that&apos;s me!✿
          </span>
          <span className="absolute -bottom-5 -right-5 text-ink/50">
            <Flower className="h-12 w-12 animate-floaty" />
          </span>
        </div>
      </motion.div>
    </section>
  );
}
