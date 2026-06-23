/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { offerTiers } from "../data";
import { Check, ShieldCheck, ArrowUpRight, Zap, Target, Hourglass } from "lucide-react";

interface OfferStackProps {
  onCtaClick: () => void;
}

export default function OfferStack({ onCtaClick }: OfferStackProps) {
  return (
    <section className="py-20 bg-[#EAE7DD] border-b border-[#99775C]/20 relative animate-fade-in" id="offers">
      <div className="absolute top-0 right-0 -mr-40 w-[500px] h-[500px] rounded-full bg-[#99775C]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <span className="font-mono text-xs text-[#99775C] uppercase tracking-widest font-bold flex items-center">
            <Zap className="h-4 w-4 mr-1.5 text-[#99775C]" />
            Strategic Operations Offer Stack
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1A1A1A] tracking-tighter uppercase leading-[1.05]">
            Vertical AI Systems Blueprint: <span className="font-serif italic text-[#99775C] lowercase">three integration tiers</span>
          </h2>
          <p className="text-sm sm:text-base text-[#99775C] font-medium leading-relaxed">
            Every blueprint is custom-architected for your localized dispatch parameters. No basic templates, no unmonitored scripts. Select your operational tier.
          </p>
        </div>

        {/* Tiers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {offerTiers.map((tier, index) => {
            const isPopular = index === 1; // Highlight the middle Tier as popular
            return (
              <div
                key={tier.id}
                className={`rounded-none border flex flex-col justify-between transition-all duration-300 relative ${
                  isPopular
                    ? "border-[#99775C] bg-[#99775C]/10 ring-1 ring-[#99775C] lg:-translate-y-3"
                    : "border-[#99775C]/20 bg-white"
                }`}
                id={`tier-card-${tier.id}`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#1A1A1A] text-white font-mono text-[8px] uppercase tracking-widest font-bold px-3 py-1 rounded-none">
                    Most Requested Blueprint
                  </div>
                )}

                {/* Card Top: Metadata, Title, and Tagline */}
                <div className="p-6 sm:p-8 space-y-5 border-b border-[#99775C]/15">
                  <div className="space-y-1">
                    <span className="font-mono text-[9px] uppercase text-[#99775C] font-bold tracking-widest block">
                      Blueprint Tier 0{tier.id}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-[#1A1A1A] tracking-tighter uppercase">
                      {tier.title}
                    </h3>
                  </div>
                  <p className="text-xs text-[#99775C] uppercase tracking-wider font-bold leading-relaxed min-h-[40px]">
                    {tier.tagline}
                  </p>
                </div>

                {/* Card Body: Features */}
                <div className="p-6 sm:p-8 space-y-6 flex-1 bg-transparent">
                  <div className="space-y-4">
                    <h4 className="text-[9px] font-mono font-bold text-[#1A1A1A] uppercase tracking-widest block border-b border-[#99775C]/15 pb-1">
                      Included System Modules
                    </h4>
                    <ul className="space-y-3" aria-label={`Features for ${tier.title}`}>
                      {tier.features.map((feature, i) => {
                        const splitIdx = feature.indexOf(":");
                        const hasBoldHeader = splitIdx !== -1;
                        const header = hasBoldHeader ? feature.substring(0, splitIdx + 1) : "";
                        const body = hasBoldHeader ? feature.substring(splitIdx + 1) : feature;

                        return (
                          <li key={i} className="flex items-start space-x-2.5">
                            <Check className="h-4 w-4 text-[#99775C] shrink-0 mt-0.5" />
                            <span className="text-xs text-[#1A1A1A] leading-relaxed font-medium">
                              {hasBoldHeader ? (
                                <>
                                  <strong className="text-[#1A1A1A] font-extrabold uppercase tracking-tight">{header}</strong>
                                  {body}
                                </>
                              ) : (
                                feature
                              )}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  {/* Guaranteed Results Section */}
                  <div className="space-y-3 pt-4 border-t border-[#99775C]/15">
                    <h4 className="text-[9px] font-mono font-bold text-[#99775C] uppercase tracking-widest block">
                      Target Operational Outcomes
                    </h4>
                    <ul className="space-y-2" aria-label={`Outcomes for ${tier.title}`}>
                      {tier.results.map((result, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <span className="h-1.5 w-1.5 rounded-none bg-[#99775C] shrink-0 mt-2"></span>
                          <span className="text-xs font-bold text-[#1A1A1A] uppercase tracking-tight">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Footer: Metadata and Action */}
                <div className="p-6 sm:p-8 bg-[#EAE7DD]/10 border-t border-[#99775C]/15 space-y-5 rounded-none">
                  {/* Target Audience Profile */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pb-2 text-[9px] font-mono uppercase tracking-wider text-[#99775C] border-b border-[#99775C]/15">
                    <div className="space-y-1">
                      <span className="font-bold block tracking-widest text-[8px]">Ideal Fleet Size</span>
                      <span className="text-[#1A1A1A] font-extrabold block truncate">{tier.bestFor.split("looking")[0].replace("HVAC,", "")}</span>
                    </div>
                    <div className="space-y-1">
                      <span className="font-bold block tracking-widest text-[8px]">Delivery Model</span>
                      <span className="text-[#1A1A1A] font-extrabold block truncate">{tier.delivery.split("(")[0]}</span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <button
                    onClick={onCtaClick}
                    className={`w-full text-xs font-bold uppercase tracking-widest py-3.5 px-6 rounded-none transition-all duration-300 cursor-pointer ${
                      isPopular
                        ? "bg-[#1A1A1A] hover:bg-[#99775C] text-white"
                        : "border border-[#99775C] hover:bg-[#1A1A1A] hover:border-[#1A1A1A] hover:text-white text-[#1A1A1A]"
                    }`}
                    id={`offers-cta-btn-${tier.id}`}
                  >
                    Request Blueprint Audit
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Integration Footnote */}
        <div className="mt-12 bg-white rounded-none p-5 border border-[#99775C]/20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 bg-[#EAE7DD] border border-[#99775C]/10 rounded-none flex items-center justify-center shrink-0">
              <ShieldCheck className="h-5 w-5 text-[#99775C]" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-[#1A1A1A] uppercase tracking-widest">Strict System Protection Pledge</h4>
              <p className="text-[11px] text-[#99775C] font-medium leading-relaxed">
                We do not integrate mock scripts or unstable beta plugins. All integrations are coded using strict error boundaries on robust Make/n8n environments.
              </p>
            </div>
          </div>
          <button
            onClick={onCtaClick}
            className="underline underline-offset-4 font-mono font-bold uppercase text-[10px] tracking-widest text-[#99775C] hover:text-[#1A1A1A] whitespace-nowrap cursor-pointer shrink-0"
            id="offers-footnote-cta"
          >
            Learn More About Our Tech Stack
          </button>
        </div>

      </div>
    </section>
  );
}
