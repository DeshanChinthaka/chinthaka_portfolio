"use client";

import { useEffect, useState } from "react";
import { personalInfo } from "@/lib/data";

const roles = [
  "Software Engineer",
  "MERN Stack Developer",
  "CS Undergraduate",
  "Problem Solver",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState<number>(0);
  const [displayed, setDisplayed] = useState<string>("");
  const [typing, setTyping] = useState<boolean>(true);

  useEffect(() => {
    const current = roles[roleIndex];
    if (typing) {
      if (displayed.length < current.length) {
        const timeout = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length + 1));
        }, 60);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => setTyping(false), 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayed.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1));
        }, 35);
        return () => clearTimeout(timeout);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid"
    >
      {/* Background blobs */}
      <div
        className="glow-blob w-[600px] h-[600px] opacity-[0.06]"
        style={{
          background: "radial-gradient(circle, #00E5FF 0%, transparent 70%)",
          top: "-100px",
          left: "-200px",
        }}
      />
      <div
        className="glow-blob w-[500px] h-[500px] opacity-[0.05]"
        style={{
          background: "radial-gradient(circle, #8B5CF6 0%, transparent 70%)",
          bottom: "0px",
          right: "-100px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-24 pb-16">
        <div className="flex flex-col gap-6">
          {/* Status badge */}
          <div className="flex items-center gap-3 animate-fade-in">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-green/10 border border-accent-green/20 text-accent-green text-xs font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse-slow" />
              Available for opportunities
            </span>
          </div>

          {/* Name */}
          <div className="animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <p className="font-mono text-accent-cyan/70 text-sm mb-2 tracking-[0.2em]">
              Hi, I&apos;m
            </p>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-text-primary leading-none tracking-tight">
              Deshan
              <br />
              <span className="gradient-text">Chinthaka</span>
            </h1>
          </div>

          {/* Typewriter role */}
          <div
            className="animate-fade-up font-mono text-lg md:text-2xl text-text-secondary h-8"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="text-accent-cyan/50 mr-2">&gt;</span>
            {displayed}
            <span className="cursor text-accent-cyan">|</span>
          </div>

          {/* Bio */}
          <p
            className="animate-fade-up max-w-2xl text-text-secondary text-base md:text-lg leading-relaxed"
            style={{ animationDelay: "0.3s" }}
          >
            {personalInfo.tagline} Currently interning at{" "}
            <span className="text-accent-cyan">Sri Lanka Telecom</span>,
            building enterprise MERN stack applications while pursuing my
            degree at{" "}
            <span className="text-text-primary">University of Westminster</span>.
          </p>

          {/* CTA Buttons */}
          <div
            className="animate-fade-up flex flex-wrap gap-4"
            style={{ animationDelay: "0.4s" }}
          >
            <a
              href="#projects"
              className="group flex items-center gap-2 px-6 py-3 bg-accent-cyan text-bg-primary font-semibold rounded text-sm hover:bg-accent-cyan/90 transition-all duration-200 font-display"
            >
              View Projects
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 px-6 py-3 border border-border-default text-text-secondary rounded text-sm hover:border-accent-cyan/40 hover:text-accent-cyan transition-all duration-200 font-display"
            >
              Contact Me
            </a>
          </div>

          {/* Social links */}
          <div
            className="animate-fade-up flex items-center gap-6 pt-2"
            style={{ animationDelay: "0.5s" }}
          >
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-text-primary transition-colors"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-accent-blue transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-text-muted hover:text-accent-cyan transition-colors"
              aria-label="Email"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </a>

            <div className="h-px flex-1 max-w-[80px] bg-border-subtle" />

            <span className="font-mono text-xs text-text-muted">
              Colombo, LK
            </span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
        <span className="text-xs font-mono text-text-muted tracking-widest">
          scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-accent-cyan/40 to-transparent" />
      </div>
    </section>
  );
}
