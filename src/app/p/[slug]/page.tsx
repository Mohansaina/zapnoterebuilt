'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import {
  Zap,
  Calendar,
  Heart,
  Share2,
  Check,
} from 'lucide-react';
import { getMicrositeBySlug, incrementViews, incrementLikes } from '@/lib/storage';
import { MicrositeData } from '@/lib/types';
import { BookingModal } from '@/components/BookingModal';

export default function MicrositePage() {
  const params = useParams();
  const slug = params?.slug as string;

  const [site, setSite] = useState<MicrositeData | null>(null);
  const [likes, setLikes] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);

  useEffect(() => {
    if (slug) {
      const data = getMicrositeBySlug(slug);
      if (data) {
        setSite(data);
        setLikes(data.likes || 0);
        incrementViews(slug);
      }
    }
  }, [slug]);

  if (!site) {
    return (
      <div className="min-h-screen bg-[#07080a] text-white flex flex-col items-center justify-center p-6 text-center">
        <div className="w-16 h-16 rounded-2xl bg-[#e2f952]/10 border border-[#e2f952]/30 flex items-center justify-center mb-4 animate-bounce">
          <Zap className="w-8 h-8 text-[#e2f952] fill-[#e2f952]" />
        </div>
        <h1 className="text-2xl font-bold text-white mb-2 font-mono">Zapnote Deck Not Found</h1>
        <p className="text-zinc-400 text-sm max-w-md mb-6">
          This zapnote deck might be saved on another device or the link has expired.
        </p>
        <Link
          href="/"
          className="px-6 py-3 rounded-xl bg-[#e2f952] text-black font-extrabold transition-all"
        >
          Create New Zapnote
        </Link>
      </div>
    );
  }

  const handleLike = () => {
    if (!hasLiked && slug) {
      const updated = incrementLikes(slug);
      setLikes(updated);
      setHasLiked(true);
    }
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#090a0d] text-white selection:bg-[#d7fe00] selection:text-black flex flex-col font-sans">
      {/* Top Action Bar matching Screenshot 2 */}
      <nav className="sticky top-0 z-40 w-full px-6 py-3.5 bg-[#0b0c0f]/95 backdrop-blur-md border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Dual Brand Logos Badge */}
          <div className="flex items-center gap-1 bg-[#14161b] px-2.5 py-1 rounded-full border border-white/10 shadow">
            <img
              src={site.prospect.logoUrl}
              alt={site.prospect.name}
              className="w-5 h-5 object-contain rounded-full bg-white p-0.5"
              onError={(e) => {
                (e.target as HTMLImageElement).src = site.prospect.faviconUrl;
              }}
            />
            <img
              src={site.sender.logoUrl}
              alt={site.sender.name}
              className="w-5 h-5 object-contain rounded-full bg-white p-0.5"
              onError={(e) => {
                (e.target as HTMLImageElement).src = site.sender.faviconUrl;
              }}
            />
          </div>
          <span className="text-sm font-medium text-zinc-300">
            A message from <strong className="text-white underline underline-offset-4 decoration-zinc-400">{site.sender.name}</strong>:
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={handleShare}
            className="px-2.5 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-transparent hover:bg-white/5 border border-white/20 text-[11px] sm:text-xs font-bold text-white flex items-center gap-1 sm:gap-1.5 transition-colors cursor-pointer"
          >
            {copied ? <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400" /> : <Share2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-zinc-300" />}
            <span>Secondary CTA 🚀</span>
          </button>
          <button
            onClick={() => setShowBookingModal(true)}
            className="px-2.5 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-[#1e5ed4] hover:bg-[#1a53bd] text-[11px] sm:text-xs font-extrabold text-white flex items-center gap-1 sm:gap-1.5 shadow-lg shadow-[#1e5ed4]/20 transition-all cursor-pointer"
          >
            <Zap className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-white" />
            <span>Primary CTA ⚡</span>
          </button>
        </div>
      </nav>

      {/* Main 2-Column Split Hero Presentation matching Screenshot 2, 3, & 4 */}
      <main className="flex-1 w-full max-w-[1400px] mx-auto px-4 sm:px-6 py-6 sm:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Title, Subtitle, Bullet List, Metrics */}
          <div className="lg:col-span-7 flex flex-col gap-6 sm:gap-8">
            
            {/* Prepared for Prospect Badge */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-zinc-400">— Prepared for</span>
              <span className="px-2.5 py-0.5 rounded bg-white/10 text-xs font-bold text-white border border-white/10">
                {site.prospect.name}
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-2xl sm:text-4xl lg:text-[42px] font-extrabold text-white tracking-tight leading-[1.2] sm:leading-[1.18] font-sans">
              {site.prospect.name} + {site.sender.name} — built for your mass-market catalog and Prime-style delivery expectations
            </h1>

            {/* Subheadline Paragraph */}
            <p className="text-xs sm:text-base text-zinc-400 leading-relaxed max-w-[650px]">
              {site.subheadline || `A quick look at how pairing ${site.prospect.name}'s storefront breadth with ${site.sender.name}'s Prime and free-shipping model can lift order conversion, improve delivery consistency, and reduce customer friction.`}
            </p>

            {/* Section 1: What changes for Prospect shoppers (and your ops) */}
            <div className="flex flex-col gap-5 sm:gap-6 pt-4 border-t border-white/10">
              <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                What changes for {site.prospect.name} shoppers (and your ops)
              </h2>

              <div className="flex flex-col gap-5 sm:gap-6">
                {site.valuePoints.map((vp, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="text-[#d7fe00] font-bold text-base sm:text-lg leading-none shrink-0 mt-0.5">➔</span>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-sm sm:text-base font-bold text-white leading-tight">{vp.title}</h3>
                      <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-[600px]">{vp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 2: What this looks like in practice */}
            <div className="flex flex-col gap-5 sm:gap-6 pt-6 border-t border-white/10">
              <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                What this looks like in practice
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 sm:p-5 rounded-2xl bg-[#12141a] border border-white/10 flex flex-col gap-2">
                  <p className="text-xs text-zinc-300 leading-relaxed font-medium">
                    {site.sender.name} has Prime and free shipping across a huge range of everyday essentials—built to handle high-volume, multi-category buying.
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-[#12141a] border border-white/10 flex flex-col justify-between gap-3">
                  <span className="text-xl sm:text-2xl font-extrabold text-[#d7fe00] font-mono">Hours saved every week</span>
                  <span className="text-xs text-zinc-400">Streamlined automated catalog syncing and fulfillment updates.</span>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-[#12141a] border border-white/10 flex flex-col justify-between gap-3 sm:col-span-2">
                  <span className="text-xl sm:text-2xl font-extrabold text-white font-mono">Fewer costly mistakes</span>
                  <span className="text-xs text-zinc-400">Clearer shipping expectations cut the volume of delivery-related tickets and refunds.</span>
                </div>
              </div>
            </div>

            {/* Endorsement & Scheduling Bar */}
            <div className="flex items-center gap-3 sm:gap-4 pt-6 border-t border-white/10">
              <button
                onClick={() => setShowBookingModal(true)}
                className="h-11 px-5 sm:px-6 rounded-xl bg-[#d7fe00] hover:bg-[#c5ea00] text-black font-extrabold text-xs flex items-center gap-2 shadow-lg shadow-[#d7fe00]/20 transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4 fill-black" /> Schedule Demo
              </button>

              <button
                onClick={handleLike}
                className={`h-11 px-4 rounded-xl border text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                  hasLiked
                    ? 'bg-rose-500/10 border-rose-500 text-rose-400'
                    : 'bg-white/5 border-white/10 text-zinc-300 hover:bg-white/10'
                }`}
              >
                <Heart className={`w-4 h-4 ${hasLiked ? 'fill-rose-400' : ''}`} />
                <span>{likes} Endorsements</span>
              </button>
            </div>
          </div>

          {/* Right Column: Concentric Circles Graphic Stage with Large White Logo Badges */}
          <div className="lg:col-span-5 relative lg:sticky lg:top-20 w-full">
            <div className="w-full bg-[#111318] border border-white/10 rounded-3xl p-6 sm:p-8 min-h-[380px] sm:min-h-[480px] lg:min-h-[560px] relative overflow-hidden flex flex-col items-center justify-center gap-6 sm:gap-10 shadow-2xl">
              {/* Radial Pattern Lines Layer */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-60" />

              {/* Large Prospect Logo White Circle Badge */}
              <div className="w-36 h-36 sm:w-48 sm:h-48 rounded-full bg-white shadow-2xl flex items-center justify-center p-6 sm:p-8 relative z-10 border-4 border-white/20 hover:scale-105 transition-transform duration-300">
                <img
                  src={site.prospect.logoUrl}
                  alt={site.prospect.name}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = site.prospect.faviconUrl;
                  }}
                />
              </div>

              {/* Large Sender Logo White Circle Badge */}
              <div className="w-36 h-36 sm:w-48 sm:h-48 rounded-full bg-white shadow-2xl flex items-center justify-center p-6 sm:p-8 relative z-10 border-4 border-white/20 hover:scale-105 transition-transform duration-300">
                <img
                  src={site.sender.logoUrl}
                  alt={site.sender.name}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = site.sender.faviconUrl;
                  }}
                />
              </div>

              {/* Floating Right Yellow Bolt Badge */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-8 sm:w-10 h-12 sm:h-14 bg-[#d7fe00] rounded-l-2xl flex items-center justify-center shadow-xl border-l border-y border-black/20">
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-black fill-black" />
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* Embedded Built-in Meeting Scheduler Modal */}
      {showBookingModal && (
        <BookingModal
          senderName={site.sender.name}
          prospectName={site.prospect.name}
          onClose={() => setShowBookingModal(false)}
        />
      )}

      {/* Public Footer */}
      <footer className="w-full py-6 px-6 border-t border-white/10 bg-[#07080a] text-center text-xs text-zinc-500 flex items-center justify-center gap-2">
        <span>Powered by</span>
        <Link href="/" className="font-bold text-[#d7fe00] hover:underline flex items-center gap-1">
          <Zap className="w-3.5 h-3.5 fill-[#d7fe00]" /> Zapnote
        </Link>
      </footer>
    </div>
  );
}
