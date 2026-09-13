"use client";

import { FileText, Mail, MessageSquare } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

export default function ResumeSection() {
  const scrollToContact = (e) => {
    e.preventDefault();
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="resume" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative glass-card p-10 sm:p-14 rounded-3xl border border-cyan-500/30 text-center overflow-hidden shadow-2xl">
          {/* Ambient soft glow inside card */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider font-mono">
              <FileText className="w-3.5 h-3.5" />
              Curriculum Vitae
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Want to know more{" "}
              <span className="text-gradient-cyan">about me?</span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Explore my technical skills, projects, and full-stack development background. You can request my full official resume directly or get in touch.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <a
                href="mailto:vaishnaviojha006@gmail.com?subject=Resume%20Request%20for%20Vaishnavi%20Ojha"
                className="shimmer-btn inline-flex items-center gap-2.5 px-7 py-4 text-base font-semibold text-white bg-gradient-to-r from-cyan-600 via-cyan-500 to-blue-600 hover:from-cyan-500 hover:to-blue-500 rounded-xl shadow-lg shadow-cyan-950/60 hover:scale-[1.03] active:scale-[0.98] transition-all border border-cyan-400/40"
              >
                <Mail className="w-5 h-5" />
                Request Resume via Email
              </a>
              <a
                href="#contact"
                onClick={scrollToContact}
                className="inline-flex items-center gap-2.5 px-7 py-4 text-base font-semibold text-slate-200 bg-[#080e1e] hover:bg-[#0f1b3c] border border-cyan-500/30 hover:border-cyan-400/60 rounded-xl transition-all hover:scale-[1.03] active:scale-[0.98] shadow-lg cursor-pointer"
              >
                <MessageSquare className="w-5 h-5 text-cyan-400" />
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
