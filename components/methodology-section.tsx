"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  GitBranch, 
  Cpu, 
  CheckCircle, 
  Compass, 
  Quote, 
  Check, 
  ShieldCheck, 
  Clock,
  ArrowRight,
  FileSpreadsheet,
  FileCheck2,
  Users2,
  CalendarCheck,
  ChevronRight,
  Sparkles,
  SlidersHorizontal
} from "lucide-react";
import { 
  METHODOLOGY_FRAMEWORK, 
  CLIENT_TESTIMONIALS, 
  CLWP_PIPELINE_STAGES,
  PipelineStage 
} from "@/data/company";

export function MethodologySection() {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const activeStage: PipelineStage = CLWP_PIPELINE_STAGES[activeStageIndex];

  const getPillarIcon = (acronym: string) => {
    switch (acronym) {
      case "CLWP":
        return <GitBranch className="w-5 h-5 text-[#F45120]" />;
      case "KSS":
        return <Cpu className="w-5 h-5 text-[#17145E]" />;
      case "The 6 Ps":
        return <CheckCircle className="w-5 h-5 text-[#F45120]" />;
      case "The 4 Rs":
        return <Compass className="w-5 h-5 text-[#17145E]" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-[#17145E]" />;
    }
  };

  const getStageDocIcon = (index: number) => {
    switch (index) {
      case 0:
        return <SlidersHorizontal className="w-4 h-4 text-[#F45120]" />;
      case 1:
        return <FileSpreadsheet className="w-4 h-4 text-[#17145E]" />;
      case 2:
        return <FileCheck2 className="w-4 h-4 text-[#F45120]" />;
      case 3:
        return <ShieldCheck className="w-4 h-4 text-emerald-600" />;
      default:
        return <FileCheck2 className="w-4 h-4 text-[#17145E]" />;
    }
  };

  return (
    <section id="methodology" className="py-16 sm:py-24 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#17145E]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#17145E]" />
            Why Cooper Lybranth
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#17145E] tracking-tight leading-tight">
            Proprietary Frameworks Built from the Manufacturing Floor Up
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Most consultancies adapt generic recruitment processes to engineering. We did the opposite — we built our methodology around manufacturing cycles, tooling tolerances, and plant operations.
          </p>
        </div>

        {/* FEATURE 1: Interactive CLWP 4-Stage Sourcing Pipeline Stepper */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-md overflow-hidden space-y-0">
          
          {/* Stepper Header Bar */}
          <div className="bg-[#17145E] text-white p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FFD982] animate-pulse" />
                <span className="cad-spec-chip text-[#FFD982]">
                  CLWP · SOURCING PIPELINE SLA
                </span>
                <span className="hidden sm:inline-block text-white/40 text-xs font-mono">
                  [ISO 9001:2008 CERTIFIED PROCESS]
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                The 4-Stage Digitised Sourcing Workflow
              </h3>
            </div>
            <div className="text-xs text-white/70 max-w-sm font-normal">
              Click through the execution stages to inspect the technical audit milestones and plant deliverables at each step.
            </div>
          </div>

          {/* Stepper Tabs Bar */}
          <div className="grid grid-cols-2 lg:grid-cols-4 border-b border-slate-200 bg-slate-50">
            {CLWP_PIPELINE_STAGES.map((stage, idx) => {
              const isActive = idx === activeStageIndex;
              return (
                <button
                  key={stage.step}
                  type="button"
                  onClick={() => setActiveStageIndex(idx)}
                  className={`text-left p-4 sm:p-5 transition-all relative border-r last:border-r-0 border-slate-200 cursor-pointer ${
                    isActive 
                      ? "bg-white border-b-2 border-b-[#F45120] shadow-2xs" 
                      : "hover:bg-slate-100/70 text-slate-600"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className={`text-[11px] font-extrabold font-mono tracking-wider px-2 py-0.5 rounded ${
                      isActive 
                        ? "bg-[#17145E] text-white" 
                        : "bg-slate-200 text-slate-700"
                    }`}>
                      {stage.phaseNumber}
                    </span>
                    <span className="text-[11px] font-mono font-bold text-slate-500 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#F45120]" />
                      {stage.duration}
                    </span>
                  </div>
                  <div className={`text-sm font-bold truncate ${
                    isActive ? "text-[#17145E]" : "text-slate-700"
                  }`}>
                    {stage.title}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Stage Deep-Dive Canvas */}
          <div className="p-6 sm:p-10 blueprint-subtle-grid">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Stage Details & Deliverables */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold font-mono text-[#F45120] uppercase tracking-wider">
                    <span>{activeStage.phaseNumber}</span>
                    <span>·</span>
                    <span>{activeStage.tagline}</span>
                  </div>
                  <h4 className="text-2xl sm:text-3xl font-extrabold text-[#17145E]">
                    {activeStage.title}
                  </h4>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    {activeStage.summary}
                  </p>
                </div>

                {/* Deliverables Checklist */}
                <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-3 shadow-xs">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
                    <FileCheck2 className="w-4 h-4 text-[#17145E]" />
                    <span>Mandate Deliverables At This Stage:</span>
                  </div>
                  <div className="space-y-2.5">
                    {activeStage.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-800 font-medium">
                        <span className="w-5 h-5 rounded-full bg-[#FFF2EE] text-[#F45120] flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">
                          ✓
                        </span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technical Quality Audit Tag */}
                <div className="flex items-center gap-3 bg-amber-50/80 border border-amber-200 rounded-xl p-3.5 text-xs text-amber-900">
                  <ShieldCheck className="w-4 h-4 text-amber-700 flex-shrink-0" />
                  <div>
                    <strong className="font-bold">Technical Quality Gate: </strong>
                    <span className="font-normal">{activeStage.technicalAudit}</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Visual Technical Milestone Card */}
              <div className="lg:col-span-5 space-y-4">
                <div className="bg-[#17145E] text-white rounded-2xl p-6 sm:p-7 shadow-lg space-y-6 border border-[#242078]">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center text-[#FFD982]">
                        {getStageDocIcon(activeStageIndex)}
                      </div>
                      <span className="text-xs font-mono font-bold tracking-wider text-[#FFD982]">
                        STAGE METRICS &amp; SLA
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-white/60">
                      STEP {activeStage.step}/04
                    </span>
                  </div>

                  {/* 3 Live Metric Chips */}
                  <div className="grid grid-cols-1 gap-3">
                    {activeStage.metrics.map((m, mIdx) => (
                      <div 
                        key={mIdx}
                        className="bg-white/5 border border-white/10 rounded-xl p-3 flex items-center justify-between"
                      >
                        <span className="text-xs text-white/70 font-medium">
                          {m.label}
                        </span>
                        <span className="text-xs font-mono font-bold text-white bg-white/10 px-2.5 py-1 rounded">
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Visual Progress Ribbon */}
                  <div className="space-y-2 pt-2">
                    <div className="flex justify-between text-[11px] font-mono text-white/60">
                      <span>PIPELINE PROGRESS</span>
                      <span>{(activeStageIndex + 1) * 25}% COMPLETE</span>
                    </div>
                    <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                      <div 
                        className="bg-[#F45120] h-full transition-all duration-300 rounded-full"
                        style={{ width: `${(activeStageIndex + 1) * 25}%` }}
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <button
                      type="button"
                      disabled={activeStageIndex === 0}
                      onClick={() => setActiveStageIndex(prev => Math.max(0, prev - 1))}
                      className="text-xs text-white/70 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
                    >
                      ← Previous Stage
                    </button>
                    <button
                      type="button"
                      disabled={activeStageIndex === CLWP_PIPELINE_STAGES.length - 1}
                      onClick={() => setActiveStageIndex(prev => Math.min(CLWP_PIPELINE_STAGES.length - 1, prev + 1))}
                      className="text-xs font-bold text-[#FFD982] hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer flex items-center gap-1"
                    >
                      Next Stage →
                    </button>
                  </div>
                </div>

                <div className="text-center">
                  <span className="text-[11px] font-mono text-slate-500">
                    CLWP Specification Rev. 24.2 · HASOW Germany Allied Workflow
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="space-y-6">
          <div className="max-w-2xl space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              The Four Cornerstones
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#17145E]">
              Core Architectural Pillars
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {METHODOLOGY_FRAMEWORK.map((pillar) => (
              <div
                key={pillar.acronym}
                className="bg-white border border-slate-200 rounded-2xl p-8 space-y-5 shadow-xs hover:border-[#17145E]/40 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-[#F8FAFC] border border-slate-200 flex items-center justify-center">
                      {getPillarIcon(pillar.acronym)}
                    </div>
                    <span className="text-xs font-bold font-mono tracking-wider text-[#17145E] bg-[#F8FAFC] border border-slate-200 px-3 py-1 rounded-md">
                      {pillar.tagline}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <span className="text-xs font-extrabold text-[#F45120] uppercase tracking-wider block">
                      {pillar.acronym}
                    </span>
                    <h3 className="text-xl font-bold text-[#17145E]">
                      {pillar.title}
                    </h3>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-2">
                  {pillar.points.map((point, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                      <span className="w-4 h-4 rounded-full bg-[#FFF2EE] text-[#F45120] flex items-center justify-center flex-shrink-0 text-[10px] font-bold">
                        ✓
                      </span>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Real Verified Client Feedback */}
        <div className="pt-8 border-t border-slate-200 space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Verified Client Partnership Insights
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#17145E]">
              What Manufacturing &amp; HR Leaders Say
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CLIENT_TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 space-y-5 shadow-2xs flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <Quote className="w-8 h-8 text-[#FFD982]" />
                  <p className="text-sm text-slate-700 leading-relaxed italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-0.5">
                  <div className="text-sm font-bold text-[#17145E]">
                    {t.clientName}
                  </div>
                  <div className="text-xs text-slate-500 font-medium">
                    {t.role} · <strong className="text-slate-800">{t.company}</strong>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
