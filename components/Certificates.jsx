"use client";

import { useState } from "react";
import Image from "next/image";
import { Award, ExternalLink, CheckCircle2, ShieldCheck, Cpu, Code2, Calendar, Eye, X } from "lucide-react";
import { certificatesData } from "@/data/portfolioData";

const iconMap = {
  Award: Award,
  Code2: Code2,
  Cpu: Cpu,
};

export default function Certificates() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="certificates" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            Verified Credentials & Qualifications
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Certificates & <span className="text-gradient-cyan">Accomplishments</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-3">
            Official verified certifications awarded to <strong className="text-white font-semibold">Vaishnavi Ojha</strong>.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certificatesData.map((cert) => {
            const Icon = iconMap[cert.issuerLogo] || Award;
            return (
              <div
                key={cert.id}
                className="glass-card rounded-3xl flex flex-col justify-between group hover:border-cyan-500/50 transition-all duration-300 shadow-xl overflow-hidden"
              >
                {/* Certificate Image Preview */}
                <div
                  onClick={() => setSelectedImage(cert.image)}
                  className="relative h-52 w-full bg-white/5 border-b border-cyan-500/20 overflow-hidden cursor-pointer group/img"
                  title="Click to view full certificate"
                >
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    priority={true}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center group-hover/img:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/30 to-transparent opacity-60 group-hover/img:opacity-30 transition-opacity" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                    <span className="px-2.5 py-1 rounded-full bg-[#030712]/90 border border-cyan-500/40 text-cyan-300 text-[11px] font-mono font-medium backdrop-blur-md">
                      {cert.issuer}
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-950/90 border border-emerald-500/40 text-emerald-400 text-[11px] font-mono backdrop-blur-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Verified
                    </span>
                  </div>

                  {/* Click to Preview Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity bg-black/40 backdrop-blur-xs">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-950/90 border border-cyan-400 text-white text-xs font-semibold shadow-lg">
                      <Eye className="w-3.5 h-3.5 text-cyan-400" />
                      View Certificate Image
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2.5">
                    {/* Organization · Year */}
                    <div className="text-xs font-mono font-semibold text-cyan-400">
                      {cert.issuer} · {cert.year || cert.issueDate}
                    </div>

                    {/* Certificate Name */}
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                      {cert.title}
                    </h3>

                    {/* Awardee Name */}
                    <div className="text-xs text-slate-400 font-mono">
                      Awarded to <span className="text-white font-medium">Vaishnavi Ojha</span>
                    </div>

                    {/* Short One-line Description */}
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal pt-1">
                      {cert.shortDescription || cert.description}
                    </p>

                    {/* Skills Covered */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 rounded-md bg-[#080e1e] border border-cyan-500/20 text-slate-300 text-[11px] font-mono group-hover:border-cyan-400/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* View Certificate Action Buttons */}
                  <div className="pt-4 border-t border-cyan-500/15 flex items-center gap-2.5">
                    <button
                      onClick={() => setSelectedImage(cert.image)}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-[#080e1e] hover:bg-[#0f1b3c] border border-cyan-500/30 hover:border-cyan-400/60 text-xs font-semibold text-slate-200 hover:text-white transition-all cursor-pointer shadow-sm"
                    >
                      <Eye className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Preview</span>
                    </button>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 via-cyan-500 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-xs font-bold text-white shadow-md shadow-cyan-950/50 hover:scale-[1.01] active:scale-[0.99] transition-all border border-cyan-400/30"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>View Certificate</span>
                      <ExternalLink className="w-3 h-3 ml-0.5" />
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Fullscreen Certificate Image Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-[#080e1e] border border-cyan-500/40 rounded-2xl overflow-hidden shadow-2xl p-2"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-xl bg-black/80 text-white hover:text-cyan-400 border border-white/20 transition-all cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full rounded-xl overflow-hidden bg-white">
              <Image
                src={selectedImage}
                alt="Certificate Fullscreen"
                fill
                className="object-contain"
                sizes="(max-width: 1200px) 100vw, 1000px"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
