"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight, FileDown, MapPin, Code2, Terminal } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

const rotatingRoles = [
  "Full-Stack Developer | CS Student",
  "Full Stack Developer",
  "C++ & WebAssembly Enthusiast",
  "Problem Solver & CS Student",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % rotatingRoles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = (e) => {
    e.preventDefault();
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center overflow-hidden pt-24 pb-16">
      {/* ── Background Portrait / Seamless Blend on Right ── */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* The portrait photo positioned on the right with original styling */}
        <div className="absolute right-0 top-0 h-full w-full sm:w-[58%] lg:w-[52%] opacity-90">
          <Image
            src="/vaishnavi.png"
            alt="Vaishnavi Ojha – Full-Stack Developer"
            fill
            priority
            className="object-cover object-top filter brightness-105 contrast-105"
            sizes="(max-width: 768px) 100vw, 52vw"
          />
          {/* Seamless gradient fade overlays blending into dark background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#030712] via-[#030712]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-l from-cyan-950/20 to-transparent" />
        </div>
        {/* Solid dark panel on left for text readability */}
        <div className="absolute inset-y-0 left-0 w-full sm:w-1/2 bg-[#030712]/90 sm:bg-[#030712]" />
      </div>

      {/* ── Main Content Container ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        <div className="max-w-2xl">
          <div className="space-y-6 animate-hero-fade">

            {/* Location & University Tag */}
            <div>
              <a
                href={personalInfo.links.collegeMap || "https://maps.google.com/?q=Lovely+Professional+University,+Phagwara,+Punjab"}
                target="_blank"
                rel="noopener noreferrer"
                title="View Lovely Professional University on Google Maps"
                className="group inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-cyan-950/60 hover:bg-cyan-900/60 border border-cyan-500/30 hover:border-cyan-400/60 text-xs text-cyan-300 hover:text-cyan-200 font-mono backdrop-blur-md shadow-sm transition-all hover:scale-105 cursor-pointer"
              >
                <MapPin className="w-3.5 h-3.5 text-cyan-400 group-hover:scale-110 transition-transform" />
                <span>Lovely Professional University, Punjab</span>
              </a>
            </div>

            {/* Greeting & Headline */}
            <div className="space-y-2">
              <p className="text-slate-400 text-lg font-medium tracking-wide">
                Hi, I'm
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05]">
                Vaishnavi{" "}
                <span className="text-gradient-cyan font-black">Ojha</span>
              </h1>
            </div>

            {/* Animated Rotating Role Pill */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-[#080e1e]/90 border border-cyan-500/30 backdrop-blur-md shadow-lg shadow-cyan-950/50">
                <Code2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <div className="h-6 overflow-hidden flex items-center">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={roleIndex}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.25 }}
                      className="text-slate-100 font-semibold text-sm sm:text-base tracking-wide"
                    >
                      {rotatingRoles[roleIndex]}
                    </motion.span>
                  </AnimatePresence>
                </div>
                <span className="h-4 w-px bg-cyan-900/60" />
                <span className="flex items-center gap-1.5 text-xs text-emerald-400 font-mono font-medium">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  {personalInfo.availability}
                </span>
              </div>
            </div>

            {/* Intro Bio */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
              I’m a <strong className="text-white font-semibold">Computer Science student</strong> and <strong className="text-white font-semibold">Full-Stack Developer</strong> focused on building scalable web applications, intuitive user interfaces, and reliable backend systems using modern technologies.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="shimmer-btn group inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-cyan-600 via-cyan-500 to-blue-600 hover:from-cyan-500 hover:to-blue-500 rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/35 transition-all hover:scale-[1.02] active:scale-[0.98] border border-cyan-400/40 cursor-pointer"
              >
                <span>Explore My Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#resume"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("resume")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-200 bg-[#080e1e]/80 hover:bg-[#0f1b3c] border border-cyan-500/30 hover:border-cyan-400/60 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98] backdrop-blur-md shadow-lg cursor-pointer"
              >
                <FileDown className="w-4 h-4 text-cyan-400" />
                <span>Resume</span>
              </a>
            </div>

            {/* Social Channels */}
            <div className="flex items-center gap-3 pt-3">
              {[
                { href: personalInfo.links.github, label: "GitHub", Icon: Github },
                { href: personalInfo.links.linkedin, label: "LinkedIn", Icon: Linkedin },
                { href: personalInfo.links.email, label: "Email", Icon: Mail },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
                >
                  <span className="p-2.5 rounded-xl bg-[#080e1e] border border-cyan-500/25 group-hover:border-cyan-400/60 group-hover:bg-[#0f1b3c] group-hover:scale-105 transition-all shadow-md">
                    <Icon className="w-4 h-4 group-hover:text-cyan-400 transition-colors" />
                  </span>
                  <span className="hidden sm:inline text-xs font-mono font-medium">{label}</span>
                </a>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* ── Floating developer.js Terminal Widget on Bottom Right ── */}
      <div className="absolute bottom-8 right-6 lg:right-16 z-20 hidden md:block animate-float-gentle">
        <div className="glass-card rounded-2xl shadow-2xl overflow-hidden w-64 border border-cyan-500/30">
          <div className="flex items-center justify-between px-3.5 py-2 bg-[#050b18]/90 border-b border-cyan-500/20">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            </div>
            <span className="text-[10px] text-slate-400 font-mono flex items-center gap-1 font-medium">
              <Terminal className="w-3 h-3 text-cyan-400" />
              developer.js
            </span>
          </div>
          <div className="p-4 font-mono text-[11px] leading-relaxed bg-[#040814]/85 text-slate-300">
            <div><span className="text-cyan-400 font-semibold">const</span> <span className="text-slate-100">developer</span> = &#123;</div>
            <div className="pl-3"><span className="text-cyan-300">name</span>: <span className="text-emerald-300">"Vaishnavi Ojha"</span>,</div>
            <div className="pl-3"><span className="text-cyan-300">role</span>: <span className="text-emerald-300">"Full-Stack Dev"</span>,</div>
            <div className="pl-3"><span className="text-cyan-300">focus</span>: <span className="text-cyan-200">"Scalable Web & Systems"</span>,</div>
            <div className="pl-3"><span className="text-cyan-300">status</span>: <span className="text-amber-300">"Building & Learning"</span></div>
            <div>&#125;;</div>
          </div>
        </div>
      </div>

      {/* Bottom Subtle Gradient Transition */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#030712] to-transparent z-10 pointer-events-none" />
    </section>
  );
}
