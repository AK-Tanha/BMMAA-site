import { Building2, ShieldCheck, Trophy } from 'lucide-react';

const affiliations = [
  {
    icon: Building2,
    name: 'Bangladesh Martial Arts Confederation',
    description: 'National governing body for martial arts',
  },
  {
    icon: ShieldCheck,
    name: 'National Sports Council',
    description: 'Under the Ministry of Youth and Sports',
  },
  {
    icon: Trophy,
    name: 'IMMAF',
    description: 'International Mixed Martial Arts Federation',
  },
];

export default function Affiliations() {
  return (
    <section className="relative py-16 md:py-24 px-4 md:px-8 bg-neutral-900 overflow-hidden">
      {/* Geometric dot grid pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.08] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dot-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="1.5" fill="white" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dot-grid)" />
      </svg>

      {/* Diagonal line accent */}
      <svg className="absolute -top-40 -right-40 w-96 h-96 text-secondary-500/15 pointer-events-none" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="1" />
        <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="0.5" />
        <path d="M20 100H180" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
        <path d="M100 20V180" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
      </svg>

      {/* Small decorative dots scattered */}
      <svg className="absolute bottom-20 left-10 w-20 h-20 text-secondary-500/25 pointer-events-none" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10" cy="10" r="3" fill="currentColor" />
        <circle cx="40" cy="25" r="2" fill="currentColor" />
        <circle cx="70" cy="10" r="4" fill="currentColor" />
        <circle cx="25" cy="50" r="2" fill="currentColor" />
        <circle cx="80" cy="60" r="3" fill="currentColor" />
        <circle cx="50" cy="80" r="2.5" fill="currentColor" />
      </svg>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          Affiliations & Recognition
        </h2>
        <p className="text-neutral-400 text-center mb-12 max-w-2xl mx-auto">
          BMMAA is recognized and affiliated with the following governing bodies
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {affiliations.map((aff, index) => {
            const Icon = aff.icon;
            const delay = (index + 1) * 150;
            return (
              <div
                key={aff.name}
                className={`group bg-neutral-800/80 rounded-xl p-8 text-center border border-neutral-700/50 hover:border-secondary-500/50 hover:shadow-glow transition-all duration-500 animate-slide-up`}
                style={{ animationDelay: `${delay}ms` }}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary-500/10 to-secondary-500/5 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-secondary-400 group-hover:text-secondary-500 transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{aff.name}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{aff.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
