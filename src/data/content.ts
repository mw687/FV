// Single source of truth for companies, founders, and team.
// Fields set to `null` are intentionally unfilled — render the documented
// placeholder treatment (grey initials circle for photos, hidden icon for
// linkedin) rather than inventing content. See TODO list in project notes.

export interface Founder {
  name: string;
  role: string;
  photo: string | null;
  linkedin: string | null;
}

export interface Company {
  slug: string;
  name: string;
  fund: "Fund I" | "Fund II";
  industry: string;
  oneLiner: string;
  website: string;
  logo: string; // set per-company in CompanyTile via import map
  /** True when the logo file is an icon mark only (no wordmark) and needs the name typed next to it. */
  logoNeedsLabel?: boolean;
  /** Optical-size multiplier (default 1) to visually balance logos whose aspect ratio makes them read smaller/larger at a shared height cap. */
  logoScale?: number;
  founders: Founder[];
  /** Wide team photo for the thesis showcase carousel. Set per-company in Hero via import map. */
  teamPhoto?: string;
  /** Short copy shown next to teamPhoto in the carousel — either why we backed the team or what the company does. */
  whyWeBacked?: string;
  /** Label above whyWeBacked in the carousel. Defaults to "Why we backed this team" when omitted. */
  showcaseLabel?: string;
}

