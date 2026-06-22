import Button from './Button';

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
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900 via-primary-700 to-primary-900 opacity-90" />
      {backgroundImage && (
        <img
          src={backgroundImage}
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
      )}
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 md:px-8 max-w-4xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-neutral-100 mb-8 max-w-2xl mx-auto">
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
    </section>
  );
}
