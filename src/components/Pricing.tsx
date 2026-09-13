'use client';

import React from 'react';
import { Check, Zap } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="w-full max-w-7xl mx-auto px-6 py-20 border-t border-white/10">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs font-bold text-[#e2f952] uppercase tracking-widest px-3 py-1 rounded-full bg-[#e2f952]/10 border border-[#e2f952]/20 inline-block mb-3">
          Transparent Pricing
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-sans">
          Start for free, upgrade when you scale
        </h2>
        <p className="text-zinc-400 mt-4 text-base">
          Publish up to 10 co-branded Zapnotes every month at $0. No credit card required.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Starter Free Plan */}
        <div className="p-8 rounded-3xl bg-[#121620] border border-white/10 flex flex-col justify-between hover:border-white/20 transition-all shadow-xl">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-white">Starter Free</h3>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/5 text-zinc-300 border border-white/10">
                100% Free
              </span>
            </div>
            <div className="flex items-baseline gap-1 my-6">
              <span className="text-4xl font-extrabold text-white font-mono">$0</span>
              <span className="text-sm text-zinc-400">/ forever</span>
            </div>
            <ul className="flex flex-col gap-3 text-sm text-zinc-300 mb-8">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                10 Free Published Zapnotes / month
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                Auto Dual-Brand Scraping (Clearbit + Google)
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                Bespoke Executive Copy Generation
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                Calendly / Meeting Booker Embeds
              </li>
            </ul>
          </div>

          <a
            href="#"
            className="w-full py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-bold text-center transition-colors cursor-pointer border border-white/10 text-sm"
          >
            Get Started Free
          </a>
        </div>

        {/* Pro Plan */}
        <div className="relative p-8 rounded-3xl bg-[#121620] border-2 border-[#e2f952] flex flex-col justify-between shadow-2xl shadow-[#e2f952]/10">
          <div className="absolute -top-3.5 right-8 bg-[#e2f952] text-black text-xs font-extrabold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
            MOST POPULAR
          </div>

          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                Outbound Pro <Zap className="w-5 h-5 text-[#e2f952] fill-[#e2f952]" />
              </h3>
            </div>
            <div className="flex items-baseline gap-1 my-6">
              <span className="text-4xl font-extrabold text-white font-mono">$29</span>
              <span className="text-sm text-zinc-400">/ user / month</span>
            </div>
            <ul className="flex flex-col gap-3 text-sm text-zinc-200 mb-8">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#e2f952] shrink-0" />
                <strong>Unlimited</strong> Published Zapnotes
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#e2f952] shrink-0" />
                Custom Subdomains & Custom Branding
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#e2f952] shrink-0" />
                Batch CSV Generation (100s at once)
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#e2f952] shrink-0" />
                Real-Time Slack & Webhook Notifications
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#e2f952] shrink-0" />
                Full Analytics & View Heatmaps
              </li>
            </ul>
          </div>

          <a
            href="#"
            className="w-full py-3.5 rounded-xl bg-[#e2f952] text-black font-extrabold text-center hover:bg-[#d4f830] transition-all cursor-pointer text-sm"
          >
            Upgrade to Pro
          </a>
        </div>
      </div>
    </section>
  );
};
