import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-dm-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "JustAutomate | Your Business. Automated. Elevated.",
  description:
    "We don't just build websites — we build digital systems that work for you 24/7. Dubai-based web development and business automation agency.",
  openGraph: {
    title: "JustAutomate | Digital Transformation Partner",
    description:
      "Premium websites, real-time business dashboards, and WhatsApp automation.",
    url: "https://justautomate.work",
    siteName: "JustAutomate",
    locale: "en_AE",
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
        className={`${dmSans.variable} ${jetbrainsMono.variable} font-sans text-dark antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
