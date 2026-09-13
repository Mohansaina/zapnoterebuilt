'use client';

import React from 'react';
import { Zap, CheckCircle2, Globe, Shield } from 'lucide-react';
import { normalizeDomain, capitalizeBrandName } from '@/lib/scrapers';

interface RealtimePreviewBadgeProps {
  senderDomain: string;
  prospectDomain: string;
}

export const RealtimePreviewBadge: React.FC<RealtimePreviewBadgeProps> = ({
  senderDomain,
  prospectDomain,
}) => {
  const senderClean = senderDomain ? normalizeDomain(senderDomain) : '';
  const prospectClean = prospectDomain ? normalizeDomain(prospectDomain) : '';

  const senderName = senderClean ? capitalizeBrandName(senderClean) : 'Your site';
  const prospectName = prospectClean ? capitalizeBrandName(prospectClean) : "Their site";

  const senderLogo = senderClean ? `https://logo.clearbit.com/${senderClean}` : null;
  const prospectLogo = prospectClean ? `https://logo.clearbit.com/${prospectClean}` : null;

  const senderFavicon = senderClean ? `https://www.google.com/s2/favicons?domain=${senderClean}&sz=128` : null;
  const prospectFavicon = prospectClean ? `https://www.google.com/s2/favicons?domain=${prospectClean}&sz=128` : null;

  const isPairReady = Boolean(senderClean && prospectClean);

  return (
    <div className="w-full rounded-2xl bg-[#121620]/90 p-3 sm:p-4 border border-white/10 shadow-xl transition-all duration-300">
      <div className="flex items-center justify-between text-xs font-semibold text-zinc-400 mb-2.5 border-b border-white/5 pb-2">
        <span className="flex items-center gap-1.5 text-zinc-300 font-mono text-[10px] sm:text-[11px] uppercase tracking-wider">
          <Zap className="w-3.5 h-3.5 text-[#e2f952] fill-[#e2f952]" /> Co-Branded Live Preview
        </span>
        <span className={`text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full font-mono flex items-center gap-1 transition-all ${
          isPairReady
            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
            : 'bg-white/5 text-zinc-400 border border-white/10'
        }`}>
          <CheckCircle2 className="w-3 h-3" />
          {isPairReady ? 'Matched' : 'Awaiting Input'}
        </span>
      </div>

      <div className="flex items-center justify-between gap-2 py-2 px-2.5 sm:px-3 rounded-xl bg-[#090a0d] border border-white/5">
        {/* Sender Logo Container */}
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#181d2a] border border-white/10 p-1.5 sm:p-2 flex items-center justify-center shrink-0 relative">
            {senderLogo ? (
              <img
                src={senderLogo}
                alt={senderName}
                className="w-full h-full object-contain"
                onError={(e) => {
                  if (senderFavicon) {
                    (e.target as HTMLImageElement).src = senderFavicon;
                  }
                }}
              />
            ) : (
              <Globe className="w-3.5 h-3.5 text-zinc-500" />
            )}
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-[9px] uppercase font-mono tracking-wider text-zinc-500">Your site</span>
            <span className="text-xs sm:text-sm font-bold text-white max-w-[70px] sm:max-w-[120px] truncate">{senderName}</span>
          </div>
        </div>

        {/* Lightning Bolt Connector */}
        <div className="relative flex flex-col items-center justify-center shrink-0">
          <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
            isPairReady
              ? 'bg-[#e2f952] text-black shadow-lg shadow-[#e2f952]/20'
              : 'bg-white/5 border border-white/10 text-[#e2f952]'
          }`}>
            <Zap className={`w-3.5 h-3.5 ${isPairReady ? 'fill-black' : 'fill-[#e2f952]/20'}`} />
          </div>
        </div>

        {/* Target Prospect Logo Container */}
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <div className="flex flex-col text-right min-w-0">
            <span className="text-[9px] uppercase font-mono tracking-wider text-zinc-500">Their site</span>
            <span className="text-xs sm:text-sm font-bold text-white max-w-[70px] sm:max-w-[120px] truncate">{prospectName}</span>
          </div>
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#181d2a] border border-white/10 p-1.5 sm:p-2 flex items-center justify-center shrink-0 relative">
            {prospectLogo ? (
              <img
                src={prospectLogo}
                alt={prospectName}
                className="w-full h-full object-contain"
                onError={(e) => {
                  if (prospectFavicon) {
                    (e.target as HTMLImageElement).src = prospectFavicon;
                  }
                }}
              />
            ) : (
              <Shield className="w-3.5 h-3.5 text-zinc-500" />
            )}
          </div>
        </div>
      </div>
    </div>
  );

};
