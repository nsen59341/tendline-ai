/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, ChangeEvent, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Calendar, CheckCircle2, ChevronRight, MessageSquare, PhoneCall, AlertTriangle, ShieldCheck } from "lucide-react";
import { LeadData } from "../types";

interface CtaModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookingLink: string;
}

export default function CtaModal({ isOpen, onClose, bookingLink }: CtaModalProps) {
  const [step, setStep] = useState<1 | 2>(1);
  const [formData, setFormData] = useState<LeadData>({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    techCount: "1-5",
    primaryBottleneck: "Missed Calls & After-Hours Leads",
    estimatedMissedCalls: "10-20 missed calls/week",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate high-converting intake submission (e.g., to CRM/Webhook)
    setTimeout(() => {
      setIsSubmitting(false);
      setStep(2);
    }, 1200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#1A1A1A]/90 backdrop-blur-md"
            id="modal-backdrop"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative z-10 w-full max-w-3xl overflow-hidden rounded-none border border-[#99775C]/30 bg-[#EAE7DD] text-[#1A1A1A] shadow-2xl"
            id="cta-modal"
          >
            {/* Top Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-[#99775C] hover:text-[#1A1A1A] transition-colors duration-200 cursor-pointer"
              aria-label="Close modal"
              id="close-modal-btn"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Main Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 min-h-[500px]">
              {/* Left Side: Pitch (Visible only on desktop) */}
              <div className="hidden md:flex md:col-span-4 bg-[#1A1A1A] text-white p-8 flex-col justify-between border-r border-[#99775C]/20">
                <div className="space-y-6">
                  <div className="flex items-center space-x-2">
                    <span className="font-mono text-[9px] tracking-widest text-[#99775C] uppercase font-bold">TendLine AI</span>
                  </div>
                  <h3 className="font-sans text-xl font-black uppercase tracking-tight leading-none">
                    Pre-Qualifying Strategy Session
                  </h3>
                  <p className="text-xs text-[#EAE7DD]/80 leading-relaxed font-light">
                    We only partner with 2 new contractors per territory to ensure localized SEO and operational focus. Let's analyze your systems.
                  </p>

                  <div className="space-y-4 pt-4">
                    <div className="flex items-start space-x-3">
                      <PhoneCall className="h-5 w-5 text-[#99775C] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-white">Inbound Protection</h4>
                        <p className="text-[11px] text-[#EAE7DD]/70">Secure 100% call capture guarantees.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <MessageSquare className="h-5 w-5 text-[#99775C] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-white">Interactive Triage</h4>
                        <p className="text-[11px] text-[#EAE7DD]/70">Connect web chat and CRM directly.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <ShieldCheck className="h-5 w-5 text-[#99775C] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-white">Compliance Standard</h4>
                        <p className="text-[11px] text-[#EAE7DD]/70">Secure APIs & end-to-end encryption.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-[#99775C]/20 pt-4 mt-6">
                  <div className="flex items-center space-x-2">
                    <span className="h-1.5 w-1.5 rounded-none bg-green-500 animate-pulse"></span>
                    <span className="text-[9px] font-mono text-green-400 uppercase tracking-widest font-bold">Strategy Sessions Available Today</span>
                  </div>
                </div>
              </div>

              {/* Right Side: Dynamic Intake / Scheduler */}
              <div className="col-span-12 md:col-span-8 p-8 flex flex-col justify-center">
                {step === 1 ? (
                  <form onSubmit={handleSubmit} className="space-y-4" id="intake-form">
                    <div className="space-y-1">
                      <span className="font-mono text-[9px] text-[#99775C] uppercase tracking-widest font-bold">
                        Step 1 of 2: Diagnostics
                      </span>
                      <h3 className="text-2xl font-black text-[#1A1A1A] tracking-tighter uppercase leading-[1.05]">
                        Tell us about your field operations
                      </h3>
                      <p className="text-xs text-[#99775C] font-medium leading-relaxed">
                        We analyze this information to build your customized Vertical AI Systems blueprint prior to our meeting.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-[#1A1A1A] uppercase tracking-widest block">Company Name</label>
                        <input
                          required
                          type="text"
                          name="companyName"
                          placeholder="e.g. Apex Plumbing"
                          value={formData.companyName}
                          onChange={handleInputChange}
                          className="w-full text-sm p-2.5 rounded-none border border-[#99775C]/30 bg-white focus:outline-none focus:border-[#99775C] transition-all font-medium"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-[#1A1A1A] uppercase tracking-widest block">Your Name</label>
                        <input
                          required
                          type="text"
                          name="contactName"
                          placeholder="e.g. John Doe"
                          value={formData.contactName}
                          onChange={handleInputChange}
                          className="w-full text-sm p-2.5 rounded-none border border-[#99775C]/30 bg-white focus:outline-none focus:border-[#99775C] transition-all font-medium"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-[#1A1A1A] uppercase tracking-widest block">Business Email</label>
                        <input
                          required
                          type="email"
                          name="email"
                          placeholder="john@yourcontractor.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full text-sm p-2.5 rounded-none border border-[#99775C]/30 bg-white focus:outline-none focus:border-[#99775C] transition-all font-medium"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-[#1A1A1A] uppercase tracking-widest block">Direct Phone</label>
                        <input
                          required
                          type="tel"
                          name="phone"
                          placeholder="(555) 000-0000"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full text-sm p-2.5 rounded-none border border-[#99775C]/30 bg-white focus:outline-none focus:border-[#99775C] transition-all font-medium"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-[#1A1A1A] uppercase tracking-widest block">Fleet Size (Technicians)</label>
                        <select
                          name="techCount"
                          value={formData.techCount}
                          onChange={handleInputChange}
                          className="w-full text-sm p-2.5 rounded-none border border-[#99775C]/30 bg-white focus:outline-none focus:border-[#99775C] transition-all font-semibold uppercase tracking-wider text-xs"
                        >
                          <option value="1-5">1–5 Technicians</option>
                          <option value="6-15">6–15 Technicians</option>
                          <option value="16-30">16–30 Technicians</option>
                          <option value="31+">31+ Technicians</option>
                        </select>
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-[#1A1A1A] uppercase tracking-widest block">Biggest Revenue Leak</label>
                        <select
                          name="primaryBottleneck"
                          value={formData.primaryBottleneck}
                          onChange={handleInputChange}
                          className="w-full text-sm p-2.5 rounded-none border border-[#99775C]/30 bg-white focus:outline-none focus:border-[#99775C] transition-all font-semibold uppercase tracking-wider text-xs"
                        >
                          <option value="Missed Calls & After-Hours Leads">Unanswered Inbound Calls</option>
                          <option value="Unconverted Web Leads">Unconverted Web Forms</option>
                          <option value="Forgotten Estimate Follow-ups">Forgotten Sent Estimates</option>
                          <option value="High Appointment No-Shows">Appointment No-Shows</option>
                          <option value="Seasonal Revenue Fluctuations">Off-Season Slowdowns</option>
                        </select>
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[#1A1A1A] hover:bg-[#99775C] text-white text-xs font-bold uppercase tracking-widest py-3.5 px-6 rounded-none transition-all duration-200 cursor-pointer shadow-none"
                        id="submit-intake-btn"
                      >
                        {isSubmitting ? (
                          <>
                            <span>Analyzing Operations...</span>
                          </>
                        ) : (
                          <span>Continue to Booking Calendar</span>
                        )}
                      </button>
                    </div>

                    <p className="text-[9px] text-center text-[#99775C] flex items-center justify-center space-x-1 uppercase tracking-widest font-bold">
                      <ShieldCheck className="h-3.5 w-3.5 text-green-600 inline" />
                      <span>Data protected with bank-grade encryption. We never share info.</span>
                    </p>
                  </form>
                ) : (
                  <div className="space-y-4 flex-1 flex flex-col h-full" id="booking-step">
                    <div className="space-y-1">
                      <span className="font-mono text-[9px] text-green-600 uppercase tracking-widest font-bold flex items-center">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mr-1.5 shrink-0" />
                        Diagnostics Recorded Successfully
                      </span>
                      <h3 className="text-2xl font-black text-[#1A1A1A] tracking-tighter uppercase leading-[1.05]">
                        Secure Your AI Strategy Session
                      </h3>
                      <p className="text-xs text-[#99775C] font-medium leading-relaxed">
                        Select a convenient time below with Natasha Sen to lay out your Growth Infrastructure.
                      </p>
                    </div>

                    {/* Cal.com Embedded Iframe */}
                    <div className="relative flex-1 min-h-[350px] md:min-h-[400px] border border-[#99775C]/25 rounded-none overflow-hidden bg-white">
                      <iframe
                        src={`${bookingLink}?embed=true&name=${encodeURIComponent(formData.contactName)}&email=${encodeURIComponent(formData.email)}`}
                        width="100%"
                        height="100%"
                        style={{ border: "none" }}
                        title="Book a strategy session with Natasha Sen"
                        className="absolute inset-0"
                      />
                    </div>

                    {/* Backup & Confirm Controls */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pt-2 border-t border-[#99775C]/20">
                      <p className="text-[9px] text-[#99775C] font-mono uppercase tracking-widest font-bold">
                        Iframe not loading? Book directly using the button on the right.
                      </p>
                      <a
                        href={bookingLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center space-x-1.5 bg-[#1A1A1A] hover:bg-[#99775C] text-white text-xs font-bold uppercase tracking-widest py-2.5 px-4 rounded-none transition-all"
                        id="direct-booking-link"
                      >
                        <Calendar className="h-3.5 w-3.5" />
                        <span>Open Booking in New Tab</span>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
