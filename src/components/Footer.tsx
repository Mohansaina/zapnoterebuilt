'use client';

import React from 'react';
import Link from 'next/link';
import { Zap } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-white/10 bg-[#07080a] py-12 px-6 lg:px-14 mt-auto">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs sm:text-sm text-zinc-400">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-[#d7fe00]/10 border border-[#d7fe00]/30 flex items-center justify-center">
            <Zap className="w-4 h-4 text-[#d7fe00] fill-[#d7fe00]" />
          </div>
          <span className="font-extrabold text-white text-base tracking-tight font-sans">zapnote</span>
          <span className="text-xs text-zinc-500">© {new Date().getFullYear()} Zapnote Inc. All rights reserved.</span>
        </div>

        <nav className="flex items-center gap-6 flex-wrap justify-center">
          <a href="#features" className="hover:text-[#d7fe00] transition-colors font-medium">
            Features
          </a>
          <a href="#pricing" className="hover:text-[#d7fe00] transition-colors font-medium">
            Pricing
          </a>
          <button
            onClick={() => alert('Privacy Policy: We do not store or sell your private domain data.')}
            className="hover:text-[#d7fe00] transition-colors font-medium cursor-pointer"
          >
            Privacy Policy
          </button>
          <button
            onClick={() => alert('Terms & Conditions: Standard SaaS terms apply for co-branded microsite generation.')}
            className="hover:text-[#d7fe00] transition-colors font-medium cursor-pointer"
          >
            Terms & Conditions
          </button>
        </nav>
      </div>
    </footer>
  );
};

