import * as THREE from "three";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";
import { createEmblem } from "../study/emblem-world.js";
import { CANDLES } from "../v2/emblem-paths.js";
import { holdings as holdingData } from "./reviews.js";

const { clamp, lerp, smoothstep, degToRad, euclideanModulo } = THREE.MathUtils;
const EXCHANGE_SLOT = 6;
const SLOT_ORDER = [0, 1, 2, 6, 3, 4, 5];
const PALETTE = ["#2be6c0", "#24d9c7", "#1ed5e7", "#21b8ed", "#2e98ed", "#3e7aee", "#60d8db"];
const IDENTITIES = ["#60d8db", "#67a7f2", "#7ce9b7"].map((color) => new THREE.Color(color));
const OUT = new THREE.Color("#ffb363");
const IN = new THREE.Color("#7dffe0");
const WHITE = new THREE.Color("#dbfff3");
const GAP = .20;
const SPAN = 11.45;
const BODY_HEIGHT = 2.42;
const BODY_Y = 1.37;
const SLOT_Z = -.32;

const home = { x: 0, y: .30, z: 0, yaw: -.075, pitch: .045, width: 17.1, narrow: 11.75, right: .18, lift: .11, mobileLift: .14, fov: 37 };
const holdings = { x: 0, y: 1.02, z: .38, yaw: -.20, pitch: .28, width: 24.4, narrow: 14.35, right: .15, lift: .06, mobileLift: .14, fov: 40 };
const approach = { x: .75, y: 1.68, z: .04, yaw: .27, pitch: .21, width: 14.4, narrow: 9.05, right: .155, mobileRight: -.065, lift: -.036, mobileLift: .087, fov: 38 };
const cameraRoute = [
  { at: 0, ...home },
  { at: .13, ...home },
  { at: .235, x: -.43, y: .07, z: .1, yaw: .35, pitch: .105, width: 12.9, narrow: 8.4, right: .16, lift: .10, mobileLift: .15, fov: 44 },
  { at: .39, ...holdings },
  { at: .50, ...holdings },
  { at: .59, ...approach },
  { at: .70, ...approach, yaw: -.05, x: .46, y: 1.93, width: 15.3, narrow: 9.45 },
  { at: .82, ...holdings, yaw: .13 },
  { at: .90, x: -.4, y: .22, z: .38, yaw: -.31, pitch: .04, width: 13.1, narrow: 8.4, right: .155, lift: .065, mobileLift: .13, fov: 43 },
  { at: .98, ...home },
  { at: 1, ...home },
];

const slots = [];
let left = -(SPAN + GAP * (SLOT_ORDER.length - 1)) / 2;
for (const index of SLOT_ORDER) {
  const width = SPAN * holdingData[index].weight / 100;
  slots[index] = { x: left + width / 2, width };
  left += width + GAP;
}

const FACE_VERTEX = `
  varying vec2 surface;
  void main() {
    surface = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);
  }
`;

function makeFace(width) {
  const material = new THREE.ShaderMaterial({
    uniforms: {
      tint: { value: new THREE.Color() },
      opacity: { value: 0 },
      energy: { value: 0 },
      columns: { value: Math.round(width * 28) },
      signature: { value: 0 },
    },
    transparent: true,
    depthWrite: false,
    toneMapped: false,
    vertexShader: FACE_VERTEX,
    fragmentShader: `
      uniform vec3 tint;
      uniform float opacity;
      uniform float energy;
      uniform float columns;
      uniform float signature;
      varying vec2 surface;
      void main() {
        vec2 p = surface;
        float slit = pow(max(0., sin(p.x * columns * 3.14159)), 15.);
        float sweep = exp(-abs(p.y - p.x * .21 - .29 - signature * .13) * 7.6);
        float etch = smoothstep(.72, .93, p.y) * smoothstep(.48, .96, p.x);
        float base = exp(-p.y * 6.3);
        float lip = smoothstep(.965, 1., p.y) + (1. - smoothstep(.0, .014, p.y));
        float lamination = .14 + sweep * .21 + base * .45 + slit * (.19 + etch * .34);
        vec3 color = tint * lamination + vec3(.53, .92, .87) * lip * .29;
        gl_FragColor = vec4(color * energy, opacity * (.58 + base * .27));
        #include <colorspace_fragment>
      }
    `,
  });
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(width * .83, BODY_HEIGHT * .91), material);
  mesh.position.z = .205;
  return mesh;
}

