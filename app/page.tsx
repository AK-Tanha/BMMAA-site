import HeroSection from '@/components/HeroSection';
import Section from '@/components/Section';
import StatsSection from '@/components/StatsSection';
import FeatureCards from '@/components/FeatureCards';
import BoardMemberCard from '@/components/BoardMemberCard';
import Affiliations from '@/components/Affiliations';
import { ORGANIZATION } from '@/lib/constants';
import { boardMembers } from '@/data/boardMembers';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection
        title={ORGANIZATION.name}
        subtitle={ORGANIZATION.description}
        primaryCTA={{ text: 'Learn More', href: '#about' }}
        secondaryCTA={{ text: 'Contact Us', href: '#contact' }}
      />

      <StatsSection />

      <FeatureCards />

      <Section id="about" title="About BMMAA" className="bg-neutral-50">
        <div className="max-w-3xl mx-auto space-y-6 text-stone-700 leading-relaxed text-lg text-center">
          <p>
            BMMAA has been registered under &quot;Bangladesh Martial Arts Confederation&quot; and &quot;National Sports Council&quot; under the Ministry of Youth and Sports since {ORGANIZATION.founded}. BMMAA is the first MMA governing body in Bangladesh.
          </p>
          <p>
            Our mission is to develop, promote, and regulate the sport of Mixed Martial Arts across Bangladesh, ensuring safety, fairness, and professionalism at all levels of competition.
          </p>
        </div>
      </Section>

      <Section id="board" title="Executive Board" className="bg-neutral-100">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {boardMembers.map((member) => (
            <BoardMemberCard key={member.id} member={member} />
          ))}
        </div>
      </Section>

      <Affiliations />

      <Section id="contact" title="Contact Us" subtitle="Get in touch with the association">
        <div className="text-center text-stone-700 space-y-4">
          <p>Email: {ORGANIZATION.email}</p>
          <p>Phone: {ORGANIZATION.phone}</p>
          <p>Address: {ORGANIZATION.address}</p>
          <div className="flex justify-center gap-6 pt-4">
            <a href={ORGANIZATION.socialMedia.facebook} target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-700 font-semibold transition-colors">Facebook</a>
            <a href={ORGANIZATION.socialMedia.instagram} target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-700 font-semibold transition-colors">Instagram</a>
            <a href={ORGANIZATION.socialMedia.linkedin} target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-700 font-semibold transition-colors">LinkedIn</a>
          </div>
        </div>
      </Section>
    </main>
  );
}
