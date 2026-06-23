/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { faqs } from "../data";
import { HelpCircle, ChevronDown, ChevronUp, CheckCircle, ArrowRight } from "lucide-react";

interface FaqSectionProps {
  onCtaClick: () => void;
}

export default function FaqSection({ onCtaClick }: FaqSectionProps) {
  const [expandedId, setExpandedId] = useState<number | null>(1); // default expand the first FAQ

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="py-20 bg-[#EAE7DD] border-b border-[#99775C]/20 animate-fade-in" id="faqs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Context Card */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            <div className="space-y-3">
              <span className="font-mono text-xs text-[#99775C] uppercase tracking-widest font-bold flex items-center">
                <HelpCircle className="h-4 w-4 mr-1.5 text-[#99775C]" />
                Frequently Answered Queries
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#1A1A1A] tracking-tighter uppercase leading-[1.05]">
                Addressing your critical <span className="font-serif italic text-[#99775C] lowercase font-normal">integration concerns.</span>
              </h2>
              <p className="text-sm text-[#99775C] font-medium leading-relaxed">
                Before implementing AI into core operational lines, contractors must resolve questions regarding system reliability, team disruption, and concrete financial outcomes.
              </p>
            </div>

            <div className="bg-white border border-[#99775C]/20 p-5 rounded-none space-y-4">
              <h4 className="text-xs font-bold text-[#1A1A1A] uppercase tracking-widest">Unmatched Implementation Guarantee</h4>
              <ul className="space-y-2.5">
                {[
                  "Zero disruption to your current field tech workflows.",
                  "Full white-glove setup including script writing & testing.",
                  "Territory lockout guarantees protect local lead streams."
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-[#99775C] shrink-0 mt-0.5" />
                    <span className="text-xs text-[#1A1A1A] leading-relaxed font-bold uppercase tracking-tight">{item}</span>
                  </li>
                ))}
              </ul>
              
              <button
                onClick={onCtaClick}
                className="w-full bg-[#1A1A1A] hover:bg-[#99775C] text-white text-xs font-bold uppercase tracking-widest py-3 px-4 rounded-none transition-all cursor-pointer"
                id="faq-pitch-cta"
              >
                Request Custom Tech Audit
              </button>
            </div>
          </div>

          {/* Right Column: Dynamic Accordions */}
          <div className="lg:col-span-8 space-y-3.5" aria-label="Accordions FAQ list">
            {faqs.map((faq) => {
              const isExpanded = expandedId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-none border transition-all duration-300 overflow-hidden ${
                    isExpanded
                      ? "bg-white border-[#99775C] shadow-none"
                      : "bg-white/45 border-[#99775C]/15 hover:border-[#99775C]/40"
                  }`}
                  id={`faq-item-${faq.id}`}
                >
                  {/* Accordion Trigger Head */}
                  <button
                    onClick={() => toggleExpand(faq.id)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer select-none"
                    aria-expanded={isExpanded}
                    id={`faq-trigger-${faq.id}`}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="font-mono text-[8px] uppercase tracking-widest font-bold bg-[#EAE7DD] text-[#1A1A1A] px-2.5 py-1 rounded-none border border-[#99775C]/25">
                        {faq.category}
                      </span>
                      <h3 className="text-xs sm:text-sm font-bold text-[#1A1A1A] hover:text-[#99775C] uppercase tracking-tight transition-colors">
                        {faq.question}
                      </h3>
                    </div>
                    <div className="shrink-0 text-[#99775C]">
                      {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    </div>
                  </button>

                  {/* Accordion Body Content */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        id={`faq-content-${faq.id}`}
                      >
                        <div className="px-5 pb-5 pt-1 border-t border-[#99775C]/10">
                          <p className="text-xs sm:text-sm text-[#99775C] leading-relaxed font-medium">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
