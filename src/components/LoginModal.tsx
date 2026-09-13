'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ExternalLink, Copy, Check, Eye, Heart, Zap, Sparkles, Search } from 'lucide-react';
import { getAllMicrosites } from '@/lib/storage';
import { MicrositeData } from '@/lib/types';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const [sites, setSites] = useState<MicrositeData[]>([]);
  const [copiedSlug, setCopiedSlug] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (isOpen) {
      setSites(getAllMicrosites());
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleCopyLink = (slug: string) => {
    const url = `${window.location.origin}/p/${slug}`;
    navigator.clipboard.writeText(url);
    setCopiedSlug(slug);
    setTimeout(() => setCopiedSlug(null), 2000);
  };

  const filteredSites = sites.filter((site) => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return true;
    return (
      site.sender.name.toLowerCase().includes(q) ||
      site.sender.domain.toLowerCase().includes(q) ||
      site.prospect.name.toLowerCase().includes(q) ||
      site.prospect.domain.toLowerCase().includes(q) ||
      site.slug.toLowerCase().includes(q)
    );
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl rounded-3xl bg-slate-900 border border-white/15 p-4 sm:p-8 shadow-2xl overflow-hidden flex flex-col gap-4 sm:gap-5 max-h-[90vh]">
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#d7fe00]/10 border border-[#d7fe00]/30 flex items-center justify-center">
              <Zap className="w-5 h-5 text-[#d7fe00] fill-[#d7fe00]" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Your Published Zapnotes</h3>
              <p className="text-xs text-zinc-400">View and share your active co-branded microsites</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-zinc-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Bar */}
        {sites.length > 0 && (
          <div className="relative w-full">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search by company or domain (e.g., Stripe, Airbnb)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-10 pl-10 pr-4 bg-[#090b10] border border-white/10 focus:border-[#d7fe00] rounded-xl text-xs text-white placeholder-zinc-500 focus:outline-none transition-colors"
            />
          </div>
        )}

        {/* List of Published Microsites */}
        <div className="overflow-y-auto flex flex-col gap-3 pr-1">
          {filteredSites.length === 0 ? (
            <div className="text-center py-12 text-zinc-400 flex flex-col items-center gap-3">
              <Sparkles className="w-8 h-8 text-[#d7fe00] animate-bounce" />
              <p className="font-semibold text-zinc-300">
                {searchQuery ? 'No matching Zapnotes found' : 'No Zapnotes published yet'}
              </p>
              <p className="text-xs text-zinc-500 max-w-xs">
                {searchQuery
                  ? 'Try searching with a different brand or domain name.'
                  : "Enter your site and a prospect's site on the homepage to publish your first co-branded deck!"}
              </p>
            </div>
          ) : (
            filteredSites.map((site) => (
              <div
                key={site.id}
                className="p-4 rounded-2xl bg-[#090b10] border border-white/10 hover:border-[#d7fe00]/40 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1 bg-[#14161b] p-2 rounded-xl border border-white/5">
                    <img
                      src={site.sender.logoUrl}
                      alt={site.sender.name}
                      className="w-5 h-5 object-contain"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = site.sender.faviconUrl;
                      }}
                    />
                    <Zap className="w-3.5 h-3.5 text-[#d7fe00]" />
                    <img
                      src={site.prospect.logoUrl}
                      alt={site.prospect.name}
                      className="w-5 h-5 object-contain"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = site.prospect.faviconUrl;
                      }}
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white leading-tight">
                      {site.sender.name} × {site.prospect.name}
                    </h4>
                    <span className="text-[11px] text-zinc-400 flex items-center gap-2 mt-1">
                      <span className="flex items-center gap-1">
                        <Eye className="w-3 h-3 text-zinc-500" /> {site.views || 0} views
                      </span>
                      <span className="flex items-center gap-1">
                        <Heart className="w-3 h-3 text-rose-400" /> {site.likes || 0} likes
                      </span>
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    onClick={() => handleCopyLink(site.slug)}
                    className="flex-1 sm:flex-initial px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-zinc-200 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    {copiedSlug === site.slug ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" /> Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" /> Copy Link
                      </>
                    )}
                  </button>

                  <Link
                    href={`/p/${site.slug}`}
                    onClick={onClose}
                    className="flex-1 sm:flex-initial px-3 py-1.5 rounded-lg bg-[#d7fe00] text-black font-extrabold text-xs flex items-center justify-center gap-1.5 hover:bg-[#c5ea00] transition-colors"
                  >
                    View Page <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

