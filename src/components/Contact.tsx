"use client";

import { useEffect, useRef, useState } from "react";
import { personalInfo } from "@/lib/data";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [copied, setCopied] = useState<string | null>(null);

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

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(label);
      setTimeout(() => setCopied(null), 2000);
    });
  };

  const contactItems = [
    {
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      copyable: true,
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      label: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      copyable: true,
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      value: "Deshan Chinthaka",
      href: personalInfo.linkedin,
      copyable: false,
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      label: "GitHub",
      value: "DeshanChinthaka",
      href: personalInfo.github,
      copyable: false,
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-28 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border-subtle to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal mb-16">
          <p className="font-mono text-accent-cyan text-sm mb-2">./contact</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary">
            Get In Touch
          </h2>
          <div className="mt-3 h-px w-20 bg-gradient-to-r from-accent-cyan to-transparent" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: message */}
          <div className="space-y-6">
            <p className="reveal text-text-secondary text-[15px] leading-relaxed">
              I&apos;m currently open to new opportunities and collaborations.
              Whether you have a project in mind, want to discuss a role, or just
              want to connect — my inbox is always open.
            </p>

            <p className="reveal text-text-secondary text-[15px] leading-relaxed">
              As a <span className="text-text-primary">MERN stack developer</span> with
              experience in enterprise systems and a strong foundation in
              algorithms and OOP, I&apos;m eager to contribute to impactful projects.
            </p>

            <div className="reveal pt-2">
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-3 px-8 py-4 bg-accent-cyan text-bg-primary font-display font-semibold rounded text-sm hover:bg-accent-cyan/90 transition-all duration-200 animate-border-glow"
              >
                Say Hello
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: contact cards */}
          <div className="reveal space-y-3">
            {contactItems.map((item) => (
              <div
                key={item.label}
                className="group flex items-center justify-between p-4 rounded-xl bg-bg-card border border-border-subtle hover:border-border-default transition-all duration-200"
              >
                <div className="flex items-center gap-4">
                  <div className="w-9 h-9 rounded-lg bg-bg-hover border border-border-subtle flex items-center justify-center text-text-muted group-hover:text-accent-cyan group-hover:border-accent-cyan/20 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-mono text-[10px] text-text-muted uppercase tracking-widest mb-0.5">
                      {item.label}
                    </p>
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="text-[13px] text-text-secondary hover:text-accent-cyan transition-colors font-mono"
                    >
                      {item.value}
                    </a>
                  </div>
                </div>

                {item.copyable && (
                  <button
                    onClick={() => copyToClipboard(item.value, item.label)}
                    className="opacity-0 group-hover:opacity-100 transition-opacity p-2 rounded-lg hover:bg-bg-hover text-text-muted hover:text-accent-cyan"
                    title="Copy to clipboard"
                  >
                    {copied === item.label ? (
                      <svg className="w-4 h-4 text-accent-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    )}
                  </button>
                )}
              </div>
            ))}

            <div className="mt-6 p-4 rounded-xl bg-accent-cyan/5 border border-accent-cyan/15">
              <p className="font-mono text-xs text-accent-cyan/70 text-center">
                📍 Homagama, Colombo, Sri Lanka · Open to remote work
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
