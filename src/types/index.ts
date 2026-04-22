import { LucideIcon } from "lucide-react";

export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  tags: string[];
}

export interface Project {
  id: string;
  title: string;
  tags: string[];
  badge?: string;
  detail?: string;
}

export interface TechItem {
  id: string;
  label: string;
}

export interface SecurityCard {
  id: string;
  title: string;
  icon: LucideIcon;
}

export interface Credential {
  id: string;
  label: string;
}

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
}
