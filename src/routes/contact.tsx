import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Mail } from "lucide-react";
import { SiteShell, PageHero } from "@/components/site/shell";
import { ContactForm } from "@/components/site/contact-form";
import { company } from "@/lib/company";

export const Route = createFileRoute("/contact")({ component: ContactPage });

const faqs = [
  {
    q: "Is InovaCore only for large enterprises?",
    a: "No. We focus on small and mid-sized businesses — including Microsoft 365 Business Premium environments — with senior help that is approachable and right-sized.",
  },
  {
    q: "What do you typically help with?",
    a: "Microsoft 365, identity and devices, backup and continuity, Azure/hybrid, and servers or virtualisation when you still run your own kit.",
  },
  {
    q: "How do we start?",
    a: "Email hello@inovacore.co.uk or use the form. A short note on company size, current tools, and what is painful is enough for a first reply.",
  },
  {
    q: "Can you work alongside an existing IT person or MSP?",
    a: "Yes. Many clients need a specialist for Microsoft 365, security baselines, or infrastructure projects while keeping their day-to-day support in place.",
  },
] as const;

function ContactPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Contact"
        title="Get in touch"
        description="Whether you are sorting Microsoft 365 Business Premium, backup, hybrid cloud, or servers — start with a short conversation. No enterprise sales process."
      />

      <section className="section-pad">
        <div className="container-page grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="space-y-8 lg:col-span-5">
            <div>
              <h2 className="font-display text-xl font-semibold text-ink">
                Reach out
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                Tell us roughly how many people you have, what you use today
                (Microsoft 365, servers, backup), and what you want to improve.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href={`mailto:${company.email}`}
                className="flex items-start gap-3 rounded-xl border border-border bg-bg-elevated p-4 shadow-soft transition-colors hover:border-accent/40"
              >
                <Mail className="mt-0.5 size-5 shrink-0 text-accent" />
                <div>
                  <p className="text-sm font-semibold text-ink">Email</p>
                  <p className="mt-0.5 break-all text-sm text-fg-muted">
                    {company.email}
                  </p>
                </div>
              </a>

              {company.offices.map((o) => (
                <div
                  key={o.label}
                  className="flex items-start gap-3 rounded-xl border border-border bg-bg-elevated p-4 shadow-soft"
                >
                  <MapPin className="mt-0.5 size-5 shrink-0 text-accent" />
                  <div>
                    <p className="text-sm font-semibold text-ink">{o.label}</p>
                    <p className="mt-0.5 text-sm text-fg-muted">{o.address}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-border bg-bg-elevated">
        <div className="container-page max-w-3xl">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
            Frequently asked questions
          </h2>
          <dl className="mt-8 space-y-6">
            {faqs.map((f) => (
              <div key={f.q} className="border-b border-border pb-6">
                <dt className="font-semibold text-ink">{f.q}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-fg-muted">
                  {f.a}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </SiteShell>
  );
}
