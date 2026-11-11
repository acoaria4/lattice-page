const GRID_STEP = 1.08;
const GRID_RADIUS = 3;
const LIME_TILES = new Set(['-3:0', '-2:2', '-1:-2', '1:-3', '1:2', '2:-1', '3:1']);

const tileColors = [
  { top: ['#375e4e', '#163427'], x: ['#173d30', '#0b1e16'], y: ['#295342', '#11291d'], edge: '118, 192, 153' },
  { top: ['#537f62', '#254b35'], x: ['#25503c', '#0f281c'], y: ['#38644a', '#183b26'], edge: '151, 219, 159' },
  { top: ['#295145', '#122c22'], x: ['#133528', '#091a13'], y: ['#224638', '#0e241a'], edge: '102, 176, 147' },
];

const limeColors = {
  top: ['#edffac', '#98cf34'],
  x: ['#89ba2f', '#3b641c'],
  y: ['#c1ed55', '#61861f'],
  edge: '223, 255, 133',
};

const heroColors = {
  top: ['#365a3a', '#111f17'],
  x: ['#243a2a', '#101810'],
  y: ['#587646', '#253b22'],
  edge: '210, 255, 108',
};

function smoothstep(start, end, value) {
  const t = Math.min(1, Math.max(0, (value - start) / (end - start)));
  return t * t * (3 - 2 * t);
}

function mix(from, to, weight) {
  return from + (to - from) * weight;
}

const tiles = [];
for (let x = -GRID_RADIUS; x <= GRID_RADIUS; x += 1) {
  for (let y = -GRID_RADIUS; y <= GRID_RADIUS; y += 1) {
    const seed = ((x * 23 + y * 17 + 163) % 11) / 10;
    const distance = Math.hypot(x, y);
    tiles.push({
      x,
      y,
      distance,
      seed,
      lime: LIME_TILES.has(`${x}:${y}`),
      center: distance === 0,
      height: .16 + seed * .46 + (1 - distance / 5) * .13,
    });
  }
}

function outline(ctx, points, close = true) {
  ctx.beginPath();
  ctx.moveTo(points[0].x, points[0].y);
  for (let i = 1; i < points.length; i += 1) {
    ctx.lineTo(points[i].x, points[i].y);
  }
  if (close) ctx.closePath();
}

function drawAtmosphere(ctx, width, height, x, y, scale, progress) {
  const radius = Math.max(scale * 5.6, height * .38);
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(1, .66 + progress * .15);
  const glow = ctx.createRadialGradient(0, 0, 0, 0, 0, radius);
  glow.addColorStop(0, `rgba(81, 155, 102, ${mix(.17, .22, progress)})`);
  glow.addColorStop(.44, 'rgba(43, 100, 71, .12)');
  glow.addColorStop(1, 'rgba(16, 32, 25, 0)');
  ctx.fillStyle = glow;
  ctx.fillRect(-width, -height * 1.6, width * 2, height * 3.2);
  ctx.restore();
}

function drawFloor(ctx, project, progress) {
  const extent = 5.94;
  for (let index = -5; index < 6; index += 1) {
    const offset = (index + .5) * GRID_STEP;
    const alpha = mix(.18, .31, progress) * (1 - Math.abs(offset) / 9);
    const lines = [
      [project(offset, -extent, -.04), project(offset, extent, -.04)],
      [project(-extent, offset, -.04), project(extent, offset, -.04)],
    ];

    ctx.lineWidth = .65;
    for (const [from, to] of lines) {
      const line = ctx.createLinearGradient(from.x, from.y, to.x, to.y);
      line.addColorStop(0, 'rgba(115, 191, 145, 0)');
      line.addColorStop(.49, `rgba(115, 191, 145, ${alpha})`);
      line.addColorStop(1, 'rgba(115, 191, 145, 0)');
      ctx.strokeStyle = line;
      outline(ctx, [from, to], false);
      ctx.stroke();
    }
  }

  const frame = GRID_STEP * 3.5;
  const corners = [[-frame, -frame], [frame, -frame], [frame, frame], [-frame, frame]];
  ctx.strokeStyle = `rgba(179, 225, 137, ${mix(.13, .38, progress)})`;
  ctx.lineWidth = 1;
  for (const [x, y] of corners) {
    outline(ctx, [
      project(x * .91, y, -.025),
      project(x, y, -.025),
      project(x, y * .91, -.025),
    ], false);
    ctx.stroke();
  }
}

