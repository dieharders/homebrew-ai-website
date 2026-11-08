/**
 * Icons for the OpenBrew app suite. Apps with a finished 3D mark load it from
 * public/icons/ (see MarkImage); the rest are still the inline-SVG mascots,
 * which stay crisp at any size and ship in the server-rendered HTML alongside
 * the app links.
 */

const INK = "#1a1a1a";

export type AppIconProps = { className?: string; title?: string };

const svgProps = {
  viewBox: "0 0 24 24",
  width: "70%",
  height: "70%",
} as const;

/**
 * These icons sit next to their app's name, so by default they're decorative
 * and hidden from assistive tech. A caller that passes a `title` wants it
 * announced instead — `role="img"` plus the `<title>` child names the icon.
 */
const a11yProps = (title?: string) =>
  title ? ({ role: "img" } as const) : ({ "aria-hidden": true } as const);

/**
 * An app's real 3D mark from public/icons/. Loaded as an image rather than
 * inlined: the SVGs define gradient ids, and inlining one in several places at
 * once (header menu, suite card, spotlight) would duplicate them, and gradients
 * defined inside the hidden header menu can fail to paint. Each mark is its own
 * tile, so it fills the icon box instead of sitting at 70%.
 */
function MarkImage({ src, ...p }: AppIconProps & { src: string }) {
  return (
    <img
      src={src}
      alt={p.title ?? ""}
      aria-hidden={p.title ? undefined : true}
      width="100%"
      height="100%"
      className={p.className}
      draggable={false}
    />
  );
}

/** FileBuff's mark: an extruded folder on an amber hexagon. */
export function FileBuffIcon(p: AppIconProps) {
  return <MarkImage src="/icons/filebuff.svg" {...p} />;
}

export function ScreenBuffIcon(p: AppIconProps) {
  return (
    <svg {...svgProps} className={p.className} {...a11yProps(p.title)}>
      {p.title && <title>{p.title}</title>}
      {/* Screen body */}
      <rect
        x="2"
        y="5"
        width="16"
        height="14"
        rx="2"
        fill="#c084fc"
        stroke={INK}
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      {/* Lens */}
      <path
        d="M18 9l4-3v12l-4-3V9z"
        fill="#d8b4fe"
        stroke={INK}
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      {/* Eyes */}
      <circle cx="7" cy="11" r="1.4" fill={INK} />
      <circle cx="13" cy="11" r="1.4" fill={INK} />
      {/* Eye shine */}
      <circle cx="7.5" cy="10.5" r="0.5" fill="white" />
      <circle cx="13.5" cy="10.5" r="0.5" fill="white" />
      {/* Smile */}
      <path
        d="M7.5 14.5Q10 16.5 12.5 14.5"
        fill="none"
        stroke={INK}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** MotionBuff's mark (the same design source as its favicon). */
export function MotionBuffIcon(p: AppIconProps) {
  return <MarkImage src="/icons/motionbuff.svg" {...p} />;
}

/** PaperBuff's mark: an extruded, dog-eared page on a sky-blue speech bubble. */
export function PaperBuffIcon(p: AppIconProps) {
  return <MarkImage src="/icons/paperbuff.svg" {...p} />;
}
