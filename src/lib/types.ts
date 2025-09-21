import type { LucideIcon } from "lucide-react";

export type Service = {
  id: string;
  name: string;
  iconName: string; // Changed from icon: LucideIcon
  icon: LucideIcon; // Kept for places where we can use it directly on the server
  description_short: string;
  description_long: string;
  imageId: string;
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