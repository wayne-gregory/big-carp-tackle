import { createFileRoute, Link } from "@tanstack/react-router";
import { Minus, Plus, Trash2 } from "lucide-react";
import { PageHero, SiteShell } from "@/components/shop/shell";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart";
import { pageHead } from "@/lib/seo";
import { formatPrice, shop } from "@/lib/shop";

export const Route = createFileRoute("/cart")({
  head: () =>
    pageHead({
      title: `Basket | ${shop.name}`,
      description: "Your basket of second-hand carp tackle.",
      path: "/cart",
    }),
  component: CartPage,
});

function CartPage() {
  const lines = useCart((s) => s.lines);
  const setQty = useCart((s) => s.setQty);
  const remove = useCart((s) => s.remove);
  const subtotal = useCart((s) => s.subtotal());
  const shipping = lines.length ? 4.95 : 0;
  const total = subtotal + shipping;

  return (
    <SiteShell>
      <PageHero
        eyebrow="Basket"
        title="Your basket"
        description="Review items before checkout. UK mainland shipping only."
      />
      <section className="section-pad pt-8">
        <div className="container-page">
          {lines.length === 0 ? (
            <div className="card-surface p-10 text-center">
              <p className="font-display text-xl font-semibold text-fg">
                Basket is empty
              </p>
              <p className="mt-2 text-sm text-fg-muted">
                Browse the shop for rods, reels, alarms and more.
              </p>
              <Button asChild className="mt-6">
                <Link to="/shop">Shop tackle</Link>
              </Button>
            </div>
          ) : (
            <div className="grid gap-8 lg:grid-cols-12">
              <ul className="space-y-4 lg:col-span-8">
                {lines.map((line) => (
                  <li
                    key={line.productId}
                    className="card-surface flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div className="min-w-0">
                      <Link
                        to="/product/$slug"
                        params={{ slug: line.slug }}
                        className="font-display text-lg font-semibold text-fg hover:text-accent"
                      >
                        {line.title}
                      </Link>
                      <p className="text-sm text-fg-muted">{line.brand}</p>
                      <p className="mt-1 font-semibold text-fg">
                        {formatPrice(line.price)}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center rounded-md border border-border">
                        <button
                          type="button"
                          className="flex size-10 items-center justify-center text-fg-muted hover:text-fg"
                          aria-label="Decrease quantity"
                          onClick={() =>
                            setQty(line.productId, line.quantity - 1)
                          }
                        >
                          <Minus className="size-4" />
                        </button>
                        <span className="w-8 text-center text-sm font-medium">
                          {line.quantity}
                        </span>
                        <button
                          type="button"
                          className="flex size-10 items-center justify-center text-fg-muted hover:text-fg"
                          aria-label="Increase quantity"
                          onClick={() =>
                            setQty(line.productId, line.quantity + 1)
                          }
                        >
                          <Plus className="size-4" />
                        </button>
                      </div>
                      <button
                        type="button"
                        className="flex size-10 items-center justify-center rounded-md text-fg-muted hover:bg-bg-subtle hover:text-sale"
                        aria-label="Remove item"
                        onClick={() => remove(line.productId)}
                      >
                        <Trash2 className="size-4" />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>

              <aside className="card-surface h-fit p-6 lg:col-span-4">
                <h2 className="font-display text-xl font-semibold text-fg">
                  Order summary
                </h2>
                <dl className="mt-4 space-y-2 text-sm">
                  <div className="flex justify-between text-fg-muted">
                    <dt>Subtotal</dt>
                    <dd className="font-medium text-fg">
                      {formatPrice(subtotal)}
                    </dd>
                  </div>
                  <div className="flex justify-between text-fg-muted">
                    <dt>UK shipping (est.)</dt>
                    <dd className="font-medium text-fg">
                      {formatPrice(shipping)}
                    </dd>
                  </div>
                  <div className="flex justify-between border-t border-border pt-3 text-base">
                    <dt className="font-semibold text-fg">Total</dt>
                    <dd className="font-display text-xl font-semibold text-fg">
                      {formatPrice(total)}
                    </dd>
                  </div>
                </dl>
                <Button asChild size="lg" className="mt-6 w-full">
                  <Link to="/checkout">Checkout</Link>
                </Button>
                <p className="mt-3 text-xs text-fg-subtle">
                  Card payments and bank transfer confirmed after order details.
                </p>
              </aside>
            </div>
          )}
        </div>
      </section>
    </SiteShell>
  );
}
