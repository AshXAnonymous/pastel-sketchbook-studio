import { motion } from "motion/react";
import { useState } from "react";

const ink = "currentColor";

export function Star({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M12 2.5c.7 4.4 2.4 6.6 7 7.4-4.5 1-6.3 3-7 7.6-.8-4.5-2.6-6.6-7-7.5 4.4-.9 6.2-3 7-7.5Z"
        stroke={ink}
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Heart({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M12 20s-7-4.3-7-9a3.9 3.9 0 0 1 7-2.4A3.9 3.9 0 0 1 19 11c0 4.7-7 9-7 9Z"
        stroke={ink}
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Cloud({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M9 20c-4 0-6-2.4-6-5.2 0-2.7 2.2-4.8 5-4.7C9.4 6.4 12.4 4 16 4c4.3 0 7.6 3 8.2 7 3.6-.5 6.8 1.7 6.8 4.6 0 2.6-2.3 4.4-5.6 4.4H9Z"
        stroke={ink}
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Flower({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      {[0, 72, 144, 216, 288].map((a) => (
        <ellipse
          key={a}
          cx="12"
          cy="6.5"
          rx="3.1"
          ry="4.6"
          stroke={ink}
          strokeWidth="1.5"
          transform={`rotate(${a} 12 12)`}
        />
      ))}
      <circle cx="12" cy="12" r="1.8" stroke={ink} strokeWidth="1.5" />
    </svg>
  );
}

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 30" className={className} fill="none" aria-hidden="true">
      <path
        d="M2 8c14 14 32 18 54 14"
        stroke={ink}
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="0 0"
      />
      <path d="M46 16c4 3 8 5 10 6-3 1-6 3-8 6" stroke={ink} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function Squiggle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 12" className={className} fill="none" aria-hidden="true">
      <path
        d="M2 8c8-8 16 6 24-1s16 7 24 0 16 6 24-1 16 6 22 1"
        stroke={ink}
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** A doodle you can click for a tiny surprise. */
export function PokeDoodle({
  children,
  className = "",
  message,
  float = true,
}: {
  children: React.ReactNode;
  className?: string;
  message?: string;
  float?: boolean;
}) {
  const [pokes, setPokes] = useState(0);
  const [show, setShow] = useState(false);

  return (
    <span className={`pointer-events-auto relative inline-flex select-none ${className}`}>
      <motion.button
        type="button"
        aria-label="a little doodle"
        animate={float ? { y: [0, -8, 0], rotate: [0, 4, 0] } : {}}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.2, rotate: 12 }}
        whileTap={{ scale: 0.85, rotate: 360 }}
        onClick={() => {
          setPokes((p) => p + 1);
          if (message) {
            setShow(true);
            window.setTimeout(() => setShow(false), 1800);
          }
        }}
        className="cursor-pointer text-ink/50 transition-colors hover:text-primary"
      >
        {children}
      </motion.button>
      {show && message && (
        <motion.span
          initial={{ opacity: 0, y: 6, scale: 0.8 }}
          animate={{ opacity: 1, y: -4, scale: 1 }}
          className="paper absolute left-1/2 top-full z-30 w-max -translate-x-1/2 px-3 py-1 font-marker text-sm text-ink"
        >
          {pokes >= 3 ? "okay okay, you found me! ✦" : message}
        </motion.span>
      )}
    </span>
  );
}

export function SectionTitle({ children, kicker }: { children: React.ReactNode; kicker?: string }) {
  return (
    <div className="relative mb-10 text-center">
      {kicker && (
        <span className="font-marker text-xl text-ink-soft">{kicker}</span>
      )}
      <h2 className="crayon-underline mx-auto inline-block text-3xl text-ink sm:text-4xl md:text-5xl">
        {children}
      </h2>
      <Squiggle className="mx-auto mt-6 h-3 w-40 text-primary/60" />
    </div>
  );
}
