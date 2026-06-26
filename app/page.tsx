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
        {/* Gradient background */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="about-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f5f5f5" />
              <stop offset="50%" stopColor="#fef2f2" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#f5f5f5" />
            </linearGradient>
            <radialGradient id="about-grad-accent" cx="20%" cy="20%" r="60%">
              <stop offset="0%" stopColor="#dc2626" stopOpacity="0.04" />
              <stop offset="100%" stopColor="#dc2626" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#about-grad)" />
          <rect width="100%" height="100%" fill="url(#about-grad-accent)" />
        </svg>
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

      <Section id="president-speech" title="President's Speech" className="relative bg-gradient-to-br from-white via-neutral-50 to-accent-50/30">
        {/* Quotation mark pattern */}
        <svg className="absolute inset-0 w-full h-full text-accent-500/[0.04] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="quote-pattern" width="80" height="80" patternUnits="userSpaceOnUse">
              <text x="10" y="40" fontSize="40" fill="currentColor" fontWeight="bold">&quot;</text>
              <text x="50" y="70" fontSize="24" fill="currentColor" fontWeight="bold" opacity="0.5">&quot;</text>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#quote-pattern)" />
        </svg>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center relative z-10">
          <div className="lg:col-span-2 animate-slide-up group">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-sm mx-auto lg:mx-0 transition-transform duration-700 group-hover:scale-[1.02]">
              <div className="aspect-[3/4] relative">
                <Image
                  src="/President Major (Retd) Mizanur Rahman.png"
                  alt="Retd. Major Mizanur Rahman - President"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-[8s] group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                <p className="text-white font-bold text-lg md:text-xl">Retd. Major Mizanur Rahman</p>
                <p className="text-accent-300 text-sm md:text-base">President, BMMAA</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 space-y-6 animate-slide-up animate-delay-200">
            <div className="relative">
              <svg className="absolute -top-4 -left-4 w-10 h-10 text-accent-500/30" viewBox="0 0 40 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 20C0 8.954 8.954 0 20 0v4c-8.837 0-16 7.163-16 16H0zm20 0c0-11.046 8.954-20 20-20v4c-8.837 0-16 7.163-16 16h-4z" />
              </svg>
              <blockquote className="text-neutral-700 leading-relaxed text-base md:text-lg italic pl-4 md:pl-6 border-l-4 border-accent-500 animate-fade-in animate-delay-300">
                &quot;It is my honor to lead the Bangladesh Mixed Martial Arts Association as we strive to develop, promote, and regulate the sport of Mixed Martial Arts across Bangladesh. Our commitment to safety, fairness, and professionalism remains unwavering. Together with our dedicated board members and the support of the Ministry of Youth and Sports, we are building a strong foundation for the future of MMA in our country. I invite all enthusiasts, athletes, and stakeholders to join us in this journey to elevate Bangladeshi MMA on the international stage.&quot;
              </blockquote>
              <svg className="absolute -bottom-4 -right-4 w-8 h-8 text-accent-500/30 rotate-180" viewBox="0 0 40 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 20C0 8.954 8.954 0 20 0v4c-8.837 0-16 7.163-16 16H0zm20 0c0-11.046 8.954-20 20-20v4c-8.837 0-16 7.163-16 16h-4z" />
              </svg>
            </div>
            <div className="text-right animate-fade-in animate-delay-500">
              <p className="font-semibold text-neutral-900">- Retd. Major Mizanur Rahman</p>
              <p className="text-neutral-500 text-sm">President, Bangladesh Mixed Martial Arts Association</p>
            </div>
          </div>
        </div>
      </Section>

      <Section id="board" title="Executive Board" className="relative bg-gradient-to-br from-neutral-50 via-white to-neutral-100">
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


      <Section id="contact" title="Contact Us" subtitle="Get in touch with the association" className="relative bg-gradient-to-br from-neutral-50 via-white to-secondary-500/[0.03]">
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
