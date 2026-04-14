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
              Build AI that belongs to everyone
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
              productivity. Our open-source GenAI engine lets third-party
              developers create AI-powered apps to scale their knowledge
              workforces in privacy-critical industries like DoD, Government,
              and Healthcare.
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
                AI is transforming every job, but most of the value created is
                captured by a handful of companies. We believe the future of AI
                is on your hardware, under your control, using your data in
                privacy.
              </p>
            </div>
          </section>

          {/* Goals */}
          <section className="mb-[var(--space-8)]">
            <h2 className="mb-[var(--space-4)] text-lg font-bold text-[var(--text)]">
              Why work here?
            </h2>
            <hr className="mb-[var(--space-5)] border-[var(--border-color)]" />
            <ul className="flex list-disc flex-col gap-4 pl-5 leading-relaxed [&_li]:!text-[var(--text-shade)]">
              <li>
                Mission driven. Work on problems that matter to our country and
                everyday people.
              </li>
              <li>
                Have real ownership over what you ship and direct impact on the
                business.
              </li>
              <li>There is no VC telling us what trend to cash in on.</li>
              <li>
                The opportunity to learn and implement the latest GenAI
                techniques and skills.
              </li>
              <li>Live and work in the future.</li>
            </ul>
          </section>

          {/* What it's like */}
          <section className="mb-[var(--space-8)]">
            <h2 className="mb-[var(--space-4)] text-lg font-bold text-[var(--text)]">
              What&apos;s like the vibe?
            </h2>
            <hr className="mb-[var(--space-5)] border-[var(--border-color)]" />
            <ul className="flex list-disc flex-col gap-4 pl-5 leading-relaxed [&_li]:!text-[var(--text-shade)]">
              <li>We trust people to manage their own time and work.</li>
              <li>
                You will be solving problems and building 6-12 months into the
                future.
              </li>
              <li>Small teams, short feedback loops, high-impact users.</li>
            </ul>
          </section>

          {/* Expectations */}
          <section className="mb-[var(--space-8)]">
            <h2 className="mb-[var(--space-4)] text-lg font-bold text-[var(--text)]">
              What we expect from you
            </h2>
            <hr className="mb-[var(--space-5)] border-[var(--border-color)]" />
            <ul className="flex list-disc flex-col gap-4 pl-5 leading-relaxed [&_li]:!text-[var(--text-shade)]">
              <li>
                Own your work. Pick a problem, find the solution, ship it and
                ask for help when needed.
              </li>
              <li>
                Explain your thoughts clearly. Scoped PRs, concise docs, and
                clear updates.
              </li>
              <li>
                Move fast and ship with quality. Ship things you have read and
                understood.
              </li>
              <li>
                Everyone, regardless of role, should be capable of interviewing
                and talking with customers.
              </li>
              <li>Stay curious. The AI landscape changes daily.</li>
              <li>
                Be direct. If something is wrong, say so. If you disagree, make
                your case.
              </li>
              <li>
                Everyone is part of this team. We ship together and die
                together.
              </li>
            </ul>
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
