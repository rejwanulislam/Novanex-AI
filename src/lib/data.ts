import { Shield, Server, Lock, Eye, Box, ShieldOff, FileText } from "lucide-react";
import type { Service, Project, TechItem, SecurityCard, Credential, Feature, PricingPlan } from "@/types";

export const features: Feature[] = [
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description: "SOC 2 Type II compliant with end-to-end encryption",
  },
  {
    icon: Server,
    title: "Isolated Containers",
    description: "Your data runs in dedicated Docker containers",
  },
  {
    icon: Lock,
    title: "Zero Data Training",
    description: "We never train models on your proprietary data",
  },
  {
    icon: Eye,
    title: "Full Transparency",
    description: "Complete audit logs and data lineage tracking",
  },
];

export const tickerItems: string[] = [
  "SOP-to-Agent Systems",
  "Predictive BI",
  "Workflow Automation",
  "Geospatial AI",
  "Multi-Agent Orchestration",
  "Zero Data Training Policy",
  "Active RAG Systems",
  "Computer Vision",
  "LangGraph Pipelines",
  "FastAPI Backends",
];

export const techStack: readonly TechItem[] = [
  { id: "python", label: "Python" },
  { id: "langchain", label: "LangChain" },
  { id: "langgraph", label: "LangGraph" },
  { id: "n8n", label: "N8N" },
  { id: "fastapi", label: "FastAPI" },
  { id: "docker", label: "Docker" },
  { id: "postgresql", label: "PostgreSQL" },
  { id: "groq", label: "Groq" },
  { id: "gemini-api", label: "Gemini API" },
  { id: "yolov8", label: "YOLOv8" },
  { id: "pinecone", label: "Pinecone" },
  { id: "sentinel-1-sar", label: "Sentinel-1 SAR" },
  { id: "google-earth-engine", label: "Google Earth Engine" },
  { id: "arcgis", label: "ArcGIS" },
  { id: "networkx", label: "NetworkX" },
  { id: "react", label: "React" },
  { id: "github-actions", label: "GitHub Actions" },
  { id: "streamlit", label: "Streamlit" },
] as const;

export const services: readonly Service[] = [
  {
    id: "sop-to-agent",
    number: "01",
    title: "SOP-to-Agent Systems",
    description:
      "We convert static SOPs and internal documents into resilient AI operators that can execute workflows, answer with context, and trigger downstream actions.",
    tags: ["RAG", "LangGraph", "FastAPI"],
  },
  {
    id: "predictive-bi",
    number: "02",
    title: "Predictive Business Intelligence",
    description:
      "From raw business data to predictive signals, we design decision engines that surface risk, opportunity, and next-best action in real time.",
    tags: ["ML", "Python", "PostgreSQL"],
  },
  {
    id: "workflow-automation",
    number: "03",
    title: "Intelligent Workflow Automation",
    description:
      "We orchestrate autonomous process chains that integrate your existing systems and remove repetitive bottlenecks from core operations.",
    tags: ["n8n", "Docker", "Gemini API"],
  },
  {
    id: "geospatial-ai",
    number: "04",
    title: "Geospatial AI Pipelines",
    description:
      "We engineer geospatial intelligence stacks that transform satellite and spatial data into operational forecasts, anomaly flags, and planning insight.",
    tags: ["Sentinel-1", "GEE", "NetworkX"],
  },
  {
    id: "computer-vision",
    number: "05",
    title: "Computer Vision Agents",
    description:
      "Our visual agents detect, track, and interpret objects at speed to power quality assurance, monitoring, and event-driven automation.",
    tags: ["YOLOv8", "ByteTrack", "Groq"],
  },
  {
    id: "chatbot-systems",
    number: "06",
    title: "Intelligent Chatbot Systems",
    description:
      "We deploy production chatbot systems that combine fast automation with business context for support, lead qualification, and conversion flows.",
    tags: ["n8n", "Gemini", "Facebook API"],
  },
  {
    id: "web-development",
    number: "07",
    title: "Custom Web Application Development",
    description:
      "We build scalable, production-grade web applications with modern stacks — from SaaS dashboards to internal tools — optimized for performance and long-term maintainability.",
    tags: ["Next.js", "React", "FastAPI"],
  },
  {
    id: "landing-pages",
    number: "08",
    title: "High-Conversion Landing Pages",
    description:
      "We design and deploy performance-focused landing pages with AI-powered A/B testing hooks, analytics integration, and conversion-optimized UI that turns visitors into leads.",
    tags: ["Next.js", "Tailwind", "Analytics"],
  },
  {
    id: "ecommerce",
    number: "09",
    title: "AI-Enhanced E-Commerce Platforms",
    description:
      "We develop intelligent e-commerce systems with smart product recommendation engines, automated inventory alerts, and AI-driven customer support built directly into the storefront.",
    tags: ["Next.js", "Stripe", "Gemini API"],
  },
  {
    id: "saas-platforms",
    number: "10",
    title: "SaaS Platform Engineering",
    description:
      "From authentication to billing to role-based dashboards, we engineer complete SaaS platforms with multi-tenancy, usage analytics, and AI feature layers ready to scale from day one.",
    tags: ["Next.js", "PostgreSQL", "Docker"],
  },
  {
    id: "portfolio-sites",
    number: "11",
    title: "Portfolio & Corporate Websites",
    description:
      "We craft visually distinctive, SEO-optimized corporate and portfolio websites that load fast, rank well, and communicate brand authority — built to impress and built to last.",
    tags: ["Next.js", "Tailwind", "Vercel"],
  },
  {
    id: "web-scraping",
    number: "12",
    title: "Intelligent Web Scraping & Data Pipelines",
    description:
      "We engineer robust scraping systems with anti-detection handling, structured data extraction, and automated pipelines that feed directly into your dashboards or AI models.",
    tags: ["Python", "FastAPI", "PostgreSQL"],
  },
] as const;

