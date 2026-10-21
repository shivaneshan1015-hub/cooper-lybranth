import React from "react";
import { Users, Briefcase, GraduationCap, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

interface TrustPropositionProps {
  onOpenConsultation: () => void;
}

export function TrustProposition({ onOpenConsultation }: TrustPropositionProps) {
  return (
    <section id="overview" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F45120]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F45120]" />
            Core Value Proposition
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#17145E] tracking-tight leading-tight">
            Connecting Engineering Expertise with Business Needs
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Addressing engineering workforce challenges requires more than resume distribution. Cooper Lybranth combines sector-trained recruitment consultants, scalable on-site workforce solutions, and accredited industrial training to build sustainable technical capability.
          </p>
        </div>

        {/* Three Restrained Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pillar 1: Engineering Talent */}
          <div className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-8 space-y-5 hover:border-[#17145E]/30 transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#17145E] shadow-2xs">
                <Users className="w-6 h-6 text-[#17145E]" />
              </div>
              <h3 className="text-xl font-bold text-[#17145E]">
                Engineering Talent
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Executive search and specialist technical recruitment led by consultants from engineering backgrounds. We evaluate candidates on tolerances, GD&amp;T, cycle times, and shop-floor maturity before shortlisting.
              </p>
            </div>
            <ul className="space-y-2 pt-4 border-t border-slate-200/80 text-xs text-slate-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#F45120]" />
                <span>Board, CXO &amp; Plant Operations Leadership</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#F45120]" />
                <span>Mid-to-Senior CAD/CAM, R&amp;D &amp; QA Engineers</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#F45120]" />
                <span>Proprietary 6Ps Candidate Pre-Screening</span>
              </li>
            </ul>
          </div>

          {/* Pillar 2: Workforce Solutions */}
          <div className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-8 space-y-5 hover:border-[#17145E]/30 transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#F45120] shadow-2xs">
                <Briefcase className="w-6 h-6 text-[#F45120]" />
              </div>
              <h3 className="text-xl font-bold text-[#17145E]">
                Workforce Solutions
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Scalable Recruitment Process Outsourcing (RPO) and embedded hiring pods for greenfield factory setups, technical ramp-ups, and high-volume manufacturing expansions with guaranteed SLA delivery.
              </p>
            </div>
            <ul className="space-y-2 pt-4 border-t border-slate-200/80 text-xs text-slate-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#17145E]" />
                <span>Embedded On-Site &amp; Hybrid Talent Pods</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#17145E]" />
                <span>Greenfield Plant Hiring with Turnaround SLAs</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#17145E]" />
                <span>100% Digitised CLWP Milestone Engine</span>
              </li>
            </ul>
          </div>

          {/* Pillar 3: Technical Training */}
          <div className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-8 space-y-5 hover:border-[#17145E]/30 transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#17145E] shadow-2xs">
                <GraduationCap className="w-6 h-6 text-[#17145E]" />
              </div>
              <h3 className="text-xl font-bold text-[#17145E]">
                Technical Training
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Over 50 modular behavioural and technical training programmes designed specifically for engineering workflows. Delivered in English for corporate management and in Hindi for shop-floor operators.
              </p>
            </div>
            <ul className="space-y-2 pt-4 border-t border-slate-200/80 text-xs text-slate-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#F45120]" />
                <span>Total Productive Maintenance (TPM) &amp; 5S</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#F45120]" />
                <span>Root Cause Analysis (RCA) &amp; 8D Problem Solving</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#F45120]" />
                <span>Bilingual Shop-Floor Modules (English / Hindi)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Verified Enterprise Clients Strip */}
        <div className="pt-8 border-t border-slate-200 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Trusted by 350+ Engineering &amp; Automotive Enterprises Nationwide
            </p>
            <span className="text-xs text-slate-500">
              Representative clients served across 24 years
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {COMPANY_INFO.verifiedClients.map((client, idx) => (
              <div
                key={idx}
                className="bg-[#F8FAFC] border border-slate-200 rounded-xl py-3 px-4 text-center font-bold text-xs text-[#17145E] hover:border-[#17145E]/40 hover:bg-white transition-all shadow-2xs"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
