import "@fontsource-variable/manrope/wght.css";
import "@fontsource/ibm-plex-mono/latin-400.css";
import { createInspector } from "./inspector.js";

const root = document.documentElement;
const journey = document.querySelector("[data-journey]");
const stage = document.querySelector("[data-stage]");
const canvas = document.querySelector("[data-story-canvas]");
const beats = [...document.querySelectorAll("[data-beat]")];
const rail = document.querySelector("[data-chapter-rail]");
const menu = document.querySelector("[data-chapter-menu]");
const links = [...rail.querySelectorAll("a"), ...menu.querySelectorAll("a")];
const chapterName = menu.querySelector("[data-chapter-name]");
const chapterPosition = menu.querySelector("[data-chapter-position]");
const weightControl = document.querySelector("[data-weight-choices]");
const resultValue = document.querySelector("[data-result-value]");
const resultSummary = document.querySelector("[data-result-summary]");
const traceButton = document.querySelector("[data-trace-button]");
const returnNote = document.querySelector("[data-return-note]");
const hint = document.querySelector("[data-company-hint]");
const motion = matchMedia("(prefers-reduced-motion: no-preference) and (min-height: 645px)");
const percentage = new Intl.NumberFormat("en-IN", { style: "percent", minimumFractionDigits: 2, maximumFractionDigits: 2 });

const chapters = [
  { name: "Emblem", start: .966, anchor: .045 },
  { name: "Company", start: .21, anchor: .276 },
  { name: "Weights", start: .481, anchor: .572 },
  { name: "Result", start: .655, anchor: .747 },
];
const scenarios = { equal: Array(7).fill(1 / 7), size: [.25, .20, .16, .13, .11, .09, .06] };
const weights = [...scenarios.size];
const sceneNames = [..."ABCDEFG"];
let weightMode = "size";
let selected = 0;
let hoveredCanvas = null;
let hoveredRow = null;
let inspectorOpen = false;
let pulseStarted = -Infinity;
let world;
let loading = false;
let frame = 0;
let previousTime = 0;
let canvasWidth = 0;
let canvasHeight = 0;
let lapHeight = 1;
let journeyTop = 0;
let bias = 0;
let displayed = 0;
let target = 0;
let pointerX = 0;
let pointerY = 0;
let targetX = 0;
let targetY = 0;
let activeChapter = -1;
let activeCopy = -2;
let pendingFocus = null;
const scrollRestoration = history.scrollRestoration;

const inspector = createInspector(document.querySelector("[data-inspector]"), {
  onPreview(index) {
    hoveredRow = index;
    updateInspector();
    requestFrame();
  },
  onSelect(index) {
    selectCompany(index);
  },
  onClose() {
    setInspector(false, true);
  },
});

function updateInspector() {
  inspector.render({ open: inspectorOpen, weightMode, weights: scenarios[weightMode], move: -1, selected, hovered: hoveredRow ?? hoveredCanvas });
}

function updateWeightMode() {
  weightMode = weightControl.querySelector("input:checked").value;
  const equal = weightMode === "equal";
  resultValue.textContent = percentage.format(-.10 * scenarios[weightMode][0]).replace("-", "−");
  resultSummary.textContent = equal
    ? "Company A fell 10% and counted for one seventh of the index."
    : "Company A fell 10% and counted for a quarter of the index.";
  updateInspector();
  requestFrame();
}

function setInspector(open, focus = false) {
  if (inspectorOpen === open) return;
  inspectorOpen = open;
  if (!open) hoveredRow = null;
  traceButton.setAttribute("aria-expanded", String(open));
  stage.toggleAttribute("data-inspecting", open);
  updateInspector();
  if (focus) {
    if (open) inspector.focus();
    else traceButton.focus({ preventScroll: true });
  }
  requestFrame();
}

function selectCompany(index, focus = false) {
  selected = index;
  pulseStarted = performance.now();
  setInspector(true, focus);
  updateInspector();
  requestFrame();
}

function phaseOf(distance) {
  return distance - Math.floor(distance);
}

function chapterAt(phase) {
  if (phase >= chapters[0].start || phase < chapters[1].start) return 0;
  if (phase < chapters[2].start) return 1;
  return phase < chapters[3].start ? 2 : 3;
}

