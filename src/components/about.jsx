import { motion } from "motion/react";
import { bio, facts, profile, skills } from "@/data/portfolio";
import { Arrow, Heart, SectionTitle, Star } from "./doodles";

const noteColors = ["bg-pink/70", "bg-sky/70", "bg-mint/70", "bg-butter/70"];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-28 px-5 py-24">
      <SectionTitle kicker="get to know me">a little bit about me ✿</SectionTitle>

      <div className="grid gap-8 md:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="paper grain relative -rotate-1 bg-card p-7 md:col-span-3"
        >
          <h3 className="text-2xl text-ink">the story so far ✎</h3>
          {bio.map((p) => (
            <p key={p} className="mt-4 leading-relaxed text-ink-soft">
              {p}
            </p>
          ))}
          <span className="absolute -right-4 -top-5 text-primary/60">
            <Star className="h-10 w-10 animate-floaty" />
          </span>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 md:col-span-2">
          {facts.map((f, i) => (
            <motion.div
              key={f.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ rotate: i % 2 ? 3 : -3, y: -4 }}
              className={`sketch ${noteColors[i % 4]} p-4 shadow-[3px_4px_0_rgba(0,0,0,0.12)]`}
            >
              <p className="font-marker text-lg text-ink-soft">{f.label}</p>
              <p className="mt-1 font-display text-base text-ink">{f.value}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-14 text-center">
        <div className="mb-5 flex items-center justify-center gap-2">
          <Arrow className="hidden h-7 w-14 -scale-x-100 text-ink/40 sm:block" />
          <h3 className="text-2xl text-ink">things i&apos;m good at</h3>
          <Heart className="h-6 w-6 text-primary/70" />
        </div>
        <ul className="flex flex-wrap justify-center gap-3">
          {skills.map((s, i) => (
            <motion.li
              key={s.name}
              whileHover={{ scale: 1.08, rotate: i % 2 ? 4 : -4 }}
              className={`sketch group relative cursor-default ${noteColors[i % 4]} px-4 py-2 font-marker text-lg text-ink`}
            >
              {s.name}
              <span className="paper pointer-events-none absolute -top-11 left-1/2 z-20 w-max -translate-x-1/2 bg-card px-3 py-1 text-sm text-ink opacity-0 transition-opacity group-hover:opacity-100">
                {s.note}
              </span>
            </motion.li>
          ))}
        </ul>
        <p className="mt-8 font-marker text-lg text-ink-soft">
          currently somewhere in {profile.location}
        </p>
      </div>
    </section>
  );
}
