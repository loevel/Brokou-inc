
import type { LucideIcon } from "lucide-react";

export type Service = {
  id: string;
  name: string;
  iconName: string; 
  icon: LucideIcon;
  description_short: string;
  description_long: string;
  imageId: string;
  category?: string;
  details?: string[];
};

export type JobOffer = {
  id: string;
  title: string;
  location: string;
  type: "Temps plein" | "Temps partiel" | "Contrat";
  description: string;
  mode: string;
  validityDate: string;
  introduction: string;
  activities: string[];
  deliverables: string[];
  requirements: string[];
  remuneration: string;
  status: string;
  startDate: string;
  socialBenefits: boolean;
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatarImageId: string;
  rating: number;
};
