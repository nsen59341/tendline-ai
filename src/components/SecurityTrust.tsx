/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Shield, Key, RefreshCw, Cpu, CheckCircle, Lock, Server, Users } from "lucide-react";

export default function SecurityTrust() {
  const securityPillars = [
    {
      icon: <Lock className="h-5 w-5 text-brand-secondary" />,
      title: "Proprietary Data Isolation",
      desc: "Your customer records, history, and booking calendars are stored in dedicated Firestore or CRM environments. We never compile, store, or train third-party AI models on your proprietary business intelligence.",
    },
    {
      icon: <Key className="h-5 w-5 text-brand-secondary" />,
      title: "Encrypted API Transmissions",
      desc: "All pipeline synchronizations between your voice agents, website chatbots, and CRMs (like ServiceTitan or Housecall Pro) are encrypted with HTTPS and secure webhook verification keys.",
    },
    {
      icon: <Cpu className="h-5 w-5 text-brand-secondary" />,
      title: "Immediate Human Triage Fallback",
      desc: "Our conversational frameworks include instant fail-safes. If a call presents an edge case or if a customer demands a human, the AI smoothly transfers the call to your office with a complete typed context transcript.",
    },
    {
      icon: <Server className="h-5 w-5 text-brand-secondary" />,
      title: "24/7 Server Monitoring & Failover",
      desc: "We build on enterprise-grade automated cloud environments. Real-time logging tracks API uptime, immediately triggering backup workflows on Make/n8n if your local CRM undergoes downtime.",
    },
  ];

  return (
    <section className="py-20 bg-white border-b border-[#99775C]/20 relative animate-fade-in" id="security">
      <div className="absolute bottom-0 left-0 -ml-20 w-[400px] h-[400px] rounded-full bg-[#99775C]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Layout: Split column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Copy Pitch */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-[#EAE7DD] border border-[#99775C]/30 px-3 py-1 rounded-none">
              <Shield className="h-3.5 w-3.5 text-[#99775C]" />
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#1A1A1A] font-extrabold">
                Enterprise B2B Security Compliance
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-[#1A1A1A] tracking-tighter uppercase leading-[1.05]">
              Enterprise-grade safety for <span className="font-serif italic text-[#99775C] lowercase font-normal">mission-critical operations.</span>
            </h2>

            <div className="space-y-4 text-xs sm:text-sm text-[#99775C] font-medium leading-relaxed">
              <p>
                A glitchy chatbot or duplicated CRM lead is an operational nightmare that delays dispatchers and frustrates customers. We build complete, high-resilience operational infrastructure, emphatically not standalone tools or simple widgets.
              </p>
              <p>
                Every line of code, prompt instruction, and API webhook we write is protected behind multi-layer validation loops. This ensures your customer records stay pristine, your schedules stay locked, and your voice lines respond in ultra-low latency.
              </p>
            </div>

            {/* Quick trust metrics */}
            <div className="pt-4 grid grid-cols-3 gap-4 border-t border-[#99775C]/20">
              <div className="space-y-1">
                <span className="font-serif italic text-2xl text-[#1A1A1A] block leading-none">99.9%</span>
                <span className="font-mono text-[8px] text-[#99775C] uppercase tracking-widest block font-bold">API Uptime Guaranteed</span>
              </div>
              <div className="space-y-1">
                <span className="font-serif italic text-2xl text-[#1A1A1A] block leading-none">&lt;1 Sec</span>
                <span className="font-mono text-[8px] text-[#99775C] uppercase tracking-widest block font-bold">Voice Latency Baseline</span>
              </div>
              <div className="space-y-1">
                <span className="font-serif italic text-2xl text-[#1A1A1A] block leading-none">SOC-2</span>
                <span className="font-mono text-[8px] text-[#99775C] uppercase tracking-widest block font-bold">Aligned Integrations</span>
              </div>
            </div>
          </div>

          {/* Right Column: Grid features list */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6" aria-label="Security Pillars">
            {securityPillars.map((pillar, i) => (
              <div
                key={i}
                className="bg-[#EAE7DD]/20 border border-[#99775C]/15 rounded-none p-5 hover:border-[#99775C]/45 transition-all duration-300 space-y-3.5"
                id={`security-pillar-${i}`}
              >
                <div className="h-10 w-10 bg-white rounded-none flex items-center justify-center border border-[#99775C]/20 shadow-none">
                  {pillar.icon}
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-xs font-bold text-[#1A1A1A] uppercase tracking-widest">
                    {pillar.title}
                  </h3>
                  <p className="text-[11px] text-[#99775C] leading-relaxed font-medium">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Territory Verification Row */}
        <div className="mt-12 p-6 rounded-none bg-[#1A1A1A] text-white border border-[#99775C]/25 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-1">
            <h4 className="font-sans text-sm font-black text-white uppercase tracking-widest flex items-center">
              <Users className="h-4 w-4 mr-2 text-[#99775C]" />
              SQRR Labs Partnership Blueprint Standard
            </h4>
            <p className="text-xs text-[#EAE7DD] max-w-2xl font-light leading-relaxed">
              We operate strictly within designated local territories. Once an AI Growth System is deployed in a city for a contractor, we do not build competitive pipelines for any other contractor in that immediate territory.
            </p>
          </div>
          <div className="shrink-0 flex items-center space-x-2 bg-black px-4 py-2 rounded-none border border-[#99775C]/20">
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="font-mono text-[9px] text-green-400 font-bold uppercase tracking-widest">Territory Locked</span>
          </div>
        </div>

      </div>
    </section>
  );
}
