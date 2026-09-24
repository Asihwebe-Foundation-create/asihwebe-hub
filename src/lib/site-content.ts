import { BriefcaseBusiness, Cpu, GraduationCap, MapPinned, type LucideIcon } from "lucide-react";

export type Programme = { title: string; description: string; icon: LucideIcon };
export const programmes: Programme[] = [
  { title: "Enterprise Development", description: "Supporting entrepreneurs and small businesses with practical business capability, digital tools and pathways to sustainable growth.", icon: BriefcaseBusiness },
  { title: "Digital Enablement", description: "Helping underserved businesses and communities participate in the digital economy.", icon: Cpu },
  { title: "Skills & Capacity Development", description: "Building practical entrepreneurial, business and digital capabilities through structured training and development.", icon: GraduationCap },
  { title: "Community Activation", description: "Mobilising communities and ecosystem partners around practical development initiatives and economic opportunities.", icon: MapPinned },
];

export const pathway = ["Registration", "Business Orientation", "Digital Business Profile", "QR Payment Enablement", "Online Marketplace Listing", "Business Workshops", "Market Access", "Growth"];
export const partnerCategories = ["Government & Public Sector", "Corporate & Financial Institutions", "Development Agencies", "Chambers & Business Organisations", "Skills & Training Organisations", "Technology & Digital Partners", "Community Organisations"];
export const leaders = [
  { name: "Deon Ncwane", role: "Executive Director: Enterprise Development & Community Activation", responsibility: "Enterprise development and community activation." },
  { name: "Anita Tsimane", role: "Community Programmes & Stakeholder Relations", responsibility: "Community programme coordination and stakeholder relationships." },
  { name: "Sthembiso Langa", role: "Strategy, Digital Transformation & Ecosystem Development", responsibility: "Strategy, digital enablement and ecosystem development." },
  { name: "Elroy Shilling", role: "Operations, Systems & Programme Delivery", responsibility: "Operational systems and coordinated programme delivery." },
] as const;
