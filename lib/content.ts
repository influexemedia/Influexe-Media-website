// Public-facing copy and pricing for the Influexe Media homepage.
// Pricing is taken verbatim from the supplied Influexe pricing PDFs. Do not change figures here
// without updating the source documents.

export const SERVICES = [
  {
    title: "Meta Ads",
    description:
      "Campaign planning, setup, and management across Facebook and Instagram, with audience research and targeting recommendations.",
  },
  {
    title: "Google Ads",
    description:
      "Search and campaign setup, keyword research, and ongoing optimization to reach people actively looking for your services.",
  },
  {
    title: "Lead Generation",
    description:
      "Lead funnel strategy, audience and keyword research, and landing page or lead form recommendations built around your offer.",
  },
  {
    title: "Conversion Tracking & Reporting",
    description:
      "Tracking guidance and setup coordination, plus clear monthly performance reports with practical next steps.",
  },
];

export const PROCESS = [
  {
    step: "01",
    title: "Strategy call",
    description: "We learn about your business, your offer, your current lead flow, and what a good enquiry looks like for you.",
  },
  {
    step: "02",
    title: "Audit & plan",
    description: "We review your current setup, define your audiences and keywords, and map out the campaign structure.",
  },
  {
    step: "03",
    title: "Setup & launch",
    description: "We build and launch campaigns, confirm tracking, and set up the lead capture path together with you.",
  },
  {
    step: "04",
    title: "Optimize & report",
    description: "We review performance on a set schedule, make adjustments, and share reports with clear next steps.",
  },
];

// Verified client results only. Leave empty until evidence is supplied; the
// Results section then shows a "coming soon" placeholder instead of invented claims.
export const CASE_STUDIES: {
  client: string;
  industry: string;
  summary: string;
  metric: string;
}[] = [];

export type Plan = {
  name: string;
  platforms: string;
  monthly: number;
  sixMonthRate: number;
  features: string[];
};

export const INTERNATIONAL_PLANS: Plan[] = [
  {
    name: "Starter Growth",
    platforms: "Meta Ads or Google Ads",
    monthly: 199,
    sixMonthRate: 189,
    features: [
      "One platform: Meta Ads OR Google Ads.",
      "Setup and management of one core campaign.",
      "Basic lead funnel and audience/keyword research.",
      "Monthly review and practical recommendations.",
      "Monthly performance summary.",
    ],
  },
  {
    name: "Growth Accelerator",
    platforms: "Meta Ads and Google Ads",
    monthly: 399,
    sixMonthRate: 379,
    features: [
      "Meta Ads and Google Ads.",
      "Up to three active campaigns combined, subject to account fit.",
      "Campaign-specific lead capture strategy and targeting.",
      "Biweekly performance checks and adjustments.",
      "Conversion-tracking guidance and setup coordination.",
      "Monthly results report with next-step recommendations.",
    ],
  },
  {
    name: "Scale Pro",
    platforms: "Meta Ads and Google Ads",
    monthly: 599,
    sixMonthRate: 569,
    features: [
      "Meta Ads and Google Ads.",
      "Up to five active campaigns combined, subject to account fit.",
      "Expanded targeting and lead-quality review.",
      "Retargeting where sufficient audience data and tracking are available.",
      "Weekly performance reviews and adjustments.",
      "Monthly report and one strategy review per month.",
    ],
  },
];

export const PREMIUM_PLANS: Plan[] = [
  {
    name: "Performance",
    platforms: "Meta Ads and Google Ads",
    monthly: 899,
    sixMonthRate: 849,
    features: [
      "Meta Ads and Google Ads.",
      "Up to four active campaigns combined, based on account structure.",
      "Audience and keyword research, offer/message testing plan, and lead-form or landing-page recommendations.",
      "Conversion-tracking review and setup guidance.",
      "Weekly account review and ongoing adjustments.",
      "Monthly performance dashboard/report and action plan.",
      "One monthly strategy call.",
    ],
  },
  {
    name: "Growth Partner",
    platforms: "Meta Ads and Google Ads",
    monthly: 1499,
    sixMonthRate: 1399,
    features: [
      "Meta Ads and Google Ads.",
      "Up to eight active campaigns combined, subject to account fit.",
      "Funnel mapping, audience segmentation, and structured creative/offer testing.",
      "Retargeting strategy and management where data is sufficient.",
      "Conversion-tracking coordination and lead-quality feedback loop.",
      "Weekly optimization plus mid-month review.",
      "Monthly insights report and two strategy calls.",
    ],
  },
  {
    name: "Market Leader",
    platforms: "Meta Ads and Google Ads",
    monthly: 2499,
    sixMonthRate: 2349,
    features: [
      "Meta Ads and Google Ads.",
      "Up to twelve active campaigns combined, subject to account fit.",
      "Advanced segmentation, funnel recommendations, and lead-quality analysis.",
      "Structured campaign, audience, and creative testing roadmap.",
      "Multi-stage retargeting where tracking and audience volume allow.",
      "Weekly optimization and priority issue reviews.",
      "Monthly strategy report and up to two strategy calls.",
    ],
  },
];

