import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Cloud,
  DatabaseBackup,
  Network,
  Quote,
  Server,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { SiteShell } from "@/components/site/shell";
import { Button } from "@/components/ui/button";
import {
  company,
  platforms,
  projects,
  services,
  team,
  testimonials,
} from "@/lib/company";

export const Route = createFileRoute("/")({ component: Home });

const SERVICE_ICONS = [
  Cloud,
  ShieldCheck,
  DatabaseBackup,
  Network,
  Server,
  Workflow,
];

function Home() {
  const founder = team[0];

  return (
    <SiteShell>
      <section className="section-pad pb-12 sm:pb-16">
        <div className="container-page grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              For growing businesses
            </p>
            <h1 className="font-display text-4xl font-semibold leading-[1.12] tracking-tight text-ink text-balance sm:text-5xl lg:text-[3.15rem]">
              {company.tagline}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-fg-muted sm:text-lg">
              {company.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button asChild size="lg">
                <Link to="/contact">
                  Book a conversation
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link to="/services">See how we help</Link>
              </Button>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="overflow-hidden rounded-xl border border-border shadow-soft">
              <img
                src="/hero.jpg"
                alt="Modern workspace with cloud and collaboration technology"
                className="aspect-[4/3] h-full w-full object-cover"
                width={1176}
                height={784}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-bg-elevated">
        <div className="container-page flex flex-wrap items-center justify-between gap-4 py-8 text-sm font-medium text-fg-muted">
          <span className="text-xs font-semibold uppercase tracking-wider text-fg-subtle">
            What we work with
          </span>
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            {platforms.map((p) => (
              <span key={p}>{p}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              Services
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Right-sized IT — not enterprise theatre
            </h2>
            <p className="mt-4 text-base text-fg-muted sm:text-lg">
              From Microsoft 365 Business Premium and device security to backup,
              hybrid cloud, and servers when you need them. Built for companies
              that want solid IT without a big permanent team.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => {
              const Icon = SERVICE_ICONS[i % SERVICE_ICONS.length];
              return (
                <article
                  key={s.slug}
                  className="rounded-xl border border-border bg-bg-elevated p-6 shadow-soft"
                >
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

      <section className="section-pad border-t border-border bg-bg-elevated">
        <div className="container-page">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                Example work
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                Outcomes that matter day to day
              </h2>
            </div>
            <Button asChild variant="secondary" size="sm">
              <Link to="/case-studies">See more examples</Link>
            </Button>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {projects.slice(0, 3).map((p) => (
              <article
                key={p.title}
                className="flex flex-col rounded-xl border border-border bg-bg p-6 shadow-soft"
              >
                <h3 className="font-display text-xl font-semibold leading-snug text-ink">
                  {p.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-fg-muted">
                  {p.summary}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border bg-bg-elevated px-2.5 py-1 text-xs font-medium text-fg-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              Why InovaCore
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Senior help, sized for your business
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {testimonials.map((t) => (
              <blockquote
                key={t.author + t.context}
                className="rounded-xl border border-border bg-bg-elevated p-6 shadow-soft"
              >
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
        <div className="container-page py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent-fg/70">
                Who you work with
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                Meet {founder.name}
              </h2>
              <p className="mt-2 text-base font-medium text-accent-fg/90">
                {founder.role}
              </p>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-accent-fg/80">
                {founder.bio}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {founder.focus.map((f) => (
                  <span
                    key={f}
                    className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-accent-fg"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5 lg:flex lg:justify-end">
              <div className="w-full max-w-sm rounded-xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white/15 font-display text-lg font-semibold">
                  WG
                </div>
                <p className="font-display text-xl font-semibold">
                  {founder.name}
                </p>
                <p className="mt-1 text-sm text-accent-fg/75">{founder.role}</p>
                <div className="mt-6">
                  <Button
                    asChild
                    variant="secondary"
                    className="w-full border-0 bg-white text-accent hover:bg-white/90"
                  >
                    <Link to="/about">About InovaCore</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <div className="rounded-xl border border-border bg-bg-elevated p-8 shadow-soft sm:p-12 lg:flex lg:items-center lg:justify-between lg:gap-10">
            <div className="max-w-xl">
              <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                Looking for Microsoft 365 or IT help that fits your size?
              </h2>
              <p className="mt-3 text-fg-muted">
                Whether you are on Business Premium, hybrid servers, or need
                backup sorted properly — start with a short conversation. No
                enterprise sales process.
              </p>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:mt-0">
              <Button asChild size="lg">
                <Link to="/contact">Get in touch</Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link to="/case-studies">See examples</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
