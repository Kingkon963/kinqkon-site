/**
 * Every fact on this site lives here so there is one place to correct.
 * Nothing in this file is invented. Sources:
 *   work / numbers  -> Upwork public profile, pulled 2026-11-09
 *   roles           -> CV, confirmed against Upwork employment records
 *   toolbox         -> CV
 *   quotes          -> verbatim Upwork client feedback
 * If you edit a claim, edit it here and nowhere else.
 */

export const identity = {
  name: 'Naim Kingkon',
  fullName: 'Md. Naimul Islam Kingkon',
  role: 'Software engineer',
  focus: 'AI agents, automation, and AWS',
  location: 'Dhaka, Bangladesh',
  timezone: 'UTC+6',
  email: 'naim.kingkon@gmail.com',
};

export const links = [
  { label: 'GitHub', href: 'https://github.com/Kingkon963', handle: 'Kingkon963' },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/naim-kingkon',
    handle: 'naim-kingkon',
  },
  {
    label: 'Upwork',
    href: 'https://www.upwork.com/freelancers/~014046cecba2ff7614',
    handle: '18 client reviews',
  },
  { label: 'Email', href: 'mailto:naim.kingkon@gmail.com', handle: 'naim.kingkon@gmail.com' },
];

/** Short factual ledger for the identity rail. */
export const facts = [
  { term: 'Now', value: 'Software Engineer, JB Connect Ltd.' },
  { term: 'Based', value: 'Dhaka, Bangladesh (UTC+6)' },
  { term: 'Freelance', value: '27 contracts since 2021' },
  { term: 'Longest run', value: '277 hours, 5.0 stars' },
  { term: 'English', value: 'IELTS Academic 7.5 (C1)' },
  { term: 'Degree', value: 'BSc CSE, AUST, 2024' },
];

export const lede = {
  statement:
    'I build AI agents and automation systems that ship to production, not notebooks and prototypes.',
  emphasis: 'ship to production',
  body: [
    'Most of that work lives in the unglamorous middle. A pipeline where three agents run in parallel and stream their own progress to a browser instead of a spinner. A scraping fleet on ECS spot capacity that costs a fraction of on demand and keeps running when a target site changes its markup. A front end nobody has an opinion about because it loads. Serverless backends that stay cheap when the traffic doubles.',
    'I have been shipping for clients and employers since 2021, mostly for UK teams from Dhaka, and I write about the parts that are hard to get right.',
  ],
};

export type WorkItem = {
  name: string;
  year: string;
  status?: 'live' | 'open source' | 'client';
  blurb: string;
  stack: string[];
  links?: { label: string; href: string }[];
};

/** Things I built and still stand behind. */
export const work: WorkItem[] = [
  {
    name: 'Visibilitas AI',
    year: '2026',
    status: 'live',
    blurb:
      'An AI visibility checker. It asks the assistants what they recommend when somebody searches for a brand, then reports the gap. I wrote the scrapers instead of paying a SERP API, which keeps one scan cheap enough to give away.',
    stack: ['Python', 'Camoufox', 'TypeScript', 'Cloudflare Workers'],
    links: [{ label: 'visibilitas-ai.pages.dev', href: 'https://visibilitas-ai.pages.dev' }],
  },
  {
    name: 'Writing Adventure',
    year: '2026',
    status: 'live',
    blurb:
      'An installable writing PWA. You get a random scenario, write 150 to 300 words, and receive feedback that is only allowed to exist if every quoted line really appears in your text. Anything the model cannot quote is silently thrown away.',
    stack: ['React', 'TypeScript', 'Cloudflare Pages Functions', 'IndexedDB', 'OpenRouter'],
    links: [{ label: 'writing-adventure.pages.dev', href: 'https://writing-adventure.pages.dev' }],
  },
  {
    name: 'Terrific',
    year: '2026',
    status: 'open source',
    blurb:
      'Real time incident monitoring with an AI layer that reads the incident stream and drafts the status update nobody had time to write. Front end and backend are separate services.',
    stack: ['TypeScript', 'Java', 'WebSockets'],
    links: [
      { label: 'front end', href: 'https://github.com/Kingkon963/terrific' },
      { label: 'backend', href: 'https://github.com/Kingkon963/Terrific-backend' },
    ],
  },
  {
    name: 'City Islamic DPS Calculator',
    year: '2023',
    status: 'open source',
    blurb:
      'A deposit scheme forecaster. The printed brochure made a ten year plan impossible to compare against anything, so I built the thing that compares it against inflation.',
    stack: ['HTML', 'JavaScript'],
    links: [
      {
        label: 'source',
        href: 'https://github.com/Kingkon963/city-islamic-dps-calculator',
      },
    ],
  },
  {
    name: 'soldem-recruit.co.uk',
    year: '2022 to now',
    status: 'live',
    blurb:
      'The site for a UK recruitment firm, plus a Google Apps Script pipeline that catches every enquiry and emails the team. Four years on it is still what runs in production.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Apps Script'],
    links: [{ label: 'soldem-recruit.co.uk', href: 'https://soldem-recruit.co.uk' }],
  },
];

