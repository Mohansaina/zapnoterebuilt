'use client';

import React from 'react';
import Link from 'next/link';
import { Zap } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-white/10 bg-slate-950 py-12 px-6 lg:px-16 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-slate-400">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
            <Zap className="w-4 h-4 text-amber-400 fill-amber-400" />
          </div>
          <span className="font-bold text-white text-base">zapnote rebuild</span>
          <span className="text-xs text-slate-500">© {new Date().getFullYear()} All rights reserved.</span>
        </div>

        <nav className="flex items-center gap-6">
          <a href="#features" className="hover:text-amber-400 transition-colors">
            Features
          </a>
          <a href="#pricing" className="hover:text-amber-400 transition-colors">
            Pricing
          </a>
          <Link href="/" className="hover:text-amber-400 transition-colors">
            Privacy Policy
          </Link>
          <Link href="/" className="hover:text-amber-400 transition-colors">
            Terms of Service
          </Link>
        </nav>
      </div>
    </footer>
  );
};
