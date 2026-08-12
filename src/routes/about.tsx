import { createFileRoute, Link } from "@tanstack/react-router";
import { BrandLogo } from "@/components/shop/logo";
import { PageHero, SiteShell } from "@/components/shop/shell";
import { Button } from "@/components/ui/button";
import { pageHead } from "@/lib/seo";
import { shop } from "@/lib/shop";

export const Route = createFileRoute("/about")({
  head: () =>
    pageHead({
      title: `About | ${shop.name}`,
      description: shop.description,
      path: "/about",
    }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="About"
        title="Built for UK carp anglers"
        description="Big Carp Tackle (BCT) is a second-hand tackle shop specialising in carp gear — honest grades, fair prices, UK only."
      />
      <section className="section-pad pt-8">
        <div className="container-page max-w-3xl space-y-5 text-fg-muted">
          <div className="mb-6 rounded-xl border border-border bg-bg-elevated p-6 shadow-soft">
            <BrandLogo variant="full" className="h-16 w-auto" />
          </div>
          <p className="text-base leading-relaxed">
            New kit is expensive. Plenty of solid rods, reels and luggage sits
            unused in garages after anglers upgrade. We give that tackle a
            second life — inspected, graded and priced for real bankside use.
          </p>
          <p className="text-base leading-relaxed">
            We specialise in carp: big pits, progressive rods, alarms, nets,
            beds and the luggage that actually survives a season. We don’t try
            to be a general outdoor warehouse — just quality carp gear for the
            United Kingdom.
          </p>
          <p className="text-base leading-relaxed">
            Domain: <strong className="text-fg">{shop.domain}</strong>. Enquiries:{" "}
            <a className="text-accent underline" href={`mailto:${shop.email}`}>
              {shop.email}
            </a>
            .
          </p>
          <div className="flex flex-wrap gap-3 pt-4">
            <Button asChild>
              <Link to="/shop">Browse the shop</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link to="/contact">Contact</Link>
            </Button>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
