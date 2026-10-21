"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Phone, 
  Mail, 
  ShieldCheck, 
  Menu, 
  X, 
  ChevronRight, 
  ArrowUpRight,
  GraduationCap,
  Building2,
  Award
} from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

interface HeaderProps {
  onOpenConsultation: () => void;
}

export function Header({ onOpenConsultation }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Concept Disclaimer Bar */}
      <aside aria-label="Project Notice" className="bg-[#0E0B42] text-slate-300 text-[11px] sm:text-xs py-1.5 px-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#FFD982]" />
            <span>
              <strong>Independent Concept Redesign</strong> — Cooper Lybranth Services Ltd. (Established 2001)
            </span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span className="hidden md:inline text-slate-400">
              In Strategic Alliance with HASOW, Germany
            </span>
            <a
              href="https://cooperlybranth.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFD982] hover:underline flex items-center gap-0.5 font-medium"
            >
              Official Website <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </aside>

      {/* Corporate Utility Bar */}
      <div className="bg-[#17145E] text-white text-xs py-2 px-4 border-b border-white/10 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5 text-slate-200">
              <Award className="w-3.5 h-3.5 text-[#FFD982]" />
              <span className="font-medium text-xs">ISO 9001:2008 Certified Governance</span>
            </div>
            <div className="hidden lg:flex items-center gap-1.5 text-slate-300 text-xs">
              <Building2 className="w-3.5 h-3.5 text-[#FFD982]" />
              <span>Offices: Gurgaon (HQ) · Chennai · Pune · Pantnagar</span>
            </div>
          </div>

          <div className="flex items-center gap-5 text-xs">
            <a
              href={`tel:${COMPANY_INFO.primaryPhone}`}
              className="text-slate-200 hover:text-[#FFD982] transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#F45120]" />
              <span className="font-semibold">{COMPANY_INFO.primaryPhone}</span>
            </a>
            <a
              href={`mailto:${COMPANY_INFO.primaryEmail}`}
              className="text-slate-200 hover:text-[#FFD982] transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5 text-[#F45120]" />
              <span>{COMPANY_INFO.primaryEmail}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Candidate Fee Trust Notice */}
      <aside aria-label="Candidate Safety Notice" className="bg-[#FFF9EC] border-b border-[#FFE2A4] text-[#4A3608] text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#F45120] flex-shrink-0" />
            <p className="text-[11px] sm:text-xs leading-normal">
              <strong className="font-bold text-[#17145E]">Candidate Notice:</strong> Cooper Lybranth never charges candidates any fee at any stage of recruitment. Report fraud to <a href="mailto:crm@cooperlybranth.com" className="font-semibold text-[#F45120] hover:underline">crm@cooperlybranth.com</a>.
            </p>
          </div>
          <span className="hidden lg:inline-block text-[11px] text-[#8C6D23] font-medium whitespace-nowrap">
            Public Limited Company
          </span>
        </div>
      </aside>

      {/* Main Navigation Header */}
      <header className="sticky top-0 z-40 bg-white/98 backdrop-blur-md border-b border-slate-200 shadow-xs transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group focus:outline-hidden focus:ring-2 focus:ring-[#17145E] rounded-md">
              <div className="relative h-12 w-48 sm:h-14 sm:w-56 transition-transform group-hover:scale-[1.01]">
                <Image
                  src="/images/logo.png"
                  alt="Cooper Lybranth — HR Solutions To Engineering Sector"
                  fill
                  priority
                  className="object-contain object-left"
                  sizes="(max-width: 640px) 192px, 224px"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-7">
              <Link
                href="#overview"
                className="text-sm font-semibold text-[#17145E] hover:text-[#F45120] transition-colors py-1"
              >
                About
              </Link>
              <Link
                href="#services"
                className="text-sm font-semibold text-[#17145E] hover:text-[#F45120] transition-colors py-1"
              >
                Services
              </Link>
              <Link
                href="#industries"
                className="text-sm font-semibold text-[#17145E] hover:text-[#F45120] transition-colors py-1"
              >
                Industries
              </Link>
              <Link
                href="#training"
                className="text-sm font-semibold text-[#17145E] hover:text-[#F45120] transition-colors flex items-center gap-1.5 py-1"
              >
                <span>Training</span>
                <span className="bg-[#FFF2EE] text-[#F45120] text-[10px] font-bold px-1.5 py-0.5 rounded-full border border-[#F45120]/20">
                  50+ Courses
                </span>
              </Link>
              <Link
                href="#methodology"
                className="text-sm font-semibold text-[#17145E] hover:text-[#F45120] transition-colors py-1"
              >
                Methodology
              </Link>
              <Link
                href="#offices"
                className="text-sm font-semibold text-[#17145E] hover:text-[#F45120] transition-colors py-1"
              >
                Contact
              </Link>
            </nav>

            {/* Header Right Actions */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={COMPANY_INFO.trainingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-[#17145E] hover:text-[#F45120] px-3 py-2 rounded-lg border border-slate-200 hover:border-[#17145E]/30 transition-all"
              >
                <GraduationCap className="w-3.5 h-3.5 text-[#17145E]" />
                <span>Training Portal</span>
                <ArrowUpRight className="w-3 h-3 text-slate-400" />
              </a>

              {/* Primary Conversion Button */}
              <button
                id="header-discuss-cta"
                type="button"
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-2 bg-[#F45120] hover:bg-[#D83C0D] text-white text-sm font-bold px-5 py-2.5 rounded-lg shadow-sm hover:shadow-md transition-all active:scale-[0.98] focus:outline-hidden focus:ring-2 focus:ring-[#F45120] focus:ring-offset-2 cursor-pointer"
              >
                <span>Discuss Your Hiring Needs</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                type="button"
                onClick={onOpenConsultation}
                className="bg-[#F45120] text-white text-xs font-bold px-3 py-2 rounded-md"
              >
                Hire Talent
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#17145E] hover:bg-slate-100 rounded-md transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-xl">
            <div className="grid gap-1 py-2">
              <Link
                href="#overview"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-semibold text-[#17145E] hover:bg-slate-50 rounded-md"
              >
                About Cooper Lybranth
              </Link>
              <Link
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-semibold text-[#17145E] hover:bg-slate-50 rounded-md"
              >
                Verified Services
              </Link>
              <Link
                href="#industries"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-semibold text-[#17145E] hover:bg-slate-50 rounded-md"
              >
                Industry Practices
              </Link>
              <Link
                href="#training"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-semibold text-[#17145E] hover:bg-slate-50 rounded-md flex items-center justify-between"
              >
                <span>Training & Development</span>
                <span className="bg-[#FFF2EE] text-[#F45120] text-xs font-bold px-2 py-0.5 rounded-full">
                  50+ Modules
                </span>
              </Link>
              <Link
                href="#methodology"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-semibold text-[#17145E] hover:bg-slate-50 rounded-md"
              >
                Methodology (CLWP & 6Ps)
              </Link>
              <Link
                href="#offices"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-semibold text-[#17145E] hover:bg-slate-50 rounded-md"
              >
                Offices & Contact
              </Link>
            </div>

            <div className="pt-2 border-t border-slate-200 space-y-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full flex items-center justify-center gap-2 bg-[#F45120] hover:bg-[#D83C0D] text-white font-bold py-3 px-4 rounded-lg text-sm shadow-sm"
              >
                <span>Discuss Your Hiring Needs</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <a
                href={COMPANY_INFO.trainingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 border border-slate-200 py-2.5 px-4 rounded-lg text-sm font-semibold text-[#17145E]"
              >
                <GraduationCap className="w-4 h-4 text-[#F45120]" />
                <span>Visit Training Website (50+ Programmes)</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