function drawPlinth(ctx, project, hero, scatter) {
  if (scatter >= .99) return;

  const center = project(0, 0, 0);
  const top = project(0, 0, hero.bottom);
  const opacity = 1 - scatter;
  const guide = ctx.createLinearGradient(center.x, center.y, top.x, top.y);
  guide.addColorStop(0, 'rgba(170, 237, 124, 0)');
  guide.addColorStop(1, `rgba(192, 255, 126, ${opacity * .42})`);
  ctx.strokeStyle = guide;
  ctx.setLineDash([2, 5]);
  outline(ctx, [center, top], false);
  ctx.stroke();
  ctx.setLineDash([]);

  for (const extent of [.6, 1.23]) {
    const corners = [[-extent, -extent], [extent, -extent], [extent, extent], [-extent, extent]];
    outline(ctx, corners.map(([x, y]) => project(x, y, 0)));
    ctx.strokeStyle = `rgba(155, 224, 121, ${opacity * (.39 - extent * .16)})`;
    ctx.stroke();
  }
}

function drawFace(ctx, { points, colors, edge, alpha, side }) {
  const light = points.reduce((min, point) => point.y < min.y ? point : min);
  const shade = points.reduce((max, point) => point.y > max.y ? point : max);
  const gradient = ctx.createLinearGradient(light.x, light.y, shade.x, shade.y);
  gradient.addColorStop(0, colors[0]);
  gradient.addColorStop(1, colors[1]);

  ctx.globalAlpha = alpha;
  outline(ctx, points);
  ctx.fillStyle = gradient;
  ctx.fill();
  ctx.strokeStyle = `rgba(${edge}, ${side === 'top' ? .58 : .27})`;
  ctx.lineWidth = .8;
  ctx.stroke();
}

function drawCircuit(ctx, project, block, intensity) {
  if (intensity <= .01) return;

  const { x, y, size, bottom, height } = block;
  const z = bottom + height + .001;
  const corner = (u, v) => project(x + size * u, y + size * v, z);
  const ring = extent => [
    corner(-extent, -extent), corner(extent, -extent),
    corner(extent, extent), corner(-extent, extent),
  ];

  ctx.globalAlpha = intensity;
  ctx.strokeStyle = 'rgba(211, 255, 118, .7)';
  ctx.lineWidth = 1;
  outline(ctx, ring(.383));
  ctx.stroke();

  outline(ctx, ring(.135));
  ctx.fillStyle = 'rgba(207, 255, 105, .72)';
  ctx.shadowColor = '#a3f348';
  ctx.shadowBlur = 16;
  ctx.fill();
  ctx.shadowBlur = 0;

  ctx.strokeStyle = 'rgba(228, 255, 169, .41)';
  ctx.lineWidth = .75;
  for (const offset of [-.07, 0, .07]) {
    outline(ctx, [corner(offset, -.15), corner(offset, -.32)], false);
    ctx.stroke();
    outline(ctx, [corner(.15, offset), corner(.32, offset)], false);
    ctx.stroke();
  }
}

