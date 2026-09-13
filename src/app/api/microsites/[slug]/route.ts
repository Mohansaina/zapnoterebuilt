import { NextRequest, NextResponse } from 'next/server';
import { getMicrositeBySlug, incrementLikes, incrementViews, getGlobalServerMicrosites } from '@/lib/storage';

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    if (!slug) {
      return NextResponse.json({ error: 'Slug parameter is required' }, { status: 400 });
    }

    const site = getMicrositeBySlug(slug);
    if (!site) {
      return NextResponse.json({ error: 'Microsite not found' }, { status: 404 });
    }

    return NextResponse.json(site);
  } catch (err) {
    console.error('Error fetching microsite:', err);
    return NextResponse.json({ error: 'Failed to retrieve microsite' }, { status: 500 });
  }
}

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const { action } = await req.json();

    if (action === 'like') {
      const likes = incrementLikes(slug);
      return NextResponse.json({ success: true, likes });
    } else if (action === 'view') {
      incrementViews(slug);
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
  } catch (err) {
    console.error('Error updating microsite metrics:', err);
    return NextResponse.json({ error: 'Failed to update metrics' }, { status: 500 });
  }
}
