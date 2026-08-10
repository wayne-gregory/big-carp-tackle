import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/site/logo";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import { UserButton } from "@/lib/auth/gates";
import { nav } from "@/lib/company";
import { cn } from "@/lib/utils";

function AuthSlot() {
  const { user, isPending } = useCurrentUserState();
  if (isPending) {
    return <div className="h-9 w-9 animate-pulse rounded-full bg-bg-subtle" />;
  }
  if (user) return <UserButton />;
  return (
    <Button asChild variant="secondary" size="sm">
      <Link to="/login">Sign in</Link>
    </Button>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const onDark = !scrolled && !open;

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b transition-colors duration-200",
        onDark
          ? "border-white/10 bg-ink/85 text-white backdrop-blur-sm"
          : "border-border bg-bg-elevated/95 backdrop-blur-md",
      )}
      style={{ paddingTop: "var(--grok-banner-h, 0px)" }}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Logo
          heightClass="h-8 sm:h-9"
          className="min-w-0 shrink"
          tone={onDark ? "on-dark" : "color"}
          onClick={() => setOpen(false)}
        />

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "text-sm font-medium transition-colors [&.active]:font-semibold",
                onDark
                  ? "text-white/80 hover:text-white [&.active]:text-sky-300"
                  : "text-fg-muted hover:text-fg [&.active]:text-accent",
              )}
              activeProps={{ className: "active" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          {!onDark && <AuthSlot />}
          <Button asChild size="sm">
            <Link to="/contact">Book a consultation</Link>
          </Button>
        </div>

        <button
          type="button"
          className={cn(
            "inline-flex h-11 w-11 items-center justify-center rounded-md border md:hidden",
            onDark
              ? "border-white/20 bg-white/10 text-white"
              : "border-border bg-bg-elevated text-fg",
          )}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-border bg-bg-elevated md:hidden">
          <nav
            className="container-page flex flex-col gap-1 py-4"
            aria-label="Mobile"
          >
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-md px-3 py-3 text-base font-medium text-fg hover:bg-bg-subtle"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 flex flex-col gap-2 border-t border-border pt-4">
              <AuthSlot />
              <Button asChild>
                <Link to="/contact" onClick={() => setOpen(false)}>
                  Book a consultation
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
