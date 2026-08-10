import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Mail } from "lucide-react";
import { SiteShell, PageHero } from "@/components/site/shell";
import { ContactForm } from "@/components/site/contact-form";
import { company } from "@/lib/company";
import {
  breadcrumbJsonLd,
  coreKeywords,
  jsonLdScript,
  pageHead,
} from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => ({
    ...pageHead({
      title: "Book a consultation",
      description:
        "Book a consultation with InovaCore about infrastructure, cloud, backup, security, or Microsoft 365. Based in West Sussex, working with businesses across the UK.",
      path: "/contact",
      keywords: [...coreKeywords, "book IT consultation", "infrastructure quote"],
    }),
    scripts: [
      jsonLdScript(
        breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]),
      ),
    ],
  }),
  component: ContactPage,
});

const faqs = [
  {
    q: "What should I include in a first message?",
    a: "Company size, what is painful (performance, cloud, backup, security, Microsoft 365), and whether you want a consultation or a quote. That is enough to start.",
  },
  {
    q: "Do you only work with large enterprises?",
    a: "No. We focus on growing businesses with more complex environments — including mid-market and Business Premium–scale Microsoft estates.",
  },
  {
    q: "What do you typically help with?",
    a: "Infrastructure & virtualisation, Azure/hybrid cloud, backup & DR, security & identity, automation, and Microsoft 365 Business Premium when it fits.",
  },
  {
    q: "Can you work alongside an existing IT person or MSP?",
    a: "Yes. Many clients need a specialist for infrastructure or cloud projects while keeping day-to-day support in place.",
  },
] as const;

function ContactPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Contact"
        title="Let’s talk about your IT"
        description="Book a consultation or request a quote — infrastructure, cloud, backup, security, or Microsoft 365. No enterprise sales process."
      />

      <section className="section-pad">
        <div className="container-page grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="space-y-8 lg:col-span-5">
            <div>
              <h2 className="font-display text-xl font-semibold text-ink">
                Book a consultation
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                Tell us roughly how many people you have, what is in your
                environment today, and what you want to improve. We will respond
                with a clear next step.
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
