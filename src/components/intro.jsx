import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { profile } from "@/data/portfolio";
import { Flower, Heart, Star } from "./doodles";

export function Intro({ onDone }) {
  const [gone, setGone] = useState(false);

  const finish = () => {
    if (gone) return;
    setGone(true);
    window.setTimeout(onDone, 700);
  };

  useEffect(() => {
    const t = window.setTimeout(finish, 3600);
    return () => window.clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AnimatePresence>
      {!gone && (
        <motion.div
          key="intro"
          exit={{ y: "-100%", rotate: -2, opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-cream"
        >
          <div className="relative">
            <svg viewBox="0 0 200 200" className="h-44 w-44 text-primary sm:h-56 sm:w-56">
              <motion.path
                d="M40 165 L100 35 L160 165"
                fill="none"
                stroke="currentColor"
                strokeWidth="12"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.1, ease: "easeInOut" }}
              />
              <motion.path
                d="M65 120 L136 120"
                fill="none"
                stroke="currentColor"
                strokeWidth="12"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5, delay: 1.1, ease: "easeInOut" }}
              />
            </svg>
            {[
              { C: Star, cls: "-left-8 top-2", d: 1.4 },
              { C: Heart, cls: "-right-6 top-10", d: 1.6 },
              { C: Flower, cls: "left-2 -bottom-4", d: 1.8 },
            ].map(({ C, cls, d }, i) => (
              <motion.span
                key={i}
                initial={{ scale: 0, rotate: -30 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: d, type: "spring", stiffness: 260, damping: 12 }}
                className={`absolute ${cls} text-ink/50`}
              >
                <C className="h-7 w-7" />
              </motion.span>
            ))}
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7, duration: 0.5 }}
            className="mt-4 text-4xl text-ink sm:text-6xl"
          >
            {profile.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.1, duration: 0.5 }}
            className="mt-3 font-marker text-lg text-ink-soft sm:text-2xl"
          >
            {profile.tagline}
          </motion.p>

          <button
            onClick={finish}
            className="sketch absolute bottom-10 bg-card px-5 py-2 font-marker text-lg text-ink transition-transform hover:-rotate-2 hover:scale-105"
          >
            skip intro →
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
