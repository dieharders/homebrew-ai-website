'use client'

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { lilita_one } from 'fonts/fonts';
import { cn } from '../../../utils/common';

function SuccessContent() {
  const searchParams = useSearchParams();
  const status = searchParams.get("status");

  return (
    <>
      <h1 className={cn(lilita_one.className, "text-[clamp(2.25rem,5vw,3rem)]")}>{`${status} SUCCESS`.toUpperCase()}</h1>
      <p className="text-xl">Thank you for subscribing! 🎉</p>
      <p className="text-xl">Please check your inbox/spam and respond to the confirmation email to complete your subscription.</p>
    </>
  );
}

export default function SuccessPage() {
  return (
    <main className="flex relative flex-col justify-center items-center gap-4 text-center h-full w-full bg-accent-btn p-6">
      <Suspense fallback={<h1 className={cn(lilita_one.className, "text-[clamp(2.25rem,5vw,3rem)]")}>Loading...</h1>}>
        <SuccessContent />
      </Suspense>
    </main>
  );
}