function updateChapter(phase) {
  const index = chapterAt(phase);
  const next = chapters[(index + 1) % chapters.length].start;
  const start = chapters[index].start;
  const fill = phaseOf(phase - start) / phaseOf(next - start);
  rail.style.setProperty("--chapter-fill", Math.min(1, fill));
  if (index !== activeChapter) {
    activeChapter = index;
    stage.dataset.chapter = beats[index].id;
    chapterName.textContent = chapters[index].name;
    chapterPosition.textContent = `${index + 1} of ${chapters.length}`;
    for (const link of links) {
      if (link.hash === "#" + beats[index].id) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    }
  }

  const copy = phase >= .857 && phase < chapters[0].start ? -1 : index;
  if (copy !== activeCopy) {
    activeCopy = copy;
    returnNote.hidden = copy !== -1;
    for (const [i, beat] of beats.entries()) {
      beat.toggleAttribute("data-active", i === copy);
      beat.inert = i !== copy;
    }
    if (copy !== 3) {
      setCanvasHover(null);
      setInspector(false);
    }
  }

  if (pendingFocus === copy && Math.abs(target - displayed) < .007) {
    const title = beats[copy].querySelector("h1, h2");
    title.tabIndex = -1;
    title.focus({ preventScroll: true });
    pendingFocus = null;
  }
}

function advance(value, goal, amount) {
  return Math.abs(value - goal) < .000045 ? goal : value + (goal - value) * amount;
}

function paint(now) {
  const phase = phaseOf(displayed);
  const elapsed = (now - pulseStarted) / 850;
  const pulse = elapsed >= 0 && elapsed <= 1 ? elapsed : null;
  world.render({ phase, weights, selected, hovered: hoveredRow ?? hoveredCanvas, pointerX, pointerY, pulse });
  updateChapter(phase);
  if (hoveredCanvas !== null) {
    const point = world.projectCompany(hoveredCanvas);
    hint.style.transform = `translate3d(${(point.x + 1) * canvasWidth / 2}px,${(1 - point.y) * canvasHeight / 2}px,0) translate(-50%,-120%)`;
  }
  return pulse !== null;
}

function tick(now) {
  frame = 0;
  if (!world || document.hidden) return;
  const seconds = previousTime ? Math.min((now - previousTime) / 1000, .034) : 1 / 60;
  const amount = 1 - Math.exp(-13 * seconds);
  previousTime = now;
  displayed = advance(displayed, target, amount);
  pointerX = advance(pointerX, targetX, amount);
  pointerY = advance(pointerY, targetY, amount);
  let weightsMoving = false;
  for (let i = 0; i < weights.length; i++) {
    const goal = scenarios[weightMode][i];
    weights[i] = advance(weights[i], goal, amount);
    weightsMoving ||= weights[i] !== goal;
  }
  const pulsing = paint(now);
  if (pulsing || weightsMoving || displayed !== target || pointerX !== targetX || pointerY !== targetY) {
    requestFrame();
  } else {
    previousTime = 0;
  }
}

function requestFrame() {
  if (world && !frame && !document.hidden) frame = requestAnimationFrame(tick);
}

function measure() {
  canvasWidth = stage.clientWidth;
  canvasHeight = stage.clientHeight;
  const bounds = journey.getBoundingClientRect();
  journeyTop = bounds.top + scrollY;
  lapHeight = Math.max(1, (bounds.height - canvasHeight) / 3);
  world.resize(canvasWidth, canvasHeight);
}

function scrollToLap(physical, behavior = "instant") {
  window.scrollTo({ top: journeyTop + physical * lapHeight, behavior });
}

function centerLap(position) {
  bias = Math.floor(position);
  scrollToLap(1 + phaseOf(position));
}

function syncScroll() {
  if (!world) return;
  let physical = (scrollY - journeyTop) / lapHeight;
  // Move by a whole lap near either end of the native scroll range.
  // The offset keeps the signed animation position continuous.
  const shift = physical < .10 ? 1 : physical > 2.90 ? -1 : 0;
  if (shift) {
    physical += shift;
    bias -= shift;
    scrollToLap(physical);
  }
  target = physical - 1 + bias;
  requestFrame();
}

function indexForHash(hash) {
  return beats.findIndex((beat) => "#" + beat.id === hash);
}

function goTo(index, behavior) {
  const anchor = chapters[index].anchor;
  const destination = Math.round(target - anchor) + anchor;
  const physical = destination - bias + 1;
  if (physical < .16 || physical > 2.84) centerLap(target);
  scrollToLap(destination - bias + 1, behavior);
}

