import Button from './Button';
import { ORGANIZATION } from '@/lib/constants';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  primaryCTA: { text: string; href: string };
  secondaryCTA?: { text: string; href: string };
  backgroundImage?: string;
}

export default function HeroSection({
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
  backgroundImage,
}: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16 md:pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-700 to-primary-800" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(220,38,38,0.08)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(249,115,22,0.04)_0%,transparent_50%)]" />

      {/* Hexagon mesh pattern overlay */}
      <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hex-grid" width="56" height="100" patternUnits="userSpaceOnUse" patternTransform="scale(0.8)">
            <path d="M28 0L56 16.7v33.3L28 66.7 0 50V16.7z" fill="none" stroke="white" strokeWidth="1" />
            <path d="M28 33.3L56 50v33.3L28 100 0 83.3V50z" fill="none" stroke="white" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hex-grid)" />
      </svg>

      {/* Corner accent bracket - top right */}
      <svg className="absolute top-4 md:top-8 right-4 md:right-8 w-16 md:w-32 h-16 md:h-32 text-secondary-500/40 pointer-events-none" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M90 10V60C90 76.5685 76.5685 90 60 90H10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M70 10H90V30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>

      {/* Corner accent bracket - bottom left */}
      <svg className="absolute bottom-4 md:bottom-8 left-4 md:left-8 w-16 md:w-32 h-16 md:h-32 text-secondary-500/40 pointer-events-none rotate-180" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M90 10V60C90 76.5685 76.5685 90 60 90H10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M70 10H90V30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>

      {backgroundImage && (
        <img
          src={backgroundImage}
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-26"
        />
      )}

      <div className="relative z-10 text-center text-white px-5 md:px-8 max-w-4xl flex-1 flex flex-col items-center justify-center">
        <p className="animate-fade-in text-xs md:text-sm font-bold uppercase tracking-[0.25em] text-secondary-400 mb-3 md:mb-4">
          {ORGANIZATION.shortName}
        </p>
        <h1 className="animate-slide-up text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6 leading-tight">
          {title}
        </h1>
        <p className="animate-fade-in animate-delay-200 text-base md:text-lg lg:text-xl text-green-500 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>

        <div className="animate-slide-up animate-delay-300 flex flex-col sm:flex-row gap-3 md:gap-4 justify-center w-full sm:w-auto px-4 sm:px-0">
          <Button variant="secondary" size="lg" href={primaryCTA.href}>
            {primaryCTA.text}
          </Button>
          {secondaryCTA && (
            <Button variant="hero-outline" size="lg" href={secondaryCTA.href}>
              {secondaryCTA.text}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
