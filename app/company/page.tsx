import type { Metadata } from "next";
import Header from "@/blocks/Header";
import Footer from "@/blocks/Footer";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Company | OpenBrew.ai",
  description:
    "Our mission, values, and what it's like to work at OpenBrew.ai.",
};

export default function CompanyPage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Header id="top" title="" />

      <main>
        {/* Hero */}
        <section className="bg-[var(--background)] pt-[calc(var(--page-header-height)+var(--space-9))] pb-[var(--space-8)] text-center">
          <div className="mx-auto max-w-[var(--page-max-width)] px-[var(--page-padding)]">
            <h1 className="m-0 mb-[var(--space-5)] font-[family-name:var(--font-lilita-one)] text-[clamp(2rem,5vw,3rem)] leading-[1.15] font-bold text-[var(--text)]">
              We&apos;re building AI that belongs to you
            </h1>
            <p className="mx-auto mb-0 max-w-[640px] text-[clamp(1rem,2vw,1.15rem)] leading-relaxed text-[var(--text-shade)]">
              OpenBrew.ai is a small team making personal AI accessible to
              everyone — no subscriptions, no data harvesting, no limits.
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-[var(--page-max-width)] px-[var(--page-padding)] pb-[var(--space-9)]">
          {/* Description */}
          <section className="mb-[var(--space-8)]">
            <h2 className="mb-[var(--space-4)] text-lg font-bold text-[var(--text)]">
              Who we are
            </h2>
            <hr className="mb-[var(--space-5)] border-[var(--border-color)]" />
            <p className="m-0 leading-relaxed !text-[var(--text-shade)]">
              OpenBrew.ai develops next-generation interfaces to empower users
              with personal agents that utilize their favorite tools to enhance
              productivity. With a focus on privacy, these agents operate
              securely from devices users own. Our core GenAI engine enables
              seamless integration for third-party developers to create
              AI-powered applications. OpenBrew.ai&apos;s first app, FileBuff,
              is designed to scale knowledge workforces in industries requiring
              rigorous privacy, security, and compliance, including DoD,
              Government, and Healthcare.
            </p>
          </section>

          {/* Mission */}
          <section className="mb-[var(--space-8)]">
            <h2 className="mb-[var(--space-4)] text-lg font-bold text-[var(--text)]">
              Our mission
            </h2>
            <hr className="mb-[var(--space-5)] border-[var(--border-color)]" />
            <div className="flex flex-col gap-[var(--space-4)] leading-relaxed [&_p]:!text-[var(--text-shade)]">
              <p className="m-0">
                AI is transforming every industry, but most of the value is
                captured by a handful of cloud providers. We believe the future
                is different: AI should run on <strong>your</strong> hardware,
                under <strong>your</strong> control, trained on{" "}
                <strong>your</strong> data.
              </p>
              <p className="m-0">
                OpenBrew.ai exists to make that future real. We build open,
                personal AI tools that work on a laptop, behind a firewall, or
                in an air-gapped environment — so individuals and organizations
                can own their AI stack end-to-end.
              </p>
            </div>
          </section>

          {/* Goals */}
          <section className="mb-[var(--space-8)]">
            <h2 className="mb-[var(--space-4)] text-lg font-bold text-[var(--text)]">
              What we&apos;re working toward
            </h2>
            <hr className="mb-[var(--space-5)] border-[var(--border-color)]" />
            <div className="flex flex-col gap-[var(--space-4)] leading-relaxed [&_p]:!text-[var(--text-shade)]">
              <p className="m-0">
                <strong>Make on-device AI practical.</strong> Not a demo — real
                products that people use every day for search, automation, and
                document intelligence.
              </p>
              <p className="m-0">
                <strong>Ship products, not platforms.</strong> We build
                opinionated, finished tools (FileBuff, Scrubber, Prezzy) on top
                of the Obrew engine, so users get value immediately.
              </p>
              <p className="m-0">
                <strong>Serve everyone from individuals to enterprises.</strong>{" "}
                A freelancer and a defense contractor should both be able to run
                our software — the architecture supports both.
              </p>
              <p className="m-0">
                <strong>Stay lean and move fast.</strong> Small team, short
                feedback loops, real users. We ship weekly and learn from what
                lands.
              </p>
            </div>
          </section>

          {/* What it's like */}
          <section className="mb-[var(--space-8)]">
            <h2 className="mb-[var(--space-4)] text-lg font-bold text-[var(--text)]">
              What it&apos;s like here
            </h2>
            <hr className="mb-[var(--space-5)] border-[var(--border-color)]" />
            <div className="flex flex-col gap-[var(--space-4)] leading-relaxed [&_p]:!text-[var(--text-shade)]">
              <p className="m-0">
                We&apos;re fully remote and async-first. There are no standing
                meetings for the sake of meetings. You&apos;ll communicate
                through written updates, short syncs when needed, and pull
                requests. We trust people to manage their own time.
              </p>
              <p className="m-0">
                The work is technical and the problems are hard — inference
                optimization, cross-platform desktop apps, RAG pipelines,
                on-premise deployment. You&apos;ll ship code that real users
                depend on, not prototypes that sit in a backlog.
              </p>
              <p className="m-0">
                We&apos;re a small team, which means you&apos;ll have a lot of
                ownership and a lot of context. Everyone touches the product
                directly. There&apos;s no middle management layer between you
                and the work.
              </p>
            </div>
          </section>

          {/* Expectations */}
          <section className="mb-[var(--space-8)]">
            <h2 className="mb-[var(--space-4)] text-lg font-bold text-[var(--text)]">
              What we expect
            </h2>
            <hr className="mb-[var(--space-5)] border-[var(--border-color)]" />
            <div className="flex flex-col gap-[var(--space-4)] leading-relaxed [&_p]:!text-[var(--text-shade)]">
              <p className="m-0">
                <strong>Own your work.</strong> We don&apos;t micromanage. You
                pick up a problem, figure out the right solution, and ship it.
                Ask for help when you need it, but drive things forward.
              </p>
              <p className="m-0">
                <strong>Write clearly.</strong> Remote teams run on written
                communication. Good PRs, concise docs, and clear async updates
                matter more than Slack presence.
              </p>
              <p className="m-0">
                <strong>Ship with quality.</strong> We move fast, but we
                don&apos;t ship broken things. Test what you build, think about
                edge cases, and care about the user experience.
              </p>
              <p className="m-0">
                <strong>Stay curious.</strong> The AI landscape changes weekly.
                We expect you to keep up, experiment, and bring ideas back to
                the team.
              </p>
              <p className="m-0">
                <strong>Be direct.</strong> If something is wrong, say so. If
                you disagree, make your case. We&apos;d rather have a hard
                conversation than let a bad decision slide.
              </p>
            </div>
          </section>

          {/* CTA */}
          <section className="rounded-[var(--ui-radius-lg)] border border-[var(--border-color)] bg-[var(--background-alternate)] p-[var(--space-6)] text-center">
            <h3 className="mb-[var(--space-3)] text-lg font-bold text-[var(--text)]">
              Sound like your kind of place?
            </h3>
            <p className="mb-[var(--space-5)] text-sm text-[var(--text-shade)]">
              Check out our open roles and apply.
            </p>
            <Button
              href="/jobs#open-roles"
              size="large"
              type="primary"
              location="body"
            >
              View open roles
            </Button>
          </section>
        </div>
      </main>

      <Footer title="OpenBrew.ai" />
    </div>
  );
}
