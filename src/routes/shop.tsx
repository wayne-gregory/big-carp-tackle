import { createFileRoute, Link } from "@tanstack/react-router";
import { z } from "zod";
import { ProductCard } from "@/components/shop/product-card";
import { PageHero, SiteShell } from "@/components/shop/shell";
import { pageHead } from "@/lib/seo";
import {
  categories,
  getByCategory,
  shop,
  type Category,
} from "@/lib/shop";
import { cn } from "@/lib/utils";

const searchSchema = z.object({
  category: z
    .enum([
      "all",
      "rods",
      "reels",
      "alarms",
      "bags",
      "nets",
      "beds",
      "bait",
      "accessories",
    ])
    .optional()
    .default("all"),
  q: z.string().optional().default(""),
});

export const Route = createFileRoute("/shop")({
  validateSearch: searchSchema,
  head: () =>
    pageHead({
      title: `Shop second-hand carp tackle | ${shop.name}`,
      description:
        "Browse pre-owned carp rods, reels, alarms, bags and more. UK shipping only. Honest condition grades.",
      path: "/shop",
    }),
  component: ShopPage,
});

function ShopPage() {
  const { category, q } = Route.useSearch();
  const navigate = Route.useNavigate();

  let list = getByCategory((category ?? "all") as Category | "all");
  if (q?.trim()) {
    const needle = q.trim().toLowerCase();
    list = list.filter(
      (p) =>
        p.title.toLowerCase().includes(needle) ||
        p.brand.toLowerCase().includes(needle) ||
        p.description.toLowerCase().includes(needle),
    );
  }

  return (
    <SiteShell>
      <PageHero
        eyebrow="Shop"
        title="Second-hand carp tackle"
        description="Filter by category or search brand and model. All prices in GBP. UK mainland only."
      />
      <section className="section-pad pt-8">
        <div className="container-page">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2">
              <FilterChip
                active={category === "all" || !category}
                onClick={() =>
                  navigate({ search: (prev) => ({ ...prev, category: "all" }) })
                }
              >
                All
              </FilterChip>
              {categories.map((c) => (
                <FilterChip
                  key={c.id}
                  active={category === c.id}
                  onClick={() =>
                    navigate({
                      search: (prev) => ({ ...prev, category: c.id }),
                    })
                  }
                >
                  {c.label}
                </FilterChip>
              ))}
            </div>
            <label className="block w-full max-w-xs">
              <span className="sr-only">Search</span>
              <input
                type="search"
                placeholder="Search brand or model…"
                defaultValue={q}
                className="h-11 w-full rounded-md border border-border bg-bg-elevated px-3 text-sm text-fg outline-none ring-ring focus:ring-2"
                onChange={(e) => {
                  const value = e.target.value;
                  navigate({
                    search: (prev) => ({ ...prev, q: value }),
                    replace: true,
                  });
                }}
              />
            </label>
          </div>

          <p className="mt-6 text-sm text-fg-muted">
            {list.length} item{list.length === 1 ? "" : "s"}
          </p>

          {list.length === 0 ? (
            <div className="card-surface mt-6 p-10 text-center">
              <p className="font-display text-xl font-semibold text-fg">
                Nothing matches
              </p>
              <p className="mt-2 text-sm text-fg-muted">
                Try another category or{" "}
                <Link to="/shop" search={{ category: "all", q: "" }} className="text-accent underline">
                  clear filters
                </Link>
                .
              </p>
            </div>
          ) : (
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {list.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </div>
      </section>
    </SiteShell>
  );
}

function FilterChip({
  children,
  active,
  onClick,
}: {
  children: React.ReactNode;
  active?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full border px-3.5 py-2 text-sm font-medium transition-colors",
        active
          ? "border-accent bg-accent text-accent-fg"
          : "border-border bg-bg-elevated text-fg-muted hover:border-border-strong hover:text-fg",
      )}
    >
      {children}
    </button>
  );
}
