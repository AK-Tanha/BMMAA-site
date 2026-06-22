import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import Section from '@/components/Section';
import { boardMembers } from '@/data/boardMembers';
import { ORGANIZATION } from '@/lib/constants';
import type { Metadata } from 'next';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const member = boardMembers.find((m) => m.id === id);
  if (!member) return { title: 'Not Found - BMMAA' };
  return {
    title: `${member.name} - BMMAA Executive Board`,
    description: `${member.designation} of the Bangladesh Mixed Martial Arts Association.`,
  };
}

export default async function MemberPage({ params }: Props) {
  const { id } = await params;
  const member = boardMembers.find((m) => m.id === id);
  if (!member) notFound();

  const imagePath = member.image?.startsWith('http')
    ? member.image
    : `/${encodeURIComponent(member.image || '')}`;

  return (
    <main className="min-h-screen pt-16 md:pt-20">
      <Section className="bg-neutral-50">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/executive-board"
            className="inline-flex items-center gap-2 text-neutral-600 hover:text-secondary-500 transition-colors mb-8"
          >
            <ArrowLeft size={18} />
            <span className="text-sm font-medium">Back to Executive Board</span>
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="md:col-span-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-neutral-200">
                {member.image ? (
                  <Image
                    src={imagePath}
                    alt={member.name}
                    width={400}
                    height={500}
                    className="w-full h-[400px] object-cover"
                  />
                ) : (
                  <div className="w-full h-[400px] bg-gradient-to-br from-neutral-200 to-neutral-300 flex items-center justify-center">
                    <span className="text-6xl font-bold text-neutral-400">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                )}
              </div>
            </div>

            <div className="md:col-span-2 space-y-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-2">
                  {member.name}
                </h1>
                <p className="text-lg font-semibold text-secondary-500 uppercase tracking-wider">
                  {member.designation}
                </p>
              </div>

              <div className="w-20 h-1 bg-secondary-500 rounded-full shadow-glow" />

              <p className="text-neutral-700 leading-relaxed text-lg">
                {member.bio || `${member.name} serves as ${member.designation} of the ${ORGANIZATION.name}.`}
              </p>

              <div className="bg-white rounded-xl p-6 border border-neutral-200 shadow-card space-y-4">
                <h3 className="font-semibold text-neutral-900">Contact Information</h3>
                <div className="text-sm text-neutral-600 space-y-2">
                  <p>
                    <span className="font-medium text-neutral-800">Organization:</span>{' '}
                    {ORGANIZATION.name}
                  </p>
                  <p>
                    <span className="font-medium text-neutral-800">Email:</span>{' '}
                    <a href={`mailto:${ORGANIZATION.email}`} className="text-secondary-500 hover:underline">
                      {ORGANIZATION.email}
                    </a>
                  </p>
                  <p>
                    <span className="font-medium text-neutral-800">Role:</span> {member.designation}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}