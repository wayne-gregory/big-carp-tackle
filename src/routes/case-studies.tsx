import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell, PageHero } from "@/components/site/shell";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/company";
import {
  breadcrumbJsonLd,
  coreKeywords,
  jsonLdScript,
  pageHead,
} from "@/lib/seo";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    ...pageHead({
      title: "Case studies",
      description:
        "Examples of faster performance, stronger DR, hybrid cloud, and Microsoft 365 outcomes for growing businesses.",
      path: "/case-studies",
      keywords: [...coreKeywords, "IT case studies", "infrastructure outcomes"],
    }),
    scripts: [
      jsonLdScript(
        breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Case studies", path: "/case-studies" },
        ]),
      ),
    ],
  }),
  component: CaseStudiesPage,
});

function CaseStudiesPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Case studies"
        title="Results that show up in uptime and day-to-day work"
        description="Selected outcomes across performance, resilience, cloud, security, and Microsoft 365 — for organisations that need measurable improvement, not a slide deck."
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
              Want similar outcomes for your estate?
            </h2>
            <p className="mt-3 max-w-2xl text-accent-fg/80">
              Tell us where performance, backup, or cloud is holding you back —
              we will suggest a practical next step.
            </p>
            <Button
              asChild
              className="mt-6 border-0 bg-white text-accent hover:bg-white/90"
            >
              <Link to="/contact">Book a consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
