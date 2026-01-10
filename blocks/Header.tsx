"use client";

import { useEffect, useState } from "react";
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
  { label: "Features", href: "/#features" },
  { label: "Use Cases", href: "/#use-cases" },
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
      className={cx(
        styles.container,
        isScrolled && styles.scrolled,
        p.className
      )}
    >
      <nav className={styles.nav}>
        <div className={styles.navContent}>
          <div className={styles.brand}>
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
                  className={styles.brandIcon}
                  title="FileBuff"
                  style={{ fontSize: "1rem" }}
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
            <Link
              href="https://www.openbrew.ai"
              style={{ display: "flex", alignItems: "center" }}
            >
              <Image
                src={ObrewLogo}
                alt="OpenBrew"
                height={28}
                title="OpenBrew"
                className={styles.logo}
              />
            </Link>
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
                      isActive && styles.navLinkActive
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
              size="small"
              location="body"
            >
              {ctaButton.text}
            </Button>
          )}
        </div>
      </nav>
    </header>
  );
}
