'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const navLinks = [
  { label: 'About', href: '/#about' },
  { label: 'Executive Board', href: '/executive-board' },
/*   { label: 'Events', href: '/#events' }, */
  { label: 'Contact', href: '/#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        !isHome || scrolled
          ? 'bg-navbar/95 backdrop-blur-md border-b border-neutral-800 shadow-lg'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/BMMAA%20LOGO.png"
            alt="BMMAA Logo"
            width={140}
            height={40}
            className="h-[54px] w-auto rounded-full"
            priority
          />
          <span className={`hidden sm:block text-xs leading-tight font-medium ${scrolled ? 'text-neutral-200' : 'text-white/90 drop-shadow-md'}`}>
            Bangladesh Mixed<br />Martial Arts Association
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${scrolled ? 'text-neutral-400 hover:text-secondary-500 hover:bg-secondary-500/10' : 'text-white/90 drop-shadow-md hover:text-white hover:bg-white/10'}`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          className={`md:hidden p-2 rounded-lg transition-all ${scrolled ? 'text-neutral-400 hover:text-secondary-500 hover:bg-secondary-500/10' : 'text-white/90 drop-shadow-md hover:text-white hover:bg-white/10'}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-navbar border-t border-neutral-800 px-4 pb-4 animate-slide-down">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-3 text-sm font-medium text-neutral-400 hover:text-secondary-500 transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
