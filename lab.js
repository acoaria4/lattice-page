const WEIGHTS = {
  equal: [25, 25, 25, 25],
  size: [40, 30, 20, 10],
};

const SCENARIOS = {
  down: { move: -1, detail: "Company A fell 10%. The other three held steady." },
  flat: { move: 0, detail: "All four companies held steady." },
  up: { move: 1, detail: "Company A rose 10%. The other three held steady." },
};

const formatChange = new Intl.NumberFormat("en-IN", {
  style: "percent",
  signDisplay: "exceptZero",
  minimumFractionDigits: 1,
  maximumFractionDigits: 1,
});

export function initIndexLab(root) {
  if (!root) return;

  const visual = root.querySelector("[data-lab-visual]");
  const result = root.querySelector("[data-result]");
  const detail = root.querySelector("[data-result-detail]");
  const companies = Array.from(root.querySelectorAll("[data-company]"));
  const weightLabels = companies.map((company) => company.querySelector("[data-weight]"));

  if (!result.closest('[role="status"], [aria-live="polite"], [aria-live="assertive"]')) {
    result.setAttribute("role", "status");
    result.setAttribute("aria-label", "Illustrative index change");
  }

  function update() {
    const rule = root.querySelector('input[name="weight"]:checked')?.value ?? "equal";
    const direction = root.querySelector('input[name="move"]:checked')?.value ?? "up";
    const weights = WEIGHTS[rule];
    const { move, detail: scenarioDetail } = SCENARIOS[direction];

    root.dataset.rule = rule;
    root.dataset.direction = direction;
    visual.style.setProperty("--move", move);

    companies.forEach((company, index) => {
      company.style.setProperty("--share", weights[index] / 100);
      company.style.setProperty("--move", index === 0 ? move : 0);
      weightLabels[index].textContent = `${weights[index]}%`;
    });

    // Company A moves 10% in either direction while companies B, C, and D stay flat.
    result.textContent = formatChange.format((weights[0] / 100) * move * 0.1);
    detail.textContent = scenarioDetail;
  }

  root.addEventListener("change", (event) => {
    if (event.target.matches('input[name="weight"], input[name="move"]')) update();
  });

  update();
}
