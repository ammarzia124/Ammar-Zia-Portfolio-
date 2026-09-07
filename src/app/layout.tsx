import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://ammarzia.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Muhammad Ammar Zia | Full Stack Developer & Agentic AI Engineer",
    template: "%s | Muhammad Ammar Zia",
  },
  description:
    "Portfolio of Muhammad Ammar Zia — Full Stack Developer & Agentic AI Engineer with a strong networking foundation and emerging expertise in cybersecurity and AI automation.",
  keywords: [
    "Muhammad Ammar Zia",
    "Full Stack Developer",
    "Agentic AI Engineer",
    "Cybersecurity",
    "Networking",
    "CCNA",
    "React",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: "Muhammad Ammar Zia" }],
  creator: "Muhammad Ammar Zia",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "./",
    siteName: "Muhammad Ammar Zia",
    title:
      "Muhammad Ammar Zia | Full Stack Developer & Agentic AI Engineer",
    description:
      "Portfolio of Muhammad Ammar Zia — Full Stack Developer & Agentic AI Engineer with a strong networking foundation and emerging expertise in cybersecurity and AI automation.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Muhammad Ammar Zia — Full Stack Developer & Agentic AI Engineer",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Muhammad Ammar Zia | Full Stack Developer & Agentic AI Engineer",
    description:
      "Portfolio of Muhammad Ammar Zia — Full Stack Developer & Agentic AI Engineer with a strong networking foundation and emerging expertise in cybersecurity and AI automation.",
    images: ["/opengraph-image"],
    creator: process.env.NEXT_PUBLIC_TWITTER_HANDLE ?? "",
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
    canonical: "./",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0D7C5F" },
    { media: "(prefers-color-scheme: dark)", color: "#34D399" },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Muhammad Ammar Zia",
  jobTitle: "Full Stack Developer & Agentic AI Engineer",
  url: siteUrl,
  email: "ammarzia12487@gmail.com",
  sameAs: [
    "https://github.com/ammarzia",
    "https://linkedin.com/in/ammarzia",
  ],
  knowsAbout: [
    "Full Stack Development",
    "Agentic AI",
    "Cybersecurity",
    "Networking",
    "React",
    "Next.js",
    "TypeScript",
    "AI Automation",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main id="main-content" className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
