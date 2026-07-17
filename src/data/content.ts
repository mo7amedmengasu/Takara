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
    "Takara Haya Medical L.L.C. is a UAE-based medical company delivering advanced medical equipment, diagnostic imaging systems, nuclear medicine technologies, healthcare consumables, infection control solutions, PPE, and hygiene products through trusted international partnerships, supporting hospitals, clinics, healthcare providers, and critical facilities across the UAE and GCC.",
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
    "Takara Haya Medical L.L.C. is a UAE-based medical company created to provide reliable healthcare products, infection control solutions, PPE, hygiene products, and medical consumables through partnerships with reputable international manufacturers.",
    "The company works with selected medical manufacturers from Japan, Europe, and the United States to introduce high-quality healthcare products to the UAE and GCC markets.",
    "Takara Haya supports private and government healthcare sectors, including hospitals, clinics, pharmacies, medical centers, healthcare groups, and critical facilities requiring medical support.",
    "Our role is not limited to supplying products. We aim to support healthcare providers and international manufacturers through product selection, healthcare zoning, documentation coordination, representation, distribution, and long-term business development.",
  ],
  vision:
    "To become a trusted UAE medical partner that connects leading international healthcare manufacturers with hospitals, clinics, pharmacies, healthcare groups, and medical facilities across the UAE and GCC, while building long-term value through reliable products, strong local support, and professional market representation.",
  mission:
    "To deliver high-quality medical products and healthcare solutions from reputable international manufacturers to the UAE market, supporting private and government healthcare sectors with dependable supply, professional representation, product knowledge, documentation support, and practical solutions that improve safety, hygiene, and healthcare readiness.",
  purpose:
    "Takara Haya Medical LLC proudly supports the UAE’s ambitious vision to lead the future of healthcare and position Abu Dhabi among the world’s foremost destinations for premium medical services and health tourism. By introducing internationally recognized medical technologies, innovative healthcare solutions, and trusted global brands, we help strengthen the quality, safety, and sustainability of healthcare delivery. Our mission is to empower healthcare providers with products that meet the highest international standards while contributing to Abu Dhabi’s growing reputation as a destination where clinical excellence, innovation, and patient experience converge.",
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
  "At Takara Haya Medical L.L.C., our leadership combines international experience, strategic vision, and a commitment to excellence to connect leading global healthcare manufacturers with hospitals, clinics, government entities, and critical facilities across the UAE and GCC.";

export const chairmanMessage = [
  "Under the wise leadership and vision of His Highness Sheikh Mohamed bin Zayed Al Nahyan, President of the UAE and Ruler of Abu Dhabi, Takara Haya Medical L.L.C. is committed to supporting the UAE's continued advancement in healthcare quality, safety, and innovation.",
  "As a UAE-based medical company, our vision is to serve as a trusted bridge between reputable international manufacturers and healthcare providers across the UAE and GCC. We aim to introduce reliable medical products, infection control solutions, PPE, hygiene systems, and healthcare consumables that meet high standards of quality, compliance, and service.",
  "Through long-term partnerships built on trust, professionalism, and shared value, Takara Haya seeks to become a dependable local partner for global healthcare companies entering or expanding in the UAE market.",
];