function makeHolding(width, index) {
  const group = new THREE.Group();
  const pigment = new THREE.Color(PALETTE[index]);
  const material = new THREE.MeshPhysicalMaterial({
    color: pigment.clone().multiplyScalar(.29),
    emissive: pigment,
    emissiveIntensity: .045,
    metalness: .42,
    roughness: .24,
    envMapIntensity: .61,
    clearcoat: .88,
    clearcoatRoughness: .13,
    transparent: true,
  });
  const geometry = new RoundedBoxGeometry(width, BODY_HEIGHT, .40, 3, Math.min(.091, width * .13));
  const body = new THREE.Mesh(geometry, material);
  body.userData.holding = index;
  const edges = new THREE.LineSegments(new THREE.EdgesGeometry(geometry, 25), new THREE.LineBasicMaterial({
    color: pigment, transparent: true, depthWrite: false, toneMapped: false,
  }));
  const face = makeFace(width);
  const crown = new THREE.Mesh(
    new RoundedBoxGeometry(width * .91, .025, .11, 2, .009),
    new THREE.MeshBasicMaterial({ color: pigment, transparent: true, depthWrite: false, toneMapped: false }),
  );
  crown.position.set(0, BODY_HEIGHT / 2 + .014, .09);
  group.add(body, face, edges, crown);
  return { group, pigment, material, edges, face, crown, body };
}

function makeTrack(width, x, pigment) {
  const group = new THREE.Group();
  group.position.set(x, .07, .64);
  const material = new THREE.ShaderMaterial({
    uniforms: { tint: { value: pigment.clone() }, opacity: { value: 0 }, signal: { value: 0 } },
    transparent: true, depthWrite: false, toneMapped: false,
    vertexShader: FACE_VERTEX,
    fragmentShader: `
      uniform vec3 tint;
      uniform float opacity;
      uniform float signal;
      varying vec2 surface;
      void main() {
        vec2 p = surface;
        float edge = pow(abs(p.x * 2. - 1.), 27.);
        float divisions = pow(max(0., cos(p.y * 76.)), 22.);
        float taper = smoothstep(0., .09, p.y) * (1. - smoothstep(.83, 1., p.y));
        float line = exp(-abs(p.y - signal) * 19.);
        float contact = .11 + edge * .40 + divisions * .15 + line * .66;
        gl_FragColor = vec4(tint * contact, opacity * taper * (.42 + edge * .41 + line * .16));
        #include <colorspace_fragment>
      }
    `,
  });
  const ribbon = new THREE.Mesh(new THREE.PlaneGeometry(width, 2.16), material);
  ribbon.rotation.x = -Math.PI / 2;
  group.add(ribbon);
  return { group, material };
}

