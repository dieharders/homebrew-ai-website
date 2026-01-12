import Link from 'next/link';
import { cn } from '../utils/common';

interface ExploreLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'light';
}

const variantClasses = {
  default: "text-accent-dark hover:text-gray-800",
  light: "text-text-accent hover:text-accent-normal",
};

export default function ExploreLink({
  href,
  children,
  className,
  variant = 'default',
}: ExploreLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-2 font-semibold text-[0.95rem]",
        "transition-all duration-300 ease-out hover:gap-3",
        variantClasses[variant],
        className
      )}
    >
      <span>{children}</span>
      <svg
        className="transition-transform duration-300 ease-out group-hover:translate-x-0.5"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 8h10M9 4l4 4-4 4" />
      </svg>
    </Link>
  );
}
