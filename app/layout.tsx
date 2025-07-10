import "@/styles/globals.css";  
import { Sora } from "next/font/google";
import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GoogleAnalytics } from '@next/third-parties/google';

const sora = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wisdom Divine - Full-Stack Developer",
  description: "Full-stack developer specializing in React, Next.js, React Native, and backend systems. Building exceptional digital experiences for clients across Nigeria, Jordan, and Sierra Leone.",
  keywords: [
    // Core skills
    "Full-Stack Developer", "React Developer", "Next.js", "React Native", "Mobile App Developer", "Web Developer", "Frontend", "Backend",
    // Name variations
    "Wisdom Divine", "Divine Wisdom", "Wisdom David", "Wisdom Divine David", "Wisdom D", "Wisdom Divine D",
    // Location and services
    "Nigeria Developer", "Sierra Leone Developer", "Jordan Developer", "African Developer",
    // Technologies
    "JavaScript Developer", "TypeScript Developer", "Node.js Developer", "Python Developer",
    // Specific projects/companies
    "BeeSeek Developer", "Shaprs HQ", "MHVA Developer", "Kazamarka Developer"
  ],
  authors: [
    { name: "Wisdom Divine" },
    { name: "Divine Wisdom" },
    { name: "Wisdom David" },
    { name: "Wisdom Divine David" }
  ],
  creator: "Wisdom Divine",
  publisher: "Wisdom Divine",
  alternates: {
    canonical: "https://wisdom-divine.vercel.app/",
  },
  openGraph: {
    title: "Wisdom Divine - Full-Stack Developer & Digital Innovator",
    description: "Wisdom Divine (David) - Full-stack developer specializing in React, Next.js, React Native, and backend systems. Building exceptional digital experiences and innovative solutions.",
    url: "https://wisdom-divine.vercel.app/",
    siteName: "Wisdom Divine Portfolio",
    images: [
      {
        url: "/profile.jpg",
        width: 1200, 
        height: 630,
        alt: "Wisdom Divine - Full-Stack Developer and Digital Innovator",
      }, 
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wisdom Divine - Full-Stack Developer",
    description: "Full-stack developer specializing in React, Next.js, React Native, and backend systems. Building digital solutions for Africa and beyond.",
    images: ["/profile.jpg"],
    creator: "@wisdom_divine_d",
    site: "@wisdom_divine_d",
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
  other: {
    // Social media profiles for rich snippets
    "github:profile": "https://github.com/wisdomnova",
    "instagram:profile": "https://www.instagram.com/wisdom_divine_d",
    "linkedin:profile": "https://www.linkedin.com/in/wisdom-divine-d-85b234237",
    "twitter:profile": "https://x.com/wisdom_divine_d",
    // Additional name variations for search
    "profile:first_name": "Wisdom",
    "profile:last_name": "Divine",
    "profile:username": "wisdom_divine_d",
    // Professional details
    "article:author": "Wisdom Divine David",
    "business:contact_data:locality": "Nigeria",
    "business:contact_data:region": "West Africa",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Additional SEO meta tags */}
        <meta name="author" content="Wisdom Divine David" />
        <meta name="profile:first_name" content="Wisdom" />
        <meta name="profile:last_name" content="Divine" />
        <meta name="profile:username" content="wisdom_divine_d" />
        
        {/* Social media meta tags */}
        <meta name="github:profile" content="wisdomnova" />
        <meta name="instagram:site" content="@wisdom_divine_d" />
        <meta name="linkedin:profile" content="wisdom-divine-d-85b234237" />
        <meta name="twitter:site" content="@wisdom_divine_d" />
        <meta name="twitter:creator" content="@wisdom_divine_d" />
        
        {/* Schema.org JSON-LD for structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Wisdom Divine David",
              "alternateName": ["Wisdom Divine", "Divine Wisdom", "Wisdom David", "Wisdom D"],
              "jobTitle": "Full-Stack Developer",
              "description": "Full-stack developer specializing in React, Next.js, React Native, and backend systems",
              "url": "https://wisdom-divine.vercel.app/",
              "email": "wisdomdivine3d@gmail.com",
              "image": "https://wisdom-divine.vercel.app/profile.jpg",
              "sameAs": [
                "https://github.com/wisdomnova",
                "https://www.linkedin.com/in/wisdom-divine-d-85b234237",
                "https://x.com/wisdom_divine_d",
                "https://www.instagram.com/wisdom_divine_d"
              ],
              "knowsAbout": [
                "React", "Next.js", "React Native", "JavaScript", "TypeScript", 
                "Node.js", "Python", "Full-Stack Development", "Mobile Development"
              ],
              "worksFor": [
                {
                  "@type": "Organization",
                  "name": "BeeSeek"
                },
                {
                  "@type": "Organization", 
                  "name": "Shaprs HQ"
                },
                {
                  "@type": "Organization",
                  "name": "MHVA"
                }
              ],
              "nationality": "Nigerian",
              "homeLocation": {
                "@type": "Place",
                "name": "Nigeria"
              }
            })
          }}
        />
      </head>
      <body className={`${sora.className} bg-white text-gray-900 antialiased`}>
        <GoogleAnalytics gaId="G-RY3WTC7Y6Y" />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}