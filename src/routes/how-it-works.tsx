import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, SiteShell } from "@/components/shop/shell";
import { Button } from "@/components/ui/button";
import { pageHead } from "@/lib/seo";
import { shop } from "@/lib/shop";

export const Route = createFileRoute("/how-it-works")({
  head: () =>
    pageHead({
      title: `How buying & selling second hand carp tackle works | ${shop.name}`,
      description:
        "How to buy and sell second hand carp fishing tackle with Big Carp Fishing — condition grades, UK shipping, and fair sell-ins.",
      path: "/how-it-works",
    }),
  component: HowPage,
});

const buySteps = [
  {
    title: "Browse & filter",
    body: "Shop second hand carp fishing tackle by rods, reels, alarms and more. Every item has a condition grade and UK location.",
  },
  {
    title: "Add to basket",
    body: "Stock is limited — most lots are one-offs. Basket totals are in GBP.",
  },
  {
    title: "Checkout (UK only)",
    body: "Enter a mainland UK address. We’ll confirm payment and packing times by email.",
  },
  {
    title: "Dispatch or collect",
    body: "Tracked shipping from £4.95 on small parcels; larger kit may need collection.",
  },
];

const sellSteps = [
  {
    title: "Tell us what you’ve got",
    body: "Photos + brand, model and honest wear notes for your second hand carp gear.",
  },
  {
    title: "Get an option",
    body: "Fair buy-in price or list on the shop with clear fees — you choose.",
  },
  {
    title: "Ship or drop-off",
    body: "We’ll confirm how to get kit to us safely within the UK.",
  },
  {
    title: "Get paid / see it live",
    body: "Buy-ins paid on agreement; listings go live once checked and graded.",
  },
];

function HowPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="How it works"
        title="Buying & selling made simple"
        description="Straightforward process for second hand carp fishing tackle — no jargon, UK only."
      />

      <section className="section-pad pt-0">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl tracking-wide text-fg">
              Buying second hand tackle
            </h2>
            <ol className="mt-6 space-y-5">
              {buySteps.map((s, i) => (
                <li key={s.title} className="flex gap-4">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-fg">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-fg">{s.title}</p>
                    <p className="mt-1 text-sm text-fg-muted">{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
            <Button asChild className="mt-8">
              <Link to="/shop">Browse the shop</Link>
            </Button>
          </div>
          <div>
            <h2 className="font-display text-3xl tracking-wide text-fg">
              Selling your gear
            </h2>
            <ol className="mt-6 space-y-5">
              {sellSteps.map((s, i) => (
                <li key={s.title} className="flex gap-4">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-bold text-on-ink">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-fg">{s.title}</p>
                    <p className="mt-1 text-sm text-fg-muted">{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
            <Button asChild variant="secondary" className="mt-8">
              <Link to="/sell">Start a sell enquiry</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-border bg-bg-subtle/40">
        <div className="container-page max-w-2xl text-center">
          <h2 className="font-display text-2xl tracking-wide text-fg">
            Condition grades explained
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-fg-muted">
            Excellent = like new / barely used. Very good = light bankside wear.
            Good = honest use, solid function. Fair = heavy wear, priced to
            move. Every second hand carp fishing tackle listing is checked
            before it goes live.
          </p>
          <p className="mt-4 text-sm text-fg-muted">{shop.shippingNote}</p>
        </div>
      </section>
    </SiteShell>
  );
}
