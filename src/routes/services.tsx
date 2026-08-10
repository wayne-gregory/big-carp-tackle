import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SiteShell, PageHero } from "@/components/site/shell";
import { Button } from "@/components/ui/button";
import { services, whyUs } from "@/lib/company";
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
        "Infrastructure & virtualisation, Azure cloud, backup & DR, security, and IT automation — for growing businesses with more complex environments.",
      path: "/services",
      keywords: [
        ...coreKeywords,
        "VMware consultancy",
        "Azure migration",
        "disaster recovery design",
        "IT automation",
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
        title="Infrastructure & cloud that solves real problems"
        description="Five focused areas — not a laundry list of every IT task. Built to convert complexity into performance, reliability, and a clear next step: a consultation."
      />

      <section className="section-pad border-b border-border bg-bg-elevated">
        <div className="container-page">
          <div className="rounded-xl border border-accent/20 bg-bg p-6 shadow-soft sm:flex sm:items-center sm:justify-between sm:gap-8 sm:p-8">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                Also available
              </p>
              <h2 className="mt-2 font-display text-xl font-semibold text-ink sm:text-2xl">
                Microsoft 365 Business Premium
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-fg-muted sm:text-base">
                Dedicated page for growing firms on Business Premium — setup,
                security, Intune, and migration without enterprise oversell.
              </p>
            </div>
            <Button asChild className="mt-5 shrink-0 sm:mt-0">
              <Link to="/microsoft-365">
                View Business Premium
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page space-y-6">
          {services.map((s) => (
            <article
              key={s.slug}
              className="rounded-xl border border-border bg-bg-elevated p-6 shadow-soft sm:p-8"
            >
              <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
                {s.title}
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-fg-muted sm:text-base">
                {s.body}
              </p>
              <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                {(expansions[s.slug] ?? []).map((line) => (
                  <li
                    key={line}
                    className="flex gap-2 text-sm text-fg"
                  >
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
