'use client';

import React from 'react';
import { X, Check, Zap } from 'lucide-react';

interface PricingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PricingModal: React.FC<PricingModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl rounded-3xl bg-[#14161c] border border-white/15 p-6 sm:p-8 shadow-2xl overflow-hidden flex flex-col gap-6 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <Zap className="w-6 h-6 text-[#d7fe00] fill-[#d7fe00]" />
            <div>
              <h3 className="text-xl font-bold text-white">Zapnote Pricing Plans</h3>
              <p className="text-xs text-zinc-400">Start free with 10 Zapnotes/month. Upgrade anytime.</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-zinc-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Starter Free */}
          <div className="p-6 rounded-2xl bg-[#0b0c0e] border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-lg font-bold text-white">Starter Free</h4>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-white/10 text-zinc-300">
                  FREE
                </span>
              </div>
              <div className="text-3xl font-extrabold text-white my-4 font-mono">$0</div>
              <ul className="flex flex-col gap-2.5 text-xs text-zinc-300 mb-6">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" /> 10 Zapnotes published / mo
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" /> Auto brand asset scraping
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" /> Meeting scheduler integration
                </li>
              </ul>
            </div>
            <button
              onClick={onClose}
              className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs"
            >
              Current Plan
            </button>
          </div>

          {/* Outbound Pro */}
          <div className="p-6 rounded-2xl bg-[#0b0c0e] border-2 border-[#d7fe00] flex flex-col justify-between relative shadow-xl shadow-[#d7fe00]/10">
            <div className="absolute -top-3 right-4 bg-[#d7fe00] text-black text-[10px] font-extrabold px-2.5 py-0.5 rounded-full">
              PRO
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-lg font-bold text-white flex items-center gap-1.5">
                  Outbound Pro <Zap className="w-4 h-4 text-[#d7fe00] fill-[#d7fe00]" />
                </h4>
              </div>
              <div className="text-3xl font-extrabold text-white my-4 font-mono">
                $29 <span className="text-xs font-normal text-zinc-400">/ mo</span>
              </div>
              <ul className="flex flex-col gap-2.5 text-xs text-zinc-200 mb-6">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#d7fe00]" /> Unlimited Zapnotes
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#d7fe00]" /> Custom subdomain hosting
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#d7fe00]" /> Batch CSV generation
                </li>
              </ul>
            </div>
            <button
              onClick={() => alert('Upgrade to Pro: Stripe Checkout integrated.')}
              className="w-full py-2.5 rounded-xl bg-[#d7fe00] hover:bg-[#c5ea00] text-black font-extrabold text-xs cursor-pointer"
            >
              Upgrade to Pro
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
