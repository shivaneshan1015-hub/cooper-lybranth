import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Award, 
  ExternalLink, 
  ArrowUpRight 
} from "lucide-react";
import { COMPANY_INFO, OFFICE_LOCATIONS, UPCOMING_BRANCHES } from "@/data/company";

export function Footer() {
  return (
    <footer id="offices" className="bg-[#0A0730] text-white pt-16 pb-12 border-t-2 border-[#F45120]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Top Tier: Brand, Description & Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-block bg-white p-2.5 rounded-xl shadow-xs">
              <div className="relative h-12 w-52">
                <Image
                  src="/images/logo.png"
                  alt="Cooper Lybranth — HR Solutions To Engineering Sector"
                  fill
                  className="object-contain object-left"
                  sizes="208px"
                />
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed font-normal max-w-sm">
              Cooper Lybranth Services Ltd. is India&apos;s leading engineering-focused recruitment and workforce solutions company. Operating exclusively for Tier-1 OEMs, manufacturing majors, precision tooling, and R&amp;D centres since 2001.
            </p>

            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-md text-[#FFD982] font-semibold">
                <Award className="w-3.5 h-3.5" />
                ISO 9001:2008 Certified
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-md text-slate-300">
                Strategic Alliance: HASOW Germany
              </span>
            </div>
          </div>

          {/* Practice Navigation */}
          <div className="lg:col-span-3 space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-[#FFD982] border-b border-white/10 pb-2">
              Practices &amp; Solutions
            </div>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Board &amp; CEO Executive Search
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Mid-to-Senior Engineering Sourcing
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Technical RPO &amp; Greenfield Ramp-Ups
                </Link>
              </li>
              <li>
                <a
                  href={COMPANY_INFO.trainingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FFD982] hover:underline flex items-center gap-1 font-semibold"
                >
                  <span>50+ Training Programmes</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  QMS &amp; Plant EHS Safety Audits
                </Link>
              </li>
              <li>
                <Link href="#industries" className="hover:text-white transition-colors">
                  Eight Core Industry Practices
                </Link>
              </li>
              <li>
                <Link href="#methodology" className="hover:text-white transition-colors">
                  CLWP &amp; 6Ps Methodology
                </Link>
              </li>
            </ul>
          </div>

          {/* Official Verification & Portals */}
          <div className="lg:col-span-4 space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-[#FFD982] border-b border-white/10 pb-2">
              Official Corporate Portals
            </div>
            <div className="space-y-3 text-xs">
              <a
                href={COMPANY_INFO.portalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white/5 hover:bg-white/10 border border-white/10 p-3 rounded-xl transition-all"
              >
                <div className="font-bold text-white flex items-center justify-between">
                  <span>Corporate Portal</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">cooperlybranth.com</div>
              </a>

              <a
                href={COMPANY_INFO.trainingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white/5 hover:bg-white/10 border border-white/10 p-3 rounded-xl transition-all"
              >
                <div className="font-bold text-white flex items-center justify-between">
                  <span>Training &amp; Development Portal</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#F45120]" />
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">cooperlybranth.in/training</div>
              </a>

              <div className="pt-1">
                <a
                  href="https://www.linkedin.com/company/cooperlybranth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors text-xs"
                >
                  <span>Connect on LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Office Network Directory */}
        <div className="pt-10 border-t border-white/10 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              National Presence &amp; Manufacturing Corridor Offices
            </h3>
            <div className="text-xs text-slate-400 flex items-center gap-2">
              <span className="text-[#FFD982] font-semibold">Upcoming Hubs:</span>
              <span>{UPCOMING_BRANCHES.join(" · ")}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {OFFICE_LOCATIONS.map((office, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-white">{office.city}</span>
                  <span className="text-[10px] font-bold text-[#FFD982] bg-white/10 px-2 py-0.5 rounded-sm">
                    {office.type.includes("HQ") ? "Headquarters" : "Branch"}
                  </span>
                </div>
                <div className="text-xs text-slate-300 space-y-0.5 leading-relaxed font-normal">
                  {office.address.map((line, lIdx) => (
                    <div key={lIdx}>{line}</div>
                  ))}
                </div>
                <div className="pt-2 border-t border-white/10 flex items-center gap-2 text-xs">
                  <Phone className="w-3 h-3 text-[#F45120]" />
                  <a href={`tel:${office.phone}`} className="text-white hover:text-[#FFD982] font-semibold">
                    {office.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar: Candidate Safety + Copyright + Disclaimer */}
        <div className="pt-8 border-t border-white/10 space-y-4 text-xs text-slate-400">
          <div className="flex items-center gap-2 bg-[#FFF9EC]/10 border border-[#FFD982]/20 p-3 rounded-lg text-slate-200">
            <ShieldCheck className="w-4 h-4 text-[#F45120] flex-shrink-0" />
            <span className="text-[11px] sm:text-xs">
              <strong>Zero Candidate Charges:</strong> Cooper Lybranth never charges candidates any fee at any stage of recruitment. Verify all authentic mandates at <a href="mailto:crm@cooperlybranth.com" className="text-[#FFD982] underline font-semibold">crm@cooperlybranth.com</a>.
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] pt-2">
            <div>
              © 2001–2026 Cooper Lybranth Services Ltd. All rights reserved. Registered Public Limited Company.
            </div>
            <div className="text-slate-400 text-center sm:text-right">
              Independent concept redesign for presentation and review. Not commissioned or endorsed by Cooper Lybranth.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
