import * as THREE from "three";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";
import { CANDLES, EMBLEM, RIBBONS } from "./emblem-paths.js";
import { CANDLE_COLORS, RIBBON_COLORS } from "./emblem-colors.js";
import { createBenchmark } from "./benchmark.js";

const { lerp, smoothstep, degToRad } = THREE.MathUtils;
const SCALE = 10.6;
const ELEVATION = .44;
const CUT = [
  [-.78, .5], [.78, .5], [1, .28], [1, -.28],
  [.78, -.5], [-.78, -.5], [-1, -.28], [-1, .28],
];
const CAMERA = [
  { at: 0, position: [0.18, .36, 13.2], target: [0, -.94, 0], fov: 36, fit: 10.9, mobileLift: .040 },
  { at: .15, position: [0.36, .42, 12.3], target: [.06, -.77, 0], fov: 36, fit: 10.5, mobileLift: .046 },
  { at: .36, position: [2.12, .86, 5.66], target: [.22, -.16, -.12], fov: 41, fit: 4.4, mobileLift: .12 },
  { at: .49, position: [.33, -.29, 2.52], target: [.06, -.76, -.28], fov: 49, fit: 2.55, mobileLift: .03 },
  { at: .65, position: [1.62, 1.76, 7.72], target: [-.18, -.63, -.28], fov: 45, fit: 8.5, mobileLift: .10, mobileRaise: .13 },
  { at: .88, position: [1.35, 5.35, 15.05], target: [-.18, -1.92, 0], fov: 36, fit: 13.4, mobileLift: .077, mobileRaise: .34, tabletDrop: .10 },
];

function cameraKey(pose, aspect) {
  const portrait = 1 - smoothstep(aspect, .72, 1.38);
  const fov = pose.fov + portrait * 11;
  const tangent = Math.tan(degToRad(fov / 2));
  const distance = Math.max(pose.position[2], pose.fit / (2 * tangent * aspect * .94));
  const tablet = smoothstep(aspect, .55, .75) * (1 - smoothstep(aspect, .75, 1.10));
  const lift = portrait * (pose.mobileLift - tablet * (pose.tabletDrop ?? 0)) * distance * tangent * 2;
  return {
    position: new THREE.Vector3(
      pose.position[0] * lerp(1, .48, portrait),
      pose.position[1] - lift + (pose.mobileRaise ?? 0) * portrait * distance,
      distance,
    ),
    target: new THREE.Vector3(pose.target[0] * lerp(1, .61, portrait), pose.target[1] - lift, pose.target[2]),
    fov,
  };
}

function createCameraRig(camera) {
  let keys = [];
  const position = new THREE.Vector3();
  const target = new THREE.Vector3();
  const poseCurve = new THREE.CatmullRomCurve3([]);
  const focusCurve = new THREE.CatmullRomCurve3([]);

  function resize(aspect) {
    keys = CAMERA.map((pose) => cameraKey(pose, aspect));
    poseCurve.points = keys.map((key) => key.position);
    focusCurve.points = keys.map((key) => key.target);
  }

  function render(progress, pointerX, pointerY) {
    const poseProgress = Math.min(progress, CAMERA.at(-1).at);
    const found = CAMERA.findIndex((key) => poseProgress <= key.at);
    const index = Math.max(1, found === -1 ? CAMERA.length - 1 : found);
    const start = CAMERA[index - 1];
    const end = CAMERA[index];
    const t = (poseProgress - start.at) / (end.at - start.at);
    const eased = lerp(t, smoothstep(t, 0, 1), .35);
    const time = (index - 1 + eased) / (CAMERA.length - 1);
    poseCurve.getPoint(time, position);
    focusCurve.getPoint(time, target);
    const parallax = 1 - smoothstep(progress, .18, .36);
    camera.position.copy(position);
    camera.position.x += pointerX * .18 * parallax;
    camera.position.y += pointerY * .13 * parallax;
    camera.fov = lerp(keys[index - 1].fov, keys[index].fov, eased);
    camera.updateProjectionMatrix();
    camera.lookAt(target);
  }

  return { resize, render };
}

function resample(path) {
  const spline = new THREE.CatmullRomCurve3(path.map((sample) =>
    new THREE.Vector3(sample.x * SCALE, sample.y * SCALE + ELEVATION, sample.width * SCALE)));
  return spline.getPoints(92);
}

