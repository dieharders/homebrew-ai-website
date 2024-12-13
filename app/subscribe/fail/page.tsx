'use client'

import { useSearchParams } from "next/navigation";
import { lilita_one } from 'fonts/fonts';
import styles from './page.module.css';

export default function FailurePage() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  return (
    <main className={styles.container}>
      <h1 className={lilita_one.className}>SUBSCRIPTION FAILED</h1>
      <p>Oops! Something went wrong. Please try again later. 😔</p>
      <p>{`Reason: ${error}`}</p>
    </main>
  );
}
