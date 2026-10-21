import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#17145E",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://cooperlybranth.com"),
  title: "Cooper Lybranth — Engineering Recruitment & Technical Workforce Solutions",
  description:
    "India's dedicated engineering recruitment and technical workforce consultancy. Executive search, RPO, plant ramp-ups, and bilingual technical training for automotive, aerospace, power, and manufacturing sectors since 2001.",
  keywords: [
    "Cooper Lybranth",
    "engineering recruitment India",
    "executive search engineering",
    "technical RPO",
    "automotive talent solutions",
    "aerospace hiring consultancy",
    "engineering training programs",
    "ISO 9001 recruitment consultancy",
  ],
  authors: [{ name: "Cooper Lybranth Services Ltd." }],
  openGraph: {
    title: "Cooper Lybranth — Engineering Recruitment & Workforce Solutions",
    description:
      "Connecting businesses with skilled engineering professionals and future-ready technical capabilities since 2001.",
    url: "https://cooperlybranth.com",
    siteName: "Cooper Lybranth",
    images: [
      {
        url: "/images/hero-engineering.jpg",
        width: 1200,
        height: 630,
        alt: "Cooper Lybranth Engineering Recruitment",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-white text-[#292A35] antialiased flex flex-col">
        {children}
      </body>
    </html>
  );
}
