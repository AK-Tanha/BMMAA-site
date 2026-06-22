interface SectionProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function Section({ title, subtitle, children, className = '', id }: SectionProps) {
  return (
    <section id={id} className={`py-16 md:py-24 px-4 md:px-8 ${className}`}>
      <div className="max-w-6xl mx-auto">
        {title && (
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              {title}
            </h2>
            <div className="w-20 h-1 bg-accent-500 rounded-full mx-auto mb-6 shadow-glow" />
            {subtitle && (
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
