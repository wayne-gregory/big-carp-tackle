import catalog from "@/data/products.json";

export const shop = {
  name: "Big Carp Fishing",
  shortName: "BCF",
  domain: "bigcarpfishing.co.uk",
  tagline: "Quality second-hand carp tackle, UK only",
  description:
    "Buy and sell quality pre-owned carp tackle across the United Kingdom — rods, reels, alarms, bags and more, checked and ready for the bank.",
  email: "hello@bigcarpfishing.co.uk",
  region: "United Kingdom",
  shippingNote:
    "UK mainland shipping from £4.95. Collection by arrangement. No international sales.",
  currency: "GBP" as const,
} as const;

export type Condition = "Excellent" | "Very good" | "Good" | "Fair";

export type Category =
  | "rods"
  | "reels"
  | "alarms"
  | "bags"
  | "nets"
  | "beds"
  | "bait"
  | "accessories";

export const categories: {
  id: Category;
  label: string;
  blurb: string;
}[] = [
  { id: "rods", label: "Rods", blurb: "Carp rods, spod & marker" },
  { id: "reels", label: "Reels", blurb: "Big pit, freespool & baitrunner" },
  { id: "alarms", label: "Alarms & indicators", blurb: "Bite alarms & hangers" },
  { id: "bags", label: "Bags & luggage", blurb: "Rucksacks, rod holds & barrows" },
  { id: "nets", label: "Nets & mats", blurb: "Landing nets, unhooking mats" },
  { id: "beds", label: "Beds & shelters", blurb: "Bedchairs, chairs & bivvies" },
  { id: "bait", label: "Bait & tackle", blurb: "Boilies, particles, hookbaits" },
  { id: "accessories", label: "Accessories", blurb: "Pods, terminal, tools & more" },
];

export type Product = {
  id: string;
  slug: string;
  title: string;
  brand: string;
  category: Category;
  price: number;
  compareAt?: number;
  condition: Condition;
  description: string;
  highlights: string[];
  location: string;
  stock: number;
  featured?: boolean;
  accent: string;
  image?: string;
};

type CatalogRow = {
  id: string;
  slug: string;
  title: string;
  brand: string;
  category: Category;
  price: number;
  compareAt?: number | null;
  condition: Condition;
  description: string;
  highlights: string[];
  location: string;
  stock: number;
  featured?: boolean;
  accent: string;
  image?: string;
};

export const products: Product[] = (catalog as CatalogRow[]).map((row) => ({
  id: row.id,
  slug: row.slug,
  title: row.title,
  brand: row.brand,
  category: row.category,
  price: row.price,
  compareAt: row.compareAt ?? undefined,
  condition: row.condition,
  description: row.description,
  highlights: row.highlights ?? [],
  location: row.location,
  stock: row.stock,
  featured: row.featured,
  accent: row.accent,
  image: row.image,
}));

export function formatPrice(pounds: number) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(pounds);
}

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getByCategory(category: Category | "all") {
  if (category === "all") return products;
  return products.filter((p) => p.category === category);
}

export function categoryLabel(id: Category) {
  return categories.find((c) => c.id === id)?.label ?? id;
}
