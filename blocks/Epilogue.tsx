import Section, { T_Background } from '@/components/Section';
import { cn } from '../utils/common';

export default function Epilogue(p: {
  id?: string,
  className?: string,
  title: string,
  subtitle1: string,
  subtitle2: string,
  illustration: any,
  background?: T_Background,
  children?: React.ReactNode,
}) {
  return (
    <Section
      id={p.id}
      className={cn("py-32 overflow-hidden", p.className)}
      background={p.background}
    >
      <div className="relative flex items-center justify-center mx-auto">
        <div className={cn(
          "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
          "w-[28rem] h-[28rem]",
          "bg-[radial-gradient(ellipse_at_center,var(--accent-normal)_0%,transparent_60%)]",
          "opacity-50"
        )} />
        <div
          className="relative w-full max-w-[200px] h-[200px] bg-gray-200"
          style={p.illustration}
        />
      </div>
      <div className="flex flex-col gap-4 max-w-[600px] mx-auto mt-10">
        <h2 className="font-lilita text-text text-[clamp(2rem,4vw,2.5rem)] font-normal leading-[1.15] tracking-wide text-center">
          {p.title}
        </h2>
        <h4 className="text-xl font-normal leading-[1.6] tracking-tight text-center text-text">
          {p.subtitle1}
        </h4>
        {p.children}
        <p className="text-base font-normal leading-[1.6] tracking-tight text-center text-text-shade">
          {p.subtitle2}
        </p>
      </div>
    </Section>
  );
}
