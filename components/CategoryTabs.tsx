'use client';

import styles from './CategoryTabs.module.css';
import { cx } from '../utils/common';

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
    <nav className={cx(styles.container, className)}>
      <ul className={styles.list}>
        {categories.map((category) => (
          <li key={category.id} className={styles.item}>
            <button
              className={cx(styles.tab, category.id === activeId && styles.active)}
              onClick={() => onChange(category.id)}
              type="button"
            >
              {category.label}
            </button>
          </li>
        ))}
      </ul>
      <button className={styles.scrollBtn} aria-label="Scroll right">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 4l4 4-4 4" />
        </svg>
      </button>
    </nav>
  );
}
