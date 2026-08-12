import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  MapPin,
  PackageOpen,
  RefreshCw,
} from "lucide-react";
import { BrandLogo } from "@/components/shop/logo";
import { ProductCard } from "@/components/shop/product-card";
import { SiteShell } from "@/components/shop/shell";
import { Button } from "@/components/ui/button";
import { pageHead } from "@/lib/seo";
import { categories, products, shop } from "@/lib/shop";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead({
      title: `${shop.name} | Second hand carp fishing tackle UK`,
      description: shop.description,
      path: "/",
    }),
  component: HomePage,
});

function HomePage() {
  const featured = products.filter((p) => p.featured).slice(0, 4);

  return (
    <SiteShell>
      <section className="relative overflow-hidden surface-ink">
        <div className="absolute inset-0 bg-ink">
          <img
            src="/hero.jpg"
            alt="Burghfield — famous UK big carp water, calm lake with wooded islands"
            className="h-full w-full object-cover object-center opacity-55"
            width={1920}
            height={1087}
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/88 to-ink/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/25" />
        </div>
        <div className="container-page relative grid gap-10 py-16 sm:py-20 lg:grid-cols-12 lg:items-center lg:py-24">
          <div className="lg:col-span-7">
            <div className="mb-6 max-w-md">
              <BrandLogo
                variant="header"
                className="h-12 w-auto max-w-[min(340px,88vw)] sm:h-14"
              />
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-on-ink-accent">
              Second hand carp fishing tackle · UK only · {shop.shortName}
            </p>
            <h1 className="mt-4 font-display text-5xl leading-none tracking-wide text-on-ink sm:text-6xl lg:text-7xl">
              Second hand carp fishing tackle
            </h1>
            <p className="mt-5 max-w-xl font-sans text-base leading-relaxed tracking-normal text-on-ink-muted sm:text-lg">
              Quality pre-owned carp gear with honest condition grades and fair
              prices. Rods, reels, alarms, bags and more — buy and sell second
              hand carp fishing tackle across mainland Britain.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link to="/shop">
                  Browse tackle
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="border-ink-border bg-white/10 text-on-ink hover:bg-white/15 hover:text-on-ink"
              >
                <Link to="/sell">Sell your gear</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-bg-elevated">
        <div className="container-page grid gap-6 py-8 sm:grid-cols-3">
          {[
            {
              icon: BadgeCheck,
              title: "Checked condition",
              body: "Every second hand listing graded Excellent to Fair with honest notes.",
            },
            {
              icon: MapPin,
              title: "UK only",
              body: "Mainland shipping and collection options. No overseas sales.",
            },
            {
              icon: RefreshCw,
              title: "Buy or sell",
              body: "Clear out the garage — we take quality carp fishing tackle all year.",
            },
          ].map((item) => (
            <div key={item.title} className="flex gap-3">
              <item.icon className="mt-0.5 size-5 shrink-0 text-accent" strokeWidth={1.75} />
              <div>
                <p className="font-semibold text-fg">{item.title}</p>
                <p className="mt-1 text-sm text-fg-muted">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                Featured
              </p>
              <h2 className="mt-2 font-display text-4xl tracking-wide text-fg">
                Fresh second hand stock
              </h2>
              <p className="mt-2 max-w-xl font-sans text-fg-muted">
                Hand-checked second hand carp fishing tackle ready for UK
                venues.
              </p>
            </div>
            <Button asChild variant="secondary">
              <Link to="/shop">
                View all
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-border bg-bg-subtle/50">
        <div className="container-page">
          <h2 className="font-display text-4xl tracking-wide text-fg">
            Shop by category
          </h2>
          <p className="mt-2 max-w-xl font-sans text-fg-muted">
            From big pits to bedchairs — browse the second hand carp tackle that
            actually gets used on UK waters.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((c) => (
              <Link
                key={c.id}
                to="/shop"
                search={{ category: c.id }}
                className="card-surface flex items-start gap-3 p-4 transition-colors hover:border-accent/40"
              >
                <PackageOpen className="mt-0.5 size-5 text-accent" strokeWidth={1.75} />
                <div>
                  <p className="font-semibold text-fg">{c.label}</p>
                  <p className="mt-0.5 text-sm text-fg-muted">{c.blurb}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <div className="overflow-hidden rounded-2xl border border-border bg-ink text-on-ink shadow-hero sm:grid sm:grid-cols-2">
            <div className="p-8 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-on-ink-accent">
                Selling?
              </p>
              <h2 className="mt-3 font-display text-3xl tracking-wide sm:text-4xl">
                Turn unused tackle into bank space
              </h2>
              <p className="mt-3 font-sans text-sm leading-relaxed text-on-ink-muted sm:text-base">
                Send photos and a short description. We buy or list second hand
                carp fishing tackle with transparent fees.
              </p>
              <Button asChild size="lg" className="mt-6">
                <Link to="/sell">
                  Start selling
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
            <div className="relative flex min-h-48 items-center justify-center bg-ink-elevated sm:min-h-0">
              <img
                src="/brand/logo-basic.png"
                alt={shop.name}
                className="max-h-40 w-auto max-w-[90%] object-contain p-6 sm:max-h-48"
              />
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
