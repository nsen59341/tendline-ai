/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { insights } from "../data";
import { FileText, CheckCircle2, Award, Zap, AlertCircle, TrendingUp, ChevronRight } from "lucide-react";

interface ResultsSectionProps {
  onCtaClick: () => void;
}

export default function ResultsSection({ onCtaClick }: ResultsSectionProps) {
  const [activeTab, setActiveTab] = useState(0);
  const currentInsight = insights[activeTab];

  return (
    <section className="py-20 bg-[#EAE7DD] border-b border-[#99775C]/20" id="insights">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <span className="font-mono text-xs text-[#99775C] uppercase tracking-widest font-extrabold flex items-center">
            <TrendingUp className="h-4 w-4 mr-1.5 text-[#99775C]" />
            Empirical B2B Performance Audits
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1A1A1A] tracking-tighter uppercase animate-fade-in">
            5 Strategic Insights: <span className="font-serif italic text-[#99775C] lowercase">the science of AI ROI</span>
          </h2>
          <p className="text-sm sm:text-base text-[#99775C] font-medium leading-relaxed">
            These findings are backed by contractor data from over 1,200 firms, IBISWorld 2025 studies, and real-world system deployments. Explore each strategic vertical below.
          </p>
        </div>

        {/* Desktop Interface: Interactive Grid Board */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Menu: Tabs Column */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-[10px] font-mono font-bold text-[#99775C] uppercase tracking-widest block mb-1 px-1">
              Select Strategic Focus
            </span>
            <div className="space-y-2.5">
              {insights.map((insight, idx) => {
                const isActive = activeTab === idx;
                return (
                  <button
                    key={insight.id}
                    onClick={() => setActiveTab(idx)}
                    className={`w-full text-left p-4 rounded-none border transition-all duration-300 cursor-pointer flex items-center space-x-3 ${
                      isActive
                        ? "bg-[#1A1A1A] border-[#1A1A1A] text-white"
                        : "bg-white border-[#99775C]/20 hover:border-[#99775C]/50 text-[#1A1A1A]"
                    }`}
                    id={`insight-tab-${idx}`}
                  >
                    <div className={`h-8 w-8 rounded-none flex items-center justify-center shrink-0 ${
                      isActive ? "bg-[#99775C] text-white" : "bg-[#EAE7DD] text-[#99775C]"
                    }`}>
                      <span className="font-mono text-xs font-black">0{insight.id}</span>
                    </div>
                    <div className="truncate">
                      <h4 className={`text-xs font-bold uppercase tracking-widest truncate ${isActive ? "text-white" : "text-[#1A1A1A]"}`}>
                        {insight.title.split(":")[0]}
                      </h4>
                      <p className={`text-[10px] font-mono truncate uppercase tracking-wider ${isActive ? "text-[#EAE7DD]/70" : "text-[#99775C]"}`}>
                        Score: {insight.opportunityScore.overall}% • {insight.source.split(",")[0]}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Inbound Warning Badge */}
            <div className="bg-[#EAE7DD]/30 border border-[#99775C]/20 rounded-none p-4 mt-6">
              <div className="flex space-x-2.5">
                <AlertCircle className="h-5 w-5 text-[#99775C] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h5 className="text-xs font-bold text-[#1A1A1A] uppercase tracking-widest">The cost of doing nothing</h5>
                  <p className="text-[11px] text-[#99775C] leading-relaxed font-medium">
                    Continuing to run unmonitored lines loses up to $120,000/year. Your competitors are deploying automated systems today.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Area: Dynamic Viewer Panel */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.3 }}
                className="bg-white border border-[#99775C]/20 rounded-none p-6 sm:p-8 space-y-6"
                id="insight-display-panel"
              >
                {/* Header Area */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-4 border-b border-[#99775C]/20">
                  <div className="space-y-1.5">
                    <span className="font-mono text-[9px] uppercase bg-[#EAE7DD] text-[#1A1A1A] px-2.5 py-1 rounded-none font-bold border border-[#99775C]/30 tracking-widest">
                      System Case Analysis {currentInsight.id}
                    </span>
                    <h3 className="font-serif italic text-2xl text-[#1A1A1A] tracking-tight">
                      {currentInsight.title}
                    </h3>
                    <p className="text-[11px] font-mono uppercase tracking-wider text-[#99775C]">
                      <strong className="text-[#99775C]">Primary Source:</strong> {currentInsight.source}
                    </p>
                  </div>

                  {/* Score Indicator Badge */}
                  <div className="bg-[#EAE7DD] border border-[#99775C]/30 px-4 py-2.5 rounded-none text-center shrink-0">
                    <span className="text-[9px] font-mono text-[#99775C] uppercase tracking-widest block leading-none mb-1">
                      Priority Rank
                    </span>
                    <span className="text-2xl font-sans font-black text-[#99775C] leading-none">
                      {currentInsight.opportunityScore.overall}%
                    </span>
                  </div>
                </div>

                {/* The Finding & The Applied Case */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                  <div className="md:col-span-7 space-y-4">
                    <div className="space-y-1">
                      <h4 className="text-xs font-mono text-[#99775C] uppercase tracking-widest font-bold flex items-center">
                        <FileText className="h-3.5 w-3.5 mr-1" />
                        The Macro Finding
                      </h4>
                      <p className="text-xs sm:text-sm text-[#1A1A1A] leading-relaxed font-medium">
                        {currentInsight.finding}
                      </p>
                    </div>

                    <div className="space-y-1.5 bg-[#EAE7DD]/30 border border-[#99775C]/15 p-3.5 rounded-none">
                      <h4 className="text-xs font-mono text-[#1A1A1A] uppercase tracking-widest font-bold flex items-center">
                        <Award className="h-3.5 w-3.5 mr-1 text-[#99775C]" />
                        Applied proof-of-concept
                      </h4>
                      <p className="text-[11px] text-[#99775C] leading-relaxed font-medium">
                        Implemented by: <strong className="text-[#1A1A1A] font-black">{currentInsight.whoApplied}</strong>
                      </p>
                    </div>
                  </div>

                  {/* Micro Score Breakdowns */}
                  <div className="md:col-span-5 bg-[#EAE7DD]/50 border border-[#99775C]/15 rounded-none p-4 space-y-3.5 flex flex-col justify-center">
                    <h5 className="text-[10px] font-mono font-bold text-[#1A1A1A] uppercase tracking-widest border-b border-[#99775C]/15 pb-1">
                      Opportunity Blueprint
                    </h5>
                    
                    {/* Impact score bar */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-[10px] font-mono text-[#99775C] uppercase tracking-wider">
                        <span>FINANCIAL IMPACT</span>
                        <span className="font-bold text-[#1A1A1A]">{currentInsight.opportunityScore.impact}%</span>
                      </div>
                      <div className="h-1.5 bg-[#99775C]/20 rounded-none overflow-hidden">
                        <div className="h-full bg-[#99775C]" style={{ width: `${currentInsight.opportunityScore.impact}%` }} />
                      </div>
                    </div>

                    {/* Ease score bar */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-[10px] font-mono text-[#99775C] uppercase tracking-wider">
                        <span>INTEGRATION FEASIBILITY</span>
                        <span className="font-bold text-[#1A1A1A]">{currentInsight.opportunityScore.ease}%</span>
                      </div>
                      <div className="h-1.5 bg-[#99775C]/20 rounded-none overflow-hidden">
                        <div className="h-full bg-[#99775C]" style={{ width: `${currentInsight.opportunityScore.ease}%` }} />
                      </div>
                    </div>

                    <p className="text-[8px] text-[#99775C] font-mono leading-relaxed pt-1 border-t border-[#99775C]/10 uppercase">
                      *Overall rank calculated as a weighted (70% Impact / 30% Feasibility) automation priority model.
                    </p>
                  </div>
                </div>

                {/* Measured Impact Checklist */}
                <div className="space-y-2.5">
                  <h4 className="text-xs font-mono text-[#99775C] uppercase tracking-widest font-bold">
                    Empirically Recorded Performance Metrics
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {currentInsight.measuredImpact.map((metric, i) => (
                      <div key={i} className="flex items-start space-x-2 bg-[#EAE7DD]/20 border border-[#99775C]/15 p-3 rounded-none hover:border-[#99775C]/45 transition-colors">
                        <CheckCircle2 className="h-4 w-4 text-[#99775C] shrink-0 mt-0.5" />
                        <span className="text-[11px] font-bold text-[#1A1A1A] tracking-tight uppercase leading-relaxed">{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actionable AI Solution */}
                <div className="bg-[#1A1A1A] text-white rounded-none p-5 border border-[#99775C]/20 relative overflow-hidden">
                  <div className="absolute right-0 bottom-0 translate-y-4 translate-x-4 opacity-10">
                    <Zap className="h-28 w-28 text-white" />
                  </div>
                  <div className="relative z-10 space-y-2">
                    <h4 className="text-xs font-mono text-[#99775C] uppercase tracking-widest font-extrabold flex items-center">
                      <Zap className="h-4 w-4 mr-1 text-[#99775C]" />
                      TendLine Infrastructure Integration
                    </h4>
                    <p className="text-xs leading-relaxed text-[#EAE7DD] font-light">
                      {currentInsight.aiOpportunity}
                    </p>
                  </div>
                </div>

                {/* Sub CTA row */}
                <div className="pt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <p className="text-[10px] text-[#99775C] uppercase tracking-wider font-bold">
                    Ready to deploy this exact system in your exclusive local territory?
                  </p>
                  <button
                    onClick={onCtaClick}
                    className="px-6 py-2.5 border border-[#99775C] text-xs font-bold uppercase tracking-widest text-[#1A1A1A] hover:bg-[#99775C] hover:text-white transition-colors duration-200 cursor-pointer rounded-none"
                    id="insight-deploy-btn"
                  >
                    Deploy Solution
                  </button>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}
