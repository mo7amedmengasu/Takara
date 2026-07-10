import {
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  ClipboardCheck,
  Factory,
  FileCheck2,
  Globe2,
  HandHeart,
  Handshake,
  HeartPulse,
  Hospital,
  Layers3,
  PackageCheck,
  Pill,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Syringe,
  Users,
  Waves,
} from "lucide-react";
import type {
  ContactInquiry,
  LeadershipProfile,
  PartnerRegion,
  ProductCategory,
  Service,
  Value,
  ZoningArea,
} from "../types/content";

export const homeHero = {
  heading: "Takara Haya Medical L.L.C.",
  subheading:
    "A newly established UAE-based medical company connecting trusted international healthcare manufacturers with hospitals, clinics, pharmacies, healthcare providers, and critical facilities across the UAE and GCC.",
};

export const companyIntroduction =
  "Takara Haya Medical L.L.C. represents and distributes selected healthcare products from reputable manufacturers in Japan, Europe, and the United States. Our focus is to provide reliable medical consumables, PPE, infection control products, hygiene solutions, and healthcare zoning support to private and government healthcare sectors, hospitals, clinics, pharmacies, healthcare groups, and critical facilities with onsite medical needs.";

export const services: Service[] = [
  {
    title: "Medical Product Representation",
    description:
      "We represent selected international medical manufacturers and support their market entry and growth in the UAE and GCC.",
    href: "/partners",
    icon: Globe2,
  },
  {
    title: "Medical Distribution",
    description:
      "We supply healthcare products, consumables, PPE, hygiene products, and infection control solutions to healthcare providers.",
    href: "/medical-solutions",
    icon: PackageCheck,
  },
  {
    title: "Healthcare Zoning",
    description:
      "We support healthcare facilities by matching the right products to the right areas, such as wards, ICU, operating theatres, restrooms, and sterilization departments.",
    href: "/healthcare-zoning",
    icon: Layers3,
  },
  {
    title: "Partnership Development",
    description:
      "We work with international manufacturers seeking a reliable UAE partner for representation, distribution, product introduction, and long-term market development.",
    href: "/partners",
    icon: Handshake,
  },
];

export const supportedAudiences = [
  "Private hospitals",
  "Government healthcare entities",
  "Clinics and medical centers",
  "Pharmacies and pharmacy chains",
  "Healthcare groups",
  "Long-term care facilities",
  "Medical procurement companies",
  "Critical facilities with onsite medical needs",
  "Healthcare professionals and facility teams",
];

export const featuredSolutions = [
  "Medical consumables",
  "PPE products",
  "Hand hygiene solutions",
  "Infection control products",
  "Surface and environmental disinfection",
  "Medical device reprocessing",
  "Healthcare zoning solutions",
  "Pharmacy and retail healthcare products",
];

export const about = {
  pageHeading: "About Takara Haya",
  pageSubheading:
    "A UAE-based medical company built to connect global healthcare manufacturers with the UAE and GCC healthcare markets.",
  paragraphs: [
    "Takara Haya Medical L.L.C. is a newly established medical company in the United Arab Emirates, created to provide reliable healthcare products, infection control solutions, PPE, hygiene products, and medical consumables through partnerships with reputable international manufacturers.",
    "The company works with selected medical manufacturers from Japan, Europe, and the United States to introduce high-quality healthcare products to the UAE and GCC markets.",
    "Takara Haya supports private and government healthcare sectors, including hospitals, clinics, pharmacies, medical centers, healthcare groups, and critical facilities requiring medical support.",
    "Our role is not limited to supplying products. We aim to support healthcare providers and international manufacturers through product selection, healthcare zoning, documentation coordination, representation, distribution, and long-term business development.",
  ],
  vision:
    "To become a trusted UAE medical partner that connects leading international healthcare manufacturers with hospitals, clinics, pharmacies, healthcare groups, and medical facilities across the UAE and GCC, while building long-term value through reliable products, strong local support, and professional market representation.",
  mission:
    "To deliver high-quality medical products and healthcare solutions from reputable international manufacturers to the UAE market, supporting private and government healthcare sectors with dependable supply, professional representation, product knowledge, documentation support, and practical solutions that improve safety, hygiene, and healthcare readiness.",
  purpose:
    "Takara Haya was established to connect global medical innovation with the UAE healthcare market. We aim to help international medical manufacturers enter and grow in the UAE while supporting local healthcare providers with trusted products, proper documentation, and dependable supply channels.",
};

