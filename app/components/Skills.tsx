import React from "react";
import { FiTerminal, FiLayers, FiCloud, FiTool } from "react-icons/fi";
import { FaJs, FaJava, FaPhp, FaPython, FaDatabase, FaReact, FaVuejs, FaAws, FaGithub, FaDocker, FaFigma, FaGitAlt } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiNuxt, SiNestjs, SiFlutter, SiTailwindcss, SiGooglecloud, SiSupabase, SiSalesforce, SiPostgresql, SiMongodb, SiJira, SiNotion, SiCypress, SiSentry } from "react-icons/si";

const getSkillIcon = (skill: string) => {
  switch (skill) {
    case "JavaScript": return <FaJs className="w-4 h-4" />;
    case "TypeScript": return <SiTypescript className="w-4 h-4" />;
    case "Java": return <FaJava className="w-4 h-4" />;
    case "PHP": return <FaPhp className="w-4 h-4" />;
    case "Python": return <FaPython className="w-4 h-4" />;
    case "SQL": return <FaDatabase className="w-4 h-4" />;
    case "Next.js": return <SiNextdotjs className="w-4 h-4" />;
    case "React":
    case "React Native": return <FaReact className="w-4 h-4" />;
    case "Nuxt": return <SiNuxt className="w-4 h-4" />;
    case "Vue": return <FaVuejs className="w-4 h-4" />;
    case "Nest.js": return <SiNestjs className="w-4 h-4" />;
    case "Flutter": return <SiFlutter className="w-4 h-4" />;
    case "Tailwind CSS": return <SiTailwindcss className="w-4 h-4" />;
    case "GCP": return <SiGooglecloud className="w-4 h-4" />;
    case "AWS S3": return <FaAws className="w-4 h-4" />;
    case "Supabase": return <SiSupabase className="w-4 h-4" />;
    case "Salesforce": return <SiSalesforce className="w-4 h-4" />;
    case "PostgreSQL": return <SiPostgresql className="w-4 h-4" />;
    case "MongoDB": return <SiMongodb className="w-4 h-4" />;
    case "Git": return <FaGitAlt className="w-4 h-4" />;
    case "GitHub/GitLab": return <FaGithub className="w-4 h-4" />;
    case "Docker": return <FaDocker className="w-4 h-4" />;
    case "VSCode": return <SiNotion className="w-4 h-4 opacity-0 hidden" />; // No vscode icon needed, just fallback
    case "Figma": return <FaFigma className="w-4 h-4" />;
    case "JIRA": return <SiJira className="w-4 h-4" />;
    case "Notion": return <SiNotion className="w-4 h-4" />;
    case "Cypress": return <SiCypress className="w-4 h-4" />;
    case "Sentry": return <SiSentry className="w-4 h-4" />;
    default: return null;
  }
};

const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Java", "PHP", "Python", "SQL"],
    icon: <FiTerminal className="w-5 h-5" />
  },
  {
    title: "Frameworks & Libraries",
    skills: ["Next.js", "React", "React Native", "Nuxt", "Vue", "Nest.js", "Flutter", "Tailwind CSS"],
    icon: <FiLayers className="w-5 h-5" />
  },
  {
    title: "Cloud & Infrastructure",
    skills: ["GCP", "AWS S3", "Supabase", "Salesforce", "PostgreSQL", "MongoDB"],
    icon: <FiCloud className="w-5 h-5" />
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub/GitLab", "Docker", "VSCode", "Figma", "JIRA", "Notion", "Cypress", "Sentry"],
    icon: <FiTool className="w-5 h-5" />
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
              <div className="flex items-center gap-3 mb-6 group-hover:text-vibrant transition-colors text-muted">
                {category.icon}
                <h3 className="text-sm font-light uppercase tracking-[0.2em] mt-1">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-4">
                {category.skills.map((skill, i) => (
                  <span key={i} className="flex items-center gap-2 text-foreground font-medium hover:text-vibrant hover:scale-105 transition-all cursor-default">
                    {getSkillIcon(skill)}
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
