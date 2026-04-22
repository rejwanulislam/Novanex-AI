"use client";

import { useState } from "react";
import { Send, Mail, MessageSquare, User, Briefcase, CheckCircle, Loader2 } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

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
    // Simulate API call — replace with your actual endpoint
    await new Promise((r) => setTimeout(r, 1800));
    setFormState("success");
  };

  return (
    <section id="contact" className="py-28 bg-ink-light border-t border-white/5 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div
        className="absolute bottom-0 right-0 w-1/2 h-1/2 opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 100% 100%, rgba(0,255,178,0.4), transparent 60%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: info */}
          <div
            className={cn(
              "transition-all duration-700",
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            )}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-signal" />
              <span className="font-mono text-xs text-signal uppercase tracking-widest">
                Let&apos;s Build
              </span>
            </div>
            <h2 className="font-display font-800 text-4xl md:text-5xl text-text-primary mb-6 leading-tight">
              Ready to Deploy
              <br />
              <span className="gradient-text-signal">Your AI System?</span>
            </h2>
            <p className="text-text-secondary leading-relaxed mb-8 max-w-md">
              Tell us about your operations. We&apos;ll scope a system that fits your
              exact needs — no fluff, no generic demos. Real AI for real workflows.
            </p>

            {/* Contact info */}
            <div className="space-y-4">
              {[
                { icon: Mail, label: "Email", value: "hello@insightflow.ai" },
                { icon: MessageSquare, label: "Response time", value: "Within 24 hours" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl border border-white/8 bg-ink flex items-center justify-center flex-shrink-0">
                    <item.icon size={16} className="text-signal" />
                  </div>
                  <div>
                    <div className="text-text-muted text-xs font-mono uppercase tracking-widest">
                      {item.label}
                    </div>
                    <div className="text-text-primary text-sm font-medium">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Process */}
            <div className="mt-10 rounded-2xl border border-white/8 bg-ink p-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-signal/40 via-plasma/40 to-transparent" />
              <div className="font-mono text-xs text-signal uppercase tracking-widest mb-4">
                Our Process
              </div>
              {[
                { step: "01", text: "Discovery Call — understand your operation" },
                { step: "02", text: "Architecture Plan — scoped & priced" },
                { step: "03", text: "Build & Deploy — with full transparency" },
                { step: "04", text: "Support & Scale — long-term partnership" },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-3 mb-3 last:mb-0">
                  <span className="font-mono text-xs text-signal flex-shrink-0 mt-0.5">
                    {item.step}
                  </span>
                  <span className="text-text-secondary text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div
            className={cn(
              "transition-all duration-700",
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            )}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="rounded-2xl border border-white/8 bg-ink p-8 relative overflow-hidden">
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-signal/40 to-transparent" />

              {formState === "success" ? (
                <div className="flex flex-col items-center justify-center py-12 gap-4 text-center">
                  <div className="w-16 h-16 rounded-full bg-signal/10 border border-signal/30 flex items-center justify-center">
                    <CheckCircle size={28} className="text-signal" />
                  </div>
                  <h3 className="font-display font-700 text-xl text-text-primary">
                    Message Sent!
                  </h3>
                  <p className="text-text-secondary text-sm max-w-xs">
                    We&apos;ll review your project and get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => { setFormState("idle"); setForm({ name: "", email: "", company: "", service: "", message: "" }); }}
                    className="btn-outline mt-4 px-6 py-2.5 rounded-xl text-sm"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="relative">
                      <User size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted" />
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="input-field w-full pl-9 pr-4 py-3 rounded-xl text-sm"
                      />
                    </div>
                    {/* Email */}
                    <div className="relative">
                      <Mail size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted" />
                      <input
                        type="email"
                        name="email"
                        placeholder="Work Email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="input-field w-full pl-9 pr-4 py-3 rounded-xl text-sm"
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div className="relative">
                    <Briefcase size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted" />
                    <input
                      type="text"
                      name="company"
                      placeholder="Company / Organization"
                      value={form.company}
                      onChange={handleChange}
                      className="input-field w-full pl-9 pr-4 py-3 rounded-xl text-sm"
                    />
                  </div>

                  {/* Service */}
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    required
                    className="input-field w-full px-4 py-3 rounded-xl text-sm appearance-none"
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

                  {/* Message */}
                  <textarea
                    name="message"
                    placeholder="Tell us about your project and operational challenges..."
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="input-field w-full px-4 py-3 rounded-xl text-sm resize-none"
                  />

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={formState === "loading"}
                    className="btn-signal w-full flex items-center justify-center gap-2 py-4 rounded-xl text-sm font-display font-700 uppercase tracking-wider disabled:opacity-70"
                  >
                    {formState === "loading" ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
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
          </div>
        </div>
      </div>
    </section>
  );
}
