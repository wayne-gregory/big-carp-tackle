import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell, PageHero } from "@/components/site/shell";
import { Button } from "@/components/ui/button";
import { company, platforms, team, testimonials, whyUs } from "@/lib/company";
import {
  breadcrumbJsonLd,
  coreKeywords,
  jsonLdScript,
  pageHead,
} from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () => ({
    ...pageHead({
      title: "About InovaCore",
      description:
        "InovaCore helps businesses that have outgrown DIY IT — infrastructure, cloud, and Microsoft environments simplified for performance, reliability, and scale.",
      path: "/about",
      keywords: [...coreKeywords, "InovaCore Limited", "Wayne Gregory IT"],
    }),
    scripts: [
      jsonLdScript(
        breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]),
      ),
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const founder = team[0];

  return (
    <SiteShell>
      <PageHero
        eyebrow="About"
        title="About InovaCore"
        description="Businesses outgrow their IT. We step in to simplify, optimise, and design infrastructure and cloud properly — with a focus on performance, reliability, and scale."
      />

      <section className="section-pad">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              Straightforward. Practical. Not salesy.
            </h2>
            <p className="text-base leading-relaxed text-fg-muted">
              When environments get complex — more servers, hybrid cloud, Microsoft
              365, backup that has never been tested — generic IT support stops
              being enough. InovaCore specialises in infrastructure and cloud
              solutions for businesses with more demanding setups.
            </p>
            <p className="text-base leading-relaxed text-fg-muted">
              That means fixing performance issues, simplifying estates that have
              grown by accident, and designing systems that hold up in production.
              No overcomplication. No unnecessary tools.
            </p>
            <p className="text-base leading-relaxed text-fg-muted">
              {company.legalName} (company no. {company.companyNumber}) is a UK
              private limited company specialising in information technology
              consultancy.
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
            How we work
          </h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {whyUs.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-border bg-bg p-4 text-sm text-fg"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            Who you work with
          </h2>
          <div className="mt-10 max-w-3xl rounded-xl border border-border bg-bg-elevated p-7 shadow-soft sm:p-8">
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
                      className="rounded-full border border-border bg-bg px-2.5 py-1 text-xs font-medium text-fg-muted"
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
                  className="rounded-md border border-border bg-bg-elevated px-3 py-1.5 text-sm text-fg-muted"
                >
                  {p}
                </span>
              ))}
            </div>
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
              <Link to="/contact">Book a consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
