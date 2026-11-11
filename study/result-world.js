import * as THREE from "three";
import { Reflector } from "three/addons/objects/Reflector.js";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";

const { clamp, lerp, smoothstep } = THREE.MathUtils;
const COLORS = ["#0dd8ad", "#0fc7bc", "#0ac1e9", "#20b2df", "#0da0dc", "#0f78eb", "#1877d7"];
const EQUAL = Object.freeze(Array(7).fill(1 / 7));
const PLACES = [[-4.42, 1.12], [-1.97, -.87], [-.52, -1.57], [.89, -2.09], [2.22, -2.55], [3.55, -3.04], [4.87, -3.63]];
const RECEIVER = { x: 1.68, z: 3.35, span: 2.26 };
const CUT = [[-1, .08], [-.86, 1], [.86, 1], [1, .08], [1, 0], [-1, 0]];
const WHITE = new THREE.Color("#e7ffff");
const SHADER_VERTEX = `
  varying vec2 surface;
  void main() {
    surface = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

function amount(value, start, end) {
  return smoothstep(value, start, end);
}

function gemGeometry() {
  const outline = new THREE.Shape();
  const corners = [[-.41, -.43], [.41, -.43], [.45, -.39], [.45, .37], [.38, .44], [-.38, .44], [-.45, .37], [-.45, -.39]];
  corners.forEach(([x, y], index) => (index ? outline.lineTo(x, y) : outline.moveTo(x, y)));
  outline.closePath();
  return new THREE.ExtrudeGeometry(outline, {
    depth: .48, bevelEnabled: true, bevelSegments: 1, bevelThickness: .06, bevelSize: .05, curveSegments: 1, steps: 1,
  }).translate(0, 0, -.24);
}

function reflectiveFloor() {
  const geometry = new THREE.PlaneGeometry(49, 46);
  const floor = new Reflector(geometry, {
    textureWidth: 720, textureHeight: 420, multisample: 0, clipBias: .001,
    color: "#070c12",
    shader: {
      name: "Lattice satin reflection",
      uniforms: {
        ...Reflector.ReflectorShader.uniforms,
        opacity: { value: 0 },
        focus: { value: new THREE.Vector2(-4.42, 1.12) },
        focusColor: { value: new THREE.Color(COLORS[0]) },
      },
      vertexShader: `
        uniform mat4 textureMatrix;
        varying vec4 projection;
        varying vec2 floorPoint;
        void main() {
          projection = textureMatrix * vec4(position, 1.0);
          floorPoint = position.xy * vec2(1.0, -1.0);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 color;
        uniform sampler2D tDiffuse;
        uniform float opacity;
        uniform vec2 focus;
        uniform vec3 focusColor;
        varying vec4 projection;
        varying vec2 floorPoint;
        float grain(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
        void main() {
          vec2 uv = projection.xy / projection.w;
          float noise = grain(floor(floorPoint * 127.0));
          vec2 stepUV = vec2(0.005, 0.008) * (0.83 + noise * 0.34);
          vec3 reflection = texture2D(tDiffuse, uv).rgb * 0.27;
          reflection += texture2D(tDiffuse, uv + stepUV).rgb * 0.20;
          reflection += texture2D(tDiffuse, uv - stepUV).rgb * 0.20;
          reflection += texture2D(tDiffuse, uv + vec2(stepUV.x, -stepUV.y) * 1.5).rgb * 0.165;
          reflection += texture2D(tDiffuse, uv + vec2(-stepUV.x, stepUV.y) * 1.5).rgb * 0.165;
          vec2 falloff = (floorPoint - vec2(0.1, 0.1)) / vec2(9.4, 8.0);
          vec2 lamp = (floorPoint - focus) * vec2(1.22, 0.86);
          vec2 receiverSpill = (floorPoint - vec2(1.68, 3.52)) * vec2(0.55, 1.47);
          float spill = exp(-dot(lamp, lamp)) * 0.068;
          float plane = exp(-dot(falloff, falloff));
          vec3 area = vec3(0.002, 0.007, 0.009) * plane;
          area += vec3(0.002, 0.017, 0.014) * exp(-dot(receiverSpill, receiverSpill));
          reflection = min(reflection, vec3(0.21, 0.30, 0.36));
          vec3 tint = color * (0.77 + noise * 0.16) + reflection * 0.31 + focusColor * spill + area;
          gl_FragColor = vec4(tint, plane * opacity);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }
      `,
    },
  });
  floor.rotation.x = -Math.PI / 2;
  floor.position.y = -.045;
  floor.material.transparent = true;
  floor.material.depthWrite = false;
  floor.renderOrder = -3;
  return floor;
}

function createRibbon(color) {
  const geometry = new THREE.BufferGeometry();
  const count = 37;
  const positions = new Float32Array(count * CUT.length * 3);
  const coords = new Float32Array(count * CUT.length * 2);
  const indices = [];
  for (let section = 0; section < count; section++) {
    for (let side = 0; side < CUT.length; side++) {
      const current = section * CUT.length + side;
      coords[current * 2] = CUT[side][0];
      coords[current * 2 + 1] = section / (count - 1);
      if (section === count - 1) continue;
      const next = section * CUT.length + (side + 1) % CUT.length;
      indices.push(current, current + CUT.length, next, next, current + CUT.length, next + CUT.length);
    }
  }
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3).setUsage(THREE.DynamicDrawUsage));
  geometry.setAttribute("uv", new THREE.BufferAttribute(coords, 2));
  geometry.setIndex(indices);
  const material = new THREE.ShaderMaterial({
    transparent: true, toneMapped: false,
    uniforms: { tint: { value: color }, energy: { value: 0 }, alpha: { value: 0 }, pulse: { value: -1 } },
    vertexShader: SHADER_VERTEX,
    fragmentShader: `
      uniform vec3 tint;
      uniform float energy;
      uniform float alpha;
      uniform float pulse;
      varying vec2 surface;
      void main() {
        float edge = smoothstep(0.74, 0.99, abs(surface.x));
        float polish = 1.0 - smoothstep(0.01, 0.23, abs(surface.x + 0.43));
        float distance = (surface.y - pulse) * 21.0;
        float running = exp(-distance * distance) * step(0.0, pulse);
        float join = 0.82 + pow(surface.y, 7.0) * 0.21;
        vec3 jewel = tint * ((0.075 + edge * 0.42 + polish * 0.11) * energy + running * 0.79) * join;
        jewel += vec3(0.42, 0.78, 0.71) * (running * 0.45 + edge * pow(energy, 2.0) * 0.08);
        gl_FragColor = vec4(jewel, alpha * (0.45 + energy * 0.48));
        #include <colorspace_fragment>
      }
    `,
  });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.frustumCulled = false;
  const curve = new THREE.CubicBezierCurve3(new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3());
  const point = new THREE.Vector3();
  const tangent = new THREE.Vector3();
  const previous = new THREE.Vector4(NaN, NaN, NaN, NaN);

  function update(x, z, width, destination) {
    if (x === previous.x && z === previous.y && width === previous.z && destination === previous.w) return;
    previous.set(x, z, width, destination);
    curve.v0.set(x, .024, z + .44);
    curve.v1.set(x + (destination - x) * .04, .024, z + (RECEIVER.z - z) * .86);
    curve.v2.set(destination + (x - destination) * .07, .024, RECEIVER.z - 1.37);
    curve.v3.set(destination, .025, RECEIVER.z - .30);
    for (let section = 0; section < count; section++) {
      const t = section / (count - 1);
      curve.getPoint(t, point);
      curve.getTangent(t, tangent);
      const taper = lerp(.96, .75, t ** 3);
      for (let side = 0; side < CUT.length; side++) {
        const corner = CUT[side];
        const offset = (section * CUT.length + side) * 3;
        const across = corner[0] * width * taper * .5;
        positions[offset] = point.x + tangent.z * across;
        positions[offset + 1] = point.y + corner[1] * .074;
        positions[offset + 2] = point.z - tangent.x * across;
      }
    }
    geometry.attributes.position.needsUpdate = true;
    geometry.computeBoundingSphere();
  }

  return { mesh, material, update };
}

export function createResultSculpture() {
  const group = new THREE.Group();
  group.name = "Trace the move sculpture";
  const floor = reflectiveFloor();
  group.add(floor);
  const geometry = gemGeometry();
  const stemGeometry = new RoundedBoxGeometry(.078, 1.02, .08, 2, .035);
  const edgeGeometry = new THREE.EdgesGeometry(geometry, 14);
  const baseGeometry = new RoundedBoxGeometry(1.34, .13, 1.05, 2, .042);
  const lipGeometry = new RoundedBoxGeometry(1.19, .052, .91, 2, .018);
  const innerGeometry = new THREE.PlaneGeometry(.91, .93);
  const picks = [];

  const markers = PLACES.map(([x, z], index) => {
    const color = new THREE.Color(COLORS[index]);
    const crystal = new THREE.Group();
    const stand = new THREE.Group();
    stand.position.set(x, 0, z);
    group.add(stand, crystal);
    const baseMaterial = new THREE.MeshPhysicalMaterial({ color: "#0a1823", emissive: color, emissiveIntensity: .03, roughness: .28, metalness: .58, transparent: true, clearcoat: .62, envMapIntensity: .44 });
    const base = new THREE.Mesh(baseGeometry, baseMaterial);
    base.position.y = .046;
    const lipMaterial = new THREE.MeshBasicMaterial({ color, transparent: true, toneMapped: false });
    const lip = new THREE.Mesh(lipGeometry, lipMaterial);
    lip.position.y = .122;
    stand.add(base, lip);

    const bodyMaterial = new THREE.MeshPhysicalMaterial({
      color: color.clone().multiplyScalar(.21), metalness: .48, roughness: .24, clearcoat: .62,
      clearcoatRoughness: .16, transparent: true, emissive: color, emissiveIntensity: .021,
      envMapIntensity: .48, specularIntensity: .58, opacity: .95,
    });
    const body = new THREE.Mesh(geometry, bodyMaterial);
    const stem = new THREE.Mesh(stemGeometry, bodyMaterial);
    stem.position.set(0, .11, -.056);
    crystal.add(stem, body);
    const edgeMaterial = new THREE.LineBasicMaterial({ color, transparent: true, depthWrite: false, toneMapped: false });
    crystal.add(new THREE.LineSegments(edgeGeometry, edgeMaterial));
    const innerMaterial = new THREE.ShaderMaterial({
      uniforms: { tint: { value: color }, energy: { value: 0 }, opacity: { value: 0 } },
      transparent: true, depthWrite: false, toneMapped: false, vertexShader: SHADER_VERTEX,
      fragmentShader: `
        uniform vec3 tint;
        uniform float energy;
        uniform float opacity;
        varying vec2 surface;
        void main() {
          float mask = smoothstep(0.0, 0.042, min(surface.x, 1.0 - surface.x));
          mask *= smoothstep(0.0, 0.038, surface.y) * (1.0 - smoothstep(0.94, 1.0, surface.y));
          float core = exp(-pow((surface.x - 0.54) * 2.8, 2.0) - pow((surface.y - 0.08) * 3.6, 2.0));
          float rim = exp(-abs(surface.x - 0.09) * 24.0) * (0.29 + core * 0.78);
          float window = exp(-abs(surface.x + surface.y * 0.57 - 0.93) * 5.7) * 0.10;
          vec3 glass = tint * (core * 0.83 + rim * 0.5 + window);
          glass += vec3(0.39, 0.85, 0.72) * pow(core, 5.0) * 0.42;
          gl_FragColor = vec4(glass * energy, opacity * mask * (0.34 + core * 0.62));
          #include <colorspace_fragment>
        }
      `,
    });
    const inner = new THREE.Mesh(innerGeometry, innerMaterial);
    inner.position.z = .301;
    inner.renderOrder = 1;
    crystal.add(inner);
    const ribbon = createRibbon(color);
    group.add(ribbon.mesh);
    for (const hit of [body, base, ribbon.mesh]) {
      hit.userData.company = index;
      picks.push(hit);
    }
    return { x, z, color, crystal, stand, stem, baseMaterial, lipMaterial, bodyMaterial, edgeMaterial, innerMaterial, ribbon };
  });

  const receiver = new THREE.Group();
  receiver.position.set(RECEIVER.x, .084, RECEIVER.z);
  group.add(receiver);
  const plateMaterial = new THREE.MeshPhysicalMaterial({ color: "#14252e", metalness: .60, roughness: .28, transparent: true, clearcoat: .62, envMapIntensity: .42 });
  const beamMaterial = new THREE.MeshBasicMaterial({ color: "#47f4e2", transparent: true, toneMapped: false });
  const plate = new THREE.Mesh(new RoundedBoxGeometry(2.56, .19, .68, 3, .061), plateMaterial);
  const beam = new THREE.Mesh(new RoundedBoxGeometry(2.20, .042, .31, 2, .019), beamMaterial);
  beam.position.y = .102;
  receiver.add(plate, beam);

  function render({ progress = 1, weights = EQUAL, move = -.10, selected, hovered, pulse, entryCandles } = {}) {
    group.visible = progress > .002;
    if (!group.visible) return;
    const focus = hovered ?? selected ?? 0;
    const materialMix = amount(progress, .08, .71);
    const emphasis = amount(progress, .33, .91);
    const support = amount(progress, .47, .87);
    const traced = typeof pulse === "number" ? 1 - clamp(pulse, 0, 1) : -1;
    floor.visible = support > .005;
    floor.material.uniforms.opacity.value = support * .98;
    const focusMarker = markers[focus] ?? markers[0];
    floor.material.uniforms.focus.value.set(focusMarker.x, focusMarker.z);
    floor.material.uniforms.focusColor.value.copy(focusMarker.color);
    receiver.visible = support > .006;
    plateMaterial.opacity = support;
    beamMaterial.opacity = support * (.76 + (traced > .88 ? (traced - .88) * 1.8 : 0));
    receiver.scale.y = lerp(.53, 1, support);

    let offset = RECEIVER.x - RECEIVER.span * .5;
    markers.forEach((marker, index) => {
      const entry = entryCandles?.[index];
      const spread = entry ? amount(progress, .09 + index * .012, .77 + index * .017) : 1;
      const appear = amount(progress, .006, entry ? .18 : .40);
      const highlight = index === focus;
      const light = lerp(.46, highlight ? 1 : .27, emphasis);
      const height = 2.28 * (index === 0 ? 1 + clamp(move, -.35, .35) : 1);
      const standY = .14 + height * .48;
      const fromX = entry?.x ?? marker.x;
      const fromY = entry?.y ?? standY;
      const fromZ = entry?.z ?? marker.z;
      marker.crystal.position.set(lerp(fromX, marker.x, spread), lerp(fromY, standY, spread) + Math.sin(spread * Math.PI) * .26, lerp(fromZ, marker.z, spread));
      marker.crystal.scale.set(lerp(entry?.width ?? 1.05, 1.05, spread), lerp(entry?.height ?? height, height, spread), lerp(.03, 1, materialMix));
      marker.crystal.rotation.y = -.12 * spread;
      marker.stand.visible = support > .006;
      marker.stand.scale.y = lerp(.55, 1, support);
      marker.baseMaterial.opacity = support;
      marker.lipMaterial.opacity = support * (.19 + light * .46);
      marker.bodyMaterial.opacity = appear * .98;
      marker.bodyMaterial.color.copy(marker.color).multiplyScalar(.18 + light * .23);
      marker.bodyMaterial.emissiveIntensity = lerp(entry ? .53 : .07, .019 + light * .063, materialMix);
      marker.edgeMaterial.opacity = appear * materialMix * (.18 + light * .41);
      marker.edgeMaterial.color.copy(marker.color).lerp(WHITE, light * .29);
      marker.innerMaterial.uniforms.energy.value = light;
      marker.innerMaterial.uniforms.opacity.value = appear * materialMix;

      const width = RECEIVER.span * (weights[index] ?? EQUAL[index]);
      const draw = amount(progress, .38 + index * .015, .84 + index * .013);
      marker.ribbon.mesh.visible = draw > .006;
      if (marker.ribbon.mesh.visible) {
        marker.ribbon.update(marker.crystal.position.x, marker.crystal.position.z, width, offset + width * .5);
        marker.ribbon.material.uniforms.alpha.value = draw;
        marker.ribbon.material.uniforms.energy.value = lerp(.5, highlight ? 1.05 : .31, emphasis);
        marker.ribbon.material.uniforms.pulse.value = highlight ? traced : -1;
      }
      offset += width;
    });
  }

  function pick(raycaster) {
    if (!group.visible) return null;
    const hit = raycaster.intersectObjects(picks, false).find(({ object }) => object.visible && object.parent.visible);
    return hit?.object.userData.company ?? null;
  }

  function getCompanyPoint(index, target = new THREE.Vector3()) {
    const marker = markers[index];
    if (!marker) return null;
    target.set(0, .56, .25);
    return marker.crystal.localToWorld(target);
  }

  function dispose() {
    const geometries = new Set();
    const materials = new Set();
    group.traverse((object) => {
      if (object.geometry) geometries.add(object.geometry);
      if (object.material && object !== floor) materials.add(object.material);
    });
    floor.dispose();
    geometries.forEach((item) => item.dispose());
    materials.forEach((item) => item.dispose());
    group.removeFromParent();
  }

  render({ progress: 0 });
  return { group, render, pick, getCompanyPoint, dispose };
}
