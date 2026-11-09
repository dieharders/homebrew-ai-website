"use client";

import type { ComponentProps, MouseEvent } from "react";
import Link from "next/link";
import { scrollToHashOnClick } from "../utils/hashLink";

/**
 * `next/link` that still scrolls on a repeat click of a same-page `#anchor`
 * (see `scrollToHashOnClick`). A client component, so server components can
 * use it for in-page links without becoming client components themselves.
 */
export default function HashLink({
  href,
  onClick,
  ...rest
}: Omit<ComponentProps<typeof Link>, "href"> & { href: string }) {
  const scrollToHash = scrollToHashOnClick(href);

  return (
    <Link
      href={href}
      onClick={(e: MouseEvent<HTMLAnchorElement>) => {
        onClick?.(e);
        scrollToHash(e);
      }}
      {...rest}
    />
  );
}
