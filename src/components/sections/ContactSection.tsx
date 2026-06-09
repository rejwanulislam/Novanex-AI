"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MessageSquare, User, Briefcase, CheckCircle, Loader2 } from "lucide-react";
import { useInView } from "react-intersection-observer";
import SectionHeader from "@/components/ui/SectionHeader";

type FormState = "idle" | "loading" | "success" | "error";

export default function ContactSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formState, setFormState] = useState<FormState>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");
    await new Promise((r) => setTimeout(r, 1800));
    setFormState("success");
  };

  return (
    <section id="contact" className="section-pad relative overflow-hidden" ref={ref}>
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <SectionHeader
              label="Let's Build"
              title={
                <>
                  Ready to deploy{" "}
                  <span className="gradient-text-accent">your AI system?</span>
                </>
              }
              description="Tell us about your operations. We'll scope a system that fits — no fluff, no generic demos."
            />

            <div className="space-y-3 -mt-2">
              {[
                { icon: Mail, label: "Email", value: "hello@novanexai.com" },
                { icon: MessageSquare, label: "Response time", value: "Within 24 hours" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg border border-border-subtle bg-surface flex items-center justify-center">
                    <item.icon size={15} className="text-accent" />
                  </div>
                  <div>
                    <div className="text-text-muted text-xs font-medium">{item.label}</div>
                    <div className="text-text-primary text-sm font-medium">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 stack-card p-5">
              <div className="text-xs font-medium text-accent uppercase tracking-wider mb-3">
                Quick Process
              </div>
              {[
                "Discovery call — understand your operation",
                "Architecture plan — scoped & priced",
                "Build & deploy — full transparency",
                "Support & scale — long-term partnership",
              ].map((text, i) => (
                <div key={text} className="flex items-start gap-2.5 mb-2.5 last:mb-0">
                  <span className="text-xs font-semibold text-accent w-5">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-text-secondary text-sm">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="stack-card p-7 md:p-8">
              {formState === "success" ? (
                <div className="flex flex-col items-center justify-center py-10 gap-3 text-center">
                  <div className="w-14 h-14 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center">
                    <CheckCircle size={26} className="text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-text-primary">Message Sent!</h3>
                  <p className="text-text-secondary text-sm max-w-xs">
                    We&apos;ll review your project and get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setFormState("idle");
                      setForm({ name: "", email: "", company: "", service: "", message: "" });
                    }}
                    className="btn-ghost mt-3 px-5 py-2 rounded-lg text-sm"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="relative">
                      <User size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="input-field w-full pl-9 pr-4 py-3 rounded-lg text-sm"
                      />
                    </div>
                    <div className="relative">
                      <Mail size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
                      <input
                        type="email"
                        name="email"
                        placeholder="Work Email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="input-field w-full pl-9 pr-4 py-3 rounded-lg text-sm"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <Briefcase size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
                    <input
                      type="text"
                      name="company"
                      placeholder="Company / Organization"
                      value={form.company}
                      onChange={handleChange}
                      className="input-field w-full pl-9 pr-4 py-3 rounded-lg text-sm"
                    />
                  </div>

                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    required
                    className="input-field w-full px-4 py-3 rounded-lg text-sm appearance-none"
                  >
                    <option value="" disabled>Select a Service</option>
                    <option value="sop-to-agent">SOP-to-Agent Systems</option>
                    <option value="predictive-bi">Predictive Business Intelligence</option>
                    <option value="workflow-automation">Intelligent Workflow Automation</option>
                    <option value="geospatial-ai">Geospatial AI Pipelines</option>
                    <option value="computer-vision">Computer Vision Agents</option>
                    <option value="chatbot-systems">Intelligent Chatbot Systems</option>
                    <option value="custom">Custom / Multiple Services</option>
                  </select>

                  <textarea
                    name="message"
                    placeholder="Tell us about your project and operational challenges..."
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="input-field w-full px-4 py-3 rounded-lg text-sm resize-none"
                  />

                  <button
                    type="submit"
                    disabled={formState === "loading"}
                    className="btn-primary w-full flex items-center justify-center gap-2 py-3 rounded-lg text-sm disabled:opacity-70"
                  >
                    {formState === "loading" ? (
                      <>
                        <Loader2 size={15} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={14} />
                      </>
                    )}
                  </button>

                  <p className="text-text-muted text-xs text-center">
                    No spam. No reselling. Just a conversation about your project.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
