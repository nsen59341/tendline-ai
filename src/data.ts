/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { IndustryInsight, FailureScenario, OfferTier, FaqItem } from "./types";

export const insights: IndustryInsight[] = [
  {
    id: 1,
    title: "AI Voice Agents Eliminate Inbound Leakage",
    source: "SuperDupr.com, IBISWorld 2025, TightSlice AI ROI Calculator",
    finding: "The average home services company misses 35–50% of inbound calls during business hours, with each missed call costing $250–$1,200 in lost revenue. Implementing a 24/7 AI voice assistant solved this entirely for a 15-truck contractor.",
    whoApplied: "Precision HVAC (AutoScale My Biz case study); Nashville HVAC company (SuperDupr 2025)",
    measuredImpact: [
      "100% call answer rate (up from 38% baseline)",
      "$8,000–$15,000/month in additional recovered revenue",
      "40–65% more booked jobs within 60 days",
      "4–8x ROI achieved within 60 days of launch",
      "Office manager saved 20+ hours per week on call-backs"
    ],
    aiOpportunity: "Deploy a high-fidelity Retell AI or Vapi voice agent on the main business lines. The agent handles inbound triage, qualifies job types, books appointments directly into CRM systems (Housecall Pro/Jobber via Make.com webhooks), and instantly escalates extreme after-hours emergencies.",
    opportunityScore: {
      impact: 90,
      ease: 80,
      overall: 87
    }
  },
  {
    id: 2,
    title: "Emergency Call Capture Yields Drastic Returns",
    source: "Anthrova.com, Callbirdai.com, Harvard Contractor Data (1,200+ firms)",
    finding: "Contractor data shows the average small contracting business loses $45,000–$120,000/year to unanswered calls. Capturing weekend emergency calls, which average $2,400 per ticket, changes the financial trajectory of a plumbing firm.",
    whoApplied: "Plumbing contractor documented by gary.club (2026); Avoca AI HVAC clients",
    measuredImpact: [
      "$180,000 additional annual revenue captured from phone lines",
      "Captured emergency weekend jobs ($2,400 average ticket size)",
      "$3,200/mo recovered from after-hours and weekend calls alone",
      "384% ROI recorded in the very first quarter of implementation",
      "Missed-call rate plummeted from 74.1% to 0%"
    ],
    aiOpportunity: "Configure an instant missed-call SMS + voice escalation workflow. If a call is missed, a Make.com webhook triggers an immediate SMS ('We just missed your call, we are on it!'), while the AI voice agent calls the client back within 60 seconds to qualify urgency and schedule dispatch.",
    opportunityScore: {
      impact: 95,
      ease: 85,
      overall: 91
    }
  },
  {
    id: 3,
    title: "Rapid Web Lead Capture Drives 50% Higher Conversions",
    source: "AutoScale My Biz; CI Web Group AI Lead Generation Report 2025",
    finding: "An AI web chatbot reduced lead response times from 4+ hours to under 2 minutes. Since 78% of consumers hire the first contractor who responds (HubSpot), speed is the ultimate conversion metric.",
    whoApplied: "Precision HVAC (AutoScale My Biz); CI Web Group HVAC clients",
    measuredImpact: [
      "Lead response times slashed from 4+ hours to under 2 minutes",
      "30–50% increase in total website lead-to-booking conversion rates",
      "40% of all customer appointments booked after-hours via web chat",
      "Response time improvements generated more revenue than doubling ad spend",
      "AI chat handled 40% of all standard inbound inquiries without human touch"
    ],
    aiOpportunity: "Build a customized Voiceflow or Chatling agent deployed directly on the company website. It handles complex FAQs, local service areas, baseline pricing guidelines, emergency triage, and schedules appointments directly into CRMs.",
    opportunityScore: {
      impact: 80,
      ease: 90,
      overall: 83
    }
  },
  {
    id: 4,
    title: "Review Automation Elevates Local SEO and Conversions",
    source: "Sequoia GEO; AutoScale My Biz case study; HVAC Contractor Review Data",
    finding: "Automated review request systems generated a 75% increase in reviews, lifting rating average from 4.2 to 4.8 stars. Higher Google reviews directly amplify local Map Pack rankings, while automatic estimate re-engagement captures outstanding revenue.",
    whoApplied: "Precision HVAC (AutoScale My Biz); Sequoia GEO home service clients",
    measuredImpact: [
      "75% increase in new Google reviews within 90 days",
      "Google Business profile rating lifted from 4.2 to 4.8 stars",
      "5–15% increase in booked revenue via automated estimate re-engagement",
      "30% increase in overall customer satisfaction scores from automated touchpoints",
      "The entire review and feedback generation system operates with zero manual overhead"
    ],
    aiOpportunity: "Develop Make.com or n8n post-job automation: when a job is marked closed in CRM, trigger a friendly personalized SMS and email review sequence. For estimates, establish a 48h re-engagement trigger that auto-texts the client to answer questions.",
    opportunityScore: {
      impact: 75,
      ease: 95,
      overall: 81
    }
  },
  {
    id: 5,
    title: "Seasonal Outreach Prevents Off-Peak Dry Spells",
    source: "Codiant AI HVAC Report Jan 2026; Leads4Build HVAC AI Guide 2025",
    finding: "Over 70% of US contractors have tested AI, and 40% utilize it regularly. Early-moving firms use seasonal predictive outreach (automated reminders linked to weather, equipment age, and service anniversaries) to maintain full schedules during traditional slow periods.",
    whoApplied: "Regional HVAC firms across the US (Codiant report 2026); Leads4Build HVAC clients",
    measuredImpact: [
      "70% of contractors actively testing AI, putting non-users at major risk",
      "Seasonal outreach campaigns reduced off-peak revenue dips by 20–30%",
      "Repeat customer campaigns generated high-margin revenue with $0 ad spend",
      "Predictive tune-up outreach converted at 3–5x the rate of generic blast emails",
      "Secure positioning in local markets by lock-in on service agreements"
    ],
    aiOpportunity: "Build predictive outreach automations using Make.com and weather APIs. Automatically monitor equipment age and service history from the CRM. Trigger highly targeted SMS campaigns with online booking links when weather changes or tune-ups are due.",
    opportunityScore: {
      impact: 70,
      ease: 90,
      overall: 76
    }
  }
];

