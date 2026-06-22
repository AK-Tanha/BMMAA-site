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
    <section className="py-16 md:py-24 px-4 md:px-8 bg-neutral-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4 font-heading">
          Affiliations & Recognition
        </h2>
        <p className="text-neutral-400 text-center mb-12 max-w-2xl mx-auto">
          BMMAA is recognized and affiliated with the following governing bodies
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {affiliations.map((aff) => {
            const Icon = aff.icon;
            return (
              <div
                key={aff.name}
                className="bg-neutral-800 rounded-xl p-8 text-center border border-neutral-700 hover:border-primary-500 transition-colors"
              >
                <div className="w-16 h-16 rounded-full bg-primary-500/10 flex items-center justify-center mx-auto mb-5">
                  <Icon className="w-8 h-8 text-primary-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{aff.name}</h3>
                <p className="text-neutral-400 text-sm">{aff.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
