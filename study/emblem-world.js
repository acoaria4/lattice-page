import * as THREE from "three";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";
import { CANDLES, RIBBONS } from "../v2/emblem-paths.js";
import { CANDLE_COLORS, RIBBON_COLORS } from "../v2/emblem-colors.js";

const { clamp, lerp, smoothstep } = THREE.MathUtils;
const SCALE = 10.6;
const ELEVATION = .44;
const COMPANY = 5;
const SIDES = [
  [-.78, .5], [.78, .5], [1, .29], [1, -.29],
  [.78, -.5], [-.78, -.5], [-1, -.29], [-1, .29],
];

function makeMaterial() {
  return new THREE.ShaderMaterial({
    uniforms: { opacity: { value: 1 }, emphasis: { value: 0 } },
    side: THREE.DoubleSide,
    vertexColors: true,
    transparent: true,
    forceSinglePass: true,
    toneMapped: false,
    vertexShader: `
      varying vec3 pigment;
      varying vec3 surface;
      varying vec3 viewer;
      void main() {
        vec4 point = modelViewMatrix * vec4(position, 1.);
        pigment = color;
        surface = normalMatrix * normal;
        viewer = -point.xyz;
        gl_Position = projectionMatrix * point;
      }
    `,
    fragmentShader: `
      uniform float opacity;
      uniform float emphasis;
      varying vec3 pigment;
      varying vec3 surface;
      varying vec3 viewer;
      void main() {
        vec3 n = normalize(surface) * (gl_FrontFacing ? 1. : -1.);
        vec3 v = normalize(viewer);
        vec3 l = normalize(vec3(-.52, .64, .74));
        float face = max(0., dot(n, v));
        float rim = pow(1. - face, 2.);
        float gloss = pow(max(0., dot(n, normalize(v + l))), 34.);
        float light = .54 + face * .34 + max(0., dot(n, l)) * .15 + rim * .20;
        vec3 finish = pigment * (light + emphasis) + vec3(.049) * (gloss + rim * .19);
        gl_FragColor = vec4(finish, opacity);
        #include <colorspace_fragment>
      }
    `,
  });
}

function ribbonColors(index, count) {
  const stops = RIBBON_COLORS[index].map(([u, hex]) => [u, new THREE.Color(hex)]);
  const colors = new Float32Array(count * SIDES.length * 3);
  const pigment = new THREE.Color();
  let end = 1;
  for (let i = 0; i < count; i++) {
    const t = i / (count - 1);
    while (t > stops[end][0]) end++;
    const [u0, from] = stops[end - 1];
    const [u1, to] = stops[end];
    pigment.copy(from).lerp(to, (t - u0) / (u1 - u0));
    for (let side = 0; side < SIDES.length; side++) {
      const shade = side < 2 ? 1 : .8;
      colors.set([pigment.r * shade, pigment.g * shade, pigment.b * shade], (i * SIDES.length + side) * 3);
    }
  }
  return colors;
}

function createRibbon(path, index, material) {
  const spline = new THREE.CatmullRomCurve3(path.map(({ x, y, width }) =>
    new THREE.Vector3(x * SCALE, y * SCALE + ELEVATION, width * SCALE)));
  const rest = spline.getPoints(96);
  const centers = rest.map(() => new THREE.Vector3());
  const positions = new Float32Array(rest.length * SIDES.length * 3);
  const geometry = new THREE.BufferGeometry();
  const triangles = [];
  for (let i = 0; i < rest.length - 1; i++) {
    for (let side = 0; side < SIDES.length; side++) {
      const a = i * SIDES.length + side;
      const b = i * SIDES.length + (side + 1) % SIDES.length;
      triangles.push(a, a + SIDES.length, b + SIDES.length, a, b + SIDES.length, b);
    }
  }
  geometry.setIndex(triangles);
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3).setUsage(THREE.DynamicDrawUsage));
  geometry.setAttribute("color", new THREE.BufferAttribute(ribbonColors(index, rest.length), 3));
  const mesh = new THREE.Mesh(geometry, material);
  mesh.frustumCulled = false;

  const axis = new THREE.Vector3();
  const across = new THREE.Vector3();
  const depth = new THREE.Vector3();
  const front = new THREE.Vector3();
  let lastFlex = -1;

  function render(flex) {
    if (flex === lastFlex) return;
    lastFlex = flex;
    const spread = index - 2.5;
    for (const [i, sample] of rest.entries()) {
      const u = i / (rest.length - 1);
      const arc = Math.sin(Math.PI * u);
      const travel = flex * arc;
      centers[i].set(
        sample.x + travel * spread * .20,
        sample.y + travel * Math.sin(6 * u - .4) * spread * .34,
        spread * -.049 + travel * (Math.cos(u * 5.8 - .7) * 1.35 + spread * .23),
      );
    }
    for (const [i, center] of centers.entries()) {
      const u = i / (centers.length - 1);
      const arc = Math.sin(Math.PI * u);
      front.set(0, Math.sin(u * 6 - .6) * flex * .64, 1);
      axis.copy(centers[Math.min(i + 1, centers.length - 1)]).sub(centers[Math.max(i - 1, 0)]).normalize();
      across.crossVectors(front, axis).normalize();
      depth.crossVectors(axis, across).normalize();
      const width = rest[i].z * (.54 + .72 * flex * arc);
      const thickness = (.045 + .071 * arc) * (1 + flex * .52);
      for (const [j, [side, face]] of SIDES.entries()) {
        const k = (i * SIDES.length + j) * 3;
        const w = side * width;
        const d = face * thickness;
        positions[k] = center.x + across.x * w + depth.x * d;
        positions[k + 1] = center.y + across.y * w + depth.y * d;
        positions[k + 2] = center.z + across.z * w + depth.z * d;
      }
    }
    geometry.attributes.position.needsUpdate = true;
    geometry.computeVertexNormals();
  }

  render(0);
  return { mesh, centers, render };
}

