"use client";

import { useState } from "react";
import Link from "next/link";
import JobIcon from "@/components/JobIcon";
import { jobs, getJobDepartments } from "@/data/jobs";

export default function JobListings() {
  const departments = ["All", ...getJobDepartments()];
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? jobs : jobs.filter((j) => j.department === active);

  return (
    <>
      {/* Filter bar */}
      <div
        id="open-roles"
        className="mx-auto flex max-w-[var(--page-max-width)] flex-wrap items-center justify-between gap-[var(--space-4)] px-[var(--page-padding)] pt-[var(--space-6)]"
      >
        <span className="text-[0.85rem] font-bold tracking-wide text-[var(--text-shade)] uppercase">
          {filtered.length} open role{filtered.length !== 1 && "s"}
        </span>
        <div className="flex flex-wrap gap-[var(--space-2)]">
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setActive(dept)}
              className={`cursor-pointer rounded-[var(--ui-radius-md)] border px-[var(--space-4)] py-[var(--space-2)] text-[0.85rem] font-semibold transition-[border-color,color,background-color] duration-150 ${
                dept === active
                  ? "border-[var(--accent-btn)] bg-[var(--accent-light)] text-[var(--text)]"
                  : "border-[var(--border-color)] bg-[var(--background)] text-[var(--text-shade)] hover:border-[var(--accent-btn)] hover:text-[var(--text)]"
              }`}
            >
              {dept}
            </button>
          ))}
        </div>
      </div>

      {/* Job listings */}
      <div className="mx-auto flex max-w-[var(--page-max-width)] flex-col px-[var(--page-padding)] pt-[var(--space-6)] pb-[var(--space-9)]">
        {filtered.map((job, i) => (
          <Link
            key={job.slug}
            href={`/jobs/${job.slug}`}
            className={`group flex items-start gap-[var(--space-5)] border-b border-[var(--border-color)] px-[var(--space-5)] py-[var(--space-5)] no-underline transition-colors duration-200 hover:bg-[var(--background-alternate)] ${
              i === 0 ? "border-t" : ""
            }`}
          >
            {/* Icon */}
            <div className="flex size-12 shrink-0 items-center justify-center rounded-[var(--ui-radius-md)] bg-gradient-to-br from-[var(--accent-light)] to-[var(--accent-normal)]">
              <JobIcon icon={job.icon} size={22} />
            </div>

            {/* Info */}
            <div className="min-w-0 flex-1">
              <p className="m-0 mb-[var(--space-1)] text-[0.8rem] font-bold tracking-wide text-[var(--accent-dark)] uppercase">
                {job.team}
              </p>
              <h2 className="m-0 mb-[var(--space-2)] text-[1.1rem] leading-tight font-bold text-[var(--text)]">
                {job.title}
              </h2>
              <div className="flex flex-wrap items-center gap-[var(--space-2)] text-[0.825rem] text-[var(--text-muted)]">
                <span>{job.type}</span>
                <span className="select-none">&middot;</span>
                <span>{job.schedule}</span>
                <span className="select-none">&middot;</span>
                <span>{job.department}</span>
                <span className="select-none">&middot;</span>
                <span>{job.location}</span>
                <span className="select-none">&middot;</span>
                <span>{job.experience}</span>
              </div>
            </div>

            {/* Salary (hidden on mobile) */}
            <div className="hidden shrink-0 items-center gap-[var(--space-2)] text-[0.9rem] font-semibold text-[var(--text)] sm:flex">
              {job.salary}
            </div>

            {/* Arrow */}
            <svg
              className="ml-auto shrink-0 self-center text-[var(--text-muted)] transition-[transform,color] duration-150 group-hover:translate-x-1 group-hover:text-[var(--accent-dark)]"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </Link>
        ))}
      </div>
    </>
  );
}
