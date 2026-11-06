import React from 'react';
import { ShoppingBag, Calendar, MessageSquare, Utensils } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      icon: ShoppingBag,
      title: 'Pilih Meal Box',
      description: 'Pilih kategori makanan yang sesuai dengan kebutuhan nutrisimu: Daily Balance, Lean, Power Protein, atau Active Meal.',
    },
    {
      num: '02',
      icon: Calendar,
      title: 'Tentukan Paket',
      description: 'Pilih durasi yang kamu inginkan: pesan harian (single box), paket mingguan (5 hari), atau paket bulanan (20 hari).',
    },
    {
      num: '03',
      icon: MessageSquare,
      title: 'Konfirmasi via WhatsApp',
      description: 'Kirim rincian pesananmu ke WhatsApp. Tim CS NutriBox Daily akan mengonfirmasi menu, biaya pengiriman, dan verifikasi pembayaran.',
    },
    {
      num: '04',
      icon: Utensils,
      title: 'Nikmati Makan Siangmu',
      description: 'Makanan dimasak segar di pagi hari dan dikirimkan tiba pukul 10.30 sampai 11.45 WIB, siap kamu nikmati tepat pada waktunya.',
    },
  ];

  return (
    <section className="py-20 bg-paper-2 border-t border-rule-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-medium text-fresh mb-1.5 block">
            Alur pemesanan katering
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-forest tracking-tight">
            Pesan dengan Mudah, Nikmati dengan Praktis.
          </h2>
          <p className="mt-3 text-sm text-ink-2">
            Proses pemesanan yang sederhana dan transparan, dirancang untuk menghemat waktu Anda.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-paper-elevated border border-rule-subtle rounded-card p-6 relative hover:border-fresh transition-colors flex flex-col justify-between shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-display font-black text-3xl text-sage num">
                      {step.num}
                    </span>
                    <div className="w-12 h-12 rounded-card-sm bg-paper-3 flex items-center justify-center text-forest">
                      <Icon className="w-6 h-6 text-forest" />
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-lg text-forest mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-ink-2 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-rule-subtle flex items-center justify-between text-xs text-fresh font-medium">
                  <span>Langkah {idx + 1} dari 4</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on Pre-order cutoff */}
        <div className="mt-10 p-4 rounded-card-sm bg-paper border border-rule-subtle max-w-3xl mx-auto text-center">
          <p className="text-xs text-ink">
            <span className="font-bold text-forest">Catatan pre-order:</span> Batas konfirmasi pemesanan untuk pengiriman hari kerja berikutnya adalah{' '}
            <span className="font-semibold text-forest">pukul 17.00 WIB (H-1)</span> agar bahan baku segar dapat dialokasikan tepat waktu.
          </p>
        </div>
      </div>
    </section>
  );
};
