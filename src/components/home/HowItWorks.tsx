import React from 'react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Pilih Menu & Format',
      description: 'Pilih jenis sajian yang Anda butuhkan: Nasi Kotak, Prasmanan (Buffet), Snack Box rapat, atau Tumpeng Syukuran.',
    },
    {
      num: '02',
      title: 'Tentukan Jumlah Pax & Tanggal',
      description: 'Tentukan perkiraan jumlah tamu undangan, tanggal acara, serta alamat pengantaran di kawasan BSD City & Jabodetabek.',
    },
    {
      num: '03',
      title: 'Konfirmasi & DP via WhatsApp',
      description: 'Konsultasikan kustomisasi menu dengan tim kami. Cukup DP 50% untuk mengunci slot tanggal acara & jadwal produksi.',
    },
    {
      num: '04',
      title: 'Tiba & Ditata di Lokasi Acara',
      description: 'Makanan dimasak segar di hari H dan diantar tiba H-1 jam sebelum acara (termasuk set-up meja prasmanan & staf standby).',
    },
  ];

  return (
    <section className="py-20 bg-paper border-b border-rule-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header: Leading directly without generic kicker */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-forest tracking-tight">
            Alur pemesanan katering acara dalam 4 langkah.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-ink-2">
            Proses pemesanan yang mudah, jelas, dan transparan untuk memastikan acara Anda terselenggara sempurna.
          </p>
        </div>

        {/* 4 Steps Grid: Clean Architectural Numbered Index */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-paper border border-rule rounded-xl p-6 relative flex flex-col justify-between shadow-xs hover:border-forest transition-colors text-left"
            >
              <div>
                <span className="font-mono text-2xl font-black text-forest tabular-nums block mb-4">
                  {step.num}
                </span>

                <h3 className="font-display font-bold text-base text-forest mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-ink-2 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-rule-subtle flex items-center justify-between text-xs text-leaf font-medium">
                <span>Tahap {idx + 1} dari 4</span>
              </div>
            </div>
          ))}
        </div>

        {/* Note on Pre-order cutoff */}
        <div className="mt-10 p-4 rounded-lg bg-paper-2 border border-rule max-w-2xl mx-auto text-center">
          <p className="text-xs text-ink-2">
            <span className="font-bold text-forest">Catatan waktu pemesanan:</span> Nasi Kotak & Snack Box minimal dipesan{' '}
            <span className="font-semibold text-forest">H-1 (maks. 17.00 WIB)</span>. Untuk Prasmanan dan Tumpeng disarankan booking{' '}
            <span className="font-semibold text-forest">H-3 hingga H-7</span> untuk memastikan ketersediaan set pemanas dan staf pramusaji.
          </p>
        </div>
      </div>
    </section>
  );
};
