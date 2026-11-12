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
            Pilihan paket katering sesuai skala acara Anda.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-ink-2 leading-relaxed">
            Dari konsumsi rapat kantor, syukuran keluarga, seminar, hingga pesta pernikahan. Temukan paket terstandar dengan efisiensi budget terbaik.
          </p>
        </div>

        {/* 2 Plan Cards (Nasi Kotak vs Prasmanan Buffet) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {/* Plan 1: Nasi Kotak Acara */}
          <div className="bg-paper border border-rule rounded-xl p-6 sm:p-8 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded-md bg-paper-2 border border-rule text-forest text-xs font-semibold">
                  Praktis & Higienis
                </span>
                <span className="text-xs text-ink-2">Min. 15 Box</span>
              </div>

              <h3 className="font-display font-bold text-2xl text-forest">
                Paket Nasi Kotak Acara
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-ink-2">
                Solusi ringkas untuk konsumsi rapat kerja, seminar kantor, pengajian, dan syukuran keluarga.
              </p>

              {/* Price Range */}
              <div className="my-6 p-4 rounded-lg bg-paper-2 border border-rule-subtle">
                <span className="text-xs text-ink-2 block">Mulai dari:</span>
                <div className="flex items-baseline gap-2 mt-0.5 tabular-nums">
                  <span className="font-display font-extrabold text-3xl text-forest">
                    Rp30.000
                  </span>
                  <span className="text-xs text-ink-2">/ box (Tier volume)</span>
                </div>
                <div className="mt-2 pt-2 border-t border-rule-subtle flex justify-between text-xs text-ink-2 tabular-nums">
                  <span>Ayam Bakar: Rp35.000</span>
                  <span>Liwet Komplit: Rp38.000</span>
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-3 text-xs sm:text-sm text-ink-2">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-fresh shrink-0" />
                  <span>Kemasan bento box bersekat tebal anti-tumpah & rapi</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-fresh shrink-0" />
                  <span>Pilihan menu ayam bakar madu, liwet daun pisang, atau bento</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-fresh shrink-0" />
                  <span>Lengkap sendok, garpu, tusuk gigi & tisu higienis</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-fresh shrink-0" />
                  <span>Garansi pengantaran tiba H-1 jam sebelum acara dimulai</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-fresh shrink-0" />
                  <span>Bebas kustom sambal dan tingkat kepedasan</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4">
              <button
                type="button"
                onClick={() => onNavigate('subscription')}
                className="w-full py-3.5 px-4 rounded-lg border-2 border-forest text-forest font-semibold text-sm hover:bg-forest hover:text-white active:scale-[0.99] disabled:opacity-50 transition-colors text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest cursor-pointer"
              >
                <span>Pilih Paket Nasi Kotak</span>
              </button>
            </div>
          </div>

          {/* Plan 2: Prasmanan Lengkap (Featured) */}
          <div className="bg-forest text-white rounded-xl p-6 sm:p-8 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded-md bg-citrus text-forest text-xs font-semibold">
                  All-In Service
                </span>
                <span className="text-xs text-sage">Min. 50 Pax</span>
              </div>

              <h3 className="font-display font-bold text-2xl text-white">
                Paket Prasmanan Lengkap
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-sage">
                Layanan prasmanan bintang lima lengkap dengan meja buffet, chafing dish pemanas, dan staf pramusaji.
              </p>

              {/* Price Range */}
              <div className="my-6 p-4 rounded-lg bg-paper-elevated/10 border border-white/20">
                <span className="text-xs text-sage block">Mulai dari:</span>
                <div className="flex items-baseline gap-2 mt-0.5 tabular-nums">
                  <span className="font-display font-extrabold text-3xl text-white">
                    Rp68.000
                  </span>
                  <span className="text-xs text-sage">/ pax (Tier volume)</span>
                </div>
                <div className="mt-2 pt-2 border-t border-white/10 flex justify-between text-xs text-sage tabular-nums">
                  <span>Nusantara Gold: Rp75.000</span>
                  <span>Asian Fusion: Rp89.000</span>
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-3 text-xs sm:text-sm text-white">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-leaf shrink-0" />
                  <span>6–7 variasi menu lauk daging, ayam, sup, sayur & hidangan penutup</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-leaf shrink-0" />
                  <span>Set meja buffet bercover rapi dengan dekorasi pemanis</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-leaf shrink-0" />
                  <span>Pemanas roll-top stainless steel mewah (makanan selalu hangat)</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-leaf shrink-0" />
                  <span>Piring keramik, sendok-garpu, dan gelas tamu lengkap</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-leaf shrink-0" />
                  <span>Staf pramusaji berseragam rapi yang standby selama acara</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4">
              <button
                type="button"
                onClick={() => onNavigate('subscription')}
                className="w-full py-3.5 px-4 rounded-lg bg-white hover:bg-white/95 text-forest font-bold text-sm shadow-sm active:scale-[0.99] disabled:opacity-50 transition-colors text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer"
              >
                <span>Pilih Paket Prasmanan</span>
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
            <span className="whitespace-nowrap">Buka kalkulator konfigurator paket acara</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
