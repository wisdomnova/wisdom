import "@/styles/globals.css";  
import { Sora } from "next/font/google";
import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const sora = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wisdom Divine - Full-Stack Developer",
  description: "Full-stack developer specializing in React, Next.js, React Native, and backend systems. Building exceptional digital experiences for clients across Nigeria, Jordan, and Sierra Leone.",
  keywords: ["Full-Stack Developer", "React Developer", "Next.js", "React Native", "Mobile App Developer", "Web Developer", "Nigeria", "Frontend", "Backend"],
  authors: [{ name: "Wisdom Divine" }],
  creator: "Wisdom Divine",
  openGraph: {
    title: "Wisdom Divine - Full-Stack Developer",
    description: "Full-stack developer specializing in React, Next.js, React Native, and backend systems. Building exceptional digital experiences.",
    url: "https://wisdomdivine.dev",
    siteName: "Wisdom Divine Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Wisdom Divine - Full-Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wisdom Divine - Full-Stack Developer",
    description: "Full-stack developer specializing in React, Next.js, React Native, and backend systems.",
    images: ["/og-image.jpg"],
    creator: "@wisdomdivine",
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
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${sora.className} bg-white text-gray-900 antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}