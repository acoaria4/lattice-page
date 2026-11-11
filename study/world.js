import * as THREE from "three";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";
import { CANDLES } from "../v2/emblem-paths.js";
import { createEmblem } from "./emblem-world.js";
import { createResultSculpture } from "./result-world.js";

const { lerp, smoothstep, degToRad } = THREE.MathUtils;
const home = { position: [.1, .48, 14.6], target: [-1.65, -.72, 0], fov: 38, width: 11.4, lift: .093 };
const comparison = { position: [.9, 4.9, 17.1], target: [-2.6, -.86, -.13], fov: 40, width: 12.5, lift: .10, tilt: .25 };
const result = { position: [1.45, 3.85, 17.7], target: [-2.66, -.28, -.28], fov: 39, width: 12.5, lift: .091, tilt: .26 };
const route = [
  { at: 0, ...home },
  { at: .12, ...home },
  { at: .25, position: [2.9, 1.22, 6.15], target: [.19, .15, 0], fov: 41, width: 4.9, lift: .075 },
  { at: .315, position: [2.64, 1.02, 5.72], target: [.22, .02, 0], fov: 43, width: 4.7, lift: .083 },
  { at: .395, position: [.12, -.37, 2.57], target: [-.08, -.66, -.34], fov: 49, width: 2.1, lift: .015 },
  { at: .52, ...comparison },
  { at: .605, ...comparison },
  { at: .70, ...result },
  { at: .83, ...result },
  { at: .905, position: [-2.1, .08, 4.25], target: [-.45, -.39, -.24], fov: 45, width: 3.65, lift: .058 },
  { at: .97, ...home },
  { at: 1, ...home },
];

const candleEntries = [5, 0, 1, 2, 3, 4, 6].map((originalIndex, index) => {
  const candle = CANDLES[originalIndex];
  return {
    x: candle.x * 10.6,
    y: candle.y * 10.6 + .44 - (index === 0 ? .72 : 0),
    z: .14 + originalIndex * .024,
    width: candle.width * 10.6,
    height: candle.height * 10.6,
    color: candle.color,
  };
});

function fitPose(pose, aspect) {
  const portrait = 1 - smoothstep(aspect, .72, 1.30);
  const fov = pose.fov + 9 * portrait;
  const tangent = Math.tan(degToRad(fov / 2));
  const widthFit = pose.width / (2 * tangent * aspect * .91);
  const z = Math.max(pose.position[2], widthFit);
  const lift = 2 * z * tangent * pose.lift * portrait;
  return {
    position: new THREE.Vector3(pose.position[0] * lerp(1, .48, portrait), pose.position[1] - lift + z * (pose.tilt ?? 0) * portrait, z),
    target: new THREE.Vector3(pose.target[0] * (1 - portrait), pose.target[1] - lift, pose.target[2]),
    fov,
  };
}

export function createStoryWorld(canvas, context) {
  const renderer = new THREE.WebGLRenderer({ canvas, context, alpha: true, antialias: true, powerPreference: "high-performance" });
  renderer.setClearColor("#040811", 0);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.12;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(39, 1, .035, 110);
  const look = new THREE.Vector3();
  const projectPoint = new THREE.Vector3();
  const cursor = new THREE.Vector2();
  const raycaster = new THREE.Raycaster();
  const generator = new THREE.PMREMGenerator(renderer);
  const room = new RoomEnvironment();
  const environment = generator.fromScene(room, .063);
  room.dispose();
  generator.dispose();
  scene.environment = environment.texture;
  scene.environmentIntensity = .54;

  const key = new THREE.DirectionalLight("#e5fff9", 2.04);
  key.position.set(-4, 8.4, 8);
  const rim = new THREE.DirectionalLight("#72f0e2", 1.64);
  rim.position.set(7, 4, -7);
  const fill = new THREE.HemisphereLight("#cce7ff", "#122329", .68);
  const emblem = createEmblem();
  const lab = createResultSculpture();
  scene.add(key, rim, fill, emblem.group, lab.group);
  let keys = [];
  let labProgress = 0;

  function resize(width, height) {
    camera.aspect = width / height;
    keys = route.map((cue) => fitPose(cue, camera.aspect));
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, width < 750 ? 1.25 : 1.5));
    renderer.setSize(width, height, false);
  }

  function render({ phase, weights, selected, hovered, pointerX, pointerY, pulse }) {
    const next = Math.max(1, route.findIndex((cue) => phase <= cue.at));
    const before = route[next - 1];
    const after = route[next];
    const blend = smoothstep(phase, before.at, after.at);
    camera.position.copy(keys[next - 1].position).lerp(keys[next].position, blend);
    look.copy(keys[next - 1].target).lerp(keys[next].target, blend);
    const atHome = phase > .91 ? smoothstep(phase, .92, .97) : 1 - smoothstep(phase, .12, .25);
    camera.position.x += pointerX * .24 * atHome;
    camera.position.y += pointerY * .16 * atHome;
    camera.fov = lerp(keys[next - 1].fov, keys[next].fov, blend);
    camera.updateProjectionMatrix();
    camera.lookAt(look);
    camera.updateMatrixWorld();

    const returning = phase > .83;
    const emblemProgress = returning ? 1 - smoothstep(phase, .887, .968) : smoothstep(phase, .13, .404);
    const emblemOpacity = returning ? smoothstep(phase, .855, .936) : 1 - smoothstep(phase, .392, .468);
    labProgress = returning ? 1 - smoothstep(phase, .83, .934) : smoothstep(phase, .383, .542);
    const returnPulse = returning && phase < .895 ? smoothstep(phase, .834, .895) : null;
    emblem.render({ progress: emblemProgress, move: -1, opacity: emblemOpacity });
    lab.render({ progress: labProgress, weights, move: -.10, selected, hovered, pulse: returnPulse ?? pulse, entryCandles: candleEntries });
    renderer.render(scene, camera);
  }

  function pick(x, y) {
    if (labProgress < .92) return null;
    cursor.set(x, y);
    raycaster.setFromCamera(cursor, camera);
    return lab.pick(raycaster);
  }

  function projectCompany(index) {
    return lab.getCompanyPoint(index, projectPoint).project(camera);
  }

  function dispose() {
    emblem.dispose();
    lab.dispose();
    environment.dispose();
    renderer.dispose();
  }

  return { render, resize, pick, projectCompany, dispose };
}