function createEmblemMaterial(side = THREE.FrontSide) {
  return new THREE.ShaderMaterial({
    side,
    vertexColors: true,
    transparent: true,
    forceSinglePass: true,
    toneMapped: false,
    uniforms: { alpha: { value: 1 }, emphasis: { value: 0 } },
    vertexShader: `
      varying vec3 pigment;
      varying vec3 surfaceNormal;
      varying vec3 toEye;

      void main() {
        vec4 viewPosition = modelViewMatrix * vec4(position, 1.0);
        pigment = color;
        surfaceNormal = normalMatrix * normal;
        toEye = -viewPosition.xyz;
        gl_Position = projectionMatrix * viewPosition;
      }
    `,
    fragmentShader: `
      uniform float alpha;
      uniform float emphasis;
      varying vec3 pigment;
      varying vec3 surfaceNormal;
      varying vec3 toEye;

      void main() {
        vec3 normal = normalize(surfaceNormal) * (gl_FrontFacing ? 1.0 : -1.0);
        vec3 eye = normalize(toEye);
        vec3 key = normalize(vec3(-0.48, 0.59, 0.68));
        float facing = max(0.0, dot(normal, eye));
        float diffuse = max(0.0, dot(normal, key));
        float gloss = pow(max(0.0, dot(normal, normalize(key + eye))), 29.0);
        float bevel = pow(1.0 - facing, 2.0);
        float shade = 0.49 + facing * 0.40 + diffuse * 0.17 + emphasis;
        vec3 finish = pigment * (shade + 0.23 * gloss + 0.26 * bevel);
        finish += vec3(0.025) * (gloss + bevel * 0.28);
        gl_FragColor = vec4(finish, alpha);
        #include <colorspace_fragment>
      }
    `,
  });
}

function createGradient(stops) {
  const colors = stops.map(([position, color]) => [position, new THREE.Color(color)]);
  return (position, target) => {
    const index = colors.findIndex(([edge]) => position <= edge);
    if (index === 0) return target.copy(colors[0][1]);
    if (index < 0) return target.copy(colors.at(-1)[1]);
    const [start, from] = colors[index - 1];
    const [end, to] = colors[index];
    return target.copy(from).lerp(to, (position - start) / (end - start));
  };
}

function colorCandlestick(geometry, height, colors) {
  const positions = geometry.attributes.position;
  const pigments = new Float32Array(positions.count * 3);
  const bottom = new THREE.Color(colors[0]);
  const top = new THREE.Color(colors[1]);
  const color = new THREE.Color();
  for (let index = 0; index < positions.count; index++) {
    const progress = THREE.MathUtils.clamp(.5 + positions.getY(index) / height, 0, 1);
    color.copy(bottom).lerp(top, progress).toArray(pigments, index * 3);
  }
  geometry.setAttribute("color", new THREE.BufferAttribute(pigments, 3));
  return geometry;
}

