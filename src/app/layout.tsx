import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Deshan Chinthaka | Software Engineer",
  description:
    "Computer Science undergraduate at the University of Westminster. MERN stack developer and Software Engineering Intern at Sri Lanka Telecom.",
  keywords: [
    "Deshan Chinthaka",
    "Software Engineer",
    "MERN Stack",
    "React",
    "Next.js",
    "Sri Lanka",
    "Portfolio",
  ],
  openGraph: {
    title: "Deshan Chinthaka | Software Engineer",
    description:
      "CS undergraduate at University of Westminster. MERN stack developer.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
