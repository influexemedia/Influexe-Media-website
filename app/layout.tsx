import type { Metadata, Viewport } from "next";
import "./fonts.css";
import "./tailwind.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Preloader from "@/components/Preloader";
import SmoothScroll from "@/components/SmoothScroll";
import WhatsAppButton from "@/components/WhatsAppButton";
import { SITE } from "@/lib/site";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0A0A0C",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: "Influexe Media | Meta Ads, Google Ads & Lead Generation",
  description:
    "Influexe Media runs performance-focused Meta and Google Ads, lead generation systems, conversion tracking, and reporting for growing businesses.",
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  manifest: "/manifest.webmanifest",
  keywords: [
    "Influexe Media",
    "Meta Ads agency",
    "Google Ads management",
    "lead generation",
    "campaign optimization",
    "conversion tracking",
    "performance marketing",
  ],
  category: "marketing",
  robots: { index: true, follow: true },
  formatDetection: { telephone: false, address: false, email: false },
  alternates: { canonical: SITE.url },
  openGraph: {
    title: "Influexe Media | Turn Attention Into Measurable Growth",
    description:
      "Performance-focused advertising and lead generation systems for businesses that want a more predictable acquisition process.",
    url: SITE.url,
    siteName: SITE.name,
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Influexe Media logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Influexe Media | Meta Ads, Google Ads & Lead Generation",
    description: "Performance advertising and lead generation systems for growing businesses.",
    images: ["/og-image.jpg"],
  },
  icons: {
    shortcut: "/favicon.png",
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
      { url: "/icon.png", type: "image/png", sizes: "192x192" },
    ],
    apple: "/icon.png",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "MarketingAgency",
  name: SITE.name,
  url: SITE.url,
  email: SITE.email,
  logo: `${SITE.url}/influexe-logo.png`,
  sameAs: ["https://www.instagram.com/influexemedia/", "https://www.threads.com/@influexemedia"],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: SITE.email,
    telephone: `+${SITE.whatsappNumber}`,
    availableLanguage: ["English", "Hindi"],
  },
  areaServed: "IN",
  serviceType: [
    "Influencer Marketing",
    "UGC Ads",
    "Social Media Marketing and Management",
    "Meta Ads Management",
    "Google Ads Management",
    "Lead Generation",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className="manrope_8193fa3c-module__Ks2qSG__variable inter_ea535f84-module__M3OZlW__variable playfair_display_318a24fa-module__yOgL8W__variable h-full antialiased scroll-smooth"
    >
      <body className="min-h-full flex flex-col bg-[#FAFAF9] text-[#0A0A0C] selection:bg-amber-100 selection:text-[#0A0A0C]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <SmoothScroll />
        <div className="flex min-h-screen flex-col bg-[#FAFAF9] text-[#0A0A0C]">
          <Preloader />
          <Navbar />
          {children}
          <Footer />
        </div>
        <WhatsAppButton />
      </body>
    </html>
  );
}
