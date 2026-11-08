/**
 * Mascot icons for the OpenBrew app suite. Inline SVG (not images) so they
 * stay crisp at any size and ship in the server-rendered HTML alongside the
 * app links that point at each subdomain.
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

export function FileBuffIcon(p: AppIconProps) {
  return (
    <svg {...svgProps} className={p.className} {...a11yProps(p.title)}>
      {p.title && <title>{p.title}</title>}
      {/* Folder body */}
      <path
        d="M20 6h-8l-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"
        fill="#fbbf24"
        stroke={INK}
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      {/* Tab highlight */}
      <path
        d="M4 4h6l2 2H4z"
        fill="#fcd34d"
        stroke={INK}
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      {/* Eyes */}
      <circle cx="9" cy="12" r="1.4" fill={INK} />
      <circle cx="15" cy="12" r="1.4" fill={INK} />
      {/* Eye shine */}
      <circle cx="9.5" cy="11.5" r="0.5" fill="white" />
      <circle cx="15.5" cy="11.5" r="0.5" fill="white" />
      {/* Smile */}
      <path
        d="M9.5 15.5Q12 17.5 14.5 15.5"
        fill="none"
        stroke={INK}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
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

/**
 * MotionBuff's real app mark (public/icons/motionbuff.svg, the same design
 * source as its favicon). Loaded as an image rather than inlined: the SVG
 * defines gradient ids, and inlining it in several places at once (header
 * menu, suite card, spotlight) would duplicate them, and gradients defined
 * inside the hidden header menu can fail to paint. The mark is its own tile,
 * so it fills the icon box instead of sitting at 70%.
 */
export function MotionBuffIcon(p: AppIconProps) {
  return (
    <img
      src="/icons/motionbuff.svg"
      alt={p.title ?? ""}
      aria-hidden={p.title ? undefined : true}
      width="100%"
      height="100%"
      className={p.className}
      draggable={false}
    />
  );
}

export function PaperBuffIcon(p: AppIconProps) {
  return (
    <svg {...svgProps} className={p.className} {...a11yProps(p.title)}>
      {p.title && <title>{p.title}</title>}
      {/* Paper body */}
      <path
        d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6z"
        fill="#38bdf8"
        stroke={INK}
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      {/* Folded corner */}
      <path
        d="M14 2v6h6"
        fill="#bae6fd"
        stroke={INK}
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      {/* Eyes */}
      <circle cx="9" cy="13" r="1.4" fill={INK} />
      <circle cx="15" cy="13" r="1.4" fill={INK} />
      {/* Eye shine */}
      <circle cx="9.5" cy="12.5" r="0.5" fill="white" />
      <circle cx="15.5" cy="12.5" r="0.5" fill="white" />
      {/* Smile */}
      <path
        d="M9.5 16.5Q12 18.5 14.5 16.5"
        fill="none"
        stroke={INK}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}
