'use client';

import React from 'react';
import Link from 'next/link';
import { Download, Zap, CheckCircle2, Calendar } from 'lucide-react';

export const HeroGallery: React.FC = () => {
  return (
    <div className="relative w-full h-[760px] lg:h-[860px] overflow-hidden rounded-3xl bg-[#0b0c0e] perspective-stage">
      {/* Top and Bottom Seamless Fade Gradients */}
      <div className="absolute top-0 inset-x-0 h-44 bg-gradient-to-b from-[#0b0c0e] via-[#0b0c0e]/95 to-transparent z-30 pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-44 bg-gradient-to-t from-[#0b0c0e] via-[#0b0c0e]/95 to-transparent z-30 pointer-events-none" />

      {/* Tilted 3D Stage Container matching Zapnote.io exact angle */}
      <div className="tilted-card-grid grid grid-cols-12 gap-5 p-2 h-[155%] -translate-y-16 translate-x-4">
        
        {/* Column 1 (Cols 1-5): Card 1 - Stats, Metrics & Case Study Download (Moving Upward) */}
        <div className="col-span-5 flex flex-col gap-8 animate-marquee-up">
          {[1, 2].map((loopIdx) => (
            <React.Fragment key={loopIdx}>
              <Link
                href="/p/heyo-intel"
                className="w-full p-6 rounded-2xl bg-[#12141a] hover:bg-[#161922] border border-white/10 hover:border-[#d7fe00]/50 shadow-2xl flex flex-col gap-6 relative overflow-hidden transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-[11px] font-semibold text-zinc-400">— Prepared for <strong className="text-white font-bold group-hover:text-[#d7fe00]">Intel</strong></span>
                  <Zap className="w-4 h-4 text-[#d7fe00] fill-[#d7fe00]" />
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-white leading-snug mb-2 group-hover:text-[#d7fe00] transition-colors">
                    Accelerating Outbound Conversion Rate
                  </h3>
                  <p className="text-[11px] text-zinc-400 leading-relaxed">
                    Empowering enterprise sales teams with instant co-branded microsites.
                  </p>
                </div>

                {/* Section: What that looks like in practice */}
                <div className="flex flex-col gap-2">
                  <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider">What that looks like in practice</span>
                  
                  <div className="p-3 rounded-xl bg-black/60 border border-white/5 flex flex-col">
                    <span className="text-xl font-extrabold text-[#d7fe00] font-mono">8-12%</span>
                    <span className="text-[10px] text-zinc-400">Average fuel cost reduction in first 6 months</span>
                  </div>

                  <div className="p-3 rounded-xl bg-black/60 border border-white/5 flex flex-col">
                    <span className="text-xl font-extrabold text-white font-mono">23%</span>
                    <span className="text-[10px] text-zinc-400">Drop in preventable breakdowns (Heartland Foods)</span>
                  </div>

                  <div className="p-3 rounded-xl bg-black/60 border border-white/5 flex flex-col">
                    <span className="text-xl font-extrabold text-[#d7fe00] font-mono">0</span>
                    <span className="text-[10px] text-zinc-400">DOT compliance violations across our customers in 2025</span>
                  </div>
                </div>

                {/* Section: The proof is in the pudding */}
                <div className="flex flex-col gap-2.5 pt-3 border-t border-white/10">
                  <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider">The proof is in the pudding</span>
                  
                  <div className="p-3 rounded-xl bg-black/80 border border-white/10 flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-white">Download Case Study</span>
                      <span className="text-[10px] text-zinc-500">heyo_case_study.pdf / 2.3 MB</span>
                    </div>
                    <div className="w-7 h-7 rounded-lg bg-[#00aeef] text-black flex items-center justify-center">
                      <Download className="w-3.5 h-3.5 text-black" />
                    </div>
                  </div>
                </div>
              </Link>
            </React.Fragment>
          ))}
        </div>

        {/* Column 2 (Cols 6-7): Middle Vertical Strip of Stacked Brand Logo Circles (Moving Downward) */}
        <div className="col-span-2 flex flex-col gap-4 animate-marquee-down items-center">
          {[...Array(8)].map((_, i) => (
            <React.Fragment key={i}>
              {/* Twitch Circle */}
              <Link href="/p/intel-twitch" className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#9146ff] flex items-center justify-center shadow-2xl border-2 border-white/20 hover:scale-110 transition-transform">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white fill-current" viewBox="0 0 24 24">
                  <path d="M11.571 4.714h1.715v5.143H11.571V4.714zm4.715 0H18v5.143h-1.714V4.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0H6zm14.571 11.143l-3.428 3.429h-3.429l-3 3v-3H6.857V1.714h13.714v9.429z"/>
                </svg>
              </Link>

              {/* Intel Circle */}
              <Link href="/p/heyo-intel" className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#0071c5] flex items-center justify-center shadow-2xl border-2 border-white/20 hover:scale-110 transition-transform">
                <span className="text-white font-extrabold text-lg sm:text-xl tracking-tighter italic">intel</span>
              </Link>
            </React.Fragment>
          ))}
        </div>

        {/* Column 3 (Cols 8-12): Card 2 - Headline, Purple Pattern Banner & Bullets (Moving Upward) */}
        <div className="col-span-5 flex flex-col gap-8 animate-marquee-up">
          {[1, 2].map((loopIdx) => (
            <React.Fragment key={loopIdx}>
              <Link
                href="/p/intel-twitch"
                className="w-full p-6 rounded-2xl bg-[#12141a] hover:bg-[#161922] border border-white/10 hover:border-[#d7fe00]/50 shadow-2xl flex flex-col gap-5 relative overflow-hidden transition-all duration-300 group cursor-pointer"
              >
                
                {/* Card Header Top */}
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-[11px] font-semibold text-zinc-400">— Prepared for <strong className="text-white font-bold group-hover:text-[#d7fe00]">Twitch</strong></span>
                  <div className="flex items-center gap-1.5">
                    <span className="px-2.5 py-1 rounded-md bg-[#00aeef] text-black font-extrabold text-[10px] flex items-center gap-1 shadow">
                      <Calendar className="w-3 h-3 fill-black text-black" /> Schedule Chat
                    </span>
                  </div>
                </div>

                {/* Header Content & Purple Banner Box */}
                <div className="grid grid-cols-12 gap-3 items-start">
                  <div className="col-span-8 flex flex-col gap-1.5">
                    <h3 className="text-lg sm:text-xl font-extrabold text-white leading-snug group-hover:text-[#d7fe00] transition-colors">
                      We just wanted to introduce ourselves and say, &quot;Hi there&quot;
                    </h3>
                    <p className="text-[11px] text-zinc-400 leading-relaxed">
                      We&apos;re huge fans. We thought it was worth reaching out to see if you&apos;d be interested in connecting.
                    </p>
                  </div>

                  <div className="col-span-4 h-28 rounded-xl bg-gradient-to-br from-[#7928ca] to-[#0071c5] border border-white/10 p-2 relative overflow-hidden flex flex-col justify-end">
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.15)_50%,transparent_75%)] bg-[length:16px_16px]" />
                    <span className="text-[9px] font-bold text-white relative z-10">Live Deck</span>
                  </div>
                </div>

                {/* Bullet Points */}
                <div className="p-3.5 rounded-xl bg-black/50 border border-white/10 flex flex-col gap-2">
                  <span className="text-[10px] font-bold text-white uppercase tracking-wider">What changes for a platform like yours</span>
                  
                  <div className="flex flex-col gap-2 text-[10px] text-zinc-300">
                    <div className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#d7fe00] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block font-bold">Hardware AV1 Encoding</strong>
                        <span className="text-zinc-400 text-[9px]">42% CPU savings per broadcast.</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#d7fe00] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block font-bold">Sub-100ms Ingest</strong>
                        <span className="text-zinc-400 text-[9px]">Global Xeon 6 edge compute nodes.</span>
                      </div>
                    </div>
                  </div>
                </div>

              </Link>
            </React.Fragment>
          ))}
        </div>

      </div>
    </div>
  );
};

