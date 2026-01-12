'use client';

import { useState } from 'react';
import { cn } from '@/utils/common';
import Section from '@/components/Section';
import VideoPlayer from '@/components/VideoPlayer';

interface Video {
  id: string;
  title: string;
  description: string;
  src: string;
}

interface VideoShowcaseProps {
  id?: string;
  title: string;
  subtitle?: string;
  videos: Video[];
  className?: string;
}

export default function VideoShowcase({
  id,
  title,
  subtitle,
  videos,
  className,
}: VideoShowcaseProps) {
  const [activeVideoId, setActiveVideoId] = useState(videos[0]?.id || '');

  const activeVideo = videos.find((v) => v.id === activeVideoId);

  return (
    <Section id={id} background="normal" size="normal" className={className}>
      <div className="text-left mb-8">
        <div className="w-[60px] h-[3px] bg-accent-gold-line rounded-sm mb-6" />
        <h2 className="font-lilita text-[clamp(1.75rem,4vw,2.25rem)] font-normal tracking-wide m-0 mb-3 text-text">
          {title}
        </h2>
        {subtitle && (
          <p className="text-[1.05rem] text-text-shade m-0 leading-[1.6] w-full">
            {subtitle}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-8 min-[900px]:flex-row">
        <div className="grow min-[900px]:flex-1 min-[900px]:max-w-[calc(100%-220px)]">
          {activeVideo && (
            <VideoPlayer
              key={activeVideo.id}
              src={activeVideo.src}
              autoPlay
              loop
              muted
              controls
              aspectRatio="4/3"
              className="mb-4"
            />
          )}
          {activeVideo && (
            <div className="px-2">
              <h3 className="font-lilita text-lg font-normal m-0 mb-2 text-text tracking-wide">
                {activeVideo.title}
              </h3>
              <p className="text-[0.95rem] text-text-shade m-0 leading-[1.6]">
                {activeVideo.description}
              </p>
            </div>
          )}
        </div>

        <div className={cn(
          "flex flex-row gap-4 overflow-x-auto py-2 px-1 m-0",
          "scrollbar-thin [-webkit-overflow-scrolling:touch]",
          "min-[900px]:flex-col min-[900px]:w-[200px] min-[900px]:shrink-0",
          "min-[900px]:overflow-x-visible min-[900px]:overflow-y-auto min-[900px]:max-h-[500px] min-[900px]:p-2"
        )}>
          {videos.map((video) => (
            <button
              key={video.id}
              className={cn(
                "group flex flex-col gap-3 p-0 border-none bg-transparent cursor-pointer text-left",
                "shrink-0 w-[180px] opacity-65 transition-opacity duration-300 ease-out",
                "hover:opacity-100",
                "min-[900px]:w-full min-[900px]:flex-row min-[900px]:gap-3",
                video.id === activeVideoId && "opacity-100"
              )}
              onClick={() => setActiveVideoId(video.id)}
              type="button"
            >
              <div className={cn(
                "relative w-full aspect-square rounded-[10px] overflow-hidden",
                "min-[900px]:w-20 min-[900px]:h-20 min-[900px]:shrink-0",
                video.id === activeVideoId && "shadow-[0_0_0_3px_var(--accent-btn)]"
              )}>
                <video
                  src={video.src}
                  muted
                  preload="metadata"
                  className="w-full h-full object-cover"
                />
                <div className={cn(
                  "absolute inset-0 flex items-center justify-center",
                  "bg-black/35 text-white opacity-0 transition-opacity duration-300 ease-out rounded-lg",
                  "group-hover:opacity-100"
                )}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-sm font-semibold text-text leading-snug">
                  {video.title}
                </span>
                <span className="text-xs text-text-shade leading-normal line-clamp-2">
                  {video.description}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </Section>
  );
}
