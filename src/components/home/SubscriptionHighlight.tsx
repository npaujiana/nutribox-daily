import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

interface SubscriptionHighlightProps {
  onNavigate: (tabId: string) => void;
}

export const SubscriptionHighlight: React.FC<SubscriptionHighlightProps> = ({ onNavigate }) => {
  return (
    <section className="py-20 bg-paper-2 border-b border-rule-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header: Leading directly without generic kicker */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-forest tracking-tight">
            Lebih teratur dengan paket langganan mingguan dan bulanan.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-ink-2 leading-relaxed">
            Bangun kebiasaan makan siang bergizi secara konsisten tanpa repot memesan setiap pagi. Pilih durasi yang sesuai ritme kerja Anda.
          </p>
        </div>

        {/* 2 Plan Cards (Weekly Fit Plan & Monthly Fit Plan) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {/* Plan 1: Weekly Fit Plan */}
          <div className="bg-paper border border-rule rounded-xl p-6 sm:p-8 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded-md bg-paper-2 border border-rule text-forest text-xs font-semibold">
                  Paket 5 hari kerja
                </span>
                <span className="text-xs text-ink-2">Senin sampai Jumat</span>
              </div>

              <h3 className="font-display font-bold text-2xl text-forest">
                Weekly Fit Plan
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-ink-2">
                Solusi praktis 5 hari makan siang kerja dengan menu berbeda setiap hari.
              </p>

              {/* Price Range */}
              <div className="my-6 p-4 rounded-lg bg-paper-2 border border-rule-subtle">
                <span className="text-xs text-ink-2 block">Mulai dari:</span>
                <div className="flex items-baseline gap-2 mt-0.5 tabular-nums">
                  <span className="font-display font-extrabold text-3xl text-forest">
                    Rp235.000
                  </span>
                  <span className="text-xs text-ink-2">/ 5 box (Balance)</span>
                </div>
                <div className="mt-2 pt-2 border-t border-rule-subtle flex justify-between text-xs text-ink-2 tabular-nums">
                  <span>Lean Plan: Rp250.000</span>
                  <span>Protein Plan: Rp295.000</span>
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-3 text-xs sm:text-sm text-ink-2">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-fresh shrink-0" />
                  <span>5 porsi makan siang segar (1 porsi per hari kerja)</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-fresh shrink-0" />
                  <span>5 variasi resep menu berbeda setiap harinya</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-fresh shrink-0" />
                  <span>Informasi kalori dan makronutrisi lengkap di setiap kemasan</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-fresh shrink-0" />
                  <span>Jadwal pengiriman teratur tiba 10.30 sampai 11.45 WIB</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-fresh shrink-0" />
                  <span>Pilihan kategori Balance, Lean, Protein, atau Active</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4">
              <button
                type="button"
                onClick={() => onNavigate('subscription')}
                className="w-full py-3.5 px-4 rounded-lg border-2 border-forest text-forest font-semibold text-sm hover:bg-forest hover:text-white active:scale-[0.99] disabled:opacity-50 transition-colors text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest cursor-pointer"
              >
                <span>Pilih Weekly Fit Plan</span>
              </button>
            </div>
          </div>

          {/* Plan 2: Monthly Fit Plan (Featured) */}
          <div className="bg-forest text-white rounded-xl p-6 sm:p-8 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded-md bg-citrus text-forest text-xs font-semibold">
                  Paket 20 hari kerja
                </span>
                <span className="text-xs text-sage">1 Bulan penuh</span>
              </div>

              <h3 className="font-display font-bold text-2xl text-white">
                Monthly Fit Plan
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-sage">
                Rekomendasi terbaik untuk konsistensi nutrisi sebulan penuh dengan fleksibilitas jadwal.
              </p>

              {/* Price Range */}
              <div className="my-6 p-4 rounded-lg bg-paper-elevated/10 border border-white/20">
                <span className="text-xs text-sage block">Mulai dari:</span>
                <div className="flex items-baseline gap-2 mt-0.5 tabular-nums">
                  <span className="font-display font-extrabold text-3xl text-white">
                    Rp920.000
                  </span>
                  <span className="text-xs text-sage">/ 20 box (Balance)</span>
                </div>
                <div className="mt-2 pt-2 border-t border-white/10 flex justify-between text-xs text-sage tabular-nums">
                  <span>Lean Plan: Rp980.000</span>
                  <span>Protein Plan: Rp1.160.000</span>
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-3 text-xs sm:text-sm text-white">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-leaf shrink-0" />
                  <span>20 porsi makan siang bergizi selama 4 minggu kerja</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-leaf shrink-0" />
                  <span>Rotasi penuh menu nusantara, Asia, dan western grill</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-leaf shrink-0" />
                  <span>Fleksibilitas pause jadwal (konfirmasi H-1 pukul 17.00 WIB)</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-leaf shrink-0" />
                  <span>Prioritas slot pengiriman kurir pagi (10.30 sampai 11.45 WIB)</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-leaf shrink-0" />
                  <span>Dukungan konsultasi menu dan preferensi lauk via CS</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4">
              <button
                type="button"
                onClick={() => onNavigate('subscription')}
                className="w-full py-3.5 px-4 rounded-lg bg-leaf hover:bg-leaf/90 text-forest font-bold text-sm shadow-xs active:scale-[0.99] disabled:opacity-50 transition-colors text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-citrus cursor-pointer"
              >
                <span>Pilih Monthly Fit Plan</span>
              </button>
            </div>
          </div>
        </div>

        {/* Comparison CTA Strip */}
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={() => onNavigate('subscription')}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-forest hover:text-fresh active:scale-[0.99] disabled:opacity-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest cursor-pointer"
          >
            <span className="whitespace-nowrap">Bandingkan rincian paket langganan</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
