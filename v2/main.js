import "@fontsource-variable/manrope/wght.css";
import "@fontsource/ibm-plex-mono/latin-400.css";

const root = document.documentElement;
const track = document.querySelector("[data-track]");
const stage = document.querySelector("[data-stage]");
const canvas = document.querySelector("[data-canvas]");
const chapters = [...document.querySelectorAll("[data-chapter]")];
const links = [...document.querySelectorAll(".chapters a")];
const progressLine = document.querySelector("[data-progress]");
const companyLabel = document.querySelector("[data-company-label]");
const lab = document.querySelector("[data-lab]");
const result = lab.querySelector("[data-result]");
const share = lab.querySelector("[data-share]");
const bars = [...lab.querySelectorAll("[data-bars] i")];
const controls = [...lab.querySelectorAll("fieldset")];

const positions = [0, .365, .925];
const equalWeights = Array(7).fill(1 / 7);
const sizeWeights = [.25, .20, .16, .13, .11, .09, .06];
const displayWeights = [...equalWeights];
const percentage = new Intl.NumberFormat("en-IN", {
  style: "percent", signDisplay: "exceptZero", minimumFractionDigits: 2, maximumFractionDigits: 2,
});
const oneDecimal = new Intl.NumberFormat("en-IN", { style: "percent", maximumFractionDigits: 1 });
const worldMotion = matchMedia("(prefers-reduced-motion: no-preference) and (min-height: 665px)");
const finePointer = matchMedia("(pointer: fine)");

let world;
let selectedWeights = equalWeights;
let selectedMove = 0;
let displayMove = 0;
let pointerX = 0;
let pointerY = 0;
let hoverX = 0;
let hoverY = 0;
let currentProgress = 0;
let targetProgress = 0;
let trackStart = 0;
let travel = 1;
let stageWidth = 0;
let stageHeight = 0;
let active = -1;
let currentLink = -1;
let frame = 0;
let previousTime = 0;
let visible = true;
let pendingFocus = -1;

function updateLab() {
  selectedWeights = lab.querySelector('input[name="weight"]:checked').value === "size" ? sizeWeights : equalWeights;
  selectedMove = Number(lab.querySelector('input[name="move"]:checked').value);
  lab.querySelector(".lab").dataset.direction = selectedMove < 0 ? "down" : selectedMove > 0 ? "up" : "flat";
  result.textContent = percentage.format(selectedWeights[0] * selectedMove * .10);
  share.textContent = `Company A weight ${oneDecimal.format(selectedWeights[0])}`;
  for (const [index, bar] of bars.entries()) {
    bar.style.setProperty("--weight", selectedWeights[index]);
    bar.style.setProperty("--move", index === 0 ? selectedMove : 0);
  }
  requestFrame();
}

function chapterAt(progress) {
  if (progress < .23) return 0;
  if (progress < .64) return 1;
  return 2;
}

function paint() {
  world.render(currentProgress, displayWeights, displayMove, pointerX, pointerY);
  const index = chapterAt(currentProgress);
  if (index !== active) {
    active = index;
    stage.dataset.view = chapters[index].id;
    for (const [i, chapter] of chapters.entries()) {
      chapter.toggleAttribute("data-active", i === index);
      chapter.inert = i !== index;
    }
  }
  if (pendingFocus === index && Math.abs(targetProgress - currentProgress) < .02) {
    const heading = chapters[index].querySelector("h1, h2");
    heading.tabIndex = -1;
    heading.focus({ preventScroll: true });
    pendingFocus = -1;
  }
  const showCompany = currentProgress >= .855;
  companyLabel.toggleAttribute("data-show", showCompany);
  if (showCompany) {
    const point = world.projectCompany();
    companyLabel.style.transform = `translate3d(${(point.x + 1) * stageWidth / 2}px, ${(1 - point.y) * stageHeight / 2}px, 0) translate(-50%, -100%)`;
  }
  progressLine.style.transform = `scaleX(${currentProgress})`;
}

function advance(current, next, blend) {
  return Math.abs(next - current) < .00045 ? next : current + (next - current) * blend;
}

function tick(now) {
  frame = 0;
  if (!world || !visible || document.hidden) return;
  const dt = previousTime ? Math.min((now - previousTime) / 1000, 1 / 30) : 1 / 60;
  const blend = 1 - Math.exp(-10.6 * dt);
  previousTime = now;
  currentProgress = advance(currentProgress, targetProgress, blend);
  pointerX = advance(pointerX, hoverX, blend);
  pointerY = advance(pointerY, hoverY, blend);
  displayMove = advance(displayMove, selectedMove, blend);
  let shifting = false;
  for (let index = 0; index < displayWeights.length; index++) {
    displayWeights[index] = advance(displayWeights[index], selectedWeights[index], blend);
    shifting ||= displayWeights[index] !== selectedWeights[index];
  }
  paint();
  if (shifting || currentProgress !== targetProgress || displayMove !== selectedMove || pointerX !== hoverX || pointerY !== hoverY) {
    requestFrame();
  } else {
    previousTime = 0;
  }
}

