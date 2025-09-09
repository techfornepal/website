import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar, Footer } from "@/components/ui";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const titleFont = Playfair_Display({
  variable: "--font-title",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Tech For Nepal",
  description: "A community-driven platform dedicated to showcasing Nepal's tech talent and fostering innovation through collaboration.",
  keywords: ["Nepal", "Technology", "Innovation", "Community", "Developers", "Tech"],
  authors: [{ name: "Tech For Nepal" }],
  openGraph: {
    title: "Tech For Nepal",
    description: "Empowering Nepal through Technology - A community-driven platform for tech innovation and collaboration.",
    url: "https://techfornepal.com",
    siteName: "Tech For Nepal",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tech For Nepal - Empowering Nepal through Technology",
      },
    ],
    locale: "en-NP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech For Nepal",
    description: "Empowering Nepal through Technology - A community-driven platform for tech innovation.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${titleFont.variable} antialiased min-h-screen flex flex-col font-sans`}>
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
