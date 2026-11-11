import { getReview, holdings } from "./reviews.js";

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
const returnNote = document.querySelector("[data-return-note]");
const outgoingLabel = document.querySelector("[data-outgoing-label]");
const incomingLabel = document.querySelector("[data-incoming-label]");
const holdingButtons = [...document.querySelectorAll("[data-holding-index]")];
const holdingDetail = document.querySelector("[data-holding-detail]");
const motion = matchMedia("(prefers-reduced-motion: no-preference) and (min-height: 645px)");
const previousScrollRestoration = history.scrollRestoration;

const chapters = [
  { name: "Emblem", start: .965, anchor: .032 },
  { name: "Holdings", start: .21, anchor: .414 },
  { name: "Review", start: .525, anchor: .655 },
  { name: "After", start: .758, anchor: .799 },
];
const returnStart = .862;
const exchangeStart = .558;
const exchangeEnd = .752;

const textSlots = {};
for (const slot of ["review-date", "before-date", "outgoing-name", "incoming-name", "after-holding-name", "current-name", "review-status"]) {
  textSlots[slot] = [...document.querySelectorAll(`[data-${slot}]`)];
}

let world;
let loading = false;
let frame = 0;
let lastTime = 0;
let width = 1;
let height = 1;
let lapHeight = 1;
let journeyTop = 0;
let lapOffset = 0;
let target = chapters[0].anchor;
let displayed = target;
let pointerX = 0;
let pointerY = 0;
let targetX = 0;
let targetY = 0;
let currentChapter = -1;
let currentCopy = -2;
let currentCycle;
let currentReview = getReview(0);
let currentState;
let selectedHolding = 0;
let hoveredHolding = null;
let pendingFocus = null;
let suspendedPosition;

function setText(slot, value) {
  for (const element of textSlots[slot]) element.textContent = value;
}

function setDate(slot, date) {
  for (const element of textSlots[slot]) {
    element.textContent = date.text;
    if (element instanceof HTMLTimeElement) element.dateTime = date.iso;
  }
}

function updateHoldingDetail() {
  const active = hoveredHolding ?? selectedHolding;
  const { sector, weight } = holdings[active];
  const name = sector === "Retail" ? currentReview.outgoing : sector;
  if (holdingDetail) holdingDetail.textContent = `${name} accounts for ₹${weight} of this ₹100 example.`;
  for (const button of holdingButtons) {
    const index = Number(button.dataset.holdingIndex);
    button.setAttribute("aria-pressed", String(index === selectedHolding));
    button.toggleAttribute("data-previewing", index === active);
  }
}

function updateReview(cycle) {
  if (cycle === currentCycle) return;
  currentCycle = cycle;
  currentReview = getReview(cycle);
  setDate("review-date", currentReview.date);
  setDate("before-date", currentReview.beforeDate);
  setText("outgoing-name", currentReview.outgoing);
  setText("incoming-name", currentReview.incoming);
  setText("after-holding-name", currentReview.incoming);
  updateHoldingDetail();
}

function updateReviewState(state) {
  if (state === currentState) return;
  currentState = state;
  stage.dataset.reviewState = state;
  setText("review-status", {
    before: "Before review", exchanging: "Changing membership", after: "Review effective",
  }[state]);
}

function phaseOf(distance) {
  return distance - Math.floor(distance);
}

function chapterAt(phase) {
  if (phase >= chapters[0].start || phase < chapters[1].start) return 0;
  if (phase < chapters[2].start) return 1;
  return phase < chapters[3].start ? 2 : 3;
}

function indexForHash(hash) {
  return beats.findIndex((beat) => `#${beat.id}` === hash);
}

function setHover(index) {
  if (index === hoveredHolding) return;
  hoveredHolding = index;
  stage.toggleAttribute("data-pickable", index !== null);
  updateHoldingDetail();
  requestFrame();
}

function setSelection(index) {
  if (!holdings[index]) return;
  selectedHolding = index;
  updateHoldingDetail();
  requestFrame();
}

function updateChapter(phase) {
  const index = chapterAt(phase);
  const start = chapters[index].start;
  const next = chapters[(index + 1) % chapters.length].start;
  rail.style.setProperty("--chapter-fill", Math.min(1, phaseOf(phase - start) / phaseOf(next - start)));
  if (index !== currentChapter) {
    currentChapter = index;
    stage.dataset.chapter = beats[index].id;
    chapterName.textContent = chapters[index].name;
    chapterPosition.textContent = `${index + 1} of ${chapters.length}`;
    for (const link of links) {
      if (link.hash === `#${beats[index].id}`) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    }
  }

  const copy = phase >= returnStart && phase < chapters[0].start ? -1 : index;
  if (copy !== currentCopy) {
    currentCopy = copy;
    returnNote.hidden = copy !== -1;
    for (const [i, beat] of beats.entries()) {
      beat.toggleAttribute("data-active", i === copy);
      beat.inert = i !== copy;
    }
    if (copy !== 1) setHover(null);
  }
  if (pendingFocus === copy && Math.abs(target - displayed) < .008) {
    const title = beats[copy].querySelector("h1, h2");
    title.tabIndex = -1;
    title.focus({ preventScroll: true });
    pendingFocus = null;
  }
}

