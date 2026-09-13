import { BrandInfo } from './types';

export function normalizeDomain(domainInput: string): string {
  let clean = domainInput.trim().toLowerCase();
  clean = clean.replace(/^https?:\/\//, '');
  clean = clean.replace(/^www\./, '');
  clean = clean.split('/')[0];
  clean = clean.split('?')[0];
  return clean;
}

export function capitalizeBrandName(domain: string): string {
  const parts = domain.split('.')[0].split(/[-_]/);
  return parts
    .map(p => p.charAt(0).toUpperCase() + p.slice(1))
    .join(' ');
}

// Preset color palettes for popular tech brands or smart fallback hashing
const BRAND_COLORS: Record<string, string> = {
  'stripe.com': '#635bff',
  'linear.app': '#5e6ad2',
  'github.com': '#2ea44f',
  'vercel.com': '#000000',
  'figma.com': '#f24e1e',
  'slack.com': '#4a154b',
  'notion.so': '#000000',
  'zapier.com': '#ff4a00',
  'hubspot.com': '#ff7a59',
  'salesforce.com': '#00a1e0',
  'zendesk.com': '#03363d',
  'shopify.com': '#96bf48',
  'airbnb.com': '#ff5a5f',
  'uber.com': '#000000',
  'openai.com': '#10a37f',
  'google.com': '#4285f4',
  'microsoft.com': '#00a4ef',
  'apple.com': '#000000',
};

function getBrandColor(domain: string): string {
  if (BRAND_COLORS[domain]) return BRAND_COLORS[domain];
  // Deterministic color generator based on domain name
  let hash = 0;
  for (let i = 0; i < domain.length; i++) {
    hash = domain.charCodeAt(i) + ((hash << 5) - hash);
  }
  const hue = Math.abs(hash) % 360;
  return `hsl(${hue}, 70%, 55%)`;
}

export async function fetchBrandInfo(rawDomain: string): Promise<BrandInfo> {
  const domain = normalizeDomain(rawDomain);
  const name = capitalizeBrandName(domain);
  const logoUrl = `https://logo.clearbit.com/${domain}`;
  const faviconUrl = `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
  const primaryColor = getBrandColor(domain);

  let description = `${name} drives modern solutions for ambitious businesses.`;
  let tagline = `Leading innovator in software and digital experience.`;

  try {
    // Attempt fast fetching via Jina AI reader or metadata headers with a strict 3-second timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3500);

    const res = await fetch(`https://r.jina.ai/http://${domain}`, {
      headers: {
        'Accept': 'text/plain',
        'X-No-Cache': 'true',
      },
      signal: controller.signal,
    });
    clearTimeout(timeoutId);

    if (res.ok) {
      const text = await res.text();
      const lines = text
        .split('\n')
        .map(l => l.trim())
        .filter(l => l.length > 20 && !l.startsWith('http') && !l.startsWith('Title:'));
      
      if (lines.length > 0) {
        tagline = lines[0].slice(0, 120);
      }
      if (lines.length > 1) {
        description = lines.slice(1, 3).join(' ').slice(0, 240);
      }
    }
  } catch (err) {
    // Fallback gracefully on timeout or network block
    console.warn(`Scraper fallback used for ${domain}:`, err);
  }

  return {
    domain,
    name,
    logoUrl,
    faviconUrl,
    primaryColor,
    tagline,
    description,
  };
}
