import type { LucideIcon } from "lucide-react";

export type Service = {
  id: string;
  name: string;
  icon: LucideIcon;
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
};
