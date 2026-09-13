'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Zap, User } from 'lucide-react';
import { LoginModal } from './LoginModal';

export const Navbar = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <>
      <header className="relative z-30 w-full px-6 py-6 lg:px-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group cursor-pointer">
          <Zap className="w-7 h-7 text-[#e2f952] fill-[#e2f952] group-hover:scale-105 transition-transform duration-300" />
          <span className="font-extrabold text-2xl tracking-tight text-white font-sans">
            zapnote
          </span>
        </Link>

        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-400">
            <a href="#features" className="hover:text-[#e2f952] transition-colors">
              Features
            </a>
            <a href="#pricing" className="hover:text-[#e2f952] transition-colors">
              Pricing
            </a>
          </nav>

          <button
            onClick={() => setIsLoginOpen(true)}
            className="text-sm text-zinc-300 hover:text-white font-medium border-b border-dashed border-zinc-500 pb-0.5 hover:border-[#e2f952] transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <User className="w-4 h-4 text-[#e2f952]" />
            Login / Published
          </button>
        </div>
      </header>

      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
};
