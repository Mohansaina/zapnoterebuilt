import { NextRequest, NextResponse } from 'next/server';
import { fetchBrandInfo } from '@/lib/scrapers';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const domain = searchParams.get('domain');

  if (!domain) {
    return NextResponse.json({ error: 'Domain parameter is required' }, { status: 400 });
  }

  try {
    const brand = await fetchBrandInfo(domain);
    return NextResponse.json(brand);
  } catch (error) {
    console.error('Error fetching brand info:', error);
    return NextResponse.json({ error: 'Failed to fetch brand details' }, { status: 500 });
  }
}
