import { cn } from '../utils/common';

export type T_Background = 'normal' | 'alternate' | 'accent' | 'accent-alt-1' | 'accent-alt-2' | 'dark' | 'dark-navy' | 'dark-charcoal';
export type T_Pattern = 'none' | 'geometric' | 'dots' | 'lines';

const sizeClasses = {
  normal: cn(
    "py-32 px-4 min-[450px]:px-6",
    "min-[800px]:py-32"
  ),
  narrow: cn(
    "py-8 px-4 min-[450px]:px-6"
  ),
  wide: cn(
    "py-24 px-4 min-[450px]:px-6",
    "min-[800px]:py-32"
  ),
};

const backgroundClasses = {
  normal: "bg-background",
  alternate: "bg-background-alternate",
  accent: "bg-accent text-text-accent",
  'accent-alt-1': "bg-gradient-to-br from-accent-light to-accent-normal text-section-accent-text",
  'accent-alt-2': "bg-gradient-to-br from-background-alternate to-[#e9ecef] text-section-accent-text",
  dark: "bg-background-dark text-text-accent",
  'dark-navy': "bg-gradient-to-br from-background-dark to-background-dark-alt text-text-accent",
  'dark-charcoal': "bg-background-charcoal text-text-accent",
};

const patternStyles = {
  geometric: {
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffd43b' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
  },
  dots: {
    backgroundImage: 'radial-gradient(circle, var(--accent-normal) 1px, transparent 1px)',
    backgroundSize: '32px 32px',
    opacity: 0.12,
  },
  lines: {
    backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 12px, var(--accent-normal) 12px, var(--accent-normal) 13px)',
    opacity: 0.025,
  },
};

const accentLineClasses = {
  top: cn(
    "before:content-[''] before:absolute before:left-1/2 before:-translate-x-1/2 before:top-0",
    "before:w-4/5 before:max-w-[500px] before:h-0.5",
    "before:bg-gradient-to-r before:from-transparent before:via-accent-gold-line before:to-transparent",
    "before:z-[2]"
  ),
  bottom: cn(
    "after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0",
    "after:w-4/5 after:max-w-[500px] after:h-0.5",
    "after:bg-gradient-to-r after:from-transparent after:via-accent-gold-line after:to-transparent",
    "after:z-[2]"
  ),
  both: cn(
    "before:content-[''] before:absolute before:left-1/2 before:-translate-x-1/2 before:top-0",
    "before:w-4/5 before:max-w-[500px] before:h-0.5",
    "before:bg-gradient-to-r before:from-transparent before:via-accent-gold-line before:to-transparent",
    "before:z-[2]",
    "after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0",
    "after:w-4/5 after:max-w-[500px] after:h-0.5",
    "after:bg-gradient-to-r after:from-transparent after:via-accent-gold-line after:to-transparent",
    "after:z-[2]"
  ),
};

export default function Section(p: {
  id?: string,
  className?: string,
  size?: 'normal' | 'narrow' | 'wide',
  background?: T_Background,
  pattern?: T_Pattern,
  accentLine?: 'top' | 'bottom' | 'both' | 'none',
  children: React.ReactNode,
}) {
  const size = p.size ?? 'normal';
  const background = p.background ?? 'normal';
  const pattern = p.pattern ?? 'none';
  const accentLine = p.accentLine ?? 'none';

  return (
    <section
      id={p.id}
      className={cn(
        "relative overflow-hidden",
        sizeClasses[size],
        backgroundClasses[background],
        accentLine !== 'none' && accentLineClasses[accentLine],
        p.className
      )}
    >
      {pattern !== 'none' && (
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={patternStyles[pattern]}
          aria-hidden="true"
        />
      )}
      <div className={cn(
        "block max-w-[1000px] mx-auto w-full relative z-[1]",
        size === 'wide' && "max-w-[1200px]"
      )}>
        {p.children}
      </div>
    </section>
  )
}