function setProjectedLabel(label, name, visible) {
  const point = visible ? world.project(name) : null;
  label.hidden = !point || Math.abs(point.x) > 1.04 || Math.abs(point.y) > 1.04;
  if (label.hidden) return;
  const halfWidth = label.offsetWidth / 2;
  const x = Math.max(halfWidth + 12, Math.min(width - halfWidth - 12, (point.x + 1) * width / 2));
  const y = Math.max(99, (1 - point.y) * height / 2);
  label.style.transform = `translate3d(${x}px, ${y}px, 0)`;
}

function paint() {
  const cycle = Math.floor(displayed);
  const phase = phaseOf(displayed);
  const time = Math.max(0, Math.min(1, (phase - exchangeStart) / (exchangeEnd - exchangeStart)));
  const exchange = time * time * (3 - 2 * time);
  const state = time === 0 ? "before" : time === 1 ? "after" : "exchanging";
  updateReview(cycle);
  updateReviewState(state);
  const currentName = time === 1 ? currentReview.incoming : currentReview.outgoing;
  if (textSlots["current-name"][0]?.textContent !== currentName) setText("current-name", currentName);
  updateChapter(phase);
  world.render({ phase, exchange, active: currentCopy === 1 ? hoveredHolding ?? selectedHolding : null, pointerX, pointerY, cycle });
  const reviewing = currentCopy === 2;
  setProjectedLabel(outgoingLabel, "outgoing", reviewing && time < .80);
  setProjectedLabel(incomingLabel, "incoming", reviewing && time > .22);
}

function advance(value, goal, amount) {
  return Math.abs(value - goal) < .000045 ? goal : value + (goal - value) * amount;
}

function tick(now) {
  frame = 0;
  if (!world || document.hidden) return;
  const seconds = lastTime ? Math.min((now - lastTime) / 1000, .04) : 1 / 60;
  const amount = 1 - Math.exp(-13 * seconds);
  lastTime = now;
  displayed = advance(displayed, target, amount);
  pointerX = advance(pointerX, targetX, amount);
  pointerY = advance(pointerY, targetY, amount);
  paint();
  if (displayed !== target || pointerX !== targetX || pointerY !== targetY) requestFrame();
  else lastTime = 0;
}

function requestFrame() {
  if (world && !frame && !document.hidden) frame = requestAnimationFrame(tick);
}

function measure() {
  width = stage.clientWidth;
  height = stage.clientHeight;
  const bounds = journey.getBoundingClientRect();
  journeyTop = bounds.top + scrollY;
  lapHeight = Math.max(1, (bounds.height - height) / 3);
  world.resize(width, height);
}

function scrollToLap(physical, behavior = "instant") {
  window.scrollTo({ top: journeyTop + physical * lapHeight, behavior });
}

function centerLap(position) {
  lapOffset = Math.floor(position);
  scrollToLap(1 + phaseOf(position));
}

function syncScroll() {
  if (!world) return;
  let physical = (scrollY - journeyTop) / lapHeight;
  // Rebase the native scroll range while keeping the signed review timeline continuous.
  const shift = physical < .10 ? 1 : physical > 2.90 ? -1 : 0;
  if (shift) {
    physical += shift;
    lapOffset -= shift;
    scrollToLap(physical);
  }
  target = physical - 1 + lapOffset;
  requestFrame();
}

function goTo(position, behavior) {
  const physical = position - lapOffset + 1;
  if (behavior === "instant" && (physical < .10 || physical > 2.90)) {
    displayed = target = position;
    centerLap(position);
    requestFrame();
    return;
  }
  if (physical < .14 || physical > 2.86) centerLap(target);
  scrollToLap(position - lapOffset + 1, behavior);
}

function chapterDestination(index, nextLap) {
  const anchor = chapters[index].anchor;
  if (nextLap) return Math.floor(target) + 1 + anchor;
  if (index === 0) return Math.round(target - anchor) + anchor;
  return Math.floor(target) + anchor;
}

