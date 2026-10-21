"use client";

import React, { useState } from "react";
import { 
  Award, 
  Cog, 
  Layers, 
  GraduationCap, 
  ShieldCheck, 
  ArrowRight, 
  Check, 
  ExternalLink 
} from "lucide-react";
import { CORE_SERVICES, ServiceItem } from "@/data/company";

interface ServicesSectionProps {
  onOpenConsultation: () => void;
}

export function ServicesSection({ onOpenConsultation }: ServicesSectionProps) {
  const [selectedService, setSelectedService] = useState<ServiceItem>(CORE_SERVICES[0]);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Award":
        return <Award className="w-5 h-5 text-[#F45120]" />;
      case "Cog":
        return <Cog className="w-5 h-5 text-[#17145E]" />;
      case "Layers":
        return <Layers className="w-5 h-5 text-[#F45120]" />;
      case "GraduationCap":
        return <GraduationCap className="w-5 h-5 text-[#17145E]" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-5 h-5 text-[#17145E]" />;
      default:
        return <Cog className="w-5 h-5 text-[#17145E]" />;
    }
  };

  return (
    <section id="services" className="py-16 sm:py-24 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#17145E]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#17145E]" />
              Engineering-Dedicated Practices
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#17145E] tracking-tight">
              Five Specialized Practices. One Engineering Lens.
            </h2>
            <p className="text-base text-slate-600 font-normal">
              Each practice is staffed by consultants with formal engineering credentials who evaluate technical feasibility, tolerances, and manufacturing maturity before candidate submission.
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 bg-[#F45120] hover:bg-[#D83C0D] text-white text-sm font-bold px-6 py-3 rounded-xl shadow-xs transition-all flex-shrink-0 cursor-pointer self-start md:self-auto"
          >
            <span>Discuss a Mandate</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Interactive Master-Detail Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Service Selector Tabs */}
          <div className="lg:col-span-5 space-y-3">
            {CORE_SERVICES.map((service) => {
              const isSelected = selectedService.id === service.id;
              return (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => setSelectedService(service)}
                  className={`w-full text-left p-5 rounded-xl border transition-all cursor-pointer flex items-start gap-4 ${
                    isSelected
                      ? "bg-white border-[#17145E] shadow-md ring-2 ring-[#17145E]/10"
                      : "bg-white/80 border-slate-200 hover:border-slate-300 hover:bg-white"
                  }`}
                >
                  <div className={`p-2.5 rounded-lg border flex-shrink-0 ${
                    isSelected ? "bg-[#FFF2EE] border-[#F45120]/30" : "bg-slate-50 border-slate-200"
                  }`}>
                    {getIcon(service.iconName)}
                  </div>
                  <div className="space-y-1 flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className={`text-base font-bold ${
                        isSelected ? "text-[#17145E]" : "text-slate-800"
                      }`}>
                        {service.title}
                      </h3>
                      {isSelected && (
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-[#17145E] text-white px-2 py-0.5 rounded-sm">
                          Active
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-500 line-clamp-2">
                      {service.tagline}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Detailed Service Dossier */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-sm space-y-8">
            <div className="space-y-3 pb-6 border-b border-slate-200">
              <div className="inline-block text-xs font-bold text-[#F45120] uppercase tracking-wider bg-[#FFF2EE] px-3 py-1 rounded-md border border-[#F45120]/20">
                {selectedService.category} Practice
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#17145E]">
                {selectedService.title}
              </h3>
              <p className="text-base text-slate-700 leading-relaxed font-normal">
                {selectedService.description}
              </p>
            </div>

            {/* Strategic Value Highlights */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-[#17145E] uppercase tracking-wider">
                Operational Highlights &amp; Methodology
              </h4>
              <ul className="space-y-2.5">
                {selectedService.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                    <span className="w-5 h-5 rounded-full bg-[#FFF2EE] text-[#F45120] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Documented Deliverables */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold text-[#17145E] uppercase tracking-wider">
                Standard Client Deliverables
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {selectedService.deliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-[#F8FAFC] border border-slate-200 rounded-lg p-3 text-xs font-semibold text-[#17145E] text-center"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Service Action Button */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 bg-[#F45120] hover:bg-[#D83C0D] text-white text-sm font-bold px-6 py-3 rounded-xl shadow-xs transition-all cursor-pointer"
              >
                <span>{selectedService.ctaLabel}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {selectedService.id === "training-development" && (
                <a
                  href="https://cooperlybranth.in/training"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#17145E] hover:text-[#F45120] border border-slate-200 px-4 py-3 rounded-xl hover:border-slate-300 transition-colors"
                >
                  <span>Browse 50+ Modules on Training Website</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
