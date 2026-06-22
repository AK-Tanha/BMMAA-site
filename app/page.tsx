import HeroSection from '@/components/HeroSection';
import Section from '@/components/Section';
import BoardMemberCard from '@/components/BoardMemberCard';
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
      
      <Section id="about" title="About BMMAA" subtitle={ORGANIZATION.description}>
        <p className="text-stone-700 leading-relaxed text-lg text-center">
          BMMAA has been registered under &quot;Bangladesh Martial Arts Confederation&quot; and &quot;National Sports Council&quot; under the Ministry of Youth and Sports since {ORGANIZATION.founded}. BMMAA is the first MMA governing body in Bangladesh.
        </p>
      </Section>

      <Section id="board" title="Executive Board" className="bg-neutral-100">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {boardMembers.map((member) => (
            <BoardMemberCard key={member.id} member={member} />
          ))}
        </div>
      </Section>

      <Section id="contact" title="Contact Us" subtitle="Get in touch with the association">
        <div className="text-center text-stone-700 space-y-4">
          <p>Email: {ORGANIZATION.email}</p>
          <p>Phone: {ORGANIZATION.phone}</p>
          <p>Address: {ORGANIZATION.address}</p>
        </div>
      </Section>
    </main>
  );
}
