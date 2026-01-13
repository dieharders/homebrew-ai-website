'use client';

import { useState } from 'react';
import styles from './VideoShowcase.module.css';
import { cx } from '@/utils/common';
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
  videos: Video[];
  className?: string;
}

export default function VideoShowcase({
  id,
  videos,
  className,
}: VideoShowcaseProps) {
  const [activeVideoId, setActiveVideoId] = useState(videos[0]?.id || '');

  const activeVideo = videos.find((v) => v.id === activeVideoId);

  return (
    <Section id={id} background="normal" size="normal" className={className}>
      <div className={styles.header}>
        <div className={styles.accentLine} />
        <h2 className={styles.title}>{activeVideo?.title}</h2>
        {activeVideo && <p className={styles.subtitle}>{activeVideo.description}</p>}
      </div>

      <div className={styles.content}>
        <div className={styles.videoArea}>
          {activeVideo && (
            <VideoPlayer
              key={activeVideo.id}
              src={activeVideo.src}
              autoPlay
              loop
              muted
              controls
              aspectRatio="4/3"
              className={styles.mainVideo}
            />
          )}
        </div>

        <div className={styles.videoList}>
          {videos.map((video) => (
            <button
              key={video.id}
              className={cx(styles.videoItem, video.id === activeVideoId && styles.active)}
              onClick={() => setActiveVideoId(video.id)}
              type="button"
            >
              <div className={styles.thumbnail}>
                <video
                  src={video.src}
                  muted
                  preload="metadata"
                  className={styles.thumbnailVideo}
                />
                <div className={styles.playIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <div className={styles.itemInfo}>
                <span className={styles.itemTitle}>{video.title}</span>
                <span className={styles.itemDescription}>{video.description}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </Section>
  );
}
