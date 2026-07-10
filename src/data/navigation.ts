import type { NavItem } from "../types/content";

export const navigationItems: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Leadership", path: "/leadership" },
  { label: "Partners", path: "/partners" },
  { label: "Medical Solutions", path: "/medical-solutions", group: "solutions" },
  { label: "Healthcare Zoning", path: "/healthcare-zoning", group: "solutions" },
  { label: "Critical Facilities Medical Support", path: "/critical-facilities", group: "solutions" },
  { label: "Compliance & Quality", path: "/compliance-quality" },
  { label: "Contact Us", path: "/contact" },
];
