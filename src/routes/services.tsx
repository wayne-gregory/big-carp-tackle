import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { SiteShell, PageHero } from "@/components/site/shell";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/company";
import {
  breadcrumbJsonLd,
  coreKeywords,
  jsonLdScript,
  pageHead,
} from "@/lib/seo";

export const Route = createFileRoute("/services")({
  head: () => ({
    ...pageHead({
      title: "Microsoft 365, cloud & IT services",
      description:
        "Microsoft 365 Business Premium, identity and devices, backup, Azure hybrid, and servers for small and mid-sized businesses in the UK.",
      path: "/services",
      keywords: [
        ...coreKeywords,
        "Microsoft 365 services",
        "Intune setup",
        "business IT consultancy",
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

const advantages = [
  {
    title: "Sized for SMEs & mid-market",
    body: "Business Premium–class Microsoft estates, hybrid offices, and growing teams — not only blue-chip programmes.",
  },
  {
    title: "No oversell",
    body: "Licences, tools, and projects matched to what you need now, with a clear path if you grow.",
  },
  {
    title: "Senior without the barrier",
    body: "Deep infrastructure experience applied in plain language and practical packages smaller companies can use.",
  },
  {
    title: "Microsoft-first, open to hybrid",
    body: "Microsoft 365, Entra, Intune, Azure — plus servers and VMware when on-prem is still the right call.",
  },
] as const;

const faqs = [
  {
    q: "Who is InovaCore for?",
    a: "Small and mid-sized businesses — including companies on Microsoft 365 Business Premium or similar — that want reliable IT without hiring a full enterprise architecture team.",
  },
  {
    q: "Do you only do large VMware projects?",
    a: "No. Virtualisation and servers are available when you need them, but a large share of work is Microsoft 365, identity, devices, backup, and hybrid cloud for growing organisations.",
  },
  {
    q: "Can you help with Microsoft 365 Business Premium?",
    a: "Yes. Setup, migration, security baselines, Intune/device management, SharePoint/Teams structure, and ongoing tidy-up so Business Premium is used properly — not just licensed.",
  },
  {
    q: "How do engagements usually start?",
    a: "A short conversation about your size, current tools, and pain points — then a clear proposal. No long sales process.",
  },
] as const;

function ServicesPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Services"
        title="Microsoft 365, cloud & IT for growing companies"
        description="Practical help with Microsoft 365 Business Premium, identity and devices, backup, Azure/hybrid, and servers — right-sized for small and mid-sized businesses."
      />

      <section className="section-pad">
        <div className="container-page">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <article
                key={s.slug}
                className="rounded-xl border border-border bg-bg-elevated p-6 shadow-soft"
              >
                <h2 className="font-display text-xl font-semibold text-ink">
                  {s.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-fg-muted">
                  {s.body}
                </p>
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
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {advantages.map((a) => (
              <div
                key={a.title}
                className="flex gap-3 rounded-xl border border-border bg-bg p-5"
              >
                <CheckCircle2
                  className="mt-0.5 size-5 shrink-0 text-accent"
                  strokeWidth={1.75}
                />
                <div>
                  <h3 className="font-semibold text-ink">{a.title}</h3>
                  <p className="mt-1 text-sm text-fg-muted">{a.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page max-w-3xl">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            Frequently asked questions
          </h2>
          <dl className="mt-10 space-y-6">
            {faqs.map((f) => (
              <div
                key={f.q}
                className="rounded-xl border border-border bg-bg-elevated p-5"
              >
                <dt className="font-semibold text-ink">{f.q}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-fg-muted">
                  {f.a}
                </dd>
              </div>
            ))}
          </dl>
          <div className="mt-10">
            <Button asChild>
              <Link to="/contact">Talk about your setup</Link>
            </Button>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
