// All the facts the site repeats live here, so a change is made once.

export const SITE_URL = 'https://stephaneritty.com';
export const EMAIL = 'stephane.ritty@gmail.com';
export const LINKEDIN = 'https://www.linkedin.com/in/stephaneritty/';
export const GITHUB = 'https://github.com/stephaneritty-del';

// Put your CV in /public (e.g. public/stephane-ritty-cv.pdf) and set this to
// '/stephane-ritty-cv.pdf'. While it's null, the CV button stays hidden.
export const CV_URL = null;

export const ROLE = 'Head of Product';

export const TESTIMONIAL = {
  quote: 'Excellent forward thinking individual with entrepreneurial and strategic mindset!',
  name: 'Marco ten Bruggencate',
  title: 'Business President II&I, Dow'
};

// Case studies. `slug` is the page address: /work/<slug>
export const cases = [
  {
    slug: 'npi-portfolio',
    component: 'Portfolio',
    kind: 'Functions',
    company: 'Thermo Fisher',
    title: 'NPI Portfolio & Innovation Framework',
    cardTitle: 'NPI portfolio and innovation framework',
    cardText: 'Thermo Fisher. Led 5 project managers: 50% faster to launch, $70M in new revenue over 4 years.',
    summary:
      'With the PMO Director, I co-owned a new project framework: stage-gate governance plus a filter that routes projects by uncertainty. The most uncertain ones, new services, came into the NPI portfolio I led with a team of five project managers.',
    role: 'NPI portfolio lead, co-owner of the PMO framework',
    status: 'Implemented',
    facts: [
      ['$70M', 'new revenue over 4 years'],
      ['50%', 'faster time-to-launch'],
      ['88/100', 'employee engagement score'],
      ['5', 'project managers led']
    ],
    description:
      'How Stephane Ritty led an NPI portfolio and a team of five project managers at Thermo Fisher: $70M in new revenue over 4 years, 50% faster time-to-launch.'
  },
  {
    slug: 'adherence-marketplace',
    component: 'Adherence',
    kind: 'Products',
    company: 'Thermo Fisher',
    title: 'Medication Adherence Marketplace',
    cardTitle: 'Medication Adherence Marketplace',
    cardText: 'Thermo Fisher. Launched in 9 months, then grew into a $20M revenue line within 3 years.',
    summary:
      'A pre-qualified marketplace of medication adherence technologies for clinical trials: one contract for pharma clients instead of a $2M, 12 to 18 month qualification per vendor. The first of its kind in the market.',
    role: 'Product Director & Program Lead',
    status: 'Launched',
    facts: [
      ['3 months', 'to a complete business plan'],
      ['9 months', 'from mess to launch'],
      ['$20M', 'revenue by year 3, target met'],
      ['12', 'cross-functional team members led']
    ],
    description:
      'How Stephane Ritty built a medication adherence marketplace at Thermo Fisher: launched in 9 months, $20M revenue by year 3.'
  },
  {
    slug: 'just-in-time-labeling',
    component: 'Jit',
    kind: 'Services',
    company: 'Thermo Fisher',
    title: 'Just-in-Time Labeling for Clinical Trials',
    cardTitle: 'Just-in-Time Labeling',
    cardText: 'Thermo Fisher. A service sold before it existed, built in 3 months: process time cut from 26 to 5 days, 99%+ on time.',
    summary:
      'Sales had sold Just-in-Time labeling for a 10-year clinical trial, worth over $30M, before the service existed. Pulled in as an emergency, I built it in three months and turned a looming reputational crisis into a new service line.',
    role: null,
    status: 'Launched, new service line',
    facts: [
      ['3 months', 'from emergency to service line'],
      ['26 → 5 days', 'process time, 80% faster'],
      ['99%+', 'on-time delivery'],
      ['$30M+', 'business delivered instead of lost']
    ],
    description:
      'How Stephane Ritty built a Just-in-Time labeling service for clinical trials at Thermo Fisher in 3 months: process time from 26 to 5 days, 99%+ on-time delivery.'
  },
  {
    slug: 'rental-business-model',
    component: 'Rental',
    kind: 'Services',
    company: 'Thermo Fisher',
    title: 'Sales-to-Rental Business Model',
    cardTitle: 'Rental business model',
    cardText: 'Thermo Fisher. A rental offer for a sales-only business, piloted and launched in 9 months.',
    summary:
      'A rental offer for a business that had only ever sold. Ten years of attempts had stalled; this one launched in 9 months and its process became the company standard.',
    role: null,
    status: 'Launched',
    facts: [
      ['9 months', 'from mess to launch'],
      ['5', 'hot leads at launch'],
      ['2', 'vendors qualified'],
      ['1', 'process that became company standard']
    ],
    description:
      'How Stephane Ritty launched a rental business model at Thermo Fisher in 9 months, after ten years of stalled attempts.'
  },
  {
    slug: 'b2b2c-platform',
    component: 'Platform',
    kind: 'Platforms',
    company: 'Dow',
    title: 'B2B2C Demand Generation Platform',
    cardTitle: 'B2B2C roofing marketplace',
    cardText: 'Dow. Four sides: building owners, contractors, insurers and engineers, with 100+ contractors signed up.',
    summary:
      'A four-sided roofing marketplace connecting building owners, contractors, insurers and engineers, so a commodity supplier could own the demand instead of competing on price.',
    role: 'Product Owner & Business Model Architect',
    status: 'Built, ready to launch',
    facts: [
      ['4/4', 'stakeholder groups committed'],
      ['100+', 'qualified contractors in the pool'],
      ['~10', 'building owners ready to renovate'],
      ['1', 'strategic partnership signed']
    ],
    description:
      'How Stephane Ritty built a four-sided B2B2C roofing marketplace at Dow, from market insight to signed partners.'
  },
  {
    slug: 'circular-plastics',
    component: 'Plastics',
    kind: 'Concepts',
    company: 'Dow',
    title: 'Circular Plastics Initiative',
    cardTitle: 'Circular Plastics Initiative',
    cardText: 'Dow. Plastic waste as a construction material, a cross-division sustainability concept.',
    summary:
      'Plastic waste as a construction material: a cross-division concept linking Dow’s packaging and building businesses, developed with a team from the Sustainability Academy.',
    role: 'Initiator & Team Lead',
    status: 'Concept',
    facts: [],
    description:
      'Stephane Ritty’s cross-division concept at Dow for turning plastic waste into construction material.'
  }
];

