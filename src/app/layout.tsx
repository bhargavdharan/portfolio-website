import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dharan Kumar Bera | Full Stack Developer & Identity Security Specialist",
  description:
    "Portfolio of Dharan Kumar Bera — a full-stack developer and identity security specialist with 4+ years of experience building secure, scalable applications using React, Java Spring Boot, Node.js, Python, and Flutter. Available for freelance projects.",
  keywords: [
    "Full Stack Developer",
    "Identity Security",
    "React Developer",
    "Java Spring Boot",
    "Node.js",
    "Python",
    "Flutter",
    "Freelance Developer",
    "IAM",
    "OAuth2",
    "Cybersecurity",
    "SailPoint",
    "Saviynt",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: "Dharan Kumar Bera" }],
  creator: "Dharan Kumar Bera",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bhargavdharan.github.io/portfolio-website",
    title: "Dharan Kumar Bera | Full Stack Developer & Security Specialist",
    description:
      "Full-stack developer specializing in identity security, building secure and scalable applications. Available for freelance projects and consulting.",
    siteName: "Dharan Kumar Bera Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dharan Kumar Bera | Full Stack Developer & Security Specialist",
    description:
      "Full-stack developer specializing in identity security, building secure and scalable applications.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://bhargavdharan.github.io/portfolio-website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Dharan Kumar Bera",
  jobTitle: "Full Stack Developer & Identity Security Specialist",
  url: "https://bhargavdharan.github.io/portfolio-website",
  sameAs: [
    "https://github.com/bhargavdharan",
    "https://www.linkedin.com/in/dharankumarbera",
  ],
  knowsAbout: [
    "Full Stack Development",
    "Identity and Access Management",
    "Cybersecurity",
    "React",
    "Next.js",
    "Java",
    "Spring Boot",
    "Node.js",
    "Python",
    "Flutter",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Ilantus Services",
  },
  description:
    "Full-stack developer and identity security specialist with 4+ years of experience building enterprise-grade applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
