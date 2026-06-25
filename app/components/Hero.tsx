import React from "react";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import { FiUser } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-10 px-6 sm:px-12 z-10">
      <div className="animated-bg"></div>
      <div className="max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-start gap-8 animate-fade-in-up">
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold heading-font tracking-tighter leading-[1.1] text-foreground">
            Sean <br />
            <span className="text-gradient">Lozana.</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted max-w-md leading-relaxed font-light">
            <span className="text-vibrant font-medium">Full-stack Engineer.</span> <br />
            Building elegant cloud-native architectures and high-performance cross-platform applications.
          </p>
          <div className="flex gap-6 mt-4 w-full sm:w-auto items-center">
            <a href="mailto:lozanascbusiness@gmail.com" className="group flex items-center gap-2 text-foreground font-medium hover:text-vibrant transition-colors">
              <FaEnvelope className="text-lg group-hover:scale-110 transition-transform" />
              Get in touch
            </a>
            <a href="https://linkedin.com/in/devzana/" target="_blank" rel="noreferrer" className="group flex items-center gap-2 text-muted hover:text-vibrant transition-colors font-medium">
              <FaLinkedin className="text-lg group-hover:scale-110 transition-transform" />
              LinkedIn
            </a>
          </div>
        </div>
        
        <div className="flex justify-center md:justify-end animate-fade-in-up delay-200">
          {/* Minimalist Headshot */}
          <div className="relative w-96 h-96 md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem] animate-blob glass glass-hover flex items-center justify-center group shrink-0">
            <div className="absolute inset-0 bg-gradient-to-t from-vibrant/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay"></div>
            <img 
              src="https://avatars.githubusercontent.com/u/109569008?v=4" 
              alt="Sean Lozana Portrait" 
              className="w-full h-full object-cover z-0 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 scale-100 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
