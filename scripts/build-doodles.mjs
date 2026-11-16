// Builds the pre-tinted doodle tiles in public/doodle/ from the master tile,
// public/pattern-doodle.svg. Run after editing the master or a tint:
//
//   node scripts/build-doodles.mjs
//
// Why pre-tinted: the doodle used to be a CSS mask with mix-blend-mode:
// multiply over each whole section. That forces the browser to composite and
// blend a section-sized layer every frame anything inside it moves, which
// gets slower the bigger the window. Multiplying a fixed tint over a solid
// ground always gives the same colour, so we bake that colour into the tile
// and let it tile as a plain, cacheable background-image.
//
// Each colour below is ground x ink (per-channel multiply, /255), i.e. exactly
// what the old blend produced.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const master = readFileSync(join(root, 'public/pattern-doodle.svg'), 'utf8');

const TILES = {
  // Section grounds (components/Section.module.css)
  normal: { color: '#fde9b6' },    // #fff8e0 x #fdf0cf
  alternate: { color: '#e8dafc' }, // #f6f0fe x #f1e8fd
  butter: { color: '#ffdc80' },    // #ffe9a3 x #fff1c8
  foam: { color: '#d8c1fa' },      // #eadcfd x #ebe0fc
  // Hero (blocks/HeroBento.module.css): the doodle crosses both the foam ground
  // and the deeper blobs, so a solid colour can't match both. A translucent ink
  // can: at opacity 1 - (ink / 255) it reproduces the multiply on any ground
  // to within a unit per channel. Ink #e5d6fb over #eadcfd and blob #dcc5fb.
  hero: { color: '#5600e4', opacity: 0.161 },
};

mkdirSync(join(root, 'public/doodle'), { recursive: true });

for (const [name, { color, opacity }] of Object.entries(TILES)) {
  let svg = master
    .replace(/<!--[\s\S]*?-->\s*/g, '')
    .replaceAll('#000', color);
  if (opacity !== undefined) {
    // One group opacity so overlapping strokes don't stack darker.
    svg = svg
      .replace(/(<svg[^>]*>)/, `$1<g opacity="${opacity}">`)
      .replace('</svg>', '</g></svg>');
  }
  writeFileSync(join(root, `public/doodle/${name}.svg`), svg);
  console.log(`public/doodle/${name}.svg`);
}
