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

/**
 * Named entry packages — fixed scope, clear outcomes, consultation to price.
 * Not an MSP retainer; specialist engagements growing firms can buy.
 */
export const packages = [
  {
    slug: "infra-health-check",
    name: "Infrastructure Health Check",
    tagline: "Know what is slow, fragile, or overdue — and what to fix first.",
    bestFor:
      "Businesses with VMware or mixed server estates that feel unpredictable, slow, or hard to support.",
    duration: "Typically 2–4 days on-site / remote",
    outcome:
      "A prioritised action plan with capacity, performance, and risk findings you can act on — or hand to an MSP.",
    includes: [
      "Discovery of hosts, storage, networking, and critical workloads",
      "Performance and capacity review (where bottlenecks really are)",
      "Lifecycle and version risk (what is unsupported or overdue)",
      "Backup / recovery posture snapshot for core systems",
      "Written findings + ranked recommendations (quick wins vs projects)",
      "Optional walkthrough with your IT lead or MSP",
    ],
    notIncluded: [
      "Remediation work (quoted separately if you want us to implement)",
      "24/7 monitoring or helpdesk cover",
    ],
  },
  {
    slug: "business-premium-launch",
    name: "Business Premium Launch",
    tagline: "Secure, usable Microsoft 365 — set up for how your people work.",
    bestFor:
      "Growing firms on or moving to Microsoft 365 Business Premium who need email, devices, and security done properly.",
    duration: "Sized to user count and migration complexity",
    outcome:
      "Staff on Business Premium with MFA, sensible device policy, and clear admin ownership — without enterprise bloat.",
    includes: [
      "Licence fit check (Business Premium vs cheaper/higher SKUs)",
      "Tenant baseline: identity, MFA, conditional access fundamentals",
      "Mailbox / files / Teams migration plan and cutover support",
      "Intune device standards for laptops and mobiles (right-sized)",
      "SharePoint / Teams structure that people can actually find work in",
      "Handover notes: who administers what day to day",
    ],
    notIncluded: [
      "Ongoing 1st-line helpdesk (we can advise your MSP or internal IT)",
      "Full E3/E5 enterprise transformation programmes",
    ],
    href: "/microsoft-365" as const,
  },
  {
    slug: "backup-dr-review",
    name: "Backup & DR Review",
    tagline: "Prove you can recover — before you need to.",
    bestFor:
      "Organisations that “have backups” but have never tested restores, or need a practical DR plan the business understands.",
    duration: "Typically 2–3 days",
    outcome:
      "Clear RPO/RTO language, tested recovery confidence for critical systems, and a DR path you can fund and run.",
    includes: [
      "Map of critical systems and data (what actually matters to the business)",
      "Review of current backup tools, jobs, retention, and off-site copies",
      "Restore test design and observation (or guidance if you run the test)",
      "Gap analysis against realistic outage and ransomware scenarios",
      "Practical DR options (cost vs recovery time trade-offs)",
      "Short runbook outline for the first hours of an incident",
    ],
    notIncluded: [
      "Full multi-site DR build (scoped as a follow-on project)",
      "Cyber insurance underwriting or legal advice",
    ],
  },
  {
    slug: "patch-monitor",
    name: "Patch & Monitor (Robopack + Checkmk)",
    tagline:
      "Enterprise-grade patching and visibility without enterprise licence bills.",
    bestFor:
      "Teams on Microsoft Intune who need third-party app patching, plus honest server/infra monitoring — without locking into expensive commercial suites.",
    duration: "Design and deploy engagement; optional light handover support",
    outcome:
      "Robopack wired into Intune for automated app packaging/patching, Checkmk watching what matters, and your people able to run both day to day.",
    includes: [
      "Robopack design for Intune: packaging pipeline, patch flows, and sensible rollout waves",
      "Third-party app coverage so Chrome, Adobe, Zoom and the rest do not stay stale",
      "Checkmk deployment (open-source stack) for hosts, services, and critical infrastructure checks",
      "Alert routing that reaches the right people — not a noise factory",
      "Dashboards and documentation your IT lead or MSP can own",
      "Cost-aware design: open source and efficient tooling where it beats premium lock-in",
    ],
    notIncluded: [
      "24/7 NOC / manned monitoring desk (we build the system; you or your MSP respond)",
      "Perpetual licence fees for proprietary patch/monitor suites we are replacing",
      "Desktop helpdesk or end-user ticket handling",
    ],
  },
] as const;

/** Core service cards — capability areas behind the packages. */
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
    slug: "patch-monitor",
    title: "Patching & monitoring",
    body: "Robopack for Intune third-party patching and Checkmk for open-source monitoring — keep estates current and visible without heavy commercial licence spend.",
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
  "Cost-aware tooling — open source and efficient platforms where they beat licence bloat",
  "Tailored solutions — not off-the-shelf packages",
  "Clear communication — plain English, no jargon wall",
  "Right-sized for growing businesses — not enterprise-only pricing",
  "Works with internal IT and MSPs when you need senior specialist depth",
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
      "Robopack & Checkmk",
      "Automation",
    ],
  },
] as const;

export const platforms = [
  "VMware",
  "Azure",
  "Microsoft 365",
  "Intune / Robopack",
  "Checkmk",
  "Backup & DR",
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
