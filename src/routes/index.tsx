import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Activity,
  Cloud,
  DatabaseBackup,
  Quote,
  Server,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { SiteShell } from "@/components/site/shell";
import { Button } from "@/components/ui/button";
import {
  company,
  packages,
  platforms,
  projects,
  services,
  team,
  testimonials,
  whyUs,
} from "@/lib/company";
import { coreKeywords, pageHead } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead({
      title: `${company.name} | ${company.tagline}`,
      description: company.description,
      path: "/",
      keywords: coreKeywords,
    }),
  component: Home,
});

const SERVICE_ICONS = [
  Server,
  Cloud,
  DatabaseBackup,
  ShieldCheck,
  Activity,
  Workflow,
];

function Home() {
  const founder = team[0];

  return (
    <SiteShell>
      <section className="surface-ink border-b border-ink-border">
        <div className="container-page grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-12 lg:gap-12 lg:py-24">
          <div className="lg:col-span-6">
            <p className="surface-ink-eyebrow">Infrastructure & cloud</p>
            <h1 className="surface-ink-title text-4xl leading-[1.12] sm:text-5xl lg:text-[3.15rem]">
              Faster systems. Fewer outages. IT you can trust.
            </h1>
            <p className="surface-ink-body">
              Design, secure, and scale infrastructure and cloud for growing
              businesses — better performance, solid backup, and Microsoft 365
              that works day to day, without the guesswork.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button asChild size="lg">
                <Link to="/contact">
                  Book a consultation
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="border-white/20 bg-white/10 text-on-ink hover:bg-white/15 hover:text-on-ink"
              >
                <Link to="/services">View packages</Link>
              </Button>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="overflow-hidden rounded-xl border border-ink-border shadow-hero">
              <img
                src="/hero.jpg"
                alt="Infrastructure and cloud technology environment"
                className="aspect-[4/3] h-full w-full object-cover"
                width={1176}
                height={784}
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border surface-elevated">
        <div className="container-page flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-medium text-fg">
            Trusted by businesses across the UK
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-medium uppercase tracking-wider text-fg-subtle">
            {platforms.map((p) => (
              <span key={p}>{p}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad surface-page" aria-labelledby="pkg-heading">
        <div className="container-page">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                Packages
              </p>
              <h2
                id="pkg-heading"
                className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
              >
                Four clear ways to start
              </h2>
              <p className="mt-3 text-fg-muted">
                Named engagements with a defined outcome — including
                cost-aware patching and monitoring with Robopack and Checkmk.
              </p>
            </div>
            <Button asChild variant="secondary" className="shrink-0">
              <Link to="/services">
                Full details
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {packages.map((pkg) => (
              <article key={pkg.slug} className="card-surface flex flex-col p-6">
                <h3 className="font-display text-lg font-semibold text-ink">
                  {pkg.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                  {pkg.tagline}
                </p>
                <p className="mt-4 text-xs font-medium uppercase tracking-wider text-fg-subtle">
                  You leave with
                </p>
                <p className="mt-1.5 flex-1 text-sm text-fg">{pkg.outcome}</p>
                <Button asChild variant="secondary" size="sm" className="mt-6">
                  <Link to="/contact">Enquire</Link>
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="section-pad border-t border-border surface-elevated"
        aria-labelledby="services-heading"
      >
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              Capabilities
            </p>
            <h2
              id="services-heading"
              className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
            >
              Performance, resilience, and clarity — not more complexity
            </h2>
            <p className="mt-4 text-base text-fg-muted sm:text-lg">
              Focused areas that reduce downtime risk, speed up estates, and
              keep tooling costs under control.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => {
              const Icon = SERVICE_ICONS[i % SERVICE_ICONS.length];
              return (
                <article key={s.slug} className="card-surface p-6">
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-md border border-border bg-bg">
                    <Icon className="size-5 text-accent" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                    {s.body}
                  </p>
                </article>
              );
            })}
          </div>
          <div className="mt-10">
            <Button asChild variant="secondary">
              <Link to="/services">
                View all services
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-border surface-page">
        <div className="container-page grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              Why InovaCore
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Senior help when DIY IT starts to hurt
            </h2>
            <p className="mt-4 text-fg-muted">{company.positioning}</p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
            {whyUs.map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-xl border border-border bg-bg-elevated p-4 text-sm text-fg"
              >
                <span
                  className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent"
                  aria-hidden
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        className="section-pad border-t border-border surface-elevated"
        aria-labelledby="cred-heading"
      >
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              Experience
            </p>
            <h2
              id="cred-heading"
              className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
            >
              Outcomes that protect uptime and productivity
            </h2>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {projects.slice(0, 3).map((p) => (
              <article key={p.title} className="card-surface flex flex-col p-6">
                <h3 className="font-display text-xl font-semibold leading-snug text-ink">
                  {p.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-fg-muted">
                  {p.summary}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-8">
            <Button asChild variant="secondary" size="sm">
              <Link to="/case-studies">See case studies</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-border surface-page">
        <div className="container-page">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            What clients value
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {testimonials.map((t) => (
              <blockquote key={t.author + t.context} className="card-surface p-6">
                <Quote
                  className="mb-4 size-6 text-accent/40"
                  strokeWidth={1.5}
                  aria-hidden
                />
                <p className="text-sm leading-relaxed text-fg">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="mt-5 text-sm">
                  <span className="font-semibold text-ink">{t.author}</span>
                  <span className="text-fg-subtle"> · {t.context}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-accent text-accent-fg">
        <div className="container-page py-16 text-center sm:py-20">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Ready for IT that performs under pressure?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-accent-fg/80">
            Pick a package or tell us what is painful — we will suggest a
            practical next step.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
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
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              <Link to="/services">View packages</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="section-pad surface-page">
        <div className="container-page grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              Who you work with
            </p>
            <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              {founder.name}
            </h2>
            <p className="mt-1 text-sm font-medium text-accent">{founder.role}</p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-fg-muted">
              {founder.bio}
            </p>
            <div className="mt-6">
              <Button asChild variant="secondary">
                <Link to="/about">About InovaCore</Link>
              </Button>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="card-surface p-6">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 font-display text-lg font-semibold text-accent">
                WG
              </div>
              <p className="font-display text-lg font-semibold text-ink">
                Specialist, not a generic helpdesk
              </p>
              <p className="mt-2 text-sm text-fg-muted">
                Works with internal IT and MSPs when estates need senior
                infrastructure or Microsoft expertise — including cost-aware
                Robopack and Checkmk deployments.
              </p>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
