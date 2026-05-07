// "use client";

// import { useEffect, useRef, useState } from "react";
// import { projects } from "@/lib/data";

// type FilterType = "All" | "Personal Project" | "Group Project" | "Professional Project";

// export default function Projects() {
//   const sectionRef = useRef<HTMLElement>(null);
//   const [filter, setFilter] = useState<FilterType>("All");

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) entry.target.classList.add("visible");
//         });
//       },
//       { threshold: 0.05 }
//     );
//     sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
//     return () => observer.disconnect();
//   }, []);

//   const filters: FilterType[] = ["All", "Personal Project", "Group Project", "Professional Project"];

//   const filtered =
//     filter === "All" ? projects : projects.filter((p) => p.type === filter);

//   return (
//     <section id="projects" ref={sectionRef} className="py-28 relative">
//       <div className="max-w-6xl mx-auto px-6">
//         {/* Header */}
//         <div className="reveal mb-10">
//           <p className="font-mono text-accent-cyan text-sm mb-2">./projects</p>
//           <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary">
//             Things I&apos;ve Built
//           </h2>
//           <div className="mt-3 h-px w-20 bg-gradient-to-r from-accent-cyan to-transparent" />
//         </div>

//         {/* Filter tabs */}
//         <div className="reveal flex flex-wrap gap-2 mb-12">
//           {filters.map((f) => (
//             <button
//               key={f}
//               onClick={() => setFilter(f)}
//               className={`px-4 py-1.5 rounded text-xs font-mono transition-all duration-200 ${
//                 filter === f
//                   ? "bg-accent-cyan text-bg-primary"
//                   : "border border-border-default text-text-muted hover:border-accent-cyan/40 hover:text-text-secondary"
//               }`}
//             >
//               {f}
//             </button>
//           ))}
//         </div>

//         {/* Projects grid */}
//         <div className="grid md:grid-cols-2 gap-6">
//           {filtered.map((project, index) => (
//             <div
//               key={project.title}
//               className={`reveal group relative flex flex-col p-6 rounded-xl bg-bg-card border border-border-subtle card-hover overflow-hidden ${
//                 project.featured ? "md:col-span-2 lg:col-span-1" : ""
//               }`}
//               style={{ animationDelay: `${index * 0.1}s` }}
//             >
//               {/* Top accent */}
//               <div
//                 className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-60 transition-opacity duration-300"
//                 style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }}
//               />

//               {/* Header row */}
//               <div className="flex items-start justify-between gap-3 mb-4">
//                 <span className="text-2xl">{project.icon}</span>
//                 <div className="flex items-center gap-2 flex-wrap justify-end">
//                   <span
//                     className={`font-mono text-xs px-2 py-0.5 rounded border ${
//                       project.status === "In Progress"
//                         ? "text-accent-green border-accent-green/25 bg-accent-green/8"
//                         : "text-text-muted border-border-subtle"
//                     }`}
//                   >
//                     {project.status}
//                   </span>
//                   <span className="font-mono text-xs text-text-muted">{project.period}</span>
//                 </div>
//               </div>

//               {/* Title */}
//               <h3 className="font-display font-bold text-text-primary text-[17px] leading-snug mb-2 group-hover:text-accent-cyan transition-colors duration-200">
//                 {project.title}
//               </h3>

//               {/* Type badge */}
//               <span
//                 className="self-start font-mono text-[10px] px-2 py-0.5 rounded mb-3 border"
//                 style={{
//                   color: project.color,
//                   borderColor: `${project.color}25`,
//                   background: `${project.color}08`,
//                 }}
//               >
//                 {project.type}
//               </span>

//               {/* Description */}
//               <p className="text-text-secondary text-[13px] leading-relaxed mb-4 flex-1">
//                 {project.description}
//               </p>

//               {/* Highlight */}
//               {project.highlight && (
//                 <div
//                   className="flex items-center gap-2 text-[12px] font-mono mb-4 py-2 px-3 rounded border"
//                   style={{
//                     color: project.color,
//                     borderColor: `${project.color}20`,
//                     background: `${project.color}06`,
//                   }}
//                 >
//                   <span>★</span>
//                   {project.highlight}
//                 </div>
//               )}

