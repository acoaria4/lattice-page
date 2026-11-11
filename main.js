import "@fontsource-variable/manrope/wght.css";
import "@fontsource/ibm-plex-mono/latin-400.css";
import "@fontsource/ibm-plex-mono/latin-500.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { createIndexScene } from "./scene.js";
import { initIndexLab } from "./lab.js";

gsap.registerPlugin(ScrollTrigger);

const page = document.documentElement;
const header = document.querySelector("[data-header]");
const menu = document.querySelector("[data-menu]");
const rail = document.querySelector("[data-chapters]");
const railLinks = Array.from(rail.querySelectorAll("a"));
const sections = railLinks.map((link) => document.querySelector(link.hash));
const headerLinks = header.querySelectorAll('a[href^="#"]');
const faq = document.querySelector("#faq");
page.classList.add("has-js");
let smoothScroll;
let chapterFrame = 0;
let lastSection = null;

function syncNavigation() {
  chapterFrame = 0;
  header.classList.toggle("is-scrolled", window.scrollY > 32);

  const readingLine = window.innerHeight * 0.48;
  const section = sections.findLast((item) => item.getBoundingClientRect().top <= readingLine) ?? sections[0];
  rail.classList.toggle("on-paper", section.id === "lab" || (section === faq && faq.getBoundingClientRect().bottom > readingLine));
  if (lastSection === section) return;
  lastSection = section;

  for (const link of [...railLinks, ...headerLinks]) {
    const current = link.hash === "#" + section.id;
    if (current && !link.classList.contains("brand")) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  }
}

function requestNavigationSync() {
  if (!chapterFrame) chapterFrame = requestAnimationFrame(syncNavigation);
}

window.addEventListener("scroll", requestNavigationSync, { passive: true });
window.addEventListener("resize", requestNavigationSync, { passive: true });
syncNavigation();

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menu.open) {
    menu.open = false;
    menu.querySelector("summary").focus();
  }
});

document.addEventListener("click", (event) => {
  if (!menu.contains(event.target) || event.target.closest("nav a")) menu.open = false;
  const anchor = event.target.closest('a[href^="#"]');
  if (!smoothScroll || !anchor || event.defaultPrevented || event.button !== 0 ||
    event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || anchor.classList.contains("skip")) return;
  const section = document.getElementById(anchor.hash.slice(1));
  if (!section) return;

  event.preventDefault();
  if (window.location.hash !== anchor.hash) history.pushState(null, "", anchor.hash);
  section.setAttribute("tabindex", "-1");
  section.focus({ preventScroll: true });
  smoothScroll.scrollTo(section, { duration: 1.06 });
});

const lab = document.querySelector("[data-lab]");
initIndexLab(lab);
for (const fieldset of lab.querySelectorAll("fieldset")) fieldset.disabled = false;

const motion = gsap.matchMedia();

motion.add("(prefers-reduced-motion: no-preference)", () => {
  const hero = document.querySelector(".hero");
  const art = hero.querySelector(".hero__art img");
  const heroText = hero.querySelectorAll(".hero__line > span, .hero__copy p, .hero__copy .button");

  if (!window.location.hash || window.location.hash === "#top") {
    gsap.from(heroText, { y: 24, opacity: 0.56, duration: 0.88, stagger: 0.08, ease: "power3.out", clearProps: "opacity,transform" });
  }
  gsap.fromTo(art, { scale: 1.025 }, {
    yPercent: 8,
    scale: 1.11,
    ease: "none",
    scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: true },
  });
});

motion.add("(prefers-reduced-motion: no-preference) and (pointer: fine)", () => {
  const lenis = new Lenis({ lerp: 0.15, smoothWheel: true, syncTouch: false });
  smoothScroll = lenis;
  lenis.on("scroll", ScrollTrigger.update);
  const tick = (time) => lenis.raf(time * 1000);
  gsap.ticker.add(tick);
  return () => {
    smoothScroll = undefined;
    gsap.ticker.remove(tick);
    lenis.destroy();
  };
});

