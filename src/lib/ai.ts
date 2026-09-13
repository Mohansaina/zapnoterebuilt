import { BrandInfo, MicrositeData } from './types';

export async function generateMicrositeContent(
  sender: BrandInfo,
  prospect: BrandInfo,
  template: 'pitch' | 'executive' | 'showcase' = 'pitch',
  customNote?: string
): Promise<Omit<MicrositeData, 'id' | 'createdAt' | 'views' | 'likes'>> {
  const apiKey = process.env.GEMINI_API_KEY;

  if (apiKey) {
    try {
      const prompt = `
You are an expert B2B sales strategist creating a highly personalized, co-branded microsite pitch.
Sender Company: ${sender.name} (${sender.domain}) - ${sender.tagline}. Description: ${sender.description}
Prospect Company: ${prospect.name} (${prospect.domain}) - ${prospect.tagline}. Description: ${prospect.description}
Template Style: ${template}
Custom Note: ${customNote || 'None'}

Return ONLY a raw JSON object with this exact structure:
{
  "headline": "A compelling co-branded headline (e.g., Accelerating ${prospect.name}'s Growth with ${sender.name})",
  "subheadline": "A 1-2 sentence subtitle explaining how ${sender.name} solves key challenges for ${prospect.name}.",
  "valuePoints": [
    {
      "title": "Short Benefit Title 1",
      "description": "Detailed tailored benefit explanation.",
      "impactMetric": "3.5x Conversion / 40% Cost Reduction / 2x Speed"
    },
    {
      "title": "Short Benefit Title 2",
      "description": "Detailed tailored benefit explanation.",
      "impactMetric": "24/7 Automation / 99.9% Uptime"
    },
    {
      "title": "Short Benefit Title 3",
      "description": "Detailed tailored benefit explanation.",
      "impactMetric": "$150k+ Saved Annually"
    }
  ],
  "problemSolution": [
    {
      "problem": "Legacy manual workflow or slow outreach response",
      "solution": "Automated co-branded digital experience built instantly for ${prospect.name}"
    },
    {
      "problem": "Generic emails getting ignored by target executives",
      "solution": "Dynamic dual-logo personalized landing pages that guarantee 4x higher CTR"
    }
  ]
}
`;

      const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: { responseMimeType: 'application/json' }
        })
      });

      if (res.ok) {
        const data = await res.json();
        const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
        if (rawText) {
          const cleanJson = rawText.replace(/```json|```/g, '').trim();
          const parsed = JSON.parse(cleanJson);
          const slug = `${sender.domain.split('.')[0]}-${prospect.domain.split('.')[0]}-${Math.random().toString(36).slice(2, 7)}`;
          return {
            slug,
            sender,
            prospect,
            headline: parsed.headline,
            subheadline: parsed.subheadline,
            template,
            valuePoints: parsed.valuePoints,
            problemSolution: parsed.problemSolution,
            meetingUrl: process.env.NEXT_PUBLIC_DEFAULT_MEETING_URL || 'https://calendly.com',
          };
        }
      }
    } catch (err) {
      console.warn('Gemini API call failed, switching to smart rule-engine fallback:', err);
    }
  }

  // Smart Fallback Engine (Runs out of the box with zero API key required)
  const slug = `${sender.domain.split('.')[0]}-${prospect.domain.split('.')[0]}-${Math.random().toString(36).slice(2, 7)}`;

  let headline = `Electrifying ${prospect.name}'s Growth with ${sender.name}`;
  let subheadline = `A bespoke digital partnership proposal engineered to help ${prospect.name} scale engagement, streamline workflows, and drive measurable revenue.`;

  if (template === 'executive') {
    headline = `Executive Brief: Strategic Synergy for ${prospect.name}`;
    subheadline = `A data-backed overview on how ${sender.name}'s infrastructure empowers ${prospect.name}'s leadership team to achieve peak efficiency.`;
  } else if (template === 'showcase') {
    headline = `${sender.name} ⚡ ${prospect.name}: The Future of Outbound`;
    subheadline = `Explore an interactive demonstration tailored specifically for ${prospect.name}'s target audience and product ecosystem.`;
  }

  return {
    slug,
    sender,
    prospect,
    headline,
    subheadline,
    template,
    valuePoints: [
      {
        title: `Tailored Integration for ${prospect.name}`,
        description: `Seamlessly blend ${sender.name}'s core technology with ${prospect.name}'s current workflow without friction.`,
        impactMetric: '3.4x Faster Onboarding'
      },
      {
        title: 'Hyper-Personalized Engagement',
        description: `Deliver co-branded touchpoints that increase prospect response rates and turn cold outreach into warm calls.`,
        impactMetric: '+185% Click-Through'
      },
      {
        title: 'Measurable ROI & Insights',
        description: `Real-time notifications and analytics whenever executives at ${prospect.name} review your personalized deck.`,
        impactMetric: '100% Visibility'
      }
    ],
    problemSolution: [
      {
        problem: `Generic cold emails getting buried in ${prospect.name} decision-makers' inboxes.`,
        solution: `Instantly generated co-branded microsites that capture executive attention in under 5 seconds.`
      },
      {
        problem: 'Long sales cycles with multiple back-and-forth email threads.',
        solution: 'All-in-one pitch room with embedded calendar booking, video demos, and one-click feedback.'
      }
    ],
    meetingUrl: 'https://calendly.com',
  };
}
