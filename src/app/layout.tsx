import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Data Engineering & Analytics | Exanode - Reliable, Secure, and Scalable Data Systems",
  description: "We build automated and incremental data pipelines that continuously transform raw data from multiple sources. Data Engineering & Analytics for Reliable, Secure, and Scalable Data Systems.",
  keywords: "data engineering, data analytics, data pipelines, data warehouse, data modeling, business intelligence, data transformation",
  openGraph: {
    title: "Data Engineering & Analytics | Exanode",
    description: "We build automated and incremental data pipelines that continuously transform raw data from multiple sources.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
