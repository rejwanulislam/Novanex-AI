import { Shield, Server, Lock, Eye, Box, ShieldOff, FileText } from "lucide-react";
import type { Service, Project, TechItem, SecurityCard, Credential, Feature, PricingPlan, Founder } from "@/types";

export const features: Feature[] = [
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SOC 2 compliant with end-to-end data encryption",
  },
  {
    icon: Server,
    title: "Isolated Infrastructure",
    description: "Your systems run in secure, dedicated containers",
  },
  {
    icon: Lock,
    title: "Zero Data Training",
    description: "We guarantee your proprietary data is never used for training",
  },
  {
    icon: Eye,
    title: "Total Transparency",
    description: "Comprehensive audit logs and verifiable data lineage",
  },
];

export const tickerItems: string[] = [
  "Novanex AI Systems",
  "SOP-to-Agent Automation",
  "Predictive Decisions",
  "Spatial Intelligence",
  "Multi-Agent Workflows",
  "Zero Data Training Policy",
  "Advanced RAG Pipelines",
  "Computer Vision Systems",
  "Next.js SaaS Applications",
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
    id: "predictive-bi",
    number: "01",
    title: "Predictive Business Intelligence",
    description:
      "Turn raw business datasets into predictive signals. We build intelligent forecasting models and business decision engines that identify hidden risks and opportunities in real-time.",
    tags: ["ML", "Python", "PostgreSQL"],
  },
  {
    id: "workflow-automation",
    number: "02",
    title: "Intelligent Workflow Automation",
    description:
      "Automate complex, cross-functional processes. We build self-healing multi-agent chains that connect your tools and orchestrate work autonomously without human intervention.",
    tags: ["n8n", "Docker", "Gemini API"],
  },
  {
    id: "geospatial-ai",
    number: "03",
    title: "Geospatial AI Pipelines",
    description:
      "Transform spatial data into action. We engineer robust GIS pipelines that process satellite imagery (SAR, Landsat) to monitor climate impact, predict flooding, and map urban environments.",
    tags: ["Sentinel-1", "GEE", "NetworkX"],
  },
  {
    id: "chatbot-systems",
    number: "04",
    title: "Intelligent Chatbot Systems",
    description:
      "Next-generation customer experience. We build highly conversational, RAG-powered chatbot systems that integrate securely with internal knowledge bases to resolve queries instantly.",
    tags: ["n8n", "Gemini", "Facebook API"],
  },
  {
    id: "web-development",
    number: "05",
    title: "Custom Web Application Development",
    description:
      "Scalable, high-performance web products. We design and build responsive Next.js apps, admin dashboards, and custom SaaS platforms optimized for performance and long-term maintainability.",
    tags: ["Next.js", "React", "FastAPI"],
  },
  {
    id: "saas-platforms",
    number: "06",
    title: "SaaS Platform Engineering",
    description:
      "Complete SaaS engineering. From robust multi-tenant architectures and Stripe payments to AI integration layers and security, we deliver ready-to-scale SaaS platforms.",
    tags: ["Next.js", "PostgreSQL", "Docker"],
  }
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
    price: "$200",
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
    price: "$300",
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

export const founders: readonly Founder[] = [
  {
    id: "founder-1",
    name: "Md. Rifatul Islam",
    role: "Founder & CEO",
    tagline: "Building AI that thinks like an operator, not a researcher.",
    bio: "Rifatul leads Novanex AI's vision and technical strategy. With a background spanning urban planning, geospatial intelligence, and production ML systems, he bridges cutting-edge AI research and real-world operational deployment. His work on the OmniGuard-AI flood resilience pipeline and Rajshahi 2035 climate analysis earned national recognition at the GEOPLAN 1.0 Mapathon.",
    expertise: ["LangGraph Orchestration", "Geospatial AI", "RAG Architecture", "Computer Vision", "FastAPI Systems"],
    credentials: [
      "APA Member #443529",
      "Int'l Speaker — Pabna University of Science and Technology",
      "CROPC-IMD Government Intern",
      "GEOPLAN 1st Runner-up (National)",
      "UNITAR Climate Programs",
      "Helsinki Python MOOC",
    ],
    location: "Pabna, Bangladesh",
    accent: "signal",
    avatar: "RI",
    links: { github: "#", linkedin: "#", twitter: "#" },
  },
  {
    id: "founder-2",
    name: "Rejwanul Islam",
    role: "Co-Founder & CTO",
    tagline: "Turning messy operations into elegant autonomous systems.",
    bio: "Rejwanul architects Novanex AI's product and engineering stack. He specializes in full-stack AI system design — from Next.js frontends and FastAPI backends to LangGraph orchestration and Docker deployments. He builds the infrastructure that turns AI prototypes into reliable, scalable production systems.",
    expertise: ["Product Strategy", "Next.js", "React", "FastAPI", "LangGraph", "Docker", "PostgreSQL", "n8n"],
    credentials: [
      "Software Engineer",
      "Scalable System Design",
      "API Integration Expert",
      "AI System Designer",
    ],
    location: "Dhaka, Bangladesh",
    accent: "plasma",
    avatar: "RI",
    links: { github: "#", linkedin: "#", twitter: "#" },
  },
] as const;

export const teamStats = [
  { value: "2", label: "Founding Engineers" },
  { value: "6+", label: "Years Combined Experience" },
  { value: "20+", label: "Systems Shipped" },
  { value: "100%", label: "Production Focus" },
] as const;

export const teamValues = [
  {
    title: "Ship First",
    desc: "Every system is scoped to deploy in weeks — not months. We iterate fast and get AI into production where it creates real value.",
    accent: "signal" as const,
  },
  {
    title: "Own the Stack",
    desc: "We don't hand off to black boxes. We control every layer — from RAG indexes to Docker containers — so you always know what's running.",
    accent: "plasma" as const,
  },
  {
    title: "Zero Bloat",
    desc: "No unnecessary models, no vanity metrics. Every component earns its place by solving a real operational problem for a real user.",
    accent: "cyan" as const,
  },
] as const;

export const stats = [
  { value: "20+", label: "AI Systems Deployed" },
  { value: "92%", label: "Automation Resolution Rate" },
  { value: "6", label: "Core AI Disciplines" },
  { value: "0", label: "Data Shared with Third Parties" },
] as const;
