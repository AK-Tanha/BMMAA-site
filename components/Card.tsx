interface CardProps {
  children: React.ReactNode;
  hover?: boolean;
  className?: string;
  style?: React.CSSProperties;
  brackets?: boolean;
}

export default function Card({
  children,
  hover = true,
  className = "",
  style,
  brackets = true,
}: CardProps) {
  return (
    <div
      className={`
        relative bg-white rounded-2xl shadow-2xl border border-neutral-200
        ${hover ? "hover:shadow-glow-lg hover:-translate-y-1.5" : ""}
        transition-all duration-300
        ${className}
      `}
      style={style}
    >
      {/* Corner brackets */}
      {brackets && (
        <>
          <div className="absolute -top-4 -left-4 w-16 h-2 bg-secondary-500 rounded-full z-10" />
          <div className="absolute -top-4 -left-4 w-2 h-16 bg-secondary-500 rounded-full z-10" />
          <div className="absolute -bottom-4 -right-4 w-16 h-2 bg-secondary-500 rounded-full z-10" />
          <div className="absolute -bottom-4 -right-4 w-2 h-16 bg-secondary-500 rounded-full z-10" />
        </>
      )}

      <div className="rounded-2xl overflow-hidden p-10">{children}</div>
    </div>
  );
}
