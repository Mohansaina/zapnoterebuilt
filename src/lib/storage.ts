import { MicrositeData } from './types';

const STORAGE_KEY = 'zapnote_rebuild_microsites';

export const PRESEEDED_MICROSITES: MicrositeData[] = [
  {
    id: 'zap_seed_intel_twitch',
    slug: 'intel-twitch',
    createdAt: new Date().toISOString(),
    sender: {
      domain: 'intel.com',
      name: 'Intel',
      logoUrl: 'https://logo.clearbit.com/intel.com',
      faviconUrl: 'https://www.google.com/s2/favicons?domain=intel.com&sz=128',
      primaryColor: '#0071c5',
      tagline: 'Intel empowers world-changing technology that improves the life of every person on the planet.',
      description: 'Global semiconductor leader providing high-performance processors and AI compute architecture.',
    },
    prospect: {
      domain: 'twitch.tv',
      name: 'Twitch',
      logoUrl: 'https://logo.clearbit.com/twitch.tv',
      faviconUrl: 'https://www.google.com/s2/favicons?domain=twitch.tv&sz=128',
      primaryColor: '#9146ff',
      tagline: 'Twitch is an interactive livestreaming service for content spanning gaming, entertainment, sports, music, and more.',
      description: 'World leading live streaming platform built for interactive communities.',
    },
    headline: 'Twitch + Intel — High-Throughput Live Encoding & Zero-Latency Stream Compute',
    subheadline: 'A custom hardware acceleration architecture tailored for Twitch creator broadcasts, ultra-low latency ingest, and next-gen 4K 60fps streaming.',
    template: 'executive',
    valuePoints: [
      {
        title: 'Hardware AV1 & HEVC Encoding Acceleration',
        description: 'Reduce server-side CPU utilization by 42% per livestream while delivering crystal clear 4K broadcast quality.',
        impactMetric: '42% CPU Savings',
      },
      {
        title: 'Edge Compute Node Optimization',
        description: 'Deploy Intel Xeon 6 processors across global ingress points to ensure sub-100ms video rendering.',
        impactMetric: 'Sub-100ms Latency',
      },
      {
        title: 'Sustainable Data Center Efficiency',
        description: 'Lower energy consumption per petabyte streamed across peak esports tournament broadcasts.',
        impactMetric: '30% Energy Reduction',
      },
    ],
    problemSolution: [
      {
        problem: 'Surging bitrate costs and server thermal bottlenecks during massive global tournament broadcasts.',
        solution: 'Intel GPU Flex Series acceleration cards providing unmatched density per rack unit.',
      },
      {
        problem: 'Inconsistent video quality across mobile network ingest points.',
        solution: 'Dynamic AI-assisted packet encoding running directly on Intel Xeon Edge nodes.',
      },
    ],
    meetingUrl: 'https://calendly.com',
    views: 1420,
    likes: 89,
  },
  {
    id: 'zap_seed_stripe_airbnb',
    slug: 'stripe-airbnb',
    createdAt: new Date().toISOString(),
    sender: {
      domain: 'stripe.com',
      name: 'Stripe',
      logoUrl: 'https://logo.clearbit.com/stripe.com',
      faviconUrl: 'https://www.google.com/s2/favicons?domain=stripe.com&sz=128',
      primaryColor: '#635bff',
      tagline: 'Financial infrastructure for the internet.',
      description: 'Stripe is a suite of APIs powering commerce for online businesses of all sizes.',
    },
    prospect: {
      domain: 'airbnb.com',
      name: 'Airbnb',
      logoUrl: 'https://logo.clearbit.com/airbnb.com',
      faviconUrl: 'https://www.google.com/s2/favicons?domain=airbnb.com&sz=128',
      primaryColor: '#ff5a5f',
      tagline: 'Belong anywhere.',
      description: 'Global community marketplace connecting travelers with unique stays and experiences.',
    },
    headline: 'Airbnb + Stripe — Unifying Global Host Payouts & Multi-Currency Checkout',
    subheadline: 'Pairing Airbnb’s global booking volume with Stripe Connect to enable instant host payouts in 135+ currencies and frictionless checkout.',
    template: 'pitch',
    valuePoints: [
      {
        title: 'Instant Local Host Payouts',
        description: 'Allow host payouts directly to debit cards and bank accounts in over 45 countries in under 10 seconds.',
        impactMetric: 'Instant Payouts in 45+ Countries',
      },
      {
        title: 'Automated FX & Tax Compliance',
        description: 'Handle complex multi-jurisdiction VAT and tourist tax collection seamlessly at checkout.',
        impactMetric: '100% Tax Automation',
      },
      {
        title: 'Adaptive Fraud Prevention',
        description: 'Stripe Radar ML models trained on billions of global transactions to stop chargebacks before they happen.',
        impactMetric: '0.02% Chargeback Rate',
      },
    ],
    problemSolution: [
      {
        problem: 'High payout friction and currency exchange delays for international host communities.',
        solution: 'Stripe Connect cross-border rail infrastructure providing real-time local clearing.',
      },
      {
        problem: 'Abandoned guest checkouts due to missing local payment methods (iDEAL, Klarna, Pix).',
        solution: 'Dynamic Payment Methods API instantly presenting local payment options based on guest location.',
      },
    ],
    meetingUrl: 'https://calendly.com',
    views: 2890,
    likes: 214,
  },
  {
    id: 'zap_seed_heyo_intel',
    slug: 'heyo-intel',
    createdAt: new Date().toISOString(),
    sender: {
      domain: 'heyo.com',
      name: 'Heyo',
      logoUrl: 'https://logo.clearbit.com/heyo.com',
      faviconUrl: 'https://www.google.com/s2/favicons?domain=heyo.com&sz=128',
      primaryColor: '#00aeef',
      tagline: 'Modern fleet & operations intelligence.',
      description: 'Heyo provides real-time operational telematics, fuel optimization, and automated dispatch intelligence.',
    },
    prospect: {
      domain: 'intel.com',
      name: 'Intel',
      logoUrl: 'https://logo.clearbit.com/intel.com',
      faviconUrl: 'https://www.google.com/s2/favicons?domain=intel.com&sz=128',
      primaryColor: '#0071c5',
      tagline: 'Intel empowers world-changing technology.',
      description: 'Global semiconductor and computing innovator.',
    },
    headline: 'Intel + Heyo — Real-Time Logistics Intelligence & Fleet Predictive Diagnostics',
    subheadline: 'Connecting Intel’s silicon supply chain logistics with Heyo’s predictive telemetry platform to eliminate transit downtime.',
    template: 'showcase',
    valuePoints: [
      {
        title: 'Real-Time Telematics & Fuel Optimization',
        description: 'Continuous monitoring of fuel consumption and route efficiency across global transit fleets.',
        impactMetric: '8-12% Fuel Reduction',
      },
      {
        title: 'Predictive Vehicle Maintenance',
        description: 'Automated engine fault code analysis flagging maintenance requirements before hardware failure occurs.',
        impactMetric: '23% Breakdown Reduction',
      },
      {
        title: 'Zero Compliance Violations',
        description: 'Automated DOT log compliance tracking and instant driver dispatch verification.',
        impactMetric: '100% DOT Compliance',
      },
    ],
    problemSolution: [
      {
        problem: 'Unplanned vehicle breakdowns causing delays in wafer delivery and factory supply lines.',
        solution: 'Heyo real-time diagnostic alerts predicting maintenance needs weeks in advance.',
      },
      {
        problem: 'Lack of visibility into driver hours and fuel wastage across regional dispatch fleets.',
        solution: 'Automated real-time fleet dashboard with instant executive reporting.',
      },
    ],
    meetingUrl: 'https://calendly.com',
    views: 950,
    likes: 64,
  },
];

