import * as THREE from "three";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";

const MINT = "#0dd8ad";
const CYAN = "#0ac1e9";
const BLUE = "#0f78eb";
const WHITE = new THREE.Color("#dcfbff");
const COLORS = [MINT, "#23cbbd", CYAN, "#1a9dee", "#3cd4ed", BLUE, "#38a4ff"];
const EQUAL = Object.freeze(Array(7).fill(1 / 7));
const TOP = -1.76;

function smooth(start, end, value) {
  return THREE.MathUtils.smoothstep(value, start, end);
}

export function createBenchmark() {
  const group = new THREE.Group();
  group.name = "Index exhibit";
  const geometries = new Set();
  const materials = new Set();
  const studio = new THREE.Group();
  const companies = new THREE.Group();
  const aggregate = new THREE.Group();
  group.add(studio, companies, aggregate);

  function mesh(parent, geometry, material, x, y, z) {
    const object = new THREE.Mesh(geometry, material);
    object.position.set(x, y, z);
    parent.add(object);
    geometries.add(geometry);
    materials.add(material);
    return object;
  }

  function solid(color, settings = {}) {
    return new THREE.MeshPhysicalMaterial({
      color,
      metalness: .22,
      roughness: .28,
      clearcoat: .72,
      clearcoatRoughness: .19,
      transparent: true,
      ...settings,
    });
  }

  function light(color, opacity = 1) {
    return new THREE.MeshBasicMaterial({ color, transparent: true, opacity, toneMapped: false });
  }

  const lower = solid("#080f21", { metalness: .54, roughness: .34, emissive: "#0c1d3b", emissiveIntensity: .30 });
  const upper = solid("#08142a", { metalness: .38, roughness: .34, clearcoat: .42, emissive: "#0b2045", emissiveIntensity: .27 });
  const seam = light("#1f4771", .52);
  const sockets = solid("#192a49", { metalness: .42, roughness: .25, emissive: "#24466b", emissiveIntensity: .18 });
  const lip = light("#2b6488", .53);

  mesh(studio, new RoundedBoxGeometry(12.62, .31, 5.54, 3, .13), lower, 0, TOP - .34, .04);
  mesh(studio, new RoundedBoxGeometry(12.64, .07, 5.54, 3, .034), seam, 0, TOP - .18, .04);
  mesh(studio, new RoundedBoxGeometry(12.55, .20, 5.46, 3, .09), upper, 0, TOP - .10, .04);
  mesh(studio, new RoundedBoxGeometry(10.25, .022, .02, 1, .006), lip, 0, TOP - .073, 2.773);

  const bodyGeometry = new RoundedBoxGeometry(1, 1, 1, 4, .075);
  const coreGeometry = new RoundedBoxGeometry(.106, .88, .17, 2, .041);
  const rimGeometry = new RoundedBoxGeometry(.79, .019, .81, 2, .008);
  const stemGeometry = new RoundedBoxGeometry(.063, 1.30, .080, 2, .028);
  const faceGeometry = new THREE.PlaneGeometry(.91, .91);
  const socketGeometry = new RoundedBoxGeometry(1.30, .15, 1.19, 3, .065);
  const socketEdgeGeometry = new RoundedBoxGeometry(1.255, .023, 1.145, 3, .01);
  const pulseGeometry = new THREE.SphereGeometry(.047, 10, 6);
  const cursor = new THREE.Vector3();

  const markers = COLORS.map((value, index) => {
    const position = new THREE.Vector3((index - 3) * 1.72, TOP, -.56 - Math.sin(index / 6 * Math.PI) * 1.03);
    const color = new THREE.Color(value);
    const pedestal = new THREE.Group();
    pedestal.position.copy(position);
    studio.add(pedestal);
    const edge = light(color, .63);
    mesh(pedestal, socketGeometry, sockets, 0, .066, 0);
    mesh(pedestal, socketEdgeGeometry, edge, 0, .146, 0);

    const object = new THREE.Group();
    companies.add(object);
    const body = solid(color.clone().multiplyScalar(.48), {
      metalness: .38,
      roughness: .20,
      emissive: color,
      emissiveIntensity: .31,
    });
    mesh(object, bodyGeometry, body, 0, 0, 0);

    const crest = light(color.clone().lerp(WHITE, .34), .88);
    mesh(object, rimGeometry, crest, 0, .497, 0);
    mesh(object, rimGeometry, crest, 0, -.491, 0);
    const stem = light(color.clone().lerp(WHITE, .19), .75);
    mesh(object, stemGeometry, stem, 0, 0, -.22);
    const core = light(color.clone().lerp(WHITE, .24), .73);
    mesh(object, coreGeometry, core, -.20, 0, .405);

    const glass = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      uniforms: {
        tint: { value: color.clone() },
        strength: { value: 1 },
      },
      vertexShader: `
        varying vec2 surface;
        void main() {
          surface = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 tint;
        uniform float strength;
        varying vec2 surface;
        void main() {
          vec2 edge = min(surface, 1.0 - surface);
          float rim = 1.0 - smoothstep(0.005, 0.025, min(edge.x, edge.y));
          float sheen = 1.0 - smoothstep(0.0, 0.27, abs(surface.x + surface.y * 0.65 - 0.90));
          float floorGlow = pow(1.0 - surface.y, 3.0);
          float etch = smoothstep(0.89, 1.0, sin(surface.y * 82.0)) * surface.y * 0.045;
          vec3 light = mix(tint, vec3(0.76, 0.91, 1.0), 0.35 + rim * 0.18);
          gl_FragColor = vec4(light, strength * (rim * 0.44 + sheen * 0.17 + floorGlow * 0.22 + etch));
          #include <colorspace_fragment>
        }
      `,
    });
    mesh(object, faceGeometry, glass, 0, 0, .501);

    const path = new THREE.CatmullRomCurve3([
      new THREE.Vector3(position.x, TOP + .024, position.z + .55),
      new THREE.Vector3(position.x, TOP + .025, .38 + (3 - Math.abs(index - 3)) * .135),
      new THREE.Vector3(position.x * .66, TOP + .025, 1.14 + index * .045),
      new THREE.Vector3((index - 3) * .23, TOP + .024, 1.52),
      new THREE.Vector3((index - 3) * .055, TOP + .023, 1.80),
    ]);
    const routeMaterial = light(color, .62);
    const route = mesh(studio, new THREE.TubeGeometry(path, 42, .018, 5, false), routeMaterial, 0, 0, 0);
    const pulseMaterial = light(color.clone().lerp(WHITE, .47), .93);
    const pulse = mesh(studio, pulseGeometry, pulseMaterial, 0, 0, 0);
    return { color, position, pedestal, object, edge, body, crest, stem, core, glass, path, route, routeMaterial, pulse, pulseMaterial };
  });

  const receiver = new THREE.Group();
  receiver.position.set(0, TOP + .071, 1.83);
  aggregate.add(receiver);
  const receiverBase = solid("#182c49", { emissive: "#1c4c72", emissiveIntensity: .32, metalness: .56, roughness: .2 });
  const receiverRim = light(CYAN, .82);
  const receiverCore = light("#c8faff");
  mesh(receiver, new RoundedBoxGeometry(1.14, .16, .38, 3, .073), receiverBase, 0, 0, 0);
  mesh(receiver, new RoundedBoxGeometry(.98, .039, .28, 3, .017), receiverRim, 0, .080, 0);
  mesh(receiver, new RoundedBoxGeometry(.80, .040, .08, 2, .016), receiverCore, 0, .097, 0);

  const bar = new THREE.Group();
  bar.position.set(0, TOP + .065, 2.42);
  aggregate.add(bar);
  const track = solid("#19253d", { emissive: "#1a4269", emissiveIntensity: .44, metalness: .28 });
  const trace = light(CYAN, .88);
  const traceCore = light("#b6f4ff", .84);
  mesh(bar, new RoundedBoxGeometry(6.80, .13, .21, 3, .058), track, 0, 0, 0);
  const beam = mesh(bar, new RoundedBoxGeometry(5.95, .032, .050, 3, .014), trace, 0, .069, 0);
  const cursorMark = mesh(bar, new RoundedBoxGeometry(.32, .055, .089, 3, .025), traceCore, 0, .082, 0);
  const link = mesh(aggregate, new RoundedBoxGeometry(.034, .026, .46, 2, .011), receiverRim, 0, TOP + .027, 2.10);

  let previousEntry;

  function render(progress, weights = EQUAL, move = 0, entryCandles) {
    group.visible = progress > .002;
    if (!group.visible) return;

    if (previousEntry !== entryCandles) {
      markers.forEach((marker, index) => {
        const entryColor = entryCandles?.[index]?.color;
        marker.color.set(entryColor ?? COLORS[index]);
        marker.body.color.copy(marker.color).multiplyScalar(.48);
        marker.body.emissive.copy(marker.color);
        marker.crest.color.copy(marker.color).lerp(WHITE, .34);
        marker.stem.color.copy(marker.color).lerp(WHITE, .19);
        marker.core.color.copy(marker.color).lerp(WHITE, .24);
        marker.glass.uniforms.tint.value.copy(marker.color);
      });
      previousEntry = entryCandles;
    }

    const plate = smooth(.16, .82, progress);
    const result = smooth(.53, .94, progress);
    const motion = move * smooth(.72, .98, progress);
    studio.visible = plate > .002;
    aggregate.visible = result > .002;
    studio.position.y = -.48 * (1 - plate);
    studio.scale.set(THREE.MathUtils.lerp(.88, 1, plate), 1, THREE.MathUtils.lerp(.82, 1, plate));
    lower.opacity = plate;
    upper.opacity = plate;
    seam.opacity = plate * .52;
    sockets.opacity = plate;
    lip.opacity = plate * .53;

    markers.forEach((marker, index) => {
      const entry = entryCandles?.[index];
      const weight = Math.max(.01, weights[index] ?? EQUAL[index]);
      const spread = smooth(.025 + index * .013, .77 + index * .017, progress);
      const fade = smooth(.002, entry ? .15 : .34, progress);
      const baseHeight = THREE.MathUtils.clamp(1.67 + (weight - 1 / 7) * 3.40, 1.12, 2.46);
      const height = baseHeight + (index === 0 ? motion * .46 : 0);
      const width = THREE.MathUtils.clamp(.86 + (weight - 1 / 7) * .95, .73, 1.10);
      const displayY = TOP + .22 + height / 2;
      const fromX = entry?.x ?? marker.position.x * .34;
      const fromY = entry?.y ?? -.04 + index * .15;
      const fromZ = entry?.z ?? .46;

      marker.object.position.set(
        THREE.MathUtils.lerp(fromX, marker.position.x, spread),
        THREE.MathUtils.lerp(fromY, displayY, spread) + Math.sin(spread * Math.PI) * .33,
        THREE.MathUtils.lerp(fromZ, marker.position.z, spread),
      );
      marker.object.scale.set(
        THREE.MathUtils.lerp(entry?.width ?? .27, width, spread),
        THREE.MathUtils.lerp(entry?.height ?? .65, height, spread),
        THREE.MathUtils.lerp(.035, .71, spread),
      );
      marker.object.rotation.y = -.12 * spread + .085 * Math.sin(spread * Math.PI);
      marker.body.opacity = fade;
      marker.body.emissiveIntensity = .31 + (index === 0 ? Math.abs(motion) * .32 : 0);
      marker.crest.opacity = fade * spread * .88;
      marker.stem.opacity = fade * .75;
      marker.core.opacity = fade * spread * .73;
      marker.glass.uniforms.strength.value = fade * spread;

      const pathReveal = smooth(.36 + index * .022, .79 + index * .017, progress);
      marker.edge.opacity = plate * .50;
      marker.route.visible = pathReveal > .002;
      const pulseBoost = index === 0 ? Math.abs(motion) * .24 : 0;
      marker.routeMaterial.opacity = pathReveal * (.43 + Math.min(.25, weight) + pulseBoost);
      marker.pulse.visible = pathReveal > .01 && (pathReveal < .998 || (index === 0 && Math.abs(motion) > .015));
      if (marker.pulse.visible) {
        const travel = pathReveal < .998 ? pathReveal : .39 + Math.abs(motion) * .50;
        marker.path.getPointAt(travel, cursor);
        marker.pulse.position.copy(cursor).y += .014;
        marker.pulseMaterial.opacity = pathReveal * .93;
      }
    });

    receiver.scale.setScalar(.78 + result * .22);
    receiverBase.opacity = result;
    receiverRim.opacity = result * .82;
    receiverCore.opacity = result;
    track.opacity = result;
    trace.opacity = result * .81;
    traceCore.opacity = result * .95;
    beam.scale.x = .17 + result * .83;
    cursorMark.position.x = motion * Math.min(2.31, (weights[0] ?? EQUAL[0]) * 6.6);
    link.visible = result > .12;
  }

  function dispose() {
    group.removeFromParent();
    geometries.forEach((geometry) => geometry.dispose());
    materials.forEach((material) => material.dispose());
    geometries.clear();
    materials.clear();
  }

  render(0);
  function getCompanyLabelPoint(target) {
    const first = markers[0].object;
    first.getWorldPosition(target);
    target.y += first.scale.y * .64 + .1;
    return target;
  }

  return { group, render, dispose, getCompanyLabelPoint };
}
