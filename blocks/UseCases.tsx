'use client';

import { useState, useMemo } from 'react';
import styles from './UseCases.module.css';
import { cx } from '@/utils/common';
import Section from '@/components/Section';
import FilterPills from '@/components/FilterPills';
import CategoryTabs from '@/components/CategoryTabs';
import AccordionCard from '@/components/AccordionCard';
import Button from '@/components/Button';

interface UseCase {
  id: string;
  categoryId: string;
  groupId: string;
  title: string;
  description: string;
  expandedContent?: string;
  videoSrc?: string;
}

interface FilterGroup {
  id: string;
  label: string;
  categories: { id: string; label: string }[];
}

interface UseCasesProps {
  id?: string;
  title: string;
  subtitle?: string;
  filterGroups: FilterGroup[];
  useCases: UseCase[];
  sidebarCTA?: {
    title: string;
    description: string;
    buttonText: string;
    buttonHref: string;
  };
  className?: string;
}

export default function UseCases({
  id,
  title,
  subtitle,
  filterGroups,
  useCases,
  sidebarCTA,
  className,
}: UseCasesProps) {
  const [activeGroupId, setActiveGroupId] = useState(filterGroups[0]?.id || '');
  const [activeCategoryId, setActiveCategoryId] = useState('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const activeGroup = filterGroups.find((g) => g.id === activeGroupId);
  const categories = [
    { id: 'all', label: 'All' },
    ...(activeGroup?.categories || []),
  ];

  const filteredUseCases = useMemo(() => {
    return useCases.filter((uc) => {
      const matchesGroup = uc.groupId === activeGroupId;
      const matchesCategory = activeCategoryId === 'all' || uc.categoryId === activeCategoryId;
      return matchesGroup && matchesCategory;
    });
  }, [useCases, activeGroupId, activeCategoryId]);

  const handleGroupChange = (id: string) => {
    setActiveGroupId(id);
    setActiveCategoryId('all');
    setExpandedId(null);
  };

  const handleCategoryChange = (id: string) => {
    setActiveCategoryId(id);
    setExpandedId(null);
  };

  return (
    <Section id={id} background="alternate" size="normal" className={className}>
      <div className={styles.header}>
        <div className={styles.accentLine} />
        <h2 className={styles.title}>{title}</h2>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        <FilterPills
          options={filterGroups.map((g) => ({ id: g.id, label: g.label }))}
          activeId={activeGroupId}
          onChange={handleGroupChange}
          className={styles.pills}
        />
      </div>

      <CategoryTabs
        categories={categories}
        activeId={activeCategoryId}
        onChange={handleCategoryChange}
        className={styles.tabs}
      />

      <div className={styles.content}>
        <div className={styles.useCasesList}>
          {filteredUseCases.length === 0 ? (
            <p className={styles.empty}>No use cases found for this category.</p>
          ) : (
            filteredUseCases.map((useCase) => (
              <AccordionCard
                key={useCase.id}
                title={useCase.title}
                summary={useCase.description}
                expanded={expandedId === useCase.id}
                onToggle={() =>
                  setExpandedId(expandedId === useCase.id ? null : useCase.id)
                }
                videoSrc={useCase.videoSrc}
              >
                {useCase.expandedContent && <p>{useCase.expandedContent}</p>}
              </AccordionCard>
            ))
          )}
        </div>

        {sidebarCTA && (
          <aside className={styles.sidebar}>
            <div className={styles.sidebarCard}>
              <div className={styles.sidebarIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </div>
              <h3 className={styles.sidebarTitle}>{sidebarCTA.title}</h3>
              <p className={styles.sidebarDescription}>{sidebarCTA.description}</p>
              <Button
                href={sidebarCTA.buttonHref}
                type="primary"
                size="normal"
                location="body"
              >
                {sidebarCTA.buttonText}
              </Button>
            </div>
          </aside>
        )}
      </div>
    </Section>
  );
}
