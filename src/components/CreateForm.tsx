'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Loader2, Zap, Sparkles, Layers } from 'lucide-react';
import { saveMicrosite } from '@/lib/storage';
import { MicrositeData } from '@/lib/types';
import { RealtimePreviewBadge } from './RealtimePreviewBadge';

export const CreateForm: React.FC = () => {
  const router = useRouter();
  const [senderDomain, setSenderDomain] = useState('linkedin.com');
  const [prospectDomain, setProspectDomain] = useState('');
  const [template, setTemplate] = useState<'pitch' | 'executive' | 'showcase'>('pitch');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderDomain || !prospectDomain) {
      setError('Please enter both your website URL and your prospect\'s website URL.');
      return;
    }

    setError(null);
    setIsLoading(true);

    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          senderDomain,
          prospectDomain,
          template,
        }),
      });

      if (!res.ok) {
        throw new Error('Failed to generate Zapnote');
      }

      const data: MicrositeData = await res.json();
      saveMicrosite(data);
      router.push(`/p/${data.slug}`);
    } catch (err) {
      console.error(err);
      setError('Failed to create Zapnote. Please check the domain names and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleFillSample = (sender: string, prospect: string) => {
    setSenderDomain(sender);
    setProspectDomain(prospect);
    setError(null);
  };

  return (
    <>
      {/* Fullscreen Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex flex-col items-center justify-center gap-4 animate-fadeIn">
          <div className="w-14 h-14 rounded-2xl bg-[#d7fe00]/10 border border-[#d7fe00]/30 flex items-center justify-center shadow-2xl animate-pulse">
            <Zap className="w-8 h-8 text-[#d7fe00] fill-[#d7fe00]" />
          </div>
          <span className="text-xl font-bold text-white tracking-wide font-sans flex items-center gap-2">
            Generating Zapnote <Sparkles className="w-5 h-5 text-[#d7fe00] animate-spin" />
          </span>
          <p className="text-xs text-zinc-400">Scraping brand logos & generating tailored pitch deck...</p>
        </div>
      )}

      <form onSubmit={handleGenerate} className="flex flex-col gap-4 w-full">
        {/* Sample Quick-Fill Chips */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-[11px] font-semibold text-zinc-400 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-[#d7fe00]" /> Try popular pairs:
          </span>
          <button
            type="button"
            onClick={() => handleFillSample('stripe.com', 'airbnb.com')}
            className="text-[11px] px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 font-medium transition-colors cursor-pointer"
          >
            Stripe × Airbnb
          </button>
          <button
            type="button"
            onClick={() => handleFillSample('linear.app', 'vercel.com')}
            className="text-[11px] px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 font-medium transition-colors cursor-pointer"
          >
            Linear × Vercel
          </button>
          <button
            type="button"
            onClick={() => handleFillSample('intel.com', 'twitch.tv')}
            className="text-[11px] px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 font-medium transition-colors cursor-pointer"
          >
            Intel × Twitch
          </button>
        </div>

        {/* Input Form: Your site | Their site | Generate */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-end gap-3.5 w-full">
          {/* Your site */}
          <div className="flex flex-col gap-1.5 w-full sm:flex-1 min-w-0">
            <label className="text-[13px] font-bold text-white tracking-wide">Your site</label>
            <input
              type="text"
              placeholder="linkedin.com"
              value={senderDomain}
              onChange={(e) => setSenderDomain(e.target.value)}
              className="h-12 px-4 bg-[#14161b] border border-zinc-700/80 focus:border-[#d7fe00] focus:ring-1 focus:ring-[#d7fe00] rounded-xl text-white placeholder-zinc-500 text-[15px] font-medium focus:outline-none transition-all shadow-inner w-full"
              required
              autoComplete="off"
            />
          </div>

          {/* Their site */}
          <div className="flex flex-col gap-1.5 w-full sm:flex-1 min-w-0">
            <label className="text-[13px] font-bold text-white tracking-wide">Their site</label>
            <input
              type="text"
              placeholder="domain.com"
              value={prospectDomain}
              onChange={(e) => setProspectDomain(e.target.value)}
              className="h-12 px-4 bg-[#14161b] border border-zinc-700/80 focus:border-[#d7fe00] focus:ring-1 focus:ring-[#d7fe00] rounded-xl text-white placeholder-zinc-500 text-[15px] font-medium focus:outline-none transition-all shadow-inner w-full"
              required
              autoComplete="off"
            />
          </div>

          {/* Generate Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="h-12 px-6 rounded-xl bg-[#d7fe00] hover:bg-[#c5ea00] active:scale-[0.98] text-black font-extrabold text-[15px] whitespace-nowrap flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer shadow-lg shadow-[#d7fe00]/25 hover:shadow-[#d7fe00]/40 disabled:opacity-50 disabled:pointer-events-none w-full sm:w-auto shrink-0 mt-1 sm:mt-0"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-black" />
                <span>Generating...</span>
              </>
            ) : (
              <span>Generate Zapnote</span>
            )}
          </button>
        </div>

        {/* Template Style Selector */}
        <div className="flex items-center gap-2 pt-1">
          <span className="text-xs font-semibold text-zinc-400 flex items-center gap-1">
            <Layers className="w-3.5 h-3.5 text-zinc-400" /> Deck Style:
          </span>
          <div className="flex items-center gap-1.5 bg-[#14161b] p-1 rounded-xl border border-white/10">
            {[
              { id: 'pitch', label: 'Pitch Deck' },
              { id: 'executive', label: 'Executive Brief' },
              { id: 'showcase', label: 'Product Showcase' },
            ].map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setTemplate(t.id as 'pitch' | 'executive' | 'showcase')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  template === t.id
                    ? 'bg-[#d7fe00] text-black shadow'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Live Dual Brand Badge Preview */}
        {(senderDomain || prospectDomain) && (
          <RealtimePreviewBadge
            senderDomain={senderDomain}
            prospectDomain={prospectDomain}
          />
        )}

        {error && (
          <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-semibold">
            {error}
          </div>
        )}
      </form>
    </>
  );
};

