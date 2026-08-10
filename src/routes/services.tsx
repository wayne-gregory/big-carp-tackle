import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, X } from "lucide-react";
import { SiteShell, PageHero } from "@/components/site/shell";
import { Button } from "@/components/ui/button";
import { packages, services, whyUs } from "@/lib/company";
import {
  breadcrumbJsonLd,
  coreKeywords,
  jsonLdScript,
  pageHead,
} from "@/lib/seo";

export const Route = createFileRoute("/services")({
  head: () => ({
    ...pageHead({
      title: "Infrastructure & cloud services",
      description:
        "Named packages: Infrastructure Health Check, Business Premium Launch, and Backup & DR Review — plus specialist infrastructure and cloud services for growing UK businesses.",
      path: "/services",
      keywords: [
        ...coreKeywords,
        "infrastructure health check",
        "Microsoft 365 Business Premium setup",
        "backup disaster recovery review",
        "VMware consultancy",
      ],
    }),
    scripts: [
      jsonLdScript(
        breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ]),
      ),
    ],
  }),
  component: ServicesPage,
});

const expansions: Record<string, string[]> = {
  infrastructure: [
    "VMware optimisation & upgrades",
    "Performance tuning & capacity",
    "Infrastructure health checks",
    "Clean design for grown estates",
  ],
  "cloud-azure": [
    "Azure migrations & hybrid",
    "Microsoft 365 / Business Premium",
    "Azure Virtual Desktop where it fits",
    "Cost-aware cloud architecture",
  ],
  "backup-dr": [
    "Backup design & tooling",
    "DR planning & runbooks",
    "Recovery testing",
    "RPO/RTO the business understands",
  ],
  security: [
    "Identity & access (Entra ID)",
    "Endpoint security & Intune",
    "Hardening & baselines",
    "Practical compliance support",
  ],
  automation: [
    "PowerShell automation",
    "Process improvement",
    "Operational reporting",
    "Standard builds & less toil",
  ],
};

function ServicesPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Services"
        title="Better performance. Stronger resilience. Less IT friction."
        description="Start with a named package when you want a clear scope — or use the wider service areas for larger projects. Specialist delivery, not a ticket queue."
      />

      {/* Named packages */}
      <section
        className="section-pad border-b border-border bg-bg-elevated"
        aria-labelledby="packages-heading"
      >
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              Packages
            </p>
            <h2
              id="packages-heading"
              className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl"
            >
              Three clear ways to start
            </h2>
            <p className="mt-3 text-fg-muted">
              Fixed intent and deliverables. Pricing depends on size and
              complexity — we confirm that after a short conversation.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {packages.map((pkg) => (
              <article
                key={pkg.slug}
                id={pkg.slug}
                className="flex flex-col rounded-xl border border-border bg-bg p-6 shadow-soft sm:p-7"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                  Package
                </p>
                <h3 className="mt-2 font-display text-xl font-semibold text-ink">
                  {pkg.name}
                </h3>
                <p className="mt-2 text-sm font-medium text-fg">{pkg.tagline}</p>
                <p className="mt-3 text-sm leading-relaxed text-fg-muted">
                  <span className="font-medium text-fg">Best for: </span>
                  {pkg.bestFor}
                </p>
                <p className="mt-2 text-xs text-fg-subtle">{pkg.duration}</p>

                <div className="mt-5 rounded-lg border border-border bg-bg-elevated p-3">
                  <p className="text-xs font-semibold uppercase tracking-wider text-fg-subtle">
                    You leave with
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-fg">
                    {pkg.outcome}
                  </p>
                </div>

                <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-fg-subtle">
                  Includes
                </p>
                <ul className="mt-2 space-y-2">
                  {pkg.includes.map((line) => (
                    <li key={line} className="flex gap-2 text-sm text-fg-muted">
                      <CheckCircle2
                        className="mt-0.5 size-4 shrink-0 text-accent"
                        strokeWidth={2}
                      />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-fg-subtle">
                  Not included
                </p>
                <ul className="mt-2 space-y-2">
                  {pkg.notIncluded.map((line) => (
                    <li key={line} className="flex gap-2 text-sm text-fg-subtle">
                      <X
                        className="mt-0.5 size-4 shrink-0 opacity-60"
                        strokeWidth={2}
                      />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-col gap-2 pt-8">
                  <Button asChild className="w-full">
                    <Link to="/contact">Enquire about this package</Link>
                  </Button>
                  {"href" in pkg && pkg.href ? (
                    <Button asChild variant="ghost" size="sm" className="w-full">
                      <Link to={pkg.href}>
                        More on Business Premium
                        <ArrowRight className="size-3.5" />
                      </Link>
                    </Button>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Capability areas */}
      <section className="section-pad" aria-labelledby="capabilities-heading">
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              Capabilities
            </p>
            <h2
              id="capabilities-heading"
              className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl"
            >
              Wider project work
            </h2>
            <p className="mt-3 text-fg-muted">
              Beyond the packages — ongoing programmes, migrations, and
              specialist delivery across these areas.
            </p>
          </div>
          <div className="mt-10 space-y-6">
            {services.map((s) => (
              <article
                key={s.slug}
                className="rounded-xl border border-border bg-bg-elevated p-6 shadow-soft sm:p-8"
              >
                <h3 className="font-display text-xl font-semibold text-ink sm:text-2xl">
                  {s.title}
                </h3>
                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-fg-muted sm:text-base">
                  {s.body}
                </p>
                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {(expansions[s.slug] ?? []).map((line) => (
                    <li key={line} className="flex gap-2 text-sm text-fg">
                      <CheckCircle2
                        className="mt-0.5 size-4 shrink-0 text-accent"
                        strokeWidth={2}
                      />
                      {line}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-border bg-bg-elevated">
        <div className="container-page">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            Why companies choose InovaCore
          </h2>
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {whyUs.map((a) => (
              <div
                key={a}
                className="flex gap-3 rounded-xl border border-border bg-bg p-5"
              >
                <CheckCircle2
                  className="mt-0.5 size-5 shrink-0 text-accent"
                  strokeWidth={1.75}
                />
                <p className="text-sm text-fg">{a}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Button asChild>
              <Link to="/contact">Book a consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
