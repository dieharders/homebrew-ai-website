"use client";

import { useState, useMemo } from "react";
import Section from "@/components/Section";
import FilterPills from "@/components/FilterPills";
import CategoryTabs from "@/components/CategoryTabs";
import AccordionCard from "@/components/AccordionCard";
import Button from "@/components/Button";
import { cn } from "@/utils/common";

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
      <div className="text-left mb-8">
        <div className="w-[60px] h-[3px] bg-accent-gold-line rounded-sm mb-6" />
        <h2 className="font-lilita text-[clamp(1.75rem,4vw,2.25rem)] font-normal tracking-wide m-0 mb-3 text-text">
          {title}
        </h2>
        {subtitle && (
          <p className="text-[1.05rem] text-text-shade m-0 mb-6 max-w-[550px] leading-[1.6]">
            {subtitle}
          </p>
        )}
        <FilterPills
          options={filterGroups.map((g) => ({ id: g.id, label: g.label }))}
          activeId={activeGroupId}
          onChange={handleGroupChange}
          className="mb-0"
        />
      </div>

      <CategoryTabs
        categories={categories}
        activeId={activeCategoryId}
        onChange={handleCategoryChange}
        className="mb-8"
      />

      <div className="flex gap-8 items-start">
        <div className="grow flex flex-col gap-4">
          {filteredUseCases.length === 0 ? (
            <p className="p-8 text-center text-text-shade bg-background rounded-2xl border border-dashed border-gray-200">
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
          <aside className="w-[280px] shrink-0 hidden min-[900px]:block">
            <div className={cn(
              "bg-background rounded-2xl border border-gray-200 p-6",
              "sticky top-[calc(52px+4rem)] shadow-sm"
            )}>
              <div className={cn(
                "w-12 h-12 rounded-[10px] flex items-center justify-center mb-4",
                "bg-gradient-to-br from-accent-light to-accent-normal text-accent-dark",
                "shadow-[0_2px_8px_var(--accent-gold-glow)]"
              )}>
                <img src="/worker.svg" alt="" width="42" height="42" />
              </div>
              <h3 className="font-lilita text-lg font-normal m-0 mb-2 text-text tracking-wide">
                {sidebarCTA.title}
              </h3>
              <p className="text-sm text-text-shade leading-[1.6] m-0 mb-4">
                {sidebarCTA.description}
              </p>
              <Button
                href={sidebarCTA.buttonHref}
                type="primary"
                size="large"
                location="body"
                className="w-full"
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
