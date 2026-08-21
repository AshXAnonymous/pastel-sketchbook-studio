import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { experience, projects, type Project } from "@/data/portfolio";
import { Arrow, SectionTitle, Squiggle, Star } from "./doodles";

const cardTints = ["bg-pink/60", "bg-sky/60", "bg-butter/60", "bg-mint/60"];

export function Work() {
  const [openProject, setOpenProject] = useState<Project | null>(null);

  return (
    <section id="work" className="mx-auto max-w-6xl scroll-mt-28 px-5 py-24">
      <SectionTitle kicker="my little universe of work">things i&apos;ve made ✦</SectionTitle>

      <div className="grid gap-8 sm:grid-cols-2">
        {projects.map((p, i) => (
          <motion.article
            key={p.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ y: -8, rotate: i % 2 ? 1.5 : -1.5 }}
            className={`paper grain group relative ${cardTints[i % 4]} p-5`}
          >
            <div className="relative flex h-44 items-center justify-center rounded-2xl border-2 border-dashed border-ink/25 bg-card/70">
              <span className="font-display text-5xl text-ink/60 transition-transform group-hover:scale-110">
                {p.emoji}
              </span>
              <span className="absolute right-3 top-3 font-marker text-base text-ink-soft">
                {p.year}
              </span>
            </div>

            <div className="mt-4 flex items-baseline gap-2">
              <span className="font-marker text-lg text-ink-soft">{p.index}</span>
              <h3 className="text-2xl text-ink">{p.title}</h3>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.description}</p>

            <ul className="mt-3 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <li key={t} className="rounded-full bg-card/80 px-3 py-1 text-xs text-ink-soft">
                  {t}
                </li>
              ))}
            </ul>

            <button
              onClick={() => setOpenProject(p)}
              className="sketch mt-5 inline-flex items-center gap-2 bg-card px-4 py-2 font-marker text-lg text-ink transition-transform group-hover:-rotate-2"
            >
              view project
              <Arrow className="h-4 w-8 text-ink/50 transition-transform group-hover:translate-x-1" />
            </button>

            <span className="absolute -left-4 -top-4 text-ink/40 opacity-0 transition-opacity group-hover:opacity-100">
              <Star className="h-8 w-8" />
            </span>
          </motion.article>
        ))}
      </div>

      <Timeline />

      <AnimatePresence>
        {openProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenProject(null)}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-ink/35 p-5 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, rotate: -2 }}
              animate={{ scale: 1, y: 0, rotate: 0 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-label={openProject.title}
              className="paper grain w-full max-w-lg bg-card p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-3xl text-ink">
                  {openProject.emoji} {openProject.title}
                </h3>
                <button
                  onClick={() => setOpenProject(null)}
                  className="sketch bg-pink/70 px-3 py-1 font-marker text-lg text-ink"
                >
                  close ✕
                </button>
              </div>
              <Squiggle className="my-4 h-3 w-32 text-primary/60" />
              <p className="leading-relaxed text-ink-soft">{openProject.longDescription}</p>
              <p className="mt-4 font-marker text-lg text-ink-soft">
                {openProject.year} · {openProject.tags.join(" · ")}
              </p>
              <a
                href={openProject.link}
                className="sketch mt-6 inline-block bg-primary px-5 py-2 font-marker text-lg text-primary-foreground"
              >
                visit the live thing →
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function Timeline() {
  return (
    <div className="mt-24">
      <h3 className="mb-12 text-center text-3xl text-ink">the road here ✎</h3>
      <div className="relative mx-auto max-w-3xl">
        <svg
          viewBox="0 0 20 100"
          preserveAspectRatio="none"
          className="absolute left-4 top-0 h-full w-6 text-primary/50 sm:left-1/2 sm:-translate-x-1/2"
        >
          <motion.path
            d="M10 0 C 2 15, 18 30, 10 45 S 2 75, 10 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeDasharray="3 3"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
          />
        </svg>

        <ol className="space-y-8">
          {experience.map((e, i) => (
            <motion.li
              key={e.role}
              initial={{ opacity: 0, x: i % 2 ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: 0.1 * i }}
              className={`relative pl-14 sm:w-1/2 sm:pl-0 ${
                i % 2 ? "sm:ml-auto sm:pl-12" : "sm:pr-12 sm:text-right"
              }`}
            >
              <span
                className={`absolute left-2 top-6 h-4 w-4 rounded-full border-2 border-ink/50 bg-butter sm:left-auto ${
                  i % 2 ? "sm:-left-2" : "sm:-right-2"
                }`}
              />
              <div className="paper bg-card p-5">
                <p className="font-marker text-lg text-primary">{e.date}</p>
                <h4 className="mt-1 text-xl text-ink">{e.role}</h4>
                <p className="font-marker text-lg text-ink-soft">{e.company}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{e.description}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </div>
  );
}
