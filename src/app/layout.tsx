import type { Metadata, Viewport } from "next";
import { Noto_Sans_TC } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LineFloatingButton from "@/components/ui/LineFloatingButton";
import MobileStickyCTA from "@/components/ui/MobileStickyCTA";

const notoSansTC = Noto_Sans_TC({
  variable: "--font-noto-sans-tc",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const SITE_URL = "https://lilin31311227-chinese.github.io/lilin-guowen";
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "立霖國文 | 素養教學領航者",
    template: "%s | 立霖國文",
  },
  description:
    "人生沒有 Google，但有經典可循。會考、學測國文素養家教，獨家「閱破劍法」邏輯化閱讀理解教學。新竹實體授課，全台 Google Meet 線上課程。",
  keywords: [
    "國文家教",
    "會考國文",
    "學測國文",
    "素養教學",
    "閱讀理解",
    "作文寫作",
    "新竹國文家教",
    "線上國文課",
    "古文教學",
    "閱破劍法",
  ],
  authors: [{ name: "立霖老師" }],
  creator: "立霖國文",
  publisher: "立霖國文",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/lilin-guowen/icon.png",
    apple: "/lilin-guowen/icon.png",
  },
  openGraph: {
    type: "website",
    locale: "zh_TW",
    url: SITE_URL,
    siteName: "立霖國文",
    title: "立霖國文 | 素養教學領航者",
    description:
      "人生沒有 Google，但有經典可循。會考、學測國文素養家教，獨家「閱破劍法」邏輯化閱讀理解教學。",
    images: [
      {
        url: "/lilin-guowen/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "立霖國文 - 素養教學領航者",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "立霖國文 | 素養教學領航者",
    description: "人生沒有 Google，但有經典可循。會考、學測國文素養家教。",
    images: ["/lilin-guowen/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#0A1A35",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "立霖國文",
  alternateName: "Lilin Guowen",
  url: SITE_URL,
  logo: `${SITE_URL}/images/lilin-icon.png`,
  image: `${SITE_URL}/images/og-image.png`,
  description:
    "立霖國文是專注於國中會考、高中學測國文素養教學的家教品牌，以「閱破劍法」邏輯化閱讀理解系統，結合考試技巧與素養教育。",
  sameAs: [],
  address: {
    "@type": "PostalAddress",
    addressRegion: "新竹市",
    addressCountry: "TW",
  },
  areaServed: [
    { "@type": "AdministrativeArea", name: "新竹市" },
    { "@type": "Country", name: "Taiwan" },
  ],
  offers: {
    "@type": "Offer",
    description: "國中／高中國文素養家教，實體（新竹）與 Google Meet 線上課程",
    priceCurrency: "TWD",
    price: "1000",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      priceCurrency: "TWD",
      price: "1000",
      unitText: "起／堂",
    },
  },
  founder: {
    "@type": "Person",
    name: "立霖老師",
    jobTitle: "國文素養家教",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <body className={`${notoSansTC.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}

        {/* Skip to main content link for keyboard users */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[var(--navy)] focus:text-[var(--cream)] focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
        >
          跳至主要內容
        </a>
        <Navbar />
        <main id="main-content" className="pt-16 min-h-screen pb-20 sm:pb-0" role="main" aria-label="主要內容">
          {children}
        </main>
        <Footer />
        <LineFloatingButton />
        <MobileStickyCTA />
      </body>
    </html>
  );
}
