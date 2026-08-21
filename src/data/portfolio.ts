// ─────────────────────────────────────────────────────────────
// ALL DEMO CONTENT LIVES HERE. Edit this file to make it yours.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "ANSH VERMA",
  greeting: "Hey! I'm Ansh 👋",
  tagline: "creative developer • digital builder • curious creator",
  intro:
    "I build fun, thoughtful, and beautiful digital experiences with code, creativity, and lots of curiosity.",
  portrait: "/placeholder-ansh-portrait.png",
  email: "hello@anshverma.dev",
  location: "somewhere on the internet ☁",
};

export const facts = [
  { label: "based in", value: "India 📍" },
  { label: "coffee/day", value: "3 cups ☕" },
  { label: "currently", value: "learning 3D ✦" },
  { label: "loves", value: "tiny details ♡" },
];

export const bio = [
  "I'm a developer who thinks the internet should feel a little more handmade. I spend my days turning messy sketchbook ideas into things people can actually click.",
  "Frontend is my playground, backend is my toolbox, and design is the reason I keep redoing things at 2am. This whole page is demo content — swap it out and make it yours.",
];

export const skills = [
  { name: "Frontend Development", note: "React, Vite, Tailwind" },
  { name: "Backend Development", note: "APIs & databases" },
  { name: "React", note: "hooks all day" },
  { name: "JavaScript", note: "and TypeScript ♡" },
  { name: "Node.js", note: "servers & scripts" },
  { name: "UI/UX", note: "pixel fiddling" },
  { name: "Creative Development", note: "the fun stuff ✦" },
];

export type Project = {
  id: string;
  index: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  year: string;
  link: string;
  emoji: string;
};

export const projects: Project[] = [
  {
    id: "sunny",
    index: "01",
    title: "Sunny",
    description: "A cheerful weather companion that turns forecasts into little illustrated moods.",
    longDescription:
      "Demo project. Sunny reimagines the weather app as a daily illustrated postcard — every forecast gets its own doodle, palette and tiny animation.",
    tags: ["React", "TypeScript", "API"],
    year: "2024",
    link: "#",
    emoji: "☀",
  },
  {
    id: "bubble",
    index: "02",
    title: "Bubble",
    description: "A tiny social space for small groups, built around soft edges and slow feeds.",
    longDescription:
      "Demo project. Bubble is a calm alternative to endless scrolling — posts float in, gently pop, and nothing shouts for attention.",
    tags: ["Node.js", "Realtime", "UI/UX"],
    year: "2024",
    link: "#",
    emoji: "☁",
  },
  {
    id: "dreamy",
    index: "03",
    title: "Dreamy",
    description: "A dream journal that sketches your notes into pastel collages overnight.",
    longDescription:
      "Demo project. Write half-asleep, wake up to a scrapbook page. Dreamy stitches text, colour and doodles into a keepsake.",
    tags: ["Next.js", "Canvas", "AI"],
    year: "2023",
    link: "#",
    emoji: "🌙",
  },
  {
    id: "sprinkle",
    index: "04",
    title: "Sprinkle",
    description: "A component kit of joyful micro-interactions for people who like confetti.",
    longDescription:
      "Demo project. Sprinkle is a small library of springy, delightful components — buttons that wiggle, toasts that bounce, cursors that sparkle.",
    tags: ["Motion", "Design System", "OSS"],
    year: "2023",
    link: "#",
    emoji: "✦",
  },
];

export const experience = [
  {
    role: "Creative Frontend Developer",
    company: "Studio Pastel",
    date: "2024 — now",
    description: "Building playful marketing sites and interactive product pages for small brands.",
  },
  {
    role: "Full-Stack Developer",
    company: "Bubblewrap Labs",
    date: "2023 — 2024",
    description: "Shipped dashboards, APIs and a design system used across four products.",
  },
  {
    role: "Frontend Intern",
    company: "Tiny Tools Co.",
    date: "2022 — 2023",
    description: "Learned a lot, broke a little, fixed it, then documented all of it.",
  },
  {
    role: "Started drawing on computers",
    company: "My bedroom",
    date: "2020",
    description: "One HTML file, way too many colours, and absolutely no regrets.",
  },
];

export const services = [
  {
    index: "01",
    title: "MAKE IT PRETTY",
    icon: "✿",
    description: "UI/UX and visual design that feels considered, warm and easy to use.",
  },
  {
    index: "02",
    title: "BUILD IT",
    icon: "✦",
    description: "Modern website and application development, fast and maintainable.",
  },
  {
    index: "03",
    title: "MAKE IT MOVE",
    icon: "☁",
    description: "Interactive animations and creative frontend experiences with real polish.",
  },
  {
    index: "04",
    title: "MAKE IT YOURS",
    icon: "♡",
    description: "Custom digital solutions shaped around how you actually work.",
  },
];

export const socials = [
  { label: "Email", value: "hello@anshverma.dev", href: "mailto:hello@anshverma.dev", icon: "✉" },
  { label: "LinkedIn", value: "/in/anshverma", href: "#", icon: "in" },
  { label: "GitHub", value: "@anshverma", href: "#", icon: "★" },
  { label: "Instagram", value: "@ansh.draws", href: "#", icon: "◎" },
];

export const compliments = [
  "you're doing great! ✦",
  "one step at a time ☁",
  "you found a secret! ♡",
  "keep creating cool things ✿",
  "your ideas are worth building ★",
  "go drink some water, genius ☺",
  "small progress is still progress ✎",
];

export const sections = [
  { id: "about", label: "about me ✿" },
  { id: "work", label: "my little universe ✦" },
  { id: "services", label: "things i can do ♡" },
  { id: "contact", label: "say hello! ☁" },
];

export const moods = [
  { id: "strawberry", label: "🌸 Strawberry" },
  { id: "sky", label: "☁ Sky" },
  { id: "mint", label: "🌿 Mint" },
  { id: "lavender", label: "🌙 Lavender" },
] as const;

export type MoodId = (typeof moods)[number]["id"];
