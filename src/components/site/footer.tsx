import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/site/logo";
import { company, nav } from "@/lib/company";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-ink text-white">
      <div className="container-page flex flex-col gap-10 py-12 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-sm space-y-4">
          <Logo tone="on-dark" heightClass="h-10" className="brightness-110" />
          <p className="text-sm leading-relaxed text-white/70">
            Practical Microsoft 365, cloud, backup, and infrastructure for
            small and mid-sized businesses — senior help without enterprise-only
            pricing.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:gap-16">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/50">
              Explore
            </p>
            <ul className="space-y-2">
              {nav.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="min-w-0">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/50">
              Contact
            </p>
            <ul className="space-y-2 text-sm text-white/70">
              <li className="break-all">
                <a
                  href={`mailto:${company.email}`}
                  className="transition-colors hover:text-white"
                >
                  {company.email}
                </a>
              </li>
              {company.offices.map((o) => (
                <li key={o.label}>
                  <span className="block text-white/90">{o.label}</span>
                  <span className="text-white/60">{o.address}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-5 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
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
