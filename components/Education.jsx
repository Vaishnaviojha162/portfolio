"use client";

import { GraduationCap, Award, BookOpen, MapPin, Calendar } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

export default function Education() {
  const { education } = personalInfo;
  return (
    <section id="education" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            Academic Background
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Education <span className="text-gradient-cyan">& Credentials</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Card */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 sm:p-10 rounded-3xl relative overflow-hidden group hover:border-cyan-500/50 transition-all shadow-xl">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <GraduationCap className="w-48 h-48 text-cyan-400" />
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#080e1e] border border-cyan-500/30 text-cyan-300 text-xs font-mono font-medium">
                    <Calendar className="w-3.5 h-3.5" />
                    {education.duration}
                  </span>
                  <a
                    href={education.collegeMapUrl || personalInfo.links.collegeMap}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View location on Google Maps"
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#080e1e] hover:bg-[#0f1b3c] border border-cyan-500/20 hover:border-cyan-400/50 text-slate-400 hover:text-cyan-300 text-xs font-mono transition-colors cursor-pointer"
                  >
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{education.location}</span>
                  </a>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">{education.degree}</h3>
                <a
                  href={education.collegeMapUrl || personalInfo.links.collegeMap}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Open Lovely Professional University in Google Maps"
                  className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 font-semibold text-lg transition-colors group/inst cursor-pointer"
                >
                  <span>{education.institution}</span>
                  <MapPin className="w-4 h-4 text-cyan-400 group-hover/inst:scale-110 transition-transform" />
                </a>
                <p className="text-slate-300 text-sm leading-relaxed">{education.description}</p>
                <div className="pt-3 border-t border-cyan-500/15">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2 block font-mono">Core Focus Areas</span>
                  <div className="flex flex-wrap gap-2">
                    {education.highlights.map((h, i) => (
                      <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#080e1e] border border-cyan-500/20 text-xs font-medium text-slate-300">
                        <BookOpen className="w-3 h-3 text-cyan-400" />
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Status badge */}
              <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 bg-[#080e1e] rounded-2xl border border-cyan-500/20 text-center shadow-inner">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-cyan-950/60 mb-3">
                  <Award className="w-7 h-7" />
                </div>
                <span className="text-white font-bold text-base">Current Pursuit</span>
                <a
                  href={education.collegeMapUrl || personalInfo.links.collegeMap}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-slate-400 hover:text-cyan-300 mt-1 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span>Lovely Professional University</span>
                  <MapPin className="w-3 h-3 text-cyan-400" />
                </a>
                <div className="mt-4 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 text-xs font-mono font-medium">
                  Enrolled & Active
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
