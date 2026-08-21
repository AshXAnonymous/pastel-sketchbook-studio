import { motion } from "motion/react";
import { services } from "@/data/portfolio";
import { SectionTitle } from "./doodles";

const tints = ["bg-lilac/60", "bg-peach/60", "bg-sky/60", "bg-mint/60"];

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl scroll-mt-28 px-5 py-24">
      <SectionTitle kicker="how i can help">things i can help with ♡</SectionTitle>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => (
          <motion.div
            key={s.index}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ y: -8, rotate: i % 2 ? 2 : -2 }}
            className={`paper grain group ${tints[i % 4]} p-6`}
          >
            <motion.span
              whileHover={{ rotate: [0, -14, 14, 0] }}
              className="inline-block font-display text-4xl text-ink"
            >
              {s.icon}
            </motion.span>
            <p className="mt-4 font-marker text-lg text-ink-soft">{s.index}</p>
            <h3 className="text-xl text-ink">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