function makeCandleBox(width, height, depth, corner, pigments, material) {
  const geometry = new RoundedBoxGeometry(width, height, depth, 3, corner);
  const { position } = geometry.attributes;
  const colors = new Float32Array(position.count * 3);
  const [bottom, top] = pigments.map((hex) => new THREE.Color(hex));
  const color = new THREE.Color();
  for (let i = 0; i < position.count; i++) {
    color.copy(bottom).lerp(top, clamp(.5 + position.getY(i) / height, 0, 1)).toArray(colors, i * 3);
  }
  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
  return new THREE.Mesh(geometry, material);
}

function createCandle(entry, index) {
  const group = new THREE.Group();
  const material = makeMaterial();
  const wickLength = (entry.stemTop - entry.stemBottom) * SCALE;
  const pigments = CANDLE_COLORS[index];
  const wick = makeCandleBox(entry.stemWidth * SCALE, wickLength, .065, .011, pigments, material);
  const body = makeCandleBox(entry.width * SCALE, entry.height * SCALE, .195, .026, pigments, material);
  const wickBottom = (entry.stemBottom - entry.y) * SCALE;
  const baseY = entry.y * SCALE + ELEVATION;
  group.position.set(entry.x * SCALE, baseY, .14 + index * .024);
  wick.position.set(0, wickBottom + wickLength / 2, -.028);
  group.add(wick, body);
  return { group, material, baseY, wickBottom };
}

