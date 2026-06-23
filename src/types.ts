/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface IndustryInsight {
  id: number;
  title: string;
  source: string;
  finding: string;
  whoApplied: string;
  measuredImpact: string[];
  aiOpportunity: string;
  opportunityScore: {
    impact: number;
    ease: number;
    overall: number;
  };
}

export interface FailureScenario {
  id: number;
  category: "Acquisition" | "Experience" | "Efficiency" | "Growth";
  scenario: string;
  solution: string;
  deliveryModel: "DFY" | "DWY" | "Consulting";
  annualLeakEstimate: number; // estimated dollar leak for small-to-medium contractors
}

export interface OfferTier {
  id: number;
  title: string;
  tagline: string;
  features: string[];
  results: string[];
  bestFor: string;
  delivery: string;
}

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
  category: "Security" | "Implementation" | "ROI" | "General";
}

export interface LeadData {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  techCount: string;
  primaryBottleneck: string;
  estimatedMissedCalls: string;
}
