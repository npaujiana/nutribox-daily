import React from 'react';

export const BrandValueStrip: React.FC = () => {
  const values = [
    {
      index: '01',
      title: 'Cita Rasa Otentik & Lezat',
      description: 'Racikan bumbu rempah pilihan yang kaya rasa, gurih mantap, dan disukai seluruh kalangan tamu undangan.',
    },
    {
      index: '02',
      title: 'Garansi Tepat Waktu H-1 Jam',
      description: 'Pesanan diantar dan tiba 60 menit sebelum jadwal acara dimulai, memberi ketenangan pikiran bagi tuan rumah.',
    },
    {
      index: '03',
      title: '100% Halal & Dapur Higienis',
      description: 'Standar kebersihan ketat dengan kemasan food-grade anti-tumpah, rapi, dan menjaga makanan tetap hangat.',
    },
    {
      index: '04',
      title: 'Layanan Acara Terpadu',
      description: 'Mulai dari Nasi Kotak, Snack Box, Prasmanan lengkap meja pemanas & staf pramusaji, hingga Tumpeng Syukuran.',
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
