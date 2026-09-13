"use client";

import { FolderGit2, Github } from "lucide-react";
import { projectsData, personalInfo } from "@/data/portfolioData";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            Featured Portfolio Works
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Featured <span className="text-gradient-cyan">Projects</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-3">
            Explore full stack web platforms, C++ calculation engines, AI systems, and healthcare software I've built.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-16 text-center">
          <a
            href={personalInfo.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#080e1e] hover:bg-[#0f1b3c] border border-cyan-500/30 hover:border-cyan-400/60 text-slate-300 hover:text-white font-semibold text-sm transition-all hover:scale-[1.02] shadow-lg shadow-cyan-950/40"
          >
            <Github className="w-4 h-4 text-cyan-400" />
            View More Repositories on GitHub
          </a>
        </div>

      </div>
    </section>
  );
}
