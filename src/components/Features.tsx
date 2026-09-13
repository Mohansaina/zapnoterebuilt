'use client';

import React from 'react';
import { Zap, Target, TrendingUp, Layers, ShieldCheck, CheckCircle } from 'lucide-react';

const FEATURES = [
  {
    icon: Zap,
    title: 'Instant Dual Branding',
    description: 'Auto-extracts logos, brand colors, fonts, and metadata from both sender and target domains in under 3 seconds.',
    color: 'text-[#e2f952]',
    bgColor: 'bg-[#e2f952]/10',
    borderColor: 'border-[#e2f952]/20',
  },
  {
    icon: Target,
    title: 'Bespoke Executive Copy',
    description: 'Synthesizes tailored value propositions, pain-point mappings, and custom pitches designed specifically for target executives.',
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-500/10',
    borderColor: 'border-cyan-500/20',
  },
  {
    icon: TrendingUp,
    title: '4x Conversion Lift',
    description: 'Outbound emails with co-branded landing pages deliver up to 4x higher CTR and meeting booking rates than standard text.',
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/20',
  },
  {
    icon: Layers,
    title: 'Multiple Layout Templates',
    description: 'Choose between Outbound Pitch Room, Executive Brief, or Interactive Product Showcase depending on your buyer persona.',
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/20',
  },
  {
    icon: CheckCircle,
    title: 'Interactive CTAs & Video',
    description: 'Embed Calendly meeting bookers, Loom video pitches, and real-time prospect feedback widgets right on the page.',
    color: 'text-rose-400',
    bgColor: 'bg-rose-500/10',
    borderColor: 'border-rose-500/20',
  },
  {
    icon: ShieldCheck,
    title: 'Cloudflare Turnstile Protected',
    description: 'Enterprise-grade human verification preventing spam bot submissions while maintaining sub-second edge rendering.',
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/20',
  },
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="w-full max-w-7xl mx-auto px-6 py-20 border-t border-white/10">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs font-bold text-[#e2f952] uppercase tracking-widest px-3 py-1 rounded-full bg-[#e2f952]/10 border border-[#e2f952]/20 inline-block mb-3">
          Built for Sales Teams & Outbound Reps
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-sans">
          Electrify your cold outbound with instant co-branding
        </h2>
        <p className="text-zinc-400 mt-4 text-base leading-relaxed">
          Generic sales emails get deleted. Co-branded microsites prove you built something custom specifically for them.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {FEATURES.map((feat, idx) => {
          const Icon = feat.icon;
          return (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#121620] border border-white/10 flex flex-col gap-4 hover:border-[#e2f952]/40 transition-all shadow-xl"
            >
              <div className={`w-12 h-12 rounded-xl ${feat.bgColor} flex items-center justify-center border ${feat.borderColor}`}>
                <Icon className={`w-6 h-6 ${feat.color}`} />
              </div>
              <h3 className="text-xl font-bold text-white">{feat.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{feat.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
