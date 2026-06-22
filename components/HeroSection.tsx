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
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-700 to-primary-900" />
      {backgroundImage && (
        <img
          src={backgroundImage}
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
      )}

      <div className="relative z-10 text-center text-white px-4 md:px-8 max-w-4xl flex-1 flex flex-col items-center justify-center">
        <p className="text-sm md:text-base font-semibold uppercase tracking-widest text-primary-300 mb-4">
          {ORGANIZATION.shortName}
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight font-heading">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-neutral-100 mb-8 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button variant="primary" size="lg" href={primaryCTA.href}>
            {primaryCTA.text}
          </Button>
          {secondaryCTA && (
            <Button variant="outline" size="lg" href={secondaryCTA.href}>
              {secondaryCTA.text}
            </Button>
          )}
        </div>
      </div>

      <div className="relative z-10 w-full border-t border-white/10 bg-white/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-4 flex flex-wrap justify-center gap-6 md:gap-10 text-sm">
          <a href="#about" className="text-white/70 hover:text-white transition-colors font-medium">About</a>
          <span className="text-white/20 hidden md:inline">|</span>
          <a href="#board" className="text-white/70 hover:text-white transition-colors font-medium">Executive Board</a>
          <span className="text-white/20 hidden md:inline">|</span>
          <a href="#events" className="text-white/70 hover:text-white transition-colors font-medium">Events</a>
          <span className="text-white/20 hidden md:inline">|</span>
          <a href="#contact" className="text-white/70 hover:text-white transition-colors font-medium">Contact</a>
        </div>
      </div>
    </section>
  );
}