export const companies: Company[] = [
  {
    slug: "swypex",
    name: "Swypex",
    fund: "Fund I",
    industry: "Fintech",
    oneLiner: "Spend management and corporate cards for businesses",
    website: "https://www.swypex.com",
    logo: "swypex",
    teamPhoto: "swypex",
    whyWeBacked:
      "Swypex's founding team are product-first thinkers. Ahmad brought technical know-how and sharp commercial judgment from his time as VP at PlayStation, where he scaled the PlayStation Store into a massive business. Sasan brought a decade of engineering leadership and discipline building scalable systems. We saw business banking in Egypt as a product problem, and backed a team ready to solve it.",
    founders: [
      {
        name: "Ahmad Mokhtar",
        role: "CEO",
        photo: "ahmad-mokhtar",
        // Found via public search — please confirm this is the right profile.
        linkedin: "https://www.linkedin.com/in/ahmokhtar/",
      },
      {
        name: "Tarek Mokhtar",
        role: "CPO",
        photo: "tarek-mokhtar",
        // Found via public search — please confirm this is the right profile.
        linkedin: "https://www.linkedin.com/in/tarekmokhtar/",
      },
      {
        name: "Sasan Hezarkhani",
        role: "CTO",
        photo: "sasan-hezarkhani",
        // Found via public search — please confirm this is the right profile.
        linkedin: "https://www.linkedin.com/in/sasanhezarkhani/",
      },
    ],
  },
  {
    slug: "trella",
    name: "Trella",
    fund: "Fund I",
    industry: "Logistics",
    oneLiner: "Digital freight marketplace connecting shippers and carriers",
    website: "https://www.trella.app",
    logo: "trella",
    founders: [
      {
        name: "Omar Hagrass",
        role: "CEO",
        photo: "omar-hagrass",
        linkedin: "https://www.linkedin.com/in/omar-hagrass/",
      },
      {
        name: "Ali El Atrash",
        role: "COO",
        photo: "ali-el-atrash",
        linkedin: "https://www.linkedin.com/in/alielatrash/",
      },
      {
        name: "Pierre Saad",
        role: "CTO",
        photo: "pierre-saad",
        linkedin: "https://www.linkedin.com/in/pierresaad/",
      },
    ],
  },
  {
    slug: "kenzz",
    name: "Kenzz",
    fund: "Fund I",
    industry: "E-commerce",
    oneLiner: "Building the future of online shopping, made for everyone",
    website: "https://kenzz.com",
    logo: "kenzz",
    logoScale: 1.1,
    founders: [
      {
        name: "Ahmad Atef",
        role: "CEO",
        photo: "ahmad-ataf",
        linkedin: "https://www.linkedin.com/in/ahmad-atef-a61447148/",
      },
      { name: "Mahmoud Al Silk", role: "CTO", photo: "mahmoud-al-silk", linkedin: null },
    ],
  },
  {
    slug: "aydi",
    name: "Aydi",
    fund: "Fund I",
    industry: "Agritech",
    oneLiner: "AI-powered field intelligence for growers and agronomists",
    website: "https://aydi.com",
    logo: "aydi",
    logoScale: 1.1,
    teamPhoto: "aydi",
    showcaseLabel: "What they do",
    whyWeBacked:
      "Aydi aims to digitize the farming industry through products that simplify the way farms manage their operations. Aydi's SaaS product offers farms the ability to track their productivity in the fields and source their required workforce on a seasonal basis.",
    founders: [
      {
        name: "Hassan Fayed",
        role: "CEO",
        photo: "hassan-fayad",
        linkedin: "https://www.linkedin.com/in/hassan-f-205745148/",
      },
      {
        name: "Ahmed Safar",
        role: "CTO",
        photo: "ahmed-safar",
        linkedin: "https://www.linkedin.com/in/ahmed-safar/",
      },
    ],
  },
  {
    slug: "rabbit",
    name: "Rabbit",
    fund: "Fund I",
    // Sourced from FV's own portfolio reference notes — pending your confirmation.
    industry: "Quick Commerce",
    oneLiner: "Everyday essentials delivered in minutes",
    website: "https://www.rabbitmart.com",
    logo: "rabbit",
    logoScale: 0.92,
    teamPhoto: "rabbit",
    whyWeBacked:
      "Rabbit's founding team are operators first, not concept builders, with the depth to understand supply chains and rebuild them with a tech-first approach. Ahmad brought hands-on experience scaling dark store networks at Uber Eats and Talabat, Ismail the process-driven discipline from Kazyon, Egypt's largest grocery retailer. We introduced the founders to each other, and Rabbit was born out of there.",
    founders: [
      {
        name: "Ahmad Yousry",
        role: "CEO",
        photo: "ahmad-yousry",
        linkedin: "https://www.linkedin.com/in/ahmadyousry/",
      },
      {
        name: "Ismail Hafez",
        role: "COO",
        photo: "ismail-hafez",
        linkedin: "https://www.linkedin.com/in/ismail-hafez/",
      },
      {
        name: "Walid Shabana",
        role: "CTO",
        photo: "walid-shabana",
        linkedin: "https://www.linkedin.com/in/walidshabana/",
      },
    ],
  },
  {
    slug: "abwaab",
    name: "Abwaab",
    fund: "Fund I",
    industry: "EdTech",
    oneLiner: "Supplementary learning for students across the region",
    website: "https://abwaab.me",
    logo: "abwaab",
    logoScale: 1.3,
    teamPhoto: "abwaab",
    showcaseLabel: "What they do",
    whyWeBacked:
      "Abwaab is a Jordan-based asynchronous online learning platform that provides secondary school students with supplementary educational content through a series of short, concept-based video lessons with assessments and performance monitoring throughout their studying.",
    founders: [
      {
        name: "Hamdi Tabba",
        role: "CEO",
        photo: "hamdi-tabba",
        linkedin: "https://www.linkedin.com/in/hamditabbaa/",
      },
      {
        name: "Sabri Hakim",
        role: "COO",
        photo: "sabri-hakim",
        linkedin: "https://www.linkedin.com/in/sabrihakim/",
      },
    ],
  },
  {
    slug: "sakneen",
    name: "Sakneen",
    fund: "Fund I",
    industry: "PropTech",
    oneLiner: "Sales platform for real estate developers",
    website: "https://www.sakneen.com",
    logo: "sakneen",
    teamPhoto: "sakneen",
    showcaseLabel: "What they do",
    whyWeBacked:
      "Sakneen is an operating system for real estate professionals. It brings inventory, sales, marketing and development workflows into connected systems, with advanced custom workflows through Sakneen Pro and agentic systems through Sakneen AI.",
    founders: [
      {
        name: "Ramy Khorshed",
        role: "CEO",
        photo: "ramy-khorshed",
        linkedin: "https://www.linkedin.com/in/ramykhorshed/",
      },
      {
        name: "Hussein El Kheshen",
        role: "CTO",
        photo: "hussein-el-kheshen",
        linkedin: "https://www.linkedin.com/in/husseinelkheshen/",
      },
    ],
  },
  {
    slug: "minly",
    name: "Minly",
    fund: "Fund I",
    industry: "Creator Economy",
    oneLiner: "Personalised video messages from creators and celebrities",
    website: "https://minly.com",
    logo: "minly",
    logoScale: 1.25,
    founders: [
      {
        name: "Khaled Zaki",
        role: "CEO",
        photo: "khaled-zaki",
        linkedin: "https://www.linkedin.com/in/khaled-zaki-023403126/",
      },
      {
        name: "Mohamed El-Shinnawy",
        role: "CTO",
        photo: "mohamed-el-shinnawy",
        linkedin: "https://www.linkedin.com/in/shinnawy/",
      },
    ],
  },
  {
    slug: "flextock",
    name: "Flextock",
    fund: "Fund I",
    industry: "Logistics",
    oneLiner: "End-to-end e-commerce fulfilment",
    website: "https://www.flextock.com",
    logo: "flextock",
    logoScale: 0.88,
    teamPhoto: "flextock",
    whyWeBacked:
      "Mohamed and Enas were the ideal outsider-meets-insider pairing: Mohamed's strategic clarity and intellectual honesty approaching a new industry, matched by Enas's disciplined execution in asset-heavy logistics at Careem. Together they had the vision and operational rigor to fix fragmented logistics in e-commerce, and the conviction to build a category-defining logistics platform for the region.",
    founders: [
      {
        name: "Mohamed Mossaad",
        role: "CEO",
        photo: "mohamed-mossaad",
        linkedin: "https://www.linkedin.com/in/mohamed-mossaad-50903438/",
      },
      {
        name: "Enas Siam",
        role: "COO",
        photo: "enas-siam",
        linkedin: "https://www.linkedin.com/in/enas-siam-18150115/",
      },
    ],
  },
  {
    slug: "nowpay",
    name: "NowPay",
    fund: "Fund I",
    industry: "Fintech",
    oneLiner: "Enables employees to get paid at any point in time during the month",
    website: "https://www.nowpay.com",
    logo: "nowpay",
    teamPhoto: "nowpay",
    showcaseLabel: "What they do",
    whyWeBacked:
      "NowPay partners with employers and their HR teams to give employees access to their salaries at any point in the month. That access helps build greater financial wellness and stability for its users.",
    founders: [
      {
        name: "Mostafa Ashour",
        role: "CEO",
        photo: "mostafa-ashour",
        linkedin: "https://www.linkedin.com/in/mostafaashour/",
      },
    ],
  },
  {
    slug: "accord-partners",
    name: "Accord Partners",
    fund: "Fund II",
    industry: "AI",
    oneLiner: "AI-powered roll-ups for professional services",
    website: "https://accordpartners.ai",
    logo: "accord-partners",
    founders: [
      {
        name: "Amr Shady",
        role: "CEO",
        photo: "amr-shady",
        linkedin: "https://www.linkedin.com/in/amrshady/",
      },
      {
        name: "Karim Sobh",
        role: "CTO",
        photo: "karim-sobh",
        linkedin: "https://www.linkedin.com/in/karimsobh/",
      },
    ],
  },
  {
    slug: "flashq",
    name: "FlashQ",
    fund: "Fund II",
    industry: "Quick Commerce",
    oneLiner: "Lets retailers run under-1-hour delivery",
    website: "https://flashq.ai",
    logo: "flashq",
    logoNeedsLabel: true,
    founders: [
      {
        name: "Ahmed El-Sobky",
        role: "CEO",
        photo: "ahmed-el-sobky",
        linkedin: "https://www.linkedin.com/in/ahmed-el-sobky-65417583/",
      },
      {
        name: "Yahia Arafa",
        role: "COO",
        photo: "yahia-arafa",
        linkedin: "https://www.linkedin.com/in/yahiaarafa/",
      },
    ],
  },
];

