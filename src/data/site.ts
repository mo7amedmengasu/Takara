import { navigationItems } from "./navigation";
import type { PageMeta } from "../types/content";

export const company = {
  name: "Takara Haya Medical L.L.C.",
  email: "info@takarahaya.com",
  location: "United Arab Emirates",
  logo: "/brand/logo.jpeg",
  description:
    "Takara Haya Medical L.L.C. is a UAE-based medical company providing healthcare products, infection control solutions, PPE, hygiene products, and medical consumables through selected international manufacturers.",
};

export const footer = {
  description: company.description,
  copyright: "© Takara Haya Medical L.L.C. All Rights Reserved.",
  quickLinks: navigationItems,
};

export const pageMeta: Record<string, PageMeta> = {
  "/": {
    title: "Takara Haya Medical | Medical Products & Healthcare Solutions UAE",
    description:
      "Takara Haya Medical L.L.C. connects trusted international healthcare manufacturers with hospitals, clinics, pharmacies, healthcare providers, and critical facilities across the UAE and GCC.",
  },
  "/about": {
    title: "About Takara Haya Medical | UAE Medical Company",
    description:
      "Learn about Takara Haya Medical L.L.C., a UAE-based medical company connecting global healthcare manufacturers with the UAE and GCC healthcare markets.",
  },
  "/leadership": {
    title: "Leadership | Takara Haya Medical",
    description:
      "Meet the leadership team behind Takara Haya Medical L.L.C. and read the Chairman's message.",
  },
  "/partners": {
    title: "International Partners | Takara Haya Medical",
    description:
      "Takara Haya Medical works with selected international medical manufacturers to bring trusted healthcare products to the UAE and GCC markets.",
  },
  "/medical-solutions": {
    title: "Medical Solutions | Takara Haya Medical UAE",
    description:
      "Healthcare products, medical consumables, PPE, hygiene solutions, and infection control products for healthcare providers in the UAE and GCC.",
  },
  "/nuclear-medicine-imaging": {
    title: "Nuclear Medicine & Advanced Diagnostic Imaging | Takara Haya Medical",
    description:
      "Nuclear medicine, molecular imaging, diagnostic imaging equipment, PET, SPECT, MRI, CT, X-ray, ultrasound, mammography, accessories, training, and technical support solutions.",
  },
  "/healthcare-zoning": {
    title: "Healthcare Zoning Solutions | Takara Haya Medical",
    description:
      "A structured approach to placing the right medical, hygiene, PPE, and infection control products in the right healthcare areas.",
  },
  "/critical-facilities": {
    title: "Critical Facilities Medical Support | Takara Haya Medical",
    description:
      "Medical and healthcare-related solutions for onsite clinics, staff health, hygiene, PPE, and emergency medical readiness.",
  },
  "/compliance-quality": {
    title: "Compliance & Quality | Takara Haya Medical",
    description:
      "Supporting healthcare product evaluation through proper documentation, quality standards, and reliable manufacturer coordination.",
  },
  "/contact": {
    title: "Contact Takara Haya Medical | UAE Medical Products",
    description:
      "Contact Takara Haya Medical for product inquiries, medical partnerships, representation opportunities, distribution requests, or meeting arrangements.",
  },
};
