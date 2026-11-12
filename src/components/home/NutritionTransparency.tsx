import React from 'react';
import { sampleMenuExample } from '../../data/products';
import { Info, CheckCircle2 } from 'lucide-react';

export const NutritionTransparency: React.FC = () => {
  const example = sampleMenuExample;

  return (
    <section className="py-20 bg-paper-2 border-b border-rule-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & Transparency Philosophy */}
          <div className="lg:col-span-5 space-y-5 text-left">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-forest tracking-tight leading-tight">
              Standar porsi kenyang & dapur higienis teruji.
            </h2>
            <p className="text-sm sm:text-base text-ink-2 leading-relaxed">
              Kami memahami bahwa kepuasan tamu adalah prioritas utama tuan rumah. Setiap paket disiapkan dengan takaran lauk melimpah, sayur segar olahan hari H, dan standar kebersihan tertinggi.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-fresh shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-ink-2">
                  <strong className="font-semibold text-forest">Gramatur lauk utama terstandar:</strong> Potongan ayam, daging, atau ikan ditimbang secara presisi agar seluruh porsi seragam dan mengenyangkan.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-fresh shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-ink-2">
                  <strong className="font-semibold text-forest">Bahan segar 100% Halal:</strong> Bumbu rempah asli nusantara dihaluskan segar setiap pagi tanpa bahan pengawet atau pewarna sintesis.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-fresh shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-ink-2">
                  <strong className="font-semibold text-forest">Kemasan food-grade anti-tumpah:</strong> Bento box bersekat rapi dan wadah sup bersegel menjaga aroma hangat dan kesegaran makanan.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Composition Breakdown Card */}
          <div className="lg:col-span-7">
            <div className="bg-paper border border-rule rounded-xl p-6 sm:p-8 shadow-xs">
              {/* Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-rule-subtle mb-6">
                <div>
                  <h3 className="font-display font-bold text-xl text-forest">
                    {example.name}
                  </h3>
                  <p className="text-xs text-ink-2 mt-0.5">
                    Standar komposisi paket nasi kotak acara & rapat
                  </p>
                </div>
                <span className="px-3 py-1 rounded-md bg-paper-2 border border-rule text-forest text-xs font-semibold">
                  {example.portionInfo}
                </span>
              </div>

              {/* Energy & Satisfaction Summary Hero Number */}
              <div className="bg-paper-2 rounded-lg p-5 mb-6 flex flex-col sm:flex-row items-center justify-between gap-4 border border-rule-subtle">
                <div>
                  <span className="text-xs text-ink-2 block">Standar porsi makan:</span>
                  <div className="flex items-baseline gap-2 mt-0.5">
                    <span className="font-display font-black text-3xl sm:text-4xl text-forest">
                      Porsi Kenyang
                    </span>
                    <span className="text-sm font-semibold text-ink-2">Dewasa</span>
                  </div>
                </div>
                <div className="text-right w-full sm:w-auto">
                  <span className="inline-block px-3 py-1 rounded-md bg-forest text-white text-xs font-semibold">
                    100% Halal & Higienis
                  </span>
                </div>
              </div>

              {/* Composition Elements Progress / List */}
              <div className="space-y-4 mb-6">
                {/* Lauk Utama */}
                <div>
                  <div className="flex justify-between items-center text-xs mb-1">
                    <span className="font-semibold text-forest flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-fresh"></span>
                      Lauk Utama Protein
                    </span>
                    <span className="font-bold text-forest">Ayam Pejantan Pilihan</span>
                  </div>
                  <div className="w-full h-2 bg-paper-2 border border-rule-subtle rounded-full overflow-hidden">
                    <div className="h-full bg-fresh rounded-full" style={{ width: '85%' }} />
                  </div>
                  <span className="text-xs text-ink-2">Ayam bakar madu karamelisasi bumbu rempah kelapa gurih</span>
                </div>

                {/* Karbohidrat */}
                <div>
                  <div className="flex justify-between items-center text-xs mb-1">
                    <span className="font-semibold text-forest flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-citrus"></span>
                      Karbohidrat Pulen
                    </span>
                    <span className="font-bold text-forest">Nasi Putih Pandan Wangi</span>
                  </div>
                  <div className="w-full h-2 bg-paper-2 border border-rule-subtle rounded-full overflow-hidden">
                    <div className="h-full bg-citrus rounded-full" style={{ width: '80%' }} />
                  </div>
                  <span className="text-xs text-ink-2">Dimasak dengan daun pandan alami, pulen hangat dan wangi</span>
                </div>

                {/* Pelengkap & Lalapan */}
                <div>
                  <div className="flex justify-between items-center text-xs mb-1">
                    <span className="font-semibold text-forest flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-terracotta"></span>
                      Lauk Pendamping & Sambal
                    </span>
                    <span className="font-bold text-forest">Tahu Tempe Bacem & Lalapan</span>
                  </div>
                  <div className="w-full h-2 bg-paper-2 border border-rule-subtle rounded-full overflow-hidden">
                    <div className="h-full bg-terracotta rounded-full" style={{ width: '70%' }} />
                  </div>
                  <span className="text-xs text-ink-2">Lengkap kerupuk udang renyah, sendok garpu & tisu higienis</span>
                </div>
              </div>

              {/* Informative Disclaimer */}
              <div className="pt-4 border-t border-rule-subtle flex items-start gap-2.5 text-[11px] text-ink-2">
                <Info className="w-4 h-4 text-terracotta shrink-0 mt-0.5" />
                <p>
                  *Pilihan jenis sayuran, sambal, atau modifikasi lauk dapat dikonsultasikan secara fleksibel kepada tim sales katering kami.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
