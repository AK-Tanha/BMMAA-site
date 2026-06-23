import Section from '@/components/Section';
import BoardMemberCard from '@/components/BoardMemberCard';
import { boardMembers } from '@/data/boardMembers';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Executive Board - BMMAA',
  description: 'Meet the executive board of the Bangladesh Mixed Martial Arts Association.',
};

const president = boardMembers.find((m) => m.designation === 'President')!;
const vicePresident = boardMembers.find((m) => m.designation === 'Vice-President')!;
const treasurer = boardMembers.find((m) => m.designation === 'Treasurer')!;
const secretary = boardMembers.find((m) => m.designation === 'Secretary')!;
const jointSecretary = boardMembers.find((m) => m.designation === 'Joint Secretary')!;
const members = boardMembers.filter((m) => m.designation === 'Member');

export default function ExecutiveBoardPage() {
  return (
    <main className="min-h-screen pt-16 md:pt-20">
      <Section
        id="executive-board"
        title="Executive Board"
        subtitle="Leading the development of MMA in Bangladesh"
        className="relative bg-white overflow-hidden"
      >
        {/* Rank chevron pattern */}
        <svg className="absolute inset-0 w-full h-full text-neutral-900/10 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="rank-chevrons" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M10 26L20 14 30 26" fill="none" stroke="currentColor" strokeWidth="0.6" />
              <path d="M4 34L20 18 36 34" fill="none" stroke="currentColor" strokeWidth="0.4" opacity="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#rank-chevrons)" />
        </svg>
        <div className="relative z-10">
          {/* President */}
          <div className="max-w-3xl mx-auto mb-12">
            <BoardMemberCard member={president} variant="featured" />
          </div>

          {/* Vice President & Treasurer */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <BoardMemberCard member={vicePresident} variant="minimal" />
            <BoardMemberCard member={treasurer} variant="minimal" />
          </div>

          {/* Secretary & Joint Secretary */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <BoardMemberCard member={secretary} variant="minimal" />
            <BoardMemberCard member={jointSecretary} variant="minimal" />
          </div>

          {/* Members */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {members.map((member, index) => (
              <BoardMemberCard key={member.id} member={member} variant="minimal" />
            ))}
          </div>
        </div>
      </Section>
    </main>
  );
}