//               {/* Tech stack */}
//               <div className="flex flex-wrap gap-1.5 mb-5">
//                 {project.tech.map((t) => (
//                   <span key={t} className="tech-tag">{t}</span>
//                 ))}
//               </div>

//               {/* Links */}
//               <div className="flex items-center gap-4 pt-4 border-t border-border-subtle">
//                 <a
//                   href={project.github}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-2 text-xs font-mono text-text-muted hover:text-text-primary transition-colors"
//                 >
//                   <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
//                   </svg>
//                   View Code
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { useEffect, useRef, useState } from "react";
import { projects } from "@/lib/data";

type FilterType = "All" | "Personal Project" | "Group Project" | "Professional Project";

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const [filter, setFilter] = useState<FilterType>("All");
  const [animKey, setAnimKey] = useState<number>(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.05 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleFilter = (f: FilterType) => {
    setFilter(f);
    setAnimKey((k) => k + 1);
  };

  const filters: FilterType[] = ["All", "Personal Project", "Group Project", "Professional Project"];

  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.type === filter);

  return (
    <section id="projects" ref={sectionRef} className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="reveal mb-10">
          <p className="font-mono text-accent-cyan text-sm mb-2">./projects</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary">
            Things I&apos;ve Built
          </h2>
          <div className="mt-3 h-px w-20 bg-gradient-to-r from-accent-cyan to-transparent" />
        </div>

        {/* Filter tabs */}
        <div className="reveal flex flex-wrap gap-2 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => handleFilter(f)}
              className={`px-4 py-1.5 rounded text-xs font-mono transition-all duration-200 ${
                filter === f
                  ? "bg-accent-cyan text-bg-primary"
                  : "border border-border-default text-text-muted hover:border-accent-cyan/40 hover:text-text-secondary"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((project, index) => (
            <div
              key={`${animKey}-${project.title}`}
              className={`group relative flex flex-col p-6 rounded-xl bg-bg-card border border-border-subtle card-hover overflow-hidden ${
                project.featured ? "md:col-span-2 lg:col-span-1" : ""
              }`}
              style={{
                animation: "fadeUp 0.5s ease forwards",
                animationDelay: `${index * 0.08}s`,
                opacity: 0,
              }}
            >
              {/* Top accent */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-60 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }}
              />

              {/* Header row */}
              <div className="flex items-start justify-between gap-3 mb-4">
                <span className="text-2xl">{project.icon}</span>
                <div className="flex items-center gap-2 flex-wrap justify-end">
                  <span
                    className={`font-mono text-xs px-2 py-0.5 rounded border ${
                      project.status === "In Progress"
                        ? "text-accent-green border-accent-green/25 bg-accent-green/8"
                        : "text-text-muted border-border-subtle"
                    }`}
                  >
                    {project.status}
                  </span>
                  <span className="font-mono text-xs text-text-muted">{project.period}</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-text-primary text-[17px] leading-snug mb-2 group-hover:text-accent-cyan transition-colors duration-200">
                {project.title}
              </h3>

              {/* Type badge */}
              <span
                className="self-start font-mono text-[10px] px-2 py-0.5 rounded mb-3 border"
                style={{
                  color: project.color,
                  borderColor: `${project.color}25`,
                  background: `${project.color}08`,
                }}
              >
                {project.type}
              </span>

              {/* Description */}
              <p className="text-text-secondary text-[13px] leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              {/* Highlight */}
              {project.highlight && (
                <div
                  className="flex items-center gap-2 text-[12px] font-mono mb-4 py-2 px-3 rounded border"
                  style={{
                    color: project.color,
                    borderColor: `${project.color}20`,
                    background: `${project.color}06`,
                  }}
                >
                  <span>★</span>
                  {project.highlight}
                </div>
              )}

              {/* Tech stack */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.tech.map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-4 pt-4 border-t border-border-subtle">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-mono text-text-muted hover:text-text-primary transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                  View Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
