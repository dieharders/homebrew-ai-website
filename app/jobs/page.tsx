import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/blocks/Header";
import Footer from "@/blocks/Footer";
import Button from "@/components/Button";
import JobListings from "@/components/JobListings";

export const metadata: Metadata = {
  title: "Jobs | OpenBrew.ai",
  description:
    "Join the OpenBrew.ai team. Browse open roles in engineering, operations, and more.",
};

export default function JobsPage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Header id="top" title="" />

      <main>
        {/* Hero */}
        <section className="bg-[var(--background)] pt-[calc(var(--page-header-height)+var(--space-9))] pb-[var(--space-8)] text-center">
          <div className="mx-auto max-w-[var(--page-max-width)] px-[var(--page-padding)]">
            <Image
              src="/cup-icon.svg"
              alt="OpenBrew cup logo"
              width={96}
              height={96}
              className="mx-auto mb-[var(--space-5)]"
            />
            <h1 className="m-0 mb-[var(--space-5)] font-[family-name:var(--font-lilita-one)] text-[clamp(2rem,5vw,3rem)] leading-[1.15] font-bold text-[var(--text)]">
              Build the future of personal AI
            </h1>
            <p className="mx-auto mb-[var(--space-6)] max-w-[600px] text-[clamp(1rem,2vw,1.2rem)] leading-relaxed text-[var(--text-shade)]">
              Join a small, high-impact team shipping AI products that run
              anywhere — on an old laptop or powerful desktop.
            </p>
            <Button href="/company" size="large" type="primary" location="body">
              About the Company
            </Button>
          </div>
        </section>

        <JobListings />
      </main>

      <Footer title="OpenBrew.ai" />
    </div>
  );
}
