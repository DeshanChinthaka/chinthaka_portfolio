"use client";

import { useEffect, useRef } from "react";
import { skills } from "@/lib/data";

interface SkillBarProps {
  name: string;
  level: number;
  color: string;
  delay?: number;
}

function SkillBar({ name, level, color, delay = 0 }: SkillBarProps) {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && barRef.current) {
            const fill = barRef.current.querySelector<HTMLDivElement>(".bar-fill");
            if (fill) {
              fill.style.transitionDelay = `${delay}ms`;
              fill.style.width = `${level}%`;
            }
          }
        });
      },
      { threshold: 0.5 }
    );
    if (barRef.current) observer.observe(barRef.current);
    return () => observer.disconnect();
  }, [level, delay]);

  return (
    <div ref={barRef}>
      <div className="flex justify-between items-center mb-1.5">
        <span className="font-mono text-[12px] text-text-secondary">{name}</span>
        <span className="font-mono text-[11px] text-text-muted">{level}%</span>
      </div>
      <div className="h-1 bg-bg-hover rounded-full overflow-hidden">
        <div
          className="bar-fill h-full rounded-full transition-all duration-1000 ease-out w-0"
          style={{ background: color }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
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
      id="skills"
      ref={sectionRef}
      className="py-28 relative bg-bg-secondary/30"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border-subtle to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal mb-16">
          <p className="font-mono text-accent-cyan text-sm mb-2">./skills</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary">
            Technical Arsenal
          </h2>
          <div className="mt-3 h-px w-20 bg-gradient-to-r from-accent-cyan to-transparent" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Languages */}
          <div className="reveal p-6 rounded-xl bg-bg-card border border-border-subtle card-hover">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-base">⚡</span>
              <h3 className="font-mono text-xs text-text-muted tracking-widest uppercase">Languages</h3>
            </div>
            <div className="space-y-4">
              {skills.languages.map((s, i) => (
                <SkillBar key={s.name} {...s} color="#00E5FF" delay={i * 100} />
              ))}
            </div>
          </div>

          {/* Frameworks */}
          <div className="reveal p-6 rounded-xl bg-bg-card border border-border-subtle card-hover" style={{ transitionDelay: "0.1s" }}>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-base">🚀</span>
              <h3 className="font-mono text-xs text-text-muted tracking-widest uppercase">Frameworks</h3>
            </div>
            <div className="space-y-4">
              {skills.frameworks.map((s, i) => (
                <SkillBar key={s.name} {...s} color="#4D79FF" delay={i * 100} />
              ))}
            </div>
          </div>

          {/* Databases */}
          <div className="reveal p-6 rounded-xl bg-bg-card border border-border-subtle card-hover" style={{ transitionDelay: "0.2s" }}>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-base">🗄️</span>
              <h3 className="font-mono text-xs text-text-muted tracking-widest uppercase">Databases</h3>
            </div>
            <div className="space-y-4 mb-6">
              {skills.databases.map((s, i) => (
                <SkillBar key={s.name} {...s} color="#10B981" delay={i * 100} />
              ))}
            </div>
            <div className="border-t border-border-subtle pt-4">
              <h4 className="font-mono text-xs text-text-muted uppercase mb-3">Tools</h4>
              <div className="flex flex-wrap gap-1.5">
                {skills.tools.map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Concepts */}
        <div className="reveal mt-8 p-6 rounded-xl bg-bg-card border border-border-subtle">
          <h3 className="font-mono text-xs text-text-muted tracking-widest uppercase mb-5">
            Core Concepts
          </h3>
          <div className="flex flex-wrap gap-3">
            {skills.concepts.map((concept) => (
              <div
                key={concept}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-bg-hover border border-border-subtle hover:border-accent-cyan/25 transition-colors group"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent-purple/60 group-hover:bg-accent-cyan/70 transition-colors" />
                <span className="text-text-secondary text-[13px] font-mono">{concept}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border-subtle to-transparent" />
    </section>
  );
}
