import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/blocks/Header";
import Button from "@/components/Button";
import JobIcon from "@/components/JobIcon";
import { jobs, getJobBySlug } from "@/data/jobs";

export function generateStaticParams() {
  return jobs.map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const job = getJobBySlug(slug);
  if (!job) return { title: "Job Not Found | OpenBrew.ai" };
  return {
    title: `${job.title} | OpenBrew.ai Jobs`,
    description: job.shortDescription,
  };
}

export default async function JobDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const job = getJobBySlug(slug);
  if (!job) notFound();

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Header id="top" title="" />

      <main>
        {/* Top bar with breadcrumb */}
        <div className="bg-[var(--background-alternate)] pt-[calc(var(--page-header-height)+var(--space-5))] pb-[var(--space-5)]">
          <div className="mx-auto max-w-[var(--page-max-width)] px-[var(--page-padding)]">
            <nav className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
              <Link
                href="/jobs"
                className="text-[var(--accent-dark)] no-underline hover:underline"
              >
                Jobs
              </Link>
              <span>/</span>
              <span className="text-[var(--text-shade)]">{job.title}</span>
            </nav>
          </div>
        </div>

        {/* Job header card */}
        <div className="bg-[var(--background-alternate)] pb-[var(--space-8)]">
          <div className="mx-auto max-w-[var(--page-max-width)] px-[var(--page-padding)]">
            <div className="rounded-[var(--ui-radius-xl)] border border-[var(--border-color)] bg-[var(--background)] p-[var(--space-6)] shadow-[var(--shadow-card)] sm:p-[var(--space-7)]">
              <div className="flex flex-col gap-[var(--space-5)] sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-start gap-[var(--space-5)]">
                  {/* Icon */}
                  <div className="flex size-14 shrink-0 items-center justify-center rounded-[var(--ui-radius-md)] bg-gradient-to-br from-[var(--accent-light)] to-[var(--accent-normal)] shadow-[0_2px_8px_var(--accent-gold-glow)]">
                    <JobIcon icon={job.icon} size={26} />
                  </div>
                  <div>
                    <h1 className="m-0 text-xl leading-tight font-bold text-[var(--text)] sm:text-2xl">
                      {job.title}
                    </h1>
                    <p className="mt-1 text-sm text-[var(--text-shade)]">
                      {job.salary} &bull; Team: {job.team}
                    </p>
                  </div>
                </div>
                <div className="flex shrink-0 gap-[var(--space-3)]">
                  <Button
                    href="mailto:sorob+jobs@openbrew.ai"
                    size="large"
                    type="primary"
                    location="body"
                  >
                    Apply
                  </Button>
                </div>
              </div>

              {/* Tags */}
              <div className="mt-[var(--space-5)] flex flex-wrap gap-[var(--space-3)]">
                {[
                  { icon: "location", label: job.location },
                  { icon: "time", label: job.type },
                  { icon: "schedule", label: job.schedule },
                  { icon: "dept", label: job.department },
                  { icon: "exp", label: job.experience },
                ].map((tag) => (
                  <span
                    key={tag.label}
                    className="inline-flex items-center gap-1.5 rounded-[var(--ui-radius-sm)] border border-[var(--border-color)] px-3 py-1.5 text-sm text-[var(--text-shade)]"
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Job body */}
        <div className="mx-auto max-w-[var(--page-max-width)] px-[var(--page-padding)] py-[var(--space-8)]">
          <div className="flex flex-col gap-[var(--space-8)]">
            {/* About */}
            <section>
              <h2 className="mb-[var(--space-4)] text-lg font-bold text-[var(--text)]">
                About the role
              </h2>
              <hr className="mb-[var(--space-5)] border-[var(--border-color)]" />
              <p className="leading-relaxed whitespace-pre-line text-[var(--text-shade)]">
                {job.about}
              </p>
            </section>

            {/* What you'll do */}
            <section>
              <h2 className="mb-[var(--space-4)] text-lg font-bold text-[var(--text)]">
                What you&apos;ll do
              </h2>
              <hr className="mb-[var(--space-5)] border-[var(--border-color)]" />
              <ul className="flex flex-col gap-[var(--space-3)] pl-5 text-[var(--text-shade)]">
                {job.responsibilities.map((item) => (
                  <li key={item} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* Qualifications */}
            <section>
              <h2 className="mb-[var(--space-4)] text-lg font-bold text-[var(--text)]">
                Qualifications
              </h2>
              <hr className="mb-[var(--space-5)] border-[var(--border-color)]" />
              <ul className="flex flex-col gap-[var(--space-3)] pl-5 text-[var(--text-shade)]">
                {job.qualifications.map((item) => (
                  <li key={item} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* Nice to have */}
            {job.niceToHave.length > 0 && (
              <section>
                <h2 className="mb-[var(--space-4)] text-lg font-bold text-[var(--text)]">
                  Nice to have
                </h2>
                <hr className="mb-[var(--space-5)] border-[var(--border-color)]" />
                <ul className="flex flex-col gap-[var(--space-3)] pl-5 text-[var(--text-shade)]">
                  {job.niceToHave.map((item) => (
                    <li key={item} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Benefits */}
            {job.benefits.length > 0 && (
              <section>
                <h2 className="mb-[var(--space-4)] text-lg font-bold text-[var(--text)]">
                  Benefits
                </h2>
                <hr className="mb-[var(--space-5)] border-[var(--border-color)]" />
                <ul className="flex flex-col gap-[var(--space-3)] pl-5 text-[var(--text-shade)]">
                  {job.benefits.map((item) => (
                    <li key={item} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Apply CTA */}
            <section className="mt-[var(--space-4)] rounded-[var(--ui-radius-lg)] border border-[var(--border-color)] bg-[var(--background-alternate)] p-[var(--space-6)] text-center">
              <h3 className="mb-[var(--space-3)] text-lg font-bold text-[var(--text)]">
                Interested in this role?
              </h3>
              <p className="mb-[var(--space-5)] text-sm text-[var(--text-shade)]">
                Send us your resume and a short note about how you can
                contribute to OpenBrew.ai.
              </p>
              <Button
                href="mailto:sorob+jobs@openbrew.ai"
                size="large"
                type="primary"
                location="body"
              >
                APPLY NOW
              </Button>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
