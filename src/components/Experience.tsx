"use client";

import { useEffect, useRef } from "react";
import { experience } from "@/lib/data";

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-28 relative bg-bg-secondary/30"
    >
      {/* Gradient divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border-subtle to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal mb-16">
          <p className="font-mono text-accent-cyan text-sm mb-2">./experience</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary">
            Work Experience
          </h2>
          <div className="mt-3 h-px w-20 bg-gradient-to-r from-accent-cyan to-transparent" />
        </div>

        <div className="space-y-8">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="reveal group relative p-6 md:p-8 rounded-xl bg-bg-card border border-border-subtle card-hover overflow-hidden"
            >
              {/* Accent line */}
              <div
                className="absolute left-0 top-0 bottom-0 w-0.5 opacity-60"
                style={{ background: exp.color }}
              />

              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                <div className="flex items-start gap-4">
                  {/* Company logo placeholder */}
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center text-xs font-mono font-bold border flex-shrink-0"
                    style={{
                      background: `${exp.color}12`,
                      borderColor: `${exp.color}30`,
                      color: exp.color,
                    }}
                  >
                    {exp.logo}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-text-primary text-lg leading-tight">
                      {exp.role}
                    </h3>
                    <p className="text-sm mt-0.5" style={{ color: exp.color }}>
                      {exp.company}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-start md:items-end gap-1.5">
                  <span className="font-mono text-xs text-text-muted">{exp.period}</span>
                  <span
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-mono border"
                    style={{
                      background: `${exp.color}10`,
                      borderColor: `${exp.color}25`,
                      color: exp.color,
                    }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full animate-pulse-slow" style={{ background: exp.color }} />
                    {exp.type}
                  </span>
                </div>
              </div>

              {/* Project name */}
              <div className="mb-4">
                <span className="font-mono text-xs text-text-muted mr-2">project:</span>
                <span className="font-mono text-xs text-text-secondary">{exp.project}</span>
              </div>

              {/* Description */}
              <p className="text-text-secondary text-[14px] leading-relaxed mb-5">
                {exp.description}
              </p>

              {/* Bullet points */}
              <ul className="space-y-2 mb-6">
                {exp.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3 text-[13px] text-text-secondary">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-accent-cyan/60 flex-shrink-0" />
                    {bullet}
                  </li>
                ))}
              </ul>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
            </div>
          ))}

          {/* University note */}
          <div className="reveal p-5 rounded-xl bg-bg-card/40 border border-border-subtle">
            <div className="flex items-center gap-3 text-text-muted text-[13px]">
              <span className="text-accent-blue text-base">🎓</span>
              <p>
                <span className="text-text-secondary font-medium">University of Westminster</span>
                {" "}— Currently in 3rd year (internship placement) of BSc (Hons) Computer Science.
                Completed Years 1 & 2 with perfect 120/120 credit scores.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border-subtle to-transparent" />
    </section>
  );
}
