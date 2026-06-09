import type { Metadata } from "next";
import FoundersClient from "./FoundersClient";

export const metadata: Metadata = {
  title: "Our Team — Novanex AI",
  description: "Meet the engineers and builders behind Novanex AI — shipping production AI systems for real operations.",
};

export default function FoundersPage() {
  return <FoundersClient />;
}
