import "./inspector.css";

const names = [..."ABCDEFG"].map((letter) => `Company ${letter}`);
const weightFormat = new Intl.NumberFormat("en-IN", {
  style: "percent",
  maximumFractionDigits: 2,
});
const moveFormat = new Intl.NumberFormat("en-IN", {
  style: "percent",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
  signDisplay: "exceptZero",
});
const pointsFormat = new Intl.NumberFormat("en-IN", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
  signDisplay: "exceptZero",
});

function useMinus(value) {
  return value.replace("-", "−");
}

function points(value) {
  return `${useMinus(pointsFormat.format(value * 100))} pp`;
}

export function createInspector(root, { onPreview, onSelect, onClose }) {
  const listeners = new AbortController();
  const { signal } = listeners;
  root.hidden = true;
  root.innerHTML = `
    <section class="study-inspector" aria-label="Company contributions">
      <div class="study-inspector__head">
        <h3>Company contributions</h3>
        <div class="study-inspector__actions">
          <span class="study-inspector__mode" data-inspector-mode></span>
          <button class="study-inspector__close" type="button" aria-label="Close contribution breakdown" title="Close contribution breakdown">
            <svg aria-hidden="true" viewBox="0 0 20 20"><path d="m5 5 10 10M15 5 5 15"/></svg>
          </button>
        </div>
      </div>

      <table class="study-inspector__table">
        <colgroup><col class="study-inspector__company-col"><col class="study-inspector__weight-col"><col class="study-inspector__move-col"><col></colgroup>
        <thead><tr>
          <th scope="col">Company</th>
          <th scope="col">Weight</th>
          <th scope="col">Price move</th>
          <th scope="col">Contribution</th>
        </tr></thead>
        <tbody>${names.map((name) => `
          <tr>
            <th scope="row"><button type="button" aria-pressed="false">${name}</button></th>
            <td></td><td></td><td></td>
          </tr>`).join("")}
        </tbody>
      </table>

      <div class="study-inspector__formula" role="status" aria-live="polite" aria-atomic="true">
        <span data-inspector-company></span>
        <strong data-inspector-equation></strong>
      </div>
      <p class="study-inspector__note">pp = percentage points. Fictional example.</p>
    </section>`;

  const close = root.querySelector(".study-inspector__close");
  const mode = root.querySelector("[data-inspector-mode]");
  const company = root.querySelector("[data-inspector-company]");
  const equation = root.querySelector("[data-inspector-equation]");
  const rows = [...root.querySelectorAll("tbody tr")].map((row) => ({
    row,
    button: row.querySelector("button"),
    cells: [...row.querySelectorAll("td")],
  }));
  const previous = { open: false, weightMode: null, weights: [], move: null, selected: undefined, hovered: undefined };
  let pointerRow = null;
  let focusRow = null;
  let lastPreview = null;

  function previewRow() {
    const index = pointerRow ?? focusRow;
    if (index === lastPreview) return;
    lastPreview = index;
    onPreview(index);
  }

  for (const [index, { row, button }] of rows.entries()) {
    row.addEventListener("pointermove", (event) => {
      if (event.pointerType === "touch" || pointerRow === index) return;
      pointerRow = index;
      previewRow();
    }, { signal });
    row.addEventListener("pointerleave", () => {
      if (pointerRow !== index) return;
      pointerRow = null;
      previewRow();
    }, { signal });
    button.addEventListener("focus", () => {
      focusRow = index;
      previewRow();
    }, { signal });
    button.addEventListener("blur", () => {
      focusRow = null;
      previewRow();
    }, { signal });
    row.addEventListener("click", () => onSelect(index), { signal });
  }

  close.addEventListener("click", onClose, { signal });
  root.addEventListener("keydown", (event) => {
    if (event.key !== "Escape" || root.hidden) return;
    event.preventDefault();
    event.stopPropagation();
    onClose();
  }, { signal });

  function render({ open, weightMode, weights, move, selected = null, hovered = null }) {
    if (open !== previous.open) {
      previous.open = open;
      root.hidden = !open;
      if (!open) pointerRow = focusRow = lastPreview = null;
    }
    if (!open) return;

    const valuesChanged = move !== previous.move || weights.some((weight, index) => weight !== previous.weights[index]);
    const selectionChanged = selected !== previous.selected || hovered !== previous.hovered;
    if (weightMode !== previous.weightMode) {
      mode.textContent = weightMode === "size" ? "Size weighted" : "Equal weights";
      previous.weightMode = weightMode;
    }
    if (!valuesChanged && !selectionChanged) return;

    const activeIndex = hovered ?? selected ?? 0;
    for (const [index, { row, button, cells }] of rows.entries()) {
      const priceMove = index === 0 ? move * 0.1 : 0;
      if (valuesChanged) {
        cells[0].textContent = weightFormat.format(weights[index]);
        cells[1].textContent = useMinus(moveFormat.format(priceMove));
        cells[2].textContent = points(weights[index] * priceMove);
      }
      if (selectionChanged) {
        const pinned = index === selected;
        button.setAttribute("aria-pressed", String(pinned));
        row.toggleAttribute("data-inspector-active", index === activeIndex);
        row.toggleAttribute("data-inspector-pinned", pinned);
      }
    }

    const activeWeight = weights[activeIndex];
    const activeMove = activeIndex === 0 ? move * 0.1 : 0;
    company.textContent = `${names[activeIndex]} contribution`;
    equation.textContent = `${weightFormat.format(activeWeight)} × ${useMinus(moveFormat.format(activeMove))} = ${points(activeWeight * activeMove)}`;
    previous.move = move;
    previous.weights = [...weights];
    previous.selected = selected;
    previous.hovered = hovered;
  }

  return {
    render,
    focus() {
      close.focus({ preventScroll: true });
    },
    dispose() {
      listeners.abort();
      root.replaceChildren();
      root.hidden = true;
    },
  };
}
