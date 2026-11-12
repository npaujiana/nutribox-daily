import React from 'react';

export const ProductionQuality: React.FC = () => {
  const processes = [
    {
      num: '01',
      title: 'Bahan baku segar bersertifikasi Halal',
      desc: 'Daging sapi, ayam segar, dan sayuran dipasok harian dari distributor resmi dengan jaminan 100% Halal.',
    },
    {
      num: '02',
      title: 'Pemisahan area pengolahan dapur',
      desc: 'Area potong daging, sayuran, dan pastry dipisahkan secara ketat untuk mencegah kontaminasi silang dan menjaga higienitas.',
    },
    {
      num: '03',
      title: 'Racikan bumbu rempah alami',
      desc: 'Menggunakan bumbu rempah tradisional segar yang dihaluskan langsung di hari H acara tanpa bahan pengawet sintetik.',
    },
    {
      num: '04',
      title: 'Quality control rasa & gramatur',
      desc: 'Setiap menu melewati uji rasa (taste check) oleh Head Chef dan penimbangan gramatur lauk utama agar porsi seragam.',
    },
    {
      num: '05',
      title: 'Kemasan food-grade anti-tumpah',
      desc: 'Bento box bersekat tebal menjaga lauk tidak saling bercampur, serta wadah sup bersegel rapat anti-tumpah.',
    },
    {
      num: '06',
      title: 'Pengantaran khusus dengan thermal bag',
      desc: 'Kendaraan logistik dilengkapi boks insulasi suhu agar makanan tiba dalam kondisi hangat, wangi, dan segar.',
    },
    {
      num: '07',
      title: 'Tim dekorasi & pramusaji standby',
      desc: 'Untuk paket prasmanan, tim kami tiba H-2 jam untuk menata meja buffet, menyalakan pemanas, dan siap melayani tamu.',
    },
  ];

  return (
    <section className="py-20 bg-paper-2 border-b border-rule-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & Visual Frame */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-forest tracking-tight leading-tight">
              Kapasitas dapur besar dengan standar higienis tinggi.
            </h2>
            <p className="text-sm sm:text-base text-ink-2 leading-relaxed">
              Dapur pusat kami dirancang untuk memproduksi ratusan hingga ribuan porsi konsumsi acara per hari tanpa mengurangi konsistensi rasa lezat dan kebersihan setiap hidangan.
            </p>

            <div className="overflow-hidden rounded-xl border border-rule bg-paper shadow-xs">
              <div className="aspect-[4/3] overflow-hidden bg-paper-2">
                <img
                  src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1000&q=80"
                  alt="Fasilitas dapur katering acara BSD City"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-3.5 bg-paper text-xs text-ink-2 border-t border-rule-subtle">
                <span className="font-semibold text-forest block">Central Production Kitchen BSD City</span>
                <p className="mt-0.5 text-[11px]">Fasilitas dapur katering komersial berkapasitas 1.500+ porsi per hari.</p>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-paper border border-rule text-xs text-ink-2">
              <p className="font-semibold text-forest">Jaminan kepuasan acara Anda:</p>
              <p className="mt-1 leading-relaxed">
                Kami berkomitmen memberikan ketepatan waktu pengiriman, porsi yang mengenyangkan, serta kelezatan bumbu yang membuat tamu acara Anda berkesan.
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