export const failureScenarios: FailureScenario[] = [
  {
    id: 1,
    category: "Acquisition",
    scenario: "Technician misses an inbound call while on a noisy job site — the customer immediately calls a competitor and books with them.",
    solution: "A 24/7 AI Voice Agent (Retell/Vapi) answers immediately, qualifies urgency, books the job into your CRM, and confirms instantly.",
    deliveryModel: "DFY",
    annualLeakEstimate: 42000
  },
  {
    id: 2,
    category: "Acquisition",
    scenario: "A hot web lead browses your service pages at 10pm, finds no interactive chat or booking, and leaves to find an active company.",
    solution: "A custom Website AI Chatbot answers emergency FAQs and secures booking/contact details on the spot.",
    deliveryModel: "DFY",
    annualLeakEstimate: 18000
  },
  {
    id: 3,
    category: "Acquisition",
    scenario: "An expensive estimate is sent, the customer goes silent, and the owner forgets to follow up due to field workload. The deal is lost.",
    solution: "Make.com workflow triggers multi-stage follow-ups: automated SMS in 48h, email in 72h, and a voice agent check-in if still uncommitted.",
    deliveryModel: "DFY",
    annualLeakEstimate: 35000
  },
  {
    id: 4,
    category: "Acquisition",
    scenario: "Summer AC or winter heating spike overwhelms your single office manager; 30–40% of inbound calls go to voicemail and are never returned.",
    solution: "Instant overflow voice agents take over when lines are busy, booking routine tune-ups and routing real emergencies to active staff.",
    deliveryModel: "DFY",
    annualLeakEstimate: 50000
  },
  {
    id: 5,
    category: "Experience",
    scenario: "Customer calls at 2am with a burst pipe or broken heater, hits your voicemail, and immediately calls the competitor with '24/7' in their listing.",
    solution: "An after-hours emergency triage agent answers at 2am, screens for actual emergencies, and instantly alerts the on-call tech via SMS summary.",
    deliveryModel: "DFY",
    annualLeakEstimate: 48000
  },
  {
    id: 6,
    category: "Experience",
    scenario: "A job is successfully closed, but the technician forgets to ask for a review. Your rating stays dormant, and local SEO ranking decays.",
    solution: "Make.com CRM integration: job complete triggers SMS/email review request with direct link within 1 hour, followed up automatically.",
    deliveryModel: "DFY",
    annualLeakEstimate: 15000
  },
  {
    id: 7,
    category: "Experience",
    scenario: "A prospective client submits a contact form but waits 4+ hours for a manual response, converting to a competitor during the wait.",
    solution: "Instant AI reply + webhook alerting the owner via SMS with one-click tap to call back, dropping response time under 120 seconds.",
    deliveryModel: "DFY",
    annualLeakEstimate: 22000
  },
  {
    id: 8,
    category: "Experience",
    scenario: "You have no system for maintenance plan upsells. High-value first-time installation customers never hear from you again.",
    solution: "Automated CRM workflow triggers scheduled personalized SMS tune-up notifications and service anniversary offers 6 months post-job.",
    deliveryModel: "DWY",
    annualLeakEstimate: 28000
  },
  {
    id: 9,
    category: "Efficiency",
    scenario: "Your office manager spends 3–4 hours a day on the phone answering basic FAQ questions rather than optimizing dispatcher schedules.",
    solution: "Deploy an interactive voice/web FAQ chatbot to handle locations, standard trip fees, and general scheduling steps autonomously.",
    deliveryModel: "DFY",
    annualLeakEstimate: 20000
  },
  {
    id: 10,
    category: "Efficiency",
    scenario: "A technician is dispatched without full context, arriving to find the wrong equipment size or customer frustration about repeating their issue.",
    solution: "AI Voice Agent transcribes, summarizes, and automatically syncs client complaints and equipment details straight into CRM dispatch notes.",
    deliveryModel: "DFY",
    annualLeakEstimate: 12000
  },
  {
    id: 11,
    category: "Efficiency",
    scenario: "Manual appointment reminders are forgotten, leading to a 15–25% no-show rate that wastes truck fuel, travel time, and technician wages.",
    solution: "Zapier/Make.com CRM-linked SMS confirmation sequence at booking, 24 hours prior, and 2 hours prior with one-click rescheduling.",
    deliveryModel: "DFY",
    annualLeakEstimate: 24000
  },
  {
    id: 12,
    category: "Efficiency",
    scenario: "You spend thousands on local ads but have zero visibility into which campaigns, keyword sets, or channels are actually driving booked jobs.",
    solution: "Integrate custom source tracking on AI booking webhooks to compile a weekly automated lead-source ROI report delivered straight to your inbox.",
    deliveryModel: "DWY",
    annualLeakEstimate: 16000
  },
  {
    id: 13,
    category: "Growth",
    scenario: "Your business relies 100% on passive referrals. You have no predictable outbound or lead capture engine to generate new bookings.",
    solution: "Connect an SEO-optimized web chat with Google Ads and Local Services Ads webhooks for immediate automated 60-second follow-up systems.",
    deliveryModel: "DWY",
    annualLeakEstimate: 60000
  },
  {
    id: 14,
    category: "Growth",
    scenario: "You want to add a second or third service truck but are paralyzed because you can't scale manual booking and dispatch operations.",
    solution: "Integrate a scalable front-office AI systems stack that handles unlimited simultaneous calls and web bookings without adding headcount.",
    deliveryModel: "Consulting",
    annualLeakEstimate: 85000
  },
  {
    id: 15,
    category: "Growth",
    scenario: "Traditional off-season months (spring/fall) trigger drastic revenue drops, leaving technicians underutilized and hurting cash flow.",
    solution: "Run automated, highly targeted recall campaigns that scan your CRM and offer smart seasonal pre-season tune-ups via SMS and interactive email.",
    deliveryModel: "DWY",
    annualLeakEstimate: 45000
  }
];

