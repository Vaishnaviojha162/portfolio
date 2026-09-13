"use client";

import Image from "next/image";
import { Github, ExternalLink, Monitor, CheckCircle2, Layers } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <div className="glass-card rounded-3xl overflow-hidden flex flex-col group transition-all duration-300 hover:border-cyan-500/50 shadow-xl">
      {/* Image */}
      <a
        href={project.live || project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="relative h-56 sm:h-64 w-full overflow-hidden bg-[#050b18] block cursor-pointer border-b border-cyan-500/15"
        aria-label={`View ${project.title}`}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/40 to-transparent opacity-80 group-hover:opacity-50 transition-opacity" />

        {/* Number badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 rounded-full bg-[#030712]/90 border border-cyan-500/40 text-cyan-300 font-mono text-xs font-bold tracking-wider backdrop-blur-md shadow-lg">
            {project.id}
          </span>
        </div>
        {/* Category pill */}
        <div className="absolute top-4 right-4 z-10">
          <span className="px-3 py-1 rounded-full bg-[#080e1e]/90 border border-cyan-500/30 text-slate-300 font-sans text-xs font-medium backdrop-blur-md">
            {project.category}
          </span>
        </div>
      </a>

      {/* Content */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
        <div className="space-y-4">
          <a
            href={project.live || project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center justify-between">
              <span>{project.title}</span>
              <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 opacity-0 group-hover:opacity-100 transition-all shrink-0 ml-2" />
            </h3>
          </a>
          <p className="text-sm text-slate-300 leading-relaxed font-normal">
            {project.description}
          </p>

          {/* Features */}
          {project.features && (
            <div className="space-y-2 pt-2 border-t border-cyan-500/15">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5 font-mono">
                <Layers className="w-3.5 h-3.5 text-cyan-400" />
                Key Features
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-300">
                {project.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span className="truncate">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="px-2.5 py-1 rounded-md bg-[#080e1e] border border-cyan-500/20 text-slate-300 text-xs font-mono group-hover:border-cyan-400/40 transition-colors">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 pt-4 border-t border-cyan-500/15">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#080e1e] hover:bg-[#0f1b3c] border border-cyan-500/25 hover:border-cyan-400/50 text-xs font-semibold text-slate-200 hover:text-white transition-all hover:scale-[1.02] shadow-sm"
          >
            <Github className="w-4 h-4 text-slate-400" />
            GitHub
          </a>

          {project.isDesktopApp ? (
            <div className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-950/40 border border-cyan-500/40 text-cyan-300 text-xs font-semibold cursor-default">
              <Monitor className="w-4 h-4" />
              {project.desktopLabel || "Desktop App"}
            </div>
          ) : project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 via-cyan-500 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-xs font-semibold text-white shadow-lg shadow-cyan-950/50 transition-all hover:scale-[1.02] border border-cyan-400/30"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          ) : (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-950/60 hover:bg-cyan-900/60 border border-cyan-500/40 text-xs font-semibold text-cyan-200 transition-all hover:scale-[1.02]"
            >
              <ExternalLink className="w-4 h-4 text-cyan-400" />
              View Repo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