motion.add("(prefers-reduced-motion: no-preference) and (min-height: 541px)", () => {
  const mechanism = document.querySelector(".mechanism");
  const visual = mechanism.querySelector(".mechanism__visual");
  const canvas = mechanism.querySelector("[data-index-canvas]");
  const progressBar = mechanism.querySelector(".mechanism__track > span");
  const first = mechanism.querySelector("[data-mechanism-first]");
  const last = mechanism.querySelector("[data-mechanism-last]");
  const poster = visual.querySelector("img");
  const state = { progress: 0, x: 0, y: 0 };
  const cursor = { x: 0, y: 0 };
  const market = document.querySelector(".market");
  const marketFrame = market.querySelector("[data-market-frame]");
  const finePointer = matchMedia("(pointer: fine)");
  const canDraw = Boolean(canvas.getContext("2d"));
  let scene;
  let pointerFrame = 0;
  let sceneVisible = true;

  function paint() {
    if (sceneVisible && !document.hidden) scene?.render(state.progress, state.x, state.y);
  }

  function easePointer() {
    pointerFrame = 0;
    if (!sceneVisible || document.hidden) return;
    state.x += (cursor.x - state.x) * 0.17;
    state.y += (cursor.y - state.y) * 0.17;
    paint();
    if (Math.abs(cursor.x - state.x) + Math.abs(cursor.y - state.y) > 0.004) {
      pointerFrame = requestAnimationFrame(easePointer);
    }
  }

  function movePointer(event) {
    const bounds = visual.getBoundingClientRect();
    cursor.x = ((event.clientX - bounds.left) / bounds.width) * 2 - 1;
    cursor.y = ((event.clientY - bounds.top) / bounds.height) * 2 - 1;
    if (!pointerFrame) pointerFrame = requestAnimationFrame(easePointer);
  }

  function resetPointer() {
    cursor.x = 0;
    cursor.y = 0;
    if (!pointerFrame) pointerFrame = requestAnimationFrame(easePointer);
  }

  page.classList.add("has-cinema");
  if (canDraw) {
    page.classList.add("has-canvas");
    scene = createIndexScene(canvas);
  }

  const sizeObserver = new ResizeObserver(paint);
  sizeObserver.observe(visual);
  const visibilityObserver = new IntersectionObserver(([entry]) => {
    sceneVisible = entry.isIntersecting;
    if (sceneVisible) paint();
  }, { rootMargin: "120px" });
  visibilityObserver.observe(visual);
  document.addEventListener("visibilitychange", paint);
  if (finePointer.matches && canDraw) {
    visual.addEventListener("pointermove", movePointer);
    visual.addEventListener("pointerleave", resetPointer);
    window.addEventListener("blur", resetPointer);
  }

  const story = gsap.timeline({
    scrollTrigger: {
      trigger: mechanism,
      start: "top top",
      end: "bottom bottom",
      scrub: 0.42,
      onRefresh: paint,
    },
  });
  story.to(state, { progress: 1, duration: 0.82, ease: "none", onUpdate: paint }, 0.06);
  story.to(progressBar, { scaleX: 1, duration: 1, ease: "none" }, 0);
  story.to(first, { y: -24, opacity: 0, duration: 0.21, ease: "power2.in" }, 0.25);
  story.fromTo(last, { y: 27, opacity: 0 }, { y: 0, opacity: 1, duration: 0.25, ease: "power2.out" }, 0.47);
  if (canDraw) {
    story.fromTo(poster,
      { clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)", opacity: 0.78 },
      { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", opacity: 1, duration: 0.17, ease: "power2.inOut" },
      0.83);
  }

  const entry = gsap.timeline({
    scrollTrigger: {
      trigger: market,
      start: "top 95%",
      end: () => `top ${header.offsetHeight}px`,
      scrub: 0.5,
    },
  });
  entry.fromTo(marketFrame, { clipPath: "inset(10% 6% 10% 6%)" }, { clipPath: "inset(0% 0% 0% 0%)", ease: "none" }, 0);
  entry.fromTo(".market__art", { scale: 1.21 }, { scale: 1, ease: "power1.out" }, 0);
  entry.fromTo("[data-market-copy]", { y: 38 }, { y: 0, ease: "power2.out" }, 0);

  paint();
  return () => {
    page.classList.remove("has-cinema", "has-canvas");
    sizeObserver.disconnect();
    visibilityObserver.disconnect();
    document.removeEventListener("visibilitychange", paint);
    visual.removeEventListener("pointermove", movePointer);
    visual.removeEventListener("pointerleave", resetPointer);
    window.removeEventListener("blur", resetPointer);
    cancelAnimationFrame(pointerFrame);
  };
});

document.fonts.ready.then(() => ScrollTrigger.refresh());
