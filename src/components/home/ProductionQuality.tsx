import React from 'react';

export const ProductionQuality: React.FC = () => {
  const processes = [
    {
      num: '01',
      title: 'Pemilihan Bahan Baku',
      desc: 'Bahan sayuran segar, beras pilihan, serta daging ayam dan ikan segar dipasok secara berkala dari mitra lokal terpercaya.',
    },
    {
      num: '02',
      title: 'Pencucian & Persiapan Higienis',
      desc: 'Seluruh sayuran dicuci bersih dengan air mengalir dan dipersiapkan dengan standar kebersihan dapur yang teratur.',
    },
    {
      num: '03',
      title: 'Pengolahan Tanpa Penambahan MSG',
      desc: 'Proses memanggang, mengukus, dan menumis menggunakan takaran minyak sehat minimal dan kaldu rempah alami.',
    },
    {
      num: '04',
      title: 'Penimbangan Porsi Presisi',
      desc: 'Setiap komponen protein, karbohidrat, dan sayuran ditimbang dengan timbangan digital agar porsi sesuai standar.',
    },
    {
      num: '05',
      title: 'Penghitungan Nutrisi Berdasarkan Resep',
      desc: 'Estimasi kalori dan makronutrisi ditabulasi berdasarkan gramatur bahan dan metode memasak yang telah diuji.',
    },
    {
      num: '06',
      title: 'Pengemasan Food-Grade & Rapi',
      desc: 'Meal box dikemas dalam wadah food-grade kedap udara dengan saus atau dressing ditaruh terpisah untuk menjaga kesegaran.',
    },
    {
      num: '07',
      title: 'Quality Check & Pengiriman Terjadwal',
      desc: 'Pemeriksaan akhir kesesuaian pesanan sebelum kurir berangkat pukul 10.30 WIB untuk memastikan makanan tiba tepat waktu.',
    },
  ];

  return (
    <section className="py-20 bg-paper-elevated">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & Visual */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-sm font-medium text-fresh block">
              Dapur produksi dan kualitas
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-forest tracking-tight leading-tight">
              Dipersiapkan dengan Perhatian pada Setiap Detail.
            </h2>
            <p className="text-sm text-ink-2 leading-relaxed">
              Mulai dari penimbangan bahan hingga pengemasan akhir, setiap langkah dirancang agar Anda menerima makanan yang tidak hanya bernutrisi terukur, tetapi juga terjaga higienitas dan kesegarannya.
            </p>

            <div className="relative rounded-card overflow-hidden shadow-md aspect-[4/3] bg-paper-2">
              <img
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1000&q=80"
                alt="Kitchen Meal Prep Illustration"
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-accent-ink">
                <span className="text-xs font-semibold block text-sage">
                  Fasilitas dapur produksi BSD City
                </span>
                <p className="text-xs text-mint mt-0.5">
                  Meal preparation berstandar dapur komersial tertutup khusus katering pengiriman.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-card-sm bg-paper-2 border border-rule-subtle text-xs text-ink-2 space-y-1">
              <p className="font-semibold text-forest">Komitmen transparansi operasional:</p>
              <p>
                Informasi proses operasional di atas mencerminkan tata laksana dapur kerja kami. Kami mengedepankan keterbukaan dan konsistensi resep tanpa klaim berlebihan.
              </p>
            </div>
          </div>

          {/* Right Column: 7 Step Flow */}
          <div className="lg:col-span-7">
            <div className="space-y-3.5">
              {processes.map((p) => (
                <div
                  key={p.num}
                  className="flex items-start gap-4 p-4 rounded-card-sm bg-paper-2 border border-rule-subtle hover:border-fresh transition-colors"
                >
                  <div className="w-9 h-9 rounded-card-sm bg-paper-3 text-forest font-display font-bold text-xs flex items-center justify-center shrink-0 num">
                    {p.num}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-sm text-forest">
                      {p.title}
                    </h3>
                    <p className="text-xs text-ink-2 mt-0.5 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
