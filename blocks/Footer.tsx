import { Youtube, Mail, Github } from "lucide-react";
import { lilita_one } from "fonts/fonts";
import { cn } from "../utils/common";

const links = [
  {
    icon: Youtube,
    label: "YouTube",
    href: "http://www.youtube.com/@OpenBrewAi",
  },
  {
    icon: Mail,
    label: "Contact us",
    href: "mailto:openbrewai+support@gmail.com",
  },
  {
    icon: Github,
    label: "Github",
    href: "https://github.com/dieharders/obrew-studio-server",
  },
];

export default function Footer(p: {
  id?: string;
  className?: string;
  title: string;
}) {
  return (
    <footer
      id={p.id}
      className={cn(
        "flex flex-col items-center pt-24 pb-10 px-6 text-text bg-background",
        "border-t border-gray-200",
        "max-md:pt-10 max-md:pb-8 max-md:px-6",
        p.className
      )}
    >
      <div className={cn(
        "w-full max-w-[1000px] mx-auto flex flex-row items-center justify-between gap-10 flex-wrap",
        "max-md:flex-col max-md:items-start max-md:gap-6"
      )}>
        <div className="flex flex-col gap-3 shrink-0">
          <div className="w-16 h-1 bg-gradient-to-r from-accent-btn to-accent-dark rounded-sm" />
          <h2 className={cn(lilita_one.className, "text-[1.75rem] font-semibold leading-tight tracking-tight m-0 text-text")}>
            GET IN TOUCH
          </h2>
        </div>
        <div className="flex flex-row gap-4 flex-wrap max-md:w-full">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "flex flex-row items-center gap-4 py-4 px-6 border border-black/[0.08]",
                "rounded-[10px] no-underline text-text bg-background shadow-sm",
                "transition-all duration-300 ease-out",
                "hover:-translate-y-0.5 hover:border-accent-btn hover:shadow-card-hover",
                "active:translate-y-0",
                "max-md:flex-1 max-md:min-w-[120px] max-md:py-3 max-md:px-4 max-md:justify-center"
              )}
            >
              <link.icon className="shrink-0 text-accent-dark" size={32} strokeWidth={1.5} />
              <span className="text-base font-semibold whitespace-nowrap text-text max-md:text-sm">
                {link.label}
              </span>
            </a>
          ))}
        </div>
      </div>
      <div className={cn(
        "w-full max-w-[1000px] mx-auto mt-10 pt-6 border-t border-gray-200",
        "text-sm text-text-muted text-center",
        "max-md:mt-6"
      )}>
        &copy; {new Date().getFullYear()}, {p.title}
      </div>
    </footer>
  );
}
