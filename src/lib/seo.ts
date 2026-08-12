import type { Product } from "@/lib/shop";
import { shop } from "@/lib/shop";

export const SITE_URL = "https://www.bigcarpfishing.co.uk";

/** schema.org /itemCondition values for second-hand grades */
const conditionMap: Record<Product["condition"], string> = {
  Excellent: "https://schema.org/UsedCondition",
  "Very good": "https://schema.org/UsedCondition",
  Good: "https://schema.org/UsedCondition",
  Fair: "https://schema.org/UsedCondition",
};

export function pageHead(opts: {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: "website" | "product";
  scripts?: ReturnType<typeof jsonLdScript>[];
}) {
  const url = `${SITE_URL}${opts.path ?? "/"}`;
  const image = opts.image
    ? opts.image.startsWith("http")
      ? opts.image
      : `${SITE_URL}${opts.image}`
    : `${SITE_URL}/og.jpg`;

  return {
    meta: [
      { title: opts.title },
      { name: "description", content: opts.description },
      { property: "og:title", content: opts.title },
      { property: "og:description", content: opts.description },
      { property: "og:url", content: url },
      { property: "og:type", content: opts.type ?? "website" },
      { property: "og:image", content: image },
      { property: "og:site_name", content: shop.name },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: opts.title },
      { name: "twitter:description", content: opts.description },
      { name: "twitter:image", content: image },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: opts.scripts,
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

/**
 * Product + Offer JSON-LD for listing pages (Google rich results style).
 */
export function productJsonLd(product: Product) {
  const url = `${SITE_URL}/product/${product.slug}`;
  const image = product.image
    ? product.image.startsWith("http")
      ? product.image
      : `${SITE_URL}${product.image}`
    : `${SITE_URL}/og.jpg`;

  const availability =
    product.stock > 0
      ? "https://schema.org/InStock"
      : "https://schema.org/OutOfStock";

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${url}#product`,
    name: product.title,
    description: product.description,
    sku: product.id,
    mpn: product.id,
    brand: {
      "@type": "Brand",
      name: product.brand,
    },
    category: product.category,
    image: [image],
    itemCondition: conditionMap[product.condition],
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Condition grade",
        value: product.condition,
      },
      {
        "@type": "PropertyValue",
        name: "Listed from",
        value: product.location,
      },
    ],
    offers: {
      "@type": "Offer",
      url,
      priceCurrency: "GBP",
      price: Number(product.price).toFixed(2),
      priceValidUntil: priceValidUntil(),
      availability,
      itemCondition: conditionMap[product.condition],
      seller: {
        "@type": "Organization",
        name: shop.name,
        url: SITE_URL,
      },
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingDestination: {
          "@type": "DefinedRegion",
          addressCountry: "GB",
        },
        shippingRate: {
          "@type": "MonetaryAmount",
          value: "4.95",
          currency: "GBP",
        },
        deliveryTime: {
          "@type": "ShippingDeliveryTime",
          handlingTime: {
            "@type": "QuantitativeValue",
            minValue: 1,
            maxValue: 3,
            unitCode: "DAY",
          },
          transitTime: {
            "@type": "QuantitativeValue",
            minValue: 1,
            maxValue: 3,
            unitCode: "DAY",
          },
        },
      },
      hasMerchantReturnPolicy: {
        "@type": "MerchantReturnPolicy",
        applicableCountry: "GB",
        returnPolicyCategory:
          "https://schema.org/MerchantReturnNotPermitted",
        merchantReturnDays: 0,
      },
    },
  };
}

function priceValidUntil(): string {
  const d = new Date();
  d.setFullYear(d.getFullYear() + 1);
  return d.toISOString().slice(0, 10);
}

/** ItemList for shop listing pages */
export function itemListJsonLd(
  items: Product[],
  opts: { name: string; path: string },
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: opts.name,
    url: `${SITE_URL}${opts.path}`,
    numberOfItems: items.length,
    itemListElement: items.slice(0, 50).map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE_URL}/product/${p.slug}`,
      name: p.title,
    })),
  };
}

/** BreadcrumbList for product pages */
export function breadcrumbJsonLd(product: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Shop",
        item: `${SITE_URL}/shop`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: product.title,
        item: `${SITE_URL}/product/${product.slug}`,
      },
    ],
  };
}
