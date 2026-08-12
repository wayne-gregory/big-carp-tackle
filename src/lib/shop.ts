export const shop = {
  name: "Big Carp Tackle",
  shortName: "BCT",
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
  { id: "bait", label: "Bait & tackle", blurb: "Boilies, rigs & terminal" },
  { id: "accessories", label: "Accessories", blurb: "Headtorches, scales & more" },
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
  /** Optional product photo under /public */
  image?: string;
};

const delkimEvrHighlights = [
  "3 × Delkim EV-R bite alarms + receiver",
  "Like new — barely used",
  "All functions tested (LEDs, volume, tone, vibration)",
  "Batteries included / freshly fitted",
  "UK sale only",
] as const;

function delkimEvrListing(
  n: 1 | 2 | 3 | 4,
  location: string,
): Product {
  return {
    id: `delkim-evr-${n}`,
    slug: `delkim-ev-r-set-${n}`,
    title: `Delkim EV-R — 3 heads + receiver (Set ${n})`,
    brand: "Delkim",
    category: "alarms",
    price: 300,
    compareAt: 450,
    condition: "Excellent",
    description:
      "Delkim EV-R bite alarm set — three heads plus matching receiver. Like new condition with minimal bankside use. All heads respond cleanly, receiver pairs correctly, cosmetics near mint. Ideal as a ready-to-fish setup for UK carp venues.",
    highlights: [...delkimEvrHighlights],
    location,
    stock: 1,
    featured: n <= 2,
    accent: "amber",
    image: "/products/delkim-ev-r.jpg",
  };
}

