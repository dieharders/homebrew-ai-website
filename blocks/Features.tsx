import Section, { T_Background, T_Pattern } from '@/components/Section';
import { lilita_one } from 'fonts/fonts';
import { cn } from '../utils/common';
import Image from 'next/image';
import ExploreLink from '@/components/ExploreLink';

export default function Features(p: {
  id?: string,
  className?: string,
  title: string,
  subtitle: string,
  features: {
    title: string,
    text: string,
    illustration?: any,
    icon?: string,
    link?: { text: string; href: string },
  }[],
  background?: T_Background,
  pattern?: T_Pattern,
  accentLine?: 'top' | 'bottom' | 'both' | 'none',
}) {
  return (
    <Section
      id={p.id}
      className={p.className}
      background={p.background}
      pattern={p.pattern}
      accentLine={p.accentLine}
    >
      <div className="max-w-[700px] mx-auto mb-16 overflow-hidden">
        <div className="w-[60px] h-[3px] bg-accent-gold-line rounded-sm mx-auto mb-6" />
        <h2 className={cn(
          lilita_one.className,
          "text-[clamp(2.25rem,5vw,3rem)] font-normal leading-[1.15] tracking-wide text-center mb-4"
        )}>
          {p.title}
        </h2>
        <p className="text-xl font-normal leading-[1.6] tracking-tight text-center text-text-shade max-w-[540px] mx-auto">
          {p.subtitle}
        </p>
      </div>

      <ul className={cn(
        "relative grid grid-cols-1 gap-8 w-full p-0 m-0 list-none",
        "min-[480px]:grid-cols-2",
        "min-[800px]:grid-cols-3"
      )}>
        {p.features.map((item) => (
          <li
            key={item.title}
            className={cn(
              "relative flex flex-col items-center text-center p-8",
              "bg-background rounded-2xl border border-gray-200",
              "transition-all duration-300 ease-out",
              "hover:-translate-y-1 hover:shadow-card-hover hover:border-accent-normal"
            )}
          >
            {item?.illustration && (
              <div
                className="w-full h-40 bg-gray-200 rounded-2xl"
                style={item?.illustration}
              />
            )}
            {item?.icon && (
              <Image
                className={cn(
                  "w-14 h-14 flex items-center justify-center mx-auto mb-4",
                  "bg-accent-gold-glow rounded-[10px] shadow-[0_0_24px_12px_var(--accent-gold-glow)]",
                  "[&_img]:w-8 [&_img]:h-8 [&_img]:object-contain"
                )}
                src={item?.icon}
                alt={`${item.title} icon`}
                width={64}
                height={64}
                sizes="32px"
              />
            )}
            <div className="mt-2">
              <h3 className="text-xl font-semibold leading-[1.3] tracking-tight mb-2 text-text">
                {item.title}
              </h3>
              <p className="text-text-shade text-[0.95rem] leading-[1.6]">
                {item.text}
              </p>
              {item?.link && (
                <ExploreLink href={item.link.href} className="inline-flex mt-4 justify-center">
                  {item.link.text}
                </ExploreLink>
              )}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
