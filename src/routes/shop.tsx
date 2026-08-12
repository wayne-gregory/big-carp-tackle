import { createFileRoute, Link } from "@tanstack/react-router";
import { z } from "zod";
import { ProductCard } from "@/components/shop/product-card";
import { PageHero, SiteShell } from "@/components/shop/shell";
import { itemListJsonLd, jsonLdScript, pageHead } from "@/lib/seo";
import {
  categories,
  getByCategory,
  products,
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
      scripts: [
        jsonLdScript(
          itemListJsonLd(products, {
            name: "Second-hand carp tackle",
            path: "/shop",
          }),
        ),
      ],
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
        description="Honest grades, fair UK prices. Filter by category or search brand and model."
      />

      <section className="section-pad pt-0">
        <div className="container-page">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-2">
              <FilterChip
                active={!category || category === "all"}
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
            <label className="sr-only" htmlFor="shop-q">
              Search
            </label>
            <input
              id="shop-q"
              type="search"
              placeholder="Search brand or model…"
              defaultValue={q}
              onChange={(e) => {
                const value = e.target.value;
                navigate({
                  search: (prev) => ({ ...prev, q: value }),
                  replace: true,
                });
              }}
              className="h-10 w-full rounded-md border border-border bg-bg-elevated px-3 text-sm text-fg shadow-sm outline-none ring-ring placeholder:text-fg-subtle focus-visible:ring-2 sm:max-w-xs"
            />
          </div>

          <p className="mt-6 text-sm text-fg-muted">
            {list.length} item{list.length === 1 ? "" : "s"}
          </p>

          {list.length === 0 ? (
            <p className="mt-10 text-fg-muted">
              No matches.{" "}
              <button
                type="button"
                className="font-medium text-accent underline"
                onClick={() =>
                  navigate({ search: { category: "all", q: "" } })
                }
              >
                Clear filters
              </button>
            </p>
          ) : (
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors",
        active
          ? "border-accent bg-accent text-accent-fg"
          : "border-border bg-bg-elevated text-fg-muted hover:border-accent/40 hover:text-fg",
      )}
    >
      {children}
    </button>
  );
}
