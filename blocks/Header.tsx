"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { cn } from "@/utils/common";
import ObrewLogo from "public/badge.png";

export interface NavItem {
  label: string;
  href: string;
  rel?: string;
}

const defaultNavItems: NavItem[] = [
  { label: "Features", href: "/#features" },
  { label: "Sponsor", href: "/sponsor" },
  {
    label: "Docs",
    rel: "noopener noreferrer",
    href: "https://github.com/dieharders/obrew-studio-server",
  },
];

export default function Header(p: {
  id?: string;
  className?: string;
  title: string;
  navItems?: NavItem[];
  ctaButton?: { text: string; href: string };
}) {
  const id = p.id ?? "top";
  const navItems = p.navItems ?? defaultNavItems;
  const ctaButton = p.ctaButton ?? { text: "Get Started", href: "/download" };
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id={id}
      className={cn(
        "block sticky w-full top-0 z-[100]",
        "transition-all duration-300 ease-out",
        isScrolled && "shadow-[0_2px_16px_rgba(0,0,0,0.08)]",
        p.className
      )}
    >
      <nav
        className={cn(
          "w-full backdrop-blur-sm bg-white/90 border-b border-gray-200",
          "[-webkit-backdrop-filter:blur(8px)]"
        )}
      >
        <div
          className={cn(
            "flex flex-row items-center justify-start gap-8",
            "max-w-[1200px] mx-auto py-3 px-6",
            "max-[620px]:gap-4 max-[620px]:py-2 max-[620px]:px-3"
          )}
        >
          <div className="flex items-center gap-4 font-bold text-lg text-text shrink-0">
            {/* FileBuff */}
            <Link
              href="https://filebuff.openbrew.ai"
              style={{ display: "flex", alignItems: "center" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span
                style={{
                  position: "relative",
                  display: "inline-block",
                }}
              >
                <span
                  className="flex items-center justify-center w-[28px] h-[28px] bg-[var(--accent-btn)] rounded-[6px] text-[color:var(--text)]"
                  title="FileBuff"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6 10H6v-2h8v2zm4-4H6v-2h12v2z" />
                  </svg>
                </span>
              </span>
            </Link>
            {/* OpenBrew */}
            <Link href="/" style={{ display: "flex", alignItems: "center" }}>
              <Image
                src={ObrewLogo}
                alt="OpenBrew"
                height={28}
                title="OpenBrew"
                className="shrink-0"
              />
            </Link>
          </div>
          <ul
            className={cn(
              "flex flex-row items-center gap-1 list-none m-0 p-0 grow",
              "overflow-x-auto scrollbar-none [&::-webkit-scrollbar]:hidden"
            )}
          >
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <li key={item.href} className="shrink-0">
                  <Link
                    href={item.href}
                    className={cn(
                      "block py-2 px-4 text-[0.9rem] font-medium text-[color:var(--text-shade)] rounded-[6px]",
                      "transition-[color,background] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]",
                      "hover:text-[color:var(--text)] hover:bg-[var(--background-alternate)]",
                      "max-[620px]:py-2 max-[620px]:px-3 max-[620px]:text-[0.85rem]",
                      isActive &&
                        "text-[color:var(--text)] bg-[var(--accent-light)]"
                    )}
                    target={item?.rel ? "_blank" : undefined}
                    rel={item.rel}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          {ctaButton && (
            <Link
              href={ctaButton.href}
              className="inline-flex items-center justify-center h-8 px-3 rounded-[6px] font-semibold text-[0.8rem] transition-all duration-150 ease-out cursor-pointer select-none whitespace-nowrap hover:-translate-y-[2px] active:translate-y-0"
              style={{
                color: "white",
                backgroundColor: "#374151",
                boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#ffd43b";
                e.currentTarget.style.backgroundColor = "#1f2937";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "white";
                e.currentTarget.style.backgroundColor = "#374151";
                e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.15)";
              }}
            >
              {ctaButton.text}
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}
