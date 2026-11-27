import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { sections } from "@/data/portfolio";

export function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Nav() {
  const [active, setActive] = useState("about");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const go = (id) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <>
      <header className="fixed inset-x-0 top-3 z-50 flex justify-center px-3">
        <nav className="paper grain flex w-full max-w-3xl items-center justify-between gap-2 bg-card/90 px-4 py-2 backdrop-blur-sm">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-display text-lg text-ink transition-transform hover:-rotate-3"
          >
            ansh ✦
          </button>

          <ul className="hidden items-center gap-1 md:flex">
            {sections.map((s) => (
              <li key={s.id}>
                <motion.button
                  whileHover={{ rotate: -3, y: -3 }}
                  whileTap={{ scale: 0.92 }}
                  onClick={() => go(s.id)}
                  data-active={active === s.id}
                  className="crayon-underline rounded-full px-3 py-1.5 font-marker text-lg text-ink transition-colors hover:bg-accent/60 data-[active=true]:bg-secondary/70"
                >
                  {s.label}
                </motion.button>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="menu"
            aria-expanded={open}
            className="sketch bg-secondary/60 px-3 py-1 font-marker text-lg text-ink md:hidden"
          >
            {open ? "close ✕" : "menu ☰"}
          </button>
        </nav>
      </header>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-x-3 top-20 z-50 md:hidden"
        >
          <ul className="paper grain space-y-1 bg-card p-3">
            {sections.map((s, i) => (
              <motion.li
                key={s.id}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                <button
                  onClick={() => go(s.id)}
                  className="w-full rounded-2xl px-4 py-3 text-left font-marker text-xl text-ink hover:bg-accent/60"
                >
                  {s.label}
                </button>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </>
  );
}
