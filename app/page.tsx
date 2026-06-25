import React from "react";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      
      <footer className="py-8 text-center text-muted border-t border-white/5 mt-20 relative z-10 bg-background/80 backdrop-blur-md">
        <p className="text-sm font-medium">
          © {new Date().getFullYear()} Sean Christian Lozana. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
