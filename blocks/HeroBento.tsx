import { cn } from "@/utils/common";
import Button from "@/components/Button";
import BentoCard from "@/components/BentoCard";
import VideoPlayer from "@/components/VideoPlayer";

interface HeroBentoProps {
  headline: string;
  tagline: string;
  primaryCTA: { text: string; href: string };
  secondaryCTA?: { text: string; href: string };
  videoSrc?: string;
  className?: string;
}

export default function HeroBento({
  headline,
  tagline,
  primaryCTA,
  secondaryCTA,
  videoSrc,
  className,
}: HeroBentoProps) {
  return (
    <section className={cn(
      "relative min-h-screen flex items-center py-32 pb-16 bg-background overflow-hidden",
      "min-[900px]:py-32 min-[900px]:pb-24",
      className
    )}>
      {/* Pattern background */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffd43b' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />
      <div className="relative z-[1] max-w-[1200px] mx-auto px-6 w-full">
        <div className="flex flex-col gap-16 min-[900px]:gap-16">
          <div className="flex w-full flex-col gap-16 min-[1100px]:flex-row min-[1100px]:gap-32">
            {/* Main headline area */}
            <div className="flex flex-col justify-center p-0 flex-1 min-w-0">
              <h1 className={cn(
                "font-lilita text-[clamp(2.5rem,6vw,3.75rem)] font-normal leading-[1.1] tracking-wide",
                "m-0 mb-6 text-text",
                "min-[1100px]:text-[4rem]"
              )}>
                {headline}
              </h1>
              <p className={cn(
                "text-[clamp(1.05rem,2vw,1.2rem)] leading-[1.7] text-text-shade",
                "m-0 mb-8 max-w-[560px]",
                "min-[1100px]:text-xl"
              )}>
                {tagline}
              </p>
              <div className="flex items-center flex-wrap gap-4 mt-auto">
                <Button
                  href={primaryCTA.href}
                  type="primary"
                  size="large"
                  location="body"
                >
                  {primaryCTA.text}
                </Button>
                {secondaryCTA && (
                  <Button
                    href={secondaryCTA.href}
                    type="secondary"
                    size="large"
                    location="body"
                  >
                    {secondaryCTA.text}
                  </Button>
                )}
              </div>
            </div>

            {/* Video preview card */}
            {videoSrc && (
              <div className={cn(
                "bg-background rounded-2xl overflow-hidden shadow-card border border-gray-200",
                "transition-shadow duration-300 ease-out w-full aspect-square shrink-0",
                "hover:shadow-card-hover",
                "min-[1100px]:flex-1 min-[1100px]:w-auto"
              )}>
                <VideoPlayer
                  src={videoSrc}
                  autoPlay
                  loop
                  muted
                  aspectRatio="1/1"
                />
              </div>
            )}
          </div>

          <div className="flex flex-col gap-8 min-[700px]:flex-row">
            {/* Feature card - File Search */}
            <BentoCard
              variant="light"
              size="medium"
              illustration={
                <div className={cn(
                  "w-14 h-14 rounded-[10px] flex items-center justify-center",
                  "bg-gradient-to-br from-accent-light to-accent-normal text-accent-dark",
                  "shadow-[0_2px_8px_var(--accent-gold-glow)]"
                )}>
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="M21 21l-4.35-4.35" />
                  </svg>
                </div>
              }
              title="File Search & Synthesis"
              description="Find anything instantly with AI-powered semantic search across all your documents."
              link={{ text: "Learn more", href: "#features" }}
            />

            {/* CTA card - Enterprise */}
            <BentoCard
              variant="light"
              size="medium"
              illustration={
                <div className={cn(
                  "w-14 h-14 rounded-[10px] flex items-center justify-center",
                  "bg-gradient-to-br from-accent-light to-accent-normal text-accent-dark"
                )}>
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>
              }
              title="100% On-Device"
              description="Zero data leakage. Your files never leave your machine. Enterprise-grade security built in."
              link={{ text: "Security details", href: "#security" }}
            />

            {/* Performance card */}
            <BentoCard
              variant="light"
              size="medium"
              illustration={
                <div className={cn(
                  "w-14 h-14 rounded-[10px] flex items-center justify-center",
                  "bg-gradient-to-br from-accent-light to-accent-normal text-accent-dark",
                  "shadow-[0_2px_8px_var(--accent-gold-glow)]"
                )}>
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                  </svg>
                </div>
              }
              title="Lightning Fast"
              description="Instant responses powered by local AI models. No network latency, no waiting."
              link={{ text: "See benchmarks", href: "#performance" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
