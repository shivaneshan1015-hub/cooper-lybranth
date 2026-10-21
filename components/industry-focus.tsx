import React from "react";
import { 
  Car, 
  Plane, 
  Zap, 
  Wrench, 
  Cpu, 
  FlaskConical, 
  Truck, 
  Microscope,
  ArrowRight
} from "lucide-react";
import { INDUSTRY_SECTORS } from "@/data/company";

interface IndustryFocusProps {
  onOpenConsultation: () => void;
}

export function IndustryFocus({ onOpenConsultation }: IndustryFocusProps) {
  const getSectorIcon = (icon: string) => {
    switch (icon) {
      case "Car":
        return <Car className="w-5 h-5 text-[#F45120]" />;
      case "Plane":
        return <Plane className="w-5 h-5 text-[#17145E]" />;
      case "Zap":
        return <Zap className="w-5 h-5 text-[#F45120]" />;
      case "Wrench":
        return <Wrench className="w-5 h-5 text-[#17145E]" />;
      case "Cpu":
        return <Cpu className="w-5 h-5 text-[#F45120]" />;
      case "FlaskConical":
        return <FlaskConical className="w-5 h-5 text-[#17145E]" />;
      case "Truck":
        return <Truck className="w-5 h-5 text-[#F45120]" />;
      case "Microscope":
        return <Microscope className="w-5 h-5 text-[#17145E]" />;
      default:
        return <Wrench className="w-5 h-5 text-[#17145E]" />;
    }
  };

  return (
    <section id="industries" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F45120]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F45120]" />
            Engineering Domain Expertise
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#17145E] tracking-tight">
            Eight Industrial Sectors. One Deep Engineering Focus.
          </h2>
          <p className="text-base text-slate-600 font-normal leading-relaxed">
            Our consultants speak the exact technical language of each vertical — APQP tolerances, P&amp;ID schematics, PLC logic, and GD&amp;T standards — ensuring candidates are vetted against real manufacturing realities.
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRY_SECTORS.map((sector) => (
            <div
              key={sector.id}
              className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-6 space-y-4 hover:border-[#17145E]/40 hover:bg-white hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                    {getSectorIcon(sector.icon)}
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-[#17145E] transition-colors">
                    {sector.number}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#17145E] leading-snug">
                  {sector.name}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {sector.description}
                </p>
              </div>

              {/* Verified Placement Roles */}
              <div className="pt-3 border-t border-slate-200/80 space-y-2">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  Key Mandate Focus:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {sector.keyRoles.map((role, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-medium bg-white border border-slate-200 text-slate-700 px-2 py-0.5 rounded-md"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Industry Mandate CTA Bar */}
        <div className="bg-[#17145E] text-white rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-1.5 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Need specialized engineering talent for your plant?
            </h3>
            <p className="text-sm text-slate-300 max-w-xl">
              From greenfield automotive manufacturing to precision aerospace machining, our consultants evaluate candidates with manufacturing rigor.
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 bg-[#F45120] hover:bg-[#D83C0D] text-white font-bold text-sm px-6 py-3 rounded-xl transition-all shadow-sm cursor-pointer whitespace-nowrap"
          >
            <span>Brief an Industry Mandate</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
