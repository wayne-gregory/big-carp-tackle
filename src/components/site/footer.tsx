import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/site/logo";
import { company, nav } from "@/lib/company";

export function SiteFooter() {
  return (
    <footer className="border-t border-ink-border bg-ink text-on-ink">
      <div className="container-page flex flex-col gap-10 py-12 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-sm space-y-4">
          <Logo tone="on-dark" heightClass="h-10" />
          <p className="text-sm leading-relaxed text-on-ink-muted">
            Infrastructure & cloud solutions for growing businesses with
            more complex environments — performance, reliability, and design
            that actually works.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:gap-16">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-on-ink-subtle">
              Explore
            </p>
            <ul className="space-y-2">
              {nav.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-on-ink-muted transition-colors hover:text-on-ink"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/microsoft-365"
                  className="text-sm text-on-ink-muted transition-colors hover:text-on-ink"
                >
                  Microsoft 365
                </Link>
              </li>
            </ul>
          </div>
          <div className="min-w-0">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-on-ink-subtle">
              Contact
            </p>
            <ul className="space-y-2 text-sm text-on-ink-muted">
              <li className="break-all">
                <a
                  href={`mailto:${company.email}`}
                  className="transition-colors hover:text-on-ink"
                >
                  {company.email}
                </a>
              </li>
              {company.offices.map((o) => (
                <li key={o.label}>
                  <span className="block text-on-ink">{o.label}</span>
                  <span className="text-on-ink-subtle">{o.address}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-ink-border">
        <div className="container-page flex flex-col gap-2 py-5 text-xs text-on-ink-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {company.legalName}. Company no.{" "}
            {company.companyNumber}
          </p>
          <p className="max-w-md sm:text-right">
            Registered office: {company.registeredOffice}
          </p>
        </div>
      </div>
    </footer>
  );
}
