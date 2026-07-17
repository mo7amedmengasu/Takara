import type { LucideIcon } from "lucide-react";

export type NavItem = {
  label: string;
  path: string;
  group?: "solutions";
};

export type PageMeta = {
  title: string;
  description: string;
};

export type Service = {
  title: string;
  description: string;
  href?: string;
  icon: LucideIcon;
};

export type Value = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type LeadershipProfile = {
  name: string;
  role: string;
  image: string;
  biography: string[];
};

export type ProductCategory = {
  title: string;
  image: string;
  intro?: string;
  items: string[];
  icon: LucideIcon;
};

export type ZoningArea = {
  title: string;
  image: string;
  products: string[];
};

export type PartnerRegion = {
  title: string;
  description: string;
};

export type ContactInquiry =
  | "Product Inquiry"
  | "Partnership Request"
  | "Manufacturer Representation"
  | "Distribution Inquiry"
  | "Healthcare Zoning Request"
  | "Pharmacy Supply Inquiry"
  | "Government Healthcare Inquiry"
  | "Private Healthcare Inquiry"
  | "Medical Solutions for Critical Facilities"
  | "Meeting Request"
  | "General Inquiry";
