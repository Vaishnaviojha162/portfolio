"use client";

export default function ParticleBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      {/* Top Left Subtle Cyan Atmosphere */}
      <div className="absolute -top-32 -left-32 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[100px] pointer-events-none" />

      {/* Center Right Sapphire Atmosphere */}
      <div className="absolute top-1/3 -right-32 h-[480px] w-[480px] rounded-full bg-blue-600/10 blur-[110px] pointer-events-none" />

      {/* Bottom Center Indigo Glow */}
      <div className="absolute bottom-10 left-1/3 h-[420px] w-[420px] rounded-full bg-indigo-600/10 blur-[100px] pointer-events-none" />

      {/* Fine Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-mesh opacity-75" />
    </div>
  );
}