export const securityCards: readonly SecurityCard[] = [
  { id: "encryption", title: "End-to-End Encryption", icon: Lock },
  { id: "containers", title: "Isolated Containers", icon: Box },
  { id: "no-training", title: "Zero Data Training Policy", icon: ShieldOff },
  { id: "audit", title: "Full Audit Transparency", icon: FileText },
] as const;

export const projects: readonly Project[] = [
  {
    id: "rajshahi-2035",
    title: "Rajshahi 2035 — Vanishing Blue & Rising Red",
    tags: ["GEE", "ArcGIS", "Landsat", "AI Safety", "Climate"],
    badge: "🏆 National 1st Runner-up — GEOPLAN 1.0 Mapathon",
  },
  {
    id: "omniguard-ai",
    title: "OmniGuard-AI: Flood Resilience Pipeline",
    tags: ["Sentinel-1 SAR", "NetworkX", "Gemini 1.5 Flash"],
    detail: "Validated on 2024 Kurigram flood event",
  },
  {
    id: "bip-rag",
    title: "BIP RAG Chatbot — Bangladesh Institute of Planners",
    tags: ["FastAPI", "LangChain", "GitHub Actions"],
    detail: "Zero-cost CI/CD pipeline, zero manual maintenance required.",
  },
  {
    id: "traffic-agent",
    title: "AI Traffic Counting Agent",
    tags: ["YOLOv8", "ByteTrack", "Groq"],
    detail:
      "Real-time vehicle detection with natural language querying, deployed via Streamlit.",
  },
] as const;

export const oldWayPoints: readonly string[] = [
  "Manual document processing",
  "Siloed knowledge and scattered SOPs",
  "High customer support overhead",
  "Slow and error-prone workflows",
  "Inability to scale operations quickly",
] as const;

export const insightFlowPoints: readonly string[] = [
  "Automated data extraction & routing",
  "Unified AI knowledge base (RAG)",
  "24/7 AI Agents with 90% resolution",
  "Intelligent and error-free pipelines",
  "Instant scaling with Multi-Agent Systems",
] as const;

export const credentials: readonly Credential[] = [
  { id: "apa", label: "APA Member #443529" },
  { id: "speaker", label: "Int'l Speaker (Nalanda Univ)" },
  { id: "cropc-imd", label: "CROPC-IMD Govt. Intern" },
  { id: "geoplan", label: "GEOPLAN 1st Runner-up" },
  { id: "unitar", label: "UNITAR Climate Programs" },
  { id: "helsinki", label: "Helsinki Python MOOC" },
] as const;

export const pricingPlans: readonly PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    price: "$1,500",
    period: "/ project",
    description: "Perfect for small businesses ready to automate their first workflow.",
    features: [
      "1 AI Agent or Chatbot",
      "Basic RAG Integration",
      "FastAPI Backend",
      "2 weeks delivery",
      "30-day support",
    ],
    cta: "Get Started",
  },
  {
    id: "growth",
    name: "Growth",
    price: "$4,500",
    period: "/ project",
    description: "For scaling teams that need end-to-end AI pipeline deployment.",
    features: [
      "Up to 3 AI Agents",
      "Multi-source RAG System",
      "LangGraph Orchestration",
      "CI/CD Pipeline Setup",
      "Custom Dashboards",
      "60-day support",
    ],
    cta: "Scale Up",
    popular: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom",
    period: "pricing",
    description: "Full-stack AI transformation for enterprise operations.",
    features: [
      "Unlimited AI Agents",
      "Geospatial AI Integration",
      "Computer Vision Pipeline",
      "Multi-Agent Orchestration",
      "Dedicated Infra & Docker",
      "Ongoing maintenance",
    ],
    cta: "Contact Us",
  },
] as const;

export const stats = [
  { value: "15+", label: "AI Systems Deployed" },
  { value: "90%", label: "Automation Resolution Rate" },
  { value: "6", label: "Core AI Disciplines" },
  { value: "0", label: "Data Sold to Third Parties" },
] as const;
