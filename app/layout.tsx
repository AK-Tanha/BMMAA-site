import type {Metadata} from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-heading' });

export const metadata: Metadata = {
  title: 'Bangladesh Mixed Martial Arts Association (BMMAA)',
  description: 'Official website of the Bangladesh Mixed Martial Arts Association.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased bg-gray-50 text-gray-900">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