export type Role = {
  org: string;
  title: string;
  /** Start year, used as the sort key in the index column. */
  year: string;
  period: string;
  place: string;
  blurb: string;
};

export const roles: Role[] = [
  {
    org: 'JB Connect Ltd.',
    title: 'Software Engineer',
    year: '2025',
    period: 'Jan 2025 to now',
    place: 'London, remote',
    blurb:
      'Enterprise web applications on AWS Amplify v2. Lambda running raw SQL where an ORM gets in the way, AppSync GraphQL for real time, and ECS capacity providers on spot capacity for the work that never stops.',
  },
  {
    org: 'TaskClone LLC',
    title: 'Contract engineer',
    year: '2023',
    period: 'Oct 2023 to now',
    place: 'Los Angeles, remote',
    blurb:
      'The user facing Django platform of a legal tech product: accounts, subscriptions, and Stripe plus PayPal billing. The core engine is a separate Go system owned by another team, so my scope is the surface people actually touch.',
  },
  {
    org: 'Zonic Solutions',
    title: 'Senior Frontend Developer',
    year: '2022',
    period: 'Jun 2022 to Sep 2023',
    place: 'Remote',
    blurb:
      'A content and employee engagement platform for distributed teams. I built the component library and design system it still rests on, and spent a lot of the time on code review and mentoring.',
  },
];

/** Dense, factual. Grouped the way I actually reach for things. */
export const toolbox = [
  { group: 'Languages', items: ['TypeScript', 'JavaScript', 'Python', 'Kotlin', 'SQL', 'Java'] },
  {
    group: 'Front end',
    items: ['React', 'Next.js', 'Astro', 'Tailwind CSS', 'Alpine.js', 'HTMX', 'TanStack'],
  },
  {
    group: 'Back end and data',
    items: ['Node.js', 'Express', 'Django', 'GraphQL', 'PostgreSQL', 'MongoDB', 'DynamoDB'],
  },
  {
    group: 'Cloud',
    items: [
      'AWS: Amplify v2, Lambda, AppSync, ECS on spot capacity, CDK, S3, CloudWatch',
      'Google Cloud: Cloud Run',
      'Cloudflare Workers and Pages',
      'Terraform',
      'Docker',
    ],
  },
  {
    group: 'AI and agents',
    items: [
      'OpenAI, Anthropic, Gemini, OpenRouter',
      'LangChain, CrewAI, AutoGen, OpenAI Agents SDK',
      'pgvector, Pinecone',
      'MCP, n8n',
    ],
  },
];

export type Testimonial = { quote: string; source: string; score: string };

/** Verbatim. Client writing, not mine, including the odd grammar. */
export const testimonials: Testimonial[] = [
  {
    quote:
      'Great long term experience. We\'ll be continuing our successful relationship with a new contract.',
    source: 'Upwork client, Tailwind and Alpine engagement, 277 hours',
    score: '5.0',
  },
  {
    quote:
      'Naimul understands the advance concepts of Frontend development. I got exactly what I needed from him :)',
    source: 'Upwork client, React build',
    score: '5.0',
  },
  {
    quote:
      'Great job. Naimul did not just help us deploying app to IIS but also he created a document with all steps that are required for deployment next time.',
    source: 'Upwork client, Next.js deployment',
    score: '5.0',
  },
  {
    quote:
      'Working with Naim was great! He did his work in a timely manner and displayed commitment and professionalism. A must hire if you are looking to get something actually done!',
    source: 'Upwork client, site enhancements',
    score: '5.0',
  },
];

export const about = {
  lead: 'I am Md. Naimul Islam Kingkon. I was born in Dhaka in 2001 and that is still where I work from.',
  body: [
    'I finished a BSc in computer science and engineering at Ahsanullah University of Science and Technology in 2024, started freelancing in 2021, and have been shipping for clients and employers ever since, mostly UK teams inside the GMT overlap. Bengali is my first language and English is the one I work in.',
    'The work I go looking for is the kind where something genuine has to come out the other end. Years of front end work taught me that a fast page and a clear interface are not polish, they are the product. Lately the interesting problem is making agents reliable enough that you can leave them running unattended.',
  ],
};

export const colophon = [
  'Set in Newsreader and IBM Plex. Built with Astro, generated as static files, served from GitHub Pages behind Cloudflare DNS.',
  'No analytics, no cookies, no trackers, nothing that phones home.',
];
