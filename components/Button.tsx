import Link from 'next/link';
import { cn } from '../utils/common';

export type T_Location = 'body' | 'accent' | 'highlight';

const sizeClasses = {
  small: "inline-flex items-center h-8 px-3 text-xs rounded-md",
  normal: "inline-flex items-center h-9 px-4 text-sm",
  large: "h-12 px-8 text-base",
  xl: "inline-flex items-center min-h-[52px] px-10 text-[1.05rem]",
};

const typeLocationClasses = {
  'primary-body': cn(
    "text-text-accent bg-button shadow-[0_2px_8px_rgba(0,0,0,0.15)]",
    "hover:-translate-y-0.5 hover:text-accent-gold-line hover:bg-button-hover hover:shadow-[0_4px_12px_rgba(0,0,0,0.2)]",
    "active:translate-y-0 active:shadow-[0_1px_4px_rgba(0,0,0,0.15)]"
  ),
  'primary-accent': cn(
    "text-button bg-text-accent shadow-[0_2px_8px_rgba(255,255,255,0.15)]",
    "hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(255,255,255,0.25)]",
    "active:translate-y-0 active:shadow-[0_1px_4px_rgba(255,255,255,0.15)]"
  ),
  'primary-highlight': cn(
    "text-[#1a1a2e] bg-accent-btn shadow-[0_4px_16px_var(--accent-gold-glow)]",
    "hover:-translate-y-0.5 hover:bg-[#ffe066] hover:shadow-[0_6px_20px_rgba(255,212,59,0.4)]",
    "active:translate-y-0 active:shadow-[0_2px_8px_var(--accent-gold-glow)]"
  ),
  'secondary-body': cn(
    "bg-transparent border-2 border-button text-button",
    "hover:-translate-y-0.5 hover:bg-gray-800/5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)]",
    "active:translate-y-0 active:shadow-none"
  ),
  'secondary-accent': cn(
    "bg-transparent border-2 border-white/80 text-text-accent",
    "hover:-translate-y-0.5 hover:bg-white/10 hover:border-text-accent hover:shadow-[0_4px_12px_rgba(255,255,255,0.1)]",
    "active:translate-y-0 active:shadow-none"
  ),
  'secondary-highlight': "",
};

export default function Button(p: {
  size?: 'xl' | 'large' | 'normal' | 'small',
  type?: 'primary' | 'secondary' | 'custom',
  location?: T_Location,
  title?: string,
  href?: string,
  target?: '_blank' | '_self',
  rel?: string,
  onClick?(): void,
  className?: string,
  children: React.ReactNode,
}) {
  const size = p.size ?? 'normal';
  const type = p.type ?? 'primary';
  const location = p.location ?? 'body';

  const className = type === 'custom'
    ? p.className
    : cn(
        "relative rounded-[10px] font-semibold inline-flex items-center justify-center",
        "transition-all duration-150 ease-out top-0 border-none cursor-pointer",
        "select-none text-center leading-snug whitespace-nowrap overflow-hidden",
        sizeClasses[size],
        typeLocationClasses[`${type}-${location}` as keyof typeof typeLocationClasses],
        p.className,
      );

  if (p.href) {
    // Use Next.js Link for internal navigation (faster client-side routing)
    const isInternal = p.href.startsWith('/') || p.href.startsWith('#');

    if (isInternal && !p.target) {
      return (
        <Link className={className} href={p.href} title={p.title || ""} onClick={p.onClick}>
          {p.children}
        </Link>
      );
    }

    // Use regular anchor for external links or when target is specified
    return (
      <a className={className} href={p.href} target={p.target} rel={p.rel} title={p.title || ""} onClick={p.onClick}>
        {p.children}
      </a>
    );
  }

  return (
    <button className={className} onClick={p.onClick}>
      {p.children}
    </button>
  )
}
