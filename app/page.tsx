import Image from 'next/image';
import HeroSection from '@/components/HeroSection';
import Section from '@/components/Section';
import BoardCarousel from '@/components/BoardCarousel';
import Button from '@/components/Button';
import ContactForm from '@/components/ContactForm';
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
        {/* Shield scale pattern */}
        <svg className="absolute inset-0 w-full h-full text-secondary-500/[0.05] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="shield-scales" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M15 0L30 15 15 30 0 15Z" fill="none" stroke="currentColor" strokeWidth="0.4" />
              <circle cx="15" cy="15" r="1.5" fill="currentColor" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#shield-scales)" />
        </svg>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
          <div className="animate-slide-up group">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl min-h-[200px] md:min-h-[300px] transition-transform duration-700 group-hover:scale-[1.02]">
              <Image
                src="/About.jpeg"
                alt="BMMAA - Bangladesh Mixed Martial Arts Association"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-[8s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary-500/20 to-transparent transition-opacity duration-500 group-hover:opacity-60" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 md:p-6">
                <p className="text-white font-semibold text-sm md:text-lg animate-pulse">Since {ORGANIZATION.founded}</p>
              </div>
            </div>
          </div>
          <div className="space-y-4 md:space-y-6 animate-slide-up animate-delay-200">
            <p className="text-neutral-700 leading-relaxed text-base md:text-lg animate-fade-in animate-delay-300">
              BMMAA has been registered under &quot;Bangladesh Martial Arts Confederation&quot; and &quot;National Sports Council&quot; under the Ministry of Youth and Sports since {ORGANIZATION.founded}. BMMAA is the first MMA governing body in Bangladesh.
            </p>
            <p className="text-neutral-700 leading-relaxed text-base md:text-lg animate-fade-in animate-delay-500">
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
        {/* Connection wave pattern */}
        <svg className="absolute inset-0 w-full h-full text-secondary-500/[0.04] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="connect-waves" width="50" height="50" patternUnits="userSpaceOnUse">
              <circle cx="25" cy="25" r="2" fill="currentColor" opacity="0.3" />
              <path d="M0 25Q12.5 10 25 25Q37.5 40 50 25" fill="none" stroke="currentColor" strokeWidth="0.3" />
              <path d="M0 0Q25 25 50 0" fill="none" stroke="currentColor" strokeWidth="0.2" opacity="0.4" />
              <path d="M0 50Q25 25 50 50" fill="none" stroke="currentColor" strokeWidth="0.2" opacity="0.4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#connect-waves)" />
        </svg>
        {/* Signal bars accents */}
        <svg className="absolute top-0 right-0 w-16 md:w-28 h-16 md:h-28 text-secondary-500/20 pointer-events-none" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="5" y="35" width="8" height="20" stroke="currentColor" strokeWidth="1.5" />
          <rect x="18" y="25" width="8" height="30" stroke="currentColor" strokeWidth="1.5" />
          <rect x="31" y="15" width="8" height="40" stroke="currentColor" strokeWidth="1.5" />
          <rect x="44" y="5" width="8" height="50" stroke="currentColor" strokeWidth="1.5" />
        </svg>
        <svg className="absolute bottom-0 left-0 w-16 md:w-28 h-16 md:h-28 text-secondary-500/20 pointer-events-none rotate-180" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="5" y="35" width="8" height="20" stroke="currentColor" strokeWidth="1.5" />
          <rect x="18" y="25" width="8" height="30" stroke="currentColor" strokeWidth="1.5" />
          <rect x="31" y="15" width="8" height="40" stroke="currentColor" strokeWidth="1.5" />
          <rect x="44" y="5" width="8" height="50" stroke="currentColor" strokeWidth="1.5" />
        </svg>
        <ContactForm />
      </Section>
    </main>
  );
}