function makeStation() {
  const group = new THREE.Group();
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(20, 12), new THREE.ShaderMaterial({
    uniforms: { opacity: { value: 0 }, exchange: { value: 0 } },
    transparent: true, depthWrite: false, toneMapped: false,
    vertexShader: FACE_VERTEX,
    fragmentShader: `
      uniform float opacity;
      uniform float exchange;
      varying vec2 surface;
      void main() {
        vec2 p = (surface - .5) * vec2(1., 1.6);
        float halo = exp(-9.4 * dot(p, p));
        float center = exp(-30. * dot(p, p));
        vec3 color = mix(vec3(.018, .087, .112), vec3(.037, .211, .157), exchange);
        gl_FragColor = vec4(color * (halo * .66 + center * .27), halo * opacity * .82);
        #include <colorspace_fragment>
      }
    `,
  }));
  floor.position.y = -.28;
  floor.rotation.x = -Math.PI / 2;
  group.add(floor);
  const deckMaterial = new THREE.MeshPhysicalMaterial({
    color: "#101e26", metalness: .74, roughness: .32, clearcoat: .64, transparent: true, depthWrite: false,
  });
  const deck = new THREE.Mesh(new RoundedBoxGeometry(SPAN + GAP * 6 + .4, .19, 2.80, 3, .087), deckMaterial);
  deck.position.set(0, -.075, .47);
  group.add(deck);
  const edgeMaterial = new THREE.MeshBasicMaterial({
    color: "#318091", transparent: true, depthWrite: false, toneMapped: false,
  });
  const edge = new THREE.Mesh(new RoundedBoxGeometry(SPAN + GAP * 6 + .14, .027, .035, 2, .009), edgeMaterial);
  edge.position.set(0, -.047, 1.84);
  group.add(edge);
  const plateMaterial = new THREE.MeshStandardMaterial({
    color: "#13262a", metalness: .64, roughness: .38, transparent: true, depthWrite: false,
  });
  for (const { width, x } of slots) {
    const plate = new THREE.Mesh(new RoundedBoxGeometry(width + .035, .083, .83, 2, .037), plateMaterial);
    plate.position.set(x, .039, SLOT_Z);
    group.add(plate);
  }
  return { group, floor, deckMaterial, edgeMaterial, plateMaterial };
}

function makeGate() {
  const { width, x } = slots[EXCHANGE_SLOT];
  const geometry = new THREE.EdgesGeometry(new THREE.BoxGeometry(width + .23, BODY_HEIGHT + .27, .68));
  const material = new THREE.LineDashedMaterial({
    color: "#adf6e4", dashSize: .089, gapSize: .062, transparent: true, depthWrite: false, toneMapped: false,
  });
  const gate = new THREE.LineSegments(geometry, material);
  gate.computeLineDistances();
  gate.position.set(x, BODY_Y, SLOT_Z);
  return gate;
}

function frameCameras(aspect) {
  const portrait = 1 - smoothstep(aspect, .75, 1.37);
  const fitDesktop = smoothstep(aspect, 1.1, 1.52);
  return cameraRoute.map((pose) => {
    const focus = new THREE.Vector3(pose.x, pose.y, pose.z);
    const width = lerp(pose.width, pose.narrow, portrait);
    const fov = pose.fov + portrait * 6;
    const radius = width / (2 * Math.tan(degToRad(fov / 2)) * aspect);
    const x = Math.sin(pose.yaw) * Math.cos(pose.pitch);
    const y = Math.sin(pose.pitch);
    const z = Math.cos(pose.yaw) * Math.cos(pose.pitch);
    return {
      focus, fov,
      position: new THREE.Vector3(x, y, z).multiplyScalar(radius).add(focus),
      right: lerp(pose.mobileRight ?? 0, pose.right, fitDesktop),
      lift: lerp(pose.lift, pose.mobileLift, portrait),
    };
  });
}

