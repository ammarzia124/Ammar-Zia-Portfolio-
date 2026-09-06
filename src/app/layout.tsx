import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: {
    default: "Muhammad Ammar Zia | Full Stack Developer & Agentic AI Engineer",
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
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main id="main-content" className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