export const values: Value[] = [
  {
    title: "Quality",
    description: "We focus on healthcare products that meet recognized medical and quality standards.",
    icon: BadgeCheck,
  },
  {
    title: "Trust",
    description: "We build long-term relationships with healthcare clients, suppliers, and international partners.",
    icon: HandHeart,
  },
  {
    title: "Partnership",
    description: "We work closely with manufacturers to develop their products in the UAE and GCC markets.",
    icon: Handshake,
  },
  {
    title: "Reliability",
    description:
      "We aim to provide dependable supply and professional support to hospitals, clinics, pharmacies, and healthcare providers.",
    icon: ShieldCheck,
  },
  {
    title: "Compliance",
    description: "We support proper documentation, certifications, and product evaluation requirements.",
    icon: ClipboardCheck,
  },
  {
    title: "Care",
    description: "We believe medical products should support safer, cleaner, and more efficient healthcare environments.",
    icon: HeartPulse,
  },
];

export const leadershipIntro =
  "Takara Haya Medical L.L.C. is led by experienced professionals with strong backgrounds in diplomacy, operations, international cooperation, technical regulation, and strategic business development.";

export const chairmanMessage = [
  "At Takara Haya Medical L.L.C., our vision is to build a trusted UAE-based medical company that connects international healthcare innovation with the needs of hospitals, clinics, pharmacies, healthcare providers, and critical facilities across the UAE and GCC.",
  "As a newly established company, we are committed to developing strong partnerships with reputable manufacturers from Japan, Europe, the United States, and other global markets. Our objective is to introduce reliable, high-quality medical products, infection control solutions, PPE, hygiene systems, and healthcare consumables that support safer and more efficient healthcare environments.",
  "We believe that successful healthcare partnerships are built on trust, quality, compliance, and long-term cooperation. Takara Haya aims to become a reliable local partner for international manufacturers seeking to enter or expand in the UAE market, while supporting healthcare providers with dependable products and professional service.",
  "Our leadership team brings together experience in diplomacy, international cooperation, healthcare-related regulation, operations, and strategic business development. This foundation allows Takara Haya to approach the medical sector with professionalism, responsibility, and a strong commitment to serving the UAE healthcare market.",
  "We look forward to building meaningful partnerships and contributing to the continuous development of healthcare supply, safety, and hygiene solutions in the UAE and wider region.",
];

export const leadershipProfiles: LeadershipProfile[] = [
  {
    name: "H.E. Mohamed Ali Al Shamsi",
    role: "Chairman",
    biography: [
      "H.E. Mohamed Ali Al Shamsi is an accomplished Emirati diplomat and senior public-sector leader with extensive experience in foreign affairs, international cooperation, and crisis management. He holds a Bachelor's Degree in Military Sciences and a Diploma in Crisis and Emergency Management.",
      "Throughout his career, he served in several senior positions at the Ministry of Foreign Affairs, including Counsellor at the UAE Permanent Mission to the International Atomic Energy Agency, Deputy Director of International Cooperation, and Director of African Affairs.",
      "H.E. Al Shamsi also served as Ambassador Extraordinary and Plenipotentiary of the UAE to the Republic of Chad and as Ambassador to the State of Libya, contributing to the strengthening of the UAE's diplomatic relations and international partnerships.",
    ],
  },
  {
    name: "Eng. Nazim S. Nemer",
    role: "Vice Chairman",
    biography: [
      "Eng. Nazim S. Nemer is a senior professional with over 33 years of experience within ADNOC, where he held key roles across maintenance planning, production operations, IT support, information systems, quality management, project management, and cost optimization.",
      "Throughout his career, he contributed to the development and implementation of operational and technology-driven solutions, including exploration and development support, production operation systems, and business process improvement initiatives.",
      "He holds a Bachelor of Science degree in Industrial Engineering from Texas A&M University, Texas, USA.",
    ],
  },
  {
    name: "Walid Abdelaziz Elmowafi, PhD",
    role: "Chief Executive Officer",
    biography: [
      "Dr. Walid Elmowafi is an experienced Nuclear Safeguards Professional, Senior Regulatory Specialist, and International Expert with over 30 years of experience in the nuclear and radiological sectors. He holds a Ph.D. in Nuclear Safeguards and has a strong background in Radiometric Physics.",
      "Throughout his career, he has contributed to the development of nuclear and radiation regulatory frameworks, emergency preparedness standards, and national emergency response planning.",
      "Dr. Elmowafi has held key roles with the Federal Authority for Nuclear Regulation in the UAE and the Atomic Energy Authority in Egypt. He has also shared his expertise academically as an instructor at Mansoura University and various specialized training centers.",
      "His experience includes regulatory development, emergency management, organizational leadership, business continuity, decision-making, negotiation, and representing organizations in national and international forums.",
    ],
  },
];