export function createReviewWorld(canvas, context) {
  const renderer = new THREE.WebGLRenderer({ canvas, context, alpha: true, antialias: true, powerPreference: "high-performance" });
  renderer.setClearColor("#030a11", 0);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.12;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(40, 1, .05, 100);
  const room = new RoomEnvironment();
  const generator = new THREE.PMREMGenerator(renderer);
  const environment = generator.fromScene(room, .065);
  room.dispose();
  generator.dispose();
  scene.environment = environment.texture;
  scene.environmentIntensity = .66;

  const key = new THREE.DirectionalLight("#d0fff6", 2.38);
  key.position.set(-4, 7.5, 6.7);
  const rim = new THREE.DirectionalLight("#4cb2ff", 1.54);
  rim.position.set(6, 4.2, -6);
  const fill = new THREE.HemisphereLight("#bdf5ff", "#111e24", .60);
  const emblem = createEmblem();
  const station = makeStation();
  const gate = makeGate();
  const holdings = slots.map(({ width }, index) => makeHolding(width, index));
  const incoming = makeHolding(slots[EXCHANGE_SLOT].width, EXCHANGE_SLOT);
  const outgoing = holdings[EXCHANGE_SLOT];
  const tracks = slots.map(({ width, x }, index) => makeTrack(width, x, holdings[index].pigment));
  const assembly = new THREE.Group();
  assembly.add(station.group, gate, ...holdings.map(({ group }) => group), incoming.group, ...tracks.map(({ group }) => group));
  scene.add(key, rim, fill, emblem.group, assembly);

  const aim = new THREE.Vector3();
  const projected = new THREE.Vector3();
  const cursor = new THREE.Vector2();
  const raycaster = new THREE.Raycaster();
  const pickables = [...holdings.map(({ body }) => body), incoming.body];
  let formations;
  let formation = 0;

  function resize(width, height) {
    if (width < 1 || height < 1) return;
    camera.aspect = width / height;
    formations = frameCameras(camera.aspect);
    const dpr = canvas.ownerDocument?.defaultView?.devicePixelRatio || 1;
    renderer.setPixelRatio(Math.min(dpr, width < 720 ? 1.25 : 1.5));
    renderer.setSize(width, height, false);
  }

  function aimCamera(phase, pointerX, pointerY) {
    const next = Math.max(1, cameraRoute.findIndex(({ at }) => phase <= at));
    const from = formations[next - 1];
    const to = formations[next];
    const mix = smoothstep(phase, cameraRoute[next - 1].at, cameraRoute[next].at);
    camera.position.copy(from.position).lerp(to.position, mix);
    camera.position.x += pointerX * .30;
    camera.position.y += pointerY * .17;
    aim.copy(from.focus).lerp(to.focus, mix);
    camera.fov = lerp(from.fov, to.fov, mix);
    camera.updateProjectionMatrix();
    camera.projectionMatrix.elements[8] -= lerp(from.right, to.right, mix) * 2;
    camera.projectionMatrix.elements[9] -= lerp(from.lift, to.lift, mix) * 2;
    camera.projectionMatrixInverse.copy(camera.projectionMatrix).invert();
    camera.lookAt(aim);
    camera.updateMatrixWorld();
  }

  function placeHolding(holding, index, shape, opacity, emphasis, offsetX, offsetY, offsetZ, turn, signature) {
    const { x, width } = slots[index];
    const from = CANDLES[index];
    holding.group.visible = opacity > .006;
    if (!holding.group.visible) return;
    holding.group.position.set(
      lerp(from.x * 10.6, x, shape) + offsetX,
      lerp(from.y * 10.6 + .44, BODY_Y, shape) + Math.sin(shape * Math.PI) * .36 + offsetY,
      lerp(.14 + index * .024, SLOT_Z, shape) + offsetZ,
    );
    holding.group.rotation.set(turn * -.22, turn, turn * .13);
    holding.group.scale.set(lerp(from.width * 10.6 / width, 1, shape), lerp(from.height * 10.6 / BODY_HEIGHT, 1, shape), lerp(.27, 1, shape));
    const { pigment, material, edges, face, crown } = holding;
    material.color.copy(pigment).multiplyScalar(.14 + emphasis * .27);
    material.emissive.copy(pigment);
    material.emissiveIntensity = .038 + emphasis * .15;
    material.opacity = opacity;
    material.depthWrite = opacity > .92;
    edges.material.color.copy(pigment).lerp(WHITE, emphasis * .37);
    edges.material.opacity = opacity * lerp(.30, .88, emphasis);
    face.material.uniforms.tint.value.copy(pigment);
    face.material.uniforms.opacity.value = opacity * smoothstep(shape, .13, .77);
    face.material.uniforms.energy.value = .62 + emphasis * .96;
    face.material.uniforms.signature.value = signature;
    crown.material.color.copy(pigment).lerp(WHITE, .37 + emphasis * .44);
    crown.material.opacity = opacity * smoothstep(shape, .19, .72);
  }

  function render({ phase, exchange = 0, active, pointerX = 0, pointerY = 0, cycle = 0 }) {
    if (!formations) return;
    aimCamera(phase, pointerX, pointerY);
    formation = smoothstep(phase, .201, .387) * (1 - smoothstep(phase, .851, .972));
    const emblemFlex = smoothstep(phase, .14, .33) * (1 - smoothstep(phase, .91, .972));
    const emblemOpacity = 1 - smoothstep(formation, .02, .73);
    emblem.render({ progress: emblemFlex, opacity: emblemOpacity });
    assembly.visible = formation > .002;

    if (assembly.visible) {
      const opacity = smoothstep(formation, .08, .60);
      const platform = smoothstep(formation, .32, .96);
      const review = smoothstep(phase, .51, .58) * (1 - smoothstep(phase, .76, .825));
      const oldIdentity = euclideanModulo(cycle, IDENTITIES.length);
      const newIdentity = (oldIdentity + 1) % IDENTITIES.length;
      const release = smoothstep(exchange, .015, .54);
      const arrive = smoothstep(exchange, .46, .98);
      const departOpacity = 1 - smoothstep(exchange, .51, .77);
      const arriveOpacity = smoothstep(exchange, .25, .56);
      const exchangeMark = smoothstep(exchange, .10, .39) * (1 - smoothstep(exchange, .65, .94));
      const resting = exchange >= .5 ? incoming : outgoing;
      station.floor.material.uniforms.opacity.value = platform;
      station.floor.material.uniforms.exchange.value = review;
      station.deckMaterial.opacity = platform * .95;
      station.edgeMaterial.opacity = platform * (.46 + review * .20);
      station.plateMaterial.opacity = platform;
      gate.visible = review * exchangeMark > .006;
      gate.material.opacity = review * exchangeMark * .67;

      for (let index = 0; index < holdings.length; index++) {
        const current = holdings[index];
        const track = tracks[index].material.uniforms;
        const focus = active === index ? .85 : .42;
        const brightness = focus * (1 - review * .68);
        if (index === EXCHANGE_SLOT) {
          outgoing.pigment.copy(IDENTITIES[oldIdentity]).lerp(OUT, review * (1 - smoothstep(exchange, .62, 1)));
          incoming.pigment.copy(IDENTITIES[newIdentity]).lerp(IN, review * smoothstep(exchange, .18, .56));
          placeHolding(outgoing, index, formation, opacity * departOpacity, lerp(focus, .99, review),
            -2.65 * release, 2.54 * Math.sin(release * 1.40), 1.24 * release, -.58 * release, oldIdentity);
          const remain = 1 - arrive;
          placeHolding(incoming, index, formation, opacity * arriveOpacity, lerp(focus, 1, review),
            2.52 * remain, 2.62 * Math.sin(remain * 1.32), .79 * remain, .53 * remain, newIdentity);
          track.tint.value.copy(resting.pigment);
          track.signal.value = lerp(.20, .92, exchange);
          track.opacity.value = platform * (.93 - exchangeMark * .54);
        } else {
          placeHolding(current, index, formation, opacity, brightness, 0, 0, 0, 0, index % 3);
          track.opacity.value = platform * (.82 - review * .45 + (active === index ? .17 : 0));
          track.signal.value = active === index ? .38 : -1;
        }
      }
    }
    renderer.render(scene, camera);
  }

  function project(label, index) {
    const marker = label === "incoming" ? incoming : label === "outgoing" ? outgoing
      : index === EXCHANGE_SLOT && incoming.group.visible ? incoming : holdings[index];
    if (!assembly.visible || !marker?.group.visible) return null;
    projected.set(0, label === "holding" ? .82 : BODY_HEIGHT / 2, .12);
    return marker.group.localToWorld(projected).project(camera);
  }

  function pick(x, y) {
    if (formation < .92) return null;
    cursor.set(x, y);
    raycaster.setFromCamera(cursor, camera);
    const hit = raycaster.intersectObjects(pickables, false).find(({ object }) => object.parent.visible);
    return hit?.object.userData.holding ?? null;
  }

  function dispose() {
    emblem.dispose();
    assembly.traverse((object) => {
      object.geometry?.dispose();
      object.material?.dispose();
    });
    environment.dispose();
    renderer.dispose();
  }

  return { resize, render, project, pick, dispose };
}
