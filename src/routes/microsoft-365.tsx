import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  Laptop,
  Mail,
  Shield,
  Users,
} from "lucide-react";
import { SiteShell, PageHero } from "@/components/site/shell";
import { Button } from "@/components/ui/button";
import {
  breadcrumbJsonLd,
  coreKeywords,
  jsonLdScript,
  pageHead,
  SITE_URL,
} from "@/lib/seo";

export const Route = createFileRoute("/microsoft-365")({
  head: () => ({
    ...pageHead({
      title: "Microsoft 365 Business Premium for growing companies",
      description:
        "Get Microsoft 365 Business Premium set up properly — email, Teams, SharePoint, Intune, security and devices — for small and mid-sized UK businesses. Right-sized, no enterprise oversell.",
      path: "/microsoft-365",
      keywords: [
        ...coreKeywords,
        "Microsoft 365 Business Premium setup",
        "Business Premium migration",
        "Microsoft 365 for SMEs",
        "Intune for small business",
        "M365 consultant West Sussex",
      ],
    }),
    scripts: [
      jsonLdScript(
        breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Microsoft 365 Business Premium", path: "/microsoft-365" },
        ]),
      ),
      jsonLdScript({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Microsoft 365 Business Premium setup & support",
        provider: {
          "@type": "ProfessionalService",
          name: "InovaCore",
          url: SITE_URL,
        },
        areaServed: "GB",
        description:
          "Microsoft 365 Business Premium design, migration, security baselines, Intune device management, and practical ongoing support for SMEs.",
        url: `${SITE_URL}/microsoft-365`,
      }),
    ],
  }),
  component: Microsoft365Page,
});

const included = [
  {
    icon: Mail,
    title: "Email, Teams & collaboration",
    body: "Exchange Online, Teams, and SharePoint structured so people can find work without a free-for-all of shared drives.",
  },
  {
    icon: Shield,
    title: "Security that staff will use",
    body: "MFA, Entra ID, conditional access and sensible defaults — protection without locking the business out of its own systems.",
  },
  {
    icon: Laptop,
    title: "Devices with Intune",
    body: "Business Premium includes device management. We turn that into real policy: company data protected on laptops and phones.",
  },
  {
    icon: Users,
    title: "Sized for your headcount",
    body: "Built for the Business Premium band of companies — not a scaled-down bank project, and not a DIY checklist left on your desk.",
  },
] as const;

const steps = [
  {
    title: "Discover",
    body: "How many people, what you use today (email host, devices, on-prem), and what is painful.",
  },
  {
    title: "Design",
    body: "Licence fit, migration plan, security baseline, and device approach matched to your risk and budget.",
  },
  {
    title: "Migrate & harden",
    body: "Mailboxes, files, Teams, MFA, Intune policies — tested cutovers so Monday morning still works.",
  },
  {
    title: "Hand over",
    body: "Admin notes, who does what, and optional ongoing help when you need a senior pair of hands.",
  },
] as const;

const faqs = [
  {
    q: "Is Business Premium right for us?",
    a: "Often yes for companies that need Microsoft 365 plus device management and stronger security than Business Basic/Standard — without jumping to enterprise E3/E5. We will say if a cheaper SKU is enough.",
  },
  {
    q: "Can you migrate from Google, on-prem Exchange, or another Microsoft tenant?",
    a: "Yes. We plan mailbox and file moves, DNS cutover, and a rollback path so the business is not left mid-air.",
  },
  {
    q: "Do we need a full-time IT person?",
    a: "Not necessarily. Many clients run Business Premium with light internal ownership and call us for projects, security reviews, or when something breaks.",
  },
  {
    q: "Will you oversell licences or tools?",
    a: "No. The brief is right-sized Microsoft 365 for growing businesses — the same approach we use for mid-market firms that cannot justify enterprise architecture retainers.",
  },
] as const;

function Microsoft365Page() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Microsoft 365"
        title="Microsoft 365 Business Premium — set up for how you actually work"
        description="Email, Teams, security and managed devices for small and mid-sized companies. Senior help without enterprise pricing or a six-month transformation programme."
      />

      <section className="section-pad">
        <div className="container-page grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7 space-y-5">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              Built for the Business Premium size of company
            </h2>
            <p className="text-base leading-relaxed text-fg-muted">
              If you are past “personal Gmail and a shared folder” but not ready
              for a full IT department, Microsoft 365 Business Premium is often
              the sweet spot. InovaCore helps you choose it for the right
              reasons, deploy it cleanly, and keep it secure enough for real
              client work.
            </p>
            <p className="text-base leading-relaxed text-fg-muted">
              That includes professional firms, multi-site teams, and growing
              businesses that need reliable mail, collaboration, and device
              control — without being sold a stack they will never operate.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link to="/contact">
                  Talk about Business Premium
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link to="/services">All services</Link>
              </Button>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-xl border border-border bg-bg-elevated p-6 shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                Typical outcomes
              </p>
              <ul className="mt-4 space-y-3">
                {[
                  "Mail and Teams that staff actually adopt",
                  "MFA and identity done properly first time",
                  "Laptops and phones under Intune policy",
                  "Clear admin ownership after go-live",
                  "No licence bloat you did not ask for",
                ].map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-fg-muted">
                    <CheckCircle2
                      className="mt-0.5 size-4 shrink-0 text-accent"
                      strokeWidth={2}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-border bg-bg-elevated">
        <div className="container-page">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            What we help with
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {included.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-border bg-bg p-6 shadow-soft"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-md border border-border bg-bg-elevated">
                  <item.icon className="size-5 text-accent" strokeWidth={1.75} />
                </div>
                <h3 className="font-display text-lg font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            How an engagement runs
          </h2>
          <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <li
                key={step.title}
                className="rounded-xl border border-border bg-bg-elevated p-5 shadow-soft"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                  Step {i + 1}
                </p>
                <h3 className="mt-2 font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm text-fg-muted">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-pad border-t border-border bg-bg-elevated">
        <div className="container-page max-w-3xl">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            Questions we hear often
          </h2>
          <dl className="mt-10 space-y-5">
            {faqs.map((f) => (
              <div
                key={f.q}
                className="rounded-xl border border-border bg-bg p-5"
              >
                <dt className="font-semibold text-ink">{f.q}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-fg-muted">
                  {f.a}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <div className="rounded-xl border border-border bg-accent p-8 text-accent-fg sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
            <div className="max-w-xl">
              <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                Ready to get Business Premium working properly?
              </h2>
              <p className="mt-3 text-accent-fg/80">
                Tell us roughly how many users you have and what you use for
                email today. We will suggest a practical next step — no hard
                sell.
              </p>
            </div>
            <div className="mt-6 shrink-0 lg:mt-0">
              <Button
                asChild
                size="lg"
                className="border-0 bg-white text-accent hover:bg-white/90"
              >
                <Link to="/contact">
                  Get in touch
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
