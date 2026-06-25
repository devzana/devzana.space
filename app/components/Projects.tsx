import React from "react";
import { FiFolder, FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "AI-Doc-Parser System",
    category: "Full-Stack AI Ecosystem",
    tech: ["Nuxt", "Vue", "GCP", "S3", "RAG", "HITL", "OCR"],
    description: "Automated document parsing ecosystem using high-accuracy OCR integrated with a Google Cloud backend. Designed Human-in-the-Loop workflows and custom RAG loops that systematically self-correct and improve precision models."
  },
  {
    title: "Predictive Options Trading Application",
    category: "Web & Data Systems",
    tech: ["Next.js", "Python", "Cypress", "Sentry"],
    description: "Advanced trading feature modules utilizing Next.js and Python with complex third-party data APIs. Configured end-to-end test automation and provided data-driven probability estimates for high-frequency trades."
  },
  {
    title: "Cross-Platform SSI/SSA Case Status App",
    category: "Cloud-Native Application",
    tech: ["Nuxt", "Salesforce", "Twilio", "GCP"],
    description: "Cloud-native, cross-platform app assisting elderly users with SSI/SSA case tracking. Features an integrated Salesforce backend, Twilio built-in VoIP, and an embedded generative AI chat interface."
  },
  {
    title: "Federal Proposal Writing Assistant",
    category: "Enterprise Software",
    tech: ["Next.js", "Supabase", "Google Drive API"],
    description: "Enterprise federal contract proposal authoring application mirroring a high-performance digital word processor. Engineered prompt injection utilities to intelligently surface contextual keyword recommendations."
  },
  {
    title: "All-in-One Property Management Tool",
    category: "Web & Mobile App",
    tech: ["Nest.JS", "MongoDB", "Next.js"],
    description: "Unified OTA platforms like Airbnb and Booking.com for streamlined content management. Architected the backend utilizing Nest.JS and MongoDB, with a high-fidelity Next.js frontend."
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 sm:px-12 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold heading-font animate-fade-in-up text-foreground tracking-tight">
              Selected <span className="text-vibrant">Projects.</span>
            </h2>
            <p className="text-muted mt-6 max-w-xl animate-fade-in-up delay-100 font-light">
              A collection of robust web applications, data systems, and generative AI integrations.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {projects.map((project, index) => (
            <div key={index} className="flex flex-col h-full animate-fade-in-up group cursor-default" style={{ animationDelay: `${(index % 3) * 100}ms` }}>
              <div className="flex justify-between items-center mb-4">
                <FiFolder className="text-vibrant w-8 h-8 opacity-70 group-hover:opacity-100 transition-opacity" strokeWidth={1} />
                <FiExternalLink className="text-muted w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity hover:text-vibrant cursor-pointer" />
              </div>
              <div className="text-xs font-light tracking-[0.2em] uppercase text-vibrant mb-3 opacity-70 group-hover:opacity-100 transition-opacity">{project.category}</div>
              <h3 className="text-2xl font-medium heading-font text-foreground mb-4 group-hover:text-vibrant transition-colors">{project.title}</h3>
              <p className="text-muted mb-8 flex-grow font-light leading-relaxed group-hover:text-foreground transition-colors">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t, i) => (
                  <span key={i} className="px-3 py-1 text-xs font-medium text-foreground border border-white/10 rounded-sm group-hover:border-vibrant/30 group-hover:text-vibrant transition-colors">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
