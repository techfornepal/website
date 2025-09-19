import type { Metadata } from 'next';
import {
  Geist,
  Geist_Mono,
  Playfair_Display,
  Bricolage_Grotesque,
  Fjalla_One,
  Open_Sans,
  Poppins,
} from 'next/font/google';
import './globals.css';
import { Navbar, Footer } from '@/components/ui';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const titleFont = Playfair_Display({
  variable: '--font-title',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
});

const bricolageGrotesque = Bricolage_Grotesque({
  variable: '--font-bricolage',
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
});

const fjallaOne = Fjalla_One({
  variable: '--font-fjalla',
  subsets: ['latin'],
  weight: ['400'],
});

const openSans = Open_Sans({
  variable: '--font-opensans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
});

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Tech For Nepal',
  description:
    "A community-driven platform dedicated to showcasing Nepal's tech talent and fostering innovation through collaboration.",
  keywords: ['Nepal', 'Technology', 'Innovation', 'Community', 'Developers', 'Tech'],
  authors: [{ name: 'Tech For Nepal' }],
  openGraph: {
    title: 'Tech For Nepal',
    description:
      'Empowering Nepal through Technology - A community-driven platform for tech innovation and collaboration.',
    url: 'https://techfornepal.com',
    siteName: 'Tech For Nepal',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Tech For Nepal - Empowering Nepal through Technology',
      },
    ],
    locale: 'en-NP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tech For Nepal',
    description:
      'Empowering Nepal through Technology - A community-driven platform for tech innovation.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
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
        className={`${geistSans.variable} ${geistMono.variable} ${titleFont.variable} ${bricolageGrotesque.variable} ${fjallaOne.variable} ${openSans.variable} ${poppins.variable} min-h-screen font-sans antialiased`}
      >
        <Navbar />
        <div className="relative flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
