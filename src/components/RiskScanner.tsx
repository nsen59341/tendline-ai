/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { failureScenarios } from "../data";
import { AlertTriangle, CheckCircle, ShieldAlert, BadgeAlert, ArrowRight, TrendingUp, HelpCircle } from "lucide-react";

interface RiskScannerProps {
  onCtaClick: () => void;
}

export default function RiskScanner({ onCtaClick }: RiskScannerProps) {
  const [selectedLeaks, setSelectedLeaks] = useState<number[]>([1, 4, 6, 11]); // default preset leaks to demonstrate value
  const [activeCategory, setActiveCategory] = useState<"All" | "Acquisition" | "Experience" | "Efficiency" | "Growth">("All");

  const toggleLeak = (id: number) => {
    setSelectedLeaks((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredScenarios = failureScenarios.filter(
    (item) => activeCategory === "All" || item.category === activeCategory
  );

  const totalLeakage = selectedLeaks.reduce((sum, leakId) => {
    const scenario = failureScenarios.find((s) => s.id === leakId);
    return sum + (scenario ? scenario.annualLeakEstimate : 0);
  }, 0);

  // Determine recommendation based on leakage and count
  const getRecommendation = () => {
    if (selectedLeaks.length === 0) {
      return {
        tier: "Select Leaks Below",
        desc: "Check off the operational gaps your business currently faces to analyze your tailored blueprint.",
        color: "text-brand-muted",
        bg: "bg-brand-light",
      };
    }
    if (selectedLeaks.length <= 4) {
      return {
        tier: "Tier 1: Call Capture Starter",
        desc: "Your core leaks are in inbound phone capture. Securing AI Voice agents and missed-call back triggers will instantly plug these high-ticket leaks.",
        color: "text-brand-secondary",
        bg: "bg-brand-primary/20 border border-brand-secondary/35",
      };
    } else if (selectedLeaks.length <= 9) {
      return {
        tier: "Tier 2: Lead Nurturing & Conversion",
        desc: "You have multi-stage leaks spanning web conversions, follow-ups, and reminders. An integrated chatbot and CRM email/SMS automation layer is critical.",
        color: "text-brand-secondary font-black",
        bg: "bg-amber-500/10 border border-amber-500/30",
      };
    } else {
      return {
        tier: "Tier 3: Full AI Growth Infrastructure",
        desc: "Critical operational vulnerability. Multiple severe leaks in retention, dispatcher context, and seasonal slow dips require a complete custom AI front-office operation.",
        color: "text-red-500 font-black",
        bg: "bg-red-500/10 border border-red-500/30",
      };
    }
  };

  const recommendation = getRecommendation();

  const categories = ["All", "Acquisition", "Experience", "Efficiency", "Growth"];

  return (
    <section className="py-20 bg-white border-b border-[#99775C]/20 relative animate-fade-in" id="diagnostic">
      {/* Background patterns */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-[#99775C]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-14 space-y-3">
          <span className="font-mono text-xs text-[#99775C] uppercase tracking-widest font-extrabold flex items-center">
            <ShieldAlert className="h-4 w-4 mr-1.5 text-[#99775C]" />
            Operational Risk Vulnerability Scanner
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1A1A1A] tracking-tighter uppercase leading-[1.05]">
            How much revenue is your business <span className="font-serif italic text-[#99775C] lowercase">actively leaking?</span>
          </h2>
          <p className="text-sm sm:text-base text-[#99775C] font-medium leading-relaxed">
            Unanswered phone calls, unrequested reviews, and silent estimates bleed cash. Select the failure scenarios your field business faces to scan your operational leakage profile.
          </p>
        </div>

        {/* Dashboard grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Area: 15 Scenarios list */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Category filtering tags */}
            <div className="flex flex-wrap items-center gap-1.5 border-b border-[#99775C]/20 pb-4">
              <span className="text-[10px] font-mono text-[#99775C] uppercase tracking-widest font-bold mr-2">Filter Scenarios:</span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat as any)}
                  className={`px-3.5 py-1.5 rounded-none text-xs font-bold tracking-widest uppercase transition-all duration-200 cursor-pointer ${
                    activeCategory === cat
                      ? "bg-[#1A1A1A] text-white border border-[#1A1A1A]"
                      : "bg-[#EAE7DD] text-[#1A1A1A] hover:bg-[#99775C]/25 border border-[#99775C]/20"
                  }`}
                  id={`filter-cat-${cat}`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* List block */}
            <div className="space-y-3 h-[520px] overflow-y-auto pr-2" id="scenarios-scroll-list">
              {filteredScenarios.map((item) => {
                const isChecked = selectedLeaks.includes(item.id);
                return (
                  <div
                    key={item.id}
                    onClick={() => toggleLeak(item.id)}
                    className={`p-4 rounded-none border transition-all duration-300 cursor-pointer select-none relative overflow-hidden group ${
                      isChecked
                        ? "bg-[#EAE7DD]/10 border-[#99775C]"
                        : "bg-white border-[#99775C]/20 hover:border-[#99775C]/40"
                    }`}
                    id={`leak-card-${item.id}`}
                  >
                    {/* Visual check indicator */}
                    <div className="flex items-start space-x-3 relative z-10">
                      <div className="mt-0.5 shrink-0">
                        <div className={`h-5 w-5 rounded-none border flex items-center justify-center transition-all ${
                          isChecked
                            ? "bg-[#99775C] border-[#99775C] text-white"
                            : "border-[#99775C]/40 bg-white"
                        }`}>
                          {isChecked && <CheckCircle className="h-4 w-4 fill-current stroke-transparent" />}
                        </div>
                      </div>

                      <div className="space-y-2 flex-1">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="font-mono text-[8px] uppercase tracking-widest font-bold bg-[#EAE7DD] px-2.5 py-1 text-[#1A1A1A] border border-[#99775C]/20">
                            {item.category} Leak
                          </span>
                          <span className="font-mono text-xs font-bold text-[#99775C] uppercase tracking-wider">
                            Est. Leak: ${item.annualLeakEstimate.toLocaleString()}/yr
                          </span>
                        </div>
                        <p className="text-xs font-bold text-[#1A1A1A] uppercase tracking-tight leading-relaxed">
                          {item.scenario}
                        </p>
                        
                        {/* Hidden Reveal: Auto-Recommended AI Fix */}
                        <AnimatePresence>
                          {isChecked && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="pt-3 border-t border-[#99775C]/20 space-y-1.5"
                              id={`leak-fix-${item.id}`}
                            >
                              <p className="text-[10px] font-bold text-[#99775C] uppercase tracking-widest flex items-center">
                                <span className="h-1.5 w-1.5 rounded-full bg-green-600 mr-1.5 animate-pulse"></span>
                                TendLine Custom AI Remedy ({item.deliveryModel})
                              </p>
                              <p className="text-[11px] text-[#1A1A1A]/80 leading-relaxed font-medium">
                                {item.solution}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <p className="text-[9px] text-[#99775C] font-mono leading-relaxed px-1 uppercase tracking-wider">
              *Annual leakage estimations are calculated on a localized service baseline with standard team logistics ($250-$2,400 ticket values, 15% booking decay, and local organic SEO drop rates).
            </p>
          </div>

          {/* Right Area: Revenue Leakage Report Board */}
          <div className="lg:col-span-4 sticky top-24">
            <div className="bg-[#1A1A1A] rounded-none border border-[#99775C]/30 p-6 text-white shadow-none space-y-6" id="diagnostic-report">
              
              <div className="space-y-1 pb-4 border-b border-[#99775C]/20">
                <span className="font-mono text-[9px] text-[#99775C] uppercase tracking-widest font-bold block">
                  Live Diagnostics
                </span>
                <h4 className="font-sans text-base font-black text-white uppercase tracking-widest leading-tight">
                  Contractor Financial Leakage Profile
                </h4>
              </div>

              {/* Dynamic Tally Counter */}
              <div className="space-y-1.5 py-4 border-b border-[#99775C]/20 text-center relative overflow-hidden bg-[#1A1A1A] rounded-none border border-[#99775C]/20 p-4">
                <span className="text-[9px] font-mono text-[#EAE7DD]/60 uppercase tracking-widest block mb-1">
                  Total Annual Revenue Bleeding
                </span>
                <div className="text-3xl sm:text-4xl font-serif italic text-white tracking-tight">
                  ${totalLeakage.toLocaleString()}<span className="text-sm font-sans font-black text-[#99775C] not-italic uppercase ml-1">/yr</span>
                </div>
                <div className="text-[9px] font-mono text-[#99775C] uppercase tracking-widest mt-1">
                  Across {selectedLeaks.length} operational holes
                </div>
              </div>

              {/* Dynamic Recommended Offer Tier */}
              <div className={`p-4 rounded-none space-y-2 transition-all duration-300 ${
                selectedLeaks.length === 0
                  ? "bg-white/5 border border-white/10"
                  : selectedLeaks.length <= 4
                  ? "border border-[#99775C] bg-[#99775C]/10 ring-1 ring-[#99775C]"
                  : "border border-[#99775C] bg-[#99775C]/15 ring-1 ring-[#99775C]"
              }`}>
                <span className="font-mono text-[9px] uppercase tracking-widest text-white/50 block leading-none">
                  Recommended Solution Tier
                </span>
                <h5 className="font-sans text-sm font-black text-white uppercase tracking-widest">
                  {selectedLeaks.length === 0 ? "Select Leaks" : recommendation.tier}
                </h5>
                <p className="text-[11px] text-white/70 leading-relaxed font-light">
                  {recommendation.desc}
                </p>
              </div>

              {/* Action Pitch */}
              <div className="space-y-3 pt-2">
                <div className="flex items-start space-x-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-600 animate-pulse mt-1.5 shrink-0" />
                  <p className="text-[11px] text-white/80 leading-relaxed uppercase tracking-wide">
                    Leaving these leaks active drains more cash than the custom setup fee of a complete operational AI system within <span className="font-black text-white">less than 30 days</span>.
                  </p>
                </div>

                <button
                  onClick={onCtaClick}
                  className="w-full bg-[#EAE7DD] hover:bg-white text-[#1A1A1A] hover:text-[#1A1A1A] text-xs font-bold uppercase tracking-widest py-3.5 px-6 rounded-none transition-all duration-200 cursor-pointer shadow-sm"
                  id="diagnostic-cta-btn"
                >
                  Seal Leaks Now
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
