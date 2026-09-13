import { NextRequest, NextResponse } from 'next/server';
import { fetchBrandInfo } from '@/lib/scrapers';
import { generateMicrositeContent } from '@/lib/ai';
import { GenerateRequest } from '@/lib/types';
import { saveGlobalServerMicrosite } from '@/lib/storage';

export async function POST(req: NextRequest) {
  try {
    const body: GenerateRequest = await req.json();
    const { senderDomain, prospectDomain, template = 'pitch', customNote } = body;

    if (!senderDomain || !prospectDomain) {
      return NextResponse.json(
        { error: 'Both senderDomain and prospectDomain are required' },
        { status: 400 }
      );
    }

    // Parallel brand scraping
    const [sender, prospect] = await Promise.all([
      fetchBrandInfo(senderDomain),
      fetchBrandInfo(prospectDomain)
    ]);

    // AI / Smart Rule Content Generation
    const content = await generateMicrositeContent(sender, prospect, template, customNote);

    const fullMicrosite = {
      ...content,
      id: `zap_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
      createdAt: new Date().toISOString(),
      views: 0,
      likes: 0
    };

    saveGlobalServerMicrosite(fullMicrosite);

    return NextResponse.json(fullMicrosite);
  } catch (error) {
    console.error('Error generating microsite:', error);
    return NextResponse.json(
      { error: 'Failed to generate microsite. Please try again.' },
      { status: 500 }
    );
  }
}

