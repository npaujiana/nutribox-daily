import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

interface SubscriptionHighlightProps {
  onNavigate: (tabId: string) => void;
}

export const SubscriptionHighlight: React.FC<SubscriptionHighlightProps> = ({ onNavigate }) => {
  return (
    <section className="py-20 bg-paper-elevated">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm font-medium text-fresh mb-1.5 block">
            Layanan berlangganan katering
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-forest tracking-tight">
            Lebih Teratur dengan Paket Meal Plan.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-ink-2 leading-relaxed">
            Bangun kebiasaan makan siang bergizi secara konsisten tanpa repot memesan setiap pagi. Pilih durasi yang sesuai ritme kerja Anda.
          </p>
        </div>

        {/* 2 Plan Cards (Weekly Fit Plan & Monthly Fit Plan) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Plan 1: Weekly Fit Plan */}
          <div className="bg-paper-2 border border-rule-subtle rounded-card p-6 sm:p-8 flex flex-col justify-between hover:border-fresh transition-colors">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-pill bg-paper-3 text-forest text-xs font-medium">
                  Paket 5 hari kerja
                </span>
                <span className="text-xs font-medium text-ink-2">Senin sampai Jumat</span>
              </div>

              <h3 className="font-display font-bold text-2xl text-forest">
                Weekly Fit Plan
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-ink-2">
                Solusi praktis 5 hari makan siang kerja dengan menu berbeda setiap hari.
              </p>

              {/* Price Range */}
              <div className="my-6 p-4 rounded-card-sm bg-paper-elevated border border-rule-subtle">
                <span className="text-xs text-ink-2 block">Mulai dari:</span>
                <div className="flex items-baseline gap-2 mt-0.5">
                  <span className="font-display font-extrabold text-3xl text-forest num">
                    Rp235.000
                  </span>
                  <span className="text-xs text-ink-2">/ 5 box (Balance)</span>
                </div>
                <div className="mt-2 pt-2 border-t border-rule-subtle flex justify-between text-xs text-ink-2">
                  <span>Lean Plan: Rp250.000</span>
                  <span>Protein Plan: Rp295.000</span>
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-3 text-xs sm:text-sm text-ink">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-fresh shrink-0" />
                  <span>5 porsi makan siang segar (1 porsi per hari)</span>
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
                onClick={() => onNavigate('subscription')}
                className="w-full py-3.5 px-4 rounded-card-sm border-2 border-forest text-forest font-semibold text-sm hover:bg-forest hover:text-accent-ink transition-colors text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
              >
                Pilih Weekly Fit Plan
              </button>
            </div>
          </div>

          {/* Plan 2: Monthly Fit Plan (Featured) */}
          <div className="bg-forest text-accent-ink rounded-card p-6 sm:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-pill bg-citrus text-forest text-xs font-semibold">
                  Paket 20 hari kerja
                </span>
                <span className="text-xs font-medium text-sage">4 minggu penuh</span>
              </div>

              <h3 className="font-display font-bold text-2xl text-accent-ink">
                Monthly Fit Plan
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-sage">
                Komitmen gaya hidup sehat jangka panjang dengan rotasi menu mingguan dan penjadwalan fleksibel.
              </p>

              {/* Price Range */}
              <div className="my-6 p-4 rounded-card-sm bg-forest-hover border border-rule-subtle">
                <span className="text-xs text-sage block">Mulai dari:</span>
                <div className="flex items-baseline gap-2 mt-0.5">
                  <span className="font-display font-extrabold text-3xl text-accent-ink num">
                    Rp920.000
                  </span>
                  <span className="text-xs text-sage">/ 20 box (Balance)</span>
                </div>
                <div className="mt-2 pt-2 border-t border-rule-subtle flex justify-between text-xs text-sage">
                  <span>Lean Plan: Rp980.000</span>
                  <span>Protein Plan: Rp1.160.000</span>
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-3 text-xs sm:text-sm text-mint">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-fresh shrink-0" />
                  <span>20 porsi makan siang lengkap selama sebulan</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-fresh shrink-0" />
                  <span>Rotasi menu mingguan berganti agar tidak bosan</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-fresh shrink-0" />
                  <span>Kemudahan pause atau reschedule saat dinas luar</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-fresh shrink-0" />
                  <span>Prioritas slot pengantaran kurir jam 10.30 sampai 11.45 WIB</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-fresh shrink-0" />
                  <span>Transparansi kalori konsisten untuk evaluasi bulanan</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 relative z-10">
              <button
                onClick={() => onNavigate('subscription')}
                className="w-full py-3.5 px-4 rounded-card-sm bg-fresh hover:bg-fresh-hover text-forest font-bold text-sm transition-colors shadow-sm text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fresh"
              >
                Pilih Monthly Fit Plan
              </button>
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <button
            onClick={() => onNavigate('subscription')}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-forest hover:text-fresh transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest rounded-sm"
          >
            <span>Bandingkan detail lengkap dan rincian harga paket</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
