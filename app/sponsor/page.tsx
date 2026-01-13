import styles from "./page.module.css";
import Header from "@/blocks/Header";
import Section from "@/components/Section";
import Button from "@/components/Button";
import { Check } from "lucide-react";

const FILEBUFF_URL = "https://filebuff.openbrew.ai";

export default function SponsorPage() {
  return (
    <div>
      <Header id="top" title="" />
      <main>
        <Section background="normal" className={styles.sponsorSection}>
          {/* Hero */}
          <div className={styles.hero}>
            <h1 className={styles.heroTitle}>OPENBREW</h1>
          </div>
          {/* Support Note */}
          <div className={styles.supportNote}>
            <span className={styles.badge}>Early Access</span>
            <p>
              All paid plans include: Discord access, Email support, GitHub
              repository access, no data collection, and all future updates.
            </p>
          </div>
          {/* Pricing Cards */}
          <div className={styles.pricingCategory}>
            <div className={styles.pricingCards}>
              <PricingCard
                name="HOBBY"
                price="$0"
                period="/month"
                description="For individuals exploring on-device AI for personal use"
                features={[
                  "Unlimited edge AI",
                  "Community support",
                  "Basic features",
                  "Single user",
                ]}
              />
              <PricingCard
                name="TEAM"
                price="$100"
                period="/month"
                description="For teams ready to boost productivity and speed"
                features={[
                  "5 seat minimum",
                  "Email support",
                  "Advanced features",
                  "Team collaboration",
                ]}
                highlighted
              />
              <PricingCard
                name="ENTERPRISE"
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
          {/* <div className={styles.finalCta}>
            <h3 className={styles.finalCtaTitle}>Ready to get started?</h3>
            <p className={styles.finalCtaText}>
              Join the beta and experience private, on-device AI.
            </p>
            <Button
              className={styles.ctaButton}
              href={FILEBUFF_URL}
              size="large"
              type="custom"
            >
              Learn More About FileBuff
            </Button>
          </div> */}
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
      className={
        highlighted ? styles.pricingCardHighlighted : styles.pricingCard
      }
    >
      {highlighted && <span className={styles.popularBadge}>Popular</span>}
      <h4 className={styles.cardName}>{name}</h4>
      <div className={styles.cardPricing}>
        <span className={styles.cardPrice}>{price}</span>
        {period && <span className={styles.cardPeriod}>{period}</span>}
      </div>
      <p className={styles.cardDescription}>{description}</p>
      <ul className={styles.cardFeatures}>
        {features.map((feature, index) => (
          <li key={index} className={styles.cardFeature}>
            <Check className={styles.checkIcon} size={18} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button
        className={
          highlighted ? styles.cardButtonHighlighted : styles.cardButton
        }
        href={FILEBUFF_URL}
        size="large"
        type="custom"
      >
        {ctaText}
      </Button>
    </div>
  );
}
