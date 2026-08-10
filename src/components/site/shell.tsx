import type { ReactNode } from "react";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 surface-page">{children}</main>
      <SiteFooter />
    </div>
  );
}

/** Dark brand hero — uses theme tokens (.surface-ink) shared with homepage. */
export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="surface-ink border-b border-ink-border">
      <div className="container-page py-14 sm:py-20">
        {eyebrow ? <p className="surface-ink-eyebrow">{eyebrow}</p> : null}
        <h1 className="surface-ink-title text-3xl sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="surface-ink-body">{description}</p>
        ) : null}
      </div>
    </section>
  );
}
