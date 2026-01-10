'use client'

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { lilita_one } from 'fonts/fonts';
import styles from './page.module.css';

function SuccessContent() {
  const searchParams = useSearchParams();
  const status = searchParams.get("status");

  return (
    <>
      <h1 className={lilita_one.className}>{`${status} SUCCESS`.toUpperCase()}</h1>
      <p>Thank you for subscribing! 🎉</p>
      <p>Please check your inbox/spam and respond to the confirmation email to complete your subscription.</p>
    </>
  );
}

export default function SuccessPage() {
  return (
    <main className={styles.container}>
      <Suspense fallback={<h1 className={lilita_one.className}>Loading...</h1>}>
        <SuccessContent />
      </Suspense>
    </main>
  );
}
