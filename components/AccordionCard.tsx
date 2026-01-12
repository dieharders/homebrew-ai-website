'use client';

import { useRef, useEffect } from 'react';
import { cn } from '../utils/common';
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
    <div className={cn(
      "bg-background rounded-2xl border border-gray-200 overflow-hidden",
      "transition-all duration-300 ease-out",
      "hover:border-accent-normal",
      expanded && "shadow-card border-accent-normal",
      className
    )}>
      <button
        className={cn(
          "flex items-start justify-between w-full p-6",
          "border-none bg-transparent cursor-pointer text-left gap-4"
        )}
        onClick={onToggle}
        type="button"
        aria-expanded={expanded}
      >
        <div className="grow">
          <h3 className="text-[1.05rem] font-semibold text-text m-0 mb-1 leading-snug">
            {title}
          </h3>
          <p className="text-sm text-text-shade m-0 leading-[1.6]">
            {summary}
          </p>
        </div>
        <span className={cn(
          "flex items-center justify-center w-8 h-8 rounded-full",
          "bg-background-alternate text-text-shade shrink-0",
          "transition-all duration-300 ease-out",
          expanded && "bg-gradient-to-br from-accent-light to-accent-normal text-accent-dark"
        )}>
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
      <div ref={contentRef} className="max-h-0 overflow-hidden transition-[max-height] duration-300 ease-out">
        <div className="px-6 pb-6">
          {videoSrc && expanded && (
            <div className="mb-4 rounded-[10px] overflow-hidden">
              <VideoPlayer
                src={videoSrc}
                autoPlay
                loop
                muted
                controls={false}
                aspectRatio="16/9"
              />
            </div>
          )}
          {children && (
            <div className="text-[0.95rem] leading-[1.7] text-text [&_p]:m-0 [&_p]:mb-3 [&_p:last-child]:mb-0">
              {children}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
