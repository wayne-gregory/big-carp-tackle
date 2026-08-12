import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, SiteShell } from "@/components/shop/shell";
import { Button } from "@/components/ui/button";
import { pageHead } from "@/lib/seo";
import { shop } from "@/lib/shop";

export const Route = createFileRoute("/how-it-works")({
  head: () =>
    pageHead({
      title: `How it works | ${shop.name}`,
      description:
        "How buying and selling second-hand carp tackle works at Big Carp Fishing.",
      path: "/how-it-works",
    }),
  component: HowPage,
});

const buySteps = [
  {
    title: "Browse & filter",
    body: "Shop by rods, reels, alarms and more. Every item has a condition grade and location.",
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
    body: "Photos + brand, model and honest wear notes.",
  },
  {
    title: "Offer or list",
    body: "We may buy outright or list for you with a clear fee.",
  },
  {
    title: "Ship or drop-off",
    body: "We’ll arrange collection or a drop-off point when agreed.",
  },
  {
    title: "Get paid",
    body: "Bank transfer once the kit is checked and listed or sold.",
  },
];

function HowPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="How it works"
        title="Simple, UK-focused second-hand tackle"
        description="No auctions. No overseas drama. Just fair prices on gear that still belongs on the bank."
      />
      <section className="section-pad pt-8">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-semibold text-fg">
              Buying
            </h2>
            <ol className="mt-6 space-y-5">
              {buySteps.map((s, i) => (
                <li key={s.title} className="flex gap-4">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-semibold text-accent-fg">
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
              <Link to="/shop">Start shopping</Link>
            </Button>
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold text-fg">
              Selling
            </h2>
            <ol className="mt-6 space-y-5">
              {sellSteps.map((s, i) => (
                <li key={s.title} className="flex gap-4">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-border bg-bg-elevated text-sm font-semibold text-fg">
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
              <Link to="/sell">Sell gear</Link>
            </Button>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
