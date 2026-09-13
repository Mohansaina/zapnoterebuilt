import { MicrositeData } from './types';

const STORAGE_KEY = 'zapnote_rebuild_microsites';

export function saveMicrosite(site: MicrositeData): void {
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
  if (typeof window === 'undefined') return [];
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (err) {
    console.error('Failed to parse microsites from localStorage:', err);
    return [];
  }
}

export function getMicrositeBySlug(slug: string): MicrositeData | null {
  const sites = getAllMicrosites();
  const site = sites.find(s => s.slug.toLowerCase() === slug.toLowerCase());
  return site || null;
}

export function incrementViews(slug: string): void {
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
  if (typeof window === 'undefined') return 0;
  const sites = getAllMicrosites();
  let newCount = 0;
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
