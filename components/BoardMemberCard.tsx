import Link from 'next/link';
import Image from 'next/image';
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
  brackets?: boolean;
  hover?: boolean;
  cardClassName?: string;
}

export default function BoardMemberCard({ member, index = 0, variant = 'default', brackets, hover, cardClassName = '' }: BoardMemberCardProps) {
  const isFeatured = variant === 'featured';
  const isCompact = variant === 'compact';
  const isMinimal = variant === 'minimal';
  const showBrackets = brackets !== undefined ? brackets : !isMinimal;
  const imgHeight = isFeatured ? 'h-[400px] md:h-[560px]' : isCompact ? 'h-72' : isMinimal ? 'h-[360px] md:h-[460px]' : 'h-[400px] md:h-[520px]';

  const wrapperClasses = `-mx-4 md:-mx-10 -mt-4 md:-mt-10 -mb-4 md:-mb-10 ${imgHeight} overflow-hidden relative`;

  const textOverlay = (
    <div className="absolute bottom-0 left-0 right-0 p-6">
      <h3 className={`font-bold text-white tracking-tight ${isFeatured ? 'text-4xl' : isCompact ? 'text-xl' : 'text-2xl'}`}>
        {member.name}
      </h3>
      <p className={`font-semibold text-white/80 tracking-widest uppercase mt-1 ${isCompact ? 'text-xs' : 'text-sm'}`}>
        {member.designation}
      </p>
      {member.bio && (isFeatured || (!isCompact && !isMinimal)) && (
        <p className="text-sm text-white/70 leading-relaxed mt-3 max-w-lg">
          {member.bio}
        </p>
      )}
    </div>
  );

  const content = (
    <>
      {member.image ? (
        <div className={wrapperClasses}>
          <Image
            src={member.image.startsWith('http') ? member.image : `/${encodeURIComponent(member.image)}`}
            alt={member.name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />
          {textOverlay}
        </div>
      ) : (
        <div className={`${wrapperClasses} bg-gradient-to-br from-neutral-200 to-neutral-300 flex flex-col items-center justify-center`}>
          <User className={`text-neutral-400 ${isCompact ? 'w-16 h-16' : 'w-24 h-24'}`} />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
            <h3 className={`font-bold text-neutral-900 tracking-tight ${isFeatured ? 'text-4xl' : isCompact ? 'text-xl' : 'text-2xl'}`}>
              {member.name}
            </h3>
            <p className={`font-semibold text-neutral-500 tracking-widest uppercase mt-1 ${isCompact ? 'text-xs' : 'text-sm'}`}>
              {member.designation}
            </p>
          </div>
        </div>
      )}
    </>
  );

  return (
    <Card
      className={`animate-slide-up ${member.id ? 'cursor-pointer' : ''} ${cardClassName}`}
      style={{ animationDelay: `${(index + 1) * 80}ms` }}
      brackets={showBrackets}
      hover={hover}
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