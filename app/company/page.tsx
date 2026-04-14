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
              We build AI that belongs to you
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
              Why work here
            </h2>
            <hr className="mb-[var(--space-5)] border-[var(--border-color)]" />
            <div className="flex flex-col gap-[var(--space-4)] leading-relaxed [&_p]:!text-[var(--text-shade)]">
              <p className="m-0">
                Work on problems that matter to our country and average people.
              </p>
              <p className="m-0">
                Have real ownership over what you ship and direct impact on the
                business.
              </p>
              <p className="m-0">
                You will ship code that can have an impact on national security
                and our freedom.
              </p>
              <p className="m-0">Live and work in the future.</p>
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
                We trust people to manage their own time and work.
              </p>
              <p className="m-0">
                You will be solving problems 6-12 months into the future, using
                tools and models yet to be released.
              </p>
              <p className="m-0">
                Small teams, short feedback loops, high-impact users. We ship
                frequently and learn from what lands.
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
                Own your work. Pick a problem, figure out the solution, ship it
                and ask for help when needed.
              </p>
              <p className="m-0">
                Explain your thoughts clearly. Concise PRs, short docs, and
                clear updates matter more than Slack presence.
              </p>
              <p className="m-0">
                Move fast and ship with quality. Ship things you have read and
                understood.
              </p>
              <p className="m-0">
                Stay curious. The AI landscape changes daily.
              </p>
              <p className="m-0">
                Be direct. If something is wrong, say so. If you disagree, make
                your case.
              </p>
              <p className="m-0">
                Everyone is part of this team. We ship together, we die
                together.
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
