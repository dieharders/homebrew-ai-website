'use client';

import styles from './FilterPills.module.css';
import { cx } from '../utils/common';

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
    <div className={cx(styles.container, className)}>
      {options.map((option) => (
        <button
          key={option.id}
          className={cx(styles.pill, option.id === activeId && styles.active)}
          onClick={() => onChange(option.id)}
          type="button"
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