export const leadershipProfiles: LeadershipProfile[] = [
  {
    name: "H.E. Mohamed Ali Al Shamsi",
    role: "Chairman",
    image: "/leaders/chairman.jpeg",
    biography: [
      "H.E. Mohamed Ali Al Shamsi is an accomplished Emirati diplomat and senior public-sector leader with extensive experience in foreign affairs, international cooperation, and crisis management. He holds a Bachelor's Degree in Military Sciences and a Diploma in Crisis and Emergency Management.",
      "Throughout his career, he served in several senior positions at the Ministry of Foreign Affairs, including Counsellor at the UAE Permanent Mission to the International Atomic Energy Agency, Deputy Director of International Cooperation, and Director of African Affairs.",
      "H.E. Al Shamsi also served as Ambassador Extraordinary and Plenipotentiary of the UAE to the Republic of Chad and as Ambassador to the State of Libya, contributing to the strengthening of the UAE's diplomatic relations and international partnerships.",
    ],
  },
  {
    name: "Eng. Nazim S. Nemer",
    role: "Vice Chairman",
    image: "/leaders/vice_chairman.jpeg",
    biography: [
      "Eng. Nazim S. Nemer is a senior professional with over 33 years of experience within ADNOC, where he held key roles across maintenance planning, production operations, IT support, information systems, quality management, project management, and cost optimization.",
      "Throughout his career, he contributed to the development and implementation of operational and technology-driven solutions, including exploration and development support, production operation systems, and business process improvement initiatives.",
      "He holds a Bachelor of Science degree in Industrial Engineering from Texas A&M University, Texas, USA.",
    ],
  },
  {
    name: "Walid Abdelaziz Elmowafi, PhD",
    role: "Chief Executive Officer",
    image: "/leaders/CEO.jpeg",
    biography: [
      "Dr. Walid Elmowafi is an experienced Nuclear Safeguards Professional, Senior Regulatory Specialist, and International Expert with over 30 years of experience in the nuclear and radiological sectors. He holds a Ph.D. in Nuclear Safeguards and has a strong background in Radiometric Physics.",
      "Throughout his career, he has contributed to the development of nuclear and radiation regulatory frameworks, emergency preparedness standards, and national emergency response planning.",
      "Dr. Elmowafi has held key roles with the Federal Authority for Nuclear Regulation in the UAE and the Atomic Energy Authority in Egypt. He has also shared his expertise academically as an instructor at Mansoura University and various specialized training centers.",
      "His experience includes regulatory development, emergency management, organizational leadership, business continuity, decision-making, negotiation, and representing organizations in national and international forums.",
    ],
  },
  {
    name: "Major General (Ret) Mohamed Shams",
    role: "Chief Strategic Advisor",
    image: "/leaders/Major%20general.jpeg",
    biography: [
      "Major General Engineer (Ret) Mohamed Shams holds a Bachelor's Degree in Electronics & Communication Engineering.",
      "He served in the Egyptian Armed Forces for over forty years, with a distinguished career in the Air Defense Forces specializing in missile systems.",
      "He was appointed to oversee companies and factories across the Suez and South Sinai Governorates. He later served as Deputy Director of the Air Defense College and subsequently as Deputy Commander of Sinai.",
    ],
  },
  {
    name: "Dr. Atef Saeed Suleiman",
    role: "General Manager of Takara Haya Egypt Branch",
    image: "/leaders/General%20Manager%20of%20Takara%20Haya%20Egypt%20Branch.jpeg",
    biography: [
      "Dr. Atef Saeed Suleiman is a seasoned pharmaceutical executive with over 25 years of experience in Egypt's pharmaceutical sector.",
      "Since 1999, he has held key leadership roles within the Central Administration of Pharmaceutical Affairs (CAPA), including pharmaceutical factory licensing, government pharmaceutical inspection, scientific office inspection, and pharmaceutical manufacturing oversight.",
      "He also served as Executive Director of a pharmaceutical raw materials factory at the Arab Organization for Industrialization (AOI).",
    ],
  },
];

export const partners = {
  pageSubheading:
    "Takara Haya Medical L.L.C. works with selected international medical manufacturers to bring trusted healthcare products to the UAE and GCC markets.",
  overview:
    "Takara Haya Medical L.L.C. collaborates with leading medical manufacturers from Japan, Europe, and the United States to deliver reliable, high-quality healthcare solutions across the UAE and GCC. As the exclusive UAE partner of SARAYA Co., Ltd., Japan, we provide world-class infection control, hygiene, disinfection, PPE, medical consumables, and healthcare solutions while building long-term partnerships with globally trusted manufacturers committed to advancing healthcare excellence.",
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
    title: "Infection Control Products",
    image: "/medical_solutions/infection_control.jpeg",
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
    image: "/medical_solutions/PPE.jpeg",
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
    image: "/medical_solutions/Hand%20Hygiene%20Solutions.jpeg",
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
    image: "/medical_solutions/Surface & Environmental Disinfection.jpeg",
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
    image: "/medical_solutions/Medical%20Device%20Reprocessing.jpeg",
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
    image: "/medical_solutions/Pharmacy & Retail Healthcare Products.jpeg",
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

export const diagnosticImagingCategories: ProductCategory[] = [
  {
    title: "Medical Imaging & Diagnostic Solutions",
    image:
      "/Nuclear Medicine & Advanced Diagnostic Imaging Equipment/Medical Imaging & Diagnostic Solutions.jpeg",
    items: [
      "X-ray systems",
      "CT scanners",
      "MRI systems",
      "Ultrasound equipment",
      "Mammography systems",
      "Nuclear medicine and molecular imaging equipment",
      "PET and SPECT systems",
      "Imaging accessories and consumables",
      "Installation, training and technical support",
    ],
    icon: Hospital,
  },
  {
    title: "Nuclear Medicine Solutions",
    image:
      "/Nuclear Medicine & Advanced Diagnostic Imaging Equipment/Nuclear Medicine Solutions.jpeg",
    items: [
      "Ultrasound and Doppler imaging equipment",
      "Mammography and women's imaging systems",
      "Fluoroscopy and interventional imaging solutions",
      "Imaging workstations, accessories and consumables",
      "Installation, training and technical support",
    ],
    icon: BadgeCheck,
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
    image: "/Health_care_zoning/Nurse Station, Ward and Restroom.png",
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
    image: "/Health_care_zoning/Intensive Care Unit.png",
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
    image: "/Health_care_zoning/Operating Theatre.png",
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
    image: "/Health_care_zoning/Central Sterile Supply Department.png",
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
    image: "/Health_care_zoning/Long-term Care Facility.png",
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