// In-Memory Server Store Cache (for server-side node process)
let globalServerStore: MicrositeData[] = [...PRESEEDED_MICROSITES];

export function getGlobalServerMicrosites(): MicrositeData[] {
  return globalServerStore;
}

export function saveGlobalServerMicrosite(site: MicrositeData): void {
  const existingIndex = globalServerStore.findIndex(s => s.slug.toLowerCase() === site.slug.toLowerCase());
  if (existingIndex >= 0) {
    globalServerStore[existingIndex] = site;
  } else {
    globalServerStore = [site, ...globalServerStore];
  }
}

export function saveMicrosite(site: MicrositeData): void {
  saveGlobalServerMicrosite(site);
  if (typeof window === 'undefined') return;
  try {
    const existing = getAllMicrosites();
    const updated = [site, ...existing.filter(item => item.slug !== site.slug)];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error('Failed to save microsite to localStorage:', err);
  }
}

export function getAllMicrosites(): MicrositeData[] {
  if (typeof window === 'undefined') return PRESEEDED_MICROSITES;
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    const parsed: MicrositeData[] = data ? JSON.parse(data) : [];
    
    // Merge preseeded items if not present
    const slugs = new Set(parsed.map(s => s.slug.toLowerCase()));
    const missingPreseeded = PRESEEDED_MICROSITES.filter(p => !slugs.has(p.slug.toLowerCase()));
    
    return [...parsed, ...missingPreseeded];
  } catch (err) {
    console.error('Failed to parse microsites from localStorage:', err);
    return PRESEEDED_MICROSITES;
  }
}

export function getMicrositeBySlug(slug: string): MicrositeData | null {
  const sites = getAllMicrosites();
  const site = sites.find(s => s.slug.toLowerCase() === slug.toLowerCase());
  if (site) return site;

  // Fallback to server store
  const serverSite = globalServerStore.find(s => s.slug.toLowerCase() === slug.toLowerCase());
  return serverSite || null;
}

export function incrementViews(slug: string): void {
  const serverSite = globalServerStore.find(s => s.slug.toLowerCase() === slug.toLowerCase());
  if (serverSite) {
    serverSite.views = (serverSite.views || 0) + 1;
  }

  if (typeof window === 'undefined') return;
  const sites = getAllMicrosites();
  const updated = sites.map(s => {
    if (s.slug.toLowerCase() === slug.toLowerCase()) {
      return { ...s, views: (s.views || 0) + 1 };
    }
    return s;
  });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
}

export function incrementLikes(slug: string): number {
  let newCount = 0;
  const serverSite = globalServerStore.find(s => s.slug.toLowerCase() === slug.toLowerCase());
  if (serverSite) {
    serverSite.likes = (serverSite.likes || 0) + 1;
    newCount = serverSite.likes;
  }

  if (typeof window === 'undefined') return newCount;
  const sites = getAllMicrosites();
  const updated = sites.map(s => {
    if (s.slug.toLowerCase() === slug.toLowerCase()) {
      newCount = (s.likes || 0) + 1;
      return { ...s, likes: newCount };
    }
    return s;
  });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return newCount;
}