export const INCLUDED = [
  "Campaign planning, setup, management, and optimization within the stated scope.",
  "Audience research and targeting recommendations.",
  "Lead-generation strategy and performance reporting.",
  "Client coordination for access, approvals, and tracking.",
];

export const NOT_INCLUDED = [
  "Advertising spend paid to Meta, Google, or other platforms.",
  "Website, landing-page, CRM development, and paid third-party tools.",
  "Extensive creative production, photography/video shoots, and large-scale design or copy production.",
  "Sales-team services, outbound calling, and phone-based lead verification.",
];

export const FAQS = [
  {
    q: "Do you guarantee leads, sales, or return on ad spend?",
    a: "No. Results depend on your budget, competition, account history, offer strength, tracking, and how quickly your team follows up on enquiries. We focus on a well-run system and transparent reporting, not on promised outcomes.",
  },
  {
    q: "Is ad spend included in your plans?",
    a: "No. Ad spend is paid directly to Meta, Google, or other platforms and is not included in any plan.",
  },
  {
    q: "Do you build websites or landing pages?",
    a: "Website, landing-page, and CRM development are not included in our plans. We provide landing-page and lead-form recommendations and coordinate with your developer where needed.",
  },
  {
    q: "How do the six-month plans work?",
    a: "Six-month rates apply only when you commit to the full six months. You are billed monthly, not upfront. Payment dates, cancellation, and early-termination terms are confirmed in the signed service agreement.",
  },
  {
    q: "What do you need from us to get started?",
    a: "Access to your ad accounts, your tracking setup, a clear picture of your offer, and timely approvals. We walk you through exactly what is needed on the strategy call.",
  },
  {
    q: "Which businesses do you work with?",
    a: "Businesses in home services, local businesses, clinics, real estate, e-commerce, and established service businesses that want a more predictable enquiry process.",
  },
];

export type ServiceDetail = {
  id: string;
  title: string;
  summary: string;
  points: string[];
  // "pricing" services link to the six packages; "custom" services are quoted via WhatsApp.
  model: "pricing" | "custom";
};

export const SERVICE_DETAILS: ServiceDetail[] = [
  {
    id: "meta-ads",
    title: "Meta Ads Management",
    summary:
      "Facebook and Instagram campaigns planned, launched, and optimized around enquiries and conversions for your business.",
    points: [
      "Audience research and targeting",
      "Campaign setup, management, and weekly or biweekly optimization",
      "Lead forms and landing page recommendations",
      "Monthly performance reporting with next steps",
    ],
    model: "pricing",
  },
  {
    id: "google-ads",
    title: "Google Ads Management",
    summary:
      "Search and campaign management that reaches people already looking for the services you offer, with keyword research and steady optimization.",
    points: [
      "Keyword and audience research",
      "Campaign structure and setup",
      "Ongoing bid and keyword optimization",
      "Monthly performance summary",
    ],
    model: "pricing",
  },
  {
    id: "lead-generation",
    title: "Lead Generation",
    summary:
      "End-to-end lead generation systems that connect your ads, lead capture, and tracking so enquiries are easier to measure and follow up.",
    points: [
      "Lead funnel and lead capture strategy",
      "Conversion tracking guidance and setup coordination",
      "Lead-quality review and feedback loop",
      "Reporting that connects spend to enquiries",
    ],
    model: "pricing",
  },
  {
    id: "influencer-marketing",
    title: "Influencer Marketing",
    summary:
      "Creator discovery, outreach, and campaign management to put your brand in front of relevant audiences through trusted voices.",
    points: [
      "Creator research and shortlisting",
      "Outreach, negotiation, and campaign coordination",
      "Content approvals and posting schedule",
      "Campaign reporting",
    ],
    model: "custom",
  },
  {
    id: "ugc-ads",
    title: "UGC Ads",
    summary:
      "User-generated style video and image ads made with creators, designed to feel authentic in-feed and perform in paid campaigns.",
    points: [
      "Creator sourcing for UGC production",
      "Briefs, scripts, and creative direction",
      "Ad-ready video and image deliverables",
      "Testing support within paid campaigns",
    ],
    model: "custom",
  },
  {
    id: "social-media",
    title: "Social Media Marketing & Management",
    summary:
      "Content planning, publishing, and account management across social platforms, with a consistent brand voice and regular reporting.",
    points: [
      "Content calendar and planning",
      "Post creation and scheduling",
      "Community engagement and account management",
      "Monthly performance report",
    ],
    model: "custom",
  },
];

export const ABOUT_POINTS = [
  {
    title: "Performance first",
    description:
      "We measure what matters to your business, enquiries and conversations, and keep reporting clear enough to act on.",
  },
  {
    title: "Creator-led credibility",
    description:
      "Influencer and UGC work brings real voices into your marketing, paired with paid systems that scale what works.",
  },
  {
    title: "Honest scope",
    description:
      "Every plan states what is included and what is not, including ad spend. No hidden fees and no promised outcomes.",
  },
  {
    title: "Hands-on management",
    description:
      "You work directly with the people running your campaigns, with regular calls, approvals, and clear next steps.",
  },
];

export const AUDIENCES = [
  "Home services",
  "Local businesses",
  "Clinics and healthcare practices",
  "Real estate",
  "E-commerce brands",
  "Established service businesses",
];
