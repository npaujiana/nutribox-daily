import React from 'react';

export const ProductionQuality: React.FC = () => {
  const processes = [
    {
      num: '01',
      title: 'Pemilihan bahan baku segar',
      desc: 'Sayuran segar, beras pilihan, serta daging ayam dan ikan segar dipasok harian dari mitra lokal terpercaya.',
    },
    {
      num: '02',
      title: 'Pencucian dan persiapan higienis',
      desc: 'Seluruh sayuran dicuci bersih dengan air mengalir dan dipersiapkan dengan standar kebersihan dapur yang teratur.',
    },
    {
      num: '03',
      title: 'Pengolahan tanpa penambahan MSG',
      desc: 'Proses memanggang, mengukus, dan menumis menggunakan takaran minyak sehat minimal dan kaldu rempah alami.',
    },
    {
      num: '04',
      title: 'Penimbangan porsi presisi',
      desc: 'Setiap komponen protein, karbohidrat, dan sayuran ditimbang dengan timbangan digital agar porsi sesuai standar.',
    },
    {
      num: '05',
      title: 'Penghitungan nutrisi berbasis resep',
      desc: 'Estimasi kalori dan makronutrisi ditabulasi berdasarkan gramatur bahan dan metode memasak yang telah diuji.',
    },
    {
      num: '06',
      title: 'Kemasan food-grade dan rapi',
      desc: 'Meal box dikemas dalam wadah food-grade dengan saus atau dressing ditaruh terpisah untuk menjaga kesegaran.',
    },
    {
      num: '07',
      title: 'Pemeriksaan akhir dan pengiriman kurir',
      desc: 'Pemeriksaan kesesuaian pesanan sebelum kurir berangkat pukul 10.30 WIB untuk memastikan makanan tiba tepat waktu.',
    },
  ];

  return (
    <section className="py-20 bg-paper-2 border-b border-rule-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & Visual Frame */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-forest tracking-tight leading-tight">
              Dipersiapkan dengan perhatian pada setiap gram bahan.
            </h2>
            <p className="text-sm sm:text-base text-ink-2 leading-relaxed">
              Mulai dari penimbangan bahan hingga pengemasan akhir, setiap langkah dirancang agar Anda menerima makanan yang tidak hanya bernutrisi terukur, tetapi juga terjaga higienitas dan kesegarannya.
            </p>

            <div className="overflow-hidden rounded-xl border border-rule bg-paper shadow-xs">
              <div className="aspect-[4/3] overflow-hidden bg-paper-2">
                <img
                  src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1000&q=80"
                  alt="Ilustrasi persiapan dapur NutriBox Daily"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-3.5 bg-paper text-xs text-ink-2 border-t border-rule-subtle">
                <span className="font-semibold text-forest block">Fasilitas dapur produksi BSD City</span>
                <p className="mt-0.5 text-[11px]">Dapur komersial tertutup khusus produksi katering makan siang harian.</p>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-paper border border-rule text-xs text-ink-2">
              <p className="font-semibold text-forest">Komitmen transparansi operasional:</p>
              <p className="mt-1 leading-relaxed">
                Informasi proses operasional di atas mencerminkan tata laksana dapur kerja kami. Kami mengedepankan keterbukaan dan konsistensi resep tanpa klaim berlebihan.
              </p>
            </div>
          </div>

          {/* Right Column: 7 Step Flow */}
          <div className="lg:col-span-7">
            <div className="space-y-3">
              {processes.map((p) => (
                <div
                  key={p.num}
                  className="flex items-start gap-4 p-4 rounded-lg bg-paper border border-rule hover:border-forest transition-colors text-left"
                >
                  <span className="font-mono text-xs font-bold text-leaf tabular-nums shrink-0 mt-0.5">
                    {p.num}
                  </span>
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
