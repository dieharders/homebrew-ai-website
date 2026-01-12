import Section, { T_Background, T_Pattern } from "@/components/Section";
import { lilita_one } from "fonts/fonts";
import { cn } from "../utils/common";
import VideoPlayer from "@/components/VideoPlayer";
import ExploreLink from "@/components/ExploreLink";

export default function Highlights(p: {
  id?: string;
  className?: string;
  title: string;
  subtitle: string;
  highlights: {
    title: string;
    text: string;
    illustration?: any;
    videoSrc?: string;
    link?: { text: string; href: string };
  }[];
  background?: T_Background;
  pattern?: T_Pattern;
  accentLine?: "top" | "bottom" | "both" | "none";
}) {
  return (
    <Section
      id={p.id}
      className={cn("relative", p.className)}
      background={p.background}
      pattern={p.pattern}
      accentLine={p.accentLine}
    >
      <div className="max-w-[700px] mx-auto mb-24 overflow-hidden">
        <div className="w-[60px] h-[3px] bg-accent-gold-line rounded-sm mx-auto mb-6" />
        <h2 className={cn(
          lilita_one.className,
          "text-[clamp(2.25rem,5vw,3rem)] font-normal leading-[1.15] tracking-wide text-center mb-4"
        )}>
          {p.title}
        </h2>
        <p className="text-xl font-normal leading-[1.6] tracking-tight text-center text-text-shade max-w-[600px] mx-auto">
          {p.subtitle}
        </p>
      </div>

      <ul className="list-none p-0 m-0">
        {p.highlights.map((item, i) => (
          <li
            key={item.title}
            className={cn(
              "flex relative flex-col items-center max-w-[450px] mx-auto mb-32 gap-8",
              "last:mb-0",
              "md:flex-row md:items-center md:justify-between md:max-w-none md:gap-16",
              i % 2 === 1 && "md:flex-row-reverse"
            )}
          >
            <div className="relative w-full max-w-[480px] min-h-[280px] md:shrink-0">
              <div className={cn(
                "block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
                "max-w-[34rem] max-h-[34rem] w-[70vw] h-[70vw]",
                "bg-[radial-gradient(ellipse_at_center,var(--accent-normal)_20%,transparent_65%)]",
                "opacity-60 z-0"
              )} />
              {item.videoSrc ? (
                <div className="relative z-[1] rounded-2xl overflow-hidden shadow-card border border-gray-200">
                  <VideoPlayer
                    src={item.videoSrc}
                    autoPlay
                    loop
                    muted
                    aspectRatio="4/3"
                    lazy
                  />
                </div>
              ) : item.illustration ? (
                <div
                  className="relative block"
                  style={item.illustration}
                />
              ) : null}
            </div>
            <div className="z-10 overflow-hidden text-center md:flex-1 md:text-left">
              <h3 className="font-lilita text-5xl font-bold leading-[1.15] tracking-wide mb-4 text-text">
                {item.title}
              </h3>
              <p className="text-text-shade text-[1.05rem] leading-[1.7] max-w-[480px] mx-auto md:mx-0">
                {item.text}
              </p>
              {item.link && (
                <ExploreLink href={item.link.href} className="mt-6">
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