// The homepage "What I build" grid, in this order.
// Remove a slug here to take a case off the homepage; its page stays online.
// The 2025 AI side projects are deliberately not on the homepage.
export const homeCases = [
  'npi-portfolio',
  'adherence-marketplace',
  'just-in-time-labeling',
  'rental-business-model',
  'b2b2c-platform',
  'circular-plastics'
];

// The three numbers under the homepage headline.
export const heroProof = [
  ['$70M', 'new revenue over 4 years'],
  ['50%', 'faster time-to-launch'],
  ['5', 'project managers led']
];

// 2025 side projects, built on personal time while learning to build with AI.
// Shown only on /ai-apps (linked from the footer), framed as past experiments.
export const apps = [
  {
    id: 'vitaleat',
    title: 'VitalEat',
    subtitle: 'AI-powered food intolerance tracker',
    description:
      "An intelligent nutrition companion that helps identify food intolerances through seamless intake tracking. It learns your body's responses to different foods, stress levels, and sleep patterns.",
    tags: ['AI/ML', 'Health tech', 'Voice interface'],
    url: 'https://vitaleat.vercel.app',
    status: 'The serious one'
  },
  {
    id: 'winecard',
    title: 'WineCard Selector',
    subtitle: 'Your pocket sommelier',
    description:
      'Snap a photo of any wine card or bottle and instantly get the information you need. Made for restaurant dining and wine shopping.',
    tags: ['Computer vision', 'Web scraping', 'API integration'],
    url: 'https://winecardselctor.vercel.app',
    status: 'Just for fun'
  },
  {
    id: 'missionmot',
    title: 'MissionMot',
    subtitle: 'Social dinner game',
    description:
      'A party game where each player takes on a character and has to steer the others into saying rare, assigned words during dinner.',
    tags: ['Game design', 'Social', 'Real-time'],
    url: 'https://missionmot.vercel.app',
    status: 'Just for fun'
  }
  // Ikigai Finder (https://ikig.vercel.app/) is hidden until it works reliably.
];

// The homepage "Toolkit": methods, what they're for, and where they were used.
// `used` lists case slugs; each becomes a link.
export const toolkit = [
  {
    name: 'Customer Development',
    by: 'Steve Blank',
    what: 'Get out of the building: find out who the customer is and what they will pay for before building.',
    used: ['npi-portfolio']
  },
  {
    name: 'Jobs-to-be-Done',
    what: 'Find the job the customer is really hiring the product to do.',
    used: ['b2b2c-platform', 'npi-portfolio']
  },
  {
    name: 'Business Model Canvas',
    by: 'Strategyzer',
    what: 'Design the whole business model on one page, then iterate it as evidence comes in.',
    used: ['b2b2c-platform', 'adherence-marketplace']
  },
  {
    name: 'Lean Startup',
    what: 'Place rapid bets on the leap-of-faith assumptions first, then scale or kill early.',
    used: ['npi-portfolio', 'adherence-marketplace']
  },
  {
    name: 'Stage-gate with an uncertainty filter',
    what: 'Keep governance, but send uncertain projects down an iterative track instead of a fixed plan.',
    used: ['npi-portfolio']
  }
];
