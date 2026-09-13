"use client";

import { useState } from "react";
import { Mail, Github, Linkedin, Send, MessageSquare, CheckCircle2, AlertCircle } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ submitting:false, submitted:false, error:false, message:"" });

  const handleChange = (e) => setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ submitting:false, submitted:false, error:true, message:"Please complete all fields before submitting." });
      return;
    }
    setStatus({ submitting:true, submitted:false, error:false, message:"" });

    try {
      // Direct mailto launcher and instant confirmation feedback
      const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
      
      // Also post to Netlify Forms if hosted on Netlify
      const netlifyFormData = new URLSearchParams({
        "form-name": "contact",
        ...formData,
      }).toString();

      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: netlifyFormData,
      }).catch(() => {});

      setStatus({
        submitting: false,
        submitted: true,
        error: false,
        message: "Thank you! Your message has been prepared. Opening your email client to send...",
      });

      setTimeout(() => {
        window.location.href = `mailto:vaishnaviojha006@gmail.com?subject=${subject}&body=${body}`;
      }, 500);

      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus({ submitting: false, submitted: false, error: true, message: "Could not open email client. Please email vaishnaviojha006@gmail.com directly." });
    }
  };

  const contacts = [
    { href: personalInfo.links.email,   label: "Email",   sub: personalInfo.links.email?.replace(/^mailto:/, ""),   Icon: Mail,    accent: "text-cyan-400",   bg: "bg-cyan-950/40",   border: "border-cyan-500/30" },
    { href: personalInfo.links.github,  label: "GitHub",  sub: personalInfo.links.github,  Icon: Github,  accent: "text-blue-400",   bg: "bg-blue-950/40",   border: "border-blue-500/30" },
    { href: personalInfo.links.linkedin,label: "LinkedIn",sub: personalInfo.links.linkedin,Icon: Linkedin, accent: "text-sky-400",    bg: "bg-sky-950/40",    border: "border-sky-500/30" },
  ];

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Let's Build <span className="text-gradient-cyan">Something Together</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-3">
            I'm always interested in building interesting products, solving challenging problems and exploring new opportunities.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="glass-card p-8 rounded-3xl space-y-6 shadow-xl">
              <h3 className="text-xl font-bold text-white">Connect Directly</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Whether you have a question, a project idea, or an opportunity, reach out through any of these platforms:
              </p>
              <div className="space-y-3">
                {contacts.map(({ href, label, sub, Icon, accent, bg, border }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                    className={`flex items-center gap-4 p-4 rounded-2xl bg-[#080e1e] border border-cyan-500/25 hover:border-cyan-400/60 text-slate-300 hover:text-white transition-all group shadow-sm`}
                  >
                    <div className={`p-3 rounded-xl ${bg} ${accent} ${border} border group-hover:scale-110 transition-transform`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="text-xs text-slate-400 block font-mono font-medium">{label}</span>
                      <span className={`text-sm font-semibold truncate block group-hover:${accent} transition-colors`}>{sub}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit} className="glass-card p-8 sm:p-10 rounded-3xl space-y-6 shadow-xl">
              <input type="hidden" name="form-name" value="contact" />
              <h3 className="text-xl font-bold text-white">Send a Message</h3>

              {status.error && (
                <div className="p-4 rounded-xl bg-rose-950/60 border border-rose-500/40 text-rose-300 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  {status.message}
                </div>
              )}
              {status.submitted && (
                <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                  {status.message}
                </div>
              )}

              {[
                { id:"name",    label:"Your Name",  type:"text",  ph:"e.g. Alex Morgan" },
                { id:"email",   label:"Your Email", type:"email", ph:"e.g. alex@example.com" },
              ].map(({ id, label, type, ph }) => (
                <div key={id} className="space-y-2">
                  <label htmlFor={id} className="text-xs font-semibold uppercase tracking-wider text-slate-400 block font-mono">{label}</label>
                  <input
                    type={type} id={id} name={id} value={formData[id]}
                    onChange={handleChange} placeholder={ph}
                    className="w-full px-4 py-3 rounded-xl bg-[#080e1e] border border-cyan-500/25 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500/30 text-sm transition-colors"
                  />
                </div>
              ))}

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-slate-400 block font-mono">Message</label>
                <textarea
                  id="message" name="message" rows={5} value={formData.message}
                  onChange={handleChange} placeholder="Tell me about your project, idea, or role details..."
                  className="w-full px-4 py-3 rounded-xl bg-[#080e1e] border border-cyan-500/25 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500/30 text-sm transition-colors resize-none"
                />
              </div>

              <button
                type="submit" disabled={status.submitting}
                className="shimmer-btn w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-cyan-600 via-cyan-500 to-blue-600 hover:from-cyan-500 hover:to-blue-500 rounded-xl shadow-lg shadow-cyan-950/60 hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-50 disabled:pointer-events-none cursor-pointer border border-cyan-400/40"
              >
                {status.submitting ? "Sending..." : <><Send className="w-4 h-4" /> Send Message</>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
