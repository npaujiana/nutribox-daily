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
              Tahu persis kandungan nutrisi di setiap porsi.
            </h2>
            <p className="text-sm sm:text-base text-ink-2 leading-relaxed">
              Setiap menu dilengkapi estimasi kalori dan makronutrisi agar Anda dapat mengelola asupan harian dengan penuh kepastian dan ketenangan pikiran.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-fresh shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-ink-2">
                  <strong className="font-semibold text-forest">Penimbangan porsi terstandar:</strong> Protein, karbohidrat, dan sayuran ditimbang dengan timbangan digital presisi di dapur produksi.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-fresh shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-ink-2">
                  <strong className="font-semibold text-forest">Resep bersih dan terbuka:</strong> Tanpa penambahan MSG, pewarna kimia, atau pemanis buatan berlebih.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-fresh shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-ink-2">
                  <strong className="font-semibold text-forest">Mendukung pola makan teratur:</strong> Memudahkan Anda menghitung jatah kalori saat bekerja di kantor maupun di rumah.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Macro Breakdown Card */}
          <div className="lg:col-span-7">
            <div className="bg-paper border border-rule rounded-xl p-6 sm:p-8 shadow-xs">
              {/* Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-rule-subtle mb-6">
                <div>
                  <h3 className="font-display font-bold text-xl text-forest">
                    {example.name}
                  </h3>
                  <p className="text-xs text-ink-2 mt-0.5">
                    Contoh formulasi porsi makan siang
                  </p>
                </div>
                <span className="px-3 py-1 rounded-md bg-paper-2 border border-rule text-forest text-xs font-semibold">
                  Kategori: {example.category}
                </span>
              </div>

              {/* Energy Summary Hero Number */}
              <div className="bg-paper-2 rounded-lg p-5 mb-6 flex flex-col sm:flex-row items-center justify-between gap-4 border border-rule-subtle">
                <div>
                  <span className="text-xs text-ink-2 block">Estimasi total energi per box:</span>
                  <div className="flex items-baseline gap-2 mt-0.5 tabular-nums">
                    <span className="font-display font-black text-4xl sm:text-5xl text-forest">
                      {example.calories}
                    </span>
                    <span className="text-sm font-semibold text-ink-2">kcal per porsi</span>
                  </div>
                </div>
                <div className="text-right w-full sm:w-auto">
                  <span className="inline-block px-3 py-1 rounded-md bg-forest text-white text-xs font-semibold">
                    1 Porsi Siap Santap
                  </span>
                </div>
              </div>

              {/* Macronutrients Progress Bars & Breakdown */}
              <div className="space-y-4 mb-6">
                {/* Protein */}
                <div>
                  <div className="flex justify-between items-center text-xs mb-1">
                    <span className="font-semibold text-forest flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-fresh"></span>
                      Protein
                    </span>
                    <span className="font-bold text-forest tabular-nums">{example.protein} gram</span>
                  </div>
                  <div className="w-full h-2 bg-paper-2 border border-rule-subtle rounded-full overflow-hidden">
                    <div className="h-full bg-fresh rounded-full" style={{ width: '65%' }} />
                  </div>
                  <span className="text-xs text-ink-2">Dada ayam fillet tanpa kulit dan bumbu rempah alami</span>
                </div>

                {/* Carbohydrates */}
                <div>
                  <div className="flex justify-between items-center text-xs mb-1">
                    <span className="font-semibold text-forest flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-citrus"></span>
                      Karbohidrat kompleks
                    </span>
                    <span className="font-bold text-forest tabular-nums">{example.carbohydrates} gram</span>
                  </div>
                  <div className="w-full h-2 bg-paper-2 border border-rule-subtle rounded-full overflow-hidden">
                    <div className="h-full bg-citrus rounded-full" style={{ width: '75%' }} />
                  </div>
                  <span className="text-xs text-ink-2">Nasi beras merah pilihan berindeks glikemik stabil</span>
                </div>

                {/* Fat */}
                <div>
                  <div className="flex justify-between items-center text-xs mb-1">
                    <span className="font-semibold text-forest flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-terracotta"></span>
                      Lemak sehat
                    </span>
                    <span className="font-bold text-forest tabular-nums">{example.fat} gram</span>
                  </div>
                  <div className="w-full h-2 bg-paper-2 border border-rule-subtle rounded-full overflow-hidden">
                    <div className="h-full bg-terracotta rounded-full" style={{ width: '35%' }} />
                  </div>
                  <span className="text-xs text-ink-2">Minyak kelapa sawit/zaitun takaran rendah untuk menumis</span>
                </div>
              </div>

              {/* Informative Disclaimer */}
              <div className="pt-4 border-t border-rule-subtle flex items-start gap-2.5 text-[11px] text-ink-2">
                <Info className="w-4 h-4 text-terracotta shrink-0 mt-0.5" />
                <p>
                  *Angka nutrisi merupakan estimasi berdasarkan takaran resep bahan mentah standar. Nilai aktual dapat sedikit bervariasi pada setiap proses memasak.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