/** Order companies appear in the thesis "why we backed them" carousel, independent of their position above. New companies are appended as they're added. */
export const thesisShowcaseOrder: string[] = ["flextock", "rabbit", "swypex", "nowpay", "aydi", "sakneen", "abwaab"];

export interface TeamMember {
  slug: string;
  name: string;
  title: string;
  photo: string;
  bio: string | null;
  linkedin: string | null;
}

export const team: TeamMember[] = [
  {
    slug: "mazen-nadim",
    name: "Mazen Nadim",
    title: "Managing Partner",
    photo: "mazen",
    bio: null,
    linkedin: null,
  },
  {
    slug: "katherine-kamel",
    name: "Katherine Kamel",
    title: "Senior Associate",
    photo: "katherine",
    bio: null,
    linkedin: null,
  },
  {
    slug: "mohamed-wael",
    name: "Mohamed Wael",
    title: "Analyst",
    photo: "wael",
    bio: null,
    linkedin: null,
  },
];

export const siteInfo = {
  email: "info@foundationventures.com",
  linkedin: "https://www.linkedin.com/company/foundationventures/",
  bandCapitalUrl: "https://bandcapital.com",
  addresses: {
    cairo: "Golf Central, Building A, Floor 2, Office 1, 6th of October, Giza, Egypt",
    amsterdam: "Van Heuven Goedhartlaan 935A, 1181 LD Amstelveen, The Netherlands",
  },
};
