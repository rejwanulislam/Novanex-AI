import type { IconType } from "react-icons";
import {
  SiPython,
  SiLangchain,
  SiLanggraph,
  SiN8N,
  SiFastapi,
  SiDocker,
  SiPostgresql,
  SiGooglegemini,
  SiYolo,
  SiGoogleearthengine,
  SiEsri,
  SiReact,
  SiGithubactions,
  SiStreamlit,
} from "react-icons/si";
import { Cpu, Database, Network, Satellite } from "lucide-react";
import { cn } from "@/lib/utils";

const brandIcons: Record<string, IconType> = {
  python: SiPython,
  langchain: SiLangchain,
  langgraph: SiLanggraph,
  n8n: SiN8N,
  fastapi: SiFastapi,
  docker: SiDocker,
  postgresql: SiPostgresql,
  "gemini-api": SiGooglegemini,
  yolov8: SiYolo,
  "google-earth-engine": SiGoogleearthengine,
  arcgis: SiEsri,
  react: SiReact,
  "github-actions": SiGithubactions,
  streamlit: SiStreamlit,
};

const lucideIcons: Record<string, typeof Cpu> = {
  groq: Cpu,
  pinecone: Database,
  "sentinel-1-sar": Satellite,
  networkx: Network,
};

interface TechStackIconProps {
  id: string;
  size?: number;
  className?: string;
}

export default function TechStackIcon({ id, size = 22, className }: TechStackIconProps) {
  const BrandIcon = brandIcons[id];
  if (BrandIcon) {
    return <BrandIcon size={size} className={cn("flex-shrink-0", className)} aria-hidden />;
  }

  const LucideIcon = lucideIcons[id];
  if (LucideIcon) {
    return <LucideIcon size={size} className={cn("flex-shrink-0", className)} aria-hidden />;
  }

  return (
    <span
      className={cn("flex-shrink-0 rounded bg-surface-overlay", className)}
      style={{ width: size, height: size }}
      aria-hidden
    />
  );
}
