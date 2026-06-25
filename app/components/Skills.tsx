import React from "react";

const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Java", "PHP", "Python", "SQL"]
  },
  {
    title: "Frameworks & Libraries",
    skills: ["Next.js", "React", "React Native", "Nuxt", "Vue", "Nest.js", "Flutter", "Tailwind CSS"]
  },
  {
    title: "Cloud & Infrastructure",
    skills: ["GCP", "AWS S3", "Supabase", "Salesforce", "PostgreSQL", "MongoDB"]
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub/GitLab", "Docker", "VSCode", "Figma", "JIRA", "Notion", "Cypress", "Sentry"]
  }
];

export default function Skills() {
  return (
    <section className="py-24 px-6 sm:px-12 relative z-10">
      <div className="max-w-5xl mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold heading-font animate-fade-in-up tracking-tight text-foreground">
            <span className="text-vibrant">Skills.</span>
          </h2>
          <p className="text-muted mt-6 max-w-2xl animate-fade-in-up delay-100 font-light">
            A comprehensive toolkit for building scalable, high-performance applications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="animate-fade-in-up group" style={{ animationDelay: `${index * 100}ms` }}>
              <h3 className="text-sm font-light uppercase tracking-[0.2em] text-muted mb-6 group-hover:text-vibrant transition-colors">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-x-6 gap-y-4">
                {category.skills.map((skill, i) => (
                  <span key={i} className="text-foreground font-medium hover:text-vibrant hover:scale-105 transition-all cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 pt-16 border-t border-white/5 animate-fade-in-up delay-300 flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <h3 className="text-xs font-light uppercase tracking-[0.2em] text-muted mb-4 sm:mb-0">Beyond Code</h3>
          <p className="text-foreground font-light text-sm text-right">
            Competitive Programming / Software Architecture / Badminton / Music / FPS Gaming
          </p>
        </div>
      </div>
    </section>
  );
}
