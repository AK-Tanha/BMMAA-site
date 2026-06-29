import type {Metadata} from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bangladesh Mixed Martial Arts Association (BMMAA)',
  description: 'Official website of the Bangladesh Mixed Martial Arts Association.',
  icons: {
    icon: '/BMMAA LOGO.png',
  },
  openGraph: {
    title: 'Bangladesh Mixed Martial Arts Association (BMMAA)',
    description: 'Official website of the Bangladesh Mixed Martial Arts Association.',
    url: 'https://bmmaa.org',
    siteName: 'BMMAA',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 1200,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bangladesh Mixed Martial Arts Association (BMMAA)',
    description: 'Official website of the Bangladesh Mixed Martial Arts Association.',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-neutral-50 text-neutral-900">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
