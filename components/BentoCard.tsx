import { cn } from "../utils/common";
import ExploreLink from "./ExploreLink";

export type BentoCardVariant = "light" | "dark" | "accent";
export type BentoCardSize = "small" | "medium" | "large";

interface BentoCardProps {
  variant?: BentoCardVariant;
  size?: BentoCardSize;
  className?: string;
  illustration?: React.ReactNode;
  title?: string;
  description?: string;
  link?: { text: string; href: string };
  children?: React.ReactNode;
}

const variantClasses = {
  light: cn(
    "bg-background shadow-card border border-gray-200 text-text",
    "hover:shadow-card-hover"
  ),
  dark: cn(
    "bg-background-dark shadow-dark-card text-text-accent",
    "hover:shadow-[0_8px_40px_rgba(0,0,0,0.4)]"
  ),
  accent: cn(
    "bg-gradient-to-br from-accent-light to-accent-normal text-text shadow-card",
    "hover:shadow-card-hover"
  ),
};

const sizeClasses = {
  small: "p-4",
  medium: "p-6",
  large: "p-8",
};

export default function BentoCard({
  variant = "light",
  size = "medium",
  className,
  illustration,
  title,
  description,
  link,
  children,
}: BentoCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-2xl flex flex-col",
        "transition-all duration-300 ease-out",
        "hover:-translate-y-1",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
    >
      {illustration && (
        <div className="mb-4">{illustration}</div>
      )}
      <div className="flex flex-col grow">
        {title && (
          <h3 className={cn(
            "text-xl font-bold m-0 mb-2 leading-snug",
            variant === "dark" && "text-text-accent"
          )}>
            {title}
          </h3>
        )}
        {description && (
          <p className={cn(
            "text-[0.95rem] leading-normal m-0 mb-4 opacity-90",
            variant === "dark" && "text-text-accent-shade"
          )}>
            {description}
          </p>
        )}
        {children}
        {link && (
          <ExploreLink
            href={link.href}
            variant={variant === "dark" ? "light" : "default"}
            className="mt-auto"
          >
            {link.text}
          </ExploreLink>
        )}
      </div>
    </div>
  );
}
