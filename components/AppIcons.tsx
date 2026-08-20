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

export function FileBuffIcon(p: AppIconProps) {
  return (
    <svg {...svgProps} className={p.className} role="img" aria-hidden="true">
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
    <svg {...svgProps} className={p.className} role="img" aria-hidden="true">
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

export function MotionBuffIcon(p: AppIconProps) {
  return (
    <svg {...svgProps} className={p.className} role="img" aria-hidden="true">
      {p.title && <title>{p.title}</title>}
      {/* Screen/board */}
      <rect
        x="3"
        y="2"
        width="18"
        height="14"
        rx="2"
        fill="#fb923c"
        stroke={INK}
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      {/* Stand */}
      <line
        x1="12"
        y1="16"
        x2="12"
        y2="20"
        stroke={INK}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <line
        x1="8"
        y1="20"
        x2="16"
        y2="20"
        stroke={INK}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Eyes */}
      <circle cx="9" cy="8" r="1.4" fill={INK} />
      <circle cx="15" cy="8" r="1.4" fill={INK} />
      {/* Eye shine */}
      <circle cx="9.5" cy="7.5" r="0.5" fill="white" />
      <circle cx="15.5" cy="7.5" r="0.5" fill="white" />
      {/* Smile */}
      <path
        d="M9.5 12Q12 14 14.5 12"
        fill="none"
        stroke={INK}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function PaperBuffIcon(p: AppIconProps) {
  return (
    <svg {...svgProps} className={p.className} role="img" aria-hidden="true">
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
