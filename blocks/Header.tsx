"use client";

import { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import styles from "./Header.module.css";
import { cx } from "@/utils/common";
import ObrewLogo from "public/badge.png";

export interface NavItem {
  label: string;
  href: string;
  rel?: string;
}

const defaultNavItems: NavItem[] = [
  // { label: "Features", href: "/#features" },
  { label: "Home", href: "/" },
  { label: "Early Access", href: "/sponsor" },
  {
    label: "Github",
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

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    if (!isMenuOpen) return;
    const isMobile = window.matchMedia("(max-width: 639px)").matches;
    if (!isMobile) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const appLinks = () => (
    <>
      <p className="mt-2 px-3 pb-1 pt-2 text-xs font-semibold uppercase tracking-wider text-[var(--text-shade)] opacity-60">
        AI Core
      </p>
      <Link
        href="/download"
        className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-[var(--text-shade)] no-underline transition-colors hover:bg-[var(--background-alternate)] hover:text-[var(--text)]"
        onClick={() => setIsMenuOpen(false)}
      >
        <Image
          src={ObrewLogo}
          alt="OpenBrew"
          title="Download OpenBrew"
          height={0}
          width={0}
          className="h-9 w-auto shrink-0"
          unoptimized
        />
        <span className="text-base font-semibold">OpenBrew</span>
      </Link>
      <p className="px-3 pb-1 pt-2 text-xs font-semibold uppercase tracking-wider text-[var(--text-shade)] opacity-60">
        AI Apps
      </p>
      <Link
        href="https://filebuff.openbrew.ai"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-[var(--text-shade)] no-underline transition-colors hover:bg-[var(--background-alternate)] hover:text-[var(--text)]"
        onClick={() => setIsMenuOpen(false)}
      >
        <span
          className="flex size-9 shrink-0 items-center justify-center rounded-md bg-amber-100"
          title="FileBuff: Project Intelligence on Demand"
        >
          <svg width="70%" height="70%" viewBox="0 0 24 24">
            {/* Folder body */}
            <path
              d="M20 6h-8l-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"
              fill="#fbbf24"
              stroke="#1a1a1a"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
            {/* Tab highlight */}
            <path
              d="M4 4h6l2 2H4z"
              fill="#fcd34d"
              stroke="#1a1a1a"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
            {/* Eyes */}
            <circle cx="9" cy="12" r="1.4" fill="#1a1a1a" />
            <circle cx="15" cy="12" r="1.4" fill="#1a1a1a" />
            {/* Eye shine */}
            <circle cx="9.5" cy="11.5" r="0.5" fill="white" />
            <circle cx="15.5" cy="11.5" r="0.5" fill="white" />
            {/* Smile */}
            <path
              d="M9.5 15.5Q12 17.5 14.5 15.5"
              fill="none"
              stroke="#1a1a1a"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </svg>
        </span>
        <span className="text-base font-semibold">FileBuff</span>
      </Link>
      <Link
        href="/"
        className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-[var(--text-shade)] no-underline transition-colors hover:bg-[var(--background-alternate)] hover:text-[var(--text)]"
        onClick={() => setIsMenuOpen(false)}
      >
        <span
          className="flex size-9 shrink-0 items-center justify-center rounded-md bg-purple-100"
          title="Coming Soon..."
        >
          <svg width="70%" height="70%" viewBox="0 0 24 24">
            {/* Screen body */}
            <rect
              x="2"
              y="5"
              width="16"
              height="14"
              rx="2"
              fill="#c084fc"
              stroke="#1a1a1a"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
            {/* Lens */}
            <path
              d="M18 9l4-3v12l-4-3V9z"
              fill="#d8b4fe"
              stroke="#1a1a1a"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
            {/* Eyes */}
            <circle cx="7" cy="11" r="1.4" fill="#1a1a1a" />
            <circle cx="13" cy="11" r="1.4" fill="#1a1a1a" />
            {/* Eye shine */}
            <circle cx="7.5" cy="10.5" r="0.5" fill="white" />
            <circle cx="13.5" cy="10.5" r="0.5" fill="white" />
            {/* Smile */}
            <path
              d="M7.5 14.5Q10 16.5 12.5 14.5"
              fill="none"
              stroke="#1a1a1a"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </svg>
        </span>
        <span className="text-base font-semibold">Scrubber</span>
      </Link>
      <Link
        href="/"
        className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-[var(--text-shade)] no-underline transition-colors hover:bg-[var(--background-alternate)] hover:text-[var(--text)]"
        onClick={() => setIsMenuOpen(false)}
      >
        <span
          className="flex size-9 shrink-0 items-center justify-center rounded-md bg-orange-100"
          title="Coming Soon..."
        >
          <svg width="70%" height="70%" viewBox="0 0 24 24">
            {/* Screen/board */}
            <rect
              x="3"
              y="2"
              width="18"
              height="14"
              rx="2"
              fill="#fb923c"
              stroke="#1a1a1a"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
            {/* Stand */}
            <line
              x1="12"
              y1="16"
              x2="12"
              y2="20"
              stroke="#1a1a1a"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            <line
              x1="8"
              y1="20"
              x2="16"
              y2="20"
              stroke="#1a1a1a"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            {/* Eyes */}
            <circle cx="9" cy="8" r="1.4" fill="#1a1a1a" />
            <circle cx="15" cy="8" r="1.4" fill="#1a1a1a" />
            {/* Eye shine */}
            <circle cx="9.5" cy="7.5" r="0.5" fill="white" />
            <circle cx="15.5" cy="7.5" r="0.5" fill="white" />
            {/* Smile */}
            <path
              d="M9.5 12Q12 14 14.5 12"
              fill="none"
              stroke="#1a1a1a"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </svg>
        </span>
        <span className="text-base font-semibold">Prezzy</span>
      </Link>
      <Link
        href="/"
        className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-[var(--text-shade)] no-underline transition-colors hover:bg-[var(--background-alternate)] hover:text-[var(--text)]"
        onClick={() => setIsMenuOpen(false)}
      >
        <span
          className="flex size-9 shrink-0 items-center justify-center rounded-md bg-sky-100"
          title="Coming Soon..."
        >
          <svg width="70%" height="70%" viewBox="0 0 24 24">
            {/* Paper body */}
            <path
              d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6z"
              fill="#38bdf8"
              stroke="#1a1a1a"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
            {/* Folded corner */}
            <path
              d="M14 2v6h6"
              fill="#bae6fd"
              stroke="#1a1a1a"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
            {/* Eyes */}
            <circle cx="9" cy="13" r="1.4" fill="#1a1a1a" />
            <circle cx="15" cy="13" r="1.4" fill="#1a1a1a" />
            {/* Eye shine */}
            <circle cx="9.5" cy="12.5" r="0.5" fill="white" />
            <circle cx="15.5" cy="12.5" r="0.5" fill="white" />
            {/* Smile */}
            <path
              d="M9.5 16.5Q12 18.5 14.5 16.5"
              fill="none"
              stroke="#1a1a1a"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </svg>
        </span>
        <span className="text-base font-semibold">PaperBuff</span>
      </Link>
    </>
  );

  return (
    <header
      id={id}
      className={cx(styles.container, styles.scrolled, p.className)}
    >
      <nav className={styles.nav}>
        <div className={styles.navContent}>
          <div className="relative shrink-0" ref={menuRef}>
            <button
              className="flex size-9 cursor-pointer items-center justify-center rounded-md border-none bg-transparent text-[var(--text)] transition-colors hover:bg-[var(--background-alternate)]"
              onClick={() => setIsMenuOpen((v) => !v)}
              title="More apps"
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
              <>
                {/* Desktop dropdown */}
                <div className="absolute left-0 top-[calc(100%+0.5rem)] z-[200] hidden min-w-[200px] flex-col gap-1 rounded-xl bg-white p-2 shadow-[0_4px_24px_rgba(0,0,0,0.12),0_1px_4px_rgba(0,0,0,0.08)] sm:flex">
                  {appLinks()}
                </div>
                {/* Mobile fullscreen via portal */}
                {createPortal(
                  <div
                    className="fixed inset-0 z-[9999] flex flex-col bg-white p-4 sm:hidden"
                    ref={menuRef}
                  >
                    <button
                      className="mb-4 flex size-9 cursor-pointer items-center justify-center self-end rounded-md border-none bg-transparent text-[var(--text)]"
                      onClick={() => setIsMenuOpen(false)}
                      aria-label="Close menu"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                      </svg>
                    </button>
                    {appLinks()}
                  </div>,
                  document.body,
                )}
              </>
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
            <Link
              href={ctaButton.href}
              className={cx(
                "group ml-auto inline-flex shrink-0 items-center rounded-md border-2 border-current px-4 text-base font-bold text-black no-underline transition-[color,background] duration-200 hover:bg-[var(--background-alternate)]",
                pathname === ctaButton.href && styles.navLinkActive,
              )}
              style={{ height: 36 }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-2 shrink-0 transition-transform duration-200 group-hover:translate-y-0.5"
              >
                <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
              </svg>
              {ctaButton.text}
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}
