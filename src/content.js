// Every fact the site repeats lives here, so a change is made once.
// Rule for this file: no fact goes in that Stephane hasn't provided.

export const SITE_URL = 'https://stephaneritty.com';
export const EMAIL = 'stephane.ritty@gmail.com';
export const LINKEDIN = 'https://www.linkedin.com/in/stephaneritty/';
export const GITHUB = 'https://github.com/stephaneritty-del';

// Put your CV in /public (e.g. public/stephane-ritty-cv.pdf) and set this to
// '/stephane-ritty-cv.pdf'. While it's null, the CV link stays hidden.
export const CV_URL = null;

export const ROLE = 'Head of Product';

// A real quote from Dow. Shown in the homepage Background section.
export const TESTIMONIAL = {
  quote: 'Excellent forward thinking individual with entrepreneurial and strategic mindset!',
  name: 'Marco ten Bruggencate',
  title: 'Business President II&I, Dow'
};

// Three numbers under the homepage headline.
export const heroFacts = [
  ['$70M', 'new revenue in four years from the portfolio I ran'],
  ['9 months', 'to launch a rental model after ten years of attempts'],
  ['26 → 5 days', 'process time on a service built in three months']
];

// Case studies. `slug` is the page address: /work/<slug>
// `line` is the one sentence shown in the homepage list.
export const cases = [
  {
    slug: 'npi-portfolio',
    component: 'Portfolio',
    company: 'Thermo Fisher',
    title: 'Running the new-service portfolio',
    line: 'Five project managers, a stage-gate that sorted projects by what we didn’t know yet, and $70M of new revenue in four years.',
    status: 'Operating model',
    dek: 'How we decided which new services to build, which to reshape, and which to stop before the big spend.',
    role: 'Led the NPI portfolio; co-owned the PMO framework with the PMO director',
    facts: [
      ['$70M', 'new revenue in four years'],
      ['50%', 'less time to launch'],
      ['88/100', 'employee engagement score'],
      ['5', 'project managers']
    ],
    description:
      'How Stephane Ritty ran the new-service portfolio at Thermo Fisher: five project managers, $70M of new revenue in four years, time to launch halved.'
  },
  {
    slug: 'adherence-marketplace',
    component: 'Adherence',
    company: 'Thermo Fisher',
    title: 'A marketplace for medication adherence',
    line: 'Tried twice internally before I picked it up. Business plan in three months, launched in nine, $20M revenue in year three.',
    status: 'Launched',
    dek: 'Every pharma company was paying about $2M and a year or more to qualify a single smart-packaging vendor. We qualified the vendors once, for all of them.',
    role: 'Product director and program lead',
    facts: [
      ['3 months', 'to the business plan'],
      ['9 months', 'to launch'],
      ['$20M', 'revenue in year three'],
      ['12', 'people in the cross-functional team']
    ],
    description:
      'A medication adherence marketplace at Thermo Fisher: tried twice before, launched in nine months, $20M revenue in year three.'
  },
  {
    slug: 'just-in-time-labeling',
    component: 'Jit',
    company: 'Thermo Fisher',
    title: 'Just-in-time labeling',
    line: 'Sold into a ten-year clinical trial before the service existed. Built in three months; process time went from 26 days to 5.',
    status: 'Launched',
    dek: 'Sales closed a deal for a service we didn’t have. We had three months to make it real.',
    role: null,
    facts: [
      ['3 months', 'from emergency to running service'],
      ['26 → 5 days', 'process time'],
      ['99%+', 'on-time delivery'],
      ['$30M+', 'business on the contract']
    ],
    description:
      'A just-in-time labeling service for clinical trials, sold before it existed and built in three months: process time from 26 days to 5.'
  },
  {
    slug: 'rental-business-model',
    component: 'Rental',
    company: 'Thermo Fisher',
    title: 'From selling equipment to renting it',
    line: 'Ten years of attempts on a $40M business. Launched in nine months; the finance director who blocked it asked to run the pilot.',
    status: 'Launched',
    dek: 'Clinical trials last from two months to five years. Nobody wants to buy a $50,000 centrifuge for a two-month study.',
    role: null,
    facts: [
      ['10 years', 'of earlier attempts'],
      ['9 months', 'to launch'],
      ['$40M', 'a year, the business it had to fit into'],
      ['5', 'leads in the pipeline at launch']
    ],
    description:
      'Adding rental to a $40M sales business at Thermo Fisher after ten years of failed attempts: launched in nine months.'
  },
  {
    slug: 'b2b2c-platform',
    component: 'Platform',
    company: 'Dow',
    title: 'A roofing marketplace at Dow',
    line: 'A four-sided platform to reach building owners in a market where Dow had almost no presence. Built and contracted; stopped by a restructuring before launch.',
    status: 'Stopped before launch',
    dek: 'Dow sold binders several steps away from the people who decide to renovate a roof. The platform was an attempt to close that distance.',
    role: 'Strategy, business development and product owner',
    facts: [
      ['100+', 'qualified contractors in the pool'],
      ['~10', 'building owners ready to renovate'],
      ['4 of 4', 'stakeholder groups committed'],
      ['7% vs 62%', 'market share, Europe vs North America']
    ],
    description:
      'A four-sided roofing marketplace at Dow, built and contracted, then stopped by a restructuring before launch.'
  },
  {
    slug: 'circular-plastics',
    component: 'Plastics',
    company: 'Dow',
    title: 'Plastic waste as a building material',
    line: 'A Sustainability Academy project with four colleagues. It never got past concept.',
    status: 'Concept',
    dek: 'A project I proposed to Dow’s Sustainability Academy. It never got past concept, and I still think the idea is right.',
    role: 'Proposed it and led the team',
    facts: [],
    description:
      'A Dow Sustainability Academy concept for using recycled plastic waste in construction materials.'
  }
];

// "How I work" on the homepage: habits, each with the case that shows it.
export const practices = [
  {
    title: 'Test the business model while the business case is still being written.',
    text: 'On the adherence marketplace I ran Strategyzer tests with senior directors alongside the stage-gate business case. Some tests touched contracts, so Legal sat in from the start.',
    slug: 'adherence-marketplace'
  },
  {
    title: 'Sort projects by what you don’t know.',
    text: 'With the PMO director we added a filter to stage-gate. Predictable projects kept the standard path. Uncertain ones came to my portfolio and ran on customer development, jobs-to-be-done and small assumption tests before any large spend.',
    slug: 'npi-portfolio'
  },
  {
    title: 'Learn the blocker’s system before arguing with him.',
    text: 'The finance director said his systems couldn’t support rental. I spent four hours learning them, then two weeks of daily calls mapping the accounting of every site. Two months later he asked for his sites to run the pilot.',
    slug: 'rental-business-model'
  },
  {
    title: 'When time is the constraint, decide every day.',
    text: 'For the labeling service I set up a daily steering committee with executives to fast-track decisions. Hiring, building a compliant packaging area and redesigning the process all ran in parallel.',
    slug: 'just-in-time-labeling'
  },
  {
    title: 'Find the department nobody invited.',
    text: 'Before the adherence launch I found that Accounting was routinely left out of the project process. In a large company, money doesn’t move just because a contract is signed.',
    slug: 'adherence-marketplace'
  },
  {
    title: 'Write down what went wrong.',
    text: 'Adherence adoption was slower than planned, and I lost the argument for more lead-generation budget. The Dow platform stopped before launch; I had underestimated the internal politics. Both are in the cases.',
    slug: 'b2b2c-platform'
  }
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