function normalizedPoint(event) {
  const bounds = stage.getBoundingClientRect();
  return {
    x: ((event.clientX - bounds.left) / width) * 2 - 1,
    y: 1 - ((event.clientY - bounds.top) / height) * 2,
  };
}

function canPick(event) {
  return currentCopy === 1 && !event.target.closest("a, button, summary, [data-holding-detail]");
}

stage.addEventListener("pointermove", (event) => {
  if (!world || event.pointerType === "touch") return;
  const { x, y } = normalizedPoint(event);
  targetX = x;
  targetY = y;
  setHover(canPick(event) ? world.pick?.(x, y) ?? null : null);
  requestFrame();
}, { passive: true });

stage.addEventListener("pointerleave", () => {
  targetX = targetY = 0;
  setHover(null);
  requestFrame();
});

stage.addEventListener("click", (event) => {
  if (!world || !canPick(event)) return;
  const { x, y } = normalizedPoint(event);
  const index = world.pick?.(x, y);
  if (Number.isInteger(index)) setSelection(index);
});

for (const button of holdingButtons) {
  button.disabled = false;
  button.addEventListener("click", () => setSelection(Number(button.dataset.holdingIndex)));
}

document.addEventListener("click", (event) => {
  const anchor = event.target.closest('a[href^="#"]');
  if (!anchor || event.defaultPrevented || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
  const index = indexForHash(anchor.hash);
  if (index < 0) return;
  menu.open = false;
  if (!world) {
    suspendedPosition = undefined;
    return;
  }
  event.preventDefault();
  const nextLap = anchor.hasAttribute("data-next-lap");
  const destination = chapterDestination(index, nextLap);
  if (anchor.hash !== location.hash || nextLap) {
    history.replaceState({ ...history.state, reviewPosition: target }, "");
    history.pushState({ reviewPosition: destination }, "", anchor.hash);
  } else {
    history.replaceState({ ...history.state, reviewPosition: destination }, "");
  }
  pendingFocus = event.detail === 0 ? index : null;
  goTo(destination, "smooth");
});

window.addEventListener("scroll", syncScroll, { passive: true });
window.addEventListener("resize", () => {
  if (!world) return;
  measure();
  centerLap(target);
  requestFrame();
}, { passive: true });
window.addEventListener("popstate", (event) => {
  if (!world) {
    suspendedPosition = undefined;
    return;
  }
  const index = Math.max(0, indexForHash(location.hash));
  const destination = event.state?.reviewPosition ?? chapterDestination(index, false);
  pendingFocus = null;
  requestAnimationFrame(() => {
    if (world) goTo(destination, "instant");
  });
});
document.addEventListener("visibilitychange", () => {
  lastTime = 0;
  if (!document.hidden) requestFrame();
});

async function startWorld() {
  if (world || loading || !motion.matches) return;
  loading = true;
  try {
    const context = canvas.getContext("webgl2", { alpha: true, antialias: true, powerPreference: "high-performance" });
    if (!context) return;
    const { createReviewWorld } = await import("./world.js");
    if (!motion.matches || context.isContextLost()) return;
    world = createReviewWorld(canvas, context);
    root.classList.add("loop-active");
    history.scrollRestoration = "manual";
    measure();
    const initial = Math.max(0, indexForHash(location.hash));
    displayed = target = suspendedPosition ?? history.state?.reviewPosition ?? chapters[initial].anchor;
    suspendedPosition = undefined;
    centerLap(target);
    paint();
    requestAnimationFrame(() => requestAnimationFrame(() => {
      if (world) stage.setAttribute("data-transitions", "");
    }));
  } catch (error) {
    stopWorld();
    console.warn("Lattice is showing the still review.", error);
  } finally {
    loading = false;
  }
}

function stopWorld() {
  if (!world) return;
  suspendedPosition = displayed;
  const phase = phaseOf(displayed);
  const visibleChapter = beats[chapterAt(phase)];
  cancelAnimationFrame(frame);
  lastTime = frame = 0;
  world.dispose();
  world = undefined;
  root.classList.remove("loop-active");
  stage.removeAttribute("data-transitions");
  history.scrollRestoration = previousScrollRestoration;
  for (const beat of beats) {
    beat.inert = false;
    beat.removeAttribute("data-active");
  }
  currentChapter = -1;
  currentCopy = -2;
  pendingFocus = null;
  returnNote.hidden = outgoingLabel.hidden = incomingLabel.hidden = true;
  setHover(null);
  const staticCycle = Math.floor(displayed) + Number(phase >= chapters[0].start);
  updateReview(staticCycle);
  setText("current-name", currentReview.outgoing);
  updateReviewState("after");
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

updateReview(0);
setText("current-name", currentReview.outgoing);
updateReviewState("after");
startWorld();
