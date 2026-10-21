"use client";

import React, { useState } from "react";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { TrustProposition } from "@/components/trust-proposition";
import { ServicesSection } from "@/components/services-section";
import { MandateCalculator } from "@/components/mandate-calculator";
import { IndustryFocus } from "@/components/industry-focus";
import { TrainingSection } from "@/components/training-section";
import { MethodologySection } from "@/components/methodology-section";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { HiringConsultationModal, ConsultationInitialData } from "@/components/hiring-consultation-modal";
import { FloatingQuickDesk } from "@/components/floating-quick-desk";

export default function HomePage() {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [consultationInitialData, setConsultationInitialData] = useState<ConsultationInitialData | null>(null);

  const handleOpenConsultation = (initialData?: ConsultationInitialData) => {
    if (initialData) {
      setConsultationInitialData(initialData);
    } else {
      setConsultationInitialData(null);
    }
    setIsConsultationModalOpen(true);
  };

  const handleCloseConsultation = () => {
    setIsConsultationModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#292A35]">
      {/* 1. Header & Navigation */}
      <Header onOpenConsultation={() => handleOpenConsultation()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero onOpenConsultation={() => handleOpenConsultation()} />

        {/* 3. Trust & Core Value Proposition */}
        <TrustProposition onOpenConsultation={() => handleOpenConsultation()} />

        {/* 4. Verified Core Services */}
        <ServicesSection onOpenConsultation={() => handleOpenConsultation()} />

        {/* 5. Interactive Mandate Scoping & Hiring Calculator */}
        <MandateCalculator onOpenConsultation={handleOpenConsultation} />

        {/* 6. Industrial Engineering Disciplines */}
        <IndustryFocus onOpenConsultation={() => handleOpenConsultation()} />

        {/* 7. Training & Skill Development (with Live Directory Search & Filter) */}
        <TrainingSection onOpenConsultation={handleOpenConsultation} />

        {/* 8. Why Cooper Lybranth & Methodology (with CLWP 4-Stage Sourcing Pipeline Stepper) */}
        <MethodologySection />

        {/* 9. Final Call to Action */}
        <CtaSection onOpenConsultation={() => handleOpenConsultation()} />
      </main>

      {/* 10. Comprehensive Corporate Footer */}
      <Footer />

      {/* 11. Interactive Hiring Consultation Modal */}
      <HiringConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={handleCloseConsultation}
        initialData={consultationInitialData}
      />

      {/* 12. Floating Direct Desk & WhatsApp Widget */}
      <FloatingQuickDesk onOpenConsultation={() => handleOpenConsultation()} />
    </div>
  );
}
