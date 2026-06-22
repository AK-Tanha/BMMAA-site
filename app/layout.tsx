import type {Metadata} from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bangladesh Mixed Martial Arts Association (BMMAA)',
  description: 'Official website of the Bangladesh Mixed Martial Arts Association.',
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
