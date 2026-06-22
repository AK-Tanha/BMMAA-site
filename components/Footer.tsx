import Link from 'next/link';
import { ORGANIZATION } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold text-white mb-3 font-heading">{ORGANIZATION.shortName}</h3>
            <p className="text-sm text-neutral-400 leading-relaxed max-w-md">
              {ORGANIZATION.description}. Registered under Bangladesh Martial Arts Confederation &amp; National Sports Council.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#board" className="hover:text-white transition-colors">Executive Board</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Connect</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={ORGANIZATION.socialMedia.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Facebook</a>
              </li>
              <li>
                <a href={ORGANIZATION.socialMedia.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
              </li>
              <li>
                <a href={ORGANIZATION.socialMedia.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-neutral-800 mt-10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>&copy; {new Date().getFullYear()} {ORGANIZATION.name}. All rights reserved.</p>
          <p>
            <a href={`mailto:${ORGANIZATION.email}`} className="hover:text-neutral-300 transition-colors">{ORGANIZATION.email}</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
