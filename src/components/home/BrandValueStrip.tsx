import React from 'react';
import { CalendarRange, Activity, Sparkles, Clock } from 'lucide-react';

export const BrandValueStrip: React.FC = () => {
  const values = [
    {
      icon: CalendarRange,
      title: 'Weekly Menu Rotation',
      description: 'Menu berganti setiap minggu agar rutinitas makan siangmu selalu segar dan variatif.',
    },
    {
      icon: Activity,
      title: 'Transparent Nutrition',
      description: 'Estimasi kalori, protein, karbohidrat, dan lemak transparan di setiap porsi box.',
    },
    {
      icon: Sparkles,
      title: 'No Added MSG',
      description: 'Rasa gurih lezat murni berasal dari kaldu alami, rempah segar, dan teknik memasak terukur.',
    },
    {
      icon: Clock,
      title: 'On-Time Lunch Delivery',
      description: 'Pengiriman terjadwal tiba pukul 10.30 sampai 11.45 WIB, siap tepat sebelum jam istirahat kantor.',
    },
  ];

  return (
    <section className="bg-paper-elevated border-y border-rule-subtle py-8 lg:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {values.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-card-sm bg-paper-2 border border-rule-subtle"
              >
                <div className="w-12 h-12 rounded-card-sm bg-paper-3 flex items-center justify-center text-forest shrink-0">
                  <Icon className="w-6 h-6 text-forest" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm text-forest mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-ink-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
