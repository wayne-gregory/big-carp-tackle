import { Link } from "@tanstack/react-router";
import {
  Backpack,
  BedDouble,
  Bell,
  CircleDot,
  Fish,
  Package,
  Scale,
  Waves,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  categoryLabel,
  formatPrice,
  type Category,
  type Product,
} from "@/lib/shop";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart";
import { toast } from "sonner";

const icons: Record<Category, LucideIcon> = {
  rods: Waves,
  reels: CircleDot,
  alarms: Bell,
  bags: Backpack,
  nets: Fish,
  beds: BedDouble,
  bait: Package,
  accessories: Scale,
};

export function ProductCard({ product }: { product: Product }) {
  const add = useCart((s) => s.add);
  const Icon = icons[product.category];

  return (
    <article className="card-surface group flex flex-col overflow-hidden transition-shadow hover:shadow-md">
      <Link
        to="/product/$slug"
        params={{ slug: product.slug }}
        className="block"
      >
        <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-bg-subtle">
          {product.image ? (
            <img
              src={product.image}
              alt={product.title}
              className="h-full w-full object-contain p-3 transition-transform duration-200 group-hover:scale-[1.03]"
              loading="lazy"
            />
          ) : (
            <>
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgb(64_96_208/0.12),transparent_55%)]" />
              <Icon
                className="relative size-14 text-accent/70 transition-transform duration-200 group-hover:scale-105"
                strokeWidth={1.25}
              />
            </>
          )}
          {product.compareAt ? (
            <span className="absolute left-3 top-3 rounded-full bg-sale px-2.5 py-0.5 text-xs font-semibold text-white">
              Save {formatPrice(product.compareAt - product.price)}
            </span>
          ) : null}
          <span className="absolute bottom-3 left-3 rounded-md bg-bg-elevated/95 px-2 py-0.5 text-xs font-medium text-fg-muted shadow-sm">
            {product.condition}
          </span>
        </div>
      </Link>
      <div className="flex flex-1 flex-col p-4">
        <p className="text-xs font-medium uppercase tracking-wider text-fg-subtle">
          {product.brand} · {categoryLabel(product.category)}
        </p>
        <Link
          to="/product/$slug"
          params={{ slug: product.slug }}
          className="mt-1 font-display text-lg font-semibold leading-snug text-fg hover:text-accent"
        >
          {product.title}
        </Link>
        <p className="mt-1 text-xs text-fg-subtle">{product.location}</p>
        <div className="mt-auto flex items-end justify-between gap-3 pt-4">
          <div>
            <p className="font-display text-xl font-semibold text-fg">
              {formatPrice(product.price)}
            </p>
            {product.compareAt ? (
              <p className="text-xs text-fg-subtle line-through">
                New ~{formatPrice(product.compareAt)}
              </p>
            ) : null}
          </div>
          <Button
            size="sm"
            onClick={() => {
              add(product);
              toast.success("Added to basket", { description: product.title });
            }}
          >
            Add
          </Button>
        </div>
      </div>
    </article>
  );
}
