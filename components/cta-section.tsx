import React from "react";
import { Phone, Mail, MapPin, ArrowRight, ShieldCheck, Clock } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

interface CtaSectionProps {
  onOpenConsultation: () => void;
}

export function CtaSection({ onOpenConsultation }: CtaSectionProps) {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#17145E] rounded-3xl p-8 sm:p-14 lg:p-16 text-white relative overflow-hidden shadow-xl">
          {/* Subtle Decorative Elements */}
          <div 
            className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/[0.03] pointer-events-none"
            aria-hidden="true" 
          />
          <div 
            className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#F45120]/10 pointer-events-none"
            aria-hidden="true" 
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/10 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#FFD982] border border-white/10">
                <Clock className="w-3.5 h-3.5" />
                <span>Response Guaranteed Within 1 Business Day</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Let&apos;s Discuss Your Engineering Workforce Needs
              </h2>

              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-xl">
                Tell us about your hiring, plant ramp-up, or workforce training requirements. Our engineering consultants are ready to structure an SLA-governed recruitment or learning solution.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  type="button"
                  onClick={onOpenConsultation}
                  className="inline-flex items-center justify-center gap-2 bg-[#F45120] hover:bg-[#D83C0D] text-white font-bold text-base px-8 py-4 rounded-xl shadow-lg transition-all active:scale-[0.98] cursor-pointer"
                >
                  <span>Get in Touch</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                <a
                  href={`tel:${COMPANY_INFO.primaryPhone}`}
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold text-base px-6 py-4 rounded-xl border border-white/20 transition-all text-center"
                >
                  <Phone className="w-4 h-4 text-[#FFD982]" />
                  <span>Call: {COMPANY_INFO.primaryPhone}</span>
                </a>
              </div>
            </div>

            {/* Right Quick Direct Access Box */}
            <div className="lg:col-span-5 bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-6 sm:p-8 space-y-5">
              <div className="text-xs font-bold uppercase tracking-wider text-[#FFD982] pb-2 border-b border-white/15">
                Corporate CRM Helpdesk
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 text-[#FFD982] mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Headquarters Direct Line</div>
                    <a href={`tel:${COMPANY_INFO.primaryPhone}`} className="font-bold text-white hover:text-[#FFD982] transition-colors">
                      {COMPANY_INFO.primaryPhone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 text-[#FFD982] mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Corporate &amp; Mandate Email</div>
                    <a href={`mailto:${COMPANY_INFO.primaryEmail}`} className="font-bold text-white hover:text-[#FFD982] transition-colors">
                      {COMPANY_INFO.primaryEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 text-[#FFD982] mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Corporate Office (NCR)</div>
                    <div className="font-medium text-slate-200 text-xs leading-relaxed">
                      JMD Megapolis, Sector-48, Sohna Road, Gurgaon — 122001
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center gap-2 text-xs text-slate-300">
                <ShieldCheck className="w-4 h-4 text-[#F45120] flex-shrink-0" />
                <span>Zero fees charged to job seekers. 100% compliant.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
