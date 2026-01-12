'use client'

import { ReactNode } from 'react';
import Section, { T_Background } from '@/components/Section';
import Button from '@/components/Button';
import ObrewLogo from 'public/logo-obrew.svg';
import ClapLogo from 'public/icons/clap.png';
import Image from 'next/image';
import { lilita_one } from 'fonts/fonts';
import { cn } from '../utils/common';

export default function Hero(p: {
  id?: string,
  className?: string,
  title?: ReactNode | string,
  subtitle: string,
  link?: string,
  background?: T_Background,
  children?: ReactNode,
}) {
  // @TODO Make this float in the middle of screen until you scroll past
  return (
    <Section
      id={p.id}
      className={cn(
        "flex flex-col items-center justify-center h-screen py-0 overflow-hidden",
        p.className
      )}
      background={p.background || "alternate"}
    >
      <div className="flex flex-col items-center m-0 overflow-hidden">
        <div className="relative flex flex-row flex-wrap gap-2 items-stretch justify-center w-full">
          {/* Illustration */}
          <div className="relative flex flex-col flex-wrap gap-4 p-0 m-0 items-center content-center self-stretch justify-center">
            <Image src={ObrewLogo} alt="Obrew Studio" height={384} />
          </div>
          <div className="flex flex-col gap-10 items-center justify-center max-w-[27rem] w-full">
            {p.title && (
              <h1 className={cn(
                lilita_one.className,
                "text-5xl font-extrabold leading-[1.15] tracking-wide text-center mb-[21px]"
              )}>
                {p.title}
              </h1>
            )}
            <p className={cn(
              "text-xl font-normal leading-[1.6] tracking-tight text-center text-text-shade whitespace-pre-wrap",
              "min-[500px]:text-[clamp(1.5rem,3vw,1.75rem)] min-[500px]:tracking-tight"
            )}>
              {p.subtitle}
            </p>
            <Button
              className={cn(
                "text-text bg-accent-btn max-w-max self-center text-wrap h-fit text-xl p-4"
              )}
              href={p.link}
              onClick={() => { }}
              size="large"
              type="primary"
              location="highlight"
            >
              <Image src={ClapLogo} alt="clap" width="32" height="32" />&nbsp;Download Now
            </Button>
          </div>
        </div>
        {p.children && <div className="mx-auto mt-24 text-center">{p.children}</div>}
      </div>
    </Section>
  );
}