export const partners = {
  pageSubheading:
    "Takara Haya Medical L.L.C. works with selected international medical manufacturers to bring trusted healthcare products to the UAE and GCC markets.",
  overview:
    "Takara Haya Medical L.L.C. works with selected international medical manufacturers from Japan, Europe, and the United States to introduce reliable and high-quality healthcare products to the UAE and GCC markets. We aim to build long-term partnerships with manufacturers that provide trusted medical consumables, PPE, hygiene products, infection control solutions, and healthcare technologies.",
  roles: [
    "Product representation",
    "Distribution in the UAE market",
    "Product introduction to healthcare clients",
    "Private and government healthcare sector access",
    "Pharmacy and healthcare group coordination",
    "Business development",
    "Client meetings and follow-ups",
    "Product documentation coordination",
    "Market feedback and positioning",
    "Long-term partnership development",
  ],
  manufacturerMessage: [
    "If you are an international medical manufacturer looking to enter or expand in the UAE healthcare market, Takara Haya Medical L.L.C. can act as your local partner for representation, distribution, business development, product introduction, and client coordination.",
    "We are building a trusted UAE platform for selected Japanese, European, and American medical companies seeking strong local presence and long-term opportunities in hospitals, clinics, pharmacies, and healthcare organizations.",
  ],
};

export const partnerRegions: PartnerRegion[] = [
  {
    title: "Japanese Medical Partners",
    description:
      "Healthcare products, infection control, hygiene solutions, PPE, hand hygiene, disinfectants, and hospital consumables.",
  },
  {
    title: "European Medical Partners",
    description:
      "Medical consumables, PPE, infection control products, hospital-use products, hygiene systems, and healthcare technologies.",
  },
  {
    title: "United States Medical Partners",
    description:
      "Advanced healthcare products, medical consumables, safety products, pharmacy-related products, and specialized healthcare solutions.",
  },
];

export const productCategories: ProductCategory[] = [
  {
    title: "Medical Consumables",
    items: [
      "Disposable gloves",
      "Masks",
      "Gowns",
      "Aprons",
      "Hospital consumables",
      "Examination products",
      "Healthcare disposable products",
    ],
    icon: Syringe,
  },
  {
    title: "Infection Control Products",
    items: [
      "Hand disinfectants",
      "Hand wash products",
      "Surface disinfectants",
      "Environmental cleaning products",
      "Disinfection wipes",
      "Hygiene products",
      "Healthcare cleaning solutions",
    ],
    icon: ShieldCheck,
  },
  {
    title: "PPE Products",
    items: [
      "Nitrile examination gloves",
      "Surgical masks",
      "Disposable gowns",
      "Disposable aprons",
      "Protective healthcare wear",
      "PPE for healthcare staff",
    ],
    icon: Stethoscope,
  },
  {
    title: "Hand Hygiene Solutions",
    items: [
      "Automatic dispensers",
      "Manual dispensers",
      "Hand soap",
      "Hand disinfectant",
      "Hand care products",
      "Touchless hygiene systems",
    ],
    icon: HandHeart,
  },
  {
    title: "Surface & Environmental Disinfection",
    items: [
      "Surface cleaning products",
      "Disinfection sprays",
      "Ready-to-use wipes",
      "Toilet seat cleaners",
      "Environmental hygiene products",
    ],
    icon: Sparkles,
  },
  {
    title: "Medical Device Reprocessing",
    items: [
      "Instrument cleaning products",
      "Pre-cleaning sprays",
      "Enzyme cleaners",
      "Manual cleaning solutions",
      "Ultrasonic cleaning support products",
      "Sterilization department support products",
    ],
    icon: FileCheck2,
  },
  {
    title: "Pharmacy & Retail Healthcare Products",
    items: [
      "Healthcare consumables",
      "Hygiene products",
      "Personal care products",
      "Pharmacy-ready medical products",
      "Selected retail healthcare solutions",
    ],
    icon: Pill,
  },
];

export const zoning = {
  intro:
    "Takara Haya provides healthcare zoning solutions by matching the right products to the right area inside a healthcare facility. This helps hospitals, clinics, and healthcare providers improve hygiene, infection control, product availability, staff workflow, and patient safety. The partner healthcare catalog shows zoning examples for nurse stations, wards, restrooms, ICU, operating theatres, central sterile supply departments, and long-term care facilities.",
  definition:
    "Healthcare zoning means selecting and placing the correct medical, hygiene, PPE, and infection control products in each area of a healthcare facility according to its use, risk level, staff movement, and hygiene requirements. Instead of only supplying products, Takara Haya supports healthcare facilities with a complete product placement concept.",
  benefits: [
    "Improves infection control",
    "Supports healthcare staff workflow",
    "Reduces product misuse",
    "Improves hygiene compliance",
    "Helps facilities select the right products",
    "Creates a clear medical product supply plan",
    "Supports hospitals and clinics during product evaluation",
  ],
};

