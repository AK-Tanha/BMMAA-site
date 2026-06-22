import Link from 'next/link';
import Card from './Card';
import { User } from 'lucide-react';

interface BoardMember {
  id?: string;
  name: string;
  designation: string;
  bio?: string;
  image?: string;
}

interface BoardMemberCardProps {
  member: BoardMember;
  index?: number;
  variant?: 'default' | 'featured' | 'compact' | 'minimal';
}

export default function BoardMemberCard({ member, index = 0, variant = 'default' }: BoardMemberCardProps) {
  const isFeatured = variant === 'featured';
  const isCompact = variant === 'compact';
  const isMinimal = variant === 'minimal';
  const imgHeight = isFeatured ? 'h-[500px] md:h-[560px]' : isCompact || isMinimal ? 'h-128' : 'h-96 md:h-[480px]';
  const contentPadding = isCompact || isMinimal ? 'px-3 pb-3' : 'px-4 pb-4';

  const content = (
    <>
      {/* Image Container */}
      {member.image ? (
        <div className={`-mx-10 -mt-10 mb-6 ${imgHeight} overflow-hidden`}>
          <img
            src={member.image.startsWith('http') ? member.image : `/${encodeURIComponent(member.image)}`}
            alt={member.name}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
        </div>
      ) : (
        <div className={`-mx-10 -mt-10 mb-6 ${imgHeight} bg-gradient-to-br from-neutral-200 to-neutral-300 flex items-center justify-center`}>
          <User className={`text-neutral-400 ${isCompact ? 'w-16 h-16' : 'w-24 h-24 scale-150'}`} />
        </div>
      )}

      {/* Content Area */}
      <div className={contentPadding}>
        <h3 className={`font-bold text-neutral-900 tracking-tight mb-3 ${isCompact || isMinimal ? 'text-xl' : isFeatured ? 'text-3xl' : 'text-2xl'}`}>
          {member.name}
        </h3>

        <div className="flex justify-center mb-4">
          <div className={`h-1 bg-secondary-500 rounded-full shadow-glow ${isCompact ? 'w-12' : 'w-16'}`} />
        </div>

        <p className={`font-semibold mb-3 tracking-widest uppercase ${isMinimal ? 'text-xs text-neutral-500' : isCompact ? 'text-xs text-accent-500' : 'text-sm text-accent-500'}`}>
          {member.designation}
        </p>

        {member.bio && (
          <p className="text-neutral-600 leading-relaxed text-sm">
            {member.bio}
          </p>
        )}
      </div>
    </>
  );

  return (
    <Card
      className={`text-center animate-slide-up ${member.id ? 'cursor-pointer' : ''}`}
      style={{ animationDelay: `${(index + 1) * 80}ms` }}
      brackets={!isMinimal}
    >
      {member.id ? (
        <Link href={`/executive-board/${member.id}`} className="block">
          {content}
        </Link>
      ) : (
        content
      )}
    </Card>
  );
}