"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { 
  GraduationCap, 
  ExternalLink, 
  Languages, 
  Clock, 
  Users, 
  CheckCircle2, 
  BookOpen, 
  Search,
  Filter,
  X,
  FileText,
  ArrowRight,
  ShieldCheck
} from "lucide-react";
import { FEATURED_TRAINING_MODULES, COMPANY_INFO, TrainingProgram } from "@/data/company";

interface TrainingSectionProps {
  onOpenConsultation?: (initialData?: {
    serviceType?: string;
    industry?: string;
    location?: string;
    notes?: string;
  }) => void;
}

const CATEGORIES = [
  "All Categories",
  "Leadership & Management",
  "Operational Excellence & TPM",
  "Quality Systems & Kaizen",
  "Shop-Floor & Operator Effectiveness",
  "Communication & Interpersonal",
] as const;

export function TrainingSection({ onOpenConsultation }: TrainingSectionProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All Categories");
  const [selectedLanguage, setSelectedLanguage] = useState<"all" | "English" | "Hindi" | "Bilingual">("all");
  const [expandedCourseId, setExpandedCourseId] = useState<string | null>(null);

  const filteredModules = useMemo(() => {
    return FEATURED_TRAINING_MODULES.filter((course) => {
      // Category filter
      if (selectedCategory !== "All Categories" && course.category !== selectedCategory) {
        return false;
      }
      // Language filter
      if (selectedLanguage !== "all" && course.language !== selectedLanguage) {
        return false;
      }
      // Search query
      if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase();
        const matchTitle = course.title.toLowerCase().includes(q);
        const matchCategory = course.category.toLowerCase().includes(q);
        const matchAudience = course.targetAudience.toLowerCase().includes(q);
        const matchOutcomes = course.outcomes.some(o => o.toLowerCase().includes(q));
        if (!matchTitle && !matchCategory && !matchAudience && !matchOutcomes) {
          return false;
        }
      }
      return true;
    });
  }, [searchQuery, selectedCategory, selectedLanguage]);

  const handleEnquireCourse = (course: TrainingProgram) => {
    if (onOpenConsultation) {
      onOpenConsultation({
        serviceType: "Technical Training & QMS",
        notes: `Inquiry regarding course: "${course.title}" (${course.language} cohort, duration: ${course.duration}). Target audience: ${course.targetAudience}.`,
      });
    }
  };

  const handleClearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All Categories");
    setSelectedLanguage("all");
  };

  return (
    <section id="training" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F45120]">
              <GraduationCap className="w-4 h-4 text-[#F45120]" />
              Workforce Capability Building
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#17145E] tracking-tight leading-tight">
              Building Skills for the Next Generation of Engineering Professionals
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Explore training opportunities designed to develop technical knowledge and support professional growth. Our catalogue spans over 50 programmes — leadership, productivity, communication, and shop-floor effectiveness — delivered in English for management cohorts and in Hindi for shop-floor associates.
            </p>
          </div>

          <div className="lg:col-span-4 flex lg:justify-end">
            <a
              href={COMPANY_INFO.trainingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#F45120] hover:bg-[#D83C0D] text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-xs transition-all cursor-pointer"
            >
              <span>Explore Training Programmes</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Feature Hero Card with Real Training Photography */}
        <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-[#F8FAFC]">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Left Info & Bilingual Positioning */}
            <div className="lg:col-span-7 p-8 sm:p-12 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs font-bold bg-[#17145E] text-white px-3 py-1 rounded-md">
                  50+ Modular Courses
                </span>
                <span className="text-xs font-bold bg-[#FFF2EE] text-[#F45120] px-3 py-1 rounded-md border border-[#F45120]/20 flex items-center gap-1.5">
                  <Languages className="w-3.5 h-3.5" />
                  <span>Bilingual: English &amp; Hindi</span>
                </span>
                <span className="text-xs font-mono font-bold text-slate-500 bg-white border border-slate-200 px-2.5 py-1 rounded-md">
                  ISO 9001:2008 ALIGNED
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#17145E] leading-snug">
                Delivered on your shop floor and in executive training rooms.
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Unlike generic off-the-shelf soft skill seminars, Cooper Lybranth programmes are tailored to manufacturing reality — shift cycles, visual factory standardisation, Total Productive Maintenance (TPM), and operator safety protocols.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-white border border-slate-200 p-4 rounded-xl space-y-1 shadow-2xs">
                  <div className="text-xs font-bold uppercase text-[#17145E]">English Programmes</div>
                  <div className="text-xs text-slate-600 leading-relaxed">
                    Designed for Plant Heads, Operations VPs, Maintenance Engineers &amp; Managers.
                  </div>
                </div>
                <div className="bg-white border border-slate-200 p-4 rounded-xl space-y-1 shadow-2xs">
                  <div className="text-xs font-bold uppercase text-[#F45120]">हिंदी प्रशिक्षण (Hindi Modules)</div>
                  <div className="text-xs text-slate-600 leading-relaxed">
                    मशीन ऑपरेटर्स, लाइन सुपरवाइजर्स और शॉप-फ्लोर सहयोगियों के लिए सरल एवं प्रभावी।
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5 relative h-72 sm:h-96 w-full border-t lg:border-t-0 lg:border-l border-slate-200">
              <Image
                src="/images/training-workshop.jpg"
                alt="Technical and behavioural training workshop for engineering professionals"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#17145E]/80 via-transparent to-transparent lg:hidden" />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-slate-200 text-xs font-bold text-[#17145E] shadow-sm flex items-center justify-between">
                <span>Accredited Curriculum · Hands-On Case Studies</span>
                <span className="text-[#F45120]">Shop-Floor Validated</span>
              </div>
            </div>
          </div>
        </div>

        {/* FEATURE 3: Interactive Module Directory with Live Search & Filter */}
        <div className="space-y-6 pt-4">
          
          {/* Controls Bar */}
          <div className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-4 sm:p-6 space-y-4 shadow-xs">
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[#17145E]">
                  Browse Featured Training Directory
                </h3>
                <p className="text-xs text-slate-500">
                  Search across verified technical, supervisory, and shop-floor programmes.
                </p>
              </div>

              {/* Live Search Input */}
              <div className="relative w-full md:w-80">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by topic, '5S', 'TPM', 'Hindi'..."
                  className="w-full pl-10 pr-9 py-2.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#17145E] transition-all"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

            {/* Filters Row */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-200/60">
              
              {/* Category Pills */}
              <div className="flex flex-wrap items-center gap-1.5">
                {CATEGORIES.map((cat) => {
                  const isSel = selectedCategory === cat;
                  return (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setSelectedCategory(cat)}
                      className={`text-[11px] font-bold px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                        isSel
                          ? "bg-[#17145E] text-white shadow-2xs"
                          : "bg-white border border-slate-200 text-slate-600 hover:text-[#17145E] hover:border-slate-300"
                      }`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>

              {/* Language Selector */}
              <div className="flex items-center gap-1 bg-white p-1 rounded-lg border border-slate-200 text-xs font-bold">
                <button
                  type="button"
                  onClick={() => setSelectedLanguage("all")}
                  className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer text-[11px] ${
                    selectedLanguage === "all" ? "bg-[#17145E] text-white shadow-xs" : "text-slate-600 hover:text-black"
                  }`}
                >
                  All
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedLanguage("English")}
                  className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer text-[11px] ${
                    selectedLanguage === "English" ? "bg-[#17145E] text-white shadow-xs" : "text-slate-600 hover:text-black"
                  }`}
                >
                  English
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedLanguage("Hindi")}
                  className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer text-[11px] ${
                    selectedLanguage === "Hindi" ? "bg-[#F45120] text-white shadow-xs" : "text-slate-600 hover:text-black"
                  }`}
                >
                  हिंदी (Hindi)
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedLanguage("Bilingual")}
                  className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer text-[11px] ${
                    selectedLanguage === "Bilingual" ? "bg-[#17145E] text-white shadow-xs" : "text-slate-600 hover:text-black"
                  }`}
                >
                  Bilingual
                </button>
              </div>

            </div>

            {/* Results Count & Active Filter Reset */}
            <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
              <div>
                Showing <strong>{filteredModules.length}</strong> of {FEATURED_TRAINING_MODULES.length} verified modules
              </div>
              {(searchQuery || selectedCategory !== "All Categories" || selectedLanguage !== "all") && (
                <button
                  type="button"
                  onClick={handleClearFilters}
                  className="text-xs font-bold text-[#F45120] hover:underline cursor-pointer"
                >
                  Reset all filters
                </button>
              )}
            </div>

          </div>

          {/* Modules Grid */}
          {filteredModules.length === 0 ? (
            <div className="text-center py-12 bg-[#F8FAFC] border border-slate-200 rounded-2xl space-y-3">
              <div className="text-sm font-bold text-[#17145E]">No training modules matched your filter.</div>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                We offer over 50 modular programs. Reach out to our training director to review our complete custom course catalogue.
              </p>
              <button
                type="button"
                onClick={handleClearFilters}
                className="bg-[#17145E] text-white text-xs font-bold px-4 py-2 rounded-lg"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredModules.map((course) => {
                const isExpanded = expandedCourseId === course.id;
                return (
                  <div
                    key={course.id}
                    className="bg-white border border-slate-200 rounded-2xl p-6 space-y-5 hover:border-[#17145E]/40 hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-[#17145E] bg-[#F8FAFC] border border-slate-200 px-2.5 py-1 rounded-md text-[11px]">
                          {course.category}
                        </span>
                        <span className={`font-semibold px-2 py-0.5 rounded-md text-[11px] ${
                          course.language === "Hindi"
                            ? "bg-amber-100 text-amber-900 border border-amber-300"
                            : course.language === "Bilingual"
                            ? "bg-purple-100 text-purple-900 border border-purple-300"
                            : "bg-blue-50 text-blue-800 border border-blue-200"
                        }`}>
                          {course.language}
                        </span>
                      </div>

                      <h4 className="text-base sm:text-lg font-bold text-[#17145E] leading-snug">
                        {course.title}
                      </h4>

                      <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-1">
                        <div className="flex items-center gap-1.5">
                          <Users className="w-3.5 h-3.5 text-slate-400" />
                          <span>{course.targetAudience}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-[#F45120]" />
                          <span className="font-mono font-bold text-slate-700">{course.duration}</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3 pt-3 border-t border-slate-100">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                        Key Competencies &amp; Outcomes:
                      </div>
                      <ul className="space-y-1.5 text-xs text-slate-700">
                        {course.outcomes.map((outcome, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#F45120] flex-shrink-0 mt-0.5" />
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Course Action Buttons */}
                      <div className="pt-3 flex items-center justify-between gap-3 border-t border-slate-100">
                        <button
                          type="button"
                          onClick={() => handleEnquireCourse(course)}
                          className="bg-[#FFF2EE] hover:bg-[#F45120] text-[#F45120] hover:text-white font-bold text-xs px-3.5 py-2 rounded-xl border border-[#F45120]/30 transition-all flex items-center gap-1.5 cursor-pointer"
                        >
                          <BookOpen className="w-3.5 h-3.5" />
                          <span>Enquire on this Module</span>
                        </button>
                        <a
                          href={COMPANY_INFO.trainingUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[11px] font-bold text-[#17145E] hover:text-[#F45120] flex items-center gap-1"
                        >
                          <span>Full Syllabus</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Directory Deep-Link Notice */}
          <div className="text-center pt-4 space-y-2">
            <a
              href={COMPANY_INFO.trainingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#17145E] hover:text-[#F45120] hover:underline"
            >
              <span>View full directory of 50+ programmes on cooperlybranth.in/training</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <div className="text-xs text-slate-500">
              Training queries can also be dispatched directly to {COMPANY_INFO.primaryEmail}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
