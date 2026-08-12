import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, MapPin, Package } from "lucide-react";
import { toast } from "sonner";
import { PageHero, SiteShell } from "@/components/shop/shell";
import { ProductCard } from "@/components/shop/product-card";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart";
import { pageHead } from "@/lib/seo";
import {
  categoryLabel,
  formatPrice,
  getProduct,
  products,
  shop,
} from "@/lib/shop";

export const Route = createFileRoute("/product/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    const product = loaderData?.product;
    if (!product) {
      return pageHead({
        title: `Product | ${shop.name}`,
        description: shop.description,
        path: "/shop",
      });
    }
    return pageHead({
      title: `${product.title} | ${shop.name}`,
      description: product.description,
      path: `/product/${product.slug}`,
    });
  },
  component: ProductPage,
  notFoundComponent: () => (
    <SiteShell>
      <PageHero title="Item not found" description="This listing may have sold." />
      <div className="container-page py-10">
        <Button asChild>
          <Link to="/shop">Back to shop</Link>
        </Button>
      </div>
    </SiteShell>
  ),
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const add = useCart((s) => s.add);
  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <SiteShell>
      <div className="border-b border-border bg-bg-subtle/40">
        <div className="container-page py-4">
          <Link
            to="/shop"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-fg-muted hover:text-fg"
          >
            <ArrowLeft className="size-4" />
            Back to shop
          </Link>
        </div>
      </div>

      <section className="section-pad pt-8">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div className="card-surface relative flex min-h-72 items-center justify-center overflow-hidden bg-bg-subtle p-6">
            {product.image ? (
              <img
                src={product.image}
                alt={product.title}
                className="max-h-96 w-full object-contain"
              />
            ) : (
              <>
                <div className="absolute inset-0 rounded-xl bg-[radial-gradient(ellipse_at_40%_30%,rgb(64_96_208/0.15),transparent_60%)]" />
                <Package className="relative size-24 text-accent/50" strokeWidth={1} />
              </>
            )}
            <span className="absolute left-4 top-4 rounded-full bg-bg-elevated px-3 py-1 text-xs font-semibold text-fg shadow-sm">
              {product.condition}
            </span>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-accent">
              {product.brand} · {categoryLabel(product.category)}
            </p>
            <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
              {product.title}
            </h1>
            <div className="mt-4 flex flex-wrap items-baseline gap-3">
              <p className="font-display text-3xl font-semibold text-fg">
                {formatPrice(product.price)}
              </p>
              {product.compareAt ? (
                <p className="text-sm text-fg-subtle line-through">
                  New ~{formatPrice(product.compareAt)}
                </p>
              ) : null}
            </div>
            <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-fg-muted">
              <MapPin className="size-4" />
              Listed from {product.location} · {product.stock} in stock
            </p>
            <p className="mt-6 text-base leading-relaxed text-fg-muted">
              {product.description}
            </p>
            <ul className="mt-6 space-y-2">
              {product.highlights.map((h) => (
                <li key={h} className="flex gap-2 text-sm text-fg">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                  {h}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                size="lg"
                onClick={() => {
                  add(product);
                  toast.success("Added to basket");
                }}
              >
                Add to basket
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link to="/cart">View basket</Link>
              </Button>
            </div>
            <p className="mt-4 text-xs text-fg-subtle">{shop.shippingNote}</p>
          </div>
        </div>
      </section>

      {related.length > 0 ? (
        <section className="section-pad border-t border-border bg-bg-subtle/40">
          <div className="container-page">
            <h2 className="font-display text-2xl font-semibold text-fg">
              More in {categoryLabel(product.category)}
            </h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </SiteShell>
  );
}
