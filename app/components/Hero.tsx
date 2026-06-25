import React from "react";

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
            <a href="mailto:lozanascbusiness@gmail.com" className="group flex items-center gap-3 text-foreground font-medium hover:text-vibrant transition-colors">
              <span className="w-8 h-[2px] bg-foreground group-hover:bg-vibrant transition-colors"></span>
              Get in touch
            </a>
            <a href="https://linkedin.com/in/devzana/" target="_blank" rel="noreferrer" className="text-muted hover:text-vibrant transition-colors font-medium">
              LinkedIn
            </a>
          </div>
        </div>
        
        <div className="flex justify-center md:justify-end animate-fade-in-up delay-200">
          {/* Minimalist Headshot Placeholder */}
          <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-sm glass glass-hover overflow-hidden flex items-center justify-center group">
            <div className="absolute inset-0 bg-gradient-to-t from-vibrant/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
            <div className="z-20 flex flex-col items-center gap-3 text-muted/50 group-hover:text-vibrant transition-colors duration-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
              <span className="text-xs font-light tracking-[0.2em] uppercase">Portrait</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
