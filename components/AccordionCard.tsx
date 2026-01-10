'use client';

import { useRef, useEffect } from 'react';
import styles from './AccordionCard.module.css';
import { cx } from '../utils/common';
import VideoPlayer from './VideoPlayer';

interface AccordionCardProps {
  title: string;
  summary: string;
  expanded: boolean;
  onToggle: () => void;
  videoSrc?: string;
  children?: React.ReactNode;
  className?: string;
}

export default function AccordionCard({
  title,
  summary,
  expanded,
  onToggle,
  videoSrc,
  children,
  className,
}: AccordionCardProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      if (expanded) {
        contentRef.current.style.maxHeight = contentRef.current.scrollHeight + 'px';
      } else {
        contentRef.current.style.maxHeight = '0px';
      }
    }
  }, [expanded]);

  return (
    <div className={cx(styles.card, expanded && styles.expanded, className)}>
      <button
        className={styles.header}
        onClick={onToggle}
        type="button"
        aria-expanded={expanded}
      >
        <div className={styles.headerContent}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.summary}>{summary}</p>
        </div>
        <span className={styles.icon}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d={expanded ? 'M5 12.5l5-5 5 5' : 'M5 7.5l5 5 5-5'} />
          </svg>
        </span>
      </button>
      <div ref={contentRef} className={styles.content}>
        <div className={styles.contentInner}>
          {videoSrc && (
            <div className={styles.video}>
              <VideoPlayer
                src={videoSrc}
                autoPlay={expanded}
                loop
                muted
                controls={false}
                aspectRatio="16/9"
              />
            </div>
          )}
          {children && <div className={styles.description}>{children}</div>}
        </div>
      </div>
    </div>
  );
}
