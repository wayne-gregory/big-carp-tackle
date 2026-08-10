export const company = {
  name: "InovaCore",
  legalName: "INOVACORE LIMITED",
  companyNumber: "09124480",
  tagline: "Practical IT, Microsoft 365 & cloud for growing businesses",
  description:
    "InovaCore helps small and mid-sized companies get reliable Microsoft 365, cloud, backup, and infrastructure — without enterprise-only pricing or complexity. Senior experience, right-sized for the way you actually work.",
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

export const services = [
  {
    slug: "m365",
    title: "Microsoft 365 for business",
    body: "Business Premium and Microsoft 365 setups that fit your size — email, Teams, SharePoint, Intune, security baselines, and day-to-day admin that keeps staff productive.",
  },
  {
    slug: "identity-security",
    title: "Identity, security & devices",
    body: "Entra ID, MFA, conditional access, device management, and sensible security for organisations that need protection without a full security department.",
  },
  {
    slug: "backup-dr",
    title: "Backup & business continuity",
    body: "Cloud and hybrid backup, restore testing, and recovery plans so a laptop loss, mailbox issue, or outage does not become a crisis.",
  },
  {
    slug: "cloud-azure",
    title: "Azure & hybrid cloud",
    body: "Right-sized Azure, hybrid connections, and migrations when on-prem still matters — clear costs, clear ownership, no unnecessary platform sprawl.",
  },
  {
    slug: "virtualisation",
    title: "Servers & virtualisation",
    body: "VMware and on-prem server estates kept healthy — upgrades, performance, storage, and lifecycle — when you still run your own kit or a small private cloud.",
  },
  {
    slug: "automation-support",
    title: "Automation & ongoing support",
    body: "Scripting, standard builds, and practical support so routine IT is consistent — ideal for growing teams that need senior help without a large permanent headcount.",
  },
] as const;

export const projects = [
  {
    title: "Microsoft 365 Business Premium rollout",
    summary:
      "Moved a growing professional firm onto Microsoft 365 Business Premium — mail, Teams, SharePoint, and device standards set so staff could work securely from day one without over-buying licences.",
    tags: ["Microsoft 365", "Business Premium", "SME"],
  },
  {
    title: "Identity & device security for a multi-site team",
    summary:
      "Entra ID, MFA, and Intune baselines for a mid-market organisation — consistent access and managed devices without enterprise tool sprawl.",
    tags: ["Entra ID", "Intune", "Security"],
  },
  {
    title: "Backup & recovery that staff can trust",
    summary:
      "Cloud mailbox and file backup with tested restores — clear RPO/RTO language for the business, not just the tech team.",
    tags: ["Backup", "Continuity", "M365"],
  },
  {
    title: "Hybrid cloud without the drama",
    summary:
      "Connected on-prem servers and Microsoft cloud services for a company that was not ready for a full cloud move — hybrid identity, backup, and a phased path forward.",
    tags: ["Hybrid", "Azure", "Migration"],
  },
  {
    title: "Server estate tidy-up & virtualisation upgrade",
    summary:
      "Stabilised and upgraded a VMware environment for a mid-sized organisation — clearer capacity, better performance, and a realistic support model.",
    tags: ["VMware", "Servers", "Operations"],
  },
  {
    title: "Disaster recovery rebuild",
    summary:
      "Designed and implemented a practical DR approach for critical systems — runbooks, recovery testing, and recovery times the business could plan around.",
    tags: ["DR", "Resilience", "Planning"],
  },
] as const;

export const team = [
  {
    name: "Wayne Gregory",
    role: "Founder · IT & cloud consultant",
    bio: "25+ years in infrastructure and cloud — from Microsoft 365 and hybrid environments for growing businesses, through to larger virtualisation programmes. The goal is simple: senior-quality advice and delivery that small and mid-sized companies can actually afford and operate.",
    focus: [
      "Microsoft 365 Business Premium",
      "Identity & devices",
      "Backup & continuity",
      "Azure & hybrid",
      "Servers & VMware",
      "Practical automation",
    ],
  },
] as const;

export const platforms = [
  "Microsoft 365",
  "Business Premium",
  "Entra ID / Intune",
  "Azure",
  "Backup & DR",
  "VMware",
] as const;

export const testimonials = [
  {
    quote:
      "We finally had Microsoft 365 set up properly for our size of business — secure, usable, and without being sold a stack we did not need.",
    author: "Operations lead",
    context: "Microsoft 365 rollout",
  },
  {
    quote:
      "Clear advice, no jargon wall, and backup that actually restores. Exactly what a smaller company needs from a senior consultant.",
    author: "Managing director",
    context: "Backup & continuity",
  },
  {
    quote:
      "Hybrid cloud and identity sorted without a six-month transformation programme. Practical, paced, and cost-aware.",
    author: "IT coordinator",
    context: "Hybrid & identity",
  },
] as const;

export const nav = [
  { to: "/services" as const, label: "Services" },
  { to: "/case-studies" as const, label: "Case studies" },
  { to: "/about" as const, label: "About" },
  { to: "/contact" as const, label: "Contact" },
];
