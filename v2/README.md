# Lattice V2

The first V2 milestone follows the supplied emblem into a live explanation of an equity index. The picker at `/` links directly to V1 at `/v1/` and V2 at `/v2/`. Run `pnpm dev` for local development or `pnpm build` followed by `pnpm preview` for the production preview.

## World and camera

| Composition | Spatial action | Visitor action |
| --- | --- | --- |
| The emblem | A front-on view shows the original six ribbons and seven candlesticks. The camera is close to level, with room below for the opening line. | Follow the emblem or scroll. |
| One company | The camera moves obliquely toward a candlestick, then through the ribbon crossing. The other candlesticks dim while the selected form keeps its light. | Keep scrolling or jump to the index. |
| The index | The same forms spread into seven company markers. The ribbon paths narrow toward a single output as the camera backs out and lifts. Portrait framing lifts the physical viewpoint to show the connections on the plinth. | Switch the weighting rule and change Company A’s move. The marker and the benchmark react together. |

`world.js` owns the camera, sculpture, lights, and backdrop spill in a single Three.js scene. `benchmark.js` owns the benchmark geometry. Native scroll sets the target, and a damped render position gives the same pose when revisiting a scroll point. Real HTML carries the chapter text and controls.

## Assets and fallback

- `emblem-paths.js` derives the front-facing silhouette and candlestick proportions from the supplied `HD Logo.png`. The geometry reconstructs the overlapping guides through the crossing. `media/official-emblem.webp` is a lossless crop of the original. `media/emblem-poster.webp` and `media/emblem-mark.webp` use the same artwork with the navy matte removed.
- `emblem-colors.js` samples each ribbon and candlestick from the same artwork. The sculpture shader changes brightness across its surfaces to reveal their depth while preserving the sampled palette.
- `media/studio.webp` was generated with the built-in ImageGen tool. Brief: an empty midnight-navy photographic cyclorama with faint cobalt and teal light, a dark satin floor, and no objects or text. The live scene supplies the sculpture.
- Reduced motion, short viewports, and unavailable WebGL use still compositions and keep the Lab usable. With JavaScript disabled, the Lab shows its default example with disabled controls.

The benchmark example uses seven fictional companies. The two weighting rules assign Company A one seventh or one quarter of the index. A 10% rise or fall in Company A moves the illustrative index by 1.43% or 2.50% in either direction, with all other companies held steady.

The 3D modules load only after the motion and WebGL checks. The renderer caps device pixel ratio at 1.25 on narrow screens and 1.6 elsewhere. Rendering stops once the camera and controls settle, when the story is offscreen, and when the document is hidden.
