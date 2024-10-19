import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "MoocFlix: Learn Anytime, Anywhere",
  description: "Unlock the future of education with MoocFlix. Our scalable platform blends advanced video streaming and learning management, allowing you to elevate your skills through immersive, on-demand courses.",
  keywords: "MoocFlix, online learning, video streaming, education, courses",
  openGraph: {
    title: "MoocFlix: Learn Anytime, Anywhere",
    description: "Unlock the future of education with MoocFlix. Our scalable platform blends advanced video streaming and learning management, allowing you to elevate your skills through immersive, on-demand courses.",
    url: "https://www.moocflix.tech",
    images: [
      {
        url: "/path/to/image.jpg",
        width: 800,
        height: 600,
        alt: "MoocFlix",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MoocFlix: Learn Anytime, Anywhere",
    description: "Unlock the future of education with MoocFlix. Our scalable platform blends advanced video streaming and learning management, allowing you to elevate your skills through immersive, on-demand courses.",
    images: [
      {
        url: "/path/to/image.jpg",
        alt: "MoocFlix",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}