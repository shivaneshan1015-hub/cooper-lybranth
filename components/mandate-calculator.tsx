"use client";

import React, { useState, useMemo } from "react";
import { 
  Calculator, 
  Clock, 
  Users, 
  MapPin, 
  Briefcase, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Sliders, 
  Layers, 
  Sparkles,
  Award
} from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

interface MandateCalculatorProps {
  onOpenConsultation: (initialData?: {
    serviceType?: string;
    industry?: string;
    location?: string;
    notes?: string;
  }) => void;
}

const SECTORS = [
  { id: "auto", name: "Automotive & Electric Mobility", baseTalent: 480 },
  { id: "aero", name: "Aerospace & Precision Defence", baseTalent: 210 },
  { id: "tool", name: "Machine Tool & Tool Design", baseTalent: 340 },
  { id: "robot", name: "Industrial Automation & Robotics", baseTalent: 290 },
  { id: "heavy", name: "Heavy Engineering & Infrastructure", baseTalent: 310 },
  { id: "process", name: "Chemical & Process Plants", baseTalent: 260 },
];

const PRACTICES = [
  { 
    id: "exec", 
    name: "Executive Search", 
    label: "Board & Plant Heads", 
    tat: "14 – 21 Days", 
    pod: "1 Principal Partner + 1 Executive Research Lead",
    guarantee: "90-Day Replacement & 3-Year Advisory"
  },
  { 
    id: "eng", 
    name: "Mid-to-Senior Engineering", 
    label: "Design, NPD & Quality Leads", 
    tat: "10 – 14 Days", 
    pod: "1 Domain Lead + 2 Engineering Specialists",
    guarantee: "90-Day Replacement Guarantee"
  },
  { 
    id: "rpo", 
    name: "Technical RPO & Ramp-Ups", 
    label: "Plant Ramp-Ups & Multi-Hire", 
    tat: "10 – 18 Days Rolling", 
    pod: "1 Embedded Account Manager + 4 Sourcing Pods",
    guarantee: "Strict SLA Cap & Milestone Dashboard"
  },
  { 
    id: "train", 
    name: "Technical Training & QMS", 
    label: "Workforce & Shop-Floor Skilling", 
    tat: "5 – 7 Days Curriculum Setup", 
    pod: "1 Master Technical Trainer + QMS Assessor",
    guarantee: "Pre-and-Post Competency Certification"
  },
];

const CORRIDORS = [
  { id: "gurgaon", name: "Gurgaon HQ & Delhi-NCR Corridor", factor: 1.3 },
  { id: "chennai", name: "Chennai & Sriperumbudur Automotive Hub", factor: 1.2 },
  { id: "pune", name: "Pune & Chakan-Bhosari Engineering Belt", factor: 1.25 },
  { id: "pantnagar", name: "Pantnagar & SIDCUL Industrial Zone", factor: 0.95 },
  { id: "panindia", name: "Multi-Plant Pan-India Footprint", factor: 1.6 },
];

const VOLUMES = [
  { id: "1-2", label: "1 – 2 Niche Specialists", count: 2, multiplier: 1 },
  { id: "3-10", label: "3 – 10 Plant Engineers", count: 7, multiplier: 1.2 },
  { id: "10-25", label: "10 – 25 Ramp-Up Team", count: 18, multiplier: 1.5 },
  { id: "25-50+", label: "25 – 50+ Greenfield Project", count: 40, multiplier: 2.1 },
];

