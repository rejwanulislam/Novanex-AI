import type { Metadata } from "next";
import FoundersClient from "./FoundersClient";

export const metadata: Metadata = {
  title: "Our Founders — InsightFlow AI",
  description: "Meet the visionaries behind InsightFlow AI — engineers, researchers, and builders redefining what AI systems can do for real operations.",
};

export default function FoundersPage() {
  return <FoundersClient />;
}
