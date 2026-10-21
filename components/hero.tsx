"use client";

import React from "react";
import Image from "next/image";
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Award, 
  Globe2, 
  Users, 
  Factory,
  ChevronRight
} from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

interface HeroProps {
  onOpenConsultation: () => void;
}

export function Hero({ onOpenConsultation }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#F8FAFC] to-white pt-10 sm:pt-14 pb-16 lg:pb-24 border-b border-slate-200">
      {/* Background Architectural Grid Pattern */}
      {/* Subtle CAD Blueprint Grid Overlay */}
      <div 
        className="absolute inset-0 blueprint-subtle-grid pointer-events-none opacity-40"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Top Pill / Alliance Badge */}
            <div className="inline-flex items-center gap-2.5 bg-white border border-slate-200 shadow-xs px-3.5 py-1.5 rounded-full">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F45120] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F45120]"></span>
              </span>
              <span className="text-xs font-semibold text-[#17145E]">
                Est. 2001 · Strategic Alliance with Germany&apos;s HASOW
              </span>
              <span className="hidden sm:inline-block text-[10px] font-mono text-[#F45120] font-bold bg-[#FFF2EE] px-2 py-0.5 rounded">
                DIN ISO 9001:2008
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold text-[#17145E] leading-[1.12] tracking-tight">
                Engineering Talent.{" "}
                <span className="text-[#F45120] block sm:inline">Workforce Solutions.</span>{" "}
                <span className="block text-[#17145E]">Future-Ready Skills.</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-[#292A35]/90 leading-relaxed max-w-2xl font-normal">
                Connecting businesses with skilled engineering professionals and helping develop the technical capabilities needed for a changing industrial landscape.
              </p>
            </div>

            {/* Conversion CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                id="hero-discuss-cta"
                type="button"
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-2.5 bg-[#F45120] hover:bg-[#D83C0D] text-white font-bold px-7 py-4 rounded-xl text-base shadow-md hover:shadow-lg transition-all active:scale-[0.98] cursor-pointer group"
              >
                <span>Discuss Your Hiring Needs</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-[#17145E] font-bold px-6 py-4 rounded-xl text-base border-2 border-slate-200 hover:border-[#17145E]/40 transition-all text-center shadow-xs"
              >
                <span>Explore Our Services</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            </div>

            {/* Core Verification Badges */}
            <div className="pt-2 grid grid-cols-2 sm:grid-cols-3 gap-3 border-t border-slate-200">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <ShieldCheck className="w-4 h-4 text-[#17145E] flex-shrink-0" />
                <span>ISO 9001:2008 Certified</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <Globe2 className="w-4 h-4 text-[#F45120] flex-shrink-0" />
                <span>German Tooling Alliance</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-[#17145E] flex-shrink-0" />
                <span>100% Digitised CLWP</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Trust Visual Composition & Corporate Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-white">
              {/* Authentic Engineering Photography */}
              <div className="relative h-72 sm:h-80 w-full">
                <Image
                  src="/images/hero-engineering.jpg"
                  alt="Cooper Lybranth engineering talent and technical workplace solutions"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#17145E]/90 via-[#17145E]/30 to-transparent" />
                
                {/* Floating Badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-bold text-[#17145E] shadow-sm flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#F45120]" />
                  <span>Public Limited Consultancy</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-[11px] font-semibold text-[#FFD982] uppercase tracking-wider">
                    Engineering Economy Specialism
                  </div>
                  <div className="text-base sm:text-lg font-bold leading-snug">
                    Precision Hiring for Automotive, Aerospace, Power & R&D
                  </div>
                </div>
              </div>

              {/* The Cooper Lybranth Index Summary */}
              <div className="p-6 bg-[#F8FAFC] border-t border-slate-200 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold tracking-wider uppercase text-[#17145E]">
                    The Cooper Lybranth Index
                  </span>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-[#17145E]/10 text-[#17145E]">
                    Est. 2001
                  </span>
                </div>

                <ul className="space-y-2.5 text-xs">
                  <li className="flex items-center justify-between pb-2 border-b border-slate-200/80">
                    <span className="text-slate-600 font-medium">Proprietary Workflow</span>
                    <strong className="text-[#17145E] font-bold">CLWP Engine · 100% Digitised</strong>
                  </li>
                  <li className="flex items-center justify-between pb-2 border-b border-slate-200/80">
                    <span className="text-slate-600 font-medium">Candidate Pre-Screening</span>
                    <strong className="text-[#17145E] font-bold">KSS & 6Ps Technical Evaluation</strong>
                  </li>
                  <li className="flex items-center justify-between pb-2 border-b border-slate-200/80">
                    <span className="text-slate-600 font-medium">Quality Governance</span>
                    <strong className="text-[#17145E] font-bold">The 4Rs & ISO 9001 Audits</strong>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-slate-600 font-medium">Technical Training</span>
                    <strong className="text-[#F45120] font-bold">50+ Modular Courses (EN/HI)</strong>
                  </li>
                </ul>

                <button
                  type="button"
                  onClick={onOpenConsultation}
                  className="w-full text-center text-xs font-bold text-[#17145E] hover:text-[#F45120] bg-white border border-slate-200 hover:border-slate-300 p-2.5 rounded-lg transition-colors shadow-2xs block"
                >
                  Initiate Search Mandate →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Four Core Corporate Metrics */}
        <div className="mt-14 sm:mt-18 pt-10 border-t border-slate-200 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {COMPANY_INFO.stats.map((stat, i) => (
            <div key={i} className="space-y-1">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#17145E] tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-slate-800">
                {stat.label}
              </div>
              <div className="text-xs text-slate-500">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
