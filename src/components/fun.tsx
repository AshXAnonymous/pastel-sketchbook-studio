import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { compliments, moods, type MoodId } from "@/data/portfolio";

export function MoodSwitcher() {
  const [mood, setMood] = useState<MoodId>("strawberry");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem("mood") as MoodId | null;
    if (saved) setMood(saved);
  }, []);

  useEffect(() => {
    document.documentElement.dataset["mood"] = mood;
    window.localStorage.setItem("mood", mood);
  }, [mood]);

  return (
    <div className="fixed left-3 top-24 z-40 sm:left-5">
      <motion.button
        whileHover={{ rotate: -6, scale: 1.05 }}
        whileTap={{ scale: 0.92 }}
        onClick={() => setOpen((o) => !o)}
        className="sketch bg-card px-3 py-2 font-marker text-base text-ink shadow-[3px_4px_0_rgba(0,0,0,0.12)]"
      >
        pick a mood 🎨
      </motion.button>
      {open && (
        <motion.ul
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="paper mt-2 space-y-1 bg-card p-2"
        >
          {moods.map((m) => (
            <li key={m.id}>
              <button
                onClick={() => {
                  setMood(m.id);
                  setOpen(false);
                }}
                data-active={mood === m.id}
                className="w-full rounded-xl px-3 py-1.5 text-left font-marker text-base text-ink hover:bg-accent/60 data-[active=true]:bg-secondary/70"
              >
                {m.label}
              </button>
            </li>
          ))}
        </motion.ul>
      )}
    </div>
  );
}

export function ComplimentButton() {
  const [msg, setMsg] = useState<string | null>(null);

  return (
    <div className="fixed bottom-5 left-3 z-40 sm:left-5">
      <motion.button
        whileHover={{ y: -4, rotate: 3 }}
        whileTap={{ scale: 0.92 }}
        onClick={() => {
          setMsg(compliments[Math.floor(Math.random() * compliments.length)]!);
          window.setTimeout(() => setMsg(null), 3000);
        }}
        className="sketch bg-pink/80 px-4 py-2 font-marker text-base text-ink shadow-[3px_4px_0_rgba(0,0,0,0.12)]"
      >
        need a tiny smile? ♡
      </motion.button>
      {msg && (
        <motion.p
          initial={{ opacity: 0, y: 10, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="paper mt-2 max-w-[14rem] bg-card px-4 py-2 font-marker text-lg text-ink"
        >
          {msg}
        </motion.p>
      )}
    </div>
  );
}

export function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: [0, -8, 0] }}
      transition={{ y: { duration: 3, repeat: Infinity, ease: "easeInOut" } }}
      whileHover={{ scale: 1.12, rotate: -8 }}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="back to top"
      className="sketch fixed bottom-5 right-4 z-40 bg-sky/80 px-4 py-3 text-2xl shadow-[3px_4px_0_rgba(0,0,0,0.12)]"
    >
      🎈
    </motion.button>
  );
}

export function CuteCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hot, setHot] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    setEnabled(true);
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      const t = e.target as HTMLElement | null;
      setHot(!!t?.closest("a, button, input, textarea, [role='dialog']"));
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  if (!enabled) return null;

  return (
    <motion.div
      animate={{ x: pos.x - 10, y: pos.y - 10, scale: hot ? 1.6 : 1, rotate: hot ? 20 : 0 }}
      transition={{ type: "spring", stiffness: 500, damping: 30, mass: 0.3 }}
      className="pointer-events-none fixed left-0 top-0 z-[110] text-lg text-primary mix-blend-multiply"
      aria-hidden="true"
    >
      ✦
    </motion.div>
  );
}
