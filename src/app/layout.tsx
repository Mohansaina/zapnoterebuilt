import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#0f172a",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://zapnote.vercel.app"),
  title: {
    default: "Zapnote — Electrify Outbound with Co-Branded Microsites",
    template: "%s | Zapnote",
  },
  description: "Paste your website URL and your prospect's to create a high-converting, personalized zapnote microsite in seconds.",
  keywords: ["outbound sales", "co-branded microsite", "sales enablement", "zapnote", "personalized landing pages", "ABM", "B2B SaaS"],
  authors: [{ name: "Zapnote Team" }],
  creator: "Zapnote",
  publisher: "Zapnote Inc.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Zapnote — Electrify Outbound with Co-Branded Microsites",
    description: "Create personalized co-branded landing pages for your prospects in seconds and boost your outbound conversion rates.",
    url: "https://zapnote.vercel.app",
    siteName: "Zapnote",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zapnote — Electrify Outbound with Co-Branded Microsites",
    description: "Create personalized co-branded landing pages for your prospects in seconds.",
    creator: "@zapnote",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
        {children}
      </body>
    </html>
  );
}

