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

/** Dummy/test catalogue rows — keep in UI, keep out of Google */
export function isDummyProduct(product: Product): boolean {
  if (product.image?.includes("/products/dummy")) return true;
  const d = product.description.toLowerCase();
  return (
    d.includes("test listing") ||
    d.includes("dummy stock") ||
    d.includes("not a real sale")
  );
}

export function pageHead(opts: {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: "website" | "product";
  noindex?: boolean;
  scripts?: ReturnType<typeof jsonLdScript>[];
}) {
  const url = `${SITE_URL}${opts.path ?? "/"}`;
  const image = opts.image
    ? opts.image.startsWith("http")
      ? opts.image
      : `${SITE_URL}${opts.image}`
    : `${SITE_URL}/og.jpg`;

  const meta: Array<Record<string, string>> = [
    { title: opts.title },
    { name: "description", content: opts.description },
    { property: "og:title", content: opts.title },
    { property: "og:description", content: opts.description },
    { property: "og:url", content: url },
    { property: "og:type", content: opts.type ?? "website" },
    { property: "og:image", content: image },
    { property: "og:site_name", content: shop.name },
    { property: "og:locale", content: "en_GB" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: opts.title },
    { name: "twitter:description", content: opts.description },
    { name: "twitter:image", content: image },
    { name: "geo.region", content: "GB" },
    { name: "geo.placename", content: "United Kingdom" },
  ];

  if (opts.noindex) {
    meta.push({ name: "robots", content: "noindex, nofollow" });
    meta.push({ name: "googlebot", content: "noindex, nofollow" });
  }

  return {
    meta,
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
    "@id": `${SITE_URL}/#store`,
    name: shop.name,
    alternateName: [shop.shortName, "Big Carp Tackle"],
    url: SITE_URL,
    description: shop.description,
    email: shop.email,
    areaServed: {
      "@type": "Country",
      name: "United Kingdom",
    },
    currenciesAccepted: "GBP",
    paymentAccepted: "Bank transfer, card (at checkout)",
    priceRange: "££",
    logo: `${SITE_URL}/brand/logo-full.png`,
    image: `${SITE_URL}/brand/logo-basic.png`,
    sameAs: [],
  };
}

/** Helps Google understand the site + on-site search */
export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: shop.name,
    url: SITE_URL,
    description: shop.description,
    inLanguage: "en-GB",
    publisher: { "@id": `${SITE_URL}/#store` },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/shop?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function faqJsonLd(
  faqs: { question: string; answer: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

export const shopFaqs: { question: string; answer: string }[] = [
  {
    question: "Where can I buy second hand carp fishing tackle in the UK?",
    answer:
      "Big Carp Fishing sells second hand carp fishing tackle online across the United Kingdom. Browse rods, reels, alarms, bags, nets, beds and accessories with honest condition grades and mainland UK shipping.",
  },
  {
    question: "Do you ship second hand carp tackle outside the UK?",
    answer:
      "No. We only sell and ship within the United Kingdom (mainland shipping from £4.95, collection by arrangement). International orders are not accepted.",
  },
  {
    question: "How is condition graded on used carp gear?",
    answer:
      "Every listing is graded Excellent, Very good, Good or Fair with clear notes. Excellent means like new or barely used; Fair means heavy wear but still usable and priced accordingly.",
  },
  {
    question: "Can I sell my carp fishing tackle to you?",
    answer:
      "Yes. Use the Sell page to send photos, brand, model and honest wear notes. We can make a fair buy-in offer or list items on your behalf with transparent fees.",
  },
  {
    question: "Is payment taken online at checkout?",
    answer:
      "Orders can be placed on the site. Card payments via Stripe can be enabled for live sales; until then we confirm payment by email (bank transfer or payment link) before dispatch.",
  },
];

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

/** ItemList for shop listing pages — real stock only when possible */
export function itemListJsonLd(
  items: Product[],
  opts: { name: string; path: string },
) {
  const list = items.filter((p) => !isDummyProduct(p));
  const source = list.length > 0 ? list : items;
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: opts.name,
    url: `${SITE_URL}${opts.path}`,
    numberOfItems: source.length,
    itemListElement: source.slice(0, 50).map((p, i) => ({
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
