/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Phone, ArrowUpRight, Menu, X, ShieldAlert } from "lucide-react";

interface NavbarProps {
  onCtaClick: () => void;
}

export default function Navbar({ onCtaClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Industry Insights", href: "#insights" },
    { name: "Diagnostic Scanner", href: "#diagnostic" },
    { name: "AI Blueprint Offers", href: "#offers" },
    { name: "Security & Trust", href: "#security" },
    { name: "FAQs", href: "#faqs" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#EAE7DD]/95 backdrop-blur-md border-b border-[#99775C]/20 py-3 shadow-sm"
          : "bg-[#EAE7DD] border-b border-[#99775C]/10 py-5"
      }`}
      id="main-header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand Area */}
          <div className="flex items-center space-x-2">
            <a href="#" className="flex items-center space-x-2 group">
              <div className="h-8 w-8 bg-[#99775C] flex items-center justify-center rounded-xs transition-transform duration-300 group-hover:scale-105">
                <span className="font-sans font-black text-[#EAE7DD] text-sm tracking-tighter">TL</span>
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-black text-xl tracking-tighter uppercase text-[#1A1A1A] group-hover:text-[#99775C] transition-colors leading-none">
                  TendLine
                </span>
                <span className="font-mono text-[8px] uppercase tracking-widest text-[#99775C] leading-none mt-1">
                  AI Growth Systems
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation Link items */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-bold text-[#99775C] hover:text-[#1A1A1A] tracking-widest uppercase transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Call-to-Action Area */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex flex-col items-end mr-2">
              <span className="text-[9px] font-mono text-[#99775C] uppercase tracking-widest leading-none">System Integrations</span>
              <span className="text-[10px] font-bold text-[#1A1A1A] flex items-center mt-1 leading-none">
                <span className="h-1.5 w-1.5 rounded-full bg-[#99775C] animate-pulse mr-1"></span>
                SQRR Labs Standard
              </span>
            </div>
            <button
              onClick={onCtaClick}
              className="px-6 py-2 border border-[#99775C] text-xs font-bold uppercase tracking-widest text-[#1A1A1A] hover:bg-[#99775C] hover:text-white transition-colors duration-300 cursor-pointer rounded-none"
              id="navbar-cta-btn"
            >
              Strategy Session
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#1A1A1A] hover:bg-[#99775C]/10 transition-colors rounded-none"
              aria-label="Toggle menu"
              id="mobile-menu-toggle"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#EAE7DD] border-b border-[#99775C]/20" id="mobile-menu-panel">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2.5 text-xs font-bold tracking-widest uppercase text-[#99775C] hover:bg-[#99775C]/10"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 pb-2 border-t border-[#99775C]/20 px-3">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onCtaClick();
                }}
                className="w-full text-center border border-[#99775C] text-xs font-bold uppercase tracking-widest py-3 hover:bg-[#99775C] hover:text-[#EAE7DD] transition-colors rounded-none"
                id="mobile-navbar-cta-btn"
              >
                Book Strategy Session
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
