"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { User, GraduationCap, Code, CheckCircle2, Cpu, Globe, Database } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

function StatCounter({ target, suffix, label, text }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });

  useEffect(() => {
    if (isInView && target) {
      let start = 0;
      const increment = Math.ceil(target / (800 / 30));
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, 30);
      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return (
    <div
      ref={ref}
      className="glass-card p-6 rounded-2xl text-center relative overflow-hidden group hover:border-cyan-500/50 transition-all"
    >
      <div className="text-3xl sm:text-4xl font-extrabold mb-1.5 font-mono tracking-tight text-white">
        {target !== undefined ? (
          <span className="text-gradient-cyan font-black">
            {count}
            {suffix}
          </span>
        ) : (
          <span className="text-gradient-cyan font-black">{text}</span>
        )}
      </div>
      <p className="text-xs sm:text-sm text-slate-400 font-medium uppercase tracking-wider">{label}</p>
    </div>
  );
}

const engineeringPillars = [
  {
    title: "Full Stack Web Engineering",
    description: "Architecting interactive, reactive web applications with Next.js, React, Node.js, and Express.",
    icon: Globe,
  },
  {
    title: "C++ & Low-Level Algorithms",
    description: "Developing high-performance calculation engines and parsing ASTs compiled to WebAssembly (WASM).",
    icon: Cpu,
  },
  {
    title: "Database & Backend Systems",
    description: "Building scalable REST APIs, secure JWT auth mechanisms, and relational/document databases (MongoDB, MySQL).",
    icon: Database,
  },
];

const techHighlights = [
  "C++17",
  "WebAssembly",
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Java / Spring",
  "JavaScript",
  "REST APIs",
];

export default function About() {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <User className="w-3.5 h-3.5" />
            Background & Mindset
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            About <span className="text-gradient-cyan">Me</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Narrative & Bio Card */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="glass-card p-8 sm:p-10 rounded-3xl flex-1 flex flex-col justify-between space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 font-mono block mb-2">
                  Engineering Overview
                </span>
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal mb-6">
                  {personalInfo.aboutBio || personalInfo.bio}
                </p>
              </div>

              {/* Pillars list */}
              <div className="grid grid-cols-1 gap-3 pt-4 border-t border-cyan-500/15">
                {engineeringPillars.map((p, idx) => {
                  const Icon = p.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#080e1e]/60 border border-cyan-500/20 hover:border-cyan-400/40 transition-colors"
                    >
                      <div className="p-2 rounded-xl bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 shrink-0 mt-0.5">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-slate-100">{p.title}</h4>
                        <p className="text-xs text-slate-400 leading-relaxed mt-0.5">{p.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Primary Technical Stack Chips */}
              <div className="border-t border-cyan-500/15 pt-5">
                <h3 className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-3 flex items-center gap-2 font-mono">
                  <Code className="w-3.5 h-3.5 text-cyan-400" />
                  Core Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {techHighlights.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#080e1e] border border-cyan-500/20 text-slate-300 text-xs font-medium hover:border-cyan-400/50 hover:text-white transition-all cursor-default"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Education & Academic Credentials */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="glass-card p-8 sm:p-10 rounded-3xl flex-1 flex flex-col justify-between relative overflow-hidden group hover:border-cyan-500/50 transition-all">
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                <GraduationCap className="w-44 h-44 text-cyan-400" />
              </div>

              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
                  <GraduationCap className="w-4 h-4" />
                  Academic Profile
                </div>
                <h3 className="text-2xl font-extrabold text-white mb-2 leading-snug">
                  {personalInfo.education.degree}
                </h3>
                <a
                  href={personalInfo.education.collegeMapUrl || personalInfo.links.collegeMap}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="View Lovely Professional University on Google Maps"
                  className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 font-semibold text-base mb-4 transition-colors cursor-pointer group/inst"
                >
                  <span>{personalInfo.education.institution}</span>
                  <span className="text-xs text-cyan-400 group-hover/inst:translate-x-0.5 transition-transform">↗</span>
                </a>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {personalInfo.education.description}
                </p>

                <div className="space-y-2 pt-4 border-t border-cyan-500/15">
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-400 font-mono block">
                    Specialized Coursework
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                    {personalInfo.education.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 p-2 rounded-xl bg-[#080e1e] border border-cyan-500/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                        <span className="truncate font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-400 border-t border-cyan-500/15 pt-4 mt-6 font-mono">
                <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Enrolled
                </span>
                <span>{personalInfo.education.duration}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Metric Stat Counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-12">
          {personalInfo.stats.map((stat, idx) => (
            <StatCounter
              key={idx}
              target={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              text={stat.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
