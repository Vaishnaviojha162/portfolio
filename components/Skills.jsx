"use client";

import { useState } from "react";
import {
  Code2, Server, Database, Terminal, Wrench, Sparkles,
  Layers, Palette, FileJson, Atom, Wind, Cpu, Webhook, Zap,
  Table, HardDrive, Box, Binary, GitBranch, Github, Laptop, Send, CheckSquare, FileCode,
} from "lucide-react";
import { skillsData } from "@/data/portfolioData";

const iconMap = {
  Code2, Palette, FileJson, Atom, Layers, Wind, Server, Cpu, Webhook, Zap,
  Database, Table, HardDrive, Box, Terminal, FileCode, Binary, GitBranch,
  Github, Laptop, Send, CheckSquare,
};

const categoryTabs = [
  { id: "all",         label: "All Skills",        icon: Sparkles },
  { id: "frontend",    label: "Frontend",          icon: Palette },
  { id: "backend",     label: "Backend",           icon: Server },
  { id: "database",    label: "Databases",         icon: Database },
  { id: "programming", label: "Programming",       icon: Terminal },
  { id: "tools",       label: "Tools & Workflow",  icon: Wrench },
];

const categoryMeta = [
  { key: "frontend",    title: "Frontend & UI Development",        icon: Palette,  accent: "text-cyan-400",   bg: "bg-cyan-950/40",   border: "border-cyan-500/30" },
  { key: "backend",     title: "Backend & API Architecture",       icon: Server,   accent: "text-blue-400",   bg: "bg-blue-950/40",   border: "border-blue-500/30" },
  { key: "database",    title: "Databases & Data Management",      icon: Database, accent: "text-teal-400",   bg: "bg-teal-950/40",   border: "border-teal-500/30" },
  { key: "programming", title: "Core Languages & Problem Solving", icon: Terminal, accent: "text-sky-400",    bg: "bg-sky-950/40",    border: "border-sky-500/30" },
  { key: "tools",       title: "Tools, Version Control & Workflow",icon: Wrench,   accent: "text-indigo-400", bg: "bg-indigo-950/40", border: "border-indigo-500/30" },
];

function getData(key) {
  return skillsData[key] || [];
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState("all");

  const filtered = activeTab === "all"
    ? categoryMeta
    : categoryMeta.filter((c) => c.key === activeTab);

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Code2 className="w-3.5 h-3.5" />
            Technical Stack
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Skills & <span className="text-gradient-cyan">Technologies</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-3">
            A practical breakdown of the languages, frameworks, and developer tools I leverage to engineer performant web applications and robust software.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categoryTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-950/50 scale-[1.02]"
                    : "glass-card text-slate-400 hover:text-white hover:border-cyan-500/40"
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="space-y-12">
          {filtered.map((cat) => {
            const CatIcon = cat.icon;
            const skills = getData(cat.key);
            return (
              <div key={cat.key} className="space-y-6">
                <div className="flex items-center gap-3 border-b border-cyan-500/20 pb-3">
                  <div className={`p-2 rounded-xl ${cat.bg} border ${cat.border} ${cat.accent}`}>
                    <CatIcon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-wide">{cat.title}</h3>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {skills.map((skill) => {
                    const SkillIcon = iconMap[skill.icon] || Code2;
                    return (
                      <div
                        key={skill.name}
                        className="glass-card p-4 rounded-2xl flex flex-col items-center justify-center text-center group cursor-default relative overflow-hidden hover:scale-105 transition-transform"
                      >
                        <div className={`h-11 w-11 rounded-xl ${cat.bg} border ${cat.border} flex items-center justify-center ${cat.accent} group-hover:border-cyan-400/60 transition-colors mb-3 shadow-sm`}>
                          <SkillIcon className="w-5 h-5" />
                        </div>
                        <span className="text-sm font-semibold text-slate-100 group-hover:text-cyan-300 transition-colors mb-1.5">{skill.name}</span>
                        <span className="text-[10px] uppercase font-mono font-medium px-2 py-0.5 rounded-md bg-[#080e1e] text-slate-400 border border-cyan-500/20">
                          {skill.level}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
