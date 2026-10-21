"use client";

import React, { useState, useEffect } from "react";
import { 
  X, 
  CheckCircle2, 
  Send, 
  Building2, 
  Phone, 
  Mail, 
  MapPin, 
  Award, 
  ShieldCheck, 
  ArrowRight,
  Briefcase
} from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export interface ConsultationInitialData {
  serviceType?: string;
  industry?: string;
  location?: string;
  notes?: string;
}

interface HiringConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: ConsultationInitialData | null;
}

export function HiringConsultationModal({ isOpen, onClose, initialData }: HiringConsultationModalProps) {
  const [serviceType, setServiceType] = useState("Executive Search");
  const [industry, setIndustry] = useState("Automotive & Electric Mobility");
  const [companyName, setCompanyName] = useState("");
  const [contactName, setContactName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [details, setDetails] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync initialData if provided
  useEffect(() => {
    if (initialData) {
      if (initialData.serviceType) setServiceType(initialData.serviceType);
      if (initialData.industry) setIndustry(initialData.industry);
      if (initialData.location) setLocation(initialData.location);
      if (initialData.notes) setDetails(initialData.notes);
    }
  }, [initialData, isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm transition-opacity">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Modal Header */}
        <div className="bg-[#17145E] text-white p-6 sm:p-7 flex items-center justify-between border-b border-white/10">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FFD982]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#FFD982]">
                Engineering Mandate Briefing
              </span>
            </div>
            <h2 id="modal-title" className="text-xl sm:text-2xl font-extrabold text-white">
              Discuss Your Hiring or Training Needs
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1">
          {submitted ? (
            <div className="py-10 text-center space-y-5">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <div className="space-y-2 max-w-md mx-auto">
                <h3 className="text-2xl font-extrabold text-[#17145E]">
                  Mandate Brief Received
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  Thank you, <strong>{contactName || "Client"}</strong>. An engineering practice consultant from Cooper Lybranth will review your requirement and reach out within 1 business day.
                </p>
              </div>

              <div className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-4 max-w-md mx-auto text-xs text-left space-y-1.5 text-slate-700">
                <div className="flex justify-between">
                  <span className="text-slate-500">Practice:</span>
                  <strong className="text-[#17145E]">{serviceType}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Industry:</span>
                  <strong className="text-[#17145E]">{industry}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Company:</span>
                  <strong className="text-[#17145E]">{companyName || "Confidential"}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Direct Desk:</span>
                  <strong className="text-[#F45120]">{COMPANY_INFO.primaryPhone}</strong>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="bg-[#17145E] hover:bg-[#0E0B42] text-white font-bold text-sm px-6 py-3 rounded-xl transition-all"
                >
                  Close &amp; Return to Homepage
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Service Practice Selector */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#17145E] uppercase tracking-wider block">
                  Select Required Practice:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    "Executive Search",
                    "Mid-Senior Engineering",
                    "Technical RPO Ramp-Up",
                    "Workforce Training (50+)",
                    "QMS & Safety Audits",
                    "General Consultation",
                  ].map((srv) => (
                    <button
                      key={srv}
                      type="button"
                      onClick={() => setServiceType(srv)}
                      className={`p-2.5 rounded-lg text-xs font-semibold border transition-all text-left cursor-pointer ${
                        serviceType === srv
                          ? "bg-[#17145E] text-white border-[#17145E] shadow-xs"
                          : "bg-[#F8FAFC] text-slate-700 border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      {srv}
                    </button>
                  ))}
                </div>
              </div>

              {/* Form Input Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="e.g. Acme Automotive Ltd."
                    className="w-full text-sm bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-[#17145E] focus:border-transparent transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">
                    Contact Person Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="e.g. Rajesh Kumar"
                    className="w-full text-sm bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-[#17145E] focus:border-transparent transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">
                    Official Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full text-sm bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-[#17145E] focus:border-transparent transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">
                    Direct Contact Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full text-sm bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-[#17145E] focus:border-transparent transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">
                    Primary Industry Vertical
                  </label>
                  <select
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    className="w-full text-sm bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-[#17145E] focus:border-transparent transition-all cursor-pointer"
                  >
                    <option value="Automotive & Electric Mobility">Automotive &amp; Electric Mobility</option>
                    <option value="Aerospace & Defence">Aerospace &amp; Defence</option>
                    <option value="Power, Renewables & Energy">Power, Renewables &amp; Energy</option>
                    <option value="Tool Design & Precision Machinery">Tool Design &amp; Precision Machinery</option>
                    <option value="Industrial Automation & Robotics">Industrial Automation &amp; Robotics</option>
                    <option value="Chemical, Pharma & Process">Chemical, Pharma &amp; Process</option>
                    <option value="Heavy Engineering & Infrastructure">Heavy Engineering &amp; Infrastructure</option>
                    <option value="R&D & Engineering Design Centres">R&amp;D &amp; Engineering Design Centres</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">
                    Plant / Office Location
                  </label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="e.g. Pune / Chennai / Gurgaon"
                    className="w-full text-sm bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-[#17145E] focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Requirement Notes */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">
                  Mandate Scope or Training Requirement (Optional)
                </label>
                <textarea
                  rows={3}
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder="Outline roles to hire (e.g., 2 Plant Heads, 10 CAE Engineers) or desired training topic (e.g., 5S & TPM in Hindi for 50 operators)."
                  className="w-full text-sm bg-white border border-slate-300 rounded-xl p-3 text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-[#17145E] focus:border-transparent transition-all"
                />
              </div>

              {/* Trust Reassurance */}
              <div className="flex items-center gap-2 text-xs text-slate-500 bg-[#F8FAFC] p-3 rounded-xl border border-slate-200">
                <ShieldCheck className="w-4 h-4 text-[#F45120] flex-shrink-0" />
                <span>Non-disclosure assured. Your hiring briefs are strictly confidential.</span>
              </div>

              {/* Form Action */}
              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-3 text-sm font-semibold text-slate-600 hover:text-black transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 bg-[#F45120] hover:bg-[#D83C0D] text-white font-bold text-sm px-7 py-3 rounded-xl shadow-md transition-all active:scale-[0.98] cursor-pointer disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span>Submitting Brief...</span>
                  ) : (
                    <>
                      <span>Submit Mandate Brief</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
