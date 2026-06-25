import React from "react";

const experiences = [
  {
    role: "Freelance Full-stack Engineer",
    company: "Remote",
    period: "2024 — Present",
    description: "Architected cloud-native, cross-platform applications and AI ecosystems. Built an SSI/SSA Case Status App using Nuxt, Salesforce, and GCP, and an AI-Doc-Parser System with RAG and HITL workflows. Collaborated on a Federal Proposal Writing Assistant Software leveraging Next.js and Supabase."
  },
  {
    role: "Software Engineer (Full-stack)",
    company: "Stratpoint Technologies",
    period: "2022 — 2024",
    description: "Developed features for an internal HRIS portal using NodeJS and ReactJS. Created an event/office booking management app using Flutter, NextJS, Strapi, and Supabase. Applied Agile methodologies working with cross-functional teams."
  },
  {
    role: "React Native Developer Intern",
    company: "Bluebeans Systems",
    period: "2022",
    description: "Spearheaded the development of an e-Wallet Mobile Application using React Native. Implemented screens according to design specifications and integrated backend APIs."
  },
  {
    role: "NextJS Developer Intern",
    company: "NEXPLAY Technologies",
    period: "2021 — 2022",
    description: "Upgraded the Internal Admin Dashboard by implementing pages and components based on design specifications."
  }
];

export default function Experience() {
  return (
    <section className="py-24 px-6 sm:px-12 relative z-10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold heading-font mb-16 animate-fade-in-up text-foreground tracking-tight">Experience.</h2>
        
        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-6 md:gap-12 animate-fade-in-up group" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="md:w-1/4 shrink-0">
                <span className="text-sm font-light text-muted tracking-widest group-hover:text-vibrant transition-colors">{exp.period}</span>
              </div>
              <div className="md:w-3/4">
                <h3 className="font-medium text-xl text-foreground mb-1 group-hover:text-vibrant transition-colors">{exp.role}</h3>
                <div className="text-sm font-medium text-muted mb-4 uppercase tracking-widest">{exp.company}</div>
                <p className="text-muted leading-relaxed font-light group-hover:text-foreground transition-colors">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
