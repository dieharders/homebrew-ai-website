"use client";

import { useId, useState, type ReactNode } from "react";
import styles from "./RevealMore.module.css";
import { cx } from "@/utils/common";

/**
 * Collapses its children behind a "Show more" toggle and animates them open.
 *
 * SEO-safe by design: the children are always rendered into the server HTML
 * (never conditionally mounted), and collapsing is purely visual — a 0fr grid
 * row with overflow clipped. Crawlers and LLMs reading the HTML get the full
 * text. While collapsed the region is `inert`, so keyboard and screen-reader
 * users don't land on content they can't see.
 */
export default function RevealMore(p: {
  children: ReactNode;
  moreLabel?: string;
  lessLabel?: string;
  className?: string;
  buttonClassName?: string;
}) {
  const [open, setOpen] = useState(false);
  const id = useId();

  return (
    <div className={p.className}>
      <div
        id={id}
        className={cx(styles.region, open && styles.open)}
        inert={!open}
      >
        <div className={styles.inner}>{p.children}</div>
      </div>

      <button
        type="button"
        className={cx(styles.toggle, p.buttonClassName)}
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((o) => !o)}
      >
        {open ? (p.lessLabel ?? "Show less") : (p.moreLabel ?? "Show more")}
        <svg
          className={styles.chevron}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
    </div>
  );
}
