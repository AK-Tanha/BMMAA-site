import Link from 'next/link';
import Image from 'next/image';
import { ORGANIZATION } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-2">
              <Image
                src="/BMMAA%20LOGO.png"
                alt="BMMAA Logo"
                width={180}
                height={50}
                className="h-[72px] w-auto rounded-full shrink-0"
              />
              <h3 className="text-lg font-bold text-neutral-100">{ORGANIZATION.name}</h3>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed max-w-md">
              {ORGANIZATION.description}. Registered under Bangladesh Martial Arts Confederation &amp; National Sports Council.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#about" className="text-neutral-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#board" className="text-neutral-400 hover:text-white transition-colors">Executive Board</a></li>
              <li><a href="#contact" className="text-neutral-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Connect</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={ORGANIZATION.socialMedia.facebook} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">Facebook</a>
              </li>
              <li>
                <a href={ORGANIZATION.socialMedia.instagram} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">Instagram</a>
              </li>
              <li>
                <a href={ORGANIZATION.socialMedia.linkedin} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-neutral-800 mt-10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>&copy; {new Date().getFullYear()} {ORGANIZATION.name}. All rights reserved.</p>
          <p>
            <a href={`mailto:${ORGANIZATION.email}`} className="text-neutral-500 hover:text-neutral-300 transition-colors">{ORGANIZATION.email}</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
