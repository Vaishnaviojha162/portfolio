"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileDown } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certificates", href: "#certificates" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);

      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }

      const sections = navItems.map((i) => i.href.substring(1));
      const sp = window.scrollY + 140;
      for (const s of sections) {
        const el = document.getElementById(s);
        if (el && sp >= el.offsetTop && sp < el.offsetTop + el.offsetHeight) {
          setActiveSection(s);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const el = document.getElementById(href.substring(1));
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Top Scroll Progress Line */}
      <div className="fixed top-0 left-0 right-0 h-[2px] z-50 bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-400 transition-all duration-100 ease-out shadow-[0_0_10px_rgba(6,182,212,0.8)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
          scrolled ? "glass-nav py-3.5 shadow-2xl backdrop-blur-xl" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a
              href="#home"
              onClick={(e) => scrollToSection(e, "#home")}
              className="flex items-center gap-2.5 group focus:outline-none"
            >
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-cyan-950/60 group-hover:scale-105 transition-transform duration-200 border border-cyan-400/30">
                <span className="font-extrabold text-sm tracking-wider font-mono">VO</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                  Vaishnavi <span className="text-cyan-400 font-extrabold">Ojha</span>
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 bg-[#080e1e]/80 p-1.5 rounded-full border border-cyan-500/20 backdrop-blur-xl">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className={`relative px-4 py-1.5 text-xs font-semibold tracking-wider transition-colors duration-150 rounded-full ${
                      isActive ? "text-cyan-300 font-bold bg-cyan-950/80 border border-cyan-500/40" : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <span>{item.name}</span>
                  </a>
                );
              })}
            </nav>

            {/* Actions / CTA */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href="#resume"
                onClick={(e) => scrollToSection(e, "#resume")}
                className="shimmer-btn inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 rounded-xl shadow-lg shadow-cyan-950/50 hover:scale-[1.02] active:scale-[0.98] transition-all border border-cyan-400/30 cursor-pointer"
              >
                <FileDown className="w-3.5 h-3.5" />
                Resume
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-400 hover:text-white rounded-xl bg-[#080e1e] border border-cyan-500/30 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden glass-nav border-b border-cyan-500/20 overflow-hidden bg-[#030712]/95"
            >
              <div className="px-4 pt-4 pb-6 space-y-2">
                {navItems.map((item) => {
                  const isActive = activeSection === item.href.substring(1);
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => scrollToSection(e, item.href)}
                      className={`block px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                        isActive
                          ? "bg-cyan-950/80 text-cyan-300 border border-cyan-500/40 font-bold"
                          : "text-slate-400 hover:bg-[#080e1e] hover:text-white"
                      }`}
                    >
                      {item.name}
                    </a>
                  );
                })}
                <div className="pt-3">
                  <a
                    href="#resume"
                    onClick={(e) => scrollToSection(e, "#resume")}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold text-white bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl shadow-lg cursor-pointer"
                  >
                    <FileDown className="w-4 h-4" />
                    View Resume Section
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
