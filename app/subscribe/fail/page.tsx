'use client'

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { lilita_one } from 'fonts/fonts';
import styles from './page.module.css';

function FailureContent() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  return (
    <>
      <h1 className={lilita_one.className}>SUBSCRIPTION FAILED</h1>
      <p>Oops! Something went wrong. Please try again later. 😔</p>
      <p>{`Reason: ${error}`}</p>
    </>
  );
}

export default function FailurePage() {
  return (
    <main className={styles.container}>
      <Suspense fallback={<h1 className={lilita_one.className}>Loading...</h1>}>
        <FailureContent />
      </Suspense>
    </main>
  );
}