export const offerTiers: OfferTier[] = [
  {
    id: 1,
    title: "Call Capture Starter System",
    tagline: "Stop losing incoming job leads to voicemail and immediate competitor outreach.",
    features: [
      "AI Voice Agent (Retell AI / Vapi): Answers 100% of inbound calls 24/7, qualifies requests, books directly into CRM, and handles emergency escalation routing.",
      "Instant Missed-Call SMS Recovery (Make.com): Triggers automated SMS follow-up within 60s of any missed call to hook the prospect immediately.",
      "Post-Job Review Automation (Make.com/Zapier): Sends automated SMS and email review prompts within 1 hour of job completion to skyrocket Google Local rankings.",
      "Full CRM Webhook Integration (Housecall Pro, Jobber, ServiceTitan, etc.)"
    ],
    results: [
      "Slashes missed calls by 90%+",
      "Recovers $3,000–$8,000/mo in leaked phone revenue",
      "Secures a 4–8x ROI in under 60 days of deployment"
    ],
    bestFor: "HVAC, plumbing, and electrical solopreneurs or small teams (1-5 techs) looking to recover lost revenue from unanswered calls.",
    delivery: "Project-based (Fully delivered and active in 2–3 weeks)"
  },
  {
    id: 2,
    title: "Lead Conversion Growth System",
    tagline: "Maximize every web inquiry and estimate, converting traffic into booked tickets on autopilot.",
    features: [
      "Everything in the Call Capture Starter System",
      "Website AI Chatbot (Voiceflow / Chatling): FAQ responder, live estimate capture, and booking assistant that converts web traffic 24/7.",
      "Estimate Follow-Up Automation (Make.com / n8n): Multi-stage trigger sequence (SMS + email + AI voice follow-up) to recover 5–15% of unsigned quotes.",
      "Automated Appointment Reminders: Smart 24h & 2h SMS reminder sequences that bring no-shows down below 5%.",
      "Monthly AI Performance Report (n8n): Automatically compiles call volume, booking rates, and recovered revenue analytics straight to the owner."
    ],
    results: [
      "30–50% increase in lead-to-booking conversions",
      "Recovers 5–15% of outstanding estimates",
      "Brings booking no-show rates below 5% with zero manual work",
      "Recovers $8,000–$15,000/mo in additional revenue"
    ],
    bestFor: "Growing home service businesses (5-15 techs) with healthy web traffic but high leak rates across the customer acquisition funnel.",
    delivery: "Hybrid model (Full project build + 3-month strategic optimization retainer)"
  },
  {
    id: 3,
    title: "Full AI Growth Infrastructure",
    tagline: "A completely autonomous front office operations engine designed to help you scale without adding overhead.",
    features: [
      "Everything in Tiers 1 & 2",
      "Seasonal Outreach & Recall Engine (n8n / Make.com): Smart campaigns that target past customers based on weather changes, service history, and equipment age.",
      "Full CRM & Dispatcher Handoff: AI Voice agent collects equipment and site details, populates the CRM, and sends the active tech an immediate summary SMS.",
      "Custom AI Reporting Dashboard: Real-time visibility into booked jobs, call logs, acquisition channels, and seasonal patterns.",
      "White-Glove Onboarding & 6-Month Strategic Retainer: Direct ongoing optimizations, script updates, integration adjustments, and monthly growth consulting."
    ],
    results: [
      "Unlocks $15,000–$25,000/mo in additional revenue",
      "Operates a highly synchronized, 100% automated front office",
      "Eliminates manual CRM entries, forgotten follow-ups, and review collections",
      "Allows the owner to focus completely on scaling field operations and strategic growth"
    ],
    bestFor: "Established home service businesses (10-30+ techs) looking to optimize operations, secure local market dominance, and expand fleet capacity without proportional overhead.",
    delivery: "Hybrid model (Full enterprise system build + 6-month white-glove retainer)"
  }
];