export function MandateCalculator({ onOpenConsultation }: MandateCalculatorProps) {
  const [selectedSector, setSelectedSector] = useState(SECTORS[0].id);
  const [selectedPractice, setSelectedPractice] = useState(PRACTICES[1].id);
  const [selectedCorridor, setSelectedCorridor] = useState(CORRIDORS[0].id);
  const [selectedVolume, setSelectedVolume] = useState(VOLUMES[0].id);

  const sectorObj = useMemo(() => SECTORS.find(s => s.id === selectedSector) || SECTORS[0], [selectedSector]);
  const practiceObj = useMemo(() => PRACTICES.find(p => p.id === selectedPractice) || PRACTICES[0], [selectedPractice]);
  const corridorObj = useMemo(() => CORRIDORS.find(c => c.id === selectedCorridor) || CORRIDORS[0], [selectedCorridor]);
  const volumeObj = useMemo(() => VOLUMES.find(v => v.id === selectedVolume) || VOLUMES[0], [selectedVolume]);

  const estimatedTalentPool = useMemo(() => {
    return Math.round(sectorObj.baseTalent * corridorObj.factor * volumeObj.multiplier);
  }, [sectorObj, corridorObj, volumeObj]);

  const handleLockScope = () => {
    onOpenConsultation({
      serviceType: practiceObj.name,
      industry: sectorObj.name,
      location: corridorObj.name,
      notes: `Scope estimate: ${volumeObj.label}. Target corridor: ${corridorObj.name}. Calculated pool depth: ~${estimatedTalentPool}+ mapped profiles. Target turnaround SLA: ${practiceObj.tat}.`,
    });
  };

  return (
    <section id="mandate-calculator" className="py-16 sm:py-24 bg-white border-b border-slate-200 relative overflow-hidden">
      {/* Background Accent Grid */}
      <div className="absolute inset-0 blueprint-subtle-grid pointer-events-none opacity-60" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#FFF2EE] text-[#F45120] text-xs font-bold font-mono uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-[#F45120]/20">
            <Calculator className="w-4 h-4 text-[#F45120]" />
            <span>Interactive Mandate Scoping Engine</span>
          </div>
          
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#17145E] tracking-tight leading-tight">
            Scope Your Engineering Hiring Mandate in Seconds
          </h2>
          
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Dial in your target manufacturing corridor, technical discipline, and recruitment volume. Review calibrated SLA turnaround times, dedicated pod composition, and candidate pool depth.
          </p>
        </div>

        {/* Calculator Interactive Board */}
        <div className="bg-[#F8FAFC] border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column (Left 7 Cols) */}
          <div className="lg:col-span-7 space-y-7">
            
            {/* 1. Target Practice */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-600 flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <Briefcase className="w-3.5 h-3.5 text-[#17145E]" />
                  <span>1. Select Practice Discipline</span>
                </span>
                <span className="text-[#F45120] font-mono text-[11px] font-bold">REQUIRED</span>
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {PRACTICES.map((p) => {
                  const isSel = p.id === selectedPractice;
                  return (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setSelectedPractice(p.id)}
                      className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                        isSel
                          ? "bg-white border-[#17145E] shadow-xs ring-1 ring-[#17145E]"
                          : "bg-white/60 border-slate-200 hover:bg-white text-slate-700"
                      }`}
                    >
                      <div className="text-xs font-bold text-[#17145E]">{p.name}</div>
                      <div className="text-[11px] text-slate-500 font-medium truncate">{p.label}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Target Sector */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-600 flex items-center gap-2">
                <Layers className="w-3.5 h-3.5 text-[#17145E]" />
                <span>2. Industrial Engineering Sector</span>
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {SECTORS.map((s) => {
                  const isSel = s.id === selectedSector;
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setSelectedSector(s.id)}
                      className={`text-left p-3 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                        isSel
                          ? "bg-[#17145E] text-white border-[#17145E] shadow-2xs"
                          : "bg-white border-slate-200 text-slate-700 hover:border-slate-300"
                      }`}
                    >
                      {s.name}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Target Manufacturing Corridor */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-600 flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#17145E]" />
                <span>3. Manufacturing Plant Corridor</span>
              </label>

              <div className="grid grid-cols-1 gap-2">
                {CORRIDORS.map((c) => {
                  const isSel = c.id === selectedCorridor;
                  return (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => setSelectedCorridor(c.id)}
                      className={`flex items-center justify-between p-3 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                        isSel
                          ? "bg-white border-[#F45120] text-[#17145E] shadow-xs ring-1 ring-[#F45120]"
                          : "bg-white border-slate-200 text-slate-700 hover:border-slate-300"
                      }`}
                    >
                      <span>{c.name}</span>
                      {isSel && (
                        <span className="w-2 h-2 rounded-full bg-[#F45120]" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 4. Mandate Volume */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-600 flex items-center gap-2">
                <Users className="w-3.5 h-3.5 text-[#17145E]" />
                <span>4. Positions to Fill</span>
              </label>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {VOLUMES.map((v) => {
                  const isSel = v.id === selectedVolume;
                  return (
                    <button
                      key={v.id}
                      type="button"
                      onClick={() => setSelectedVolume(v.id)}
                      className={`text-center p-3 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                        isSel
                          ? "bg-[#17145E] text-white border-[#17145E]"
                          : "bg-white border-slate-200 text-slate-700 hover:border-slate-300"
                      }`}
                    >
                      {v.label}
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Results Column (Right 5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#17145E] text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6 border border-[#242078] relative overflow-hidden">
              
              {/* Corner Watermark */}
              <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
                <Calculator className="w-32 h-32 text-white" />
              </div>

              {/* Header */}
              <div className="space-y-1 relative z-10 border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#FFD982] animate-pulse" />
                  <span className="cad-spec-chip text-[#FFD982]">
                    MANDATE SCOPE SPECIFICATION
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                  Estimated Sourcing Metrics
                </h3>
              </div>

              {/* Dynamic Results Grid */}
              <div className="space-y-4 relative z-10">
                
                {/* 1. Turnaround SLA */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 space-y-1">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-white/60 flex items-center justify-between">
                    <span>Calibrated Shortlist SLA</span>
                    <Clock className="w-3.5 h-3.5 text-[#FFD982]" />
                  </div>
                  <div className="text-2xl font-extrabold text-white font-mono">
                    {practiceObj.tat}
                  </div>
                  <div className="text-xs text-white/70">
                    Governed by CLWP milestone time-stamps
                  </div>
                </div>

                {/* 2. Mapped Talent Pool */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 space-y-1">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-white/60 flex items-center justify-between">
                    <span>Mapped Engineering Pool</span>
                    <Users className="w-3.5 h-3.5 text-[#FFD982]" />
                  </div>
                  <div className="text-2xl font-extrabold text-[#FFD982] font-mono">
                    ~{estimatedTalentPool.toLocaleString()}+ Profiles
                  </div>
                  <div className="text-xs text-white/70">
                    Active candidates across {corridorObj.name}
                  </div>
                </div>

                {/* 3. Pod Assignment */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 space-y-1.5">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-white/60">
                    Dedicated Sourcing Pod
                  </div>
                  <div className="text-xs font-bold text-white">
                    {practiceObj.pod}
                  </div>
                  <div className="text-xs text-white/70">
                    {practiceObj.guarantee}
                  </div>
                </div>

              </div>

              {/* Trust Safeguards */}
              <div className="space-y-2 pt-2 border-t border-white/10 text-xs text-white/80 relative z-10">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FFD982] flex-shrink-0" />
                  <span>Zero Fee to Candidates · Strict Anti-Fraud Policy</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FFD982] flex-shrink-0" />
                  <span>ISO 9001:2008 &amp; HASOW Germany Quality Standards</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2 relative z-10">
                <button
                  type="button"
                  onClick={handleLockScope}
                  className="w-full bg-[#F45120] hover:bg-[#D83C0D] text-white font-extrabold text-sm py-4 px-6 rounded-2xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer group"
                >
                  <span>Lock Scope &amp; Brief Mandate</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>

            <div className="text-center">
              <span className="text-[11px] font-mono text-slate-500">
                Direct Desk Assistance: {COMPANY_INFO.primaryPhone} · {COMPANY_INFO.primaryEmail}
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
