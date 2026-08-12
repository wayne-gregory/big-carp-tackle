import { Link } from "@tanstack/react-router";
import { Menu, ShoppingBag, X } from "lucide-react";
import { useState } from "react";
import { BrandLogo } from "@/components/shop/logo";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart";
import { shop } from "@/lib/shop";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/shop" as const, label: "Shop" },
  { to: "/sell" as const, label: "Sell gear" },
  { to: "/how-it-works" as const, label: "How it works" },
  { to: "/about" as const, label: "About" },
  { to: "/contact" as const, label: "Contact" },
];

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

function SiteHeader() {
  const [open, setOpen] = useState(false);
  const count = useCart((s) => s.lines.reduce((n, l) => n + l.quantity, 0));

  return (
    <header className="sticky top-0 z-40 border-b border-ink-border bg-ink/95 text-on-ink backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between gap-4 sm:h-[4.25rem]">
        <Link to="/" className="flex shrink-0 items-center" aria-label={shop.name}>
          <BrandLogo variant="header" className="max-w-[min(200px,48vw)]" />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-md px-3 py-2 text-sm font-medium text-on-ink-muted transition-colors hover:bg-white/5 hover:text-on-ink"
              activeProps={{ className: "text-on-ink bg-white/5" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            asChild
            variant="secondary"
            size="sm"
            className="relative border-ink-border bg-white/5 text-on-ink hover:bg-white/10 hover:text-on-ink"
          >
            <Link to="/cart" aria-label={`Basket, ${count} items`}>
              <ShoppingBag className="size-4" />
              <span className="hidden sm:inline">Basket</span>
              {count > 0 ? (
                <span className="absolute -right-1.5 -top-1.5 flex size-5 items-center justify-center rounded-full bg-accent text-[11px] font-semibold text-accent-fg">
                  {count}
                </span>
              ) : null}
            </Link>
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="text-on-ink hover:bg-white/10 hover:text-on-ink md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-ink-border bg-ink md:hidden">
          <nav className="container-page flex flex-col gap-1 py-3">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-md px-3 py-3 text-base font-medium text-on-ink-muted hover:bg-white/5 hover:text-on-ink"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-ink-border bg-ink text-on-ink">
      <div className="container-page grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <BrandLogo variant="footer" />
          <p className="mt-4 max-w-md text-sm leading-relaxed text-on-ink-muted">
            {shop.description}
          </p>
          <p className="mt-4 text-sm text-on-ink-subtle">{shop.shippingNote}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-on-ink-subtle">
            Shop
          </p>
          <ul className="mt-3 space-y-2 text-sm text-on-ink-muted">
            <li>
              <Link to="/shop" className="hover:text-on-ink">
                All tackle
              </Link>
            </li>
            <li>
              <Link to="/sell" className="hover:text-on-ink">
                Sell your gear
              </Link>
            </li>
            <li>
              <Link to="/how-it-works" className="hover:text-on-ink">
                How it works
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-on-ink-subtle">
            Contact
          </p>
          <ul className="mt-3 space-y-2 text-sm text-on-ink-muted">
            <li>
              <a
                href={`mailto:${shop.email}`}
                className="break-all hover:text-on-ink"
              >
                {shop.email}
              </a>
            </li>
            <li>
              <Link to="/contact" className="hover:text-on-ink">
                Message us
              </Link>
            </li>
            <li className="text-on-ink-subtle">UK only · GBP</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ink-border">
        <div className="container-page flex flex-col gap-2 py-5 text-xs text-on-ink-subtle sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} {shop.name} ({shop.shortName}).
            Second-hand carp tackle for the UK.
          </p>
          <p className="font-medium text-on-ink-muted">{shop.domain}</p>
        </div>
      </div>
    </footer>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "border-b border-border bg-bg-subtle/60 py-12 sm:py-16",
        className,
      )}
    >
      <div className="container-page max-w-3xl">
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-2 font-display text-4xl tracking-wide text-fg sm:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-3 font-sans text-base normal-case tracking-normal text-fg-muted sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  );
}
