import { cn } from "@/utils/common";
import Section from "@/components/Section";
import Button from "@/components/Button";

interface DarkCTAProps {
  id?: string;
  label?: string;
  title: string;
  subtitle?: string;
  primaryButton: { text: string; href: string };
  secondaryButton?: { text: string; href: string };
  className?: string;
}

export default function DarkCTA({
  id,
  label,
  title,
  subtitle,
  primaryButton,
  secondaryButton,
  className,
}: DarkCTAProps) {
  return (
    <Section
      id={id}
      background="dark-navy"
      size="wide"
      pattern="geometric"
      accentLine="none"
      className={cn("relative", className)}
    >
      <div className={cn(
        "flex flex-col items-start gap-8",
        "md:flex-row md:items-center md:justify-between md:gap-16"
      )}>
        <div className="max-w-[640px]">
          {label && (
            <span className="inline-block text-[0.8rem] font-semibold text-accent-btn uppercase tracking-widest mb-3">
              {label}
            </span>
          )}
          <h2 className="font-lilita text-[clamp(1.75rem,4vw,2.25rem)] font-normal tracking-wide m-0 mb-3 text-text-accent leading-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-[1.05rem] text-text-accent-shade m-0 leading-[1.7] opacity-90">
              {subtitle}
            </p>
          )}
        </div>
        <div className="flex flex-wrap gap-4 md:shrink-0">
          <Button
            href={primaryButton.href}
            type="primary"
            size="large"
            location="accent"
          >
            {primaryButton.text}
          </Button>
          {secondaryButton && (
            <Button
              href={secondaryButton.href}
              type="secondary"
              size="large"
              location="accent"
            >
              {secondaryButton.text}
            </Button>
          )}
        </div>
      </div>
    </Section>
  );
}