function requestFrame() {
  if (world && visible && !document.hidden && !frame) frame = requestAnimationFrame(tick);
}

function measure() {
  const rect = track.getBoundingClientRect();
  stageWidth = stage.clientWidth;
  stageHeight = stage.clientHeight;
  trackStart = rect.top + window.scrollY;
  travel = Math.max(1, rect.height - stageHeight);
  world.resize(stageWidth, stageHeight);
}

function syncScroll() {
  if (!world) return;
  root.toggleAttribute("data-past-world", window.scrollY > trackStart + travel + 24);
  targetProgress = Math.min(1, Math.max(0, (window.scrollY - trackStart) / travel));
  const index = chapterAt(targetProgress);
  if (index !== currentLink) {
    currentLink = index;
    for (const [i, link] of links.entries()) {
      if (i === index) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    }
  }
  requestFrame();
}

function anchorIndex(hash) {
  return chapters.findIndex((chapter) => "#" + chapter.id === hash);
}

function jumpTo(index, behavior) {
  window.scrollTo({ top: trackStart + positions[index] * travel, behavior });
}

async function startWorld() {
  if (world || !worldMotion.matches) return;
  const context = canvas.getContext("webgl2", { alpha: true, antialias: true, powerPreference: "high-performance" });
  if (!context) return;

  try {
    const { createWorld } = await import("./world.js");
    if (world || !worldMotion.matches || context.isContextLost()) return;
    world = createWorld(canvas, context);
    root.classList.add("world-ready");
    measure();
    const index = anchorIndex(location.hash);
    if (index !== -1) jumpTo(index, "instant");
    syncScroll();
    currentProgress = targetProgress;
    paint();
    const mounted = world;
    requestAnimationFrame(() => requestAnimationFrame(() => {
      if (world === mounted) stage.setAttribute("data-transitions", "");
    }));
  } catch (error) {
    stopWorld();
    console.warn("Lattice is showing the still compositions.", error);
  }
}

function stopWorld() {
  if (!world) return;
  const wasInStory = track.getBoundingClientRect().bottom > 0;
  const section = chapters[chapterAt(targetProgress)];
  cancelAnimationFrame(frame);
  frame = previousTime = 0;
  world.dispose();
  world = undefined;
  root.classList.remove("world-ready");
  root.removeAttribute("data-past-world");
  stage.removeAttribute("data-transitions");
  for (const chapter of chapters) {
    chapter.removeAttribute("data-active");
    chapter.inert = false;
  }
  active = currentLink = pendingFocus = -1;
  if (wasInStory) section.scrollIntoView({ behavior: "instant" });
}

window.addEventListener("scroll", syncScroll, { passive: true });
window.addEventListener("resize", () => {
  if (!world) return;
  measure();
  syncScroll();
}, { passive: true });

const observer = new IntersectionObserver(([entry]) => {
  visible = entry.isIntersecting;
  if (visible) requestFrame();
});
observer.observe(track);

document.addEventListener("visibilitychange", () => {
  if (!document.hidden) requestFrame();
});
document.addEventListener("click", (event) => {
  const anchor = event.target.closest('a[href^="#"]');
  if (!world || !anchor || event.defaultPrevented || event.button || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
  const index = anchorIndex(anchor.hash);
  if (index < 0) return;
  event.preventDefault();
  if (anchor.hash !== location.hash) history.pushState(null, "", anchor.hash);
  if (event.detail === 0) pendingFocus = index;
  jumpTo(index, "smooth");
});

window.addEventListener("popstate", () => {
  if (!world) return;
  const index = location.hash ? anchorIndex(location.hash) : 0;
  if (index !== -1) requestAnimationFrame(() => {
    if (world) jumpTo(index, "instant");
  });
});

function resetPointer() {
  hoverX = hoverY = 0;
  requestFrame();
}

stage.addEventListener("pointermove", (event) => {
  if (!finePointer.matches || event.pointerType === "touch" || targetProgress > .36) return;
  if (!world) return;
  hoverX = (event.clientX / stageWidth) * 2 - 1;
  hoverY = 1 - (event.clientY / stageHeight) * 2;
  requestFrame();
}, { passive: true });
stage.addEventListener("pointerleave", resetPointer);
window.addEventListener("blur", resetPointer);
lab.addEventListener("change", updateLab);
for (const fieldset of controls) fieldset.disabled = false;
updateLab();

canvas.addEventListener("webglcontextlost", (event) => {
  event.preventDefault();
  stopWorld();
});
canvas.addEventListener("webglcontextrestored", startWorld);
worldMotion.addEventListener("change", () => {
  if (worldMotion.matches) startWorld();
  else stopWorld();
});
startWorld();
