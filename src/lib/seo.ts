import { company } from "@/lib/company";

/** Canonical production site (prefer this over preview hosts for SEO). */
export const SITE_URL = "https://www.inovacore.co.uk";

export type PageSeo = {
  title: string;
  description: string;
  path: string;
  /** default true */
  index?: boolean;
  ogImage?: string;
  keywords?: string[];
};

function absoluteUrl(path: string) {
  if (path.startsWith("http")) return path;
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${p === "/" ? "" : p}`;
}

export function pageHead(seo: PageSeo) {
  const url = absoluteUrl(seo.path);
  const title =
    seo.path === "/"
      ? seo.title
      : `${seo.title} | ${company.name}`;
  const description = seo.description;
  const image = absoluteUrl(seo.ogImage ?? "/og.jpg");
  const index = seo.index !== false;
  const robots = index
    ? "index, follow, max-image-preview:large"
    : "noindex, nofollow";

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: robots },
      { name: "googlebot", content: robots },
      ...(seo.keywords?.length
        ? [{ name: "keywords", content: seo.keywords.join(", ") }]
        : []),
      { name: "author", content: company.legalName },
      { name: "geo.region", content: "GB-WSX" },
      { name: "geo.placename", content: "Sompting, West Sussex" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: company.name },
      { property: "og:locale", content: "en_GB" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:image", content: image },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        property: "og:image:alt",
        content: `${company.name} — ${company.tagline}`,
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: company.name,
        legalName: company.legalName,
        url: SITE_URL,
        logo: absoluteUrl("/brand/logo-icon.png"),
        image: absoluteUrl("/og.jpg"),
        email: company.email,
        description: company.description,
        sameAs: [company.linkedin],
        identifier: {
          "@type": "PropertyValue",
          name: "Companies House number",
          value: company.companyNumber,
        },
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#localbusiness`,
        name: company.name,
        image: absoluteUrl("/og.jpg"),
        url: SITE_URL,
        email: company.email,
        description: company.description,
        priceRange: "££",
        areaServed: [
          { "@type": "Country", name: "United Kingdom" },
          { "@type": "AdministrativeArea", name: "West Sussex" },
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress: "22 Grafton Gardens, Sompting",
          addressLocality: "Lancing",
          addressRegion: "West Sussex",
          postalCode: "BN15 9SP",
          addressCountry: "GB",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Infrastructure and cloud services",
          itemListElement: [
            "Infrastructure and virtualisation",
            "Cloud solutions (Azure)",
            "Backup and disaster recovery",
            "Security and compliance",
            "IT automation and optimisation",
            "Microsoft 365 Business Premium",
          ].map((name) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name },
          })),
        },
        parentOrganization: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: company.name,
        description: company.tagline,
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: "en-GB",
      },
    ],
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function jsonLdScript(data: unknown) {
  return {
    type: "application/ld+json" as const,
    children: JSON.stringify(data),
  };
}

export const coreKeywords = [
  "IT infrastructure consultancy UK",
  "VMware optimisation",
  "Azure hybrid cloud",
  "backup disaster recovery",
  "Microsoft 365 Business Premium",
  "IT automation PowerShell",
  "cloud consultant West Sussex",
  "growing business IT",
];
