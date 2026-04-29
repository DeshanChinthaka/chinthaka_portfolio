"use client";

import { useEffect, useRef } from "react";
import { personalInfo, education, certifications, extracurricular } from "@/lib/data";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const reveals = sectionRef.current?.querySelectorAll(".reveal");
    reveals?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="reveal mb-16">
          <p className="font-mono text-accent-cyan text-sm mb-2">./about-me</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary">
            Who Am I
          </h2>
          <div className="mt-3 h-px w-20 bg-gradient-to-r from-accent-cyan to-transparent" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Bio */}
          <div className="space-y-6">
            <p className="reveal text-text-secondary leading-relaxed text-[15px]">
              {personalInfo.bio}
            </p>

            <p className="reveal text-text-secondary leading-relaxed text-[15px]">
              Currently in my <span className="text-text-primary">3rd year</span> (internship placement year)
              of a 4-year BSc (Hons) Computer Science degree at the{" "}
              <span className="text-text-primary">University of Westminster</span>.
              I&apos;ve completed both my first and second years with{" "}
              <span className="text-accent-cyan">120/120 credits</span>, demonstrating
              consistent academic excellence.
            </p>

            <div className="reveal flex flex-col gap-3 pt-2">
              {[
                { label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
                { label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
                { label: "Location", value: personalInfo.location, href: null },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <span className="font-mono text-xs text-text-muted w-16">{item.label}</span>
                  <span className="text-border-default">→</span>
                  {item.href ? (
                    <a href={item.href} className="text-[13px] text-text-secondary hover:text-accent-cyan transition-colors font-mono">
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-[13px] text-text-secondary font-mono">{item.value}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Education + Certs + Extras */}
          <div className="space-y-8">
            {/* Education */}
            <div className="reveal">
              <h3 className="font-mono text-xs text-text-muted tracking-widest mb-4 uppercase">
                Education
              </h3>
              {education.map((edu) => (
                <div
                  key={edu.institution}
                  className="p-5 rounded-lg bg-bg-card border border-border-subtle card-hover"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-display font-semibold text-text-primary text-[15px]">
                        {edu.degree}
                      </p>
                      <p className="text-accent-blue text-sm mt-0.5">{edu.institution}</p>
                    </div>
                    <span className="font-mono text-xs text-text-muted whitespace-nowrap mt-1">
                      {edu.period}
                    </span>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {edu.achievements.map((a) => (
                      <span key={a} className="tech-tag text-accent-green border-accent-green/20 bg-accent-green/5">
                        ✓ {a}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="reveal">
              <h3 className="font-mono text-xs text-text-muted tracking-widest mb-4 uppercase">
                Certifications & Awards
              </h3>
              <div className="space-y-2">
                {certifications.map((cert) => (
                  <div
                    key={cert.title}
                    className="flex items-center justify-between p-3 rounded-lg bg-bg-card/50 border border-border-subtle hover:border-border-default transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: cert.color }} />
                      <span className="text-text-secondary text-[13px]">{cert.title}</span>
                    </div>
                    <span className="font-mono text-xs text-text-muted flex-shrink-0 ml-3">
                      {cert.year}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Extracurricular */}
            <div className="reveal">
              <h3 className="font-mono text-xs text-text-muted tracking-widest mb-4 uppercase">
                Extracurricular
              </h3>
              <div className="space-y-2">
                {extracurricular.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-center gap-3 p-3 rounded-lg bg-bg-card/50 border border-border-subtle hover:border-border-default transition-colors"
                  >
                    <span className="text-base">{item.icon}</span>
                    <span className="text-text-secondary text-[13px] flex-1">{item.title}</span>
                    <span className="font-mono text-xs text-text-muted">{item.year}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
