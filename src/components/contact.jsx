import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { profile, socials } from "@/data/portfolio";
import { Cloud, Heart, PokeDoodle, SectionTitle, Star } from "./doodles";

const emptyForm = { name: "", email: "", message: "" };

export function Contact() {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const submitting = useRef(false);
  const sending = status === "sending";

  useEffect(() => {
    if (status !== "sent") return;
    const timer = window.setTimeout(() => setStatus("idle"), 4000);
    return () => window.clearTimeout(timer);
  }, [status]);

  const validate = (fields) => {
    const e = {};
    if (!fields.name) e.name = "oops! this field needs a little something ✿";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(fields.email))
      e.email = "hmm, that email looks a bit shy ☁";
    if (fields.message.length < 10) e.message = "tell me a tiny bit more? (10+ characters) ♡";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = async (ev) => {
    ev.preventDefault();
    if (submitting.current) return;

    const fields = {
      name: form.name.trim(),
      email: form.email.trim(),
      message: form.message.trim(),
    };
    if (!validate(fields)) {
      setStatus("idle");
      return;
    }

    const submission = { ...Object.fromEntries(new FormData(ev.currentTarget)), ...fields };
    submitting.current = true;
    setStatus("sending");

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${profile.email}`, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(submission),
        signal: AbortSignal.timeout(15000),
      });
      const result = await response.json();

      if (!response.ok || String(result?.success) !== "true") {
        const needsActivation = /needs activation/i.test(result?.message ?? "");
        setStatus(needsActivation ? "inactive" : "error");
        return;
      }

      setForm(emptyForm);
      setStatus("sent");
    } catch {
      setStatus("error");
    } finally {
      submitting.current = false;
    }
  };

  const field = (key, label, isArea = false) => (
    <label className="block">
      <span className="font-marker text-xl text-ink">{label}</span>
      {isArea ? (
        <textarea
          name={key}
          rows={4}
          required
          disabled={sending}
          aria-invalid={Boolean(errors[key])}
          value={form[key]}
          onChange={(e) => setForm({ ...form, [key]: e.target.value })}
          className="sketch mt-2 w-full bg-card px-4 py-3 text-ink outline-none focus:border-primary focus:ring-2 focus:ring-ring/40"
        />
      ) : (
        <input
          name={key}
          type={key === "email" ? "email" : "text"}
          autoComplete={key}
          required
          disabled={sending}
          aria-invalid={Boolean(errors[key])}
          value={form[key]}
          onChange={(e) => setForm({ ...form, [key]: e.target.value })}
          className="sketch mt-2 w-full bg-card px-4 py-3 text-ink outline-none focus:border-primary focus:ring-2 focus:ring-ring/40"
        />
      )}
      {errors[key] && (
        <motion.span
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-1 block font-marker text-base text-primary"
        >
          {errors[key]}
        </motion.span>
      )}
    </label>
  );

  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-28 px-5 py-24">
      <SectionTitle kicker="don't be a stranger">let&apos;s be internet friends! ☺</SectionTitle>

      <div className="grid gap-8 md:grid-cols-2">
        <motion.form
          action={`https://formsubmit.co/${profile.email}`}
          method="post"
          onSubmit={submit}
          noValidate
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="paper grain relative space-y-5 bg-card p-7"
        >
          <input type="hidden" name="_subject" value="New message from your portfolio" />
          <input name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />
          {field("name", "your name ✎")}
          {field("email", "your email ✉")}
          {field("message", "your message ♡", true)}
          <motion.button
            type="submit"
            disabled={sending}
            whileHover={{ y: -3, rotate: -2, scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            className="sketch bg-primary px-6 py-3 font-marker text-xl text-primary-foreground disabled:opacity-60"
          >
            {sending ? "sending…" : "send it! ✦"}
          </motion.button>

          {(status === "inactive" || status === "error") && (
            <p role="alert" className="font-marker text-lg text-ink">
              {status === "inactive"
                ? "the contact form is awaiting activation. "
                : "i couldn't send your message. please try again or "}
              <a href={`mailto:${profile.email}`} className="underline">
                email me directly
              </a>
              .
            </p>
          )}

          <AnimatePresence>
            {status === "sent" && (
              <motion.div
                role="status"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="sketch flex items-center gap-3 bg-mint/70 px-4 py-3 font-marker text-lg text-ink"
              >
                <motion.span
                  animate={{ x: [0, 40, 90], y: [0, -14, -30], opacity: [1, 1, 0] }}
                  transition={{ duration: 1.4 }}
                >
                  ✈
                </motion.span>
                sent! i&apos;ll write back soon ♡
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>

        <div className="space-y-4">
          <div className="paper grain rotate-1 bg-butter/70 p-6">
            <h3 className="text-2xl text-ink">or find me here ✦</h3>
            <ul className="mt-4 space-y-3">
              {socials.map((s) => (
                <li key={s.label}>
                  <motion.a
                    href={s.href}
                    whileHover={{ x: 6, rotate: -1 }}
                    className="sketch flex items-center gap-3 bg-card px-4 py-3 text-ink"
                  >
                    <span className="font-display text-lg">{s.icon}</span>
                    <span className="font-marker text-lg">{s.label}</span>
                    <span className="ml-auto min-w-0 text-right text-sm break-words text-ink-soft">
                      {s.value}
                    </span>
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          <div className="paper -rotate-1 bg-sky/60 p-6">
            <p className="font-marker text-xl text-ink">
              usually replying within a day, mostly powered by {profile.location}.
            </p>
            <div className="mt-3 flex gap-4">
              <PokeDoodle message="beep ☁">
                <Cloud className="h-9 w-12" />
              </PokeDoodle>
              <PokeDoodle message="shiny ✦">
                <Star className="h-8 w-8" />
              </PokeDoodle>
              <PokeDoodle message="thanks for visiting ♡">
                <Heart className="h-8 w-8" />
              </PokeDoodle>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="relative mt-10 border-t-2 border-dashed border-ink/25 px-5 py-12 text-center">
      <p className="font-marker text-xl text-ink">made with code + curiosity + a little chaos ♡</p>
      <p className="mt-3 font-display text-2xl text-ink">{profile.name}</p>
      <ul className="mt-4 flex flex-wrap justify-center gap-4">
        {socials.map((s) => (
          <li key={s.label}>
            <a href={s.href} className="crayon-underline font-marker text-lg text-ink-soft">
              {s.label}
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-sm text-ink-soft">
        © {new Date().getFullYear()} Ansh Verma. all doodles hand-made.
      </p>
      <span className="absolute bottom-6 right-6 text-ink/40">
        <PokeDoodle message="zzz... ☁">
          <Cloud className="h-10 w-14" />
        </PokeDoodle>
      </span>
    </footer>
  );
}
