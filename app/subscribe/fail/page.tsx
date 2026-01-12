'use client'

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { lilita_one } from 'fonts/fonts';
import { cn } from '../../../utils/common';

function FailureContent() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  return (
    <>
      <h1 className={cn(lilita_one.className, "text-[clamp(2.25rem,5vw,3rem)]")}>SUBSCRIPTION FAILED</h1>
      <p className="text-xl">Oops! Something went wrong. Please try again later. 😔</p>
      <p className="text-xl">{`Reason: ${error}`}</p>
    </>
  );
}

export default function FailurePage() {
  return (
    <main className="flex relative flex-col justify-center items-center gap-4 text-center h-full w-full bg-accent-btn p-6">
      <Suspense fallback={<h1 className={cn(lilita_one.className, "text-[clamp(2.25rem,5vw,3rem)]")}>Loading...</h1>}>
        <FailureContent />
      </Suspense>
    </main>
  );
}
