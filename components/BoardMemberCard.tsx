import Card from './Card';

interface BoardMember {
  name: string;
  designation: string;
  bio?: string;
  image?: string;
}

interface BoardMemberCardProps {
  member: BoardMember;
}

export default function BoardMemberCard({ member }: BoardMemberCardProps) {
  return (
    <Card className="text-center">
      {member.image && (
        <img 
          src={member.image} 
          alt={member.name}
          className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
        />
      )}
      {!member.image && (
        <div className="w-32 h-32 rounded-full mx-auto mb-4 bg-primary-200 flex items-center justify-center">
          <span className="text-4xl">👤</span>
        </div>
      )}
      
      <h3 className="text-xl font-bold text-neutral-900 mb-1">{member.name}</h3>
      <p className="text-sm font-semibold text-primary-500 mb-3">{member.designation}</p>
      {member.bio && (
        <p className="text-sm text-neutral-600">{member.bio}</p>
      )}
    </Card>
  );
}
