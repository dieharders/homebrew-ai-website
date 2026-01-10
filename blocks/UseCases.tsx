"use client";

import { useState, useMemo } from "react";
import styles from "./UseCases.module.css";
import Section from "@/components/Section";
import FilterPills from "@/components/FilterPills";
import CategoryTabs from "@/components/CategoryTabs";
import AccordionCard from "@/components/AccordionCard";
import Button from "@/components/Button";

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
  const [activeGroupId, setActiveGroupId] = useState(filterGroups[0]?.id || "");
  const [activeCategoryId, setActiveCategoryId] = useState("all");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const activeGroup = filterGroups.find((g) => g.id === activeGroupId);
  const categories = [
    { id: "all", label: "All" },
    ...(activeGroup?.categories || []),
  ];

  const filteredUseCases = useMemo(() => {
    return useCases.filter((uc) => {
      const matchesGroup = uc.groupId === activeGroupId;
      const matchesCategory =
        activeCategoryId === "all" || uc.categoryId === activeCategoryId;
      return matchesGroup && matchesCategory;
    });
  }, [useCases, activeGroupId, activeCategoryId]);

  const handleGroupChange = (id: string) => {
    setActiveGroupId(id);
    setActiveCategoryId("all");
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
            <p className={styles.empty}>
              No use cases found for this category.
            </p>
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
                <img src="/worker.svg" alt="" width="42" height="42" />
              </div>
              <h3 className={styles.sidebarTitle}>{sidebarCTA.title}</h3>
              <p className={styles.sidebarDescription}>
                {sidebarCTA.description}
              </p>
              <Button
                href={sidebarCTA.buttonHref}
                type="primary"
                size="large"
                location="body"
                className={styles.sidebarButton}
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
