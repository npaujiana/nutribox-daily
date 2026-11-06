import React from 'react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Pilih meal box',
      description: 'Pilih kategori makanan yang sesuai kebutuhan nutrisimu: Daily Balance, Lean, Power Protein, atau Active Meal.',
    },
    {
      num: '02',
      title: 'Tentukan durasi',
      description: 'Pilih durasi yang kamu inginkan: pesan harian (single box), paket mingguan (5 hari), atau paket bulanan (20 hari).',
    },
    {
      num: '03',
      title: 'Konfirmasi via WhatsApp',
      description: 'Kirim rincian pesananmu ke WhatsApp. Tim CS NutriBox Daily mengonfirmasi ketersediaan menu, ongkir, dan verifikasi transfer.',
    },
    {
      num: '04',
      title: 'Siap dinikmati di meja',
      description: 'Makanan dimasak segar di pagi hari dan dikirimkan tiba pukul 10.30 sampai 11.45 WIB, siap dinikmati sebelum jam istirahat.',
    },
  ];

  return (
    <section className="py-20 bg-paper border-b border-rule-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header: Leading directly without generic kicker */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-forest tracking-tight">
            Alur pemesanan praktis dalam 4 langkah.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-ink-2">
            Proses pemesanan yang sederhana dan transparan, dirancang untuk menghemat waktu Anda.
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
            <span className="font-bold text-forest">Catatan batas pre-order:</span> Konfirmasi pemesanan untuk pengiriman hari kerja berikutnya ditutup setiap{' '}
            <span className="font-semibold text-forest">pukul 17.00 WIB (H-1)</span> agar penimbangan bahan baku segar dapat dialokasikan tepat waktu.
          </p>
        </div>
      </div>
    </section>
  );
};
