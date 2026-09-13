"use client";

import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";
import { experienceData } from "@/data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            Practical Experience
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Work & <span className="text-gradient-cyan">Experience</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-3">
            My hands-on experience in full stack software development and application engineering.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical glowing line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-cyan-900 -translate-x-1/2 opacity-40" />

          {experienceData.map((exp, idx) => (
            <div key={idx} className="relative mb-12 last:mb-0">

              {/* Timeline node */}
              <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 z-20 flex items-center justify-center">
                <span className="relative flex h-5 w-5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-60" />
                  <span className="relative inline-flex rounded-full h-5 w-5 bg-cyan-500 border-4 border-[#030712] shadow-md" />
                </span>
              </div>

              {/* Card */}
              <div className="ml-12 md:ml-0 md:w-1/2 md:pr-12 md:even:ml-auto md:even:pl-12 md:even:pr-0">
                <div className="glass-card p-6 sm:p-8 rounded-3xl relative group hover:border-cyan-500/50 transition-all shadow-xl">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#080e1e] border border-cyan-500/30 text-cyan-300 text-xs font-mono font-medium">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                    <span className="text-xs font-semibold text-slate-400">{exp.company}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{exp.role}</h3>
                  <p className="text-sm text-slate-300 mb-5 leading-relaxed font-normal">{exp.description}</p>

                  <div className="space-y-2 mb-6">
                    {exp.achievements.map((ach, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-cyan-500/15 pt-4">
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block mb-2 font-mono">Key Competencies</span>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.skillsApplied.map((skill) => (
                        <span key={skill} className="px-2.5 py-1 rounded-md bg-[#080e1e] border border-cyan-500/20 text-slate-300 text-xs font-mono">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