export const faqs: FaqItem[] = [
  {
    id: 1,
    category: "Implementation",
    question: "Do we have to replace our existing software or CRM?",
    answer: "No. Our core philosophy is building custom integration layers, not replacing systems. We integrate directly with your existing CRM (such as Housecall Pro, Jobber, ServiceTitan, or FieldEdge) and booking schedulers using secure APIs and webhooks. Your field team will continue to use the software they already know."
  },
  {
    id: 2,
    category: "Security",
    question: "How secure is our customer data and phone systems?",
    answer: "We employ strict enterprise-grade security protocols. All integrations utilize secure API keys, HTTPS protocols, and end-to-end encryption. Your voice agents and chatbots run on isolated, compliant server environments that guarantee absolute compliance with data privacy standards. We do not sell, store, or train models on your proprietary customer databases."
  },
  {
    id: 3,
    category: "ROI",
    question: "How soon do we see a financial return on this system?",
    answer: "Most home services clients see a full financial return on their setup investment within 30 to 60 days. Because we target immediate revenue leaks—like missed inbound calls (averaging $250-$1,200 in value each) and forgotten estimates—the system captures missed money from day one. In fact, a single recovered emergency weekend call can cover a massive portion of the starter setup."
  },
  {
    id: 4,
    category: "Implementation",
    question: "How much effort is required from our office staff during onboarding?",
    answer: "Almost none. We deliver these systems as complete, white-glove, Done-For-You (DFY) or Done-With-You (DWY) solutions. Our team handles the scripts, prompt engineering, CRM webhooks, and exhaustive edge-case testing. Your team is only involved for a brief discovery audit and a final 1-hour sign-off session to review the system's voice and chatbot tone before we press go."
  },
  {
    id: 5,
    category: "Implementation",
    question: "Will the AI sound robotic or annoy our customers?",
    answer: "Absolutely not. We use ultra-low latency, next-generation conversational frameworks (such as Retell AI and Vapi) coupled with highly engineered, natural-sounding, industry-specific custom voice models. They respond in under 1 second, match human conversational cadences, recognize technician jargon, and politely handle interrupts. If a customer demands a human or poses an extremely unique inquiry, the AI seamlessly transfers the call with a clean typed summary."
  },
  {
    id: 6,
    category: "ROI",
    question: "Why should we hire TendLine instead of building no-code templates ourselves?",
    answer: "Patchwork solutions fail under pressure. Standard templates lack error-handling, fail during CRM sync lags, and cause duplicate customer records, leading to dispatch nightmares. TendLine builds professional-grade, resilient enterprise growth infrastructure. We construct custom fail-safes, clean API parsing pipelines, and provide strategic optimization retainers to ensure your AI works 24/7/365 without glitching."
  }
];
