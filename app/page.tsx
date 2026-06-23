import HeroSection from '@/components/HeroSection';
import Section from '@/components/Section';
import BoardCarousel from '@/components/BoardCarousel';
import Button from '@/components/Button';
import ContactForm from '@/components/ContactForm';
import Affiliations from '@/components/Affiliations';
import { ORGANIZATION } from '@/lib/constants';
import { boardMembers } from '@/data/boardMembers';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection
        title={ORGANIZATION.name}
        subtitle={ORGANIZATION.description}
        primaryCTA={{ text: 'Learn More', href: '/#about' }}
        secondaryCTA={{ text: 'Contact Us', href: '/#contact' }}
        backgroundImage="hero.webp"
      />

      <Section id="about" title="About BMMAA" className="relative bg-neutral-50 pt-24 md:pt-32 overflow-hidden">
        {/* Subtle geometric decoration */}
        <svg className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 text-secondary-500/20 pointer-events-none" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="100,10 190,50 190,150 100,190 10,150 10,50" stroke="currentColor" strokeWidth="2" />
          <polygon points="100,40 160,65 160,135 100,160 40,135 40,65" stroke="currentColor" strokeWidth="1" />
          <polygon points="100,70 130,85 130,115 100,130 70,115 70,85" stroke="currentColor" strokeWidth="0.5" />
        </svg>
        <svg className="absolute bottom-0 left-0 w-32 md:w-48 h-32 md:h-48 text-secondary-500/20 pointer-events-none" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="1" />
          <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="15" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
        </svg>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
          <div className="animate-slide-up">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800&q=80"
                alt="BMMAA - Bangladesh Mixed Martial Arts Association"
                className="w-full h-[250px] sm:h-[350px] md:h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary-500/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 md:p-6">
                <p className="text-white font-semibold text-sm md:text-lg">Since {ORGANIZATION.founded}</p>
              </div>
            </div>
          </div>
          <div className="space-y-4 md:space-y-6 text-neutral-700 leading-relaxed text-base md:text-lg animate-slide-up animate-delay-200">
            <p>
              BMMAA has been registered under &quot;Bangladesh Martial Arts Confederation&quot; and &quot;National Sports Council&quot; under the Ministry of Youth and Sports since {ORGANIZATION.founded}. BMMAA is the first MMA governing body in Bangladesh.
            </p>
            <p>
              Our mission is to develop, promote, and regulate the sport of Mixed Martial Arts across Bangladesh, ensuring safety, fairness, and professionalism at all levels of competition.
            </p>
          </div>
        </div>
      </Section>

      <Section id="board" title="Executive Board" className="relative bg-white">
        {/* Diamond grid pattern */}
        <svg className="absolute inset-0 w-full h-full text-neutral-900/10 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="diamond-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <rect width="60" height="60" fill="none" />
              <path d="M30 0L60 30 30 60 0 30z" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diamond-grid)" />
        </svg>
        <BoardCarousel members={boardMembers.slice(0, 6)} />
        <div className="text-center mt-10">
          <Button variant="outline" size="lg" href="/executive-board">
            View All Board Members
          </Button>
        </div>
      </Section>


      <Section id="contact" title="Contact Us" subtitle="Get in touch with the association" className="relative bg-neutral-50 overflow-hidden">
        {/* Crosshair target pattern */}
        <svg className="absolute inset-0 w-full h-full text-secondary-500/[0.04] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="crosshair" width="120" height="120" patternUnits="userSpaceOnUse">
              <circle cx="60" cy="60" r="55" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <circle cx="60" cy="60" r="35" fill="none" stroke="currentColor" strokeWidth="0.3" />
              <circle cx="60" cy="60" r="15" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <line x1="5" y1="60" x2="115" y2="60" stroke="currentColor" strokeWidth="0.3" />
              <line x1="60" y1="5" x2="60" y2="115" stroke="currentColor" strokeWidth="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#crosshair)" />
        </svg>
        {/* Bold corner brackets */}
        <svg className="absolute top-0 right-0 w-24 md:w-40 h-24 md:h-40 text-secondary-500/15 pointer-events-none" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M95 5V40C95 69.6 69.6 95 40 95H5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <path d="M95 5H60C30.4 5 5 30.4 5 60V95" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeDasharray="4 4" opacity="0.5" />
        </svg>
        <svg className="absolute bottom-0 left-0 w-24 md:w-40 h-24 md:h-40 text-secondary-500/15 pointer-events-none rotate-180" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M95 5V40C95 69.6 69.6 95 40 95H5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <path d="M95 5H60C30.4 5 5 30.4 5 60V95" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeDasharray="4 4" opacity="0.5" />
        </svg>
        <ContactForm />
      </Section>
    </main>
  );
}
