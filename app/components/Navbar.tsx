"use client";

import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 flex justify-center py-6 px-6 transition-all duration-300 ${scrolled ? 'py-4' : ''}`}>
      <nav className={`px-8 py-3 rounded-full flex items-center gap-8 border transition-all duration-500 ${scrolled ? 'bg-background/80 backdrop-blur-xl border-white/10 shadow-xl shadow-black/40' : 'bg-transparent border-transparent'}`}>
        <a href="#" className="font-bold heading-font text-xl text-foreground hover:text-vibrant transition-colors mr-4">
          dev<span className="text-vibrant">zana.</span>
        </a>
        
        <ul className="hidden sm:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                className="text-sm font-medium text-muted hover:text-vibrant transition-colors uppercase tracking-[0.1em]"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        
        <a 
          href="mailto:lozanascbusiness@gmail.com" 
          className="text-sm font-medium px-4 py-2 bg-foreground text-background rounded-full hover:bg-vibrant hover:text-foreground transition-all ml-2"
        >
          Let's Talk
        </a>
      </nav>
    </header>
  );
}
