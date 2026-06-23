import { Shield, Users, Calendar } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Governing Body',
    description: 'Officially registered under Bangladesh Martial Arts Confederation and National Sports Council since 2016.',
    href: '/#about',
  },
  {
    icon: Users,
    title: 'Executive Board',
    description: 'Led by experienced professionals dedicated to growing amateur MMA across Bangladesh.',
    href: '/#board',
  },
  {
    icon: Calendar,
    title: 'Events & Programs',
    description: 'Organizing events, training programs, and championships for athletes nationwide.',
    href: '/#contact',
  },
];

export default function FeatureCards() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const delay = (index + 1) * 100;
            return (
              <a
                key={feature.title}
                href={feature.href}
                className={`group bg-white rounded-xl p-8 shadow-card border border-neutral-100 hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 animate-slide-up`}
                style={{ animationDelay: `${delay}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center mb-5 group-hover:from-primary-100 group-hover:to-primary-200 transition-all duration-300">
                  <Icon className="w-6 h-6 text-primary-500 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-primary-500 transition-colors duration-300">{feature.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{feature.description}</p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
