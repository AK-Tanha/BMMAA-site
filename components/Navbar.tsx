'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Info, Users, Mail } from 'lucide-react';
import Image from 'next/image';

const navLinks = [
  { label: 'About', href: '/#about', icon: Info },
  { label: 'Executive Board', href: '/executive-board', icon: Users },
  /* { label: 'Events', href: '/#events', icon: Calendar }, */
  { label: 'Contact', href: '/#contact', icon: Mail },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!isHome) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [isHome]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    if (open) {
      document.addEventListener('keydown', onKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [open]);

  const isActive = (href: string) => {
    if (href.includes('/#')) {
      const sectionId = href.split('#')[1];
      return pathname === '/' && activeSection === sectionId;
    }
    return pathname === href;
  };

  return (
    <>
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        !isHome || scrolled
          ? 'bg-navbar/95 backdrop-blur-md border-b border-neutral-800 shadow-lg'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 relative z-50">
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
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                isActive(link.href)
                  ? 'text-secondary-500 bg-secondary-500/10'
                  : scrolled
                    ? 'text-neutral-400 hover:text-secondary-500 hover:bg-secondary-500/10'
                    : 'text-white/90 drop-shadow-md hover:text-white hover:bg-white/10'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          className={`md:hidden relative z-50 p-2 rounded-lg transition-all ${
            scrolled
              ? 'text-neutral-400 hover:text-secondary-500 hover:bg-secondary-500/10'
              : 'text-white/90 drop-shadow-md hover:text-white hover:bg-white/10'
          }`}
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
    </header>

    <div
      className={`fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden z-40 transition-opacity duration-300 ${
        open ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      onClick={() => setOpen(false)}
      aria-hidden="true"
    />

    <div
      className={`fixed top-0 right-0 h-full w-72 max-w-[85vw] bg-navbar border-l border-neutral-800 md:hidden shadow-2xl z-40 transform transition-transform duration-300 ease-in-out ${
        open ? 'translate-x-0' : 'translate-x-full'
      }`}
      aria-hidden={!open}
    >
      <div className="flex flex-col pt-24 px-6 gap-2">
        {navLinks.map((link, index) => (
          <a
            key={link.href}
            href={link.href}
            className={`flex items-center gap-3 px-4 py-3.5 text-sm font-medium rounded-lg transition-all duration-200 ${
              isActive(link.href)
                ? 'text-secondary-500 bg-secondary-500/10 border-l-2 border-secondary-500'
                : 'text-neutral-400 hover:text-secondary-500 hover:bg-secondary-500/5 border-l-2 border-transparent hover:border-secondary-500/50'
            }`}
            style={{ transitionDelay: `${index * 60}ms` }}
            onClick={() => setOpen(false)}
          >
            <link.icon size={18} className="shrink-0" />
            {link.label}
          </a>
        ))}
      </div>
      </div>
    </>
  );
}
