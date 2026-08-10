import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  KeyRound,
  Laptop,
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

export const Route = createFileRoute("/zero-trust")({
  head: () => ({
    ...pageHead({
      title: "Zero Trust security for growing businesses",
      description:
        "Practical Zero Trust baselines for UK SMEs and mid-market firms — identity, devices, least privilege, and conditional access without enterprise theatre.",
      path: "/zero-trust",
      keywords: [
        ...coreKeywords,
        "Zero Trust security UK",
        "conditional access Microsoft 365",
        "least privilege identity",
        "Zero Trust for SMEs",
      ],
    }),
    scripts: [
      jsonLdScript(
        breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Zero Trust", path: "/zero-trust" },
        ]),
      ),
      jsonLdScript({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Zero Trust Baseline",
        provider: {
          "@type": "ProfessionalService",
          name: "InovaCore",
          url: SITE_URL,
        },
        areaServed: "GB",
        description:
          "Practical Zero Trust security baseline for growing businesses: identity, MFA, conditional access, device trust, and least privilege.",
        url: `${SITE_URL}/zero-trust`,
      }),
    ],
  }),
  component: ZeroTrustPage,
});

const pillars = [
  {
    icon: KeyRound,
    title: "Verify identity",
    body: "Strong authentication, risky sign-in handling, and clean privileged accounts — so a stolen password is not the whole castle.",
  },
  {
    icon: Laptop,
    title: "Trust the device",
    body: "Device health and management signals (where your licences allow) before sensitive apps open — especially for hybrid and remote staff.",
  },
  {
    icon: Users,
    title: "Least privilege",
    body: "People and admins only get what they need. Shared mailboxes, apps, and break-glass accounts stop being silent back doors.",
  },
  {
    icon: Shield,
    title: "Limit blast radius",
    body: "Conditional access and sensible network/app boundaries so one compromised account does not open everything.",
  },
] as const;

const steps = [
  {
    title: "Assess",
    body: "Where you are today: MFA gaps, admin sprawl, device state, and the apps that actually matter.",
  },
  {
    title: "Design",
    body: "A baseline your size of business can operate — policies that protect without daily lockouts.",
  },
  {
    title: "Implement",
    body: "Roll out in waves: pilot group, tighten, then wider estate. Change is managed, not dumped overnight.",
  },
  {
    title: "Hand over",
    body: "Documented baseline, who owns what, and a short roadmap for the next improvements.",
  },
] as const;

const faqs = [
  {
    q: "Is Zero Trust only for large enterprises?",
    a: "No. The principles scale down. Growing businesses can get a strong baseline with Microsoft 365 identity and device controls without a multi-year programme.",
  },
  {
    q: "Will staff get locked out constantly?",
    a: "Good design avoids that. We favour phased policies, exceptions that are intentional, and testing with a pilot group before wide rollout.",
  },
  {
    q: "Do we need new expensive products?",
    a: "Often you already own the building blocks in Business Premium or similar. We use what you have first and only recommend extras when they clearly pay for themselves.",
  },
  {
    q: "Can you work with our MSP?",
    a: "Yes. Many clients keep day-to-day support where it is and use us to design and implement the Zero Trust baseline.",
  },
] as const;

function ZeroTrustPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Zero Trust"
        title="Zero Trust that protects the business — without the theatre"
        description="Never trust, always verify — implemented as a practical baseline for growing firms: identity, devices, least privilege, and access policies people can live with."
      />

      <section className="section-pad">
        <div className="container-page grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="space-y-5 lg:col-span-7">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              What Zero Trust means here
            </h2>
            <p className="text-base leading-relaxed text-fg-muted">
              Zero Trust is not a product you buy once. It is a model: assume
              breach, verify every access request, and limit how far an
              attacker can move if something goes wrong.
            </p>
            <p className="text-base leading-relaxed text-fg-muted">
              For most growing businesses that starts with Microsoft identity
              and devices — MFA everywhere it should be, conditional access,
              cleaner admin rights, and healthier endpoints — not a wall of
              new vendors.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link to="/contact">
                  Talk about Zero Trust
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link to="/services">All packages</Link>
              </Button>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-xl border border-border bg-bg-elevated p-6 shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                Outcomes
              </p>
              <ul className="mt-4 space-y-3">
                {[
                  "Fewer weak sign-ins and shared-password habits",
                  "Admins no longer running everything as permanent God mode",
                  "Devices that look trustworthy before sensitive data opens",
                  "Clear policies your team or MSP can maintain",
                  "A roadmap — not a one-off config dump",
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
            Four pillars we put in place
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {pillars.map((p) => (
              <article
                key={p.title}
                className="rounded-xl border border-border bg-bg p-6 shadow-soft"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-md border border-border bg-bg-elevated">
                  <p.icon className="size-5 text-accent" strokeWidth={1.75} />
                </div>
                <h3 className="font-display text-lg font-semibold text-ink">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                  {p.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            How we deliver a baseline
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
                Ready for a Zero Trust baseline that fits your size?
              </h2>
              <p className="mt-3 text-accent-fg/80">
                Tell us roughly how many users you have and whether you are on
                Business Premium or similar. We will suggest a practical path.
              </p>
            </div>
            <div className="mt-6 shrink-0 lg:mt-0">
              <Button
                asChild
                size="lg"
                className="border-0 bg-white text-accent hover:bg-white/90"
              >
                <Link to="/contact">
                  Book a consultation
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