function createRibbon(path, number, material) {
  const samples = resample(path);
  const length = samples.length;
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(length * CUT.length * 3);
  const colors = new Float32Array(positions.length);
  const indices = [];
  const centers = Array.from({ length }, () => new THREE.Vector3());
  const sampleColor = createGradient(RIBBON_COLORS[number]);
  const gradient = new THREE.Color();
  const tangent = new THREE.Vector3();
  const lateral = new THREE.Vector3();
  const thicknessAxis = new THREE.Vector3();
  const view = new THREE.Vector3();

  for (let index = 0; index < length; index++) {
    sampleColor(samples[index].x / SCALE + .5, gradient);
    for (let corner = 0; corner < CUT.length; corner++) {
      const current = index * CUT.length + corner;
      const bevel = corner === 0 || corner === 1 ? 1 : .8;
      colors.set([gradient.r * bevel, gradient.g * bevel, gradient.b * bevel], current * 3);
      if (index === length - 1) continue;
      const adjacent = index * CUT.length + (corner + 1) % CUT.length;
      indices.push(current, current + CUT.length, adjacent + CUT.length, current, adjacent + CUT.length, adjacent);
    }
  }
  geometry.setIndex(indices);
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3).setUsage(THREE.DynamicDrawUsage));
  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
  const mesh = new THREE.Mesh(geometry, material);
  mesh.frustumCulled = false;
  mesh.renderOrder = 2;

  function render(progress) {
    const open = smoothstep(progress, .21, .49);
    const arrange = smoothstep(progress, .43 + number * .008, .77 + number * .008);
    const pull = (1 - arrange) * open;
    const channelX = (number - 2.5) * 1.72;
    const twist = pull * (.34 + number * .075);

    for (let index = 0; index < length; index++) {
      const u = index / (length - 1);
      const sample = samples[index];
      const fan = Math.sin(u * Math.PI);
      const x = sample.x + pull * (number - 2.5) * .17 * fan;
      const y = sample.y + pull * Math.sin(u * 5.8 - .9) * (number - 2.5) * .19;
      const z = (number - 2.5) * .067 + pull * (Math.sin(u * 5.1 - .6) * 1.8 + (number - 2.5) * .20) * fan;
      centers[index].set(
        lerp(x, channelX * (1 - smoothstep(u, .1, .94)), arrange),
        lerp(y, -1.707 + .055 * fan, arrange),
        lerp(z, -.86 + u * 2.64, arrange),
      );
    }

    for (let index = 0; index < length; index++) {
      const u = index / (length - 1);
      const center = centers[index];
      tangent.copy(centers[Math.min(index + 1, length - 1)]).sub(centers[Math.max(index - 1, 0)]).normalize();
      const tilt = Math.PI / 2 * arrange + twist * Math.sin(u * Math.PI * 2);
      view.set(0, -Math.sin(tilt), Math.cos(tilt));
      lateral.crossVectors(view, tangent).normalize();
      thicknessAxis.crossVectors(tangent, lateral).normalize();
      const width = lerp(samples[index].z * (.52 + pull * .9), .021 + .027 * Math.sin(u * Math.PI), arrange);
      const thickness = lerp((.032 + .080 * Math.sin(u * Math.PI)) * (1 + pull * 1.2), .018, arrange);
      for (let corner = 0; corner < CUT.length; corner++) {
        const offset = (index * CUT.length + corner) * 3;
        const side = CUT[corner][0] * width;
        const depth = CUT[corner][1] * thickness;
        positions[offset] = center.x + lateral.x * side + thicknessAxis.x * depth;
        positions[offset + 1] = center.y + lateral.y * side + thicknessAxis.y * depth;
        positions[offset + 2] = center.z + lateral.z * side + thicknessAxis.z * depth;
      }
    }
    geometry.attributes.position.needsUpdate = true;
    geometry.computeVertexNormals();
  }

  return { mesh, render, geometry };
}

function createSculpture() {
  const group = new THREE.Group();
  group.name = "Official Lattice emblem";
  const material = createEmblemMaterial(THREE.DoubleSide);
  const ribbons = RIBBONS.map((path, i) => createRibbon(path, i, material));
  for (const ribbon of ribbons) group.add(ribbon.mesh);

  const entryCandles = CANDLES.map((item, i) => ({
    x: item.x * SCALE, y: item.y * SCALE + ELEVATION, z: .14 + i * .024,
    width: item.width * SCALE, height: item.height * SCALE, color: item.color,
  }));
  const candles = CANDLES.map((item, i) => {
    const point = entryCandles[i];
    const material = createEmblemMaterial();
    const colors = CANDLE_COLORS[i];
    const bodyGeometry = new RoundedBoxGeometry(point.width, point.height, .18, 3, .027);
    const body = new THREE.Mesh(colorCandlestick(bodyGeometry, point.height, colors), material);
    body.position.set(point.x, point.y, point.z);
    body.renderOrder = 3;
    const stemHeight = (item.stemTop - item.stemBottom) * SCALE;
    const stemGeometry = new RoundedBoxGeometry(item.stemWidth * SCALE, stemHeight, .052, 2, .012);
    const stem = new THREE.Mesh(colorCandlestick(stemGeometry, stemHeight, colors), material);
    stem.position.set(point.x, (item.stemTop + item.stemBottom) * SCALE * .5 + ELEVATION, point.z - .027);
    group.add(stem, body);
    return { material, body, stem };
  });

  function render(progress) {
    const ribbonAlpha = 1 - smoothstep(progress, .70, .87);
    const candleAlpha = 1 - smoothstep(progress, .49, .57);
    const tight = smoothstep(progress, .26, .39) * (1 - smoothstep(progress, .43, .55));
    material.uniforms.alpha.value = ribbonAlpha;
    for (const ribbon of ribbons) {
      ribbon.mesh.visible = ribbonAlpha > .002;
      if (ribbon.mesh.visible) ribbon.render(progress);
    }
    candles.forEach(({ material, body, stem }, i) => {
      const emphasis = i === 3 ? 1 : .46 + Math.abs(i - 3) * .03;
      const alpha = candleAlpha * lerp(1, emphasis, tight);
      material.uniforms.alpha.value = alpha;
      material.uniforms.emphasis.value = i === 3 ? .16 * tight : 0;
      body.visible = stem.visible = alpha > .002;
    });
  }

  function dispose() {
    for (const { geometry } of ribbons) geometry.dispose();
    for (const candle of candles) {
      candle.body.geometry.dispose();
      candle.stem.geometry.dispose();
      candle.material.dispose();
    }
    material.dispose();
  }

  return { group, entryCandles, render, dispose };
}

