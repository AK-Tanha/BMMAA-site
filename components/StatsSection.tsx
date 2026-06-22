interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  { value: '2016', label: 'Founded' },
  { value: '2', label: 'Registered Bodies' },
  { value: '1st', label: 'MMA Governing Body in BD' },
  { value: '8', label: 'Executive Board Members' },
];

export default function StatsSection() {
  return (
    <section className="relative -mt-20 z-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-xl p-6 text-center shadow-card border border-neutral-100"
            >
              <p className="text-3xl md:text-4xl font-bold text-primary-500 font-heading">
                {stat.value}
              </p>
              <p className="text-sm text-neutral-600 mt-1 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
