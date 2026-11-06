import React from 'react';
import { sampleMenuExample } from '../../data/products';
import { Info, CheckCircle2 } from 'lucide-react';

export const NutritionTransparency: React.FC = () => {
  const example = sampleMenuExample;

  return (
    <section className="py-20 bg-paper-2 border-y border-rule-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & Transparency Philosophy */}
          <div className="lg:col-span-5 space-y-5 text-left">
            <span className="text-sm font-medium text-fresh block">
              Standar transparansi nutrisi
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-forest tracking-tight leading-tight">
              Tahu Apa yang Ada di Setiap Porsi.
            </h2>
            <p className="text-sm sm:text-base text-ink-2 leading-relaxed">
              Setiap menu dilengkapi estimasi kalori dan makronutrisi agar kamu dapat mempertimbangkan pilihan makan siang dengan lebih mudah dan yakin.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-fresh shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-ink">
                  <strong className="font-semibold text-forest">Penimbangan porsi terstandar:</strong> Protein, karbohidrat, dan sayuran ditimbang dengan timbangan digital presisi di dapur produksi.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-fresh shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-ink">
                  <strong className="font-semibold text-forest">Resep bersih dan terbuka:</strong> Tanpa penambahan MSG, pewarna kimia, atau pemanis buatan berlebih.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-fresh shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-ink">
                  <strong className="font-semibold text-forest">Mendukung pola makan terukur:</strong> Memudahkan Anda menghitung jatah kalori harian saat bekerja di kantor maupun di rumah.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Macro Breakdown Card */}
          <div className="lg:col-span-7">
            <div className="bg-paper-elevated rounded-card p-6 sm:p-8 shadow-xl relative overflow-hidden">
              {/* Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-rule-subtle mb-6">
                <div>
                  <span className="text-xs font-medium text-fresh block">
                    Contoh formulasi menu
                  </span>
                  <h3 className="font-display font-bold text-xl text-forest">
                    {example.name}
                  </h3>
                </div>
                <span className="px-3 py-1 rounded-pill bg-paper-3 text-forest text-xs font-medium">
                  Kategori: {example.category}
                </span>
              </div>

              {/* Energy Summary Hero Number */}
              <div className="bg-paper-2 rounded-card-sm p-5 mb-6 flex flex-col sm:flex-row items-center justify-between gap-4 border border-rule-subtle">
                <div>
                  <span className="text-xs text-ink-2 block">Estimasi total energi per box:</span>
                  <div className="flex items-baseline gap-2 mt-0.5">
                    <span className="font-display font-extrabold text-4xl sm:text-5xl text-forest num">
                      {example.calories}
                    </span>
                    <span className="text-base font-semibold text-ink-2">kcal per porsi</span>
                  </div>
                </div>
                <div className="text-right w-full sm:w-auto">
                  <span className="inline-block px-3 py-1 rounded-card-sm bg-forest text-accent-ink text-xs font-semibold">
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
                    <span className="font-bold text-forest num">{example.protein} gram</span>
                  </div>
                  <div className="w-full h-2.5 bg-paper-3 rounded-pill overflow-hidden">
                    <div className="h-full bg-fresh rounded-pill" style={{ width: '65%' }} />
                  </div>
                  <span className="text-xs text-ink-2">Dada ayam fillet tanpa kulit dan bumbu herbal</span>
                </div>

                {/* Carbohydrates */}
                <div>
                  <div className="flex justify-between items-center text-xs mb-1">
                    <span className="font-semibold text-forest flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-citrus"></span>
                      Karbohidrat kompleks
                    </span>
                    <span className="font-bold text-forest num">{example.carbohydrates} gram</span>
                  </div>
                  <div className="w-full h-2.5 bg-citrus-soft rounded-pill overflow-hidden">
                    <div className="h-full bg-citrus rounded-pill" style={{ width: '75%' }} />
                  </div>
                  <span className="text-xs text-ink-2">Nasi beras merah pilihan berindeks glikemik rendah</span>
                </div>

                {/* Fat */}
                <div>
                  <div className="flex justify-between items-center text-xs mb-1">
                    <span className="font-semibold text-forest flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-terracotta"></span>
                      Lemak sehat
                    </span>
                    <span className="font-bold text-forest num">{example.fat} gram</span>
                  </div>
                  <div className="w-full h-2.5 bg-terracotta-soft rounded-pill overflow-hidden">
                    <div className="h-full bg-terracotta rounded-pill" style={{ width: '28%' }} />
                  </div>
                  <span className="text-xs text-ink-2">Minyak zaitun ringan dan lemak tak jenuh alami</span>
                </div>
              </div>

              {/* Composition List */}
              <div className="p-4 rounded-card-sm bg-paper-2 border border-rule-subtle mb-4">
                <span className="text-xs font-semibold text-forest block mb-2">
                  Komposisi bahan makanan (sample recipe):
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {example.composition.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-card-sm bg-paper-elevated border border-rule-subtle text-ink text-xs"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Disclaimer Footnote */}
              <div className="flex items-start gap-2 text-xs text-ink-2 bg-paper p-3 rounded-card-sm border border-rule-subtle">
                <Info className="w-4 h-4 text-terracotta shrink-0 mt-0.5" />
                <p>
                  {example.note} Contoh menu di atas menggambarkan proporsi standar dan bukan jaminan ketersediaan permanen tanpa rotasi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
