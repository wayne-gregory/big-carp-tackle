import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
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

const SERVICE_ICONS = [Server, Cloud, DatabaseBackup, ShieldCheck, Workflow];

function Home() {
  const founder = team[0];

  return (
    <SiteShell>
      {/* 1. Hero */}
      <section className="relative overflow-hidden border-b border-border bg-ink text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 70% 40%, rgba(4,107,210,0.45), transparent 60%)",
          }}
        />
        <div className="container-page relative grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-12 lg:gap-12 lg:py-24">
          <div className="lg:col-span-6">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-sky-300/90">
              Infrastructure & cloud
            </p>
            <h1 className="font-display text-4xl font-semibold leading-[1.12] tracking-tight text-balance sm:text-5xl lg:text-[3.15rem]">
              IT infrastructure & cloud solutions that actually work
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
              We help growing businesses design, secure, and scale their IT —
              without complexity, downtime, or guesswork.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-fg hover:bg-accent/90"
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
                className="border-white/20 bg-white/10 text-white hover:bg-white/15"
              >
                <Link to="/contact">Get a quote</Link>
              </Button>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="overflow-hidden rounded-xl border border-white/10 shadow-2xl">
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

      {/* 2. Trust bar */}
      <section className="border-b border-border bg-bg-elevated">
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

      {/* 3. Services */}
      <section className="section-pad" aria-labelledby="services-heading">
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              Services
            </p>
            <h2
              id="services-heading"
              className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
            >
              Fix performance. Simplify complexity. Design it properly.
            </h2>
            <p className="mt-4 text-base text-fg-muted sm:text-lg">
              Not a generic “we do all IT” shop — focused infrastructure and
              cloud work for environments that need real design and reliability.
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
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="secondary">
              <Link to="/services">
                View all services
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="ghost">
              <Link to="/microsoft-365">Microsoft 365 Business Premium</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 4. Why choose us */}
      <section className="section-pad border-t border-border bg-bg-elevated">
        <div className="container-page grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              Why InovaCore
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Built for more complex environments
            </h2>
            <p className="mt-4 text-fg-muted">
              {company.positioning}
            </p>
          </div>
          <ul className="lg:col-span-7 grid gap-3 sm:grid-cols-2">
            {whyUs.map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-xl border border-border bg-bg p-4 text-sm text-fg"
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

      {/* 5. Credibility / experience */}
      <section className="section-pad" aria-labelledby="cred-heading">
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              Experience
            </p>
            <h2
              id="cred-heading"
              className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
            >
              Production environments. Uptime and performance first.
            </h2>
            <p className="mt-4 text-base text-fg-muted sm:text-lg">
              Work across live estates where downtime costs money — virtualisation,
              hybrid cloud, DR, and Microsoft platforms delivered with clear plans
              and measurable outcomes.
            </p>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {projects.slice(0, 3).map((p) => (
              <article
                key={p.title}
                className="flex flex-col rounded-xl border border-border bg-bg-elevated p-6 shadow-soft"
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
                      className="rounded-full border border-border bg-bg px-2.5 py-1 text-xs font-medium text-fg-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
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

      {/* Social proof */}
      <section className="section-pad border-t border-border bg-bg-elevated">
        <div className="container-page">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            What clients value
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {testimonials.map((t) => (
              <blockquote
                key={t.author + t.context}
                className="rounded-xl border border-border bg-bg p-6 shadow-soft"
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

      {/* 6. Full-width CTA */}
      <section className="border-y border-border bg-accent text-accent-fg">
        <div className="container-page py-16 text-center sm:py-20">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Let&rsquo;s talk about your IT
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-accent-fg/80">
            Book a consultation — performance issues, complex estates, cloud
            moves, or Business Premium done properly.
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
              className="border-white/30 bg-transparent text-white hover:bg-white/10"
            >
              <Link to="/contact">Get a quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Founder strip */}
      <section className="section-pad">
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
            <div className="rounded-xl border border-border bg-bg-elevated p-6 shadow-soft">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 font-display text-lg font-semibold text-accent">
                WG
              </div>
              <p className="font-display text-lg font-semibold text-ink">
                Specialist, not a generic helpdesk
              </p>
              <p className="mt-2 text-sm text-fg-muted">
                Infrastructure problems, cloud design, and Microsoft estates —
                someone worth contacting when DIY stops working.
              </p>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
