'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Zap } from 'lucide-react';
import { CreateForm } from '@/components/CreateForm';
import { HeroGallery } from '@/components/HeroGallery';
import { Features } from '@/components/Features';
import { Pricing } from '@/components/Pricing';
import { Footer } from '@/components/Footer';
import { LoginModal } from '@/components/LoginModal';
import { PricingModal } from '@/components/PricingModal';

export default function Home() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isPricingOpen, setIsPricingOpen] = useState(false);

  return (
    <div className="min-h-screen w-full max-w-full bg-[#0b0c0e] text-white flex flex-col justify-between relative overflow-x-hidden selection:bg-[#d7fe00] selection:text-black font-sans">
      {/* Header Logo */}
      <header className="relative z-30 w-full px-4 py-4 sm:px-6 sm:py-6 lg:px-14 flex items-center justify-between shrink-0">
        <Link href="/" className="flex items-center gap-2 group cursor-pointer">
          <Zap className="w-6 h-6 sm:w-7 sm:h-7 text-[#d7fe00] fill-[#d7fe00]" />
          <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-white font-sans">
            zapnote
          </span>
        </Link>

        {/* Header Right Action Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsPricingOpen(true)}
            className="hidden sm:inline-block text-xs font-semibold text-zinc-300 hover:text-white transition-colors cursor-pointer"
          >
            Pricing
          </button>
          <button
            onClick={() => setIsLoginOpen(true)}
            className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-zinc-200 transition-colors cursor-pointer"
          >
            My Zapnotes
          </button>
        </div>
      </header>

      {/* Main Hero Split Layout */}
      <main className="relative z-10 flex-1 px-4 sm:px-6 lg:px-14 max-w-[1400px] mx-auto w-full flex flex-col lg:flex-row items-center py-4 sm:py-6 min-h-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
          {/* Left Column: Title, Subtitle, Inputs, Login link, & Footer */}
          <div className="lg:col-span-6 flex flex-col gap-4 sm:gap-5 relative z-10 w-full max-w-full lg:max-w-[560px]">
            <h1 className="text-[32px] sm:text-5xl lg:text-[56px] xl:text-[62px] font-extrabold text-white tracking-tight leading-[1.1] sm:leading-[1.08]">
              Electrify outbound<br />
              with <em className="serif-italic font-normal text-white text-[1.04em]">co-branded</em><br />
              microsites
            </h1>

            <p className="text-xs sm:text-base text-zinc-400 max-w-[490px] leading-relaxed font-normal">
              Paste your website URL and your prospect&apos;s to create a zapnote in seconds. Publish up to 10 zapnotes free each month. Need more? Upgrade any time.
            </p>

            {/* Input Form: Your site | Their site | Generate Zapnote */}
            <CreateForm />

            {/* Already published? Login */}
            <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-400 font-medium pt-1">
              <span>Already published?</span>
              <button
                onClick={() => setIsLoginOpen(true)}
                className="text-white underline decoration-dashed decoration-zinc-400 underline-offset-4 hover:decoration-[#d7fe00] hover:text-[#d7fe00] transition-colors cursor-pointer"
              >
                Login to view decks
              </button>
            </div>
          </div>

          {/* Right Column: Hero Showcase Gallery */}
          <div className="relative w-full h-[420px] sm:h-[540px] lg:h-[720px] z-10 lg:col-span-6 overflow-hidden rounded-3xl mt-4 lg:mt-0">
            <HeroGallery />
          </div>
        </div>
      </main>

      {/* Features Section */}
      <Features />

      {/* Pricing Section */}
      <Pricing />

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      <PricingModal isOpen={isPricingOpen} onClose={() => setIsPricingOpen(false)} />
    </div>
  );
}



