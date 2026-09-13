'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Zap } from 'lucide-react';
import { CreateForm } from '@/components/CreateForm';
import { HeroGallery } from '@/components/HeroGallery';
import { LoginModal } from '@/components/LoginModal';
import { PricingModal } from '@/components/PricingModal';

export default function Home() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isPricingOpen, setIsPricingOpen] = useState(false);

  return (
    <div className="min-h-screen w-full max-w-full bg-[#0b0c0e] text-white flex flex-col justify-between relative overflow-x-hidden selection:bg-[#d7fe00] selection:text-black font-sans">
      {/* Header Logo matching Zapnote screenshot */}
      <header className="relative z-30 w-full px-6 py-6 lg:px-14 flex items-center justify-between shrink-0">
        <Link href="/" className="flex items-center gap-2 group cursor-pointer">
          <Zap className="w-7 h-7 text-[#d7fe00] fill-[#d7fe00]" />
          <span className="font-extrabold text-2xl tracking-tight text-white font-sans">
            zapnote
          </span>
        </Link>
      </header>

      {/* Main Hero Split Layout - Exact 1:1 Match to Zapnote Screenshot */}
      <main className="relative z-10 flex-1 px-6 lg:px-14 max-w-[1400px] mx-auto w-full flex items-center py-6 min-h-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
          {/* Left Column: Title, Subtitle, Inputs, Login link, & Footer */}
          <div className="lg:col-span-6 flex flex-col gap-5 relative z-10 max-w-[560px]">
            <h1 className="text-3xl sm:text-5xl lg:text-[56px] xl:text-[62px] font-extrabold text-white tracking-tight leading-[1.08]">
              Electrify outbound<br />
              with <em className="serif-italic font-normal text-white text-[1.04em]">co-branded</em><br />
              microsites
            </h1>

            <p className="text-sm sm:text-base text-zinc-400 max-w-[490px] leading-relaxed font-normal">
              Paste your website URL and your prospect&apos;s to create a zapnote in seconds. Publish up to 10 zapnotes free each month. Need more? Upgrade any time.
            </p>

            {/* Input Form: Your site | Their site | Generate Zapnote */}
            <CreateForm />

            {/* Already published? Login */}
            <div className="flex items-center gap-2 text-sm text-zinc-400 font-medium">
              <span>Already published?</span>
              <button
                onClick={() => setIsLoginOpen(true)}
                className="text-white underline decoration-dashed decoration-zinc-400 underline-offset-4 hover:decoration-[#d7fe00] hover:text-[#d7fe00] transition-colors cursor-pointer"
              >
                Login
              </button>
            </div>

            {/* Bottom Footer Links matching screenshot */}
            <div className="flex items-center gap-6 pt-4 text-xs sm:text-sm font-medium text-zinc-500 border-t border-white/5">
              <button
                onClick={() => setIsPricingOpen(true)}
                className="hover:text-zinc-300 transition-colors cursor-pointer"
              >
                Pricing
              </button>
              <button
                onClick={() => alert('Privacy Policy: We do not store or sell your private domain data.')}
                className="hover:text-zinc-300 transition-colors cursor-pointer"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => alert('Terms & Conditions: Standard SaaS terms apply for co-branded microsite generation.')}
                className="hover:text-zinc-300 transition-colors cursor-pointer"
              >
                Terms & Conditions
              </button>
            </div>
          </div>

          {/* Right Column on Desktop / Hidden on Mobile for pure sticky layout */}
          <div className="hidden lg:block relative w-full lg:w-auto h-[600px] lg:h-[720px] pointer-events-none lg:pointer-events-auto z-10 lg:col-span-6 overflow-hidden">
            <HeroGallery />
          </div>
        </div>
      </main>

      {/* Modals */}
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      <PricingModal isOpen={isPricingOpen} onClose={() => setIsPricingOpen(false)} />
    </div>
  );
}

