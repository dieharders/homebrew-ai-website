"use client";

import { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";
import { cx } from "@/utils/common";
import { scrollToHashOnClick } from "@/utils/hashLink";
import { APPS, STATUS_LABEL, isExternal } from "@/data/apps";

export interface NavItem {
  label: string;
  href: string;
  rel?: string;
}

const appLinkClass =
  "flex items-center gap-3 rounded-lg px-3 py-2.5 text-[var(--text-shade)] no-underline transition-colors hover:bg-[var(--background-alternate)] hover:text-[var(--text)]";

const defaultNavItems: NavItem[] = [
  // { label: "Features", href: "/#features" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Jobs", href: "/jobs" },
];

export default function Header(p: {
  id?: string;
  className?: string;
  title: string;
  navItems?: NavItem[];
}) {
  const id = p.id ?? "top";
  const navItems = p.navItems ?? defaultNavItems;

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
        AI Apps
      </p>
      {APPS.map((app) => (
        <Link
          key={app.id}
          href={app.href}
          target={isExternal(app) ? "_blank" : undefined}
          rel={isExternal(app) ? "noopener noreferrer" : undefined}
          className={appLinkClass}
          onClick={(e) => {
            // Unreleased apps link to their spotlight (`/#paperbuff`), which a
            // repeat click wouldn't scroll to. Left alone for new-tab links.
            if (!isExternal(app)) scrollToHashOnClick(app.href)(e);
            setIsMenuOpen(false);
          }}
        >
          <span
            className={cx(
              "flex size-9 shrink-0 items-center justify-center rounded-md",
              app.iconBg,
            )}
            title={
              app.status === "live"
                ? `${app.name}: ${app.tagline}`
                : `${STATUS_LABEL[app.status]}...`
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
          <Link
            href="/"
            className="flex size-10 shrink-0 items-center justify-center rounded-full transition-transform hover:scale-105"
            title="Home"
            aria-label="Home"
            onClick={scrollToHashOnClick("/")}
          >
            <Image
              src="/logo-badge.svg"
              alt="Homebrew AI"
              width={40}
              height={40}
              priority
              unoptimized
            />
          </Link>

          <div className={styles.navGroup}>
            <div className="relative shrink-0" ref={menuRef}>
              <button
                className={cx(
                  styles.navLink,
                  "cursor-pointer gap-1 border-none bg-transparent",
                )}
                onClick={() => setIsMenuOpen((v) => !v)}
                aria-haspopup="menu"
                aria-expanded={isMenuOpen}
              >
                Apps
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className={cx(
                    "transition-transform",
                    isMenuOpen && "rotate-180",
                  )}
                >
                  <path d="M7 10l5 5 5-5z" />
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
                return (
                  <li key={item.href} className={styles.navItem}>
                    <Link
                      href={item.href}
                      className={styles.navLink}
                      target={item?.rel && "_blank"}
                      rel={item.rel}
                      onClick={scrollToHashOnClick(item.href)}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
