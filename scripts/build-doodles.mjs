// Builds the pre-tinted doodle tiles in public/doodle/ from the master tile,
// public/pattern-doodle.svg. Runs before `dev` and `build` (package.json), so
// the tiles always match the ground colours in the CSS; to run it by hand:
//
//   node scripts/build-doodles.mjs
//
// Why pre-tinted: the doodle used to be a CSS mask with mix-blend-mode:
// multiply over each whole section. That forces the browser to composite and
// blend a section-sized layer every frame anything inside it moves, which
// gets slower the bigger the window. Multiplying a fixed ink over a solid
// ground always gives the same colour, so we bake that colour into the tile
// and let it tile as a plain, cacheable background-image.
//
// The grounds are read from the CSS; only the inks (the look of the print on
// each ground) live here.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const read = (path) => readFileSync(join(root, path), 'utf8');

/** The value of a `--name: #rrggbb;` custom property in a stylesheet. */
function cssColor(path, name) {
  const m = read(path).match(new RegExp(`--${name}:\\s*(#[0-9a-f]{6})\\b`, 'i'));
  if (!m) throw new Error(`build-doodles: no 6-digit hex --${name} in ${path}`);
  return m[1];
}

const rgb = (hex) => [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16));
const hex = (c) => '#' + c.map((v) => Math.round(v).toString(16).padStart(2, '0')).join('');

/** What the old multiply blend gave: ground x ink, per channel. */
const multiply = (ground, ink) =>
  hex(rgb(ground).map((g, i) => (g * rgb(ink)[i]) / 255));

/**
 * A translucent colour that reproduces `ground x ink` on several grounds at
 * once (here, a ground and the blobs on it), which no solid colour can.
 * Per channel, multiply by k = ink/255 is g -> g*k; painting colour c at
 * opacity a is g -> g*(1 - a) + c*a. One opacity serves all channels, so take
 * a = 1 - min(k), exact in that channel, and solve each channel's colour at
 * the grounds' mean. The error then grows with a ground's distance from that
 * mean: within a unit per channel across the grounds passed in, but not on
 * grounds far from them.
 */
function translucent(grounds, ink) {
  const k = rgb(ink).map((v) => v / 255);
  const a = 1 - Math.min(...k);
  const mean = [0, 1, 2].map((i) => grounds.reduce((s, g) => s + rgb(g)[i], 0) / grounds.length);
  const color = hex(mean.map((g, i) => (g * (k[i] - 1 + a)) / a));
  return { color, opacity: Math.round(a * 1000) / 1000 };
}

const GLOBAL = 'global/global.css';
const HERO = 'blocks/HeroBento.module.css';
const SPOTLIGHTS = 'blocks/AppSpotlights.module.css';

// Each section ground (components/Section.module.css) and its ink.
const TILES = {
  normal: { color: multiply(cssColor(GLOBAL, 'butter-pale'), '#fdf0cf') },
  alternate: { color: multiply(cssColor(GLOBAL, 'foam-pale'), '#f1e8fd') },
  butter: { color: multiply(cssColor(GLOBAL, 'butter'), '#fff1c8') },
  foam: { color: multiply(cssColor(GLOBAL, 'foam'), '#ebe0fc') },
  // Hero: the doodle crosses both the foam ground and the deeper blobs.
  hero: translucent([cssColor(GLOBAL, 'foam'), cssColor(HERO, 'blob')], '#e5d6fb'),
  // App spotlights: each on a pale ground in its app's accent.
  motionbuff: { color: multiply(cssColor(SPOTLIGHTS, 'motionbuff-ground'), '#efe5fd') },
  filebuff: { color: multiply(cssColor(SPOTLIGHTS, 'filebuff-ground'), '#fdeccc') },
  paperbuff: { color: multiply(cssColor(SPOTLIGHTS, 'paperbuff-ground'), '#e2f0fb') },
  screenbuff: { color: multiply(cssColor(SPOTLIGHTS, 'screenbuff-ground'), '#fde2e2') },
};

// The master draws in exactly #000; match that colour only, not #000000 etc.
const INK = /#000(?![0-9a-f])/gi;
const master = read('public/pattern-doodle.svg');
if (!INK.test(master)) throw new Error('build-doodles: master tile has no #000 to tint');

mkdirSync(join(root, 'public/doodle'), { recursive: true });

for (const [name, { color, opacity }] of Object.entries(TILES)) {
  let svg = master.replace(/<!--[\s\S]*?-->\s*/g, '').replace(INK, color);
  if (opacity !== undefined) {
    // One group opacity so overlapping strokes don't stack darker.
    svg = svg
      .replace(/(<svg[^>]*>)/, `$1<g opacity="${opacity}">`)
      .replace('</svg>', '</g></svg>');
  }
  writeFileSync(join(root, `public/doodle/${name}.svg`), svg);
  console.log(`public/doodle/${name}.svg  ${color}${opacity !== undefined ? ` @ ${opacity}` : ''}`);
}
