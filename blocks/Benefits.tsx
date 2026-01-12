import Section from '../components/Section';
import { cn } from '../utils/common';

export default function Benefits(p: {
  id?: string,
  className?: string,
  title: string,
  subtitle: string,
  benefits: {
    title: string,
    text: string,
    illustration: any,
  }[],
  background?: 'normal' | 'alternate',
}) {
  return (
    <Section id={p.id} className={p.className} background={p.background}>
      <div className="max-w-[700px] mx-auto">
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

      <ul className={cn(
        "relative flex flex-col flex-nowrap items-center gap-32 p-0 m-0",
        "lg:flex-row lg:items-stretch lg:justify-stretch lg:gap-16"
      )}>
        {p.benefits.map((item) => (
          <li
            key={item.title}
            className={cn(
              "relative flex flex-col max-w-[450px] w-full m-0 p-0",
              "lg:flex-1"
            )}
          >
            <div className="block relative self-center">
              <div className={cn(
                "absolute block left-0 top-0 max-w-72 max-h-72 w-[50vw] h-[50vw]",
                "bg-[radial-gradient(ellipse_at_center,var(--accent-normal)_25%,transparent_70%)]",
                "lg:w-72 lg:h-72"
              )} />
              <div
                className="relative max-w-72 max-h-72 w-[50vw] h-[50vw] lg:w-72 lg:h-72"
                style={item.illustration}
              />
            </div>
            <div className="mt-6 text-center overflow-hidden">
              <h1 className="text-[clamp(1.5rem,3vw,1.75rem)] font-semibold tracking-tight mb-2">
                {item.title}
              </h1>
              <p className="text-text-shade text-xl font-normal leading-[1.6] tracking-tight">
                {item.text}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
