"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import styles from "./Header.module.css";
import { cx } from "@/utils/common";
import Button from "@/components/Button";
import ObrewLogo from "public/badge.png";

export interface NavItem {
  label: string;
  href: string;
  rel?: string;
}

const defaultNavItems: NavItem[] = [
  // { label: "Features", href: "/#features" },
  { label: "Early Access", href: "/sponsor" },
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
  const ctaButton = p.ctaButton ?? { text: "Free", href: "/download" };
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [isMenuOpen]);

  return (
    <header
      id={id}
      className={cx(
        styles.container,
        isScrolled && styles.scrolled,
        p.className,
      )}
    >
      <nav className={styles.nav}>
        <div className={styles.navContent}>
          <div className="relative shrink-0" ref={menuRef}>
            <button
              className="flex size-9 cursor-pointer items-center justify-center rounded-md border-none bg-transparent text-[var(--text)] transition-colors hover:bg-[var(--background-alternate)]"
              onClick={() => setIsMenuOpen((v) => !v)}
              aria-label="Open apps menu"
              aria-expanded={isMenuOpen}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
              </svg>
            </button>

            {isMenuOpen && (
              <div className="absolute left-0 top-[calc(100%+0.5rem)] z-[200] flex min-w-[200px] flex-col gap-1 rounded-xl bg-white p-2 shadow-[0_4px_24px_rgba(0,0,0,0.12),0_1px_4px_rgba(0,0,0,0.08)]">
                <Link
                  href="https://filebuff.openbrew.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-[var(--text-shade)] no-underline transition-colors hover:bg-[var(--background-alternate)] hover:text-[var(--text)]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span
                    className="flex size-9 shrink-0 items-center justify-center rounded-md bg-[var(--accent-btn)] text-[var(--text)]"
                    title="FileBuff"
                  >
                    <svg
                      width="70%"
                      height="70%"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6 10H6v-2h8v2zm4-4H6v-2h12v2z" />
                    </svg>
                  </span>
                  <span className="text-base font-semibold">FileBuff</span>
                </Link>
                <Link
                  href="/"
                  className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-[var(--text-shade)] no-underline transition-colors hover:bg-[var(--background-alternate)] hover:text-[var(--text)]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Image
                    src={ObrewLogo}
                    alt="OBrew"
                    height={0}
                    width={0}
                    className="h-9 w-auto shrink-0"
                    unoptimized
                  />
                  <span className="text-base font-semibold">OBrew Engine</span>
                </Link>
              </div>
            )}
          </div>

          <ul className={styles.navList}>
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <li key={item.href} className={styles.navItem}>
                  <Link
                    href={item.href}
                    className={cx(
                      styles.navLink,
                      isActive && styles.navLinkActive,
                    )}
                    target={item?.rel && "_blank"}
                    rel={item.rel}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          {ctaButton && (
            <Button
              href={ctaButton.href}
              type="primary"
              size="normal"
              location="body"
              className="shrink-0 p-1"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-2 shrink-0"
              >
                <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
              </svg>
              <p className="text-[1.15rem] text-inherit">{ctaButton.text}</p>
            </Button>
          )}
        </div>
      </nav>
    </header>
  );
}
