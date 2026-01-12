import Header from "@/blocks/Header";
import Section from "@/components/Section";
import Button from "@/components/Button";
import { Check } from "lucide-react";
import { cn } from "@/utils/common";

const FILEBUFF_URL = "https://filebuff.openbrew.ai";

export default function SponsorPage() {
  return (
    <div>
      <Header id="top" title="" />
      <main>
        <Section background="normal" className="min-h-screen relative overflow-hidden">
          {/* Hero */}
          <div className="text-center max-w-[700px] mx-auto mb-8 relative z-[1]">
            <span className={cn(
              "inline-block text-xs font-bold uppercase tracking-wider",
              "bg-accent-btn py-2 px-5 rounded-full mb-6 text-gray-800"
            )}>
              Early Access
            </span>
            <h1 className="font-lilita text-[clamp(2.5rem,6vw,4rem)] font-normal tracking-wider text-inherit m-0 mb-3">
              FILEBUFF
            </h1>
          </div>

          {/* Support Note */}
          <div className={cn(
            "text-center max-w-[700px] mx-auto mb-16 py-5 px-8",
            "bg-gray-500/[0.06] rounded-xl relative z-[1]"
          )}>
            <p className="text-[0.95rem] text-gray-600 m-0 leading-relaxed">
              All paid plans include: Discord access, Email support, GitHub
              repository access, no data collection, and all future updates.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="max-w-[1100px] mx-auto mb-12 relative z-[1]">
            <div className={cn(
              "grid grid-cols-3 gap-7",
              "max-[992px]:grid-cols-1 max-[992px]:max-w-[420px] max-[992px]:mx-auto"
            )}>
              <PricingCard
                name="Free"
                price="$0"
                period="/month"
                description="For individuals exploring AI-powered file management"
                features={[
                  "Unlimited edge AI",
                  "Community support",
                  "Basic features",
                ]}
              />
              <PricingCard
                name="Team"
                price="$100"
                period="/month"
                description="For teams ready to boost productivity"
                features={[
                  "5 seat minimum",
                  "Email support",
                  "Advanced features",
                  "Team collaboration",
                ]}
                highlighted
              />
              <PricingCard
                name="Enterprise"
                price="Quote"
                period=""
                description="For organizations with specific requirements"
                features={[
                  "Unlimited seats",
                  "Dedicated support",
                  "Concierge service",
                  "Custom integrations",
                ]}
                ctaText="Contact Sales"
              />
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center max-w-[600px] mx-auto pb-12 relative z-[1]">
            <h3 className="font-lilita text-3xl font-normal text-inherit m-0 mb-3">
              Ready to get started?
            </h3>
            <p className="text-lg text-gray-600 m-0 mb-8">
              Join the beta and experience secure, on-device AI.
            </p>
            <Button
              className={cn(
                "inline-flex justify-center items-center py-[1.125rem] px-10 rounded-[10px]",
                "text-[1.05rem] font-bold cursor-pointer transition-all duration-200",
                "border-none bg-accent-btn text-text-accent",
                "hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_8px_20px_rgba(0,0,0,0.15)] hover:text-gray-800"
              )}
              href={FILEBUFF_URL}
              size="large"
              type="custom"
            >
              Learn More About FileBuff
            </Button>
          </div>
        </Section>
      </main>
    </div>
  );
}

function PricingCard({
  name,
  price,
  period,
  description,
  features,
  highlighted = false,
  ctaText = "Get Started",
}: {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  ctaText?: string;
}) {
  return (
    <div
      className={cn(
        "relative rounded-[20px] p-8 flex flex-col",
        "transition-all duration-[250ms] ease-out",
        "max-md:p-7",
        highlighted
          ? cn(
              "bg-gray-500/[0.06] border-2 border-accent-btn",
              "shadow-[0_4px_20px_rgba(0,0,0,0.08)]",
              "hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
            )
          : cn(
              "bg-gray-500/[0.06] border border-gray-500/20",
              "hover:-translate-y-1.5 hover:shadow-[0_16px_32px_rgba(0,0,0,0.12)] hover:border-gray-500/30"
            )
      )}
    >
      {highlighted && (
        <span className={cn(
          "absolute -top-3.5 left-1/2 -translate-x-1/2",
          "text-[0.7rem] font-bold uppercase tracking-wider",
          "text-text-accent bg-accent-btn py-1.5 px-4 rounded-full whitespace-nowrap"
        )}>
          Popular
        </span>
      )}
      <h4 className="font-lilita text-xl font-normal text-inherit m-0 mb-4">
        {name}
      </h4>
      <div className="flex items-baseline gap-1 mb-4">
        <span className="font-lilita text-5xl text-accent-btn leading-none max-[450px]:text-4xl">
          {price}
        </span>
        {period && <span className="text-base text-gray-500">{period}</span>}
      </div>
      <p className={cn(
        "text-[0.95rem] text-gray-600 leading-normal m-0 mb-7 min-h-12",
        "max-[992px]:min-h-0"
      )}>
        {description}
      </p>
      <ul className="list-none p-0 m-0 mb-8 grow">
        {features.map((feature, index) => (
          <li
            key={index}
            className="flex items-center gap-3 text-[0.95rem] text-inherit py-2.5 border-b border-gray-500/15 last:border-b-0"
          >
            <Check className="shrink-0 text-accent-btn" size={18} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button
        className={cn(
          "flex justify-center items-center w-full py-3.5 px-6 rounded-[10px]",
          "text-base cursor-pointer transition-all duration-200",
          highlighted
            ? cn(
                "font-bold border-none bg-accent-btn text-text-accent",
                "hover:brightness-110 hover:-translate-y-px hover:text-gray-800"
              )
            : cn(
                "font-semibold border-2 border-gray-900 bg-transparent text-gray-900",
                "hover:border-accent-btn hover:bg-accent-btn"
              )
        )}
        href={FILEBUFF_URL}
        size="normal"
        type="custom"
      >
        {ctaText}
      </Button>
    </div>
  );
}
