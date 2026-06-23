/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Phone, Mail, MapPin, ArrowUpRight, ShieldCheck, Heart } from "lucide-react";

interface FooterProps {
  onCtaClick: () => void;
  bookingLink: string;
}

export default function Footer({ onCtaClick, bookingLink }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const techStack = ["Voiceflow", "Vapi", "Retell AI", "Make.com", "n8n", "Bolt", "Lovable (AI coding)"];

  return (
    <footer className="bg-[#1A1A1A] text-[#D4CFC9] pt-16 pb-12 border-t border-[#99775C]/25 relative animate-fade-in" id="footer">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-[#99775C]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Upper Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#99775C]/20">
          
          {/* Brand Col */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-9 w-9 bg-[#EAE7DD] flex items-center justify-center rounded-none border border-[#99775C]/20">
                <span className="font-sans font-black text-[#1A1A1A] text-lg">TL</span>
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-black text-base uppercase tracking-widest text-white leading-none">
                  TendLine
                </span>
                <span className="font-mono text-[8px] uppercase tracking-widest text-[#99775C] leading-none mt-1 font-bold">
                  AI Growth Systems
                </span>
              </div>
            </div>
            
            <p className="text-xs text-[#BCB6AF] leading-relaxed max-w-sm font-medium uppercase tracking-tight">
              Premium B2B AI operational systems and complete growth infrastructure designed exclusively for Home Services: HVAC, Plumbing, Electrical, and Pest Control contractors.
            </p>

            <div className="flex items-center space-x-2 bg-[#EAE7DD]/10 border border-[#99775C]/20 p-2 rounded-none max-w-xs">
              <span className="h-1.5 w-1.5 rounded-none bg-green-500 shrink-0 animate-pulse"></span>
              <span className="font-mono text-[8px] text-white uppercase tracking-widest font-bold">
                SQRR Labs Standard Verified
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 space-y-3.5">
            <h5 className="font-mono text-[9px] text-white uppercase tracking-widest font-extrabold">
              Site Navigation
            </h5>
            <ul className="space-y-2 text-xs font-bold uppercase tracking-wider" aria-label="Footer Navigation">
              {["Industry Insights", "Diagnostic Scanner", "AI Blueprint Offers", "Security & Trust", "FAQs"].map((item, idx) => {
                const links = ["#insights", "#diagnostic", "#offers", "#security", "#faqs"];
                return (
                  <li key={item}>
                    <a href={links[idx]} className="hover:text-white transition-colors text-[#A59F97]">
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Direct Technical Stack */}
          <div className="md:col-span-3 space-y-3.5">
            <h5 className="font-mono text-[9px] text-white uppercase tracking-widest font-extrabold">
              Agency Tech Stack
            </h5>
            <div className="flex flex-wrap gap-1.5" aria-label="Technical Stack Integrations">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-[9px] bg-[#EAE7DD]/10 text-white px-2.5 py-1 rounded-none border border-[#99775C]/20 shrink-0 uppercase tracking-widest"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-[9px] text-[#99775C] font-mono leading-relaxed uppercase font-bold tracking-wider">
              Hardened, API-first integrations with failover redundancy. No brittle templates.
            </p>
          </div>

          {/* Core Contacts & Booking */}
          <div className="md:col-span-3 space-y-4">
            <h5 className="font-mono text-[9px] text-white uppercase tracking-widest font-extrabold">
              Contact & Booking
            </h5>
            
            <div className="space-y-2.5 text-xs text-[#A59F97] uppercase tracking-wider font-bold" aria-label="Contact Information">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-[#99775C] shrink-0" />
                <span>United States Market Operations</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-[#99775C] shrink-0" />
                <span className="truncate">nsen59341@gmail.com</span>
              </div>
            </div>

            <button
              onClick={onCtaClick}
              className="w-full bg-[#EAE7DD] hover:bg-white text-[#1A1A1A] hover:text-[#1A1A1A] text-xs font-bold uppercase tracking-widest py-3.5 px-6 rounded-none transition-all duration-300 shadow-none cursor-pointer"
              id="footer-cta-btn"
            >
              Book Discovery Meeting
            </button>
          </div>

        </div>

        {/* Lower Footer Area */}
        <div className="pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-[9px] text-[#8C857D] font-mono uppercase tracking-widest">
          <div className="space-y-1">
            <p>
              &copy; {currentYear} TendLine. Built for Solopreneurs & SMB contractors. All rights reserved.
            </p>
            <p className="text-[#6C655F]">
              SQRR Labs &bull; AI Growth Infrastructure &bull; Vertical: Home Services &bull; 2025&ndash;2026 &bull; Natasha Sen
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <a href="#security" className="hover:text-white transition-colors flex items-center">
              <ShieldCheck className="h-3.5 w-3.5 mr-1 text-green-500" />
              <span>Data Protection Guidelines</span>
            </a>
            <span>|</span>
            <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Direct Scheduler Link
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
