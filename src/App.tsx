/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ResultsSection from "./components/ResultsSection";
import RiskScanner from "./components/RiskScanner";
import OfferStack from "./components/OfferStack";
import SecurityTrust from "./components/SecurityTrust";
import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer";
import CtaModal from "./components/CtaModal";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const BOOKING_LINK = "https://cal.com/natasha-sen-3vjvmt/discovery";

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="relative min-h-screen bg-brand-light font-sans text-brand-dark overflow-x-hidden antialiased">
      {/* Floating high-end navigation bar */}
      <Navbar onCtaClick={handleOpenModal} />

      {/* Hero section with Problem-Agitate-Solution layout and real-time simulator */}
      <Hero onCtaClick={handleOpenModal} />

      {/* Part 1: Five Industry-Specific Insights Dashboard */}
      <ResultsSection onCtaClick={handleOpenModal} />

      {/* Part 2: 15 Critical Failure Scenarios with Live Revenue Leakage diagnostics */}
      <RiskScanner onCtaClick={handleOpenModal} />

      {/* Part 3: Three-Tier Offer Structure (Outcome & Ideal Fleet size focus, NO pricing) */}
      <OfferStack onCtaClick={handleOpenModal} />

      {/* Dedicated Enterprise Security & Trust Indicators */}
      <SecurityTrust />

      {/* Common B2B Adoption FAQs: Complexity, CRM migration, Uptime, Sound Quality */}
      <FaqSection onCtaClick={handleOpenModal} />

      {/* Footer detailing SQRR Labs ownership, territory locks, and integration stack */}
      <Footer onCtaClick={handleOpenModal} bookingLink={BOOKING_LINK} />

      {/* Conversion-optimized prequalification form & Cal.com scheduler pop-up */}
      <CtaModal isOpen={isModalOpen} onClose={handleCloseModal} bookingLink={BOOKING_LINK} />
    </div>
  );
}
