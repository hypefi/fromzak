import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Zak Radmi - Surf Photography & Coaching | Morocco",
  description: "Professional surf photographer and coach in Morocco. Book surf coaching sessions, photography services, and Morocco surf trip guidance. Capture your perfect wave with Zak Radmi.",
  keywords: "surf photography, surf coaching, Morocco surf, surf trip guide, photography sessions, surf lessons, Taghazout, Agadir, surf camp",
  authors: [{ name: "Zak Radmi" }],
  openGraph: {
    title: "Zak Radmi - Surf Photography & Coaching",
    description: "Professional surf photographer and coach in Morocco. Book your perfect surf experience.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zak Radmi - Surf Photography & Coaching",
    description: "Professional surf photographer and coach in Morocco.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
