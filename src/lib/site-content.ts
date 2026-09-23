import { BriefcaseBusiness, Cpu, GraduationCap, MapPinned, type LucideIcon } from "lucide-react";

export type Programme = { title: string; description: string; icon: LucideIcon };
export const programmes: Programme[] = [
  { title: "Enterprise Development", description: "Supporting entrepreneurs and small businesses with practical tools, knowledge and pathways to sustainable growth.", icon: BriefcaseBusiness },
  { title: "Digital Enablement", description: "Helping underserved entrepreneurs and communities participate in the digital economy through accessible tools, platforms and capability development.", icon: Cpu },
  { title: "Skills & Capacity Development", description: "Building practical business, digital and entrepreneurial capabilities through structured training, workshops and development programmes.", icon: GraduationCap },
  { title: "Community Activation & Market Access", description: "Connecting communities, entrepreneurs and ecosystem partners to opportunities, markets and resources that accelerate economic participation.", icon: MapPinned },
];

export const pathway = ["Registration", "Business Orientation", "Digital Business Profile", "QR Payment Enablement", "Online Marketplace Listing", "Business Workshops", "Market Access", "Growth"];
export const partnerCategories = ["Government & Public Sector", "Corporates", "Financial Institutions", "Development Agencies", "Chambers & Business Organisations", "Community Organisations", "Training & Skills Partners", "Technology Partners"];
export const leaders = [
  ["Deon Ncwane", "Executive Director: Enterprise Development & Community Activation"],
  ["Anita Tsimane", "Community Programmes & Stakeholder Relations"],
  ["Sthembiso Langa", "Strategy, Digital Transformation & Ecosystem Development"],
  ["Elroy", "Operations, Systems & Programme Delivery · Surname and further details to be supplied"],
] as const;
