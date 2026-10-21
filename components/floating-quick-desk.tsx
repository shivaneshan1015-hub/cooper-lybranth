"use client";

import React, { useState } from "react";
import { 
  Phone, 
  MessageSquare, 
  X, 
  ShieldCheck, 
  ChevronUp, 
  ExternalLink,
  Sparkles,
  ArrowRight,
  Headphones
} from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

interface FloatingQuickDeskProps {
  onOpenConsultation: () => void;
}

export function FloatingQuickDesk({ onOpenConsultation }: FloatingQuickDeskProps) {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappMessage = encodeURIComponent(
    "Hello Cooper Lybranth Team, I would like to discuss an engineering hiring or technical training mandate for our manufacturing plant."
  );
  const whatsappUrl = `https://wa.me/919717619777?text=${whatsappMessage}`;

  return (
    <div className="fixed bottom-5 right-5 z-40 font-sans">
      {/* Expanded Quick Desk Card */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
          
          {/* Header */}
          <div className="bg-[#17145E] text-white p-5 flex items-center justify-between border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-[#FFD982]">
                <Headphones className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[11px] font-mono font-bold text-[#FFD982] uppercase tracking-wider">
                    DIRECT DESK ONLINE
                  </span>
                </div>
                <div className="text-sm font-bold text-white">
                  Engineering Sourcing Helpdesk
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1.5 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
              aria-label="Close direct desk"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Desk Body */}
          <div className="p-5 space-y-3.5 bg-slate-50/60">
            
            {/* Phone Call Button */}
            <a
              href={`tel:${COMPANY_INFO.primaryPhone.replace(/\s+/g, "")}`}
              className="flex items-center justify-between p-3.5 bg-white border border-slate-200 rounded-2xl hover:border-[#17145E] hover:shadow-sm transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#17145E] flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#17145E]">Call Direct Desk</div>
                  <div className="text-[11px] text-slate-500 font-mono font-semibold">{COMPANY_INFO.primaryPhone}</div>
                </div>
              </div>
              <span className="text-[11px] font-bold text-blue-600 group-hover:translate-x-0.5 transition-transform">
                Connect →
              </span>
            </a>

            {/* WhatsApp Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3.5 bg-white border border-slate-200 rounded-2xl hover:border-emerald-500 hover:shadow-sm transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-800">WhatsApp Plant Desk</div>
                  <div className="text-[11px] text-slate-500">Fast response for urgent hiring</div>
                </div>
              </div>
              <span className="text-[11px] font-bold text-emerald-600 group-hover:translate-x-0.5 transition-transform">
                Chat →
              </span>
            </a>

            {/* Brief Mandate Form Button */}
            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                onOpenConsultation();
              }}
              className="w-full p-3.5 bg-[#F45120] hover:bg-[#D83C0D] text-white rounded-2xl font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
            >
              <span>Submit Formal Mandate Brief</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Candidate Zero Fee Safeguard */}
            <div className="pt-2 border-t border-slate-200/80 flex items-center gap-2 text-[10px] text-slate-500">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
              <span>Zero fee for job applicants · ISO 9001:2008 Certified</span>
            </div>

          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 bg-[#17145E] hover:bg-[#0E0B42] text-white pl-4 pr-5 py-3 rounded-full shadow-2xl border border-white/20 hover:scale-105 active:scale-95 transition-all cursor-pointer group"
        aria-label="Direct Desk Options"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
        </span>
        <div className="text-left">
          <div className="text-[10px] font-mono uppercase tracking-wider text-[#FFD982] font-bold">
            DIRECT DESK
          </div>
          <div className="text-xs font-bold text-white flex items-center gap-1">
            <span>+91 97176 19777</span>
            <ChevronUp className={`w-3.5 h-3.5 transition-transform ${isOpen ? "rotate-180" : ""}`} />
          </div>
        </div>
      </button>
    </div>
  );
}
