'use client'

import { useSearchParams } from "next/navigation";
import { lilita_one } from 'fonts/fonts';
import styles from './page.module.css';

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const status = searchParams.get("status");

  return (
    <main className={styles.container}>
      <h1 className={lilita_one.className}>{`${status} SUCCESS`.toUpperCase()}</h1>
      <p>Thank you for subscribing! 🎉</p>
      <p>Please check your inbox/spam and respond to the confirmation email to complete your subscription.</p>
    </main>
  );
}
