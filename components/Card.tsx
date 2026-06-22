interface CardProps {
  children: React.ReactNode;
  hover?: boolean;
  className?: string;
}

export default function Card({ children, hover = true, className = '' }: CardProps) {
  return (
    <div
      className={`
        bg-white rounded-xl p-6 shadow-card
        ${hover ? 'hover:shadow-card-hover hover:-translate-y-1' : ''}
        transition-all duration-300
        ${className}
      `}
    >
      {children}
    </div>
  );
}