function createSpill() {
  const geometry = new THREE.PlaneGeometry(1, 1);
  const material = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    uniforms: { tint: { value: new THREE.Color("#167b74") }, intensity: { value: 0 } },
    vertexShader: `
      varying vec2 location;
      void main() {
        location = uv * 2.0 - 1.0;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,
    fragmentShader: `
      uniform vec3 tint;
      uniform float intensity;
      varying vec2 location;
      void main() {
        float v = dot(location, location);
        float falloff = exp(-4.5 * v) * (1.0 - smoothstep(.45, 1.0, v));
        gl_FragColor = vec4(tint, falloff * intensity);
        #include <colorspace_fragment>
      }`,
  });
  const glow = new THREE.Mesh(geometry, material);
  glow.position.set(.04, .11, -2.56);
  glow.scale.set(17.5, 8.7, 1);
  glow.renderOrder = -2;
  return { glow, material, geometry };
}

export function createWorld(canvas, context) {
  const renderer = new THREE.WebGLRenderer({ canvas, context, alpha: true, antialias: true, powerPreference: "high-performance" });
  renderer.setClearColor(EMBLEM.palette.midnight, 0);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.0;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(38, 1, .035, 90);
  const cameraRig = createCameraRig(camera);
  const environmentSource = new RoomEnvironment();
  const pmrem = new THREE.PMREMGenerator(renderer);
  const environment = pmrem.fromScene(environmentSource, .055);
  environmentSource.dispose();
  pmrem.dispose();
  scene.environment = environment.texture;
  scene.environmentIntensity = .43;

  const key = new THREE.DirectionalLight("#f1faf6", 1.20);
  key.position.set(-4, 6.8, 4.5);
  const side = new THREE.DirectionalLight("#b9ffec", 1.16);
  side.position.set(6.4, 2.8, -1.2);
  const fill = new THREE.HemisphereLight("#dcece8", "#203531", .55);
  const sculpture = createSculpture();
  const index = createBenchmark();
  const spill = createSpill();
  scene.add(key, side, fill, sculpture.group, index.group, spill.glow);

  function resize(width, height) {
    const aspect = width / height;
    const limit = width < 750 ? 1.25 : 1.6;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, limit));
    renderer.setSize(width, height, false);
    camera.aspect = aspect;
    cameraRig.resize(aspect);
  }

  function render(progress, weights, move, pointerX, pointerY) {
    cameraRig.render(progress, pointerX, pointerY);
    sculpture.render(progress);
    const reveal = smoothstep(progress, .475, .895);
    index.render(reveal, weights, move, sculpture.entryCandles);
    spill.material.uniforms.intensity.value = lerp(.13, .08, smoothstep(progress, .36, .84));
    renderer.render(scene, camera);
  }

  function dispose() {
    sculpture.dispose();
    index.dispose();
    environment.dispose();
    spill.geometry.dispose();
    spill.material.dispose();
    renderer.dispose();
  }

  const labelPoint = new THREE.Vector3();
  function projectCompany() {
    index.getCompanyLabelPoint(labelPoint).project(camera);
    return labelPoint;
  }

  return { render, resize, dispose, projectCompany };
}
