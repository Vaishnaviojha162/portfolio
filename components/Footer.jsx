"use client";

import { Github, Linkedin, Mail, Code2, ArrowUp } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative z-10 border-t border-cyan-500/20 bg-[#030712]/95 backdrop-blur-md pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-cyan-500/15">
          {/* Brand */}
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2.5">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-md shadow-cyan-950/60">
                <Code2 className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Vaishnavi <span className="text-cyan-400">Ojha</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 font-medium">
              Aspiring Software Engineer & Computer Science Student
            </p>
          </div>

          {/* Social icons + scroll top */}
          <div className="flex items-center gap-3">
            {[
              { href: personalInfo.links.github,   label: "GitHub",   Icon: Github },
              { href: personalInfo.links.linkedin, label: "LinkedIn", Icon: Linkedin },
              { href: personalInfo.links.email,    label: "Email",    Icon: Mail },
            ].map(({ href, label, Icon }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                className="p-2.5 rounded-xl bg-[#080e1e] border border-cyan-500/25 text-slate-400 hover:text-cyan-300 hover:border-cyan-400/50 hover:bg-[#0f1b3c] shadow-sm transition-all"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
            <button onClick={scrollToTop} aria-label="Scroll to top"
              className="p-2.5 rounded-xl bg-[#080e1e] border border-cyan-500/25 text-slate-400 hover:text-white hover:border-cyan-400/50 shadow-sm transition-all ml-2 cursor-pointer"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4 text-center sm:text-left">
          <p>© 2026 Vaishnavi Ojha. All rights reserved.</p>
          <p className="font-mono">Designed & Built with Next.js, React, Framer Motion & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
