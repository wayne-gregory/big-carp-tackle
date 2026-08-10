import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell, PageHero } from "@/components/site/shell";
import { Button } from "@/components/ui/button";
import { company, platforms, team, testimonials } from "@/lib/company";

export const Route = createFileRoute("/about")({ component: AboutPage });

const values = [
  {
    title: "Right-sized",
    body: "Solutions matched to your people and budget — not a copy of a bank’s IT stack.",
  },
  {
    title: "Plain English",
    body: "Clear recommendations, honest trade-offs, and no jargon for its own sake.",
  },
  {
    title: "Senior when it counts",
    body: "Deep infrastructure and Microsoft experience applied only where it helps.",
  },
  {
    title: "Operable day to day",
    body: "Setups your team can live with — backups that restore, security that staff accept.",
  },
] as const;

function AboutPage() {
  const founder = team[0];

  return (
    <SiteShell>
      <PageHero
        eyebrow="About"
        title="IT that fits small and mid-sized businesses"
        description="InovaCore exists for companies that need solid Microsoft 365, cloud, backup, and infrastructure — with senior help they can actually access and afford."
      />

      <section className="section-pad">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              Built for the middle of the market
            </h2>
            <p className="mt-4 text-base leading-relaxed text-fg-muted">
              Many growing businesses sit between “DIY IT” and full-time
              enterprise architecture. {company.name} works in that space —
              Microsoft 365 Business Premium, identity and devices, backup,
              hybrid cloud, and servers when you still need them.
            </p>
            <p className="mt-4 text-base leading-relaxed text-fg-muted">
              You get practical delivery from someone who has also run large,
              complex estates. That background means fewer dead ends — without
              forcing enterprise complexity or pricing onto a smaller
              organisation.
            </p>
            <p className="mt-4 text-base leading-relaxed text-fg-muted">
              {company.legalName} (company no. {company.companyNumber}) is an
              active UK private limited company specialising in information
              technology consultancy.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-bg-elevated p-7 shadow-soft">
            <h3 className="font-display text-lg font-semibold text-ink">
              Registered details
            </h3>
            <dl className="mt-5 space-y-4 text-sm">
              <div>
                <dt className="font-medium text-fg">Legal name</dt>
                <dd className="mt-1 text-fg-muted">{company.legalName}</dd>
              </div>
              <div>
                <dt className="font-medium text-fg">Company number</dt>
                <dd className="mt-1 text-fg-muted">{company.companyNumber}</dd>
              </div>
              <div>
                <dt className="font-medium text-fg">Registered office</dt>
                <dd className="mt-1 text-fg-muted">
                  {company.registeredOffice}
                </dd>
              </div>
              <div>
                <dt className="font-medium text-fg">SIC</dt>
                <dd className="mt-1 text-fg-muted">
                  62020 — Information technology consultancy activities
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-border bg-bg-elevated">
        <div className="container-page">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            Who you work with
          </h2>
          <div className="mt-10 max-w-3xl rounded-xl border border-border bg-bg p-7 shadow-soft sm:p-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-accent/10 font-display text-lg font-semibold text-accent">
                WG
              </div>
              <div className="min-w-0">
                <p className="font-display text-2xl font-semibold text-ink">
                  {founder.name}
                </p>
                <p className="mt-1 text-sm font-medium text-accent">
                  {founder.role}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-fg-muted sm:text-base">
                  {founder.bio}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {founder.focus.map((f) => (
                    <span
                      key={f}
                      className="rounded-full border border-border bg-bg-elevated px-2.5 py-1 text-xs font-medium text-fg-muted"
                    >
                      {f}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3 text-sm">
                  <a
                    href={company.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-accent underline-offset-4 hover:underline"
                  >
                    LinkedIn
                  </a>
                  <a
                    href={`mailto:${company.email}`}
                    className="font-medium text-accent underline-offset-4 hover:underline"
                  >
                    {company.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <p className="text-xs font-semibold uppercase tracking-wider text-fg-subtle">
              Typical stack
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {platforms.map((p) => (
                <span
                  key={p}
                  className="rounded-md border border-border bg-bg px-3 py-1.5 text-sm text-fg-muted"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            How we work
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-xl border border-border bg-bg-elevated p-5 shadow-soft"
              >
                <h3 className="font-semibold text-ink">{v.title}</h3>
                <p className="mt-2 text-sm text-fg-muted">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-border bg-bg-elevated">
        <div className="container-page">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            What clients value
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {testimonials.map((t) => (
              <blockquote
                key={t.author + t.context}
                className="rounded-xl border border-border bg-bg p-6"
              >
                <p className="text-sm leading-relaxed text-fg">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="mt-4 text-sm font-semibold text-ink">
                  {t.author}
                  <span className="font-normal text-fg-subtle">
                    {" "}
                    · {t.context}
                  </span>
                </footer>
              </blockquote>
            ))}
          </div>
          <div className="mt-10">
            <Button asChild>
              <Link to="/contact">Start a conversation</Link>
            </Button>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
