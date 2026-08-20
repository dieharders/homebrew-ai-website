"use client";

import { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import styles from "./Header.module.css";
import { cx } from "@/utils/common";
import { APPS } from "@/data/apps";
import ObrewLogo from "public/badge.png";

export interface NavItem {
  label: string;
  href: string;
  rel?: string;
}

const appLinkClass =
  "flex items-center gap-3 rounded-lg px-3 py-2.5 text-[var(--text-shade)] no-underline transition-colors hover:bg-[var(--background-alternate)] hover:text-[var(--text)]";

const defaultNavItems: NavItem[] = [
  // { label: "Features", href: "/#features" },
  { label: "Home", href: "/" },
  { label: "Apps", href: "/#apps" },
  { label: "Purchase", href: "/buy" },
  { label: "Jobs", href: "/jobs" },
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
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isMenuOpen) return;
    const handleClick = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        menuRef.current &&
        !menuRef.current.contains(target) &&
        (!mobileMenuRef.current || !mobileMenuRef.current.contains(target))
      ) {
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
      <p className="mt-2 px-3 pt-2 pb-1 text-xs font-semibold tracking-wider text-[var(--text-shade)] uppercase opacity-60">
        AI Core
      </p>
      <Link
        href="/download"
        className={appLinkClass}
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
      <p className="px-3 pt-2 pb-1 text-xs font-semibold tracking-wider text-[var(--text-shade)] uppercase opacity-60">
        AI Apps
      </p>
      {APPS.map((app) => (
        <Link
          key={app.id}
          href={app.href}
          target={app.external ? "_blank" : undefined}
          rel={app.external ? "noopener noreferrer" : undefined}
          className={appLinkClass}
          onClick={() => setIsMenuOpen(false)}
        >
          <span
            className={cx(
              "flex size-9 shrink-0 items-center justify-center rounded-md",
              app.iconBg,
            )}
            title={
              app.comingSoon ? "Coming Soon..." : `${app.name}: ${app.tagline}`
            }
          >
            {app.icon}
          </span>
          <span className="text-base font-semibold">{app.name}</span>
        </Link>
      ))}
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

            {/* Always in the DOM so the app links ship in the server-rendered
                HTML. Googlebot never clicks the menu button, so a subtree
                mounted only while the menu is open is invisible to it — that
                is what kept the subdomains undiscovered. Show/hide is
                CSS-only. */}
            <div
              className={cx(
                "absolute top-[calc(100%+0.5rem)] left-0 z-[200] min-w-[200px] flex-col gap-1 rounded-xl bg-white p-2 shadow-[0_4px_24px_rgba(0,0,0,0.12),0_1px_4px_rgba(0,0,0,0.08)]",
                isMenuOpen ? "hidden sm:flex" : "hidden",
              )}
            >
              {appLinks()}
            </div>

            {/* Mobile fullscreen via portal */}
            {isMenuOpen &&
              createPortal(
                <div
                  className="fixed inset-0 z-[9999] flex flex-col bg-white p-4 sm:hidden"
                  ref={mobileMenuRef}
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