function makeFaces(block, project) {
  const { x, y, size, bottom, height, color, opacity } = block;
  const half = size / 2;
  const left = x - half;
  const right = x + half;
  const near = y + half;
  const far = y - half;
  const z = bottom + height;
  const a = project(left, far, z);
  const b = project(right, far, z);
  const c = project(right, near, z);
  const d = project(left, near, z);
  const bBase = project(right, far, bottom);
  const cBase = project(right, near, bottom);
  const dBase = project(left, near, bottom);

  return [
    ['x', [b, c, cBase, bBase]],
    ['y', [c, d, dBase, cBase]],
    ['top', [a, b, c, d]],
  ].map(([side, points]) => ({
    side,
    points,
    block,
    colors: color[side],
    edge: color.edge,
    alpha: opacity,
    depth: points.reduce((sum, point) => sum + point.depth, 0) / points.length,
  }));
}

export function createIndexScene(canvas) {
  let ctx;
  try {
    ctx = canvas?.getContext('2d', { alpha: true });
  } catch {
    return { render() {} };
  }
  if (!ctx) return { render() {} };

  function render(progress, pointerX = 0, pointerY = 0) {
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    if (!width || !height) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 1.8);
    const pixelWidth = Math.round(width * dpr);
    const pixelHeight = Math.round(height * dpr);
    if (canvas.width !== pixelWidth || canvas.height !== pixelHeight) {
      canvas.width = pixelWidth;
      canvas.height = pixelHeight;
    }
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, width, height);
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';

    const scatter = smoothstep(.04, .98, progress);
    const zoom = mix(1.39, 1, smoothstep(.01, .85, progress));
    const scale = Math.min(width / 11.45, height / mix(7.1, 8.75, scatter)) * zoom;
    const centerX = width * .5 + pointerX * Math.min(12, width * .025);
    const centerY = height * mix(.57, .445, scatter) + pointerY * Math.min(8, height * .02);
    const yaw = mix(.69, .86, scatter) - pointerX * .065;
    const pitch = mix(.63, .66, scatter) + pointerY * .045;
    const sinYaw = Math.sin(yaw);
    const cosYaw = Math.cos(yaw);
    const sinPitch = Math.sin(pitch);
    const cosPitch = Math.cos(pitch);

    function project(x, y, z) {
      const towardCamera = x * cosYaw + y * sinYaw;
      const depth = towardCamera * cosPitch + z * sinPitch;
      const projectionScale = scale * 18 / (18 - depth);
      return {
        x: centerX + (y * cosYaw - x * sinYaw) * projectionScale,
        y: centerY + (towardCamera * sinPitch - z * cosPitch) * projectionScale,
        depth,
      };
    }

    drawAtmosphere(ctx, width, height, centerX, centerY, scale, scatter);
    drawFloor(ctx, project, scatter);

    const hero = {
      x: 0,
      y: 0,
      size: mix(2.36, .91, scatter),
      bottom: mix(.82, 0, scatter),
      height: mix(.49, .67, scatter),
      color: heroColors,
      opacity: 1,
      circuit: mix(1, .5, scatter),
    };
    drawPlinth(ctx, project, hero, scatter);

    const faces = makeFaces(hero, project);
    for (const tile of tiles) {
      if (tile.center) continue;
      const delay = .07 + tile.distance * .085 + tile.seed * .08;
      const rise = smoothstep(delay, delay + .47, progress);
      if (rise <= .002) continue;

      const reach = mix(.65, 1, rise) * GRID_STEP;
      const tileHeight = tile.height * (tile.lime ? 1.31 : 1);
      const block = {
        x: tile.x * reach,
        y: tile.y * reach,
        size: mix(.34, .91, rise),
        bottom: mix(-.08, 0, rise),
        height: mix(.07, tileHeight, rise),
        color: tile.lime ? limeColors : tileColors[Math.round(tile.seed * 2)],
        opacity: rise,
        circuit: tile.lime ? rise * .22 : 0,
      };
      faces.push(...makeFaces(block, project));
    }

    faces.sort((a, b) => a.depth - b.depth);
    for (const face of faces) {
      drawFace(ctx, face);
      if (face.side === 'top') drawCircuit(ctx, project, face.block, face.block.circuit);
    }
    ctx.globalAlpha = 1;
  }

  return { render };
}
