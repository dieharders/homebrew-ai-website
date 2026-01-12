'use client'

import Section, { T_Background } from '../components/Section';
import { cn } from '../utils/common';
import Button, { T_Location } from '../components/Button';

export default function Break(p: {
  id?: string,
  className?: string,
  title: string,
  subtitle: string,
  action?: string,
  actionHref?: string,
  location?: T_Location,
  background?: T_Background,
  illustration: any
}) {
  return (
    <Section
      id={p.id}
      className={cn("my-48", p.className)}
      size="narrow"
      background={p.background || "accent-alt-1"}
    >
      <div className="text-center overflow-hidden md:flex md:items-center md:text-left">
        {/* Poster */}
        <div
          className="h-20 bg-white rounded-lg mx-auto md:w-20 md:h-20"
          style={p.illustration}
        />
        <div className="flex-1 my-8 md:my-0 md:mx-6">
          <h1 className={cn(
            "text-[clamp(1.5rem,3vw,1.75rem)] font-semibold tracking-tight mb-3 text-text"
          )}>
            {p.title}
          </h1>
          <p className="text-xl font-normal leading-7 tracking-tight text-text-shade">
            {p.subtitle}
          </p>
        </div>
        {p.action && (
          <Button
            href={p.actionHref}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            size="xl"
            type="primary"
            location={p.location || "accent"}
          >
            {p.action}
          </Button>
        )}
      </div>
    </Section>
  );
}