export const products: Product[] = [
  // New Delkim EV-R stock (4 sets)
  delkimEvrListing(1, "West Sussex"),
  delkimEvrListing(2, "West Sussex"),
  delkimEvrListing(3, "West Sussex"),
  delkimEvrListing(4, "West Sussex"),
  {
    id: "p1",
    slug: "fox-horizon-x4-12ft-3lb",
    title: "Fox Horizon X4 12ft 3.00lb — pair",
    brand: "Fox",
    category: "rods",
    price: 145,
    compareAt: 220,
    condition: "Very good",
    description:
      "Matched pair of Fox Horizon X4 12ft 3lb test curve rods. Light cosmetics only, rings true, full cork grips. Ideal progressive action for mid-range UK venues.",
    highlights: [
      "Sold as a matched pair",
      "Full cork grips",
      "No structural repairs",
      "Includes original Fox rod bags",
    ],
    location: "Hampshire",
    stock: 1,
    featured: true,
    accent: "emerald",
  },
  {
    id: "p2",
    slug: "shimano-ultegrx-14000-xte",
    title: "Shimano Ultegra XTE 14000 — x2",
    brand: "Shimano",
    category: "reels",
    price: 210,
    compareAt: 320,
    condition: "Excellent",
    description:
      "Two Ultegra XTE 14000 big pits, sparingly used. Smooth freespool, clean spools, original boxes. Perfect partners for 12ft carp rods.",
    highlights: [
      "Two reels, matching",
      "Original boxes & manuals",
      "Barely used line wear",
      "Instant drag still crisp",
    ],
    location: "Kent",
    stock: 1,
    featured: true,
    accent: "sky",
  },
  {
    id: "p3",
    slug: "delkim-txi-plus-set",
    title: "Delkim TXi-D Plus — 3 + receiver",
    brand: "Delkim",
    category: "alarms",
    price: 289,
    compareAt: 420,
    condition: "Very good",
    description:
      "Classic Delkim TXi-D Plus set of three heads plus RX Pro receiver. Fresh batteries fitted, all tones clean. Slight bankside scuffs only.",
    highlights: [
      "3 heads + RX Pro",
      "Vibration & LEDs tested",
      "Hard case included",
      "UK power adapters",
    ],
    location: "Essex",
    stock: 1,
    accent: "amber",
  },
  {
    id: "p4",
    slug: "nash-scope-ops-rucksack",
    title: "Nash Scope Ops Rucksack",
    brand: "Nash",
    category: "bags",
    price: 68,
    compareAt: 99,
    condition: "Good",
    description:
      "Compact Scope Ops rucksack — solid zippers, tidy interior, light mud staining on base from sessions. Still plenty of life left.",
    highlights: [
      "Main + side pockets",
      "Zips work freely",
      "Base cleaned",
      "Ideal short sessions",
    ],
    location: "Surrey",
    stock: 1,
    accent: "lime",
  },
  {
    id: "p5",
    slug: "trakker-sanctuary-landing-net",
    title: "Trakker Sanctuary Landing Net 42\"",
    brand: "Trakker",
    category: "nets",
    price: 55,
    compareAt: 85,
    condition: "Very good",
    description:
      "42\" Sanctuary net with soft mesh. Handle joins solid, no broken spreader block. Mesh rinsed and dried.",
    highlights: [
      '42" soft mesh',
      "Solid spreader",
      "Mesh in good order",
      "Two-piece handle",
    ],
    location: "Cambridgeshire",
    stock: 2,
    accent: "teal",
  },
  {
    id: "p6",
    slug: "fox-flatliner-bedchair",
    title: "Fox Flatliner 5 Season Bedchair",
    brand: "Fox",
    category: "beds",
    price: 95,
    compareAt: 160,
    condition: "Good",
    description:
      "Flatliner bedchair with thick mattress. Frame solid, legs level, fabric clean after a deep wash. One minor scuff on leg joint.",
    highlights: [
      "Level flat profile",
      "Thick padded mattress",
      "Frame checked",
      "Sleeps comfortably",
    ],
    location: "Norfolk",
    stock: 1,
    accent: "stone",
  },
  {
    id: "p7",
    slug: "korda-tackle-box-rigs",
    title: "Korda tackle box + rig kit bundle",
    brand: "Korda",
    category: "accessories",
    price: 38,
    compareAt: 65,
    condition: "Very good",
    description:
      "Organised Korda tackle box packed with unused hooks, swivels, lead clips and a selection of ready-tied rigs. Ready to fish.",
    highlights: [
      "Hooks sizes 4–8",
      "Lead clips & beads",
      "Ready-tied rigs",
      "Box in clean condition",
    ],
    location: "Berkshire",
    stock: 1,
    accent: "orange",
  },
  {
    id: "p8",
    slug: "sonik-vaderx-rs-8000",
    title: "Sonik VaderX RS 8000 — single",
    brand: "Sonik",
    category: "reels",
    price: 42,
    compareAt: 69,
    condition: "Good",
    description:
      "Single VaderX RS 8000 freespool reel. Smooth retrieve, slight cosmetic marks on rotor. Ideal spare or short-session setup.",
    highlights: [
      "Freespool works",
      "Spare spool included",
      "Cosmetics only wear",
      "Value big-pit style",
    ],
    location: "Yorkshire",
    stock: 1,
    accent: "sky",
  },
  {
    id: "p9",
    slug: "aqua-atom-bivvy",
    title: "Aqua Atom 1-Man Bivvy",
    brand: "Aqua",
    category: "beds",
    price: 175,
    compareAt: 280,
    condition: "Very good",
    description:
      "Aqua Atom 1-man — compact footprint, still waterproof. Pegs complete, slight fading on roof. Ideal for short sessions and winter overnighters.",
    highlights: [
      "Pegs complete",
      "Poles straight",
      "Slight roof fade only",
      "Packs small",
    ],
    location: "Oxfordshire",
    stock: 1,
    accent: "emerald",
  },
  {
    id: "p10",
    slug: "greys-prodigy-gt4-12ft",
    title: "Greys Prodigy GT4 12ft 3.25lb — pair",
    brand: "Greys",
    category: "rods",
    price: 118,
    compareAt: 190,
    condition: "Good",
    description:
      "Solid progressive pair of Prodigy GT4s. Honest bankside wear on blanks, no soft spots, rings secure. Great first serious carp rods.",
    highlights: [
      "Matched pair",
      "3.25lb test curve",
      "Honest cosmetics",
      "No soft spots",
    ],
    location: "Lincolnshire",
    stock: 1,
    accent: "lime",
  },
  {
    id: "p11",
    slug: "gardner-tackle-scales-60lb",
    title: "Gardner Super Heavy Duty Scales 60lb",
    brand: "Gardner",
    category: "accessories",
    price: 28,
    compareAt: 45,
    condition: "Excellent",
    description:
      "Trusted 60lb dial scales, zeroed and working. Soft case included. Barely used.",
    highlights: [
      "60lb capacity",
      "Zero checked",
      "Soft case",
      "Near new condition",
    ],
    location: "Devon",
    stock: 1,
    accent: "amber",
  },
  {
    id: "p12",
    slug: "mainline-cell-boilies-15mm",
    title: "Mainline Cell 15mm — 5kg frozen",
    brand: "Mainline",
    category: "bait",
    price: 32,
    compareAt: 48,
    condition: "Excellent",
    description:
      "5kg Mainline Cell 15mm, kept frozen, best-before well in date. Collected or next-day chilled bag shipping within UK mainland.",
    highlights: [
      "Frozen storage",
      "In-date batch",
      "15mm classic Cell",
      "Chilled dispatch option",
    ],
    location: "West Midlands",
    stock: 3,
    accent: "orange",
  },
];

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