function setCanvasHover(index) {
  if (hoveredCanvas === index) return;
  hoveredCanvas = index;
  stage.toggleAttribute("data-pickable", index !== null);
  hint.hidden = index === null;
  if (index !== null) hint.textContent = `Company ${sceneNames[index]}`;
  updateInspector();
  requestFrame();
}

function isControl(event) {
  return event.target.closest("a, button, label, input, summary, [data-inspector]");
}

function ndc(event) {
  const bounds = stage.getBoundingClientRect();
  return {
    x: ((event.clientX - bounds.left) / canvasWidth) * 2 - 1,
    y: 1 - ((event.clientY - bounds.top) / canvasHeight) * 2,
  };
}

stage.addEventListener("pointermove", (event) => {
  if (!world || event.pointerType === "touch") return;
  const { x, y } = ndc(event);
  targetX = x;
  targetY = y;
  setCanvasHover(activeCopy === 3 && !isControl(event) ? world.pick(x, y) : null);
  requestFrame();
}, { passive: true });

stage.addEventListener("pointerleave", () => {
  targetX = targetY = 0;
  setCanvasHover(null);
  requestFrame();
});

stage.addEventListener("click", (event) => {
  if (!world || activeCopy !== 3 || isControl(event)) return;
  const { x, y } = ndc(event);
  const index = world.pick(x, y);
  if (index !== null) selectCompany(index, false);
});

document.addEventListener("click", (event) => {
  const anchor = event.target.closest('a[href^="#"]');
  if (!anchor || event.defaultPrevented || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
  const index = indexForHash(anchor.hash);
  if (index < 0) return;
  menu.open = false;
  if (!world) return;
  event.preventDefault();
  if (anchor.hash !== location.hash) history.pushState(null, "", anchor.hash);
  pendingFocus = event.detail === 0 ? index : null;
  goTo(index, "smooth");
});

window.addEventListener("scroll", syncScroll, { passive: true });
window.addEventListener("resize", () => {
  if (!world) return;
  measure();
  centerLap(target);
  requestFrame();
}, { passive: true });
window.addEventListener("popstate", () => {
  if (!world) return;
  const index = location.hash ? indexForHash(location.hash) : 0;
  if (index >= 0) requestAnimationFrame(() => {
    if (world) goTo(index, "instant");
  });
});
document.addEventListener("visibilitychange", () => {
  if (!document.hidden) requestFrame();
});
weightControl.addEventListener("change", updateWeightMode);
traceButton.addEventListener("click", () => {
  if (inspectorOpen) setInspector(false, true);
  else selectCompany(selected, true);
});
weightControl.disabled = false;
traceButton.disabled = false;
updateWeightMode();

async function startWorld() {
  if (world || loading || !motion.matches) return;
  loading = true;
  try {
    const context = canvas.getContext("webgl2", { alpha: true, antialias: true, powerPreference: "high-performance" });
    if (!context) return;
    const { createStoryWorld } = await import("./world.js");
    if (!motion.matches || context.isContextLost()) return;
    world = createStoryWorld(canvas, context);
    root.classList.add("loop-active");
    history.scrollRestoration = "manual";
    measure();
    const initial = indexForHash(location.hash);
    displayed = target = initial > 0 ? chapters[initial].anchor : 0;
    centerLap(target);
    paint(performance.now());
    requestAnimationFrame(() => requestAnimationFrame(() => {
      if (world) stage.setAttribute("data-transitions", "");
    }));
  } catch (error) {
    stopWorld();
    console.warn("Lattice is showing the still compositions.", error);
  } finally {
    loading = false;
  }
}

function stopWorld() {
  if (!world) return;
  const visibleChapter = beats[chapterAt(phaseOf(displayed))];
  cancelAnimationFrame(frame);
  previousTime = frame = 0;
  world.dispose();
  world = undefined;
  root.classList.remove("loop-active");
  stage.removeAttribute("data-transitions");
  history.scrollRestoration = scrollRestoration;
  for (const beat of beats) {
    beat.inert = false;
    beat.removeAttribute("data-active");
  }
  activeChapter = -1;
  activeCopy = -2;
  returnNote.hidden = true;
  setCanvasHover(null);
  visibleChapter.scrollIntoView({ behavior: "instant" });
}

motion.addEventListener("change", () => {
  if (motion.matches) startWorld();
  else stopWorld();
});
canvas.addEventListener("webglcontextlost", (event) => {
  event.preventDefault();
  stopWorld();
});
canvas.addEventListener("webglcontextrestored", startWorld);
startWorld();
