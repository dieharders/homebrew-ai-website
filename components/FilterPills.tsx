'use client';

import { cn } from '../utils/common';

interface FilterOption {
  id: string;
  label: string;
}

interface FilterPillsProps {
  options: FilterOption[];
  activeId: string;
  onChange: (id: string) => void;
  className?: string;
}

export default function FilterPills({
  options,
  activeId,
  onChange,
  className,
}: FilterPillsProps) {
  return (
    <div className={cn(
      "inline-flex bg-background-alternate rounded-full p-1 gap-1",
      className
    )}>
      {options.map((option) => (
        <button
          key={option.id}
          className={cn(
            "py-2 px-5 border-none rounded-full text-sm font-medium cursor-pointer",
            "bg-transparent text-text-shade transition-all duration-300 ease-out whitespace-nowrap",
            "hover:text-text hover:bg-white/50",
            option.id === activeId && "bg-accent-btn text-text shadow-sm hover:bg-accent-btn hover:text-text"
          )}
          onClick={() => onChange(option.id)}
          type="button"
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
