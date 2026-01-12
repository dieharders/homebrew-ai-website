import Section from '../components/Section';
import { cn } from '../utils/common';
import { ReactNode } from 'react';

export default function Features(p: {
  id?: string,
  className?: string,
  title: string,
  subtitle: string,
  children?: ReactNode[],
  background?: 'normal' | 'alternate',
}) {
  return (
    <Section
      id={p.id}
      className={cn("flex flex-col", p.className)}
      background={p.background}
    >
      <div className="max-w-[700px] mx-auto mb-16">
        <h2 className={cn(
          "text-[clamp(2.25rem,5vw,3rem)] font-bold leading-[1.15] tracking-wide",
          "text-center mb-4"
        )}>
          {p.title}
        </h2>
        <p className="text-base font-normal leading-[1.6] tracking-tight text-center text-text-shade">
          {p.subtitle}
        </p>
      </div>

      {p?.children && (
        <div className={cn(
          "text-text text-xl mb-2 flex flex-col gap-4",
          "items-center justify-start text-left w-full max-w-fit"
        )}>
          {p?.children.map((i, ind) => (
            <div key={ind} className="w-full">{i}</div>
          ))}
        </div>
      )}
    </Section>
  );
}