export const zoningAreas: ZoningArea[] = [
  {
    title: "Nurse Stations, Wards, and Restrooms",
    className: "zone-nurse",
    products: [
      "Hand wash products",
      "Hand disinfectants",
      "Surface disinfectants",
      "Disposable gloves",
      "Masks",
      "Aprons and gowns",
      "Toilet hygiene products",
      "Dispenser placement",
    ],
  },
  {
    title: "Intensive Care Unit",
    className: "zone-icu",
    products: [
      "Hand disinfection",
      "Surface disinfection",
      "Environmental cleaning",
      "PPE availability",
      "Gloves and masks",
      "High-touch surface hygiene",
    ],
  },
  {
    title: "Operating Theatre",
    className: "zone-theatre",
    products: [
      "Hand hygiene",
      "Disinfection products",
      "PPE products",
      "Controlled product placement",
      "Surface cleaning",
      "Surgical area hygiene support",
    ],
  },
  {
    title: "Central Sterile Supply Department",
    className: "zone-cssd",
    products: [
      "Medical device reprocessing",
      "Instrument cleaning",
      "Enzyme cleaners",
      "Manual cleaning",
      "Ultrasonic cleaning",
      "Pre-cleaning products",
    ],
  },
  {
    title: "Long-Term Care Facilities",
    className: "zone-care",
    products: [
      "Hand hygiene",
      "Resident room hygiene",
      "Restroom hygiene",
      "Common area disinfection",
      "PPE placement",
      "Surface cleaning",
      "Hand care products",
    ],
  },
];

export const criticalFacilities = {
  pageSubheading:
    "Medical and healthcare-related solutions for onsite clinics, staff health, hygiene, PPE, and emergency medical readiness.",
  positioning:
    "Takara Haya Medical L.L.C. is a medical company. The company does not present itself as a nuclear technical company, radiation safety company, or industrial engineering company. Takara Haya supports nuclear power plants and other critical facilities only through medical products, healthcare consumables, hygiene solutions, PPE, and onsite medical support supplies.",
  support:
    "In addition to hospitals, clinics, pharmacies, and healthcare facilities, Takara Haya can support critical facilities, including nuclear power plants, by supplying medical and healthcare-related solutions. Our support is focused on onsite clinic needs, staff health, hygiene, infection control, PPE, first-aid products, and emergency medical readiness.",
  solutions: [
    "Onsite clinic medical consumables",
    "First-aid and healthcare supplies",
    "PPE products",
    "Hand hygiene products",
    "Disinfectants",
    "Surface cleaning products",
    "Staff hygiene solutions",
    "Emergency medical readiness supplies",
    "Medical consumables for facility healthcare teams",
  ],
  targets: [
    "Nuclear power plants",
    "Critical facilities",
    "Large facilities with onsite clinics",
    "Staff medical centers",
    "Emergency medical rooms",
    "Healthcare units inside large organizations",
  ],
};

export const compliance = {
  pageSubheading:
    "Supporting healthcare product evaluation through proper documentation, quality standards, and reliable manufacturer coordination.",
  quality:
    "Takara Haya works with international manufacturers that provide proper product documentation, quality certificates, technical specifications, and compliance records required for healthcare evaluation and distribution. This supports hospitals, clinics, pharmacies, government healthcare entities, private healthcare groups, and procurement teams during product review and approval processes.",
  documentation:
    "Proper documentation helps healthcare providers, pharmacies, procurement teams, and government healthcare entities evaluate products with confidence. Takara Haya supports the coordination of product information and supplier documentation to make the review process clearer and more professional.",
  statement:
    "Takara Haya aims to provide healthcare products that meet recognized quality standards and support the needs of hospitals, clinics, pharmacies, healthcare providers, and critical facility medical teams.",
};

export const contact = {
  pageSubheading:
    "For product inquiries, medical partnerships, representation opportunities, distribution requests, or meeting arrangements, please contact us.",
  inquiryOptions: [
    "Product Inquiry",
    "Partnership Request",
    "Manufacturer Representation",
    "Distribution Inquiry",
    "Healthcare Zoning Request",
    "Pharmacy Supply Inquiry",
    "Government Healthcare Inquiry",
    "Private Healthcare Inquiry",
    "Medical Solutions for Critical Facilities",
    "Meeting Request",
    "General Inquiry",
  ] as ContactInquiry[],
  actions: ["Request a Meeting", "Become a Partner", "Send Product Catalogue", "Ask for a Quotation"],
};

export const iconLookup = {
  Hospital,
  Building2,
  Users,
  Factory,
  BriefcaseBusiness,
  Waves,
};
