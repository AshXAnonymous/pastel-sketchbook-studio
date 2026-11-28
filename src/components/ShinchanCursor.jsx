import { useEffect, useRef } from "react";
import "./shinchan-cursor.css";

const DEFAULT_FACE = "/cursor/Shinchan.png";
const CLICK_DURATION = 240;

const faces = {
  default: DEFAULT_FACE,
  happy: "/cursor/shinchan-happy.webp",
  surprised: "/cursor/shinchan-surprised.webp",
  curious: "/cursor/shinchan-curious.webp",
};

const expressions = new Set(Object.keys(faces));
const disabledSelector = ":disabled, [aria-disabled='true']";
const tagSelector = "#about ul > li, #work article ul > li";
const optionSelector = "li > button[data-active], header + div > ul > li > button";
const optionExpressions = ["curious", "surprised", "default", "happy"];
const curiousSelector = [
  tagSelector,
  "#contact form label",
  "textarea",
  "input:not([type='checkbox'], [type='radio'], [type='button'], [type='submit'], [type='reset'], [type='file'], [type='range'], [type='color'])",
  "[contenteditable]:not([contenteditable='false'])",
  "[role='textbox']",
].join(", ");

const hoverSelector = [
  "a[href]",
  "button",
  "input:not([type='hidden'])",
  "label",
  "select",
  "summary",
  "textarea",
  "[contenteditable]:not([contenteditable='false'])",
  "[role='button']",
  "[role='link']",
  "[role='menuitem']",
  "[role='tab']",
  "[role='textbox']",
  "[data-cursor]",
  tagSelector,
].join(", ");

function getExpression(target, hovered) {
  if (!target) return "default";

  if (target.closest(disabledSelector)) return "sad";

  const custom = target.closest("[data-cursor]")?.dataset.cursor;
  if (expressions.has(custom)) return custom;

  if (hovered?.matches(optionSelector)) {
    const option = hovered.parentElement;
    const index = Array.from(option.parentElement.children).indexOf(option);
    return optionExpressions[index % optionExpressions.length];
  }

  if (target.closest(curiousSelector)) return "curious";
  if (hovered?.matches("button[aria-label='a little doodle']")) return "happy";
  if (hovered?.matches("#work article button")) return "surprised";

  return "default";
}

export default function ShinchanCursor() {
  const cursorRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const image = imageRef.current;
    const desktopPointer = window.matchMedia(
      "(any-hover: hover) and (any-pointer: fine)",
    );

    const loadedFaces = new Set();
    let x = 0;
    let y = 0;
    let visible = false;
    let didClick = false;
    let frame = 0;
    let clickTimer = 0;

    function draw() {
      frame = 0;
      if (!visible || !loadedFaces.has(DEFAULT_FACE)) return;

      const target = document.elementFromPoint(x, y);
      const hovered = target?.closest(hoverSelector);
      const expression = didClick ? "surprised" : getExpression(target, hovered);
      const candidate = faces[expression];
      const face = loadedFaces.has(candidate) ? candidate : DEFAULT_FACE;

      if (image.getAttribute("src") !== face) image.src = face;

      cursor.style.setProperty("--pointer-x", `${x}px`);
      cursor.style.setProperty("--pointer-y", `${y}px`);
      cursor.dataset.expression = expression;
      cursor.dataset.hovered = String(Boolean(hovered));
      cursor.dataset.pressed = String(didClick);
      cursor.dataset.customFace = String(face !== DEFAULT_FACE);
      cursor.dataset.visible = String(image.naturalWidth > 0);
    }

    function queueDraw() {
      if (!frame) frame = window.requestAnimationFrame(draw);
    }

    const preloads = Object.values(faces).map((url) => {
      const preload = new Image();
      preload.onload = () => {
        loadedFaces.add(url);
        queueDraw();
      };
      preload.src = url;
      return preload;
    });

    function hide() {
      visible = false;
      didClick = false;
      window.clearTimeout(clickTimer);
      cursor.dataset.visible = "false";
    }

    function onMove(event) {
      if (event.pointerType !== "mouse" || !desktopPointer.matches) {
        hide();
        return;
      }

      x = event.clientX;
      y = event.clientY;
      visible = true;
      queueDraw();
    }

    function onPress(event) {
      if (event.pointerType !== "mouse" || event.button !== 0) return;

      onMove(event);
      if (!visible || event.target.closest?.(disabledSelector)) return;

      didClick = true;
      window.clearTimeout(clickTimer);
      clickTimer = window.setTimeout(() => {
        didClick = false;
        queueDraw();
      }, CLICK_DURATION);
    }

    function onLeave(event) {
      if (!event.relatedTarget) hide();
    }

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onPress, true);
    document.addEventListener("pointerout", onLeave);
    window.addEventListener("blur", hide);
    window.addEventListener("scroll", queueDraw, true);
    desktopPointer.addEventListener("change", hide);
    image.addEventListener("load", queueDraw);
    image.addEventListener("error", hide);

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onPress, true);
      document.removeEventListener("pointerout", onLeave);
      window.removeEventListener("blur", hide);
      window.removeEventListener("scroll", queueDraw, true);
      desktopPointer.removeEventListener("change", hide);
      image.removeEventListener("load", queueDraw);
      image.removeEventListener("error", hide);
      window.cancelAnimationFrame(frame);
      window.clearTimeout(clickTimer);
      preloads.forEach((preload) => { preload.onload = null; });
    };
  }, []);

  return (
    <div ref={cursorRef} className="shinchan-cursor" aria-hidden="true">
      <img ref={imageRef} alt="" draggable={false} />
      <span className="shinchan-cursor__reaction" />
    </div>
  );
}
