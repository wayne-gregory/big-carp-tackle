import { shop } from "@/lib/shop";

export const SITE_URL = "https://www.bigcarpfishing.co.uk";

export function pageHead(opts: {
  title: string;
  description: string;
  path?: string;
}) {
  const url = `${SITE_URL}${opts.path ?? "/"}`;
  return {
    meta: [
      { title: opts.title },
      { name: "description", content: opts.description },
      { property: "og:title", content: opts.title },
      { property: "og:description", content: opts.description },
      { property: "og:url", content: url },
      { property: "og:type", content: "website" },
      { property: "og:image", content: `${SITE_URL}/og.jpg` },
      { property: "og:site_name", content: shop.name },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

export function jsonLdScript(data: Record<string, unknown>) {
  return {
    type: "application/ld+json" as const,
    children: JSON.stringify(data),
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Store",
    name: shop.name,
    alternateName: shop.shortName,
    url: SITE_URL,
    description: shop.description,
    email: shop.email,
    areaServed: "GB",
    currenciesAccepted: "GBP",
    paymentAccepted: "Bank transfer, card (at checkout)",
    logo: `${SITE_URL}/brand/logo-full.png`,
    image: `${SITE_URL}/brand/logo-basic.png`,
  };
}
