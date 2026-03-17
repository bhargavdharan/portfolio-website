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
    "Portfolio of Dharan Kumar Bera — a full-stack developer and identity security specialist with 4+ years of experience building secure, scalable applications using React, Java Spring Boot, Node.js, Python, and Flutter.",
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
  ],
  authors: [{ name: "Dharan Kumar Bera" }],
  creator: "Dharan Kumar Bera",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Dharan Kumar Bera | Full Stack Developer & Security Specialist",
    description:
      "Full-stack developer specializing in identity security, building secure and scalable applications.",
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
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
