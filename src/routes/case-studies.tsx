import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell, PageHero } from "@/components/site/shell";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/company";

export const Route = createFileRoute("/case-studies")({
  component: CaseStudiesPage,
});

function CaseStudiesPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Case studies"
        title="Work that fits real businesses"
        description="Examples across Microsoft 365 Business Premium, identity and devices, backup, hybrid cloud, and server estates — for companies that need results without an enterprise programme."
      />

      <section className="section-pad">
        <div className="container-page">
          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((p) => (
              <article
                key={p.title}
                className="flex flex-col rounded-xl border border-border bg-bg-elevated p-7 shadow-soft"
              >
                <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
                  {p.title}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-fg-muted sm:text-base">
                  {p.summary}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
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

          <div className="mt-14 rounded-xl border border-border bg-accent p-8 text-accent-fg sm:p-10">
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              Need Microsoft 365 or IT help that matches your size?
            </h2>
            <p className="mt-3 max-w-2xl text-accent-fg/80">
              Tell us how you work today — licences, devices, servers, backup —
              and we will suggest a practical next step.
            </p>
            <Button
              asChild
              className="mt-6 border-0 bg-white text-accent hover:bg-white/90"
            >
              <Link to="/contact">Get in touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