function createSignal(ribbon, candle) {
  const group = new THREE.Group();
  const count = 65;
  const positions = new Float32Array(count * 6);
  const uv = new Float32Array(count * 4);
  const triangles = [];
  const points = Array.from({ length: count }, () => new THREE.Vector3());
  for (let i = 0; i < count; i++) {
    const u = i / (count - 1);
    uv.set([u, 0, u, 1], i * 4);
    const a = i * 2;
    if (i < count - 1) triangles.push(a, a + 2, a + 1, a + 1, a + 2, a + 3);
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setIndex(triangles);
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3).setUsage(THREE.DynamicDrawUsage));
  geometry.setAttribute("uv", new THREE.BufferAttribute(uv, 2));
  const material = new THREE.ShaderMaterial({
    uniforms: { head: { value: 0 }, strength: { value: 0 } },
    side: THREE.DoubleSide,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    vertexShader: `
      varying vec2 coord;
      void main() {
        coord = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);
      }
    `,
    fragmentShader: `
      uniform float head;
      uniform float strength;
      varying vec2 coord;
      void main() {
        float trail = head - coord.x;
        float fade = smoothstep(-.03, .014, trail) * (1. - smoothstep(.19, .72, trail));
        float core = pow(1. - abs(coord.y * 2. - 1.), 2.3);
        gl_FragColor = vec4(vec3(.23, .95, .87), strength * core * fade);
        #include <colorspace_fragment>
      }
    `,
  });
  const trail = new THREE.Mesh(geometry, material);
  trail.frustumCulled = false;
  trail.renderOrder = 6;
  const glowMaterial = new THREE.ShaderMaterial({
    uniforms: { strength: { value: 0 } },
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    vertexShader: `
      varying vec2 coord;
      void main() {
        coord = uv;
        vec4 center = modelViewMatrix * vec4(0., 0., 0., 1.);
        center.xy += position.xy;
        gl_Position = projectionMatrix * center;
      }
    `,
    fragmentShader: `
      uniform float strength;
      varying vec2 coord;
      void main() {
        float distance = length(coord - .5) * 2.;
        float halo = exp(-4.5 * distance) * (1. - smoothstep(.63, 1., distance));
        float center = 1. - smoothstep(.021, .115, distance);
        gl_FragColor = vec4(mix(vec3(.03, .63, .77), vec3(.72, 1., .92), center),
          strength * (halo * .6 + center * .74));
        #include <colorspace_fragment>
      }
    `,
  });
  const spark = new THREE.Mesh(new THREE.PlaneGeometry(.67, .67), glowMaterial);
  spark.frustumCulled = false;
  spark.renderOrder = 7;
  group.add(trail, spark);

  const start = new THREE.Vector3();
  const bend = new THREE.Vector3();
  const direction = new THREE.Vector3();
  const first = ribbon.centers.findIndex((point) => point.x > candle.group.position.x);
  const last = Math.floor((ribbon.centers.length - first) * .69) + first;

  function render(progress, move, opacity) {
    const strength = smoothstep(progress, .24, .35) * Math.min(1, Math.abs(move)) * opacity;
    group.visible = strength > .001;
    start.copy(candle.group.position);
    start.y += candle.wickBottom + .03;
    start.z += .10;
    if (!group.visible) {
      spark.position.copy(start);
      return;
    }

    const head = lerp(.025, 1, smoothstep(progress, .26, .94));
    material.uniforms.head.value = head;
    material.uniforms.strength.value = strength;
    glowMaterial.uniforms.strength.value = strength;
    const join = ribbon.centers[first];
    bend.set(start.x - .20, lerp(start.y, join.y, .73), lerp(start.z, join.z, .34) + .09);

    for (let i = 0; i < count; i++) {
      const u = i / (count - 1);
      const point = points[i];
      if (u < .32) {
        const t = u / .32;
        point.copy(start).multiplyScalar((1 - t) ** 2)
          .addScaledVector(bend, 2 * (1 - t) * t)
          .addScaledVector(join, t * t);
        point.z += t * .17;
      } else {
        const index = lerp(first, last, (u - .32) / .68);
        point.copy(ribbon.centers[Math.floor(index)])
          .lerp(ribbon.centers[Math.ceil(index)], index % 1);
        point.z += .17;
      }
    }
    for (let i = 0; i < count; i++) {
      const point = points[i];
      direction.copy(points[Math.min(i + 1, count - 1)]).sub(points[Math.max(i - 1, 0)]).normalize();
      const w = .045;
      positions.set([
        point.x - direction.y * w, point.y + direction.x * w, point.z,
        point.x + direction.y * w, point.y - direction.x * w, point.z,
      ], i * 6);
    }
    geometry.attributes.position.needsUpdate = true;
    const index = head * (count - 1);
    spark.position.copy(points[Math.floor(index)]).lerp(points[Math.ceil(index)], index % 1);
  }

  group.visible = false;
  return { group, render, spark };
}

export function createEmblem() {
  const group = new THREE.Group();
  group.name = "Lattice emblem";
  const ribbonMaterial = makeMaterial();
  const ribbons = RIBBONS.map((path, index) => createRibbon(path, index, ribbonMaterial));
  const candles = CANDLES.map(createCandle);
  const company = candles[COMPANY];
  const signal = createSignal(ribbons[0], company);
  group.add(...ribbons.map(({ mesh }) => mesh), ...candles.map((candle) => candle.group), signal.group);

  function render({ progress, move = 0, opacity = 1 }) {
    const flex = smoothstep(progress, .53, 1);
    const detail = smoothstep(progress, .14, .35);
    const motion = clamp(move, -1, 1);
    const alpha = clamp(opacity, 0, 1);
    group.visible = alpha > .001;
    ribbonMaterial.uniforms.opacity.value = alpha;
    ribbonMaterial.depthWrite = alpha > .98;
    ribbons.forEach((ribbon) => ribbon.render(flex));
    candles.forEach(({ group, baseY, material }, index) => {
      const selected = index === COMPANY;
      group.position.y = baseY + (selected ? motion * detail * .72 : 0);
      material.uniforms.opacity.value = (selected ? 1 : 1 - detail * .46) * alpha;
      material.uniforms.emphasis.value = selected ? detail * .22 : 0;
      material.depthWrite = alpha > .98;
    });
    signal.render(progress, motion, alpha);
  }

  function getCompanyPoint(target = new THREE.Vector3()) {
    return company.group.getWorldPosition(target);
  }

  function getTracePoint(target = new THREE.Vector3()) {
    return signal.spark.getWorldPosition(target);
  }

  function dispose() {
    const resources = new Set();
    group.traverse((object) => {
      if (!object.isMesh) return;
      resources.add(object.geometry).add(object.material);
    });
    resources.forEach((resource) => resource.dispose());
  }

  return { group, render, getCompanyPoint, getTracePoint, dispose };
}
