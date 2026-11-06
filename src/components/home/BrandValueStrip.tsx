import React from 'react';

export const BrandValueStrip: React.FC = () => {
  const values = [
    {
      index: '01',
      title: 'Weekly Menu Rotation',
      description: 'Menu berganti setiap minggu agar rutinitas makan siangmu selalu segar dan variatif.',
    },
    {
      index: '02',
      title: 'Transparent Nutrition',
      description: 'Estimasi kalori, protein, karbohidrat, dan lemak transparan di setiap porsi box.',
    },
    {
      index: '03',
      title: 'No Added MSG',
      description: 'Rasa gurih lezat murni berasal dari kaldu alami, rempah segar, dan teknik memasak terukur.',
    },
    {
      index: '04',
      title: 'On-Time Lunch Delivery',
      description: 'Pengiriman terjadwal tiba pukul 10.30 sampai 11.45 WIB, siap tepat sebelum jam istirahat kantor.',
    },
  ];

  return (
    <section className="bg-paper border-b border-rule-subtle py-10 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((item) => (
            <div
              key={item.index}
              className="border-l-2 border-forest pl-4 text-left"
            >
              <span className="font-mono text-xs font-bold text-leaf tabular-nums block mb-1">
                {item.index}
              </span>
              <h3 className="font-display font-bold text-sm text-forest mb-1.5">
                {item.title}
              </h3>
              <p className="text-xs text-ink-2 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
