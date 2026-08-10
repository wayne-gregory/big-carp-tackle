export const company = {
  name: "InovaCore",
  legalName: "INOVACORE LIMITED",
  companyNumber: "09124480",
  tagline: "Faster systems, fewer outages, clearer IT",
  description:
    "We help growing businesses get reliable infrastructure and cloud — better performance, stronger backup, and Microsoft 365 that staff can actually use — without unnecessary complexity.",
  positioning:
    "Infrastructure and cloud for businesses with more complex environments: fix performance issues, simplify estates, and design systems that stay reliable.",
  email: "hello@inovacore.co.uk",
  website: "https://inovacore.co.uk",
  linkedin: "https://www.linkedin.com/in/wayne-gregory/",
  registeredOffice:
    "C/O Xeinadin South Essex Ltd, The Rivendell Centre, White Horse Lane, Maldon, England, CM9 5QP",
  offices: [
    {
      label: "Main Office",
      address: "22 Grafton Gardens, Sompting, Lancing, West Sussex, BN15 9SP",
    },
  ],
} as const;

/** Core service cards — aligned to conversion brief (5 focus areas). */
export const services = [
  {
    slug: "infrastructure",
    title: "Infrastructure & virtualisation",
    body: "VMware and server estates that perform — optimisation, health checks, capacity planning, and clean design instead of years of bolt-ons.",
  },
  {
    slug: "cloud-azure",
    title: "Cloud solutions (Azure)",
    body: "Azure migrations, hybrid setups, and Microsoft 365 / Business Premium when the cloud should simplify the estate — not add another mess.",
  },
  {
    slug: "backup-dr",
    title: "Backup & disaster recovery",
    body: "Backup design, DR planning, and recovery testing so outages and data loss are handled with a plan — not a scramble.",
  },
  {
    slug: "security",
    title: "Security & compliance",
    body: "Identity, endpoint protection, access control, and hardening — practical security for production environments, not checkbox theatre.",
  },
  {
    slug: "automation",
    title: "IT automation & optimisation",
    body: "PowerShell and process automation, reporting, and optimisation so routine work is consistent and performance stays visible.",
  },
] as const;

export const whyUs = [
  "Experience in complex, production environments",
  "VMware and Azure expertise with Microsoft 365 where it fits",
  "Focus on performance, reliability, and uptime",
  "Tailored solutions — not off-the-shelf packages",
  "Clear communication — plain English, no jargon wall",
  "Right-sized for growing businesses — not enterprise-only pricing",
] as const;

export const projects = [
  {
    title: "Virtualisation performance turnaround",
    summary:
      "Stabilised and optimised a VMware estate that had grown messy — clearer capacity, better performance, and a realistic support model for a mid-sized organisation.",
    tags: ["VMware", "Performance", "Infrastructure"],
  },
  {
    title: "Hybrid cloud without the drama",
    summary:
      "Connected on-prem servers and Microsoft cloud services for a business not ready for a full cloud move — hybrid identity, phased migration, clear costs.",
    tags: ["Azure", "Hybrid", "Migration"],
  },
  {
    title: "Disaster recovery rebuild",
    summary:
      "Designed and implemented practical DR for critical systems — runbooks, recovery testing, and recovery times the business could plan around.",
    tags: ["DR", "Backup", "Resilience"],
  },
  {
    title: "Microsoft 365 Business Premium rollout",
    summary:
      "Moved a growing firm onto Business Premium — mail, Teams, SharePoint, and device standards without over-buying licences or enterprise bloat.",
    tags: ["Microsoft 365", "Business Premium", "Security"],
  },
  {
    title: "Identity & endpoint hardening",
    summary:
      "Entra ID, MFA, and Intune baselines for a multi-site team — consistent access and managed devices without tool sprawl.",
    tags: ["Security", "Entra ID", "Intune"],
  },
  {
    title: "Automation that cuts noise",
    summary:
      "PowerShell and operational automation for provisioning and reporting — less manual toil, more consistent builds across the estate.",
    tags: ["Automation", "PowerShell", "Ops"],
  },
] as const;

export const team = [
  {
    name: "Wayne Gregory",
    role: "Founder · Infrastructure & cloud consultant",
    bio: "25+ years designing and optimising infrastructure and hybrid cloud — VMware, Azure, backup/DR, security, and Microsoft 365. Focused on businesses that have outgrown DIY IT and need performance and reliability without unnecessary complexity.",
    focus: [
      "Infrastructure & VMware",
      "Azure & hybrid",
      "Backup & DR",
      "Security & identity",
      "Microsoft 365 Business Premium",
      "Automation",
    ],
  },
] as const;

export const platforms = [
  "VMware",
  "Azure",
  "Microsoft 365",
  "Backup & DR",
  "Entra ID / Intune",
  "PowerShell",
] as const;

export const testimonials = [
  {
    quote:
      "Complex infrastructure finally simplified — performance improved and we knew what we owned again.",
    author: "Operations lead",
    context: "Infrastructure optimisation",
  },
  {
    quote:
      "Clear advice, no jargon wall, and DR that actually restores. Exactly what a growing company needs.",
    author: "Managing director",
    context: "Backup & DR",
  },
  {
    quote:
      "Hybrid cloud and Microsoft 365 sorted without a six-month transformation programme. Practical and cost-aware.",
    author: "IT coordinator",
    context: "Cloud & Microsoft 365",
  },
] as const;

export const nav = [
  { to: "/services" as const, label: "Services" },
  { to: "/case-studies" as const, label: "Case studies" },
  { to: "/about" as const, label: "About" },
  { to: "/contact" as const, label: "Contact" },
];
