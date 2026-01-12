'use client';

import { cn } from '../utils/common';

interface Category {
  id: string;
  label: string;
}

interface CategoryTabsProps {
  categories: Category[];
  activeId: string;
  onChange: (id: string) => void;
  className?: string;
}

export default function CategoryTabs({
  categories,
  activeId,
  onChange,
  className,
}: CategoryTabsProps) {
  return (
    <nav className={cn(
      "flex items-center gap-2 border-b border-gray-200",
      className
    )}>
      <ul className={cn(
        "flex list-none m-0 p-0 gap-0 overflow-x-auto flex-grow",
        "scrollbar-none [&::-webkit-scrollbar]:hidden"
      )}>
        {categories.map((category) => (
          <li key={category.id} className="shrink-0">
            <button
              className={cn(
                "block py-3 px-5 border-none bg-transparent",
                "text-sm font-medium text-text-shade cursor-pointer",
                "relative transition-colors duration-300 ease-out whitespace-nowrap",
                "after:content-[''] after:absolute after:bottom-[-1px] after:left-0 after:right-0",
                "after:h-0.5 after:bg-transparent after:transition-colors after:duration-300 after:ease-out",
                "hover:text-text",
                category.id === activeId && "text-text after:bg-accent-gold-line"
              )}
              onClick={() => onChange(category.id)}
              type="button"
            >
              {category.label}
            </button>
          </li>
        ))}
      </ul>
      <button
        className={cn(
          "hidden items-center justify-center w-8 h-8 border-none rounded-full",
          "bg-background-alternate text-text-shade cursor-pointer shrink-0",
          "transition-all duration-300 ease-out",
          "hover:bg-accent-light hover:text-text",
          "max-[620px]:flex"
        )}
        aria-label="Scroll right"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 4l4 4-4 4" />
        </svg>
      </button>
    </nav>
  );
}
