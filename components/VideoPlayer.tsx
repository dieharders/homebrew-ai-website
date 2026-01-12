'use client';

import { useRef, useState, useEffect } from 'react';
import { cn } from '../utils/common';

interface VideoPlayerProps {
  src: string;
  poster?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
  className?: string;
  aspectRatio?: '16/9' | '4/3' | '1/1' | 'auto';
  rounded?: boolean;
  lazy?: boolean;
}

export default function VideoPlayer({
  src,
  poster,
  autoPlay = false,
  loop = true,
  muted = true,
  controls = false,
  className,
  aspectRatio = '16/9',
  rounded = true,
  lazy = false,
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [showControls, setShowControls] = useState(false);
  const [isVisible, setIsVisible] = useState(!lazy);

  // Lazy loading with Intersection Observer
  useEffect(() => {
    if (!lazy || isVisible) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '100px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [lazy, isVisible]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full bg-black overflow-hidden",
        rounded && "rounded-2xl",
        className
      )}
      style={aspectRatio !== 'auto' ? { aspectRatio } : undefined}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      {isVisible && (
        <video
          ref={videoRef}
          className={cn(
            "w-full h-full object-cover block",
            aspectRatio === 'auto' && "h-auto object-contain"
          )}
          src={src}
          poster={poster}
          autoPlay={autoPlay}
          loop={loop}
          muted={muted}
          controls={controls}
          playsInline
          preload={autoPlay ? 'auto' : 'metadata'}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />
      )}
      {!controls && (
        <div
          className={cn(
            "absolute inset-0 flex items-center justify-center",
            "bg-black/30 opacity-0 transition-opacity duration-300 ease-out cursor-pointer",
            showControls && "opacity-100"
          )}
          onClick={togglePlay}
        >
          <button
            className={cn(
              "w-16 h-16 rounded-full bg-accent-btn text-text border-none",
              "flex items-center justify-center cursor-pointer",
              "transition-all duration-300 ease-out shadow-[0_4px_20px_rgba(0,0,0,0.3)]",
              "hover:scale-110 hover:shadow-[0_6px_30px_rgba(0,0,0,0.4)]",
              "active:scale-95"
            )}
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <rect x="6" y="4" width="4" height="16" rx="1" />
                <rect x="14" y="4" width="4" height="16" rx="1" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>
        </div>
      )}
    </div>
  );
}
